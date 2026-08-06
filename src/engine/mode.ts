/** Which journey the person is looking at: the classic drills or Ninja mode
 * (the same belts again, as fixed word problems on a dark dojo theme). */

const MODE_KEY = "math-dojo:mode:v1";

export type GameMode = "normal" | "ninja";

export function loadMode(): GameMode {
  try {
    return localStorage.getItem(MODE_KEY) === "ninja" ? "ninja" : "normal";
  } catch {
    return "normal";
  }
}

export function saveMode(mode: GameMode): void {
  try {
    localStorage.setItem(MODE_KEY, mode);
  } catch {
    // storage unavailable — the mode just won't persist
  }
}
