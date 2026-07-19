import type { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

export interface AuthResult {
  error: string | null;
}

export async function signUp(email: string, password: string): Promise<AuthResult> {
  const { error } = await supabase.auth.signUp({ email, password });
  return { error: error?.message ?? null };
}

export async function signIn(email: string, password: string): Promise<AuthResult> {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return { error: error?.message ?? null };
}

export async function signOut(): Promise<AuthResult> {
  const { error } = await supabase.auth.signOut();
  return { error: error?.message ?? null };
}

/** Sends a reset-password email. Supabase redirects back to this same URL with a
 * recovery token in the hash fragment — the client auto-detects it and fires a
 * PASSWORD_RECOVERY event via onAuthChange, which is what should trigger the
 * "set a new password" screen (see App.tsx), not a manually-encoded query param. */
export async function requestPasswordReset(email: string): Promise<AuthResult> {
  const redirectTo = `${window.location.origin}${window.location.pathname}`;
  const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
  return { error: error?.message ?? null };
}

export async function updatePassword(newPassword: string): Promise<AuthResult> {
  const { error } = await supabase.auth.updateUser({ password: newPassword });
  return { error: error?.message ?? null };
}

export async function getSession(): Promise<Session | null> {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

/** Returns an unsubscribe function. `event === "PASSWORD_RECOVERY"` is the signal
 * to show the reset-password screen; other events (SIGNED_IN, SIGNED_OUT, etc.)
 * are what drive the sync engine (see engine/sync.ts). */
export function onAuthChange(callback: (event: AuthChangeEvent, session: Session | null) => void): () => void {
  const { data } = supabase.auth.onAuthStateChange((event, session) => callback(event, session));
  return () => data.subscription.unsubscribe();
}
