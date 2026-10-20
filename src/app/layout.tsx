import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tariq Ali | Frontend, Flutter & .NET Full-Stack Developer",
  description:
    "Official portfolio of Tariq Ali — Software Developer in Lucknow, India specializing in Flutter end-to-end APK development, React, .NET API, MS SQL Server, AWS Cloud, and Python GenAI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrainsMono.variable} light`} suppressHydrationWarning>
      <body className="bg-[#FCEAE7] text-[#0F172A] font-sans antialiased overflow-x-hidden" suppressHydrationWarning>
        <div className="relative z-10" suppressHydrationWarning>{children}</div>
      </body>
    </html>
  );
}
