'use client';

import Link from "next/link";
import { motion } from "motion/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

// Subtle editorial animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: custom * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const CAPABILITY_GROUPS = [
  {
    title: "FRONTEND",
    items: ["Next.js", "React 19", "TypeScript", "Tailwind CSS"],
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

      <main id="main-content" className="pt-28 sm:pt-36 lg:pt-40">
        {/* Top Utility / Breadcrumb & Header Bar */}
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between pb-6 sm:pb-8 border-b border-[#DDDDD8] mb-12 sm:mb-16"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#555555] hover:text-[#111111] transition-colors group"
            >
              <ArrowLeft
                size={13}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              <span>Back to Overview</span>
            </Link>

            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#666666]">
              About — Profile
            </span>
          </motion.div>

          {/* 01 — INTRODUCTION */}
          <motion.header
            initial="hidden"
            animate="visible"
            className="max-w-3xl mb-14 sm:mb-20"
          >

            <motion.h1
              variants={fadeInUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-4 sm:mb-5"
            >
              I&apos;m Imran.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              custom={2}
              className="text-base sm:text-lg lg:text-xl text-[#555555] font-normal leading-relaxed max-w-2xl"
            >
              A creative frontend engineer, focused on building fast, functional, and thoughtfully designed digital products.
            </motion.p>
          </motion.header>
        </div>

        {/* 02 — PERSONAL PHILOSOPHY (Split Layout Preserved on Mobile) */}
        <section
          id="philosophy"
          className="border-t border-[#DDDDD8] py-14 sm:py-18 lg:py-24"
        >
          <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
            {/* Editorial Split Composition: Preserved 2-column ratio across mobile & desktop */}
            <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-14 items-start">
              {/* Left Column: Anchored Editorial Heading */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInUp}
                custom={1}
                className="col-span-5 sticky top-24 sm:top-28 space-y-1.5 sm:space-y-2.5"
              >
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#111111] leading-tight sm:leading-snug">
                  I like building things.
                </h2>
                <p className="text-xs sm:text-base text-[#666666] font-normal">
                  Mostly for the web.
                </p>
              </motion.div>

              {/* Right Column: Narrative & Sequence */}
              <div className="col-span-7 space-y-6 sm:space-y-10 lg:space-y-12">
                {/* Paragraph with controlled measure */}
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeInUp}
                  custom={2}
                  className="text-xs sm:text-base lg:text-lg text-[#333333] font-normal leading-relaxed max-w-xl"
                >
                  I care about the details that make a product feel complete —
                  typography, spacing, responsiveness, interaction,
                  accessibility, performance, and simplicity.
                </motion.p>

                {/* Prominent Editorial Sequence */}
                <div className="border-b border-[#DDDDD8]">
                  {WORKING_PHILOSOPHY_SEQUENCE.map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-40px" }}
                      variants={fadeInUp}
                      custom={index * 0.08}
                      className="border-t border-[#DDDDD8] py-3.5 sm:py-5 flex items-baseline justify-between gap-3 sm:gap-6 group"
                    >
                      <div className="flex items-baseline gap-3 sm:gap-6 lg:gap-8 min-w-0">
                        <span className="text-[11px] sm:text-xs font-mono text-[#666666] tracking-wider shrink-0 select-none">
                          {item.step}
                        </span>
                        <span className="text-xs sm:text-lg lg:text-xl font-medium text-[#111111] tracking-tight group-hover:translate-x-1.5 transition-transform duration-300 leading-snug">
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

        {/* 03 — CAPABILITIES (Multi-column Editorial Grid Preserved on Mobile) */}
        <section
          id="capabilities"
          className="border-t border-[#DDDDD8] py-14 sm:py-18 lg:py-24"
        >
          <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
                I work across
              </h2>
            </motion.div>

            {/* 4 Typographic Groups — Preserved Multi-Column Grid on Mobile (2 cols on mobile, 4 on desktop) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {CAPABILITY_GROUPS.map((group, groupIdx) => (
                <motion.div
                  key={group.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeInUp}
                  custom={groupIdx * 0.08}
                  className="space-y-3 sm:space-y-4"
                >
                  {/* Category Heading */}
                  <div className="pb-2.5 sm:pb-3 border-b border-[#DDDDD8]">
                    <h3 className="text-[10px] sm:text-xs font-mono font-semibold tracking-widest text-[#555555] uppercase leading-tight">
                      {group.title}
                    </h3>
                  </div>

                  {/* Typographic Items */}
                  <ul className="space-y-2 sm:space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs sm:text-sm lg:text-base text-[#111111] font-normal tracking-tight hover:text-[#555555] transition-colors duration-200"
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

        {/* 04 — WHAT MATTERS TO ME (Horizontal Rows Preserved on Mobile) */}
        <section
          id="what-matters-to-me"
          className="border-t border-[#DDDDD8] py-14 sm:py-18 lg:py-24"
        >
          <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              className="mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
                What matters to me
              </h2>
            </motion.div>

            {/* Statements List: Preserved Horizontal Alignment on Mobile */}
            <div className="border-b border-[#DDDDD8]">
              {WHAT_MATTERS_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeInUp}
                  custom={idx * 0.08}
                  className="border-t border-[#DDDDD8] py-4 sm:py-6 lg:py-7 flex flex-row items-baseline gap-4 sm:gap-8 group"
                >
                  <span className="text-xs sm:text-sm font-mono text-[#666666] tracking-wider shrink-0 select-none">
                    {item.index}
                  </span>
                  <span className="text-base sm:text-2xl lg:text-3xl font-medium text-[#111111] tracking-tight leading-snug group-hover:translate-x-1.5 transition-transform duration-300">
                    {item.statement}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 — CLOSING MANIFESTO & ACTION BAR */}
        <section
          id="currently"
          className="border-t border-[#DDDDD8] py-14 sm:py-18 lg:py-24"
        >
          <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
            {/* Eyebrow */}

            {/* Closing Manifesto Statement */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              custom={2}
              className="space-y-1 sm:space-y-2"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.06]">
                Build less noise.
              </h2>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.06]">
                Create more value.
              </h2>
            </motion.div>

            {/* Contextual Action Bar: Preserved Horizontal Bar on Mobile */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeInUp}
              custom={3}
              className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#DDDDD8] flex flex-row items-center justify-between gap-4"
            >
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#666666] truncate">
                Open for select contracts
              </span>

              <div className="flex items-center gap-4 sm:gap-8 font-mono text-[11px] sm:text-xs uppercase tracking-wider shrink-0">
                <Link
                  href="/work"
                  className="text-[#111111] hover:text-[#555555] inline-flex items-center gap-1 sm:gap-1.5 transition-colors group"
                >
                  <span>Selected Work</span>
                  <ArrowUpRight
                    size={13}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
                <Link
                  href="/#contact"
                  className="text-[#111111] hover:text-[#555555] inline-flex items-center gap-1 sm:gap-1.5 transition-colors group"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight
                    size={13}
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

