"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${senderName || "Recruiter / Client"}`
    );
    const body = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-[#E2E8F0] dark:border-white/[0.08] bg-[#FCEAE7]/20 dark:bg-[#06080D] relative overflow-hidden">
      {/* Animated Background Glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#075C3C]/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#5D1212]/10 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#5D1212] dark:text-indigo-400 font-bold">
                06 // Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white tracking-tight mt-2">
                Let&apos;s Build Your Next Mobile or Web Product
              </h2>
              <p className="text-[#64748B] dark:text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                Available for full-time software engineering roles, remote
                teams, and end-to-end Flutter / React / .NET development
                opportunities.
              </p>
            </div>

            <div className="space-y-3.5">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: portfolioData.personal.email,
                  href: `mailto:${portfolioData.personal.email}`,
                  color: "text-[#5D1212] dark:text-indigo-400",
                },
                {
                  icon: Phone,
                  label: "Mobile / WhatsApp",
                  value: portfolioData.personal.phone,
                  href: `tel:${portfolioData.personal.phone.replace(/\s+/g, "")}`,
                  color: "text-[#049F67] dark:text-emerald-400",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/tariqali2002",
                  href: portfolioData.personal.linkedin,
                  color: "text-[#0091B5] dark:text-cyan-400",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label === "LinkedIn" ? "_blank" : undefined}
                    rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 rounded-2xl bg-white/70 backdrop-blur-2xl hover:bg-white/90 dark:bg-[#0D111C]/80 dark:hover:bg-[#141A29] border border-white/90 dark:border-white/[0.08] flex items-center gap-3.5 transition-all shadow-xl shadow-[#5D1212]/5 group"
                  >
                    <div className={`p-2.5 rounded-xl bg-white border border-[#E2E8F0] dark:bg-white/[0.05] ${item.color} shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono text-[#94A3B8]">{item.label}</div>
                      <div className="text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-white truncate">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}

              <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-2xl border border-white/80 dark:bg-[#0D111C]/60 dark:border-white/[0.06] flex items-center gap-3.5 shadow-xl shadow-[#5D1212]/5">
                <div className="p-2.5 rounded-lg bg-white border border-[#E2E8F0] dark:bg-white/[0.05] text-[#64748B] dark:text-slate-300 shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-[#94A3B8]">Base Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-white truncate">
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleMailtoSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/90 dark:bg-[#0D111C] dark:border-white/[0.09] space-y-5 shadow-2xl shadow-[#5D1212]/10 relative"
            >
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-white">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-[#64748B] dark:text-slate-300 mb-2 font-bold"
                  >
                    YOUR NAME
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Recruiter / Hiring Manager"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#E2E8F0] text-sm text-[#0F172A] dark:bg-[#070A12] dark:border-white/[0.1] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#5D1212] dark:focus:ring-indigo-500 shadow-sm transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-[#64748B] dark:text-slate-300 mb-2 font-bold"
                  >
                    YOUR EMAIL
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    id="email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#E2E8F0] text-sm text-[#0F172A] dark:bg-[#070A12] dark:border-white/[0.1] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#5D1212] dark:focus:ring-indigo-500 shadow-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-[#64748B] dark:text-slate-300 mb-2 font-bold"
                >
                  PROJECT OR ROLE DETAILS
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Tariq, we'd love to discuss a Full-Stack Flutter / React / .NET role with you..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#E2E8F0] text-sm text-[#0F172A] dark:bg-[#070A12] dark:border-white/[0.1] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#5D1212] dark:focus:ring-indigo-500 shadow-sm transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#5D1212] hover:bg-[#3D0C0C] dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-[#5D1212]/30 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Compose Verified Email
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
