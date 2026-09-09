'use client';

import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    title: "Web & Frontend Engineering",
    description: "Production-ready Next.js and React applications architected for maximum speed, strict SEO standards, zero layout shifts, and long-term code maintainability.",
  },
  {
    number: "02",
    title: "UI/UX & Product Design",
    description: "End-to-end interface design, interactive prototypes, design systems, and user research. Creating functional, beautiful experiences that turn complex data into intuitive flows.",
  },
  {
    number: "03",
    title: "AI & Workflow Automation",
    description: "Integrating LLM intelligence into real-world software: streaming conversational workspaces, prompt engineering pipelines, agent workflows, and contextual memory.",
  },
  {
    number: "04",
    title: "Design Systems & Architecture",
    description: "Multi-platform design token systems, accessible component libraries (WCAG 2.1 AA), TypeScript component contracts, and automated visual regression workflows.",
  },
  {
    number: "05",
    title: "Technical Consulting & Auditing",
    description: "Performance audits, Core Web Vitals optimization, code-level design alignment, and frontend refactoring for teams preparing to scale.",
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-24 sm:py-32 border-t border-[#DDDDD8] bg-[#F7F7F5]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#DDDDD8] mb-12 sm:mb-16 gap-4">
          <div>
            <span className="eyebrow block mb-2">Capabilities</span>
            <h2 className="editorial-h2 text-[#111111]">
              Services &amp; Engagement
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555555] max-w-md font-normal leading-relaxed">
            Partnering with founders, product leaders, and engineering teams across flexible consulting and execution engagements.
          </p>
        </div>

        {/* Editorial Rows */}
        <div className="flex flex-col divide-y divide-[#DDDDD8]">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="py-8 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center transition-colors duration-200 hover:bg-[#FFFFFF]/60 px-4 -mx-4 rounded-sm group cursor-default"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-mono font-semibold text-[#858585] group-hover:text-[#111111] transition-colors">
                  {service.number}
                </span>
              </div>

              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight group-hover:translate-x-1 transition-transform">
                  {service.title}
                </h3>
              </div>

              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="hidden md:flex md:col-span-1 justify-end">
                <ArrowUpRight 
                  size={18} 
                  className="text-[#858585] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
