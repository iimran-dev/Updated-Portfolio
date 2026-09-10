'use client';

import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { Check } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    tags: ["0 → Production", "Next.js & React", "Speed & SEO"],
    title: "Web & Frontend Engineering",
    description:
      "Production-ready Next.js and React applications architected for maximum speed, strict SEO standards, zero layout shifts, and long-term code maintainability.",
    checklistHeader: "This is for you if:",
    points: [
      "You need a production Next.js or React application built with precision, speed, and clean code",
      "Your existing frontend suffers from slow load times, poor CWV scores, or difficult maintainability",
      "You want pixel-perfect implementation of complex UI flows and animations with zero layout shift",
    ],
    bgColor: "bg-[#B9A5FE]",
    buttonBg: "bg-[#111111] hover:bg-[#222222] text-[#FFFFFF]",
    buttonText: "Book a meeting",
  },
  {
    number: "02",
    tags: ["Design Systems", "Interactive Prototypes", "User Research"],
    title: "UI/UX & Product Design",
    description:
      "End-to-end interface design, interactive prototypes, design systems, and user research. Creating functional, beautiful experiences that turn complex data into intuitive flows.",
    checklistHeader: "This is for you if:",
    points: [
      "You have an early product idea or complex feature and need clear, intuitive user journeys",
      "You need a scalable design system so your product stays consistent as your team grows",
      "You want high-fidelity interactive prototypes to validate decisions before writing code",
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
    <section id="services" className="w-full py-24 sm:py-32 border-t border-[#DDDDD8] bg-[#F7F7F5]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#DDDDD8] mb-12 sm:mb-16 gap-4"
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

        {/* Dual Card Showcase (Referencing image.png) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className={`rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 md:p-10 lg:p-12 flex flex-col justify-between h-full border border-black/5 shadow-xs transition-all duration-300 hover:shadow-md ${service.bgColor}`}
            >
              <div>
                {/* Service Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#111111] tracking-tight leading-tight mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm sm:text-base text-[#111111]/85 leading-relaxed font-normal mb-8">
                  {service.description}
                </p>

                {/* Subtle Divider Line */}
                <div className="w-full h-px bg-black/10 my-6 sm:my-8" />

                {/* Checklist Section */}
                <p className="text-sm sm:text-base font-semibold text-[#111111] mb-5">
                  {service.checklistHeader}
                </p>

                <ul className="flex flex-col gap-4 sm:gap-4.5 mb-8 sm:mb-10">
                  {service.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3.5">
                      <span className="w-5 h-5 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={11} strokeWidth={3.5} />
                      </span>
                      <span className="text-sm sm:text-[15px] text-[#111111]/90 leading-relaxed font-normal">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-auto pt-4">
                <motion.a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer ${service.buttonBg}`}
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
