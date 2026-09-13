'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  Check,
  Code2,
  Layers,
  Terminal,
  Cpu,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Compass,
} from "lucide-react";

const SKILL_PILLARS = [
  {
    category: "DEVELOPMENT & ARCHITECTURE",
    tagline: "High-performance frontend engineering & modern standards",
    icon: Code2,
    skills: [
      { name: "Next.js (App Router, SSR, ISR)", level: "Production Standard" },
      { name: "React 19 & Concurrent Features", level: "Core Expertise" },
      { name: "TypeScript (Strict Typing)", level: "Production Standard" },
      { name: "Tailwind CSS & CSS Architecture", level: "Core Expertise" },
      { name: "REST & GraphQL APIs", level: "Proficient" },
      { name: "Core Web Vitals & Web Performance", level: "Production Standard" },
      { name: "Semantic HTML5 & Accessibility", level: "WCAG 2.1 AA" },
      { name: "Interactive Motion (GSAP / Motion)", level: "Polished UX" },
    ],
  },
  {
    category: "PRODUCT & DESIGN SYSTEMS",
    tagline: "End-to-end interface design, UX clarity & design tokens",
    icon: Layers,
    skills: [
      { name: "Product Strategy & Scoping", level: "Lead Level" },
      { name: "UI / UX Design & Interaction", level: "Core Expertise" },
      { name: "Design Systems & Token Systems", level: "Figma to Code" },
      { name: "Interactive Prototyping", level: "High Fidelity" },
      { name: "WCAG 2.1 AA Compliance", level: "Audited Standards" },
      { name: "Information Architecture", level: "Core Expertise" },
      { name: "Micro-Interactions & Transitions", level: "Polished UX" },
      { name: "User Discovery & Usability", level: "User-Centered" },
    ],
  },
  {
    category: "INFRASTRUCTURE & WORKFLOW",
    tagline: "Cloud deployment, database integration & developer velocity",
    icon: Cpu,
    skills: [
      { name: "Supabase (PostgreSQL / RLS)", level: "Integrated Cloud" },
      { name: "Vercel Platform & Edge Networks", level: "Production Deployment" },
      { name: "Git & GitHub PR Workflows", level: "Standard Flow" },
      { name: "Resend Email API Integration", level: "Transactional Systems" },
      { name: "Chrome DevTools & Performance Profiling", level: "Diagnostic Depth" },
      { name: "ESLint, Prettier & Code Quality", level: "Automated Checks" },
      { name: "VS Code & Antigravity IDE", level: "Primary Workspace" },
      { name: "Figma Collaboration & Dev Mode", level: "Seamless Handoff" },
    ],
  },
];

const PRINCIPLES = [
  {
    num: "01",
    title: "Clarity Over Complexity",
    description:
      "A great interface removes friction before the user even notices it. I strip away superfluous ornamentation and focus on typography, spatial hierarchy, and immediate comprehension.",
  },
  {
    num: "02",
    title: "Design & Code As One Medium",
    description:
      "Design systems shouldn't get lost in handoff. Designing with engineering constraints and coding with typographic precision results in faster ships and flawless implementations.",
  },
  {
    num: "03",
    title: "Zero-Latency Performance",
    description:
      "Every millisecond of delay costs trust. I architect applications with optimized bundles, instant visual feedback, strict Core Web Vitals, and smooth 60fps animations.",
  },
  {
    num: "04",
    title: "Accessibility From Day Zero",
    description:
      "True craftsmanship is inclusive. Semantic markup, keyboard navigation, clear contrast ratios, and screen-reader readiness are baked into every component from the start.",
  },
];

