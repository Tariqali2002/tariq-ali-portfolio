"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Linkedin,
  MapPin,
  Smartphone,
  Database,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: custom * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 overflow-hidden bg-[#FCEAE7]/20 dark:bg-[#06080D]">
      {/* Hero Ambient Background Lighting Glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/4 w-[400px] h-[400px] rounded-full bg-[#075C3C]/10 dark:bg-indigo-600/10 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-[#5D1212]/10 dark:bg-cyan-500/10 blur-[130px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-white dark:bg-indigo-500/10 dark:border-indigo-500/25 text-[#5D1212] dark:text-indigo-300 text-xs font-medium mx-auto lg:mx-0 shadow-lg shadow-[#5D1212]/5"
            >
              <span className="w-2 h-2 rounded-full bg-[#049F67] animate-pulse shrink-0" />
              <span>{portfolioData.personal.location}</span>
              <span className="text-[#94A3B8] hidden sm:inline">•</span>
              <span className="text-[#075C3C] dark:text-cyan-300 font-semibold">Open to Remote & Full-Time</span>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.12]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-[#5D1212] via-[#8B2626] to-[#075C3C] dark:from-indigo-400 dark:via-cyan-300 dark:to-emerald-300 bg-clip-text text-transparent">
                  {portfolioData.personal.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[#5D1212] dark:text-slate-200">
                {portfolioData.personal.headline}
              </p>
              <p className="font-mono text-xs sm:text-sm text-[#075C3C] dark:text-indigo-300/90 font-medium">
                {portfolioData.personal.subHeadline}
              </p>
            </motion.div>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[#64748B] dark:text-slate-300 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {portfolioData.personal.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#5D1212] hover:bg-[#3D0C0C] dark:bg-gradient-to-r dark:from-indigo-600 dark:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-[#5D1212]/30 transition-all group cursor-pointer"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={portfolioData.personal.resumeUrl}
                download="Tariq_Ali_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/80 hover:bg-white backdrop-blur-xl dark:bg-white/[0.04] border border-white dark:border-white/[0.1] text-[#0F172A] dark:text-slate-200 font-semibold text-sm shadow-lg shadow-[#5D1212]/5 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#075C3C] dark:text-cyan-400" />
                Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white/80 hover:bg-white backdrop-blur-xl dark:bg-white/[0.02] border border-white dark:border-white/[0.08] text-[#64748B] dark:text-slate-300 text-sm font-medium shadow-lg shadow-[#5D1212]/5 transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-[#5D1212] dark:text-indigo-400" />
                LinkedIn
              </motion.a>
            </motion.div>

            {/* Stats / Highlights */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[#E2E8F0] dark:border-white/[0.08] text-left"
            >
              <div className="p-3.5 rounded-xl bg-white/70 backdrop-blur-md border border-white dark:bg-transparent shadow-sm">
                <span className="font-mono text-xs text-[#94A3B8] block">Education</span>
                <span className="text-sm font-semibold text-[#0F172A] dark:text-white">B.Tech Computer Eng.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 backdrop-blur-md border border-white dark:bg-transparent shadow-sm">
                <span className="font-mono text-xs text-[#94A3B8] block">Production Mobile</span>
                <span className="text-sm font-semibold text-[#049F67] dark:text-emerald-400">End-to-End APK Shipped</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 backdrop-blur-md border border-white dark:bg-transparent shadow-sm">
                <span className="font-mono text-xs text-[#94A3B8] block">Core Stack</span>
                <span className="text-sm font-semibold text-[#075C3C] dark:text-cyan-300">Flutter • .NET • React</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Glassmorphic Code Window Preview */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-3xl bg-white/80 backdrop-blur-2xl border border-white dark:bg-[#0B0F1A]/90 dark:border-white/[0.1] shadow-2xl shadow-[#5D1212]/15 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-[#FFF2F2]/80 dark:bg-white/[0.03] border-b border-[#E2E8F0] dark:border-white/[0.07]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-[#64748B] dark:text-slate-400 truncate">
                  oakbiew_production_apk.dart
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#049F67]/15 text-[#049F67] dark:text-emerald-300 border border-[#049F67]/30 shrink-0 font-semibold">
                  VERIFIED
                </span>
              </div>

              <div className="p-5 font-mono text-xs space-y-4 overflow-x-auto bg-white/60 dark:bg-transparent">
                <div className="space-y-1.5 text-[#334155] dark:text-slate-300">
                  <div>
                    <span className="text-[#5D1212] dark:text-indigo-400 font-bold">class</span>{" "}
                    <span className="text-[#075C3C] dark:text-cyan-300 font-bold">ProductionArchitecture</span>{" "}
                    {"{"}
                  </div>
                  <div className="pl-4 text-[#94A3B8]">
                    // V Oakbiew Private Limited (2 Months)
                  </div>
                  <div className="pl-4 truncate">
                    <span className="text-[#5D1212] dark:text-indigo-400 font-semibold">final</span> client ={" "}
                    <span className="text-[#049F67] dark:text-emerald-300 font-medium">
                      &quot;Flutter End-to-End APK&quot;
                    </span>
                    ;
                  </div>
                  <div className="pl-4 truncate">
                    <span className="text-[#5D1212] dark:text-indigo-400 font-semibold">final</span> backend ={" "}
                    <span className="text-[#EA7E05] dark:text-amber-300 font-medium">
                      &quot;.NET API (X-Api-Key Auth)&quot;
                    </span>
                    ;
                  </div>
                  <div className="pl-4 truncate">
                    <span className="text-[#5D1212] dark:text-indigo-400 font-semibold">final</span> database ={" "}
                    <span className="text-[#075C3C] dark:text-cyan-300 font-medium">
                      &quot;MS SQL Server (MSSQL)&quot;
                    </span>
                    ;
                  </div>
                  <div>{"}"}</div>
                </div>

                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  <div className="p-3 rounded-2xl bg-white/90 border border-[#E2E8F0] dark:bg-white/[0.03] dark:border-white/[0.07] flex items-center gap-3 shadow-sm">
                    <div className="p-2 rounded-xl bg-[#FCEAE7] dark:bg-indigo-500/15 text-[#5D1212] dark:text-indigo-400 shrink-0">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[#0F172A] dark:text-white font-sans font-semibold text-xs truncate">
                        Flutter + Firebase Mobile Client
                      </div>
                      <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-sans truncate">
                        Production APK compiled & deployed
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/90 border border-[#E2E8F0] dark:bg-white/[0.03] dark:border-white/[0.07] flex items-center gap-3 shadow-sm">
                    <div className="p-2 rounded-xl bg-[#FFF2F2] dark:bg-cyan-500/15 text-[#075C3C] dark:text-cyan-400 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[#0F172A] dark:text-white font-sans font-semibold text-xs truncate">
                        .NET Web API + API Key Security
                      </div>
                      <div className="text-[11px] text-[#64748B] dark:text-slate-400 font-sans truncate">
                        Authenticated REST endpoints
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-[#64748B] dark:text-slate-400 border-t border-[#E2E8F0] dark:border-white/[0.06]">
                  <span className="flex items-center gap-1 truncate font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#5D1212] dark:text-indigo-400 shrink-0" />
                    Indira Nagar, Lucknow
                  </span>
                  <span className="flex items-center gap-1 text-[#075C3C] dark:text-cyan-300 shrink-0 font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    React • AWS • GenAI
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
