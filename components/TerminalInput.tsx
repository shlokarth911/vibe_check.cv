"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Terminal, Cpu, ChevronRight, Activity } from "lucide-react";

interface TerminalInputProps {
  onSubmit: (text: string) => void;
  isLoading: boolean;
}

export default function TerminalInput({
  onSubmit,
  isLoading,
}: TerminalInputProps) {
  const [input, setInput] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 flex flex-col items-center justify-center min-h-[80vh] font-mono">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative group"
      >
        {/* Glow Effects */}
        <div className="absolute -inset-1 bg-linear-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>

        {/* Main Terminal Window */}
        <div className="relative overflow-hidden rounded-xl border border-green-500/30 bg-black/80 backdrop-blur-xl shadow-2xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-green-500/20 bg-black/50">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="ml-4 flex items-center gap-2 text-xs font-semibold text-green-400/80 tracking-wider">
                <Terminal className="w-4 h-4" />
                VIBE_CHECK.EXE
              </div>
            </div>
            <div className="text-xs text-green-500/50 flex items-center gap-2">
              <span className="animate-pulse">●</span> ONLINE
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600 tracking-tighter filter drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                IDENTITY PROTOCOL
              </h1>
              <p className="text-green-400/60 text-sm md:text-base flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                PLEASE INSERT PROFESSIONAL CREDENTIALS FOR ANALYSIS
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-green-500/10 bg-green-500/5 flex flex-col items-center pt-4 text-xs text-green-500/30 select-none">
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
              </div>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="// Enter bio, resume, profile URL, or career summary..."
                className="min-h-[300px] pl-12 bg-transparent text-green-300 border-green-500/20 focus-visible:ring-1 focus-visible:ring-green-500/50 focus-visible:border-green-500/50 placeholder:text-green-700/50 text-base md:text-lg leading-relaxed resize-none rounded-md"
                spellCheck={false}
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="hidden md:flex items-center gap-4 text-xs text-green-500/40">
                <div className="flex items-center gap-1">
                  <Cpu className="w-3 h-3" /> CPU: 12%
                </div>
                <div className="flex items-center gap-1">
                  <Activity className="w-3 h-3" /> MEM: 404MB
                </div>
              </div>

              <Button
                onClick={() => onSubmit(input)}
                disabled={!input.trim() || isLoading}
                className="w-full md:w-auto relative overflow-hidden bg-green-500 hover:bg-green-400 text-black font-bold tracking-widest px-8 py-6 text-lg transition-all duration-300 group/btn"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 sm:skew-y-12"></div>

                {isLoading ? (
                  <span className="relative flex items-center gap-2">
                    <Activity className="w-5 h-5 animate-spin" /> PROCESSING...
                  </span>
                ) : (
                  <span className="relative flex items-center gap-2">
                    INITIALIZE SCAN <ChevronRight className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Scanline Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-100 bg-size-[100%_2px,3px_100%] pointer-events-none opacity-20"></div>
        </div>
      </motion.div>
    </div>
  );
}
