import { useEffect, useRef, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { belts } from "./data/belts";
import { loadProgress, recordSessionResult, saveProgress } from "./engine/progress";
import { getSession, onAuthChange } from "./engine/auth";
import { pullCloudProgress, pushCloudProgress, mergeProgress } from "./engine/sync";
import { MapScreen } from "./screens/MapScreen";
import { LessonScreen } from "./screens/LessonScreen";
import { DrillScreen } from "./screens/DrillScreen";
import { ResultsScreen } from "./screens/ResultsScreen";
import { StatsScreen } from "./screens/StatsScreen";
import { AccountScreen } from "./screens/AccountScreen";
import type { ProgressState, SessionSummary, Stripe } from "./types";

type View =
  | { name: "map" }
  | { name: "lesson"; stripe: Stripe }
  | { name: "drill"; stripe: Stripe }
  | { name: "results"; summary: SessionSummary }
  | { name: "stats" }
  | { name: "account" };

function findStripe(id: string): Stripe | undefined {
  return belts.flatMap((b) => b.stripes).find((s) => s.id === id);
}

export default function App() {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress());
  const [view, setView] = useState<View>({ name: "map" });
  const [session, setSession] = useState<Session | null>(null);
  const [forceReset, setForceReset] = useState(false);

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

  function goToMap() {
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
    const next = recordSessionResult(progress, summary);
    setProgress(next);
    setView({ name: "results", summary });
    if (session) pushCloudProgress(session.user.id, next);
  }

  function openStats() {
    setView({ name: "stats" });
  }

  function openAccount() {
    setView({ name: "account" });
  }

  switch (view.name) {
    case "lesson":
      return <LessonScreen stripe={view.stripe} onBack={goToMap} onStart={() => startDrill(view.stripe)} />;
    case "drill":
      return <DrillScreen stripe={view.stripe} onComplete={completeDrill} onExit={goToMap} />;
    case "results":
      return (
        <ResultsScreen
          summary={view.summary}
          belts={belts}
          progress={progress}
          onRetry={() => startDrill(view.summary.stripe)}
          onContinue={goToMap}
        />
      );
    case "stats":
      return <StatsScreen belts={belts} progress={progress} onBack={goToMap} />;
    case "account":
      return (
        <AccountScreen
          session={session}
          forceReset={forceReset}
          onBack={goToMap}
          onResetHandled={() => setForceReset(false)}
        />
      );
    case "map":
    default:
      return (
        <MapScreen
          belts={belts}
          progress={progress}
          onSelectStripe={selectStripe}
          onOpenStats={openStats}
          onOpenAccount={openAccount}
        />
      );
  }
}
