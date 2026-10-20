"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, CheckCircle, Server, Smartphone } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function FeaturedWork() {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  const primaryDeliverable = portfolioData.deliverables[0];

  return (
    <section id="work" className="py-16 sm:py-20 border-t border-[#E2E8F0] dark:border-white/[0.08] bg-[#FCEAE7]/30 dark:bg-[#06080D] relative overflow-hidden">
      {/* Background Lighting Glows */}
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-[#075C3C]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#5D1212]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl space-y-3 mb-10 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#075C3C] dark:text-indigo-400 font-bold">
            04 // Featured Engineering & Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white tracking-tight">
            Production Systems & Technical Deliverables
          </h2>
          <p className="text-[#64748B] dark:text-slate-400 text-sm sm:text-base">
            Deep-dive into verified full-lifecycle software engineering work—led
            by the end-to-end Flutter + Firebase + .NET API + MSSQL mobile APK
            developed at V Oakbiew Private Limited.
          </p>
        </div>

        {/* Main Outer Glassmorphic Deliverable Card */}
        <div className="rounded-3xl bg-white/40 backdrop-blur-3xl border border-white/90 dark:bg-gradient-to-b dark:from-[#0E1424] dark:to-[#090D16] dark:border-indigo-500/30 p-5 sm:p-8 shadow-2xl shadow-[#5D1212]/10 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]/60 dark:border-white/[0.08]">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#049F67]/15 text-[#049F67] dark:text-emerald-300 border border-[#049F67]/30 mb-2 font-bold shadow-sm backdrop-blur-md">
                <Smartphone className="w-3.5 h-3.5" />
                {primaryDeliverable.badge}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-[#0F172A] dark:text-white">
                {primaryDeliverable.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#64748B] dark:text-slate-400 mt-1">
                {primaryDeliverable.organization}
              </p>
            </div>
          </div>

          <p className="text-[#334155] dark:text-slate-300 text-sm sm:text-base leading-relaxed my-6 font-medium">
            {primaryDeliverable.summary}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Layer Selection Buttons - Glassy Lightning Style */}
            <div className="lg:col-span-6 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-2 font-bold">
                Select Architecture Layer to Inspect:
              </div>
              {primaryDeliverable.architectureLayers.map((item, idx) => {
                const isSelected = activeLayerIndex === idx;
                return (
                  <motion.button
                    key={item.layer}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="button"
                    onClick={() => setActiveLayerIndex(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between backdrop-blur-2xl ${
                      isSelected
                        ? "bg-white/80 border-[#5D1212] text-[#5D1212] shadow-xl shadow-[#5D1212]/15 dark:bg-indigo-600/20 dark:border-indigo-500 dark:text-white font-medium ring-2 ring-[#5D1212]/20"
                        : "bg-white/40 hover:bg-white/70 border-white/80 dark:bg-white/[0.02] dark:hover:bg-white/[0.05] dark:border-white/[0.07] dark:text-slate-300 shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono text-[#5D1212] dark:text-indigo-300 font-extrabold">
                        {item.tech}
                      </div>
                      <div className="text-xs sm:text-sm font-bold mt-0.5 text-[#0F172A] dark:text-white">
                        {item.layer}
                      </div>
                    </div>
                    <Layers
                      className={`w-4 h-4 shrink-0 ml-2 ${
                        isSelected ? "text-[#5D1212] dark:text-indigo-400" : "text-[#94A3B8]"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Right Detailed Inspector Box - Glassy Lightning Style */}
            <div className="lg:col-span-6">
              <motion.div
                key={activeLayerIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-3xl bg-white/50 backdrop-blur-3xl border border-white/90 dark:bg-[#070A12] dark:border-white/[0.1] space-y-4 shadow-2xl relative overflow-hidden"
              >
                {/* Subtle Inner Lighting Glow */}
                <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#049F67]/10 blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between relative z-10">
                  <span className="px-3.5 py-1 rounded-lg bg-white/80 text-[#5D1212] dark:bg-indigo-500/20 dark:text-indigo-300 font-mono text-xs font-bold border border-white shadow-sm backdrop-blur-md">
                    {
                      primaryDeliverable.architectureLayers[activeLayerIndex]
                        .tech
                    }
                  </span>
                  <div className="p-2 rounded-xl bg-white/80 dark:bg-white/10 border border-white shadow-sm">
                    <Smartphone className="w-5 h-5 text-[#075C3C] dark:text-cyan-400" />
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-white relative z-10">
                  {
                    primaryDeliverable.architectureLayers[activeLayerIndex]
                      .layer
                  }
                </h4>

                <p className="text-sm text-[#334155] dark:text-slate-300 leading-relaxed font-medium relative z-10">
                  {
                    primaryDeliverable.architectureLayers[activeLayerIndex]
                      .detail
                  }
                </p>

                <div className="pt-4 border-t border-[#E2E8F0]/60 dark:border-white/[0.07] flex flex-wrap gap-2 relative z-10">
                  {primaryDeliverable.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 text-xs font-mono text-[#0F172A] dark:bg-white/[0.04] dark:text-slate-300 border border-white shadow-sm font-semibold backdrop-blur-md"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#049F67] dark:text-emerald-400 shrink-0" />
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Secondary Glassmorphic Deliverable Card */}
        {portfolioData.deliverables.slice(1).map((item) => (
          <div
            key={item.id}
            className="p-6 sm:p-8 rounded-3xl bg-white/40 backdrop-blur-3xl border border-white/90 dark:bg-[#0D111C]/80 dark:border-white/[0.08] shadow-xl shadow-[#5D1212]/5"
          >
            <span className="font-mono text-xs text-[#075C3C] dark:text-cyan-400 uppercase font-extrabold">
              {item.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] dark:text-white mt-1">{item.title}</h3>
            <p className="text-sm text-[#334155] dark:text-slate-300 mt-2 mb-5 leading-relaxed font-medium">
              {item.summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {item.architectureLayers.map((layer) => (
                <div
                  key={layer.layer}
                  className="p-4 rounded-2xl bg-white/50 backdrop-blur-xl border border-white/90 dark:bg-white/[0.02] dark:border-white/[0.06] shadow-sm"
                >
                  <div className="text-xs font-mono text-[#5D1212] dark:text-indigo-300 font-bold">
                    {layer.tech}
                  </div>
                  <div className="text-sm font-semibold text-[#0F172A] dark:text-white mt-0.5">
                    {layer.layer}
                  </div>
                  <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1">{layer.detail}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-md border border-white dark:bg-white/[0.04] dark:border-white/[0.08] font-mono text-xs text-[#0F172A] dark:text-slate-300 font-semibold shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
