import type { Belt, BeltId, LocalizedText, Problem, SecondaryAnswerFormat, Stripe } from "../types";

/**
 * Ninja mode machinery. A ninja stripe holds a FIXED, hand-written bank of
 * word problems (the person already trained the raw skill in normal mode —
 * here the job is reading the situation and finding the math hidden in it).
 * The bank is served shuffled on every attempt, one page per stripe.
 * Currencies follow the language: R$ (pt), $ (en), € (es).
 */

export interface NinjaQuestion {
  en: string;
  pt: string;
  es: string;
  /** Sensei feedback: the trap + the path, never the final number (see Problem.explanation). */
  explanation?: { en: string; pt: string; es: string };
  answer: number;
  secondaryAnswer?: number;
  secondaryFormat?: SecondaryAnswerFormat;
  secondaryDigits?: number;
  allowNegative?: boolean;
  isEquation?: boolean;
  equationLabel?: string;
}

let ninjaIdCounter = 0;

function toProblem(q: NinjaQuestion): Problem {
  ninjaIdCounter += 1;
  return {
    id: `nj${ninjaIdCounter}`,
    prompt: q.en,
    promptL10n: { en: q.en, pt: q.pt, es: q.es },
    answer: q.answer,
    operands: [q.answer],
    ...(q.explanation !== undefined ? { explanation: q.explanation } : {}),
    ...(q.secondaryAnswer !== undefined ? { secondaryAnswer: q.secondaryAnswer } : {}),
    ...(q.secondaryFormat !== undefined ? { secondaryFormat: q.secondaryFormat } : {}),
    ...(q.secondaryDigits !== undefined ? { secondaryDigits: q.secondaryDigits } : {}),
    ...(q.allowNegative ? { allowNegative: true } : {}),
    ...(q.isEquation ? { isEquation: true } : {}),
    ...(q.equationLabel !== undefined ? { equationLabel: q.equationLabel } : {}),
  };
}

function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** The bank, shuffled fresh on every attempt — fixed content, never a fixed order. */
function bankGenerate(bank: NinjaQuestion[]): (count: number) => Problem[] {
  return () => shuffled(bank).map(toProblem);
}

const NINJA_STEPS = [
  {
    text: {
      en: "Read the whole situation first — no numbers touched yet.",
      pt: "Leia a situação inteira primeiro — sem mexer nos números ainda.",
      es: "Lee toda la situación primero — sin tocar los números todavía.",
    },
  },
  {
    text: {
      en: "Spot what is being asked and which numbers matter (some are there to distract).",
      pt: "Identifique o que está sendo pedido e quais números importam (alguns estão ali só para distrair).",
      es: "Identifica qué se pide y qué números importan (algunos están solo para distraer).",
    },
  },
  {
    text: {
      en: "Set up the operation, solve it, and check the answer against the story.",
      pt: "Monte a operação, resolva, e confira se a resposta faz sentido na história.",
      es: "Plantea la operación, resuélvela y verifica que la respuesta tenga sentido en la historia.",
    },
  },
];

interface NinjaStripeSpec {
  /** Suffix for the stripe id: `${beltId}-${slug}`. */
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  intro: LocalizedText;
  bank: NinjaQuestion[];
  /** Per-question time target (seconds) — word problems need reading time. */
  targetTimeSec: number;
}

export function makeNinjaStripe(beltId: BeltId, index: number, spec: NinjaStripeSpec): Stripe {
  return {
    id: `${beltId}-${spec.slug}`,
    beltId,
    index,
    title: spec.title,
    summary: spec.summary,
    lesson: {
      intro: spec.intro,
      example: toProblem(spec.bank[0]),
      steps: NINJA_STEPS,
    },
    mastery: {
      problemsPerPage: spec.bank.length,
      pagesToMaster: 1,
      passAccuracy: 0.8,
      targetTimeSec: spec.targetTimeSec,
    },
    generate: bankGenerate(spec.bank),
  };
}

const NINJA_EXAM_DEGREE_NAME: LocalizedText = {
  en: "Ninja Exam",
  pt: "Prova Ninja",
  es: "Examen Ninja",
};

/** The ninja graduation exam: one randomly-picked question from each stripe's
 * bank — a different exam on every attempt, one page, pass to earn the belt. */
function makeNinjaExam(beltId: BeltId, banks: NinjaQuestion[][], targetTimeSec: number): Stripe {
  const n = banks.length;
  return {
    id: `${beltId}-exam`,
    beltId,
    index: 1,
    degree: { index: 0, name: NINJA_EXAM_DEGREE_NAME },
    title: { en: "Ninja graduation exam", pt: "Exame de graduação ninja", es: "Examen de graduación ninja" },
    summary: {
      en: `One surprise question from each of the ${n} missions — pass it and the ninja belt is yours.`,
      pt: `Uma questão surpresa de cada uma das ${n} missões — passe e a faixa ninja é sua.`,
      es: `Una pregunta sorpresa de cada una de las ${n} misiones — apruébalo y el cinturón ninja es tuyo.`,
    },
    lesson: {
      intro: {
        en: "The final ninja test: one question drawn at random from every mission of this belt — a different exam each try. Read like a ninja: calm, sharp, nothing wasted.",
        pt: "A prova ninja final: uma questão sorteada de cada missão desta faixa — um exame diferente a cada tentativa. Leia como um ninja: calmo, afiado, sem desperdício.",
        es: "La prueba ninja final: una pregunta sorteada de cada misión de este cinturón — un examen diferente en cada intento. Lee como un ninja: tranquilo, agudo, sin desperdicio.",
      },
      example: toProblem(banks[0][0]),
      steps: NINJA_STEPS,
    },
    mastery: { problemsPerPage: n, pagesToMaster: 1, passAccuracy: 0.8, targetTimeSec },
    generate: () => shuffled(banks.map((bank) => bank[Math.floor(Math.random() * bank.length)])).map(toProblem),
  };
}

export interface NinjaBeltSpec {
  /** The normal belt this mirrors — "white" → ninja belt "ninja-white". */
  source: BeltId;
  name: LocalizedText;
  order: number;
  operationLabel: LocalizedText;
  colorVar: string;
  tagline: LocalizedText;
  stripes: NinjaStripeSpec[];
}

export function makeNinjaBelt(spec: NinjaBeltSpec): Belt {
  const beltId = `ninja-${spec.source}` as BeltId;
  const stripes = spec.stripes.map((s, i) => makeNinjaStripe(beltId, i + 1, s));
  const examTime = Math.max(...spec.stripes.map((s) => s.targetTimeSec));
  stripes.push(
    makeNinjaExam(
      beltId,
      spec.stripes.map((s) => s.bank),
      examTime,
    ),
  );
  return {
    id: beltId,
    name: spec.name,
    order: spec.order,
    operationLabel: spec.operationLabel,
    colorVar: spec.colorVar,
    tagline: spec.tagline,
    stripes,
  };
}

/** "ninja-green" → "green": which normal belt must be earned to unlock it. */
export function ninjaSourceBeltId(ninjaBeltId: BeltId): BeltId {
  return ninjaBeltId.replace(/^ninja-/, "") as BeltId;
}
