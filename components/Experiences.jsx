'use client';

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const EXPERIENCES = [
  {
    year: "2026",
    mode: "ON-SITE",
    company: "Techades eBiz Arena",
    isCurrent: false,
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

export function Experiences() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Header reveal
      gsap.fromTo(
        ".exp-header",
        { autoAlpha: 0, y: 24 },
        {
          scrollTrigger: {
            trigger: ".exp-header",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        }
      );

      // Individual item reveals one by one as they scroll into view
      const items = gsap.utils.toArray(".exp-item");

      items.forEach((item) => {
        const leftRail = item.querySelector(".exp-left");
        const nodeRing = item.querySelector(".exp-node");
        const line = item.querySelector(".exp-line");
        const content = item.querySelector(".exp-content");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });

        // 1. Node ring scales & fades into place with crisp precision
        tl.fromTo(
          nodeRing,
          { scale: 0.6, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.4,
            ease: "power3.out",
            force3D: true,
          },
          0
        );

        // 2. Left rail metadata slides in smoothly
        tl.fromTo(
          leftRail,
          { x: -12, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.45,
            ease: "power3.out",
            force3D: true,
          },
          0.04
        );

        // 3. Right content details glide up gracefully
        tl.fromTo(
          content,
          { y: 16, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power3.out",
            force3D: true,
          },
          0.08
        );

        // 4. Connecting line draws down smoothly to the next node
        if (line) {
          tl.fromTo(
            line,
            { scaleY: 0, transformOrigin: "top center" },
            {
              scaleY: 1,
              duration: 0.55,
              ease: "power2.inOut",
              force3D: true,
            },
            0.12
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="experience"
      ref={containerRef}
      className="w-full py-20 sm:py-28 border-t border-[#DDDDD8] bg-[#F7F7F5]"
    >
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        {/* Section Header */}
        <div className="exp-header flex flex-col sm:flex-row sm:items-end justify-between pb-8 sm:pb-12 border-b border-[#DDDDD8] mb-16 sm:mb-20 gap-4">
          <div>
            <span className="eyebrow block mb-2">Career Journey</span>
            <h2 className="editorial-h2 text-[#111111]">Work Experience</h2>
          </div>
          <p className="text-sm sm:text-base text-[#555555] max-w-md font-normal leading-relaxed">
            A chronological timeline of engineering roles, production internships, and digital systems shipped.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl">
          <div className="relative">
            {EXPERIENCES.map((exp, idx) => {
              const isLast = idx === EXPERIENCES.length - 1;

              return (
                <div
                  key={idx}
                  className="exp-item grid grid-cols-[68px_24px_1fr] sm:grid-cols-[100px_32px_1fr] gap-x-3 sm:gap-x-5 items-start"
                >
                  {/* Left Rail: Temporal Index (Year) & Work Mode */}
                  <div className="exp-left text-right">
                    {/* Year: Perfectly height-locked to the company title row */}
                    <div className="h-7 sm:h-8 flex items-center justify-end">
                      <span className="font-mono text-sm sm:text-base font-bold text-[#111111] tracking-tight">
                        {exp.year}
                      </span>
                    </div>
                    {/* Mode: Secondary metadata sitting neatly underneath */}
                    <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#888888] font-medium mt-0.5">
                      {exp.mode}
                    </span>
                  </div>

                  {/* Center Rail: Line + Node Indicator */}
                  <div className="relative flex flex-col items-center h-full">
                    {/* Node Circle: Centered in the exact same h-7 sm:h-8 box */}
                    <div className="h-7 sm:h-8 flex items-center justify-center shrink-0">
                      <div className="exp-node relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-[#111111] bg-[#FFFFFF] flex items-center justify-center shrink-0 shadow-2xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                      </div>
                    </div>

                    {/* Connecting Line Track: Originates from node center and draws downward */}
                    {!isLast && (
                      <div
                        className="exp-line absolute top-3.5 sm:top-4 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-[#DDDDD8] z-0"
                        style={{ transformOrigin: "top center" }}
                      />
                    )}
                  </div>

                  {/* Right Content: Details & Narrative */}
                  <div className={`exp-content ${isLast ? "pb-4 sm:pb-6" : "pb-12 sm:pb-16"}`}>
                    {/* Company Name & Current Badge: Centered in the exact same h-7 sm:h-8 box */}
                    <div className="h-7 sm:h-8 flex items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-[#111111] tracking-tight leading-none">
                        {exp.company}
                      </h3>
                      {exp.isCurrent && (
                        <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#111111] bg-[#EAEAE6] border border-[#DDDDD8] px-2 py-0.5 rounded-full">
                          CURRENT
                        </span>
                      )}
                    </div>

                    {/* Role Title */}
                    <p className="text-sm sm:text-base font-semibold text-[#333333] mt-1 mb-2 leading-snug">
                      {exp.role}
                    </p>

                    {/* Narrative Description */}
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-xl">
                      {exp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}