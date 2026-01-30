"use client";

import { useState } from "react";
import TerminalInput from "@/components/TerminalInput";
import RoastDisplay from "@/components/RoastDisplay";
import GlowUpDisplay from "@/components/GlowUpDisplay";
import AppInfo from "@/components/AppInfo";

type AppState = "input" | "roast" | "glowup";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("input");
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [roastText, setRoastText] = useState("");
  const [glowUpText, setGlowUpText] = useState("");
  const [identityData, setIdentityData] = useState<any>(null);

  const handleInitialize = async (text: string) => {
    setInputText(text);
    setIsLoading(true);

    try {
      // 1. Call Analyze API (Roast + GlowUp + Identity)
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) throw new Error("Analysis failed");

      const data = await response.json();
      setRoastText(data.roast || "SYSTEM ERROR: UNABLE TO GENERATE ROAST.");
      setGlowUpText(data.glowUp || "");
      setIdentityData(data.identity || {});

      // 2. Start Roast Mode immediately
      setAppState("roast");
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      alert("SYSTEM FAILURE: CONNECTION REFUSED.");
    }
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-1000 ${
        appState === "glowup" ? "bg-slate-50" : "bg-black"
      }`}
    >
      {appState === "input" && (
        <div className="flex flex-col items-center justify-center min-h-screen py-20 overflow-y-auto">
          <AppInfo />
          <TerminalInput onSubmit={handleInitialize} isLoading={isLoading} />
        </div>
      )}

      {appState === "roast" && (
        <div className="pt-20">
          <RoastDisplay
            roastRequest={inputText}
            roastResponse={roastText}
            onNext={() => setAppState("glowup")}
            isStreaming={false} // Todo: Implement streaming
          />
        </div>
      )}

      {appState === "glowup" && (
        <div className="pt-10">
          <GlowUpDisplay finalBio={glowUpText} identityData={identityData} />
        </div>
      )}
    </main>
  );
}
