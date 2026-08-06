/** The whiteboard's content — module-level so scribbles survive closing the
 * overlay and navigating between screens, plus a localStorage mirror so they
 * survive a page reload too. Coordinates are world-space (pan/zoom applies
 * on top when drawing to the screen). */

const STORAGE_KEY = "math-dojo:board:v1";
const MAX_ITEMS = 800;

export interface BoardStroke {
  kind: "stroke";
  color: string;
  /** Brush diameter in world units. */
  size: number;
  /** Flat [x0, y0, x1, y1, ...] polyline. */
  points: number[];
}

export interface BoardText {
  kind: "text";
  text: string;
  x: number;
  y: number;
}

export type BoardItem = BoardStroke | BoardText;

export interface BoardView {
  x: number;
  y: number;
  zoom: number;
}

let items: BoardItem[] = load();
export const boardView: BoardView = { x: 0, y: 0, zoom: 1 };

function load(): BoardItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as BoardItem[]) : [];
  } catch {
    return [];
  }
}

let persistTimer: number | undefined;

function persist(): void {
  if (typeof window === "undefined") return;
  window.clearTimeout(persistTimer);
  persistTimer = window.setTimeout(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage full/unavailable — the board just won't survive a reload
    }
  }, 400);
}

export function getBoardItems(): BoardItem[] {
  return items;
}

export function setBoardItems(next: BoardItem[]): void {
  items = next.length > MAX_ITEMS ? next.slice(next.length - MAX_ITEMS) : next;
  persist();
}

/** Drops an exercise's text onto the board near the center of the current view.
 * Consecutive drops stack slightly so they don't land on top of each other. */
let dropCount = 0;

export function addBoardText(text: string, viewportWidth: number, viewportHeight: number): void {
  const worldX = (viewportWidth / 2 - boardView.x) / boardView.zoom;
  const worldY = (viewportHeight / 3 - boardView.y) / boardView.zoom;
  const offset = (dropCount % 5) * 48;
  dropCount += 1;
  setBoardItems([...items, { kind: "text", text, x: worldX - 80 + offset, y: worldY + offset }]);
}
