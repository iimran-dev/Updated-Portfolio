'use client';

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Layers,
  Code2,
  CheckCircle2,
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Machine Learning", filterTerm: "AI" },
  { id: "productivity", label: "Productivity & Systems", filterTerm: "Productivity" },
  { id: "design-systems", label: "Design Systems", filterTerm: "Design" },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    const cat = CATEGORIES.find((c) => c.id === activeCategory);
    if (!cat || !cat.filterTerm) return projects;
    return projects.filter(
      (p) =>
        p.category.toLowerCase().includes(cat.filterTerm.toLowerCase()) ||
        p.metaString?.toLowerCase().includes(cat.filterTerm.toLowerCase())
    );
  }, [activeCategory]);

  return (
    <div className="bg-[#F7F7F5] text-[#111111] min-h-screen selection:bg-[#111111] selection:text-[#FFFFFF]">
      {/* Global Header Navigation */}
      <Nav />

      <main id="main-content" className="pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-32">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          
          {/* Breadcrumb / Top Navigation Bar */}
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

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#858585]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{projects.length} Shipped Projects</span>
            </div>
          </motion.div>

          {/* Page Hero Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16 sm:mb-20"
          >
            <span className="eyebrow block mb-3">Portfolio Catalogue · 2025 — 2026</span>
            <h1 className="editorial-h1 text-[#111111] mb-6 font-bold tracking-tight">
              All Shipped Work &amp; Systems
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
              A comprehensive showcase of end-to-end digital products, AI workspaces, and modular design
              token architectures engineered with precision, rigorous accessibility, and tangible business impact.
            </p>
          </motion.header>

          {/* Interactive Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 pb-8 mb-12 sm:mb-16 border-b border-[#DDDDD8]"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "all"
                  ? projects.length
                  : projects.filter(
                      (p) =>
                        p.category.toLowerCase().includes(cat.filterTerm.toLowerCase()) ||
                        p.metaString?.toLowerCase().includes(cat.filterTerm.toLowerCase())
                    ).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? "bg-[#111111] text-[#FFFFFF] shadow-2xs"
                      : "bg-[#FFFFFF] text-[#555555] hover:text-[#111111] border border-[#DDDDD8] hover:border-[#BBBBB5]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] font-mono px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-[#2A2A2A] text-[#CCCCCC]" : "bg-[#F0F0EC] text-[#666666]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Projects Presentation List */}
          <div className="flex flex-col gap-20 sm:gap-28 lg:gap-32">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const isReversed = idx % 2 === 1;
                const numString = `0${idx + 1}`;

                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#FFFFFF]/60 sm:bg-transparent p-6 sm:p-0 rounded-xl sm:rounded-none border border-[#DDDDD8]/60 sm:border-0"
                  >
                    {/* Media Frame (7 Columns) */}
                    <div className={`lg:col-span-7 ${isReversed ? "order-1 lg:order-2" : ""}`}>
                      <Link
                        href={`/projects/${project.id}`}
                        className="group relative block w-full aspect-[16/9] rounded-md border border-[#DDDDD8] bg-[#FFFFFF] overflow-hidden focus-visible:outline-none shadow-xs"
                        aria-label={`View case study: ${project.title}`}
                      >
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 58vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          priority={idx === 0}
                        />

                        {/* Hover Overlay Button */}
                        <div className="absolute bottom-4 right-4 z-20 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#111111] text-[#FFFFFF] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                          <span>Read Case Study</span>
                          <ArrowUpRight size={13} />
                        </div>

                        {/* Top corner status pill */}
                        <div className="absolute top-4 left-4 z-20">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111]/80 backdrop-blur-md text-[#FFFFFF] text-[11px] font-mono uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {project.status || "SHIPPED"}
                          </span>
                        </div>
                      </Link>
                    </div>

                    {/* Editorial Narrative & Specs (5 Columns) */}
                    <div className={`lg:col-span-5 flex flex-col gap-5 ${isReversed ? "order-2 lg:order-1" : ""}`}>
                      
                      {/* Meta / Category Header */}
                      <div className="flex items-center justify-between text-xs font-mono tracking-wider text-[#858585] uppercase">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[#111111]">{numString}</span>
                          <span>·</span>
                          <span>{project.category}</span>
                        </div>
                        <span className="text-[#999999]">{project.year}</span>
                      </div>

                      {/* Project Title & Headline */}
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight leading-tight mb-2">
                          <Link href={`/projects/${project.id}`} className="hover:opacity-80 transition-opacity">
                            {project.title}
                          </Link>
                        </h2>
                        <p className="text-sm font-medium text-[#777777]">
                          {project.headline}
                        </p>
                      </div>

                      {/* Crisp Description */}
                      <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                        {project.shortDescription || project.overview}
                      </p>

                      {/* Outcome Highlight Box */}
                      {project.outcomeMetric && (
                        <div className="p-4 rounded-lg bg-[#FFFFFF] border border-[#DDDDD8] shadow-2xs">
                          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#555555] mb-1">
                            <TrendingUp size={13} className="text-emerald-600" />
                            <span className="font-semibold text-[#111111]">{project.outcomeMetric}</span>
                          </div>
                          <p className="text-xs text-[#666666] leading-relaxed">
                            {project.outcomeDetail}
                          </p>
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {project.techStack?.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#EFEFEA] text-[#444444] text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack && project.techStack.length > 4 && (
                          <span className="text-xs font-mono text-[#888888] px-1">
                            +{project.techStack.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* CTA Action */}
                      <div className="pt-2">
                        <Link
                          href={`/projects/${project.id}`}
                          className="link-editorial text-sm group inline-flex items-center gap-2 font-medium text-[#111111]"
                        >
                          <span>Explore Full Case Study</span>
                          <ArrowRight
                            size={14}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </Link>
                      </div>

                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Bottom Collaboration CTA Bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-28 sm:mt-36 p-8 sm:p-12 rounded-xl bg-[#111111] text-[#FFFFFF] flex flex-col sm:flex-row sm:items-center justify-between gap-8"
          >
            <div className="space-y-2 max-w-lg">
              <span className="text-xs font-mono tracking-widest text-[#AAAAAA] uppercase">
                Let&apos;s Collaborate
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#FFFFFF]">
                Need a design engineer who bridges vision and code?
              </h3>
              <p className="text-sm text-[#AAAAAA] leading-relaxed">
                Available for select product design, frontend architecture, and design token contracts.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] text-[#111111] hover:bg-[#EAEAEA] text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#333333] text-[#FFFFFF] hover:bg-[#222222] text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95"
              >
                <span>View About &amp; Skills</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
