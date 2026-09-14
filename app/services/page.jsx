'use client';

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import { useLenis } from "lenis/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Understand",
    tagline: "Research, always",
    description:
      "Good products are not built on instinct alone. I research your market, competitors, and user friction points so every technical recommendation is backed by evidence, not guesswork. The result is clearer direction, more confident decisions, and less risk before development begins.",
    x: 216,
    y: 296,
  },
  {
    number: "02",
    title: "Define",
    tagline: "Architecture & Metrics",
    description:
      "Establishing technical architecture, design tokens, information hierarchy, and success metrics that align engineering velocity directly with product goals. Sharper priorities and fewer unnecessary iterations.",
    x: 468,
    y: 216,
  },
  {
    number: "03",
    title: "Design",
    tagline: "Code-ready Prototypes",
    description:
      "High-fidelity interactive prototyping, typographic systems, and micro-interactions designed with craft, clarity, and WCAG AA accessibility by default. Usable React prototypes eliminate guesswork between design and production.",
    x: 720,
    y: 190,
  },
  {
    number: "04",
    title: "Build",
    tagline: "Production Engineering",
    description:
      "Writing clean, modular Next.js/React and TypeScript with strict performance budgets, zero layout shifts, optimized hydration, and maintainable state models that scale effortlessly as your product grows.",
    x: 972,
    y: 216,
  },
  {
    number: "05",
    title: "Refine",
    tagline: "Audit & Launch",
    description:
      "Usability auditing, Core Web Vitals optimization, animation tuning, and production deployment with continuous telemetry, documentation, and seamless developer handoff.",
    x: 1224,
    y: 296,
  },
];

const SERVICES = [
  {
    id: "web-engineering",
    title: "Web & Frontend Engineering",
    description:
      "Production-ready web applications built with modern frontend architecture, responsive design, and maintainable code.",
    checklistHeader: "This is for you if:",
    points: [
      "You need a production-ready Next.js or React application",
      "You need a responsive, pixel-accurate frontend implementation",
      "Your existing codebase needs better structure or performance",
    ],
    bgColor: "bg-[#B9A5FE]",
    buttonBg: "bg-[#111111] hover:bg-[#222222] text-[#FFFFFF]",
    buttonText: "Book a meeting",
  },
  {
    id: "ux-revamp",
    title: "Website Revamp & Optimization",
    description:
      "Transforming existing websites into faster, clearer, and more polished digital experiences through UX and performance upgrades.",
    checklistHeader: "This is for you if:",
    points: [
      "Your website feels outdated, inconsistent, or slow to load",
      "You want to modernize UX without breaking current foundations",
      "You need Core Web Vitals, speed, and usability enhancements",
    ],
    bgColor: "bg-[#FDE875]",
    buttonBg: "bg-[#DF9F05] hover:bg-[#D09300] text-[#111111]",
    buttonText: "Book a meeting",
  },
];

const ARC_TOTAL_LENGTH = 1300;

