"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Mail, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[#E2E8F0] dark:border-white/[0.08] bg-white/70 dark:bg-[#04060A] backdrop-blur-2xl relative overflow-hidden">
      {/* Footer Ambient Lighting Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-[#075C3C]/10 dark:bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold text-[#0F172A] dark:text-white">
            {portfolioData.personal.name}
          </p>
          <p className="text-xs text-[#64748B] dark:text-slate-400 mt-1">
            © {new Date().getFullYear()} Tariq Ali. Built with Next.js,
            TypeScript, Tailwind CSS & Framer Motion.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            {
              icon: Linkedin,
              href: portfolioData.personal.linkedin,
              label: "LinkedIn",
              color: "text-[#5D1212] dark:text-indigo-400",
            },
            {
              icon: Mail,
              href: `mailto:${portfolioData.personal.email}`,
              label: "Email",
              color: "text-[#075C3C] dark:text-emerald-400",
            },
            {
              icon: Phone,
              href: `tel:${portfolioData.personal.phone.replace(/\s+/g, "")}`,
              label: "Phone",
              color: "text-[#EA7E05] dark:text-amber-400",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={item.href}
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                className={`p-3 rounded-xl bg-white/80 border border-white hover:bg-white dark:bg-white/[0.04] dark:hover:bg-white/[0.08] ${item.color} shadow-md shadow-[#5D1212]/5 transition-colors`}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            );
          })}

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-[#5D1212] hover:bg-[#3D0C0C] border border-[#3D0C0C] dark:bg-indigo-500/15 dark:hover:bg-indigo-500/25 dark:border-indigo-500/30 text-xs font-mono text-white dark:text-indigo-300 transition-all font-bold shadow-lg shadow-[#5D1212]/20 cursor-pointer"
          >
            Top
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
