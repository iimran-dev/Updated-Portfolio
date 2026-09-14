'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export default function WorkPage() {
  return (
    <div className="bg-[#F7F7F5] text-[#111111] min-h-screen selection:bg-[#111111] selection:text-[#FFFFFF]">
      {/* Global Header Navigation */}
      <Nav />

      <main id="main-content" className="pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-32">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          
          {/* Top Bar */}
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

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#858585]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              <span>{projects.length} Projects</span>
            </div>
          </motion.div>

          {/* Page Header */}
          <motion.header
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-16 sm:mb-20"
          >
            <span className="eyebrow block mb-2.5">Portfolio · 2025 — 2026</span>
            <h1 className="editorial-h1 text-[#111111] mb-4">
              All Shipped Work
            </h1>
            <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
              Digital products, design systems, and frontend architectures engineered with precision and business impact.
            </p>
          </motion.header>

          {/* Projects Presentation List */}
          <div className="flex flex-col gap-16 sm:gap-24 lg:gap-28">
            {projects.map((project, idx) => {
              const isReversed = idx % 2 === 1;
              const numString = `0${idx + 1}`;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  {/* Media Frame (7 Columns) */}
                  <div className={`lg:col-span-7 ${isReversed ? "order-1 lg:order-2" : ""}`}>
                    <Link
                      href={`/projects/${project.id}`}
                      className="group relative block w-full aspect-[16/9] rounded-lg border border-[#DDDDD8] bg-[#FFFFFF] overflow-hidden focus-visible:outline-none shadow-2xs"
                      aria-label={`View case study: ${project.title}`}
                    >
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        priority={idx === 0}
                      />

                      <div className="absolute bottom-3 right-3 z-20 hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111111]/90 backdrop-blur-md text-[#FFFFFF] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span>Case Study</span>
                        <ArrowUpRight size={13} />
                      </div>
                    </Link>
                  </div>

                  {/* Editorial Details (5 Columns) */}
                  <div className={`lg:col-span-5 flex flex-col gap-4 ${isReversed ? "order-2 lg:order-1" : ""}`}>
                    {/* Meta: Number, Category, Year */}
                    <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#858585] uppercase">
                      <span className="font-semibold text-[#111111]">{numString}</span>
                      <span>·</span>
                      <span>{project.category}</span>
                      <span>·</span>
                      <span className="text-[#999999]">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight leading-tight">
                      <Link
                        href={`/projects/${project.id}`}
                        className="hover:opacity-75 transition-opacity"
                      >
                        {project.title}
                      </Link>
                    </h2>

                    {/* Concise Single-Paragraph Description */}
                    <p className="text-sm text-[#555555] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {project.techStack?.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#DDDDD8] text-[#555555] text-[11px] font-mono shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Case Study Link */}
                    <div className="pt-2">
                      <Link
                        href={`/projects/${project.id}`}
                        className="link-editorial text-sm group inline-flex items-center gap-2 font-medium text-[#111111]"
                      >
                        <span>View Case Study</span>
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
          </div>

          {/* Bottom Collaboration CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 sm:mt-32 pt-10 border-t border-[#DDDDD8] flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div>
              <span className="eyebrow block mb-1">Collaboration</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
                Have a project in mind?
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

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
