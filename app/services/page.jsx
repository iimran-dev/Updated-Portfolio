'use client';

import Link from "next/link";
import { motion } from "motion/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  Sparkles,
  Gauge,
  Layers,
  ArrowUpRight,
} from "lucide-react";

const SERVICES_DETAILED = [
  {
    number: "01",
    title: "Web & Frontend Engineering",
    tagline: "0 → Production Applications",
    description:
      "Full-cycle frontend engineering delivering clean, performant, and maintainable web applications using Next.js, React, TypeScript, and modern headless tools.",
    deliverables: [
      "Production-ready Next.js App Router applications with SSR/SSG/ISR",
      "Pixel-perfect responsive implementations matching design specifications",
      "Strict TypeScript typings, component contracts, and robust state models",
      "Sub-second page loads, 95+ Lighthouse scores, and Core Web Vitals compliance",
      "API integrations (REST, GraphQL, Supabase, third-party microservices)",
    ],
    idealFor: [
      "Early-stage teams needing to ship an MVP without technical debt",
      "Scale-ups launching new customer portals, dashboards, or marketing sites",
      "Teams lacking dedicated senior frontend engineering bandwidth",
    ],
    accentColor: "border-[#B9A5FE]",
    badgeBg: "bg-[#B9A5FE]/20 text-[#432A9A]",
  },
  {
    number: "02",
    title: "Website Revamp & UX Optimization",
    tagline: "Speed, Aesthetics & Usability Upgrades",
    description:
      "Modernizing existing digital products and web interfaces to enhance user trust, cut load times, and eliminate friction without requiring a complete rewrite.",
    deliverables: [
      "Comprehensive UI/UX, typography, and visual hierarchy overhaul",
      "Core Web Vitals audit, script tree-shaking, and bundle size reduction",
      "Full accessibility (WCAG 2.1 AA) remediation and keyboard navigation support",
      "Fluid micro-animations, interaction polish, and scroll choreography",
      "Responsive adaptations for high-density desktop and mobile experiences",
    ],
    idealFor: [
      "Websites that feel outdated, sluggish, or difficult to maintain",
      "Products with high drop-off rates due to interface or performance friction",
      "Founders preparing for fundraising or high-visibility product launches",
    ],
    accentColor: "border-[#FDE875]",
    badgeBg: "bg-[#FDE875]/40 text-[#684C00]",
  },
  {
    number: "03",
    title: "Design Systems & Token Architecture",
    tagline: "Scalable Component Libraries",
    description:
      "Bridging Figma designs and frontend codebases with robust token pipelines, reusable component libraries, and documentation that accelerate team velocity.",
    deliverables: [
      "Modular, accessible component primitives with zero-runtime CSS tokens",
      "Seamless Figma-to-code synchronization and developer handoff workflows",
      "Color, typography, spacing, and elevation token specifications",
      "Interactive component documentation and visual regression testing",
    ],
    idealFor: [
      "Engineering teams tired of styling inconsistencies across modules",
      "Fast-moving organizations scaling across multiple apps or platforms",
    ],
    accentColor: "border-[#70D6FF]",
    badgeBg: "bg-[#70D6FF]/20 text-[#004E75]",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    name: "Scope & Discovery",
    desc: "Align on core product objectives, target users, technical constraints, and measurable success metrics.",
  },
  {
    step: "02",
    name: "Architecture & Design",
    desc: "Define the visual identity, component hierarchies, state models, and API integration requirements.",
  },
  {
    step: "03",
    name: "Implementation & Build",
    desc: "Write clean, type-safe Next.js code with continuous deployment, interactive polish, and responsiveness.",
  },
  {
    step: "04",
    name: "Audit & Launch",
    desc: "Run Core Web Vitals checks, accessibility audits, cross-browser validation, and seamless production deploy.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F7F7F5] text-[#111111] min-h-screen selection:bg-[#111111] selection:text-[#FFFFFF]">
      <Nav />

      <main id="main-content" className="pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-32">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          
          {/* Top Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between pb-8 border-b border-[#DDDDD8] mb-12 sm:mb-16"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#555555] hover:text-[#111111] uppercase transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Overview</span>
            </Link>

            <span className="text-xs font-mono uppercase tracking-wider text-[#858585]">
              Capabilities · 2025 — 2026
            </span>
          </motion.div>

          {/* Hero Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16 sm:mb-24"
          >
            <span className="eyebrow block mb-3">Capabilities &amp; Advisory</span>
            <h1 className="editorial-h1 text-[#111111] mb-6 font-bold tracking-tight">
              Services &amp; Engineering Solutions
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
              I collaborate with ambitious founders and teams to build high-performance web products,
              refine user experience interfaces, and establish resilient design architectures that scale.
            </p>
          </motion.header>

          {/* Detailed Service Offerings */}
          <div className="space-y-12 sm:space-y-16">
            {SERVICES_DETAILED.map((service, idx) => (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`p-8 sm:p-12 rounded-xl bg-[#FFFFFF] border-2 ${service.accentColor} shadow-2xs`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-[#EFEFEA]">
                  <div className="space-y-3 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[#111111]">
                        {service.number}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold ${service.badgeBg}`}>
                        {service.tagline}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href="/#contact"
                    className="self-start inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-[#222222] text-xs sm:text-sm font-medium transition-all shadow-2xs active:scale-95 whitespace-nowrap"
                  >
                    <span>Discuss This Service</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                  {/* Deliverables Column */}
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#858585] block mb-4">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]">
                          <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For Column */}
                  <div className="bg-[#FAFAF8] p-5 rounded-lg border border-[#EBEBE6]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#858585] block mb-4">
                      This is ideal if:
                    </span>
                    <ul className="space-y-2.5">
                      {service.idealFor.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-[#555555]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Working Process Section */}
          <section className="mt-24 sm:mt-32 pt-16 border-t border-[#DDDDD8]">
            <span className="eyebrow block mb-3">Engagement Process</span>
            <h2 className="editorial-h2 text-[#111111] mb-12">How We Collaborate</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-lg bg-[#FFFFFF] border border-[#DDDDD8] space-y-3"
                >
                  <span className="text-xs font-mono font-bold text-[#888888] block">
                    STEP {step.step}
                  </span>
                  <h3 className="text-base font-bold text-[#111111]">{step.name}</h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Collaboration CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 sm:mt-32 p-8 sm:p-12 rounded-xl bg-[#111111] text-[#FFFFFF] flex flex-col sm:flex-row sm:items-center justify-between gap-8"
          >
            <div className="space-y-2 max-w-lg">
              <span className="text-xs font-mono tracking-widest text-[#AAAAAA] uppercase">
                Let&apos;s Build Together
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#FFFFFF]">
                Ready to accelerate your frontend?
              </h3>
              <p className="text-sm text-[#AAAAAA] leading-relaxed">
                Reach out for availability, project scoping, or a direct design/code review.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] text-[#111111] hover:bg-[#EAEAEA] text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#333333] text-[#FFFFFF] hover:bg-[#222222] text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95"
              >
                <span>View Portfolio</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
