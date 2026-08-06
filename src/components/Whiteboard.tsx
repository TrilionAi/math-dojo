import { useEffect, useRef, useState } from "react";
import { boardView, getBoardItems, setBoardItems, type BoardText } from "../engine/whiteboard";
import { useLocale } from "../i18n/LocaleContext";
import { UI_STRINGS } from "../i18n/ui";
import styles from "./Whiteboard.module.css";

type Tool = "pen" | "eraser" | "hand";

const PEN_COLORS = ["#2b2620", "#ff6b47", "#1fb6a4", "#3d7fe0"];
const GRID_SIZE = 28;
const TEXT_SIZE = 22;
const TEXT_WRAP = 30;
const MIN_ZOOM = 0.25;
const MAX_ZOOM = 4;

interface WhiteboardProps {
  onClose: () => void;
}

function wrapText(text: string): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if (line && (line + " " + word).length > TEXT_WRAP) {
      lines.push(line);
      line = word;
    } else {
      line = line ? line + " " + word : word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** An infinite scratchboard: pan and zoom over a dot grid, draw with a finger
 * or mouse, drop exercises onto it and drag them around. Inspired by the Easel
 * canvas — the view transform lives outside React (in `boardView`) and the
 * canvas repaints imperatively, so drawing stays smooth mid-gesture. */
export function Whiteboard({ onClose }: WhiteboardProps) {
  const { locale } = useLocale();
  const t = UI_STRINGS[locale];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tool, setTool] = useState<Tool>("pen");
  const [color, setColor] = useState(PEN_COLORS[0]);

  const toolRef = useRef(tool);
  toolRef.current = tool;
  const colorRef = useRef(color);
  colorRef.current = color;
  const repaintRef = useRef<() => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = window.devicePixelRatio || 1;
    /** The stroke being drawn right now — rendered by paint() but only
     * committed to the store on pointer-up. */
    let liveStroke: number[] | null = null;

    function strokeWidth(): number {
      return 3 / boardView.zoom + 1.6;
    }

    function textBounds(item: BoardText): { x: number; y: number; w: number; h: number } {
      ctx!.font = `700 ${TEXT_SIZE}px system-ui, sans-serif`;
      const lines = wrapText(item.text);
      const w = Math.max(...lines.map((l) => ctx!.measureText(l).width));
      return { x: item.x - 12, y: item.y - TEXT_SIZE - 6, w: w + 24, h: lines.length * (TEXT_SIZE * 1.3) + 16 };
    }

    function drawPolyline(points: number[], strokeColor: string, size: number) {
      if (points.length < 4) {
        ctx!.fillStyle = strokeColor;
        ctx!.beginPath();
        ctx!.arc(points[0], points[1], size / 2, 0, Math.PI * 2);
        ctx!.fill();
        return;
      }
      ctx!.strokeStyle = strokeColor;
      ctx!.lineWidth = size;
      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
      ctx!.beginPath();
      ctx!.moveTo(points[0], points[1]);
      for (let i = 2; i < points.length; i += 2) ctx!.lineTo(points[i], points[i + 1]);
      ctx!.stroke();
    }

    function paint() {
      const { x: vx, y: vy, zoom } = boardView;
      const cw = canvas!.clientWidth;
      const ch = canvas!.clientHeight;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.fillStyle = "#fdfaf3";
      ctx!.fillRect(0, 0, cw, ch);

      const step = GRID_SIZE * zoom;
      if (step >= 9) {
        ctx!.fillStyle = "rgba(138, 122, 96, 0.28)";
        const startX = ((vx % step) + step) % step;
        const startY = ((vy % step) + step) % step;
        for (let px = startX; px < cw; px += step) {
          for (let py = startY; py < ch; py += step) {
            ctx!.beginPath();
            ctx!.arc(px, py, 1.1, 0, Math.PI * 2);
            ctx!.fill();
          }
        }
      }

      ctx!.setTransform(dpr * zoom, 0, 0, dpr * zoom, dpr * vx, dpr * vy);
      for (const item of getBoardItems()) {
        if (item.kind === "stroke") {
          drawPolyline(item.points, item.color, item.size);
        } else {
          const b = textBounds(item);
          ctx!.fillStyle = "#fff8e8";
          ctx!.strokeStyle = "#d4a017";
          ctx!.lineWidth = 1.5;
          ctx!.beginPath();
          ctx!.roundRect(b.x, b.y, b.w, b.h, 8);
          ctx!.fill();
          ctx!.stroke();
          ctx!.fillStyle = "#2b2620";
          ctx!.font = `700 ${TEXT_SIZE}px system-ui, sans-serif`;
          wrapText(item.text).forEach((line, i) => {
            ctx!.fillText(line, item.x, item.y + i * (TEXT_SIZE * 1.3));
          });
        }
      }
      if (liveStroke) drawPolyline(liveStroke, colorRef.current, strokeWidth());
    }

    function schedule() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(paint);
    }
    repaintRef.current = schedule;

    function resize() {
      canvas!.width = canvas!.clientWidth * dpr;
      canvas!.height = canvas!.clientHeight * dpr;
      paint();
    }

    const toWorld = (sx: number, sy: number) => ({
      x: (sx - boardView.x) / boardView.zoom,
      y: (sy - boardView.y) / boardView.zoom,
    });

    const pointers = new Map<number, { x: number; y: number }>();
    let mode: "none" | "draw" | "erase" | "pan" | "pinch" | "dragText" = "none";
    let draggedIndex = -1;
    let dragOffset = { x: 0, y: 0 };
    let pinchStart = { dist: 0, zoom: 1, cx: 0, cy: 0 };

    function eraseAt(sx: number, sy: number) {
      const w = toWorld(sx, sy);
      const radius = 16 / boardView.zoom;
      const items = getBoardItems();
      const survivors = items.filter((item) => {
        if (item.kind === "text") {
          const b = textBounds(item);
          return !(w.x >= b.x && w.x <= b.x + b.w && w.y >= b.y && w.y <= b.y + b.h);
        }
        for (let i = 0; i < item.points.length; i += 2) {
          const dx = item.points[i] - w.x;
          const dy = item.points[i + 1] - w.y;
          if (dx * dx + dy * dy < radius * radius) return false;
        }
        return true;
      });
      if (survivors.length !== items.length) {
        setBoardItems(survivors);
        schedule();
      }
    }

    function hitTextIndex(sx: number, sy: number): number {
      const w = toWorld(sx, sy);
      const items = getBoardItems();
      for (let i = items.length - 1; i >= 0; i -= 1) {
        const item = items[i];
        if (item.kind !== "text") continue;
        const b = textBounds(item);
        if (w.x >= b.x && w.x <= b.x + b.w && w.y >= b.y && w.y <= b.y + b.h) return i;
      }
      return -1;
    }

    function onPointerDown(e: PointerEvent) {
      canvas!.setPointerCapture(e.pointerId);
      const rect = canvas!.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;
      pointers.set(e.pointerId, { x: sx, y: sy });

      if (pointers.size === 2) {
        liveStroke = null; // a second finger cancels the stroke and starts a pinch
        const [a, b] = [...pointers.values()];
        pinchStart = {
          dist: Math.hypot(a.x - b.x, a.y - b.y),
          zoom: boardView.zoom,
          cx: (a.x + b.x) / 2,
          cy: (a.y + b.y) / 2,
        };
        mode = "pinch";
        schedule();
        return;
      }

      const activeTool = toolRef.current;
      if (activeTool === "hand") {
        mode = "pan";
        return;
      }
      if (activeTool === "eraser") {
        mode = "erase";
        eraseAt(sx, sy);
        return;
      }
      const hit = hitTextIndex(sx, sy);
      if (hit >= 0) {
        mode = "dragText";
        draggedIndex = hit;
        const item = getBoardItems()[hit] as BoardText;
        const w = toWorld(sx, sy);
        dragOffset = { x: w.x - item.x, y: w.y - item.y };
        return;
      }
      mode = "draw";
      const w = toWorld(sx, sy);
      liveStroke = [w.x, w.y];
      schedule();
    }

    function onPointerMove(e: PointerEvent) {
      if (!pointers.has(e.pointerId)) return;
      const rect = canvas!.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;
      const prev = pointers.get(e.pointerId)!;
      pointers.set(e.pointerId, { x: sx, y: sy });

      if (mode === "pinch" && pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        const cx = (a.x + b.x) / 2;
        const cy = (a.y + b.y) / 2;
        const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, (pinchStart.zoom * dist) / (pinchStart.dist || 1)));
        const worldCx = (pinchStart.cx - boardView.x) / boardView.zoom;
        const worldCy = (pinchStart.cy - boardView.y) / boardView.zoom;
        boardView.zoom = nextZoom;
        boardView.x = cx - worldCx * nextZoom;
        boardView.y = cy - worldCy * nextZoom;
        pinchStart = { dist, zoom: nextZoom, cx, cy };
        schedule();
        return;
      }
      if (mode === "pan") {
        boardView.x += sx - prev.x;
        boardView.y += sy - prev.y;
        schedule();
        return;
      }
      if (mode === "erase") {
        eraseAt(sx, sy);
        return;
      }
      if (mode === "dragText" && draggedIndex >= 0) {
        const w = toWorld(sx, sy);
        const items = getBoardItems().map((item, i) =>
          i === draggedIndex && item.kind === "text"
            ? { ...item, x: w.x - dragOffset.x, y: w.y - dragOffset.y }
            : item,
        );
        setBoardItems(items);
        schedule();
        return;
      }
      if (mode === "draw" && liveStroke) {
        const w = toWorld(sx, sy);
        liveStroke.push(w.x, w.y);
        schedule();
      }
    }

    function onPointerUp(e: PointerEvent) {
      pointers.delete(e.pointerId);
      if (mode === "draw" && liveStroke) {
        setBoardItems([
          ...getBoardItems(),
          { kind: "stroke", color: colorRef.current, size: strokeWidth(), points: liveStroke },
        ]);
        liveStroke = null;
      }
      if (pointers.size === 0) {
        mode = "none";
        draggedIndex = -1;
      }
      schedule();
    }

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      const rect = canvas!.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;
      const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, boardView.zoom * factor));
      const wx = (sx - boardView.x) / boardView.zoom;
      const wy = (sy - boardView.y) / boardView.zoom;
      boardView.x = sx - wx * nextZoom;
      boardView.y = sy - wy * nextZoom;
      boardView.zoom = nextZoom;
      schedule();
    }

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("wheel", onWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // while the board is open, keep keystrokes away from the drill underneath
  useEffect(() => {
    function trap(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      e.stopPropagation();
    }
    window.addEventListener("keydown", trap, true);
    return () => window.removeEventListener("keydown", trap, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleUndo() {
    const items = getBoardItems();
    if (items.length === 0) return;
    setBoardItems(items.slice(0, -1));
    repaintRef.current();
  }

  function handleClear() {
    setBoardItems([]);
    repaintRef.current();
  }

  function handleResetView() {
    boardView.x = 0;
    boardView.y = 0;
    boardView.zoom = 1;
    repaintRef.current();
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.topBar}>
        <span className={styles.title}>🖍️ {t.boardTitle}</span>
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label={t.boardClose}>
          ✕
        </button>
      </div>

      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.toolbar}>
        {PEN_COLORS.map((c) => (
          <button
            key={c}
            type="button"
            aria-label={t.boardPen}
            className={[styles.colorBtn, tool === "pen" && color === c ? styles.toolActive : ""].join(" ")}
            style={{ background: c }}
            onClick={() => {
              setTool("pen");
              setColor(c);
            }}
          />
        ))}
        <span className={styles.divider} />
        <button
          type="button"
          aria-label={t.boardEraser}
          title={t.boardEraser}
          className={[styles.toolBtn, tool === "eraser" ? styles.toolActive : ""].join(" ")}
          onClick={() => setTool("eraser")}
        >
          🧽
        </button>
        <button
          type="button"
          aria-label={t.boardHand}
          title={t.boardHand}
          className={[styles.toolBtn, tool === "hand" ? styles.toolActive : ""].join(" ")}
          onClick={() => setTool("hand")}
        >
          ✋
        </button>
        <span className={styles.divider} />
        <button type="button" aria-label={t.boardUndo} title={t.boardUndo} className={styles.toolBtn} onClick={handleUndo}>
          ↩️
        </button>
        <button type="button" aria-label={t.boardClear} title={t.boardClear} className={styles.toolBtn} onClick={handleClear}>
          🗑️
        </button>
        <button
          type="button"
          aria-label={t.boardResetView}
          title={t.boardResetView}
          className={styles.toolBtn}
          onClick={handleResetView}
        >
          🎯
        </button>
      </div>
    </div>
  );
}
