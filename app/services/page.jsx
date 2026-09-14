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
    number: "01",
    title: "Web & Frontend Engineering",
    role: "0 → Production Applications",
    description:
      "Full-cycle frontend engineering delivering clean, performant, and maintainable web applications using Next.js App Router, React 19, TypeScript, and modern headless architecture.",
    checklistHeader: "This is for you if:",
    points: [
      "You need a production-ready Next.js or React application shipped fast",
      "You need a responsive, pixel-accurate frontend matching design specs",
      "Your existing codebase needs better architecture, speed, or performance",
    ],
    bgColor: "bg-[#B9A5FE]",
    badgeBg: "bg-black/10 text-[#111111]",
    buttonBg: "bg-[#111111] hover:bg-[#222222] text-[#FFFFFF]",
    buttonText: "Book a meeting",
  },
  {
    id: "ux-revamp",
    number: "02",
    title: "Website Revamp & UX Optimization",
    role: "Speed, Aesthetics & Usability Upgrades",
    description:
      "Transforming existing web interfaces into faster, clearer, and more polished digital experiences that elevate brand trust and eliminate user friction without a complete rewrite.",
    checklistHeader: "This is for you if:",
    points: [
      "Your product feels outdated, inconsistent, or sluggish to load",
      "You want to modernize UX without breaking current foundations",
      "You need Core Web Vitals compliance, speed, and usability enhancements",
    ],
    bgColor: "bg-[#FDE875]",
    badgeBg: "bg-black/10 text-[#111111]",
    buttonBg: "bg-[#DF9F05] hover:bg-[#D09300] text-[#111111]",
    buttonText: "Book a meeting",
  },
  {
    id: "design-systems",
    number: "03",
    title: "Design Systems & Architecture",
    role: "Scalable Component Libraries",
    description:
      "Bridging Figma designs and frontend codebases with robust token pipelines, reusable component libraries, and documentation that accelerate team velocity.",
    checklistHeader: "This is for you if:",
    points: [
      "Your team struggles with styling inconsistencies across product views",
      "You want automated token synchronization from design to production code",
      "You need accessible WCAG 2.1 AA component primitives built to scale",
    ],
    bgColor: "bg-[#70D6FF]",
    badgeBg: "bg-black/10 text-[#004E75]",
    buttonBg: "bg-[#004E75] hover:bg-[#003B59] text-[#FFFFFF]",
    buttonText: "Book a meeting",
  },
  {
    id: "performance-advisory",
    number: "04",
    title: "Performance & Technical Advisory",
    role: "Audits, Speed & Code Quality",
    description:
      "Deep-dive performance audits, bundle reduction, accessibility compliance, and ongoing senior technical advisory to keep your web apps lightning fast and bug-free.",
    checklistHeader: "This is for you if:",
    points: [
      "Your web application suffers from poor Core Web Vitals or low Lighthouse scores",
      "You need senior technical oversight and guidance for critical releases",
      "You want automated CI/CD performance and accessibility regression checks",
    ],
    bgColor: "bg-[#A7E8BD]",
    badgeBg: "bg-black/10 text-[#0E4A28]",
    buttonBg: "bg-[#0E4A28] hover:bg-[#09351C] text-[#FFFFFF]",
    buttonText: "Book a meeting",
  },
];

const ARC_TOTAL_LENGTH = 1300;