const EXPERIENCE_HIGHLIGHTS = [
  {
    period: "2024 — PRESENT",
    role: "Independent Product Designer & Frontend Engineer",
    description:
      "Partnering with founders, early-stage startups, and product teams to design and build high-performance web applications, design systems, and modern digital experiences.",
  },
  {
    period: "2022 — 2024",
    role: "Lead Interface Designer & Frontend Developer",
    description:
      "Led end-to-end design and frontend development for data-rich SaaS platforms, AI productivity tools, and modular design token libraries.",
  },
  {
    period: "2020 — 2022",
    role: "Frontend Engineer & UI Specialist",
    description:
      "Built responsive, accessible client-facing web applications using React, Next.js, and modern CSS architecture with strict cross-browser standards.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F7F7F5] text-[#111111] min-h-screen">
      {/* 1. Global Navigation Header */}
      <Nav />

      <main id="main-content" className="pt-24 sm:pt-32 pb-20">
        
        {/* Top Back Bar & Status Indicator */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#DDDDD8] gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#555555] hover:text-[#111111] uppercase transition-colors group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              <span>Back to Portfolio</span>
            </Link>

            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[#555555]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Select Engagements · 2026</span>
            </div>
          </div>
        </div>

        {/* Page Hero Header */}
        <section className="max-w-[1280px] mx-auto px-6 sm:px-8 mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-6"
          >
            <span className="eyebrow block">Background &amp; Capabilities</span>
            <h1 className="display-headline text-[#111111]">
              Bridging design direction with production-grade engineering.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#555555] leading-relaxed font-light">
              I am an independent product designer and frontend engineer dedicated to crafting deliberate, fast, and mathematically sound digital experiences. Here is a comprehensive look at my story, technical toolkit, and engineering philosophy.
            </p>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 sm:pt-12 mt-12 border-t border-[#DDDDD8]"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#858585] block mb-1">
                Discipline
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#111111]">
                Design + Engineering
              </span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#858585] block mb-1">
                Core Stack
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#111111]">
                Next.js · React · TS
              </span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#858585] block mb-1">
                Location
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#111111]">
                Remote / Worldwide
              </span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#858585] block mb-1">
                Experience
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#111111]">
                5+ Years Shipping
              </span>
            </div>
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1: ABOUT — Narrative, Editorial Portrait & Philosophy */}
        {/* ========================================================================= */}
        <section id="about" className="w-full py-16 sm:py-24 border-t border-[#DDDDD8]">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pb-8 border-b border-[#DDDDD8] mb-16 sm:mb-20"
            >
              <span className="eyebrow block mb-2">The Story</span>
              <h2 className="editorial-h2 text-[#111111]">
                About Imran
              </h2>
            </motion.div>

            {/* Editorial 2-Column Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Portrait & Identity Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="relative w-full aspect-[4/5] rounded-md border border-[#DDDDD8] bg-[#FFFFFF] overflow-hidden shadow-xs">
                  <Image
                    src="/hero-thumb.png"
                    alt="Imran — Lead Product Designer & Frontend Engineer"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top filter contrast-[1.02] grayscale-[15%]"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/30 to-transparent p-6 text-white">
                    <span className="text-sm font-bold tracking-tight block">
                      Imran
                    </span>
                    <span className="text-xs font-mono tracking-wider uppercase block opacity-85 mt-0.5">
                      Lead Designer &amp; Frontend Engineer
                    </span>
                  </div>
                </div>

                {/* Identity & Social Badges */}
                <div className="p-6 rounded-md border border-[#DDDDD8] bg-[#FFFFFF] space-y-4 shadow-2xs">
                  <div className="text-xs font-mono tracking-wider uppercase text-[#858585]">
                    Quick Connect
                  </div>
                  <div className="flex flex-col gap-2.5 text-sm">
                    <a
                      href="mailto:info.imran.ma@gmail.com"
                      className="text-[#111111] hover:text-[#555555] transition-colors flex items-center justify-between"
                    >
                      <span className="font-mono text-xs">Email</span>
                      <span className="font-medium">info.imran.ma@gmail.com</span>
                    </a>
                    <a
                      href="https://github.com/iimran-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111111] hover:text-[#555555] transition-colors flex items-center justify-between"
                    >
                      <span className="font-mono text-xs">GitHub</span>
                      <span className="font-medium inline-flex items-center gap-1">
                        @iimran-dev <ArrowUpRight size={13} />
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/imran-m-a-35a89128a/?skipRedirect=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111111] hover:text-[#555555] transition-colors flex items-center justify-between"
                    >
                      <span className="font-mono text-xs">LinkedIn</span>
                      <span className="font-medium inline-flex items-center gap-1">
                        Imran M A <ArrowUpRight size={13} />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Philosophy Callout */}
                <div className="p-6 rounded-md bg-[#F0F0EC] border border-[#DDDDD8] text-xs font-mono text-[#555555] leading-relaxed">
                  &ldquo;Aesthetics without engineering rigor falls apart in production. Engineering without aesthetic sensitivity fails to resonate. I operate directly at their convergence.&rdquo;
                </div>
              </motion.div>

              {/* Right Column: Detailed Narrative & Trajectory */}
              <div className="lg:col-span-7 flex flex-col gap-12">
                
                {/* Introduction Paragraph */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  <span className="eyebrow text-[#111111]">Core Approach</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] leading-tight tracking-tight">
                    Eliminating the friction between vision and production deployment.
                  </h3>
                  <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                    Most product teams lose momentum in the gap between Figma designs and engineering implementation. Details get lost in translation, interaction subtleties disappear, and performance regressions creep in.
                  </p>
                  <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                    By combining systematic UI/UX design with modern React and Next.js architecture, I create end-to-end workflows where the design system is directly reflected in clean, maintainable, production-ready code.
                  </p>
                </motion.div>

                {/* Professional Story */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-8 border-t border-[#DDDDD8] space-y-4"
                >
                  <span className="eyebrow text-[#111111]">Professional Trajectory</span>
                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                    Over the past 5+ years, I have helped design and engineer enterprise web apps, AI productivity workspaces, interactive e-commerce touchpoints, and tokenized design systems. My work focuses on turning ambiguous product requirements into structured, tactile interfaces that feel effortless to navigate.
                  </p>
                </motion.div>

                {/* Guiding Principles 2x2 Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-8 border-t border-[#DDDDD8] space-y-6"
                >
                  <span className="eyebrow text-[#111111]">Guiding Principles</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {PRINCIPLES.map((principle) => (
                      <div
                        key={principle.num}
                        className="p-5 rounded-md border border-[#DDDDD8] bg-[#FFFFFF] space-y-2.5 shadow-2xs"
                      >
                        <div className="text-xs font-mono font-bold text-[#858585]">
                          {principle.num}
                        </div>
                        <h4 className="text-base font-bold text-[#111111]">
                          {principle.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Career Highlights Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-8 border-t border-[#DDDDD8] space-y-6"
                >
                  <span className="eyebrow text-[#111111]">Experience Timeline</span>
                  <div className="space-y-6">
                    {EXPERIENCE_HIGHLIGHTS.map((item, idx) => (
                      <div
                        key={idx}
                        className="pb-6 border-b border-[#EBEBE6] last:border-0 last:pb-0 space-y-1.5"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="text-sm sm:text-base font-bold text-[#111111]">
                            {item.role}
                          </h4>
                          <span className="text-xs font-mono text-[#858585]">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: SKILLS & CAPABILITIES — Structured Pillars */}
        {/* ========================================================================= */}
        <section id="skills" className="w-full py-20 sm:py-28 border-t border-[#DDDDD8] bg-[#FFFFFF]">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="pb-8 border-b border-[#DDDDD8] mb-16 sm:mb-20 max-w-3xl"
            >
              <span className="eyebrow block mb-2">Technical Proficiency</span>
              <h2 className="editorial-h2 text-[#111111]">
                Skills &amp; Capabilities
              </h2>
              <p className="text-base sm:text-lg text-[#555555] mt-4 leading-relaxed font-normal">
                A comprehensive overview of the technologies, frameworks, design methodologies, and tools I use to take ideas from concept to production-grade deployment.
              </p>
            </motion.div>

            {/* 3 Structured Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {SKILL_PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.category}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="p-6 sm:p-8 rounded-lg border border-[#DDDDD8] bg-[#F7F7F5] flex flex-col justify-between shadow-2xs hover:border-[#BFBFB8] transition-colors"
                  >
                    <div>
                      {/* Card Header with Icon */}
                      <div className="flex items-center gap-3 pb-5 border-b border-[#DDDDD8] mb-6">
                        <div className="w-9 h-9 rounded-md bg-[#111111] text-white flex items-center justify-center shrink-0">
                          <IconComponent size={18} strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase">
                            {pillar.category}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs text-[#666666] mb-6 leading-relaxed">
                        {pillar.tagline}
                      </p>

                      {/* Skills List */}
                      <ul className="space-y-3.5">
                        {pillar.skills.map((skill) => (
                          <li
                            key={skill.name}
                            className="flex items-start justify-between gap-3 text-xs sm:text-[13px] pb-3 border-b border-[#E8E8E2] last:border-0 last:pb-0"
                          >
                            <span className="font-medium text-[#111111]">
                              {skill.name}
                            </span>
                            <span className="font-mono text-[11px] text-[#858585] shrink-0">
                              {skill.level}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#DDDDD8] flex items-center gap-2 text-xs font-mono text-[#666666]">
                      <ShieldCheck size={14} className="text-emerald-600" />
                      <span>Audited for Production</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Technology Matrix Quick-View */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 p-8 rounded-lg border border-[#DDDDD8] bg-[#FAFAF8] flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-1">
                <span className="eyebrow block">Technology Stack At A Glance</span>
                <p className="text-sm text-[#555555]">
                  Next.js 15, React 19, TypeScript, Tailwind CSS v4, Motion, GSAP, Supabase, Vercel, Node.js, Figma.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Next.js 15",
                  "React 19",
                  "TypeScript",
                  "Tailwind v4",
                  "Supabase",
                  "Figma",
                  "Motion",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#DDDDD8] text-xs font-mono text-[#111111] shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <section className="w-full py-20 sm:py-28 border-t border-[#DDDDD8] bg-[#111111] text-[#FFFFFF]">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
            <div className="max-w-3xl space-y-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888] block">
                Next Steps &amp; Collaboration
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Ready to engineer your next digital product?
              </h2>

              <p className="text-base sm:text-lg text-[#AAAAAA] leading-relaxed font-light">
                Whether you are launching a new product from scratch, scaling an existing design system, or seeking high-performance frontend engineering, I am available for select contract and consulting engagements.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFFFFF] text-[#111111] hover:bg-[#EAEAE8] px-7 py-3.5 text-sm font-semibold transition-all duration-200 shadow-md active:scale-95"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#444444] text-[#FFFFFF] hover:border-[#888888] px-6 py-3.5 text-sm font-medium transition-all duration-200"
                >
                  <span>View Selected Work</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 4. Global Footer */}
      <Footer />
    </div>
  );
}
