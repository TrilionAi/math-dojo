import { useEffect, useRef, useState } from "react";
import type { AttemptRecord, Problem, SessionSummary, Stripe } from "../types";
import { evaluateSession } from "../engine/progress";
import { isMuted, playCorrect, playIncorrect, playPageComplete, playStreakMilestone, setMuted } from "../engine/sound";
import { NumPad } from "../components/NumPad";
import { ProgressBar } from "../components/ProgressBar";
import { GroupDiagram } from "../components/GroupDiagram";
import { NumberLineDiagram } from "../components/NumberLineDiagram";
import { FractionDiagram } from "../components/FractionDiagram";
import { VariableBoxDiagram } from "../components/VariableBoxDiagram";
import { BalanceScaleDiagram } from "../components/BalanceScaleDiagram";
import { FunctionMachineDiagram } from "../components/FunctionMachineDiagram";
import { SlopeStaircaseDiagram } from "../components/SlopeStaircaseDiagram";
import { ParabolaDiagram } from "../components/ParabolaDiagram";
import { FactorAreaDiagram } from "../components/FactorAreaDiagram";
import { AreaBarsDiagram } from "../components/AreaBarsDiagram";
import { RightTriangleDiagram } from "../components/RightTriangleDiagram";
import { useLocale } from "../i18n/LocaleContext";
import { UI_STRINGS } from "../i18n/ui";
import styles from "./DrillScreen.module.css";

interface DrillScreenProps {
  stripe: Stripe;
  /** Checkpoint: pages already completed in earlier sittings — the drill resumes here. */
  initialPagesDone: number;
  /** A page just finished (met the bar or not) — the app persists the checkpoint. */
  onPageResult: (stripe: Stripe, pagePassed: boolean) => void;
  onComplete: (summary: SessionSummary) => void;
  onExit: () => void;
  onSendToBoard: (text: string) => void;
}

type Feedback = "correct" | "incorrect" | null;
type ActiveField = "primary" | "secondary";

/** What the between-pages card shows: a completed page, or one to redo. */
type PageEnd =
  | { kind: "passed"; page: number }
  | { kind: "failed"; accuracyPct: number; avgTimeSec: number; slow: boolean };

