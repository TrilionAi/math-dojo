import { useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { signUp, signIn, signOut, requestPasswordReset, updatePassword } from "../engine/auth";
import { useLocale } from "../i18n/LocaleContext";
import { UI_STRINGS } from "../i18n/ui";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import styles from "./AccountScreen.module.css";

interface AccountScreenProps {
  session: Session | null;
  forceReset: boolean;
  onBack: () => void;
  onResetHandled: () => void;
}

type Mode = "login" | "signup" | "forgot" | "reset";

export function AccountScreen({ session, forceReset, onBack, onResetHandled }: AccountScreenProps) {
  const { locale } = useLocale();
  const t = UI_STRINGS[locale];

  const [mode, setMode] = useState<Mode>(forceReset ? "reset" : "login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  function switchMode(next: Mode) {
    setMode(next);
    setError(null);
    setNotice(null);
    setPassword("");
    setConfirmPassword("");
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) setError(error);
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError(t.accountPasswordMismatch);
      return;
    }
    setLoading(true);
    setError(null);
    const { error } = await signUp(email, password);
    setLoading(false);
    if (error) {
      setError(error);
    } else {
      setNotice(t.accountSignupSuccess(email));
    }
  }

  async function handleForgot(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await requestPasswordReset(email);
    setLoading(false);
    if (error) {
      setError(error);
    } else {
      setNotice(t.accountForgotSuccess(email));
    }
  }

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError(t.accountPasswordMismatch);
      return;
    }
    setLoading(true);
    setError(null);
    const { error } = await updatePassword(password);
    setLoading(false);
    if (error) {
      setError(error);
    } else {
      setNotice(t.accountResetSuccess);
      onResetHandled();
    }
  }

  async function handleSignOut() {
    setLoading(true);
    await signOut();
    setLoading(false);
  }

  if (session && mode !== "reset") {
    return (
      <div className={styles.page}>
        <div className={styles.topRow}>
          <button type="button" className={styles.back} onClick={onBack}>
            ← {t.backToMap}
          </button>
          <LanguageSwitcher />
        </div>
        <header className={styles.header}>
          <div className={styles.avatar}>👤</div>
          <h1 className={styles.title}>{t.accountTitleLoggedIn}</h1>
          <p className={styles.email}>{session.user.email}</p>
        </header>
        <p className={styles.syncNote}>{t.accountSyncNote}</p>
        <button type="button" className={styles.primaryBtn} onClick={handleSignOut} disabled={loading}>
          {t.accountSignOut}
        </button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.topRow}>
        <button type="button" className={styles.back} onClick={onBack}>
          ← {t.backToMap}
        </button>
        <LanguageSwitcher />
      </div>

      <header className={styles.header}>
        <div className={styles.avatar}>🥋</div>
        <h1 className={styles.title}>
          {mode === "login" && t.accountTitleLogin}
          {mode === "signup" && t.accountTitleSignup}
          {mode === "forgot" && t.accountTitleForgot}
          {mode === "reset" && t.accountTitleReset}
        </h1>
        {mode !== "reset" && <p className={styles.subtitle}>{t.accountSubtitle}</p>}
      </header>

      {(mode === "login" || mode === "signup") && (
        <div className={styles.tabs}>
          <button
            type="button"
            className={[styles.tab, mode === "login" ? styles.tabActive : ""].join(" ")}
            onClick={() => switchMode("login")}
          >
            {t.accountLoginTab}
          </button>
          <button
            type="button"
            className={[styles.tab, mode === "signup" ? styles.tabActive : ""].join(" ")}
            onClick={() => switchMode("signup")}
          >
            {t.accountSignupTab}
          </button>
        </div>
      )}

      {notice && <div className={styles.notice}>{notice}</div>}
      {error && <div className={styles.errorBox}>{error}</div>}

      {mode === "login" && !notice && (
        <form className={styles.form} onSubmit={handleLogin}>
          <label className={styles.label}>
            {t.accountEmailLabel}
            <input
              type="email"
              required
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={styles.label}>
            {t.accountPasswordLabel}
            <input
              type="password"
              required
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="button" className={styles.linkBtn} onClick={() => switchMode("forgot")}>
            {t.accountForgotLink}
          </button>
          <button type="submit" className={styles.primaryBtn} disabled={loading}>
            {t.accountLoginSubmit}
          </button>
        </form>
      )}

      {mode === "signup" && !notice && (
        <form className={styles.form} onSubmit={handleSignup}>
          <label className={styles.label}>
            {t.accountEmailLabel}
            <input
              type="email"
              required
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={styles.label}>
            {t.accountPasswordLabel}
            <input
              type="password"
              required
              minLength={6}
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className={styles.label}>
            {t.accountConfirmPasswordLabel}
            <input
              type="password"
              required
              minLength={6}
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button type="submit" className={styles.primaryBtn} disabled={loading}>
            {t.accountSignupSubmit}
          </button>
        </form>
      )}

      {mode === "forgot" && !notice && (
        <form className={styles.form} onSubmit={handleForgot}>
          <label className={styles.label}>
            {t.accountEmailLabel}
            <input
              type="email"
              required
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" className={styles.primaryBtn} disabled={loading}>
            {t.accountForgotSubmit}
          </button>
          <button type="button" className={styles.linkBtn} onClick={() => switchMode("login")}>
            {t.accountBackToLogin}
          </button>
        </form>
      )}

      {mode === "reset" && !notice && (
        <form className={styles.form} onSubmit={handleReset}>
          <label className={styles.label}>
            {t.accountPasswordLabel}
            <input
              type="password"
              required
              minLength={6}
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className={styles.label}>
            {t.accountConfirmPasswordLabel}
            <input
              type="password"
              required
              minLength={6}
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button type="submit" className={styles.primaryBtn} disabled={loading}>
            {t.accountResetSubmit}
          </button>
        </form>
      )}
    </div>
  );
}
