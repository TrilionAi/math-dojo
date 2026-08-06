import type { Belt, ProgressState, Stripe, StripeDegree } from "../types";
import { isStripeUnlocked } from "../engine/progress";
import { ninjaSourceBeltId } from "../data/ninja";
import type { GameMode } from "../engine/mode";
import { computeGrade } from "../engine/grading";
import { BeltStrip } from "../components/BeltStrip";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { useLocale } from "../i18n/LocaleContext";
import { UI_STRINGS } from "../i18n/ui";
import styles from "./MapScreen.module.css";

interface MapScreenProps {
  /** The belts to display — the normal set, or the ninja set in ninja mode. */
  belts: Belt[];
  /** Always the normal belts — ninja unlock gates check against these. */
  normalBelts: Belt[];
  mode: GameMode;
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

export function MapScreen({
  belts,
  normalBelts,
  mode,
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
  const allComplete =
    !isNinja && belts.every((belt) => belt.stripes.every((stripe) => progress.stripeResults[stripe.id]?.passed));

  /** Ninja belts open when the matching normal belt was earned — White Ninja is free. */
  function isNinjaBeltOpen(belt: Belt): boolean {
    if (belt.id === "ninja-white") return true;
    const source = normalBelts.find((b) => b.id === ninjaSourceBeltId(belt.id));
    const lastStripe = source?.stripes[source.stripes.length - 1];
    return lastStripe ? (progress.stripeResults[lastStripe.id]?.passed ?? false) : false;
  }

  function isNinjaStripeOpen(belt: Belt, stripe: Stripe): boolean {
    if (new URLSearchParams(window.location.search).get("unlock") === "all") return true;
    if (progress.stripeResults[stripe.id]?.passed) return true;
    if (!isNinjaBeltOpen(belt)) return false;
    const idx = belt.stripes.indexOf(stripe);
    if (idx <= 0) return true;
    return progress.stripeResults[belt.stripes[idx - 1].id]?.passed ?? false;
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
          {isNinja && <span className={styles.ninjaMark}> 🥷</span>}
        </h1>
        <p className={styles.subtitle}>{t.tagline}</p>
        <div className={styles.modeSwitch} role="group">
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
      </header>

      {allComplete && (
        <button type="button" className={styles.certBanner} onClick={onOpenCertificate}>
          {t.certMapCta}
        </button>
      )}

      <div className={styles.beltList}>
        {isNinja && belts.length === 0 && <p className={styles.ninjaEmpty}>{t.ninjaComingSoon}</p>}
        {belts.map((belt, i) => (
          <div key={belt.id} className={styles.card} style={{ animationDelay: `${i * 60}ms` }}>
            <div className={styles.cardHead}>
              <span className={styles.beltName}>{belt.name[locale]}</span>
              <span className={styles.operation}>{belt.operationLabel[locale]}</span>
            </div>

            <BeltStrip belt={belt} progress={progress} />

            <p className={styles.tagline}>{belt.tagline[locale]}</p>

            {belt.locked ? (
              <span className={styles.comingSoon}>🔒 {t.comingSoon}</span>
            ) : isNinja && !isNinjaBeltOpen(belt) ? (
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
                        const unlocked = isNinja
                          ? isNinjaStripeOpen(belt, stripe)
                          : isStripeUnlocked(stripe, belts, progress);
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
        ))}
      </div>

      <a
        className={styles.supportLink}
        href="https://ko-fi.com/D0J123HIA2"
        target="_blank"
        rel="noopener noreferrer"
      >
        ❤️ {t.supportLink}
      </a>
    </div>
  );
}
