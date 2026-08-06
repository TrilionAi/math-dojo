const MUTE_STORAGE_KEY = "math-dojo:muted:v1";

let ctx: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  if (!ctx) ctx = new Ctor();
  if (ctx.state === "suspended") ctx.resume().catch(() => {});
  return ctx;
}

export function isMuted(): boolean {
  try {
    return localStorage.getItem(MUTE_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function setMuted(muted: boolean): void {
  try {
    localStorage.setItem(MUTE_STORAGE_KEY, muted ? "1" : "0");
  } catch {
    // storage unavailable — preference just won't persist
  }
}

interface Note {
  freq: number;
  /** Seconds from the call's start. */
  at: number;
  /** Seconds long. */
  dur: number;
  gain?: number;
  type?: OscillatorType;
}

function playNotes(notes: Note[]): void {
  if (isMuted()) return;
  const audio = getContext();
  if (!audio) return;
  const now = audio.currentTime;
  for (const note of notes) {
    const osc = audio.createOscillator();
    const gainNode = audio.createGain();
    osc.type = note.type ?? "sine";
    osc.frequency.value = note.freq;
    const start = now + note.at;
    const end = start + note.dur;
    const peak = note.gain ?? 0.16;
    gainNode.gain.setValueAtTime(0, start);
    gainNode.gain.linearRampToValueAtTime(peak, start + Math.min(0.02, note.dur / 4));
    gainNode.gain.exponentialRampToValueAtTime(0.0001, end);
    osc.connect(gainNode);
    gainNode.connect(audio.destination);
    osc.start(start);
    osc.stop(end + 0.02);
  }
}

/** Two-note ascending chime — a single correct answer. */
export function playCorrect(): void {
  playNotes([
    { freq: 659.25, at: 0, dur: 0.09 },
    { freq: 987.77, at: 0.07, dur: 0.14 },
  ]);
}

/** Soft low thud — a wrong answer, deliberately unobtrusive since it repeats often during practice. */
export function playIncorrect(): void {
  playNotes([{ freq: 174.61, at: 0, dur: 0.16, gain: 0.1, type: "triangle" }]);
}

/** A brighter arpeggio for a streak milestone (3, 5, 10, 15...) — a small extra reward. */
export function playStreakMilestone(): void {
  playNotes([
    { freq: 523.25, at: 0, dur: 0.09, gain: 0.13 },
    { freq: 659.25, at: 0.06, dur: 0.09, gain: 0.13 },
    { freq: 783.99, at: 0.12, dur: 0.16, gain: 0.15 },
  ]);
}

/** Fuller arpeggio — finishing a page within a drill. */
export function playPageComplete(): void {
  playNotes([
    { freq: 523.25, at: 0, dur: 0.11, gain: 0.14 },
    { freq: 659.25, at: 0.08, dur: 0.11, gain: 0.14 },
    { freq: 783.99, at: 0.16, dur: 0.11, gain: 0.14 },
    { freq: 1046.5, at: 0.24, dur: 0.22, gain: 0.16 },
  ]);
}

/** The big one — a stripe earned on the results screen. */
export function playFanfare(): void {
  playNotes([
    { freq: 523.25, at: 0, dur: 0.14, gain: 0.15 },
    { freq: 659.25, at: 0.1, dur: 0.14, gain: 0.15 },
    { freq: 783.99, at: 0.2, dur: 0.14, gain: 0.15 },
    { freq: 1046.5, at: 0.3, dur: 0.4, gain: 0.18 },
    { freq: 1318.5, at: 0.34, dur: 0.36, gain: 0.12 },
  ]);
}

/** The mode-switch moment: entering the night dojo — a deep gong with a dark
 * rising shimmer; returning to day — a soft bright sweep upward. */
export function playModeTransition(toNinja: boolean): void {
  if (toNinja) {
    playNotes([
      { freq: 98, at: 0, dur: 0.9, gain: 0.22, type: "triangle" },
      { freq: 147, at: 0.02, dur: 0.7, gain: 0.1, type: "sine" },
      { freq: 392, at: 0.35, dur: 0.3, gain: 0.07, type: "sine" },
      { freq: 587.33, at: 0.5, dur: 0.35, gain: 0.06, type: "sine" },
      { freq: 784, at: 0.62, dur: 0.4, gain: 0.05, type: "sine" },
    ]);
  } else {
    playNotes([
      { freq: 523.25, at: 0, dur: 0.18, gain: 0.1 },
      { freq: 659.25, at: 0.1, dur: 0.18, gain: 0.1 },
      { freq: 1046.5, at: 0.2, dur: 0.45, gain: 0.12 },
    ]);
  }
}

/** The biggest one — a whole BELT earned: a longer rising fanfare ending on a full chord. */
export function playBeltFanfare(): void {
  playNotes([
    { freq: 392.0, at: 0, dur: 0.16, gain: 0.14 },
    { freq: 523.25, at: 0.12, dur: 0.16, gain: 0.15 },
    { freq: 659.25, at: 0.24, dur: 0.16, gain: 0.15 },
    { freq: 783.99, at: 0.36, dur: 0.16, gain: 0.16 },
    { freq: 1046.5, at: 0.48, dur: 0.5, gain: 0.18 },
    // closing chord
    { freq: 523.25, at: 0.62, dur: 0.65, gain: 0.1 },
    { freq: 659.25, at: 0.62, dur: 0.65, gain: 0.1 },
    { freq: 783.99, at: 0.62, dur: 0.65, gain: 0.1 },
    { freq: 1318.5, at: 0.66, dur: 0.6, gain: 0.09 },
  ]);
}
