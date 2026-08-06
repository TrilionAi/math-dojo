import { useState } from "react";
import type { Belt, ProgressState } from "../types";
import { computeDayStreak } from "../engine/progress";
import { computeGrade, type Grade } from "../engine/grading";
import { shareText } from "../engine/share";
import { BeltBadge } from "../components/BeltBadge";
import { useLocale } from "../i18n/LocaleContext";
import { UI_STRINGS } from "../i18n/ui";
import styles from "./StatsScreen.module.css";

interface StatsScreenProps {
  belts: Belt[];
  ninjaBelts: Belt[];
  progress: ProgressState;
  onBack: () => void;
  onOpenCertificate: () => void;
}

export function StatsScreen({ belts, ninjaBelts, progress, onBack, onOpenCertificate }: StatsScreenProps) {
  const { locale } = useLocale();
  const t = UI_STRINGS[locale];
  const [sharedCopied, setSharedCopied] = useState(false);

  async function handleShareBelt(belt: Belt) {
    const outcome = await shareText(t.shareBeltText(belt.name[locale]));
    if (outcome === "copied") {
      setSharedCopied(true);
      window.setTimeout(() => setSharedCopied(false), 2500);
    }
  }

  const playableBelts = belts.filter((b) => !b.locked);
  const allStripes = playableBelts.flatMap((b) => b.stripes);
  const totalStripes = allStripes.length;
  const passedStripes = allStripes.filter((s) => progress.stripeResults[s.id]?.passed).length;

  const beltsEarned = playableBelts.filter((b) => {
    const last = b.stripes[b.stripes.length - 1];
    return last && (progress.stripeResults[last.id]?.passed ?? false);
  }).length;

  const dayStreak = computeDayStreak(progress.practiceDays);
  const sessions = Object.values(progress.stripeResults).reduce((sum, r) => sum + r.attempts, 0);

  const allComplete = passedStripes === totalStripes && totalStripes > 0;

  const gradeCounts: Record<Grade, number> = { S: 0, A: 0, B: 0 };
  for (const stripe of allStripes) {
    const grade = computeGrade(stripe, progress.stripeResults[stripe.id]);
    if (grade) gradeCounts[grade] += 1;
  }

  return (
    <div className={styles.page}>
      <button type="button" className={styles.back} onClick={onBack}>
        ← {t.backToMap}
      </button>

      <header className={styles.header}>
        <div className={styles.trophy}>🏆</div>
        <h1 className={styles.title}>{t.statsTitle}</h1>
      </header>

      <div className={styles.grid}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>
            {beltsEarned}/{playableBelts.length}
          </div>
          <div className={styles.statLabel}>{t.statBeltsEarned}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>
            {passedStripes}/{totalStripes}
          </div>
          <div className={styles.statLabel}>{t.statStripesMastered}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>🔥 {dayStreak}</div>
          <div className={styles.statLabel}>{t.statDayStreak}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{sessions}</div>
          <div className={styles.statLabel}>{t.statSessions}</div>
        </div>
      </div>

      <div className={styles.gradeRow}>
        <div className={[styles.gradeChip, styles.gradeChipS].join(" ")}>
          <span className={styles.gradeChipLetter}>S</span> {gradeCounts.S}
        </div>
        <div className={[styles.gradeChip, styles.gradeChipA].join(" ")}>
          <span className={styles.gradeChipLetter}>A</span> {gradeCounts.A}
        </div>
        <div className={[styles.gradeChip, styles.gradeChipB].join(" ")}>
          <span className={styles.gradeChipLetter}>B</span> {gradeCounts.B}
        </div>
      </div>
      <p className={styles.gradeHint}>{t.statGradeHint}</p>

      <h2 className={styles.sectionTitle}>{t.statBadgesTitle}</h2>
      <p className={styles.medalHint}>{sharedCopied ? t.shareCopied : t.statBadgesShareHint}</p>
      <div className={styles.medalGrid}>
        {playableBelts.map((belt) => {
          const last = belt.stripes[belt.stripes.length - 1];
          const earned = last ? (progress.stripeResults[last.id]?.passed ?? false) : false;
          if (!earned) return <BeltBadge key={belt.id} belt={belt} small locked />;
          return (
            <button
              key={belt.id}
              type="button"
              className={styles.medalBtn}
              onClick={() => handleShareBelt(belt)}
              title={t.shareBeltCta}
              aria-label={`${t.shareBeltCta}: ${belt.name[locale]}`}
            >
              <BeltBadge belt={belt} small />
            </button>
          );
        })}
      </div>

      <h2 className={styles.sectionTitle}>{t.statNinjaBadgesTitle}</h2>
      <div className={styles.medalGrid}>
        {ninjaBelts.map((belt) => {
          const last = belt.stripes[belt.stripes.length - 1];
          const earned = last ? (progress.stripeResults[last.id]?.passed ?? false) : false;
          if (!earned) return <BeltBadge key={belt.id} belt={belt} small locked />;
          return (
            <button
              key={belt.id}
              type="button"
              className={styles.medalBtn}
              onClick={() => handleShareBelt(belt)}
              title={t.shareBeltCta}
              aria-label={`${t.shareBeltCta}: ${belt.name[locale]}`}
            >
              <BeltBadge belt={belt} small />
            </button>
          );
        })}
      </div>

      <div className={styles.certCard}>
        <div className={[styles.certPreview, allComplete ? "" : styles.certPreviewLocked].join(" ")}>
          <div className={styles.certPreviewInner}>
            <div className={styles.certPreviewEyebrow}>M A T H &nbsp; D O J O</div>
            <div className={styles.certPreviewTitle}>{t.certTitle}</div>
            <div className={styles.certPreviewEmoji}>🥋</div>
            <div className={styles.certPreviewName} />
            <div className={styles.certPreviewStrip}>
              {playableBelts.map((belt) => (
                <span key={belt.id} className={styles.certPreviewStripe} style={{ background: `var(${belt.colorVar})` }} />
              ))}
            </div>
          </div>
          {!allComplete && (
            <div className={styles.certLockOverlay}>
              <span className={styles.certLockIcon}>🔒</span>
              <span className={styles.certLockHint}>{t.certLockedHint(totalStripes - passedStripes)}</span>
              <div className={styles.certProgressTrack}>
                <div
                  className={styles.certProgressFill}
                  style={{ width: `${Math.round((passedStripes / Math.max(1, totalStripes)) * 100)}%` }}
                />
              </div>
              <span className={styles.certProgressLabel}>
                {passedStripes}/{totalStripes}
              </span>
            </div>
          )}
        </div>
        {allComplete && (
          <button type="button" className={styles.certViewBtn} onClick={onOpenCertificate}>
            {t.certViewCta}
          </button>
        )}
      </div>

      <div className={styles.beltList}>
        {playableBelts.map((belt) => {
          const total = belt.stripes.length;
          const passed = belt.stripes.filter((s) => progress.stripeResults[s.id]?.passed).length;
          const complete = passed === total;
          return (
            <div key={belt.id} className={styles.beltRow}>
              <span className={styles.beltDot} style={{ background: `var(${belt.colorVar})` }} />
              <span className={styles.beltRowName}>{belt.name[locale]}</span>
              <span className={[styles.beltRowCount, complete ? styles.beltRowComplete : ""].join(" ")}>
                {complete ? "✓" : `${passed}/${total}`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
