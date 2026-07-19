import { supabase } from "../lib/supabase";
import type { ProgressState, StripeResult } from "../types";

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
  if (!data) return { stripeResults: {}, practiceDays: [] };
  return {
    stripeResults: (data.stripe_results as Record<string, StripeResult>) ?? {},
    practiceDays: (data.practice_days as string[]) ?? [],
  };
}

export async function pushCloudProgress(userId: string, progress: ProgressState): Promise<void> {
  await supabase.from("progress").upsert({
    user_id: userId,
    stripe_results: progress.stripeResults,
    practice_days: progress.practiceDays ?? [],
  });
}

/** Merge local and cloud progress on login — never silently discard either side.
 * Per stripe: passed wins if either side passed; keep the best accuracy/speed/
 * attempt-count seen on either device. Practice days: union, a streak day counts
 * if either device recorded practicing that day. */
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
  return { stripeResults, practiceDays };
}
