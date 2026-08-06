import styles from "./ModeTransition.module.css";

interface ModeTransitionProps {
  /** Which world we're revealing — drives the overlay's palette and emblem. */
  toNinja: boolean;
}

/**
 * The mode-switch showpiece: a wall of ink (or daylight) sweeps over the
 * screen, a spinning shuriken and the mode emblem flash at the center while
 * the theme flips safely out of sight underneath, then everything dissolves.
 * Purely presentational — App owns the timing and the actual mode swap.
 */
export function ModeTransition({ toNinja }: ModeTransitionProps) {
  return (
    <div className={[styles.overlay, toNinja ? styles.toNinja : styles.toDay].join(" ")} aria-hidden="true">
      <div className={styles.ink} />
      <div className={styles.center}>
        <span className={styles.shuriken}>{toNinja ? "✦" : "☀"}</span>
        <span className={styles.emblem}>{toNinja ? "🥷" : "🥋"}</span>
        <span className={styles.slashes}>
          <i />
          <i />
          <i />
        </span>
      </div>
    </div>
  );
}
