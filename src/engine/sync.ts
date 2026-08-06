import { supabase } from "../lib/supabase";
import type { ProgressState, StripeResult } from "../types";

/** Page checkpoints ride inside the stripe_results jsonb column under this
 * reserved key — no schema migration needed, and old clients simply ignore it.
 * The in-memory ProgressState always keeps them in their own field; embedding
 * happens only at the wire boundary. */
const CHECKPOINTS_KEY = "__pageCheckpoints";

/** Returns null only when the cloud couldn't be reached at all (network/auth
 * error) — callers should leave local progress untouched in that case, not
 * overwrite it with an empty state. A brand-new account with no saved row yet
 * comes back as an empty (not null) ProgressState. */
export async function pullCloudProgress(userId: string): Promise<ProgressState | null> {
  const { data, error } = await supabase
    .from("progress")
    .select("stripe_results, practice_days")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) return null;
  if (!data) return { stripeResults: {}, practiceDays: [], pageCheckpoints: {} };
  const raw = (data.stripe_results as Record<string, unknown>) ?? {};
  const { [CHECKPOINTS_KEY]: rawCheckpoints, ...stripeResults } = raw;
  return {
    stripeResults: stripeResults as Record<string, StripeResult>,
    practiceDays: (data.practice_days as string[]) ?? [],
    pageCheckpoints: (rawCheckpoints as Record<string, number>) ?? {},
  };
}

export async function pushCloudProgress(userId: string, progress: ProgressState): Promise<void> {
  const wireResults: Record<string, unknown> = { ...progress.stripeResults };
  if (progress.pageCheckpoints && Object.keys(progress.pageCheckpoints).length > 0) {
    wireResults[CHECKPOINTS_KEY] = progress.pageCheckpoints;
  }
  await supabase.from("progress").upsert({
    user_id: userId,
    stripe_results: wireResults,
    practice_days: progress.practiceDays ?? [],
  });
}

/** Merge local and cloud progress on login — never silently discard either side.
 * Per stripe: passed wins if either side passed; keep the best accuracy/speed/
 * attempt-count seen on either device. Practice days: union. Page checkpoints:
 * the furthest page wins, and a stripe already passed needs no checkpoint. */
export function mergeProgress(local: ProgressState, cloud: ProgressState): ProgressState {
  const stripeResults: Record<string, StripeResult> = { ...cloud.stripeResults };
  for (const [id, localResult] of Object.entries(local.stripeResults)) {
    const cloudResult = stripeResults[id];
    stripeResults[id] = cloudResult
      ? {
          stripeId: id,
          passed: localResult.passed || cloudResult.passed,
          bestAccuracy: Math.max(localResult.bestAccuracy, cloudResult.bestAccuracy),
          bestAvgTimeSec: Math.min(localResult.bestAvgTimeSec, cloudResult.bestAvgTimeSec),
          attempts: Math.max(localResult.attempts, cloudResult.attempts),
        }
      : localResult;
  }
  const practiceDays = Array.from(new Set([...(local.practiceDays ?? []), ...(cloud.practiceDays ?? [])])).sort();
  const pageCheckpoints: Record<string, number> = {};
  const allCheckpointIds = new Set([
    ...Object.keys(local.pageCheckpoints ?? {}),
    ...Object.keys(cloud.pageCheckpoints ?? {}),
  ]);
  for (const id of allCheckpointIds) {
    if (stripeResults[id]?.passed) continue;
    const furthest = Math.max(local.pageCheckpoints?.[id] ?? 0, cloud.pageCheckpoints?.[id] ?? 0);
    if (furthest > 0) pageCheckpoints[id] = furthest;
  }
  return { stripeResults, practiceDays, pageCheckpoints };
}
