"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Share2, Sparkles, CheckCircle2, Zap } from "lucide-react";

interface IdentityData {
  skills: string[];
  experience_years?: string;
  role_match?: string;
  key_achievements?: string[];
}

interface GlowUpDisplayProps {
  finalBio: string;
  identityData?: IdentityData;
}

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 50 },
  },
};

export default function GlowUpDisplay({
  finalBio,
  identityData,
}: GlowUpDisplayProps) {
  const handleExport = () => {
    const blob = new Blob([finalBio], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "profile.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      animate="show"
      className="w-full max-w-6xl mx-auto p-4 md:p-12 space-y-8 font-sans"
    >
      {/* Header Section */}
      <motion.div variants={itemVars} className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 font-medium text-sm">
          <Sparkles className="w-4 h-4" /> IDENTITY_OPTIMIZED_V2.0
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-br from-slate-900 via-blue-900 to-slate-900">
          Your New Digital Self.
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          We've rebuilt your narrative engine. This isn't just a resume rewrite;
          it's a strategic positioning upgrade for the AI era.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
        {/* Main Content Area */}
        <motion.div variants={itemVars} className="lg:col-span-8 space-y-6">
          {/* Narrative Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-100 to-indigo-100 rounded-2xl opacity-50 blur-lg group-hover:opacity-100 transition duration-700"></div>
            <Card className="relative border border-white/50 bg-white/60 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-indigo-500"></div>
              <CardHeader className="border-b border-black/5 pb-6">
                <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-500 fill-indigo-500" />
                  Core Narrative
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-p:leading-loose text-slate-600">
                  {finalBio ? (
                    finalBio.split("\n").map(
                      (para, i) =>
                        para.trim() && (
                          <p key={i} className="mb-6 last:mb-0">
                            {para}
                          </p>
                        ),
                    )
                  ) : (
                    <div className="flex flex-col items-center justify-center h-48 text-slate-400">
                      <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-blue-500 animate-spin mb-4"></div>
                      Generating optimized profile...
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Sidebar / Metadata */}
        <motion.div variants={itemVars} className="lg:col-span-4 space-y-6">
          {/* Identity Agent Card */}
          <Card className="border-none bg-white/80 backdrop-blur-md shadow-lg rounded-2xl overflow-visible">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Extracted Signal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Archetype */}
              {identityData?.role_match && (
                <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                  <h4 className="text-xs font-semibold text-blue-400 mb-1 uppercase">
                    Primary Archetype
                  </h4>
                  <div className="text-lg font-bold text-blue-700">
                    {identityData.role_match}
                  </div>
                </div>
              )}

              {/* Skills */}
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />{" "}
                  Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {identityData?.skills?.slice(0, 8).map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="px-3 py-1 bg-slate-100/80 hover:bg-white text-slate-600 border border-slate-200 hover:border-blue-200 transition-colors cursor-default rounded-md"
                    >
                      {skill}
                    </Badge>
                  )) || (
                    <span className="text-slate-400 text-sm">
                      Waiting for signal...
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Card */}
          <Card className="border border-slate-100 bg-linear-to-br from-slate-900 to-slate-800 text-white shadow-xl shadow-slate-900/20 rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-1">
                <h3 className="font-bold text-lg">Claim Identity</h3>
                <p className="text-slate-400 text-sm">
                  Export your optimized profile for deployment.
                </p>
              </div>
              <Button
                onClick={handleExport}
                className="w-full bg-white text-slate-900 hover:bg-blue-50 font-semibold h-12 shadow-lg transition-all active:scale-95"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Package
              </Button>
              <Button
                variant="ghost"
                className="w-full text-slate-400 hover:text-white hover:bg-white/10 h-10"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Preview
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
