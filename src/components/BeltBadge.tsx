import type { Belt } from "../types";
import { useLocale } from "../i18n/LocaleContext";
import styles from "./BeltBadge.module.css";

interface BeltBadgeProps {
  belt: Belt;
}

/** A shareable-looking medal for an earned belt: a ribbon-topped disc filled
 * with the belt's color, the dojo mark in the middle and the belt name below. */
export function BeltBadge({ belt }: BeltBadgeProps) {
  const { locale } = useLocale();
  return (
    <div className={styles.wrap}>
      <div className={styles.ribbon} style={{ background: `var(${belt.colorVar})` }} />
      <div className={styles.medal} style={{ background: `var(${belt.colorVar})` }}>
        <span className={styles.medalEmoji}>🥋</span>
      </div>
      <div className={styles.beltName}>{belt.name[locale]}</div>
      <div className={styles.dojoMark}>Math Dojo</div>
    </div>
  );
}
