"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Cloud } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "mobile-backend":
        return <Smartphone className="w-5 h-5 text-[#5D1212] dark:text-indigo-400" />;
      case "frontend-web":
        return <Code2 className="w-5 h-5 text-[#075C3C] dark:text-cyan-400" />;
      default:
        return <Cloud className="w-5 h-5 text-[#049F67] dark:text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-[#E2E8F0] dark:border-white/[0.08] bg-[#FCEAE7]/20 dark:bg-[#06080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#075C3C] dark:text-indigo-400 font-bold">
            02 // Technical Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white tracking-tight">
            Verified Technology Stack & Core Competencies
          </h2>
          <p className="text-[#64748B] dark:text-slate-400 text-sm sm:text-base">
            Organized by architectural domain—spanning cross-platform mobile
            APKs, .NET & MSSQL backends, responsive React frontends, and AWS/AI
            workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.skills.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl dark:bg-[#0D111C]/80 border border-white/80 dark:border-white/[0.08] hover:border-[#5D1212] dark:hover:border-indigo-500/40 transition-all flex flex-col justify-between shadow-xl shadow-[#5D1212]/5"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] dark:bg-white/[0.04] dark:border-white/[0.08]">
                    {getCategoryIcon(category.id)}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/80 hover:bg-[#5D1212] hover:text-white border border-[#E2E8F0] dark:bg-white/[0.04] dark:hover:bg-indigo-500/15 dark:border-white/[0.08] text-xs font-medium text-[#0F172A] dark:text-slate-200 transition-colors shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
