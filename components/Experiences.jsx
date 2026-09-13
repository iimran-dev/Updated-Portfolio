'use client';

import { motion } from "motion/react";

const EXPERIENCES = [
  {
    year: "2026",
    mode: "ON-SITE",
    company: "Techades eBiz Arena",
    isCurrent: true,
    role: "Frontend Developer Intern",
    description: "Contributed to frontend engineering, building responsive interfaces in Next.js and translating product requirements into high-performance web experiences.",
    tags: ["Next.js", "React", "Responsive UI", "Web Performance"],
  },
  {
    year: "2025",
    mode: "REMOTE",
    company: "AdroIT Technologies",
    isCurrent: false,
    role: "Frontend Developer Intern",
    description: "Built modular React.js components and managed application state across multiple flows. Contributed directly to a Payroll Management System and technical documentation.",
    tags: ["React.js", "State Management", "Payroll System", "Component Architecture"],
  },
  {
    year: "2022",
    mode: "HYBRID",
    company: "Happy Basket",
    isCurrent: false,
    role: "Social Media Manager",
    description: "Managed digital brand presence and social content strategy, creating visual assets and communication campaigns across multiple public platforms.",
    tags: ["Brand Strategy", "Visual Content", "Digital Media"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Experiences() {
  return (
    <section id="experience" className="w-full py-20 sm:py-28 border-t border-[#DDDDD8] bg-[#F7F7F5]">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 sm:pb-12 border-b border-[#DDDDD8] mb-16 sm:mb-20 gap-4"
        >
          <div>
            <span className="eyebrow block mb-2">Career Journey</span>
            <h2 className="editorial-h2 text-[#111111]">
              Work Experience
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555555] max-w-md font-normal leading-relaxed">
            A chronological timeline of engineering roles, production internships, and digital systems shipped.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-60px" }}
            className="relative"
          >
            {EXPERIENCES.map((exp, idx) => {
              const isLast = idx === EXPERIENCES.length - 1;

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="grid grid-cols-[68px_24px_1fr] sm:grid-cols-[100px_32px_1fr] gap-x-3 sm:gap-x-5 items-start"
                >
                  {/* Left Rail: Work Mode & Year */}
                  <div className="text-right pt-0.5">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-[#888888] font-semibold">
                      {exp.mode}
                    </span>
                    <span className="block text-xs sm:text-sm font-mono font-bold text-[#111111] mt-0.5">
                      {exp.year}
                    </span>
                  </div>

                  {/* Center Rail: Line + Node Indicator */}
                  <div className="relative flex flex-col items-center h-full min-h-[140px] sm:min-h-[160px]">
                    {/* Node Circle */}
                    <div className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#111111] bg-[#FFFFFF] flex items-center justify-center mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                    </div>

                    {/* Intermediate Progress Dot */}
                    {!isLast && (
                      <div className="w-1 h-1 rounded-full bg-[#888888] my-auto" />
                    )}

                    {/* Vertical Connecting Line */}
                    <div
                      className={`absolute top-4 bottom-0 w-[1.5px] ${
                        isLast
                          ? "border-l-[1.5px] border-dashed border-[#BBBBB5]"
                          : "bg-[#DDDDD8]"
                      }`}
                    />
                  </div>

                  {/* Right Content: Details & Narrative */}
                  <div className={`pb-12 sm:pb-16 ${isLast ? "pb-4 sm:pb-6" : ""}`}>
                    {/* Company Name & Current Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-[#111111] tracking-tight">
                        {exp.company}
                      </h3>
                      {exp.isCurrent && (
                        <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#111111] bg-[#EAEAE6] border border-[#DDDDD8] px-2 py-0.5 rounded-full">
                          CURRENT
                        </span>
                      )}
                    </div>

                    {/* Role Title */}
                    <p className="text-sm sm:text-base font-semibold text-[#333333] mb-2.5">
                      {exp.role}
                    </p>

                    {/* Narrative Description */}
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-xl mb-3.5">
                      {exp.description}
                    </p>

                    {/* Subtle Monospace Tech / Skill Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#DDDDD8] text-[11px] font-mono text-[#555555] shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}