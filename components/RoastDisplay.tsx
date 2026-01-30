"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Skull, AlertTriangle, Terminal, XCircle } from "lucide-react";

interface RoastDisplayProps {
  roastRequest: string;
  roastResponse: string;
  onNext: () => void;
  isStreaming?: boolean;
}

export default function RoastDisplay({
  roastResponse,
  onNext,
  isStreaming = false,
}: RoastDisplayProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom as text streams
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [roastResponse]);

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 flex items-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full relative"
      >
        {/* Ambient Red Glow */}
        <div className="absolute -inset-4 bg-red-600/20 rounded-[2rem] blur-3xl opacity-40 animate-pulse"></div>

        {/* Main Card */}
        <div className="relative overflow-hidden bg-black/90 rounded-none border-2 border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.3)]">
          {/* Header */}
          <div className="bg-red-950/50 p-4 border-b border-red-600/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-600 text-black rounded-sm animate-pulse">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h2 className="text-red-500 font-bold font-mono text-lg tracking-widest uppercase">
                  Critical Analysis
                </h2>
                <div className="text-red-400/60 text-xs font-mono">
                  ERROR_CODE: ROAST_Protocol_Overload
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-20 h-1 bg-red-900/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-red-600 animate-[loading_1s_ease-in-out_infinite]"></div>
              </div>
            </div>
          </div>

          {/* Content Window */}
          <div className="p-6 md:p-10 relative min-h-[400px]">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#220000_1px,transparent_1px),linear-gradient(to_bottom,#220000_1px,transparent_1px)] bg-size-[40px_40px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 font-mono space-y-6">
              <div
                ref={scrollRef}
                className="h-[400px] overflow-y-auto pr-4 text-lg md:text-xl leading-relaxed text-red-500/90 whitespace-pre-wrap scrollbar-thin scrollbar-thumb-red-800 scrollbar-track-red-950/20"
              >
                <span className="text-red-400 opacity-50 block mb-4 border-b border-red-900 pb-2 text-sm">
                  &gt; ANALYZING_SOURCE: USER_PROFESSIONAL_HISTORY...
                  <br />
                  &gt; DETECTED_FLAWS: MULTIPLE
                  <br />
                  &gt; OUTPUT_STREAM_INITIATED:
                </span>

                {roastResponse || "COMPILING_INSULTS..."}

                {isStreaming && (
                  <span className="inline-block w-2 h-5 bg-red-500 ml-1 animate-blink align-middle"></span>
                )}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-red-950/30 p-4 border-t border-red-800/50 flex justify-end">
            <Button
              onClick={onNext}
              className="bg-white hover:bg-red-100 text-red-900 border-2 border-transparent hover:border-red-200 font-bold px-8 py-6 text-lg transition-all rounded-sm shadow-xl"
            >
              FORCE_REBOOT (GLOW_UP)
            </Button>
          </div>

          {/* Glitch Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-5 animate-pulse bg-red-500 mix-blend-overlay"></div>
        </div>
      </motion.div>
    </div>
  );
}
