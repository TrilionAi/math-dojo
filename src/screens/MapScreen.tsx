import { useState } from "react";
import type { Belt, ProgressState, Stripe, StripeDegree } from "../types";
import { isReviewModeActive, isStripeUnlocked } from "../engine/progress";
import { ninjaSourceBeltId } from "../data/ninja";
import { shareImage, shareText } from "../engine/share";
import type { GameMode } from "../engine/mode";
import { computeGrade } from "../engine/grading";
import { BeltStrip } from "../components/BeltStrip";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { useLocale } from "../i18n/LocaleContext";
import { UI_STRINGS } from "../i18n/ui";
import styles from "./MapScreen.module.css";

interface MapScreenProps {
  /** The belts to display — normal, ninja, or BOTH unified once you're a Ninja Master. */
  belts: Belt[];
  /** Always the normal belts — sequential unlocks and ninja gates check against these. */
  normalBelts: Belt[];
  mode: GameMode;
  ninjaMaster: boolean;
  onSwitchMode: (mode: GameMode) => void;
  progress: ProgressState;
  loggedIn: boolean;
  onSelectStripe: (stripeId: string) => void;
  onOpenStats: () => void;
  onOpenAccount: () => void;
  onOpenCertificate: () => void;
}

interface StripeGroup {
  degree: StripeDegree | null;
  stripes: Stripe[];
}

/** Groups consecutive stripes sharing the same `degree` (Black Belt's 6 sub-sections).
 * Belts without degrees just come back as one group with no heading. */
function groupByDegree(stripes: Stripe[]): StripeGroup[] {
  const groups: StripeGroup[] = [];
  for (const stripe of stripes) {
    const last = groups[groups.length - 1];
    if (last && last.degree?.index === stripe.degree?.index) {
      last.stripes.push(stripe);
    } else {
      groups.push({ degree: stripe.degree ?? null, stripes: [stripe] });
    }
  }
  return groups;
}

function isNinjaBelt(belt: Belt): boolean {
  return belt.id.startsWith("ninja-");
}

