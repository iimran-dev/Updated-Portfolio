'use client';

import { motion } from "motion/react";

const STEPS = [
  {
    number: "01",
    title: "Understand",
    description: "Deep discovery into business constraints, user friction points, and core value propositions before touching code or pixels.",
  },
  {
    number: "02",
    title: "Define",
    description: "Establishing technical architecture, design tokens, information hierarchy, and success metrics that align engineering with product goals.",
  },
  {
    number: "03",
    title: "Design",
    description: "High-fidelity interactive prototyping, typographic systems, and micro-interactions designed with obsessive attention to craft.",
  },
  {
    number: "04",
    title: "Build",
    description: "Writing clean, modern Next.js/React and TypeScript with strict performance targets, zero layout shifts, and WCAG AA accessibility.",
  },
  {
    number: "05",
    title: "Refine",
    description: "Usability auditing, Core Web Vitals optimization, animation tuning, and production deployment with continuous telemetry.",
  },
];

export function HowIWork() {
  return (
    <section id="methodology" className="w-full py-24 sm:py-32 border-t border-[#DDDDD8] bg-[#F7F7F5]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-24 pb-8 border-b border-[#DDDDD8]"
        >
          <div className="lg:col-span-5">
            <span className="eyebrow block mb-2">Methodology</span>
            <h2 className="editorial-h2 text-[#111111]">
              How I Work
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-base sm:text-lg text-[#555555] max-w-xl font-normal leading-relaxed">
              A structured, transparent engineering and design methodology designed to eliminate ambiguity, 
              ship rapidly, and maintain uncompromised craft from day one.
            </p>
          </div>
        </motion.div>

        {/* Numbered Steps List */}
        <div className="flex flex-col divide-y divide-[#DDDDD8]">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-baseline group"
            >
              <div className="md:col-span-2">
                <span className="text-xs sm:text-sm font-mono font-semibold tracking-wider text-[#858585] group-hover:text-[#111111] transition-colors">
                  {step.number}
                </span>
              </div>

              <div className="md:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight group-hover:translate-x-1 transition-transform duration-200">
                  {step.title}
                </h3>
              </div>

              <div className="md:col-span-6">
                <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
