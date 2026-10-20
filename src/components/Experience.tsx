"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, FileCheck2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-[#E2E8F0] dark:border-white/[0.08] bg-[#FCEAE7]/20 dark:bg-[#06080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5D1212] dark:text-indigo-400 font-bold">
            03 // Career Timeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white tracking-tight">
            Professional Experience & Technical Traineeships
          </h2>
          <p className="text-[#64748B] dark:text-slate-400 text-sm sm:text-base">
            Verified industry experience across full-stack mobile APK
            engineering, advanced React frontend development, and technical
            support operations.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-[#5D1212]/30 dark:border-white/[0.1] space-y-10">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative group"
            >
              <span
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                  exp.featured
                    ? "bg-[#5D1212] border-[#FFF2F2] dark:bg-indigo-500 dark:border-indigo-300 shadow-[0_0_12px_rgba(93,18,18,0.5)]"
                    : "bg-white border-[#94A3B8] group-hover:border-[#5D1212] dark:bg-[#06080D] dark:border-slate-500"
                }`}
              />

              <div
                className={`p-6 rounded-2xl border backdrop-blur-xl transition-all shadow-xl shadow-[#5D1212]/5 ${
                  exp.featured
                    ? "bg-gradient-to-br from-white/90 via-[#FFF2F2]/60 to-white/90 dark:from-indigo-950/30 dark:via-[#0D111C] dark:to-[#0D111C] border-[#5D1212]/40 dark:border-indigo-500/40"
                    : "bg-white/70 hover:bg-white/90 dark:bg-[#0D111C]/75 dark:hover:bg-[#0D111C] border-white/80 dark:border-white/[0.08]"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase bg-[#5D1212]/10 text-[#5D1212] dark:bg-indigo-500/15 dark:text-indigo-300 border border-[#5D1212]/20 font-semibold">
                        {exp.type}
                      </span>
                      {exp.cin && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#049F67]/10 text-[#049F67] dark:text-emerald-300 border border-[#049F67]/25 font-semibold">
                          <FileCheck2 className="w-3 h-3" />
                          CIN: {exp.cin}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#075C3C] dark:text-cyan-300 mt-0.5">
                      <Building2 className="w-4 h-4 shrink-0" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right font-mono text-xs text-[#64748B] dark:text-slate-400 space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-[#E2E8F0] dark:bg-white/[0.04] text-[#0F172A] dark:text-slate-200 shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-[#5D1212] dark:text-indigo-400" />
                      <span>
                        {exp.duration} ({exp.tenureLength})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#64748B] dark:text-slate-400 mb-4 pb-3 border-b border-[#E2E8F0] dark:border-white/[0.06]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                    {exp.location}
                  </span>
                  {exp.landmark && (
                    <span className="text-[#94A3B8] font-mono">
                      ({exp.landmark})
                    </span>
                  )}
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-[#334155] dark:text-slate-300 flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5D1212] dark:bg-indigo-400 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/80 border border-[#E2E8F0] dark:bg-white/[0.04] dark:border-white/[0.07] font-mono text-[11px] text-[#0F172A] dark:text-slate-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
