import styles from "./RightTriangleDiagram.module.css";

interface RightTriangleDiagramProps {
  /** Label for the vertical leg (left side). */
  a: string;
  /** Label for the horizontal leg (bottom side). */
  b: string;
  /** Label for the hypotenuse. */
  c: string;
  /** Marks the angle θ at the bottom-right vertex (between hypotenuse and bottom leg). */
  theta?: boolean;
}

/** A right triangle with its two legs and hypotenuse labeled — the right angle
 * sits bottom-left, so the vertical side is one leg, the bottom is the other,
 * and the slanted side is the hypotenuse. Optionally marks the angle θ at the
 * bottom-right vertex, which is the angle trig ratios refer to. */
export function RightTriangleDiagram({ a, b, c, theta }: RightTriangleDiagramProps) {
  return (
    <div className={styles.wrap} role="img" aria-label={`right triangle with legs ${a} and ${b}, hypotenuse ${c}`}>
      <svg viewBox="0 0 230 150" className={styles.svg}>
        {/* triangle: right angle at (30, 130), up to (30, 20), across to (210, 130) */}
        <polygon points="30,130 30,20 210,130" className={styles.shape} />
        {/* right-angle marker */}
        <polyline points="30,114 46,114 46,130" className={styles.marker} />
        {/* θ arc at the bottom-right vertex */}
        {theta && (
          <>
            <path d="M 180 130 A 30 30 0 0 0 185.5 112.6" className={styles.marker} />
            <text x="164" y="124" className={styles.thetaLabel}>
              θ
            </text>
          </>
        )}
        <text x="20" y="80" className={styles.label} textAnchor="end">
          {a}
        </text>
        <text x="120" y="147" className={styles.label} textAnchor="middle">
          {b}
        </text>
        <text x="128" y="66" className={styles.label} textAnchor="start">
          {c}
        </text>
      </svg>
    </div>
  );
}
