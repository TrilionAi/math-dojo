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

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 7 11 7a13.16 13.16 0 0 1-3.19 3.94" />
      <path d="M6.61 6.61A13.53 13.53 0 0 0 1 11s4 7 11 7a9.26 9.26 0 0 0 5.39-1.61" />
      <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
      <path d="M1 1l22 22" />
    </svg>
  );
}

interface PasswordFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  visible: boolean;
  onToggleVisible: () => void;
  showLabel: string;
  hideLabel: string;
  minLength?: number;
}

function PasswordField({ label, value, onChange, visible, onToggleVisible, showLabel, hideLabel, minLength }: PasswordFieldProps) {
  return (
    <label className={styles.label}>
      {label}
      <div className={styles.passwordWrap}>
        <input
          type={visible ? "text" : "password"}
          required
          minLength={minLength}
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          type="button"
          className={styles.eyeBtn}
          onClick={onToggleVisible}
          aria-label={visible ? hideLabel : showLabel}
          aria-pressed={visible}
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
    </label>
  );
}

export function AccountScreen({ session, forceReset, onBack, onResetHandled }: AccountScreenProps) {
  const { locale } = useLocale();
  const t = UI_STRINGS[locale];

  const [mode, setMode] = useState<Mode>(forceReset ? "reset" : "login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  function switchMode(next: Mode) {
    setMode(next);
    setError(null);
    setNotice(null);
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
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
        <div className={styles.loggedInActions}>
          <button type="button" className={styles.primaryBtn} onClick={onBack}>
            {t.accountContinuePlaying}
          </button>
          <button type="button" className={styles.linkBtn} onClick={handleSignOut} disabled={loading}>
            {t.accountSignOut}
          </button>
        </div>
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
          <PasswordField
            label={t.accountPasswordLabel}
            value={password}
            onChange={setPassword}
            visible={showPassword}
            onToggleVisible={() => setShowPassword((v) => !v)}
            showLabel={t.accountShowPassword}
            hideLabel={t.accountHidePassword}
          />
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
          <PasswordField
            label={t.accountPasswordLabel}
            value={password}
            onChange={setPassword}
            visible={showPassword}
            onToggleVisible={() => setShowPassword((v) => !v)}
            showLabel={t.accountShowPassword}
            hideLabel={t.accountHidePassword}
            minLength={6}
          />
          <PasswordField
            label={t.accountConfirmPasswordLabel}
            value={confirmPassword}
            onChange={setConfirmPassword}
            visible={showConfirmPassword}
            onToggleVisible={() => setShowConfirmPassword((v) => !v)}
            showLabel={t.accountShowPassword}
            hideLabel={t.accountHidePassword}
            minLength={6}
          />
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
          <PasswordField
            label={t.accountPasswordLabel}
            value={password}
            onChange={setPassword}
            visible={showPassword}
            onToggleVisible={() => setShowPassword((v) => !v)}
            showLabel={t.accountShowPassword}
            hideLabel={t.accountHidePassword}
            minLength={6}
          />
          <PasswordField
            label={t.accountConfirmPasswordLabel}
            value={confirmPassword}
            onChange={setConfirmPassword}
            visible={showConfirmPassword}
            onToggleVisible={() => setShowConfirmPassword((v) => !v)}
            showLabel={t.accountShowPassword}
            hideLabel={t.accountHidePassword}
            minLength={6}
          />
          <button type="submit" className={styles.primaryBtn} disabled={loading}>
            {t.accountResetSubmit}
          </button>
        </form>
      )}
    </div>
  );
}
