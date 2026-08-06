import { useEffect, useState } from "react";
import type { Belt, ProgressState, SessionSummary } from "../types";
import { computeGrade } from "../engine/grading";
import { playBeltFanfare, playFanfare } from "../engine/sound";
import { shareText } from "../engine/share";
import { BeltBadge } from "../components/BeltBadge";
import { useLocale } from "../i18n/LocaleContext";
import { UI_STRINGS } from "../i18n/ui";
import styles from "./ResultsScreen.module.css";

interface ResultsScreenProps {
  summary: SessionSummary;
  belts: Belt[];
  ninjaBelts: Belt[];
  progress: ProgressState;
  onRetry: () => void;
  onContinue: () => void;
  onEnterNinja: () => void;
}

export function ResultsScreen({ summary, belts, ninjaBelts, progress, onRetry, onContinue, onEnterNinja }: ResultsScreenProps) {
  const { locale } = useLocale();
  const t = UI_STRINGS[locale];
  const belt = belts.find((b) => b.id === summary.stripe.beltId);
  const isLastStripeOfBelt = belt ? belt.stripes[belt.stripes.length - 1]?.id === summary.stripe.id : false;
  const beltEarned = summary.passed && isLastStripeOfBelt;
  // Earning a NORMAL belt unlocks its ninja twin — the doorway into the dark dojo.
  const unlockedNinjaBelt =
    beltEarned && belt && !belt.id.startsWith("ninja-")
      ? (ninjaBelts.find((b) => b.id === `ninja-${belt.id}`) ?? null)
      : null;
  const grade = computeGrade(summary.stripe, progress.stripeResults[summary.stripe.id]);
  const [shareOutcome, setShareOutcome] = useState<"copied" | null>(null);

  useEffect(() => {
    if (summary.passed) {
      if (beltEarned) playBeltFanfare();
      else playFanfare();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleShareBelt() {
    if (!belt) return;
    const outcome = await shareText(t.shareBeltText(belt.name[locale]));
    if (outcome === "copied") {
      setShareOutcome("copied");
      window.setTimeout(() => setShareOutcome(null), 2500);
    }
  }

  const accuracyPct = Math.round(summary.accuracy * 100);
  const outcomeClass = summary.passed ? styles.pass : styles.fail;
  const stripeTitle = summary.stripe.title[locale];

  return (
    <div className={styles.page}>
      <div className={styles.badge}>{summary.passed ? "🥋" : "🔁"}</div>
      <h1 className={styles.headline}>{summary.passed ? t.resultsPassHeadline : t.resultsFailHeadline}</h1>
      <p className={styles.sub}>
        {summary.passed ? t.resultsPassSub(stripeTitle) : t.resultsFailSub(stripeTitle)}
      </p>
      {grade && (
        <div className={[styles.gradePill, styles[`gradePill${grade}`]].join(" ")}>
          {t.gradeEarned(grade)}
        </div>
      )}

      <div className={styles.statRow}>
        <div className={[styles.stat, outcomeClass].join(" ")}>
          <div className={styles.statValue}>{accuracyPct}%</div>
          <div className={styles.statLabel}>{t.accuracy}</div>
        </div>
        <div className={[styles.stat, outcomeClass].join(" ")}>
          <div className={styles.statValue}>{summary.avgTimeSec.toFixed(1)}s</div>
          <div className={styles.statLabel}>{t.avgTime}</div>
        </div>
      </div>

      {beltEarned && belt && (
        <>
          <BeltBadge belt={belt} />
          <div className={styles.beltEarned}>{t.beltEarned(belt.name[locale])}</div>
          <button type="button" className={styles.shareBtn} onClick={handleShareBelt}>
            📣 {shareOutcome === "copied" ? t.shareCopied : t.shareBeltCta}
          </button>
          {unlockedNinjaBelt && (
            <button type="button" className={styles.ninjaUnlockBtn} onClick={onEnterNinja}>
              {t.ninjaUnlockedCta(unlockedNinjaBelt.name[locale])}
            </button>
          )}
        </>
      )}

      <div className={styles.actions}>
        {summary.passed ? (
          <button type="button" className={styles.primaryBtn} onClick={onContinue}>
            {t.continue}
          </button>
        ) : (
          <>
            <button type="button" className={styles.primaryBtn} onClick={onRetry}>
              {t.tryAgain}
            </button>
            <button type="button" className={styles.secondaryBtn} onClick={onContinue}>
              {t.backToMap}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
