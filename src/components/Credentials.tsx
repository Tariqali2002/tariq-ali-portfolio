"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Credentials() {
  return (
    <section id="credentials" className="py-20 border-t border-[#E2E8F0] dark:border-white/[0.08] bg-[#FCEAE7]/20 dark:bg-[#06080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5D1212] dark:text-indigo-400 font-bold">
            05 // Education & Certifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white tracking-tight">
            Academic Foundation & Verified Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-4 flex items-center gap-2 font-semibold">
              <GraduationCap className="w-4 h-4 text-[#5D1212] dark:text-indigo-400" />
              University Degree
            </h3>

            {portfolioData.education.map((edu) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/90 dark:bg-[#0D111C] dark:border-white/[0.09] space-y-4 shadow-xl shadow-[#5D1212]/5"
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white text-[#5D1212] dark:bg-indigo-500/15 dark:text-indigo-300 border border-[#E2E8F0] font-bold shadow-sm">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </span>

                <div>
                  <h4 className="text-lg font-bold text-[#0F172A] dark:text-white">{edu.degree}</h4>
                  <p className="text-sm font-semibold text-[#075C3C] dark:text-cyan-300">
                    {edu.field}
                  </p>
                </div>

                <p className="text-sm text-[#0F172A] dark:text-slate-200 font-medium">
                  {edu.institution}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-[#64748B] dark:text-slate-400 pt-2 border-t border-[#E2E8F0] dark:border-white/[0.06]">
                  <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                  {edu.location}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#64748B] dark:text-slate-400 mb-4 flex items-center gap-2 font-semibold">
              <Award className="w-4 h-4 text-[#075C3C] dark:text-cyan-400" />
              Verified Certifications & Issuers
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioData.certifications.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="p-4 rounded-2xl bg-white/70 backdrop-blur-2xl hover:bg-white/90 dark:bg-[#0D111C]/80 dark:hover:bg-[#141A29] border border-white/90 dark:border-white/[0.08] transition-all flex items-start gap-3.5 shadow-xl shadow-[#5D1212]/5"
                >
                  <div className="p-2.5 rounded-lg bg-white border border-[#E2E8F0] dark:bg-cyan-500/10 dark:border-cyan-500/25 text-[#075C3C] dark:text-cyan-300 shrink-0 shadow-sm">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0F172A] dark:text-white">
                      {cert.issuer}
                    </div>
                    <div className="text-xs text-[#64748B] dark:text-slate-300 mt-0.5">
                      {cert.name}
                    </div>
                    <span className="inline-block mt-2 font-mono text-[11px] text-[#5D1212] dark:text-indigo-300 font-bold">
                      {cert.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
