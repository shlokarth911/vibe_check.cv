"use client";

import { motion } from "framer-motion";
import { Skull, Sparkles, Zap, Shield, Rocket } from "lucide-react";

export default function AppInfo() {
  const features = [
    {
      icon: <Skull className="w-6 h-6 text-red-500" />,
      title: "The Roast",
      description:
        "Our AI (Gordo Mode) brutally analyzes your professional history, finding every flaw in your narrative.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-blue-500" />,
      title: "The Glow-Up",
      description:
        "We rebuild your identity into a premium, Apple-style professional brand optimized for the future.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Identity Agent",
      description:
        "Automated extraction of your core skills and achievements into a structured data layer.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 md:py-20 animate-in fade-in duration-1000">
      <div className="text-center space-y-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight"
        >
          Your Professional Vibe,{" "}
          <span className="text-green-500">Re-Engineered.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto"
        >
          VibeCheck.cv is the ultimate digital mirror. We burn down your old
          resume and rise from the ashes with a high-fidelity professional
          identity.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index + 0.3 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
      >
        <div className="flex items-center gap-2 text-white font-mono text-sm">
          <Shield className="w-4 h-4" /> PRIVACY_BY_DESIGN
        </div>
        <div className="flex items-center gap-2 text-white font-mono text-sm">
          <Rocket className="w-4 h-4" /> POWERED_BY_GEMINI_3
        </div>
        <div className="flex items-center gap-2 text-white font-mono text-sm">
          <Zap className="w-4 h-4" /> INSTANT_GLOWUP
        </div>
      </motion.div>
    </div>
  );
}
