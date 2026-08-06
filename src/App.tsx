import { useEffect, useRef, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { belts } from "./data/belts";
import { ninjaBelts } from "./data/ninjaBelts";
import { loadMode, saveMode, type GameMode } from "./engine/mode";
import { getPagesDone, loadProgress, recordPageResult, recordSessionResult, saveProgress } from "./engine/progress";
import { getSession, onAuthChange } from "./engine/auth";
import { pullCloudProgress, pushCloudProgress, mergeProgress } from "./engine/sync";
import { MapScreen } from "./screens/MapScreen";
import { LessonScreen } from "./screens/LessonScreen";
import { DrillScreen } from "./screens/DrillScreen";
import { ResultsScreen } from "./screens/ResultsScreen";
import { StatsScreen } from "./screens/StatsScreen";
import { AccountScreen } from "./screens/AccountScreen";
import { CertificateScreen } from "./screens/CertificateScreen";
import { Whiteboard } from "./components/Whiteboard";
import { addBoardText } from "./engine/whiteboard";
import { useLocale } from "./i18n/LocaleContext";
import { UI_STRINGS } from "./i18n/ui";
import boardStyles from "./components/Whiteboard.module.css";
import type { ProgressState, SessionSummary, Stripe } from "./types";

type View =
  | { name: "map" }
  | { name: "lesson"; stripe: Stripe }
  | { name: "drill"; stripe: Stripe }
  | { name: "results"; summary: SessionSummary }
  | { name: "stats" }
  | { name: "account" }
  | { name: "certificate" };

const allBelts = [...belts, ...ninjaBelts];

function findStripe(id: string): Stripe | undefined {
  return allBelts.flatMap((b) => b.stripes).find((s) => s.id === id);
}

/** Supabase redirects a password-recovery email link back here with
 * "#access_token=...&type=recovery" in the URL hash. Checking this directly
 * (synchronously, on first render) instead of only waiting for the
 * PASSWORD_RECOVERY auth event avoids a real race: the Supabase client starts
 * processing that hash the moment it's constructed (at module load, before
 * React even mounts), so a listener registered inside a useEffect can already
 * be too late to catch the event. */
function isPasswordRecoveryUrl(): boolean {
  if (typeof window === "undefined") return false;
  return window.location.hash.includes("type=recovery");
}

export default function App() {
  const { locale } = useLocale();
  const t = UI_STRINGS[locale];
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress());
  const [boardOpen, setBoardOpen] = useState(false);
  const [mode, setMode] = useState<GameMode>(() => loadMode());
  const [view, setView] = useState<View>(() => (isPasswordRecoveryUrl() ? { name: "account" } : { name: "map" }));
  const [session, setSession] = useState<Session | null>(null);
  const [forceReset, setForceReset] = useState(() => isPasswordRecoveryUrl());

  // Keep a ref of the latest progress so the auth-change subscription (set up
  // once on mount) always merges against current progress, not a stale closure.
  const progressRef = useRef(progress);
  progressRef.current = progress;

  useEffect(() => {
    getSession().then(setSession);

    const unsubscribe = onAuthChange((event, nextSession) => {
      setSession(nextSession);

      if (event === "PASSWORD_RECOVERY") {
        setForceReset(true);
        setView({ name: "account" });
      }

      if (event === "SIGNED_IN" && nextSession) {
        pullCloudProgress(nextSession.user.id).then((cloud) => {
          if (!cloud) return; // couldn't reach cloud — leave local progress alone
          const merged = mergeProgress(progressRef.current, cloud);
          saveProgress(merged);
          setProgress(merged);
          pushCloudProgress(nextSession.user.id, merged);
        });
      }
    });

    return unsubscribe;
  }, []);

  // Completing BOTH journeys makes you a Ninja Master — the dojo stays in its
  // night colors forever, whichever mode you browse.
  const ninjaMaster =
    ninjaBelts.length > 0 && ninjaBelts.every((b) => b.stripes.every((s) => progress.stripeResults[s.id]?.passed));

  // the theme follows the mode — data-mode="ninja" flips the whole palette dark
  useEffect(() => {
    document.documentElement.dataset.mode = ninjaMaster ? "ninja" : mode;
    saveMode(mode);
  }, [mode, ninjaMaster]);

  function goToMap() {
    setView({ name: "map" });
  }

  function switchMode(next: GameMode) {
    setMode(next);
    setView({ name: "map" });
  }

  function selectStripe(stripeId: string) {
    const stripe = findStripe(stripeId);
    if (stripe) setView({ name: "lesson", stripe });
  }

  function startDrill(stripe: Stripe) {
    setView({ name: "drill", stripe });
  }

  function completeDrill(summary: SessionSummary) {
    const next = recordSessionResult(progressRef.current, summary);
    setProgress(next);
    setView({ name: "results", summary });
    if (session) pushCloudProgress(session.user.id, next);
  }

  function handlePageResult(stripe: Stripe, pagePassed: boolean) {
    const next = recordPageResult(progressRef.current, stripe, pagePassed);
    setProgress(next);
    if (session) pushCloudProgress(session.user.id, next);
  }

  function openStats() {
    setView({ name: "stats" });
  }

  function openAccount() {
    setView({ name: "account" });
  }

  function openCertificate() {
    setView({ name: "certificate" });
  }

  function sendToBoard(text: string) {
    addBoardText(text, window.innerWidth, window.innerHeight);
    setBoardOpen(true);
  }

  let screen: React.ReactElement;
  switch (view.name) {
    case "lesson":
      screen = (
        <LessonScreen
          stripe={view.stripe}
          onBack={goToMap}
          onStart={() => startDrill(view.stripe)}
          onSendToBoard={sendToBoard}
        />
      );
      break;
    case "drill":
      screen = (
        <DrillScreen
          stripe={view.stripe}
          initialPagesDone={getPagesDone(progressRef.current, view.stripe)}
          onPageResult={handlePageResult}
          onComplete={completeDrill}
          onExit={goToMap}
          onSendToBoard={sendToBoard}
        />
      );
      break;
    case "results":
      screen = (
        <ResultsScreen
          summary={view.summary}
          belts={allBelts}
          ninjaBelts={ninjaBelts}
          progress={progress}
          onRetry={() => startDrill(view.summary.stripe)}
          onContinue={goToMap}
          onEnterNinja={() => switchMode("ninja")}
        />
      );
      break;
    case "stats":
      screen = (
        <StatsScreen belts={belts} ninjaBelts={ninjaBelts} progress={progress} onBack={goToMap} onOpenCertificate={openCertificate} />
      );
      break;
    case "account":
      screen = (
        <AccountScreen
          session={session}
          forceReset={forceReset}
          onBack={goToMap}
          onResetHandled={() => setForceReset(false)}
        />
      );
      break;
    case "certificate":
      screen = <CertificateScreen belts={belts} ninjaBelts={ninjaBelts} progress={progress} onBack={goToMap} />;
      break;
    case "map":
    default:
      screen = (
        <MapScreen
          belts={mode === "ninja" ? ninjaBelts : belts}
          normalBelts={belts}
          mode={mode}
          ninjaMaster={ninjaMaster}
          onSwitchMode={switchMode}
          progress={progress}
          loggedIn={session !== null}
          onSelectStripe={selectStripe}
          onOpenStats={openStats}
          onOpenAccount={openAccount}
          onOpenCertificate={openCertificate}
        />
      );
  }

  // The drill already has its own per-exercise board button, and its NumPad
  // owns the bottom of the screen — so the floating button hides there.
  const showFab = !boardOpen && view.name !== "drill" && view.name !== "certificate";

  return (
    <>
      {screen}
      {boardOpen && <Whiteboard onClose={() => setBoardOpen(false)} />}
      {showFab && (
        <button
          type="button"
          className={boardStyles.fab}
          onClick={() => setBoardOpen(true)}
          aria-label={t.boardOpenAria}
          title={t.boardOpenAria}
        >
          🖍️
        </button>
      )}
    </>
  );
}
