import { useEffect, useRef, useState } from "react";
import type { Belt } from "../types";
import { shareImage, shareText } from "../engine/share";
import { useLocale } from "../i18n/LocaleContext";
import { UI_STRINGS } from "../i18n/ui";
import styles from "./CertificateScreen.module.css";

const NAME_STORAGE_KEY = "math-dojo:certificate-name:v1";

/** Belt colors mirrored from tokens.css — the canvas can't read CSS custom
 * properties for the coral gradient, so the strip is drawn from these. */
const BELT_STRIP: Array<string | "coral"> = [
  "#f5f3ee",
  "#3d7fe0",
  "#8b4fd1",
  "#8a5a2b",
  "#2f9e44",
  "#262323",
  "#c92a2a",
  "#d4a017",
  "#0e7490",
  "coral",
];

interface CertificateScreenProps {
  belts: Belt[];
  ninjaBelts: Belt[];
  progress: import("../types").ProgressState;
  onBack: () => void;
}

function loadName(): string {
  try {
    return localStorage.getItem(NAME_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

export function CertificateScreen({ belts, ninjaBelts, progress, onBack }: CertificateScreenProps) {
  const ninjaMaster =
    ninjaBelts.length > 0 &&
    ninjaBelts.every((b) => b.stripes.every((s) => progress.stripeResults[s.id]?.passed));
  const { locale } = useLocale();
  const t = UI_STRINGS[locale];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [name, setName] = useState(loadName);
  const [shareOutcome, setShareOutcome] = useState<"copied" | null>(null);

  const totalStripes = belts.reduce((sum, b) => sum + b.stripes.length, 0);
  const dateText = new Date().toLocaleDateString(
    locale === "pt" ? "pt-BR" : locale === "es" ? "es-ES" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  useEffect(() => {
    try {
      localStorage.setItem(NAME_STORAGE_KEY, name);
    } catch {
      // storage unavailable — the name just won't persist
    }
  }, [name]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;

    // parchment background
    ctx.fillStyle = "#fdf8ee";
    ctx.fillRect(0, 0, W, H);

    // double golden border
    ctx.strokeStyle = "#d4a017";
    ctx.lineWidth = 10;
    ctx.strokeRect(30, 30, W - 60, H - 60);
    ctx.lineWidth = 3;
    ctx.strokeRect(52, 52, W - 104, H - 104);

    ctx.textAlign = "center";
    ctx.fillStyle = "#8a5a2b";
    ctx.font = "700 30px Georgia, serif";
    const spaced = (s: string) => s.split("").join(" ");
    ctx.fillText(spaced("MATH DOJO"), W / 2, 130);

    ctx.fillStyle = "#2b2620";
    ctx.font = "700 64px Georgia, serif";
    ctx.fillText(t.certTitle, W / 2, 215);

    ctx.font = "44px serif";
    ctx.fillText("🥋", W / 2, 285);

    // name with underline flourish
    const displayName = name.trim() || "________________";
    ctx.fillStyle = "#262323";
    ctx.font = "italic 700 58px Georgia, serif";
    ctx.fillText(displayName, W / 2, 380);
    const nameWidth = Math.min(ctx.measureText(displayName).width + 80, W - 260);
    ctx.strokeStyle = "#d4a017";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(W / 2 - nameWidth / 2, 402);
    ctx.lineTo(W / 2 + nameWidth / 2, 402);
    ctx.stroke();

    ctx.fillStyle = "#4a4238";
    ctx.font = "30px Georgia, serif";
    ctx.fillText(t.certSubtitle, W / 2, 460);
    ctx.font = "26px Georgia, serif";
    ctx.fillText(t.certBody(totalStripes), W / 2, 505);

    // belt strip
    const stripWidth = 76;
    const gap = 14;
    const totalW = BELT_STRIP.length * stripWidth + (BELT_STRIP.length - 1) * gap;
    let x = W / 2 - totalW / 2;
    for (const color of BELT_STRIP) {
      if (color === "coral") {
        const grad = ctx.createLinearGradient(x, 560, x + stripWidth, 590);
        grad.addColorStop(0, "#ff6b6b");
        grad.addColorStop(0.55, "#262323");
        grad.addColorStop(1, "#ff6b6b");
        ctx.fillStyle = grad;
      } else {
        ctx.fillStyle = color;
      }
      ctx.beginPath();
      ctx.roundRect(x, 560, stripWidth, 30, 6);
      ctx.fill();
      ctx.strokeStyle = "rgba(0,0,0,0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();
      x += stripWidth + gap;
    }

    if (ninjaMaster) {
      ctx.fillStyle = "#262323";
      ctx.font = "700 26px Georgia, serif";
      ctx.fillText(`🥷 ${t.certNinjaMaster}`, W / 2, 640);
    }

    ctx.fillStyle = "#6b6154";
    ctx.font = "24px Georgia, serif";
    ctx.fillText(`${t.certDateLabel} ${dateText}`, W / 2, 680);

    ctx.fillStyle = "#a89d8a";
    ctx.font = "700 22px Georgia, serif";
    ctx.fillText("playmathdojo.com", W / 2, 770);
  }, [name, locale, t, totalStripes, dateText, ninjaMaster]);

  function handleDownload() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "math-dojo-certificate.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  function handleShare() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob(async (blob) => {
      const outcome = blob
        ? await shareImage(blob, "math-dojo-certificate.png", t.certShareText)
        : await shareText(t.certShareText);
      if (outcome === "copied") {
        setShareOutcome("copied");
        window.setTimeout(() => setShareOutcome(null), 2500);
      }
    }, "image/png");
  }

  return (
    <div className={styles.page}>
      <button type="button" className={styles.back} onClick={onBack}>
        ← {t.certBackToMap}
      </button>

      <label className={styles.nameLabel} htmlFor="cert-name">
        {t.certNameLabel}
      </label>
      <input
        id="cert-name"
        className={styles.nameInput}
        type="text"
        maxLength={40}
        value={name}
        placeholder={t.certNamePlaceholder}
        onChange={(e) => setName(e.target.value)}
      />

      <div className={styles.canvasWrap}>
        <canvas ref={canvasRef} width={1200} height={820} className={styles.canvas} />
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.primaryBtn} onClick={handleDownload}>
          ⬇️ {t.certDownload}
        </button>
        <button type="button" className={styles.shareBtn} onClick={handleShare}>
          📣 {shareOutcome === "copied" ? t.shareCopied : t.certShare}
        </button>
      </div>
    </div>
  );
}
