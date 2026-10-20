"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, CloudCog, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const pillars = [
  {
    icon: Layers,
    title: "End-to-End Mobile & Web Delivery",
    description:
      "Experienced in taking applications from UI/UX components in Flutter and React all the way to signed production APKs backed by .NET APIs and MS SQL Server.",
  },
  {
    icon: CloudCog,
    title: "Cloud Infrastructure & Automation",
    description:
      "Passionate about AWS Cloud, Python scripting, and workflow automation that eliminates manual bottlenecks and improves system reliability.",
  },
  {
    icon: Cpu,
    title: "GenAI & Analytical Problem Solving",
    description:
      "Combining Computer Engineering foundations with Generative AI and data analysis to build smarter, user-centric digital products.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-[#E2E8F0] dark:border-white/[0.08] bg-[#FCEAE7]/20 dark:bg-[#06080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#5D1212] dark:text-indigo-400 font-bold">
              01 // About Me
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white tracking-tight">
              Engineering Full-Stack Mobile, Web & Cloud Solutions
            </h2>
            <p className="text-[#334155] dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {portfolioData.personal.summary}
            </p>
            <p className="text-[#64748B] dark:text-slate-400 text-sm leading-relaxed">
              {portfolioData.personal.careerGoal}
            </p>

            <div className="pt-3 space-y-2">
              {portfolioData.personal.availability.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0F172A] dark:text-slate-200 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#049F67] dark:text-emerald-400 shrink-0" />
                  <span>{item} — Based in Lucknow, Uttar Pradesh</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl hover:bg-white/90 dark:bg-[#0D111C]/80 dark:hover:bg-[#141A29] border border-white/80 dark:border-white/[0.08] transition-all flex items-start gap-4 shadow-xl shadow-[#5D1212]/5"
                >
                  <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] dark:bg-indigo-500/10 dark:border-indigo-500/25 text-[#5D1212] dark:text-indigo-400 shrink-0 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A] dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#64748B] dark:text-slate-400 mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