export default function ServicesPage() {
  const lenis = useLenis();

  // Scroll Container Ref for How I Work Arch
  const howIWorkScrollRef = useRef(null);

  // -------------------------------------------------------------
  // 1. HOW I WORK: Scroll-driven Arch Animation
  // -------------------------------------------------------------
  const { scrollYProgress: archRawProgress } = useScroll({
    target: howIWorkScrollRef,
    offset: ["start start", "end end"],
  });

  const smoothArchProgress = useSpring(archRawProgress, {
    stiffness: 280,
    damping: 34,
    restDelta: 0.001,
  });

  // Track active step (0 to 4) based on scroll progress
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    return smoothArchProgress.on("change", (latest) => {
      // 5 stages: [0, 0.20), [0.20, 0.40), [0.40, 0.60), [0.60, 0.80), [0.80, 1.0]
      const stepIdx = Math.min(4, Math.max(0, Math.floor(latest * 5)));
      setActiveStepIndex((prev) => (prev !== stepIdx ? stepIdx : prev));
    });
  }, [smoothArchProgress]);

  // Stroke Dashoffset: draws along the arch as user scrolls from 0 to 1
  // Step 1 is already reached at start (progress 0 has dot 1 lit)
  const archStrokeOffset = useTransform(
    smoothArchProgress,
    [0, 1],
    [ARC_TOTAL_LENGTH * 0.90, 0]
  );

  const activeStep = STEPS[activeStepIndex];

  // Helper to scroll to a specific step in How I Work
  const scrollToStep = (index) => {
    if (!howIWorkScrollRef.current) return;
    const rect = howIWorkScrollRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScrollable = rect.height - window.innerHeight;
    const targetScroll = scrollTop + (index / 4.2) * totalScrollable;
    lenis?.scrollTo(targetScroll, { duration: 0.8 });
  };

  return (
    <div className="bg-[#F7F7F5] text-[#111111] min-h-screen selection:bg-[#111111] selection:text-[#FFFFFF]">
      <Nav />

      <main id="main-content" className="pt-28 sm:pt-36 lg:pt-40">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          {/* Top Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between pb-6 sm:pb-8 border-b border-[#DDDDD8] mb-12 sm:mb-16"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#555555] hover:text-[#111111] uppercase transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Overview</span>
            </Link>
          </motion.div>

          {/* Page Header */}
          <motion.header
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-14 sm:mb-20"
          >
            <h1 className="whitespace-nowrap editorial-h1 text-[#111111] mb-4">
              Services &amp; Methodology
            </h1>
            <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
              A structured approach to engineering thoughtful digital products, responsive interfaces, and production design architectures.
            </p>
          </motion.header>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 1: HOW I WORK — SCROLL-TRIGGERED ARCH PROCESS FLOW                */}
        {/* ========================================================================= */}
        <section
          ref={howIWorkScrollRef}
          className="relative w-full border-t border-[#DDDDD8] bg-[#F7F7F5]"
        >
          {/* Universal Sticky Scroll Arch Container (Optimized for Mobile, Tablet & Desktop) */}
          <div className="relative min-h-[140vh] sm:min-h-[260vh]">
            <div className="sticky top-0 h-[100dvh] flex flex-col justify-center px-4 sm:px-10 md:px-14 lg:px-20 xl:px-24 max-w-[1140px] mx-auto overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex items-end justify-between pb-3 sm:pb-4 border-b border-[#DDDDD8] mb-3 sm:mb-6">
                <div>
                  <h2 className="editorial-h2 text-[#111111]">How I Work</h2>
                </div>
              </div>

              {/* Parabolic Arch SVG with Scroll-Driven Path & Milestone Nodes */}
              <div className="relative w-full max-w-[1000px] mx-auto select-none">
                <svg
                  viewBox="0 0 1440 380"
                  className="w-full h-auto overflow-visible pointer-events-none"
                  aria-hidden="true"
                >
                  {/* Base Inactive Arch Path */}
                  <path
                    d="M 120 340 Q 720 40 1320 340"
                    fill="none"
                    stroke="#DDDDD8"
                    strokeWidth="2"
                    className="sm:stroke-[1.5px]"
                  />

                  {/* Active Animated Overlay Arc Driven by Vertical Scroll */}
                  <motion.path
                    d="M 120 340 Q 720 40 1320 340"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="3.5"
                    strokeDasharray={ARC_TOTAL_LENGTH}
                    style={{ strokeDashoffset: archStrokeOffset }}
                    className="sm:stroke-[2.5px]"
                  />

                  {/* 5 Milestone Nodes along the Curve */}
                  {STEPS.map((step, idx) => {
                    const isActive = idx === activeStepIndex;
                    const isPassed = idx <= activeStepIndex;

                    return (
                      <g
                        key={step.number}
                        className="cursor-pointer pointer-events-auto"
                        onClick={() => scrollToStep(idx)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Step ${step.number}: ${step.title}`}
                      >
                        {/* Invisible Accessible Touch Hit Target */}
                        <circle
                          cx={step.x}
                          cy={step.y}
                          r="60"
                          fill="transparent"
                        />

                        {/* Outer Dot Ring */}
                        <circle
                          cx={step.x}
                          cy={step.y}
                          r={isActive ? "11" : "8"}
                          fill={isPassed ? "#111111" : "#FFFFFF"}
                          stroke="#111111"
                          strokeWidth="2"
                          className="transition-all duration-300"
                        />

                        {/* Inner Dot Center */}
                        <circle
                          cx={step.x}
                          cy={step.y}
                          r={isActive ? "3.5" : "2"}
                          fill={isPassed ? "#FFFFFF" : "#111111"}
                          className="transition-all duration-300"
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Active Step Presentation Card Under the Arch — Balanced Spacing & Removed Bottom Void */}
                <div className="relative w-full max-w-[560px] h-[145px] sm:h-[155px] mx-auto text-left mt-6 sm:-mt-6 px-4">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeStep.number}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.12, ease: "linear" }}
                      className="w-full h-full flex flex-col items-start justify-start text-left"
                    >
                      {/* Fixed height title (Left aligned) */}
                      <div className="w-full h-8 sm:h-10 flex items-center justify-start mb-1.5 sm:mb-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight text-left">
                          {activeStep.title}
                        </h3>
                      </div>

                      {/* Fixed height description container — Clean, no excess bottom margin */}
                      <div className="w-full h-[105px] sm:h-[95px] flex items-start justify-start text-left overflow-hidden">
                        <p className="text-[13px] sm:text-base text-[#555555] leading-relaxed text-left">
                          {activeStep.description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 2: SERVICES — 2 SEPARATE CARDS                                    */}
        {/* ========================================================================= */}
        <section className="relative w-full border-t border-[#DDDDD8] bg-[#F7F7F5] pt-6 pb-16 sm:py-28">
          <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
            {/* Header Bar */}
            <div className="pb-6 border-b border-[#DDDDD8] mb-12 sm:mb-16">
              <h2 className="editorial-h2 text-[#111111]">Services</h2>
            </div>

            {/* 2 Separate Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className={`rounded-[32px] sm:rounded-[36px] p-8 sm:p-10 lg:p-12 flex flex-col justify-between border border-black/5 shadow-xs hover:shadow-md transition-shadow ${service.bgColor}`}
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#111111]/85 leading-relaxed mb-6 sm:mb-8">
                      {service.description}
                    </p>
                    <div className="w-full h-px bg-black/10 mb-6 sm:mb-8" />
                    <p className="text-xs sm:text-sm font-bold text-[#111111] uppercase tracking-wider mb-4">
                      {service.checklistHeader}
                    </p>
                    <ul className="flex flex-col gap-3.5">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-xs sm:text-sm text-[#111111]/90 font-medium"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                            <Check size={11} strokeWidth={3.5} />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-8 sm:pt-10">
                    <Link
                      href="/#contact"
                      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-xs hover:shadow-md ${service.buttonBg}`}
                    >
                      <span>{service.buttonText}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM COLLABORATION CTA                                                  */}
        {/* ========================================================================= */}
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 pb-20 sm:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-12 border-t border-[#DDDDD8] flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div>
              <span className="eyebrow block mb-1">Collaboration</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                Ready to start a project?
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-[#222222] text-xs sm:text-sm font-medium transition-all duration-200 shadow-2xs active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
