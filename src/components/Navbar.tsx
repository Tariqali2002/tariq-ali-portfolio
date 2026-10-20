"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Terminal, Linkedin, Github, Mail, Sun, Moon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Architecture", href: "#work" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el && window.scrollY >= el.offsetTop - 180) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#06080D]/80 backdrop-blur-2xl border-b border-white/40 dark:border-white/[0.08] py-3 shadow-lg shadow-[#5D1212]/5"
          : "bg-white/40 dark:bg-transparent backdrop-blur-md py-4 sm:py-5 border-b border-white/20 dark:border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group focus:outline-none rounded-lg">
          <div className="w-9 h-9 rounded-xl bg-white/90 border border-white dark:bg-indigo-500/20 dark:border-indigo-500/30 flex items-center justify-center text-[#5D1212] dark:text-indigo-400 group-hover:scale-105 transition-all shadow-sm shrink-0">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold tracking-tight text-[#0F172A] dark:text-white text-sm sm:text-base block leading-none">
              {portfolioData.personal.name}
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#64748B] dark:text-slate-400 block mt-0.5">
              Flutter • React • .NET
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-xl border border-white/90 dark:bg-white/[0.03] dark:border-white/[0.07] rounded-full px-2.5 py-1 shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#5D1212] text-white dark:bg-indigo-500/20 dark:text-indigo-300 shadow-sm"
                    : "text-[#64748B] dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl bg-white/80 dark:bg-white/[0.05] border border-white/90 dark:border-white/[0.1] text-[#5D1212] dark:text-amber-300 shadow-sm transition-colors cursor-pointer"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-white/80 dark:bg-white/[0.05] border border-white/90 dark:border-white/[0.1] text-[#64748B] dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white shadow-sm transition-colors"
          >
            <Github className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-white/80 dark:bg-white/[0.05] border border-white/90 dark:border-white/[0.1] text-[#64748B] dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white shadow-sm transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#5D1212] hover:bg-[#3D0C0C] dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white shadow-md shadow-[#5D1212]/20 transition-all ml-1"
          >
            <Mail className="w-3.5 h-3.5" />
            Hire Tariq
          </motion.a>
        </div>

        {/* Phone & Tablet Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl bg-white/90 dark:bg-white/[0.05] text-[#5D1212] dark:text-amber-300 border border-white shadow-sm"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2.5 rounded-xl text-[#0F172A] dark:text-slate-200 bg-white/90 dark:bg-white/[0.05] border border-white shadow-sm"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Glassmorphism Slide-Down Drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden absolute top-full inset-x-0 bg-white/90 dark:bg-[#0B0F19]/95 backdrop-blur-2xl border-b border-white/80 dark:border-white/[0.1] px-6 py-6 space-y-3 shadow-2xl transition-all"
        >
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-2 px-1">
            Navigation Menu
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-[#0F172A] dark:text-slate-200 hover:bg-[#FCEAE7] dark:hover:bg-white/[0.05] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-[#E2E8F0] dark:border-white/[0.08] flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 text-center rounded-xl border border-[#E2E8F0] dark:border-white/10 text-xs font-semibold text-[#0F172A] dark:text-slate-200 bg-white shadow-sm"
            >
              GitHub
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="flex-1 py-3 text-center rounded-xl bg-[#5D1212] hover:bg-[#3D0C0C] dark:bg-indigo-600 text-xs font-semibold text-white shadow-md shadow-[#5D1212]/20"
            >
              Send Email
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