export function DrillScreen({
  stripe,
  initialPagesDone,
  onPageResult,
  onComplete,
  onExit,
  onSendToBoard,
}: DrillScreenProps) {
  const { locale } = useLocale();
  const t = UI_STRINGS[locale];
  const { problemsPerPage, pagesToMaster } = stripe.mastery;
  const [pagesDone, setPagesDone] = useState(initialPagesDone);
  const [queue, setQueue] = useState<Problem[]>(() => stripe.generate(problemsPerPage));
  const [input, setInput] = useState("");
  const [secondaryInput, setSecondaryInput] = useState("");
  const [isNegative, setIsNegative] = useState(false);
  const [isSecondaryNegative, setIsSecondaryNegative] = useState(false);
  const [activeField, setActiveField] = useState<ActiveField>("primary");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [solvedCount, setSolvedCount] = useState(0);
  const [pageEnd, setPageEnd] = useState<PageEnd | null>(null);
  const [streak, setStreak] = useState(0);
  const [muted, setMutedFlag] = useState(() => isMuted());

  /** This page's attempt records — reset when a fresh page starts. */
  const attemptsRef = useRef<Map<string, AttemptRecord>>(new Map());
  /** Every attempt of this sitting, across pages — feeds the final summary. */
  const sittingAttemptsRef = useRef<AttemptRecord[]>([]);
  const firstShownAtRef = useRef<Map<string, number>>(new Map());
  /** Accumulated ms spent on error-pauses per problem — subtracted from the
   * clock, so reading the correct answer never costs speed score. */
  const pausedMsRef = useRef<Map<string, number>>(new Map());
  const errorPauseStartRef = useRef<number | null>(null);
  const lockRef = useRef(false);

  const current: Problem | undefined = queue[0];

  function seedPage(problems: Problem[]) {
    attemptsRef.current = new Map();
    firstShownAtRef.current = new Map();
    pausedMsRef.current = new Map();
    problems.forEach((p) => {
      attemptsRef.current.set(p.id, {
        problem: p,
        firstTryCorrect: false,
        timeToFirstCorrectMs: 0,
        mistakeCount: 0,
      });
    });
  }

  // seed attempt records for the first page
  useEffect(() => {
    seedPage(queue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // stamp the moment each problem is first shown, for speed scoring
  useEffect(() => {
    if (!current) return;
    if (!firstShownAtRef.current.has(current.id)) {
      firstShownAtRef.current.set(current.id, Date.now());
    }
  }, [current?.id]);

  // page finished once every one of its problems has been answered correctly
  useEffect(() => {
    if (queue.length > 0 || attemptsRef.current.size !== problemsPerPage) return;
    const attempts = Array.from(attemptsRef.current.values());
    sittingAttemptsRef.current.push(...attempts);
    const correctCount = attempts.filter((a) => a.firstTryCorrect).length;
    const accuracy = correctCount / problemsPerPage;
    const avgTimeSec = attempts.reduce((sum, a) => sum + a.timeToFirstCorrectMs, 0) / problemsPerPage / 1000;
    const pagePassed = evaluateSession(stripe, accuracy, avgTimeSec);
    onPageResult(stripe, pagePassed);

    if (pagePassed) {
      const done = pagesDone + 1;
      setPagesDone(done);
      if (done >= pagesToMaster) {
        const all = sittingAttemptsRef.current;
        const sittingCorrect = all.filter((a) => a.firstTryCorrect).length;
        const sittingAccuracy = all.length > 0 ? sittingCorrect / all.length : 1;
        const sittingAvg =
          all.length > 0 ? all.reduce((sum, a) => sum + a.timeToFirstCorrectMs, 0) / all.length / 1000 : 0;
        onComplete({ stripe, accuracy: sittingAccuracy, avgTimeSec: sittingAvg, passed: true, attempts: all });
        return;
      }
      setPageEnd({ kind: "passed", page: done });
    } else {
      setStreak(0);
      setPageEnd({
        kind: "failed",
        accuracyPct: Math.round(accuracy * 100),
        avgTimeSec,
        slow: accuracy >= stripe.mastery.passAccuracy,
      });
    }
    lockRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queue.length]);

  const hasSecondary = current?.secondaryAnswer !== undefined;
  const isFraction = current?.secondaryFormat === "fraction";
  const allowsNegative = current?.allowNegative === true;

  function handleDigit(digit: string) {
    if (feedback || lockRef.current) return;
    if (hasSecondary && activeField === "secondary") {
      setSecondaryInput((v) => (v.length < 6 ? v + digit : v));
    } else {
      setInput((v) => (v.length < 6 ? v + digit : v));
    }
  }

  function handleBackspace() {
    if (feedback || lockRef.current) return;
    if (hasSecondary && activeField === "secondary") {
      setSecondaryInput((v) => v.slice(0, -1));
    } else {
      setInput((v) => v.slice(0, -1));
    }
  }

  function handleToggleSign() {
    if (feedback || lockRef.current) return;
    // the sign belongs to whichever answer box is active — pair answers like a
    // circle's center can need a negative second coordinate too
    if (hasSecondary && activeField === "secondary") {
      setIsSecondaryNegative((v) => !v);
    } else {
      setIsNegative((v) => !v);
    }
  }

  function handleToggleMute() {
    const next = !muted;
    setMutedFlag(next);
    setMuted(next);
  }

  function resetInputs() {
    setInput("");
    setSecondaryInput("");
    setIsNegative(false);
    setIsSecondaryNegative(false);
    setActiveField("primary");
    setFeedback(null);
  }

  function handleSubmit() {
    if (!current || lockRef.current) return;
    if (input === "" || (hasSecondary && secondaryInput === "")) return;
    lockRef.current = true;
    const numeric = Number((isNegative ? "-" : "") + input);
    const record = attemptsRef.current.get(current.id)!;
    // Fixed-width decimals (e.g. hundredths) require the typed digit count to match,
    // so ".5" can't pass as ".05" — the padding is part of the answer.
    const secondaryNumeric = Number((isSecondaryNegative ? "-" : "") + secondaryInput);
    const secondaryMatches =
      secondaryNumeric === current.secondaryAnswer &&
      (current.secondaryDigits === undefined || secondaryInput.length === current.secondaryDigits);
    const isCorrect = hasSecondary ? numeric === current.answer && secondaryMatches : numeric === current.answer;

    if (isCorrect) {
      if (record.mistakeCount === 0) record.firstTryCorrect = true;
      const shownAt = firstShownAtRef.current.get(current.id) ?? Date.now();
      const pausedMs = pausedMsRef.current.get(current.id) ?? 0;
      record.timeToFirstCorrectMs = Math.max(0, Date.now() - shownAt - pausedMs);
      setFeedback("correct");

      const newSolved = solvedCount + 1;
      setSolvedCount(newSolved);
      const newStreak = streak + 1;
      setStreak(newStreak);
      const isStreakMilestone = newStreak === 3 || (newStreak >= 5 && newStreak % 5 === 0);
      if (newSolved === problemsPerPage) {
        playPageComplete();
      } else if (isStreakMilestone) {
        playStreakMilestone();
      } else {
        playCorrect();
      }

      window.setTimeout(() => {
        setQueue((q) => q.slice(1));
        resetInputs();
        lockRef.current = false;
      }, 450);
    } else {
      // No auto-advance on a mistake: the correct answer stays on screen until
      // the person taps "OK" — reading the right answer is where the learning
      // happens, and the paused time doesn't count against the clock.
      record.mistakeCount += 1;
      setFeedback("incorrect");
      setStreak(0);
      errorPauseStartRef.current = Date.now();
      playIncorrect();
    }
  }

  function handleErrorContinue() {
    if (!current) return;
    if (errorPauseStartRef.current !== null) {
      const paused = Date.now() - errorPauseStartRef.current;
      pausedMsRef.current.set(current.id, (pausedMsRef.current.get(current.id) ?? 0) + paused);
      errorPauseStartRef.current = null;
    }
    setQueue((q) => {
      const [first, ...rest] = q;
      return [...rest, first];
    });
    resetInputs();
    lockRef.current = false;
  }

  /** Leaves the between-pages card: start the next page, or regenerate the failed one. */
  function handleContinuePage() {
    const next = stripe.generate(problemsPerPage);
    seedPage(next);
    setQueue(next);
    setSolvedCount(0);
    setPageEnd(null);
    resetInputs();
    lockRef.current = false;
  }

  const submitRef = useRef(handleSubmit);
  submitRef.current = handleSubmit;
  const continueRef = useRef(handleContinuePage);
  continueRef.current = handleContinuePage;
  const errorContinueRef = useRef(handleErrorContinue);
  errorContinueRef.current = handleErrorContinue;
  const feedbackRef = useRef(feedback);
  feedbackRef.current = feedback;
  const pageEndRef = useRef(pageEnd);
  pageEndRef.current = pageEnd;
  const digitRef = useRef(handleDigit);
  digitRef.current = handleDigit;
  const backspaceRef = useRef(handleBackspace);
  backspaceRef.current = handleBackspace;
  const hasSecondaryRef = useRef(hasSecondary);
  hasSecondaryRef.current = hasSecondary;
  const toggleSignRef = useRef(handleToggleSign);
  toggleSignRef.current = handleToggleSign;
  const allowsNegativeRef = useRef(allowsNegative);
  allowsNegativeRef.current = allowsNegative;

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (pageEndRef.current !== null) {
        if (e.key === "Enter" || e.key === " ") continueRef.current();
        return;
      }
      if (feedbackRef.current === "incorrect") {
        if (e.key === "Enter" || e.key === " ") errorContinueRef.current();
        return;
      }
      if (e.key >= "0" && e.key <= "9") {
        digitRef.current(e.key);
      } else if (e.key === "Backspace") {
        backspaceRef.current();
      } else if (e.key === "-" && allowsNegativeRef.current) {
        toggleSignRef.current();
      } else if (e.key === "Tab" && hasSecondaryRef.current) {
        e.preventDefault();
        setActiveField((f) => (f === "primary" ? "secondary" : "primary"));
      } else if (e.key === "Enter") {
        submitRef.current();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!current && pageEnd === null) return null;

  const currentPageNumber = Math.min(pagesDone + 1, pagesToMaster);

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <button type="button" className={styles.exit} onClick={onExit} aria-label={t.exitDrillAria}>
          ✕
        </button>
        <div className={styles.progressWrap}>
          <ProgressBar value={solvedCount} max={problemsPerPage} />
        </div>
        {streak >= 2 && (
          <span key={streak} className={styles.streakBadge}>
            🔥 {streak}
          </span>
        )}
        <button
          type="button"
          className={styles.muteBtn}
          onClick={handleToggleMute}
          aria-label={muted ? t.unmuteAria : t.muteAria}
        >
          {muted ? "🔇" : "🔊"}
        </button>
        <span className={styles.count}>{t.pageLabel(currentPageNumber, pagesToMaster)}</span>
      </div>

      <div className={styles.problemArea}>
        {pageEnd !== null ? (
          pageEnd.kind === "passed" ? (
            <div className={styles.pageBreakCard}>
              <div className={styles.pageBreakEmoji}>📖</div>
              <div className={styles.pageBreakText}>{t.pageComplete(pageEnd.page, pagesToMaster)}</div>
              <button type="button" className={styles.pageBreakCta} onClick={handleContinuePage}>
                {t.continue}
              </button>
            </div>
          ) : (
            <div className={styles.pageFailedCard}>
              <div className={styles.pageBreakEmoji}>💪</div>
              <div className={styles.pageFailedTitle}>{t.pageFailedHeadline}</div>
              <div className={styles.pageFailedText}>
                {pageEnd.slow
                  ? t.pageFailedSpeed(pageEnd.avgTimeSec.toFixed(1), stripe.mastery.targetTimeSec)
                  : t.pageFailedAccuracy(pageEnd.accuracyPct, Math.round(stripe.mastery.passAccuracy * 100))}
              </div>
              <button type="button" className={styles.pageBreakCta} onClick={handleContinuePage}>
                {t.pageRetry}
              </button>
            </div>
          )
        ) : current ? (
          <>
            <div
              className={[
                styles.card,
                feedback === "correct" ? styles.cardCorrect : "",
                feedback === "incorrect" ? styles.cardIncorrect : "",
              ].join(" ")}
            >
              {(current.promptL10n?.[locale] ?? current.prompt) && (
                <>
                  <button
                    type="button"
                    className={styles.boardBtn}
                    onClick={() => onSendToBoard(current.promptL10n?.[locale] ?? current.prompt)}
                    aria-label={t.boardSolveHere}
                    title={t.boardSolveHere}
                  >
                    🖍️
                  </button>
                  <div className={styles.prompt}>{current.promptL10n?.[locale] ?? current.prompt}</div>
                </>
              )}
              {current.diagram && (
                <div className={styles.diagramWrap}>
                  {current.diagram.kind === "groups" && (
                    <GroupDiagram groups={current.diagram.groups} perGroup={current.diagram.perGroup} />
                  )}
                  {current.diagram.kind === "numberLine" && (
                    <NumberLineDiagram start={current.diagram.start} end={current.diagram.end} />
                  )}
                  {current.diagram.kind === "fraction" && (
                    <FractionDiagram total={current.diagram.total} shaded={current.diagram.shaded} />
                  )}
                  {current.diagram.kind === "variableBox" && (
                    <VariableBoxDiagram xValue={current.diagram.xValue} units={current.diagram.units} />
                  )}
                  {current.diagram.kind === "balanceScale" && (
                    <BalanceScaleDiagram leftUnits={current.diagram.leftUnits} rightUnits={current.diagram.rightUnits} />
                  )}
                  {current.diagram.kind === "functionMachine" && (
                    <FunctionMachineDiagram
                      input={current.diagram.input}
                      rule={current.diagram.rule}
                      output={current.diagram.output}
                    />
                  )}
                  {current.diagram.kind === "slopeStaircase" && (
                    <SlopeStaircaseDiagram rise={current.diagram.rise} run={current.diagram.run} />
                  )}
                  {current.diagram.kind === "parabola" && <ParabolaDiagram points={current.diagram.points} />}
                  {current.diagram.kind === "factorArea" && (
                    <FactorAreaDiagram a={current.diagram.a} b={current.diagram.b} />
                  )}
                  {current.diagram.kind === "areaBars" && <AreaBarsDiagram heights={current.diagram.heights} />}
                  {current.diagram.kind === "rightTriangle" && (
                    <RightTriangleDiagram
                      a={current.diagram.a}
                      b={current.diagram.b}
                      c={current.diagram.c}
                      theta={current.diagram.theta}
                    />
                  )}
                </div>
              )}
              <div className={styles.equalsRow}>
                <span className={styles.equalsSign}>
                  {current.isEquation ? (current.equationLabel ?? "x =") : "="}
                </span>
                {isFraction ? (
                  <div className={styles.fractionAnswer}>
                    <button
                      type="button"
                      onClick={() => setActiveField("primary")}
                      className={[
                        styles.answerBox,
                        styles.fractionBox,
                        input === "" ? styles.answerBoxEmpty : "",
                        activeField === "primary" ? styles.answerBoxActive : "",
                      ].join(" ")}
                    >
                      {input || "?"}
                    </button>
                    <div className={styles.fractionBar} />
                    <button
                      type="button"
                      onClick={() => setActiveField("secondary")}
                      className={[
                        styles.answerBox,
                        styles.fractionBox,
                        secondaryInput === "" ? styles.answerBoxEmpty : "",
                        activeField === "secondary" ? styles.answerBoxActive : "",
                      ].join(" ")}
                    >
                      {secondaryInput || "?"}
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setActiveField("primary")}
                      className={[
                        styles.answerBox,
                        input === "" ? styles.answerBoxEmpty : "",
                        hasSecondary && activeField === "primary" ? styles.answerBoxActive : "",
                      ].join(" ")}
                    >
                      {input ? (isNegative ? `-${input}` : input) : "?"}
                    </button>
                    {hasSecondary && (
                      <>
                        <span className={styles.remainderLabel}>
                          {current.secondaryFormat === "decimal"
                            ? "."
                            : current.secondaryFormat === "pair"
                              ? ","
                              : current.secondaryFormat === "radical"
                                ? "√"
                                : t.remainderLabel}
                        </span>
                        <button
                          type="button"
                          onClick={() => setActiveField("secondary")}
                          className={[
                            styles.answerBox,
                            secondaryInput === "" ? styles.answerBoxEmpty : "",
                            activeField === "secondary" ? styles.answerBoxActive : "",
                          ].join(" ")}
                        >
                          {secondaryInput ? (isSecondaryNegative ? `-${secondaryInput}` : secondaryInput) : "?"}
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
              {feedback === "incorrect" && (
                <>
                  <div className={styles.revealCorrect}>
                    {hasSecondary
                      ? current.secondaryFormat === "fraction"
                        ? t.correctAnswerRevealFraction(current.answer, current.secondaryAnswer!)
                        : current.secondaryFormat === "decimal"
                          ? t.correctAnswerRevealDecimal(
                              current.answer,
                              String(current.secondaryAnswer!).padStart(current.secondaryDigits ?? 1, "0"),
                            )
                          : current.secondaryFormat === "pair"
                            ? t.correctAnswerRevealPair(current.answer, current.secondaryAnswer!)
                            : current.secondaryFormat === "radical"
                              ? t.correctAnswerRevealRadical(current.answer, current.secondaryAnswer!)
                              : t.correctAnswerRevealWithRemainder(current.answer, current.secondaryAnswer!)
                      : t.correctAnswerReveal(current.answer)}
                  </div>
                  <button type="button" className={styles.errorOkBtn} onClick={handleErrorContinue}>
                    {t.errorContinue}
                  </button>
                </>
              )}
            </div>

            <div className={styles.padArea}>
              <NumPad
                onDigit={handleDigit}
                onBackspace={handleBackspace}
                onSubmit={handleSubmit}
                submitDisabled={input === "" || (hasSecondary && secondaryInput === "") || feedback !== null}
                showSign={allowsNegative}
                isNegative={isNegative}
                onToggleSign={handleToggleSign}
              />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
