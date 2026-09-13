'use client';

import { motion } from "motion/react";

const STATS = [
  {
    number: "03+",
    title: "Years Building",
    description: "Architecting web apps and design systems",
  },
  {
    number: "12+",
    title: "Production Projects",
    description: "Shipped from concept to deployment",
  },
  {
    number: "10k+",
    title: "Users Impacted",
    description: "Across SaaS and internal tools",
  },
  {
    number: "99.9%",
    title: "Performance Focus",
    description: "Zero-lag UI and Core Web Vitals",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Credibility() {
  return (
    <section className="w-full border-y border-[#DDDDD8] bg-[#F7F7F5] py-12 sm:py-16">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`flex flex-col gap-1.5 ${
                idx !== 0 ? "lg:border-l lg:border-[#DDDDD8] lg:pl-10" : ""
              }`}
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#111111]">
                {stat.number}
              </span>
              <span className="text-sm font-semibold tracking-tight text-[#111111]">
                {stat.title}
              </span>
              <span className="text-xs text-[#858585] leading-relaxed">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
