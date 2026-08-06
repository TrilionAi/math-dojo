/** Player preferences that change how sessions are judged — stored locally so
 * they work with or without an account. */

const TIMED_KEY = "math-dojo:settings:timed:v1";

/** Timed mode (default ON): passing a stripe requires the average time per
 * problem to stay under the stripe's target, on top of the accuracy bar.
 * With it OFF, only accuracy counts — practice at your own pace. */
export function isTimedMode(): boolean {
  try {
    return localStorage.getItem(TIMED_KEY) !== "0";
  } catch {
    return true;
  }
}

export function setTimedMode(on: boolean): void {
  try {
    localStorage.setItem(TIMED_KEY, on ? "1" : "0");
  } catch {
    // storage unavailable — the preference just won't persist
  }
}
