import type { Belt } from "../types";
import { useLocale } from "../i18n/LocaleContext";
import styles from "./BeltBadge.module.css";

interface BeltBadgeProps {
  belt: Belt;
  /** Compact rendering for badge galleries (the stats screen). */
  small?: boolean;
  /** Grays the medal out and shows a lock — a belt not yet earned. */
  locked?: boolean;
}

/** A shareable-looking medal for an earned belt: a ribbon-topped disc filled
 * with the belt's color, the dojo mark in the middle and the belt name below. */
export function BeltBadge({ belt, small, locked }: BeltBadgeProps) {
  const { locale } = useLocale();
  const fill = locked ? "var(--color-border)" : `var(${belt.colorVar})`;
  return (
    <div className={[styles.wrap, small ? styles.wrapSmall : "", locked ? styles.wrapLocked : ""].join(" ")}>
      <div className={styles.ribbon} style={{ background: fill }} />
      <div className={styles.medal} style={{ background: fill }}>
        <span className={styles.medalEmoji}>{locked ? "🔒" : "🥋"}</span>
      </div>
      <div className={styles.beltName}>{belt.name[locale]}</div>
      {!small && <div className={styles.dojoMark}>Math Dojo</div>}
    </div>
  );
}
