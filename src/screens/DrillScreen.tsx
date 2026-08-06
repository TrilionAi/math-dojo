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
  onComplete: (summary: SessionSummary) => void;
  onExit: () => void;
  onSendToBoard: (text: string) => void;
}

type Feedback = "correct" | "incorrect" | null;
type ActiveField = "primary" | "secondary";

export function DrillScreen({ stripe, onComplete, onExit, onSendToBoard }: DrillScreenProps) {
  const { locale } = useLocale();
  const t = UI_STRINGS[locale];
  const { problemsPerPage, pagesToMaster } = stripe.mastery;
  const totalCount = problemsPerPage * pagesToMaster;
  const [queue, setQueue] = useState<Problem[]>(() => stripe.generate(totalCount));
  const [input, setInput] = useState("");
  const [secondaryInput, setSecondaryInput] = useState("");
  const [isNegative, setIsNegative] = useState(false);
  const [isSecondaryNegative, setIsSecondaryNegative] = useState(false);
  const [activeField, setActiveField] = useState<ActiveField>("primary");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [solvedCount, setSolvedCount] = useState(0);
  const [pageBreak, setPageBreak] = useState<number | null>(null);
  const [streak, setStreak] = useState(0);
  const [muted, setMutedFlag] = useState(() => isMuted());

  const attemptsRef = useRef<Map<string, AttemptRecord>>(new Map());
  const firstShownAtRef = useRef<Map<string, number>>(new Map());
  const lockRef = useRef(false);

  const current: Problem | undefined = queue[0];

  // seed attempt records once for the original set
  useEffect(() => {
    queue.forEach((p) => {
      attemptsRef.current.set(p.id, {
        problem: p,
        firstTryCorrect: false,
        timeToFirstCorrectMs: 0,
        mistakeCount: 0,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // stamp the moment each problem is first shown, for speed scoring
  useEffect(() => {
    if (!current) return;
    if (!firstShownAtRef.current.has(current.id)) {
      firstShownAtRef.current.set(current.id, Date.now());
    }
  }, [current?.id]);

  // session finished once every original problem has been resolved correctly
  useEffect(() => {
    if (queue.length === 0 && attemptsRef.current.size === totalCount) {
      const attempts = Array.from(attemptsRef.current.values());
      const correctCount = attempts.filter((a) => a.firstTryCorrect).length;
      const accuracy = correctCount / totalCount;
      const avgTimeSec = attempts.reduce((sum, a) => sum + a.timeToFirstCorrectMs, 0) / totalCount / 1000;
      const passed = evaluateSession(stripe, accuracy, avgTimeSec);
      onComplete({ stripe, accuracy, avgTimeSec, passed, attempts });
    }
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
      record.timeToFirstCorrectMs = Date.now() - shownAt;
      setFeedback("correct");

      const newSolved = solvedCount + 1;
      setSolvedCount(newSolved);
      const justFinishedPage = newSolved % problemsPerPage === 0;
      const isLastProblem = newSolved === totalCount;
      const pageJustCompleted = justFinishedPage && !isLastProblem ? newSolved / problemsPerPage : null;

      const newStreak = streak + 1;
      setStreak(newStreak);
      const isStreakMilestone = newStreak === 3 || (newStreak >= 5 && newStreak % 5 === 0);
      if (pageJustCompleted !== null) {
        playPageComplete();
      } else if (isStreakMilestone) {
        playStreakMilestone();
      } else {
        playCorrect();
      }

      window.setTimeout(() => {
        setQueue((q) => q.slice(1));
        setInput("");
        setSecondaryInput("");
        setIsNegative(false);
        setIsSecondaryNegative(false);
        setActiveField("primary");
        setFeedback(null);
        if (pageJustCompleted !== null) {
          // hold here — lockRef stays true until the person taps continue
          setPageBreak(pageJustCompleted);
        } else {
          lockRef.current = false;
        }
      }, 450);
    } else {
      record.mistakeCount += 1;
      setFeedback("incorrect");
      setStreak(0);
      playIncorrect();
      window.setTimeout(() => {
        setQueue((q) => {
          const [first, ...rest] = q;
          return [...rest, first];
        });
        setInput("");
        setSecondaryInput("");
        setIsNegative(false);
        setIsSecondaryNegative(false);
        setActiveField("primary");
        setFeedback(null);
        lockRef.current = false;
      }, 1000);
    }
  }

  function handleContinuePage() {
    setPageBreak(null);
    lockRef.current = false;
  }

  const submitRef = useRef(handleSubmit);
  submitRef.current = handleSubmit;
  const continueRef = useRef(handleContinuePage);
  continueRef.current = handleContinuePage;
  const pageBreakRef = useRef(pageBreak);
  pageBreakRef.current = pageBreak;
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
      if (pageBreakRef.current !== null) {
        if (e.key === "Enter" || e.key === " ") continueRef.current();
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

  if (!current) return null;

  const pageIndex0 = Math.min(Math.floor(solvedCount / problemsPerPage), pagesToMaster - 1);
  const currentPageNumber = pageIndex0 + 1;
  const inPageSolved = solvedCount - pageIndex0 * problemsPerPage;

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <button type="button" className={styles.exit} onClick={onExit} aria-label={t.exitDrillAria}>
          ✕
        </button>
        <div className={styles.progressWrap}>
          <ProgressBar value={inPageSolved} max={problemsPerPage} />
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
        {pageBreak !== null ? (
          <div className={styles.pageBreakCard}>
            <div className={styles.pageBreakEmoji}>📖</div>
            <div className={styles.pageBreakText}>{t.pageComplete(pageBreak, pagesToMaster)}</div>
            <button type="button" className={styles.pageBreakCta} onClick={handleContinuePage}>
              {t.continue}
            </button>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
