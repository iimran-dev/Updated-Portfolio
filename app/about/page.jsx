'use client';

import Link from "next/link";
import { motion } from "motion/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

// Subtle editorial animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const CAPABILITY_GROUPS = [
  {
    title: "FRONTEND",
    items: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "CSS"],
  },
  {
    title: "INTERFACE & EXPERIENCE",
    items: [
      "UI / UX Design",
      "Interactive Prototypes",
      "Responsive Design",
      "Interaction & Motion",
    ],
  },
  {
    title: "BACKEND & DATA",
    items: ["REST APIs", "Supabase", "PostgreSQL", "Row Level Security"],
  },
  {
    title: "DEPLOYMENT & WORKFLOW",
    items: ["Vercel", "Git", "GitHub", "Pull Request Workflows"],
  },
];

const WORKING_PHILOSOPHY_SEQUENCE = [
  { step: "01", statement: "Understand the problem." },
  { step: "02", statement: "Design with intention." },
  { step: "03", statement: "Build with precision." },
  { step: "04", statement: "Refine until it feels right." },
];

const WHAT_MATTERS_ITEMS = [
  { index: "01", statement: "Clarity over complexity." },
  { index: "02", statement: "Function over decoration." },
  { index: "03", statement: "Details over noise." },
  { index: "04", statement: "Useful technology over unnecessary technology." },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F7F7F5] text-[#111111] min-h-screen selection:bg-[#111111] selection:text-[#F7F7F5] overflow-x-hidden font-sans">
      {/* Global Navigation */}
      <Nav />

      <main id="main-content" className="w-full">
        {/* Top Utility / Breadcrumb Bar */}
        <div className="pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 max-w-[1240px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#DDDDD8] gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#666666] hover:text-[#111111] transition-colors group"
            >
              <ArrowLeft
                size={13}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              <span>Back to Portfolio</span>
            </Link>

            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[#777777]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Independent Frontend Engineer · 2026</span>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* 01 — INTRODUCTION */}
        {/* ========================================================================= */}
        <section
          id="introduction"
          className="max-w-[1240px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-8 sm:pt-16 pb-28 sm:pb-36 lg:pb-48"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-8 sm:space-y-12"
          >
            <motion.span
              variants={fadeInUp}
              custom={0}
              className="text-xs font-mono uppercase tracking-widest text-[#888888] block"
            >
              01 — Introduction
            </motion.span>

            <div className="space-y-6 sm:space-y-10">
              <motion.h1
                variants={fadeInUp}
                custom={1}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[104px] font-bold tracking-[-0.035em] text-[#111111] leading-[0.96]"
              >
                I&apos;m Imran.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                custom={2}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-[#444444] font-normal leading-[1.3] tracking-[-0.015em] max-w-4xl"
              >
                A frontend engineer and creative technologist focused on
                building fast, functional, and thoughtfully designed digital
                products.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* 02 — PERSONAL PHILOSOPHY */}
        {/* ========================================================================= */}
        <section
          id="philosophy"
          className="border-t border-[#DDDDD8] pt-20 sm:pt-28 lg:pt-36 pb-28 sm:pb-36 lg:pb-44"
        >
          <div className="max-w-[1240px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="mb-14 sm:mb-20"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888] block">
                02 — Personal Philosophy
              </span>
            </motion.div>

            {/* Editorial Split Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Anchored Editorial Heading */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInUp}
                custom={1}
                className="lg:col-span-5 lg:sticky lg:top-28 space-y-3"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#111111] tracking-tight leading-[1.12]">
                  I like building things.
                </h2>
                <p className="text-xl sm:text-2xl text-[#777777] font-normal tracking-tight">
                  Mostly for the web.
                </p>
              </motion.div>

              {/* Right Column: Narrative & Sequence */}
              <div className="lg:col-span-7 space-y-14 sm:space-y-20">
                {/* Paragraph */}
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeInUp}
                  custom={2}
                  className="text-xl sm:text-2xl md:text-[25px] text-[#333333] font-normal leading-relaxed"
                >
                  I care about the details that make a product feel complete —
                  typography, spacing, responsiveness, interaction,
                  accessibility, performance, and simplicity.
                </motion.p>

                {/* Prominent Editorial Sequence (Strictly No Cards) */}
                <div className="border-b border-[#DDDDD8]">
                  {WORKING_PHILOSOPHY_SEQUENCE.map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      variants={fadeInUp}
                      custom={index * 0.1}
                      className="border-t border-[#DDDDD8] py-8 sm:py-10 flex items-baseline justify-between gap-6 group"
                    >
                      <div className="flex items-baseline gap-6 sm:gap-10">
                        <span className="text-xs font-mono text-[#888888] tracking-wider shrink-0 select-none">
                          {item.step}
                        </span>
                        <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#111111] tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                          {item.statement}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 03 — CAPABILITIES */}
        {/* ========================================================================= */}
        <section
          id="capabilities"
          className="border-t border-[#DDDDD8] pt-20 sm:pt-28 lg:pt-36 pb-28 sm:pb-36 lg:pb-44"
        >
          <div className="max-w-[1240px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="space-y-4 mb-16 sm:mb-24"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888] block">
                03 — Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#111111]">
                I work across
              </h2>
            </motion.div>

            {/* 4 Typographic Groups — Editorial Grid (Strictly No Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-14 lg:gap-10">
              {CAPABILITY_GROUPS.map((group, groupIdx) => (
                <motion.div
                  key={group.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeInUp}
                  custom={groupIdx * 0.1}
                  className="space-y-6 sm:space-y-8"
                >
                  {/* Category Heading */}
                  <div className="pb-3.5 border-b border-[#DDDDD8]">
                    <h3 className="text-xs font-mono font-semibold tracking-widest text-[#888888] uppercase">
                      {group.title}
                    </h3>
                  </div>

                  {/* Typographic Items */}
                  <ul className="space-y-4">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-base sm:text-lg md:text-[19px] text-[#111111] font-normal tracking-tight transition-colors duration-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 04 — HOW I BUILD */}
        {/* ========================================================================= */}
        <section
          id="how-i-build"
          className="border-t border-[#DDDDD8] pt-20 sm:pt-28 lg:pt-36 pb-28 sm:pb-36 lg:pb-44"
        >
          <div className="max-w-[1240px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="mb-14 sm:mb-20"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888] block">
                04 — How I build
              </span>
            </motion.div>

            {/* Split Editorial Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Heading */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInUp}
                custom={1}
                className="lg:col-span-4 lg:sticky lg:top-28"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#111111]">
                  How I build
                </h2>
              </motion.div>

              {/* Right Column: Technical Editorial Narrative */}
              <div className="lg:col-span-8 space-y-8 sm:space-y-12">
                {/* Paragraph 1: Standout Statement */}
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeInUp}
                  custom={2}
                  className="text-2xl sm:text-3xl md:text-4xl text-[#111111] font-normal leading-snug tracking-tight"
                >
                  I use modern tools without letting the tools dictate the
                  product.
                </motion.p>

                {/* Paragraph 2 */}
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeInUp}
                  custom={3}
                  className="text-lg sm:text-xl md:text-[22px] text-[#555555] font-normal leading-relaxed max-w-3xl"
                >
                  I work across React and Next.js on the frontend and Supabase
                  and PostgreSQL on the backend, choosing technologies that keep
                  products maintainable, scalable, and fast.
                </motion.p>

                {/* Paragraph 3 */}
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeInUp}
                  custom={4}
                  className="text-lg sm:text-xl md:text-[22px] text-[#555555] font-normal leading-relaxed max-w-3xl"
                >
                  I also use AI-assisted development and AI agents to accelerate
                  research, prototyping, implementation, and iteration — while
                  keeping architecture, quality, and the final experience under
                  careful control.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 05 — WHAT MATTERS TO ME */}
        {/* ========================================================================= */}
        <section
          id="what-matters-to-me"
          className="border-t border-[#DDDDD8] pt-20 sm:pt-28 lg:pt-36 pb-28 sm:pb-36 lg:pb-44"
        >
          <div className="max-w-[1240px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="space-y-4 mb-16 sm:mb-24"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888] block">
                05 — What matters to me
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#111111]">
                What matters to me
              </h2>
            </motion.div>

            {/* Large Individual Statements With Generous Spacing (Strictly No Cards) */}
            <div className="border-b border-[#DDDDD8]">
              {WHAT_MATTERS_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeInUp}
                  custom={idx * 0.1}
                  className="border-t border-[#DDDDD8] py-10 sm:py-14 lg:py-16 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 sm:gap-10 group"
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="text-xs sm:text-sm font-mono text-[#888888] tracking-wider shrink-0 select-none">
                      {item.index}
                    </span>
                    <span className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium text-[#111111] tracking-tight leading-[1.12] group-hover:translate-x-2 transition-transform duration-300">
                      {item.statement}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 06 — CURRENTLY & CLOSING MANIFESTO */}
        {/* ========================================================================= */}
        <section
          id="currently"
          className="border-t border-[#DDDDD8] pt-20 sm:pt-28 lg:pt-36 pb-32 sm:pb-44 lg:pb-56"
        >
          <div className="max-w-[1240px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
            {/* Section Index & Label */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="space-y-4 mb-10 sm:mb-16"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888] block">
                06 — Currently
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#111111]">
                Currently
              </h2>
            </motion.div>

            {/* Currently Narrative */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              custom={1}
              className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-[#333333] font-normal leading-relaxed max-w-4xl mb-24 sm:mb-32 lg:mb-40"
            >
              Exploring better ways to combine frontend engineering, product
              design, and AI-assisted development to build digital experiences
              that are both technically solid and visually refined.
            </motion.p>

            {/* Closing Manifesto Statement of the About Page */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              custom={2}
              className="pt-16 sm:pt-24 border-t border-[#DDDDD8] space-y-2 sm:space-y-4"
            >
              <h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-bold text-[#111111] tracking-[-0.035em] leading-[0.96]">
                Build less noise.
              </h3>
              <h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-bold text-[#111111] tracking-[-0.035em] leading-[0.96]">
                Create more value.
              </h3>
            </motion.div>

            {/* Quiet Contextual Transitions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeInUp}
              custom={3}
              className="mt-16 sm:mt-24 pt-8 border-t border-[#DDDDD8] flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888]">
                Open for conversations &amp; select contracts
              </span>

              <div className="flex items-center gap-6 sm:gap-8 font-mono text-xs uppercase tracking-wider">
                <Link
                  href="/work"
                  className="text-[#111111] hover:text-[#777777] inline-flex items-center gap-1.5 transition-colors group"
                >
                  <span>Selected Work</span>
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
                <Link
                  href="/#contact"
                  className="text-[#111111] hover:text-[#777777] inline-flex items-center gap-1.5 transition-colors group"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