export default function ServicesPage() {
  const lenis = useLenis();

  // Scroll Container Refs
  const howIWorkScrollRef = useRef(null);
  const servicesScrollRef = useRef(null);

  // -------------------------------------------------------------
  // 1. HOW I WORK: Scroll-driven Arch Animation
  // -------------------------------------------------------------
  const { scrollYProgress: archRawProgress } = useScroll({
    target: howIWorkScrollRef,
    offset: ["start start", "end end"],
  });

  const smoothArchProgress = useSpring(archRawProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Track active step (0 to 4) based on scroll progress
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    return smoothArchProgress.on("change", (latest) => {
      // 5 stages: [0, 0.20), [0.20, 0.40), [0.40, 0.60), [0.60, 0.80), [0.80, 1.0]
      const stepIdx = Math.min(4, Math.max(0, Math.floor(latest * 5)));
      setActiveStepIndex(stepIdx);
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
    const targetScroll = scrollTop + (index / 4.5) * totalScrollable;
    lenis?.scrollTo(targetScroll, { duration: 0.9 });
  };

  // -------------------------------------------------------------
  // 2. SERVICES STICKY SCROLL: 4-Stage Continuous Transitions
  // -------------------------------------------------------------
  const { scrollYProgress: servicesRawProgress } = useScroll({
    target: servicesScrollRef,
    offset: ["start start", "end end"],
  });

  const smoothServicesProgress = useSpring(servicesRawProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate active service stage (0, 1, 2, 3)
  const [activeServiceStage, setActiveServiceStage] = useState(0);

  useEffect(() => {
    return smoothServicesProgress.on("change", (latest) => {
      if (latest < 0.25) {
        setActiveServiceStage(0);
      } else if (latest < 0.50) {
        setActiveServiceStage(1);
      } else if (latest < 0.75) {
        setActiveServiceStage(2);
      } else {
        setActiveServiceStage(3);
      }
    });
  }, [smoothServicesProgress]);

  // Service 01 Transforms
  const card1Opacity = useTransform(smoothServicesProgress, [0, 0.18, 0.27], [1, 1, 0]);
  const card1Y = useTransform(smoothServicesProgress, [0, 0.18, 0.27], [0, 0, -40]);
  const card1Scale = useTransform(smoothServicesProgress, [0, 0.18, 0.27], [1, 1, 0.98]);
  const card1Pointer = useTransform(smoothServicesProgress, (p) => (p < 0.24 ? "auto" : "none"));

  // Service 02 Transforms
  const card2Opacity = useTransform(smoothServicesProgress, [0.18, 0.27, 0.44, 0.53], [0, 1, 1, 0]);
  const card2Y = useTransform(smoothServicesProgress, [0.18, 0.27, 0.44, 0.53], [40, 0, 0, -40]);
  const card2Scale = useTransform(smoothServicesProgress, [0.18, 0.27, 0.44, 0.53], [0.98, 1, 1, 0.98]);
  const card2Pointer = useTransform(smoothServicesProgress, (p) => (p >= 0.24 && p < 0.50 ? "auto" : "none"));

  // Service 03 Transforms
  const card3Opacity = useTransform(smoothServicesProgress, [0.44, 0.53, 0.70, 0.79], [0, 1, 1, 0]);
  const card3Y = useTransform(smoothServicesProgress, [0.44, 0.53, 0.70, 0.79], [40, 0, 0, -40]);
  const card3Scale = useTransform(smoothServicesProgress, [0.44, 0.53, 0.70, 0.79], [0.98, 1, 1, 0.98]);
  const card3Pointer = useTransform(smoothServicesProgress, (p) => (p >= 0.50 && p < 0.76 ? "auto" : "none"));

  // Service 04 Transforms
  const card4Opacity = useTransform(smoothServicesProgress, [0.70, 0.79, 1], [0, 1, 1]);
  const card4Y = useTransform(smoothServicesProgress, [0.70, 0.79, 1], [40, 0, 0]);
  const card4Scale = useTransform(smoothServicesProgress, [0.70, 0.79, 1], [0.98, 1, 1]);
  const card4Pointer = useTransform(smoothServicesProgress, (p) => (p >= 0.76 ? "auto" : "none"));

  // Helper to scroll to a specific service stage
  const scrollToService = (index) => {
    if (!servicesScrollRef.current) return;
    const rect = servicesScrollRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScrollable = rect.height - window.innerHeight;
    const targetScroll = scrollTop + (index / 3.2) * totalScrollable;
    lenis?.scrollTo(targetScroll, { duration: 1.0 });
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
            <span className="eyebrow block mb-2.5">Capabilities &amp; Process</span>
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
          {/* Desktop & Tablet Sticky Scroll Arch Container */}
          <div className="hidden md:block relative min-h-[280vh]">
            <div className="sticky top-0 h-screen flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 max-w-[1140px] mx-auto overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex items-end justify-between pb-4 border-b border-[#DDDDD8] mb-6">
                <div>
                  <span className="eyebrow block mb-1">Methodology</span>
                  <h2 className="editorial-h2 text-[#111111]">How I Work</h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#888888] font-medium hidden lg:inline">
                    Step {activeStep.number} of 05
                  </span>
                  <div className="flex items-center gap-1.5 ml-2">
                    {STEPS.map((step, idx) => (
                      <button
                        key={step.number}
                        type="button"
                        onClick={() => scrollToStep(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          activeStepIndex === idx
                            ? "bg-[#111111] scale-125"
                            : "bg-[#DDDDD8] hover:bg-[#888888]"
                        }`}
                        aria-label={`Jump to step ${step.number}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Parabolic Arch SVG with Scroll-Driven Path & Milestone Nodes */}
              <div className="relative w-full max-w-[1000px] mx-auto select-none">
                <svg
                  viewBox="0 0 1440 380"
                  className="w-full h-auto overflow-visible"
                  aria-hidden="true"
                >
                  {/* Base Inactive Arch Path */}
                  <path
                    d="M 120 340 Q 720 40 1320 340"
                    fill="none"
                    stroke="#DDDDD8"
                    strokeWidth="1.5"
                  />

                  {/* Active Animated Overlay Arc Driven by Vertical Scroll */}
                  <motion.path
                    d="M 120 340 Q 720 40 1320 340"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="2.5"
                    strokeDasharray={ARC_TOTAL_LENGTH}
                    style={{ strokeDashoffset: archStrokeOffset }}
                  />

                  {/* 5 Milestone Nodes along the Curve */}
                  {STEPS.map((step, idx) => {
                    const isActive = idx === activeStepIndex;
                    const isPassed = idx <= activeStepIndex;

                    return (
                      <g
                        key={step.number}
                        className="cursor-pointer"
                        onClick={() => scrollToStep(idx)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Step ${step.number}: ${step.title}`}
                      >
                        {/* Active Outer Pulsing Ring */}
                        {isActive && (
                          <circle
                            cx={step.x}
                            cy={step.y}
                            r="15"
                            fill="none"
                            stroke="#111111"
                            strokeWidth="1.2"
                            opacity="0.25"
                            className="animate-ping"
                          />
                        )}

                        {/* Outer Dot Ring */}
                        <circle
                          cx={step.x}
                          cy={step.y}
                          r={isActive ? "7.5" : "5.5"}
                          fill={isPassed ? "#111111" : "#FFFFFF"}
                          stroke="#111111"
                          strokeWidth="2"
                          className="transition-all duration-300"
                        />

                        {/* Inner Dot Center */}
                        <circle
                          cx={step.x}
                          cy={step.y}
                          r={isActive ? "2.5" : "1.5"}
                          fill={isPassed ? "#FFFFFF" : "#111111"}
                          className="transition-all duration-300"
                        />

                        {/* Step Number Tag Label */}
                        <text
                          x={step.x}
                          y={step.y - 14}
                          textAnchor="middle"
                          fill={isActive ? "#111111" : "#888888"}
                          fontSize="11"
                          fontFamily="monospace"
                          fontWeight={isActive ? "700" : "500"}
                          className="transition-colors duration-200"
                        >
                          {step.number}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Active Step Presentation Card Under the Arch */}
                <div className="max-w-xl mx-auto text-center -mt-6 sm:-mt-8 mb-6 px-4 min-h-[140px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep.number}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-2.5"
                    >
                      <span className="text-xs font-mono uppercase tracking-widest text-[#888888] font-semibold">
                        {activeStep.number} · {activeStep.tagline}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                        {activeStep.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-lg mx-auto">
                        {activeStep.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Step Navigation Button Tabs */}
                <div className="flex justify-center items-center gap-2 pt-2">
                  {STEPS.map((step, idx) => {
                    const isActive = idx === activeStepIndex;
                    return (
                      <button
                        key={step.number}
                        type="button"
                        onClick={() => scrollToStep(idx)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-[#111111] text-[#FFFFFF] shadow-2xs"
                            : "bg-[#FFFFFF] border border-[#DDDDD8] text-[#666666] hover:text-[#111111]"
                        }`}
                      >
                        <span className="font-bold">{step.number}</span>
                        <span className="hidden sm:inline">{step.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Fallback: Accessible, Natural Touch Scroll */}
          <div className="block md:hidden px-6 py-12">
            <div className="mb-6">
              <span className="eyebrow block mb-1">Methodology</span>
              <h2 className="editorial-h2 text-[#111111]">How I Work</h2>
            </div>
            <div className="space-y-4">
              {STEPS.map((step) => (
                <div
                  key={step.number}
                  className="p-5 rounded-xl bg-[#FFFFFF] border border-[#DDDDD8] shadow-2xs"
                >
                  <span className="text-xs font-mono font-bold text-[#888888] block mb-1">
                    {step.number} · {step.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: SERVICES — STICKY SCROLL-DRIVEN STAGE PRESENTATION             */}
        {/* ========================================================================= */}
        <section
          ref={servicesScrollRef}
          className="relative w-full border-t border-[#DDDDD8] bg-[#F7F7F5]"
        >
          {/* Desktop Sticky Scroll Experience (Recreating reference pattern) */}
          <div className="hidden md:block relative min-h-[360vh]">
            <div className="sticky top-0 h-screen flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 max-w-[1140px] mx-auto overflow-hidden">
              
              {/* Sticky Top Bar: Section Title + Stage Indicators */}
              <div className="flex items-end justify-between pb-6 border-b border-[#DDDDD8] mb-8 sm:mb-12">
                <div>
                  <span className="eyebrow block mb-1.5">Offerings</span>
                  <h2 className="editorial-h2 text-[#111111]">Services</h2>
                </div>

                {/* Stage Indicator Pills */}
                <div className="flex items-center gap-2">
                  {SERVICES.map((s, idx) => (
                    <button
                      key={s.number}
                      type="button"
                      onClick={() => scrollToService(idx)}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                        activeServiceStage === idx
                          ? "bg-[#111111] text-[#FFFFFF] shadow-2xs scale-105"
                          : "bg-black/5 hover:bg-black/10 text-[#777777]"
                      }`}
                    >
                      <span className="font-bold">{s.number}</span>
                      <span className="text-[11px] hidden lg:inline">{s.title.split(" ")[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sticky Service Stage: Layered Continuous Transition Cards */}
              <div className="relative w-full max-w-[860px] mx-auto min-h-[490px] flex items-center justify-center">
                
                {/* Service 01 Card */}
                <motion.div
                  style={{
                    opacity: card1Opacity,
                    y: card1Y,
                    scale: card1Scale,
                    pointerEvents: card1Pointer,
                  }}
                  className="absolute inset-0 rounded-[28px] p-8 lg:p-10 flex flex-col justify-between border border-black/5 shadow-md bg-[#B9A5FE] will-change-transform"
                >
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-black/10 text-[#111111] inline-block mb-3">
                      {SERVICES[0].role}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#111111] tracking-tight mb-3">
                      {SERVICES[0].title}
                    </h3>
                    <p className="text-sm lg:text-base text-[#111111]/85 leading-relaxed max-w-2xl mb-6">
                      {SERVICES[0].description}
                    </p>
                    <div className="w-full h-px bg-black/10 mb-5" />
                    <p className="text-xs font-semibold text-[#111111] uppercase tracking-wider mb-3">
                      {SERVICES[0].checklistHeader}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {SERVICES[0].points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]/90">
                          <span className="w-4 h-4 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                            <Check size={9} strokeWidth={3.5} />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center rounded-full px-7 py-3 text-xs sm:text-sm font-semibold bg-[#111111] hover:bg-[#222222] text-[#FFFFFF] shadow-xs hover:shadow-md transition-all active:scale-95"
                    >
                      <span>{SERVICES[0].buttonText}</span>
                    </Link>
                  </div>
                </motion.div>

                {/* Service 02 Card */}
                <motion.div
                  style={{
                    opacity: card2Opacity,
                    y: card2Y,
                    scale: card2Scale,
                    pointerEvents: card2Pointer,
                  }}
                  className="absolute inset-0 rounded-[28px] p-8 lg:p-10 flex flex-col justify-between border border-black/5 shadow-md bg-[#FDE875] will-change-transform"
                >
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-black/10 text-[#111111] inline-block mb-3">
                      {SERVICES[1].role}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#111111] tracking-tight mb-3">
                      {SERVICES[1].title}
                    </h3>
                    <p className="text-sm lg:text-base text-[#111111]/85 leading-relaxed max-w-2xl mb-6">
                      {SERVICES[1].description}
                    </p>
                    <div className="w-full h-px bg-black/10 mb-5" />
                    <p className="text-xs font-semibold text-[#111111] uppercase tracking-wider mb-3">
                      {SERVICES[1].checklistHeader}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {SERVICES[1].points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]/90">
                          <span className="w-4 h-4 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                            <Check size={9} strokeWidth={3.5} />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center rounded-full px-7 py-3 text-xs sm:text-sm font-semibold bg-[#DF9F05] hover:bg-[#D09300] text-[#111111] shadow-xs hover:shadow-md transition-all active:scale-95"
                    >
                      <span>{SERVICES[1].buttonText}</span>
                    </Link>
                  </div>
                </motion.div>

                {/* Service 03 Card */}
                <motion.div
                  style={{
                    opacity: card3Opacity,
                    y: card3Y,
                    scale: card3Scale,
                    pointerEvents: card3Pointer,
                  }}
                  className="absolute inset-0 rounded-[28px] p-8 lg:p-10 flex flex-col justify-between border border-black/5 shadow-md bg-[#70D6FF] will-change-transform"
                >
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-black/10 text-[#004E75] inline-block mb-3">
                      {SERVICES[2].role}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#111111] tracking-tight mb-3">
                      {SERVICES[2].title}
                    </h3>
                    <p className="text-sm lg:text-base text-[#111111]/85 leading-relaxed max-w-2xl mb-6">
                      {SERVICES[2].description}
                    </p>
                    <div className="w-full h-px bg-black/10 mb-5" />
                    <p className="text-xs font-semibold text-[#111111] uppercase tracking-wider mb-3">
                      {SERVICES[2].checklistHeader}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {SERVICES[2].points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]/90">
                          <span className="w-4 h-4 rounded-full bg-[#004E75] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                            <Check size={9} strokeWidth={3.5} />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center rounded-full px-7 py-3 text-xs sm:text-sm font-semibold bg-[#004E75] hover:bg-[#003B59] text-[#FFFFFF] shadow-xs hover:shadow-md transition-all active:scale-95"
                    >
                      <span>{SERVICES[2].buttonText}</span>
                    </Link>
                  </div>
                </motion.div>

                {/* Service 04 Card */}
                <motion.div
                  style={{
                    opacity: card4Opacity,
                    y: card4Y,
                    scale: card4Scale,
                    pointerEvents: card4Pointer,
                  }}
                  className="absolute inset-0 rounded-[28px] p-8 lg:p-10 flex flex-col justify-between border border-black/5 shadow-md bg-[#A7E8BD] will-change-transform"
                >
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-black/10 text-[#0E4A28] inline-block mb-3">
                      {SERVICES[3].role}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#111111] tracking-tight mb-3">
                      {SERVICES[3].title}
                    </h3>
                    <p className="text-sm lg:text-base text-[#111111]/85 leading-relaxed max-w-2xl mb-6">
                      {SERVICES[3].description}
                    </p>
                    <div className="w-full h-px bg-black/10 mb-5" />
                    <p className="text-xs font-semibold text-[#111111] uppercase tracking-wider mb-3">
                      {SERVICES[3].checklistHeader}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {SERVICES[3].points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]/90">
                          <span className="w-4 h-4 rounded-full bg-[#0E4A28] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                            <Check size={9} strokeWidth={3.5} />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center rounded-full px-7 py-3 text-xs sm:text-sm font-semibold bg-[#0E4A28] hover:bg-[#09351C] text-[#FFFFFF] shadow-xs hover:shadow-md transition-all active:scale-95"
                    >
                      <span>{SERVICES[3].buttonText}</span>
                    </Link>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

          {/* Mobile Stacking Layout (Accessible, zero sticky locks on phones) */}
          <div className="block md:hidden px-6 py-12 space-y-6">
            <div className="pb-4 border-b border-[#DDDDD8]">
              <span className="eyebrow block mb-1">Offerings</span>
              <h2 className="editorial-h2 text-[#111111]">Services</h2>
            </div>
            {SERVICES.map((service) => (
              <div
                key={service.number}
                className={`rounded-[24px] p-6 flex flex-col justify-between border border-black/5 shadow-xs ${service.bgColor}`}
              >
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-black/10 text-[#111111] inline-block mb-2.5">
                    {service.role}
                  </span>
                  <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#111111]/80 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-[#111111]/90">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check size={8} strokeWidth={3.5} />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/#contact"
                  className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold ${service.buttonBg}`}
                >
                  <span>{service.buttonText}</span>
                </Link>
              </div>
            ))}
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
