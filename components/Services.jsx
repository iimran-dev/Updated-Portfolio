'use client';

import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { Check } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    tags: ["0 → Production", "Next.js & React", "Performance"],
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
    number: "02",
    tags: ["UI/UX Audit", "Redesign", "Optimization"],
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

export function Services() {
  const lenis = useLenis();

  const scrollToSection = (e, target) => {
    e.preventDefault();
    lenis?.scrollTo(target, {
      offset: -40,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
  };

  return (
    <section id="services" className="w-full py-20 sm:py-28 border-t border-[#DDDDD8] bg-[#F7F7F5]">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#DDDDD8] mb-12 sm:mb-14 gap-4"
        >
          <div>
            <span className="eyebrow block mb-2">Capabilities</span>
            <h2 className="editorial-h2 text-[#111111]">
              Services &amp; Engagement
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555555] max-w-md font-normal leading-relaxed">
            Partnering with founders, product leaders, and engineering teams across flexible consulting and execution engagements.
          </p>
        </motion.div>

        {/* Dual Card Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className={`rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 md:p-8 flex flex-col justify-between h-full border border-black/5 shadow-xs transition-all duration-300 hover:shadow-md ${service.bgColor}`}
            >
              <div>
                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-semibold text-[#111111] tracking-tight leading-tight mb-2 sm:mb-2.5">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs sm:text-sm text-[#111111]/80 leading-relaxed font-normal mb-4 sm:mb-5">
                  {service.description}
                </p>

                {/* Subtle Divider Line */}
                <div className="w-full h-px bg-black/10 my-4 sm:my-5" />

                {/* Checklist Section */}
                <p className="text-xs sm:text-sm font-semibold text-[#111111] mb-2.5 sm:mb-3">
                  {service.checklistHeader}
                </p>

                <ul className="flex flex-col gap-2.5 sm:gap-3 mb-6 sm:mb-7">
                  {service.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={9} strokeWidth={3.5} />
                      </span>
                      <span className="text-xs sm:text-sm text-[#111111]/90 leading-snug font-normal">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-auto pt-1">
                <motion.a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer min-h-[42px] ${service.buttonBg}`}
                >
                  <span>{service.buttonText}</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