export function MapScreen({
  belts,
  normalBelts,
  mode,
  ninjaMaster,
  onSwitchMode,
  progress,
  loggedIn,
  onSelectStripe,
  onOpenStats,
  onOpenAccount,
  onOpenCertificate,
}: MapScreenProps) {
  const { locale } = useLocale();
  const t = UI_STRINGS[locale];
  const isNinja = mode === "ninja";
  const reviewMode = isReviewModeActive();
  /** Explicit user opens/closes — anything not here falls back to the default rule. */
  const [toggles, setToggles] = useState<Record<string, boolean>>({});
  const [badgeAvailable, setBadgeAvailable] = useState(true);
  const [masterShareCopied, setMasterShareCopied] = useState(false);

  const allComplete = normalBelts.every((belt) =>
    belt.stripes.every((stripe) => progress.stripeResults[stripe.id]?.passed),
  );

  /** Ninja belts open when the matching normal belt was earned — White Ninja is free. */
  function isNinjaBeltOpen(belt: Belt): boolean {
    if (reviewMode) return true;
    if (belt.id === "ninja-white") return true;
    const source = normalBelts.find((b) => b.id === ninjaSourceBeltId(belt.id));
    const lastStripe = source?.stripes[source.stripes.length - 1];
    return lastStripe ? (progress.stripeResults[lastStripe.id]?.passed ?? false) : false;
  }

  function isNinjaStripeOpen(belt: Belt, stripe: Stripe): boolean {
    if (reviewMode) return true;
    if (progress.stripeResults[stripe.id]?.passed) return true;
    if (!isNinjaBeltOpen(belt)) return false;
    const idx = belt.stripes.indexOf(stripe);
    if (idx <= 0) return true;
    return progress.stripeResults[belt.stripes[idx - 1].id]?.passed ?? false;
  }

  function stripeUnlocked(belt: Belt, stripe: Stripe): boolean {
    return isNinjaBelt(belt) ? isNinjaStripeOpen(belt, stripe) : isStripeUnlocked(stripe, normalBelts, progress);
  }

  /** A belt starts expanded only when it's the frontier — something in it is
   * playable but not yet mastered. Review mode starts everything collapsed so
   * the full map stays scannable. */
  function isExpanded(belt: Belt): boolean {
    const explicit = toggles[belt.id];
    if (explicit !== undefined) return explicit;
    if (reviewMode) return false;
    return belt.stripes.some((s) => stripeUnlocked(belt, s) && !(progress.stripeResults[s.id]?.passed ?? false));
  }

  function toggleBelt(belt: Belt) {
    setToggles((prev) => ({ ...prev, [belt.id]: !isExpanded(belt) }));
  }

  async function handleShareNinjaMaster() {
    let outcome: "shared" | "copied" | "failed";
    try {
      const res = await fetch("/ninja-master-badge.png");
      if (!res.ok) throw new Error("no badge");
      const blob = await res.blob();
      outcome = await shareImage(blob, "ninja-master-badge.png", t.ninjaMasterShareText);
    } catch {
      outcome = await shareText(t.ninjaMasterShareText);
    }
    if (outcome === "copied") {
      setMasterShareCopied(true);
      window.setTimeout(() => setMasterShareCopied(false), 2500);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.langRow}>
        <div className={styles.navBtns}>
          <button type="button" className={styles.statsBtn} onClick={onOpenStats}>
            🏆 {t.statsNav}
          </button>
          <button
            type="button"
            className={styles.statsBtn}
            onClick={onOpenAccount}
            title={loggedIn ? t.accountTitleLoggedIn : undefined}
          >
            <span className={styles.accountIcon}>
              👤
              {loggedIn && <span className={styles.connectedDot} aria-hidden="true" />}
            </span>{" "}
            {t.accountNav}
          </button>
        </div>
        <LanguageSwitcher />
      </div>

      <header className={styles.header}>
        <h1 className={styles.title}>
          Math <span>Dojo</span>
          {(isNinja || ninjaMaster) && <span className={styles.ninjaMark}> 🥷</span>}
        </h1>
        <p className={styles.subtitle}>{t.tagline}</p>
        {!ninjaMaster && (
          <div className={styles.modeSwitch} role="group" data-active={isNinja ? "ninja" : "normal"}>
            <span className={styles.modeThumb} aria-hidden="true" />
            <button
              type="button"
              className={[styles.modeBtn, !isNinja ? styles.modeBtnActive : ""].join(" ")}
              onClick={() => onSwitchMode("normal")}
            >
              {t.modeNormal}
            </button>
            <button
              type="button"
              className={[styles.modeBtn, isNinja ? styles.modeBtnActive : ""].join(" ")}
              onClick={() => onSwitchMode("ninja")}
            >
              {t.modeNinja}
            </button>
          </div>
        )}
      </header>

      {allComplete && (
        <button type="button" className={styles.certBanner} onClick={onOpenCertificate}>
          {t.certMapCta}
        </button>
      )}

      <div className={styles.beltList}>
        {isNinja && belts.length === 0 && <p className={styles.ninjaEmpty}>{t.ninjaComingSoon}</p>}
        {belts.map((belt, i) => {
          const expanded = isExpanded(belt);
          const ninjaLocked = isNinjaBelt(belt) && !isNinjaBeltOpen(belt);
          const isFrontier =
            !reviewMode &&
            belt.stripes.some((s) => stripeUnlocked(belt, s) && !(progress.stripeResults[s.id]?.passed ?? false));
          return (
            <div
              key={belt.id}
              className={[styles.card, isFrontier ? styles.cardFrontier : ""].join(" ")}
              style={{
                animationDelay: `${Math.min(i, 9) * 60}ms`,
                ["--belt-accent" as string]: `var(${belt.colorVar})`,
              }}
            >
              <button
                type="button"
                className={styles.cardHeadBtn}
                onClick={() => toggleBelt(belt)}
                aria-expanded={expanded}
              >
                <div className={styles.cardHead}>
                  <span className={styles.beltName}>{belt.name[locale]}</span>
                  <span className={styles.operation}>{belt.operationLabel[locale]}</span>
                  <span className={[styles.chevron, expanded ? styles.chevronOpen : ""].join(" ")} aria-hidden="true">
                    ▾
                  </span>
                </div>
                <BeltStrip belt={belt} progress={progress} />
              </button>

              <div className={[styles.collapse, expanded ? styles.collapseOpen : ""].join(" ")}>
                <div className={styles.collapseInner}>
                  <p className={styles.tagline}>{belt.tagline[locale]}</p>

                  {belt.locked ? (
                    <span className={styles.comingSoon}>🔒 {t.comingSoon}</span>
                  ) : ninjaLocked ? (
                    <span className={styles.comingSoon}>
                      🔒{" "}
                      {t.ninjaLockedHint(
                        normalBelts.find((b) => b.id === ninjaSourceBeltId(belt.id))?.name[locale] ?? "",
                      )}
                    </span>
                  ) : (
                    <div className={styles.stripeGroups}>
                      {groupByDegree(belt.stripes).map((group, gi) => (
                        <div key={gi} className={styles.stripeGroup}>
                          {group.degree && (
                            <div className={styles.degreeHeading}>
                              {group.degree.index > 0
                                ? `${t.degreeLabel} ${group.degree.index} · ${group.degree.name[locale]}`
                                : group.degree.name[locale]}
                            </div>
                          )}
                          <div className={styles.stripeRow}>
                            {group.stripes.map((stripe) => {
                              const unlocked = stripeUnlocked(belt, stripe);
                              const result = progress.stripeResults[stripe.id];
                              const passed = result?.passed ?? false;
                              const grade = computeGrade(stripe, result);
                              return (
                                <button
                                  key={stripe.id}
                                  type="button"
                                  disabled={!unlocked}
                                  onClick={() => onSelectStripe(stripe.id)}
                                  className={[
                                    styles.stripeBtn,
                                    passed ? styles.stripePassed : "",
                                    unlocked && !passed ? styles.stripeCurrent : "",
                                  ].join(" ")}
                                >
                                  {grade ? (
                                    <span
                                      className={[styles.gradeBadge, styles[`grade${grade}`]].join(" ")}
                                      title={t.gradeTitle(grade)}
                                    >
                                      {grade}
                                    </span>
                                  ) : unlocked ? (
                                    ""
                                  ) : (
                                    "🔒"
                                  )}{" "}
                                  {stripe.index}. {stripe.title[locale]}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <a
        className={styles.supportLink}
        href="https://ko-fi.com/D0J123HIA2"
        target="_blank"
        rel="noopener noreferrer"
      >
        ❤️ {t.supportLink}
      </a>

      {ninjaMaster && (
        <div className={styles.ninjaMasterWrap}>
          {badgeAvailable && (
            <img
              src="/ninja-master-badge.png"
              alt={t.ninjaMasterAlt}
              className={styles.ninjaMasterImg}
              onError={() => setBadgeAvailable(false)}
            />
          )}
          <button type="button" className={styles.ninjaMasterBtn} onClick={handleShareNinjaMaster}>
            🥷 {masterShareCopied ? t.shareCopied : t.ninjaMasterCta}
          </button>
        </div>
      )}
    </div>
  );
}
