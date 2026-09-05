'use client';

import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/lib/projects";

export function About() {
  return (
    <section id="about" className="w-full bg-[#0a0a0a] text-white py-16 sm:py-24 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-16">

        {/* Senior-Level Header matching Hero Section Typography */}
        <div className="flex flex-col items-start gap-3.5 sm:gap-4 border-b border-white/10 pb-6 sm:pb-8">
          {/* Eyebrow badge matching Hero design system */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30 font-jakarta text-xs font-medium tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
            <span className="text-[#a78bfa]">SELECTED WORK</span>
            <span className="text-[#a78bfa]/50">·</span>
            <span className="text-[#a78bfa]">EXPLORE PROJECTS</span>
          </div>

          {/* Section Main Title */}
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[3.4rem] tracking-tight text-white leading-[1.08] text-left select-none">
            Featured Projects &amp; Work.
          </h2>
        </div>

        {/* Vertical Stacked Work List */}
        <div className="flex flex-col gap-12 sm:gap-18 w-full">
          {projects.map((project, index) => (
            <div key={project.id} className="flex flex-col gap-3.5 sm:gap-4 w-full group">
              
              {/* Header Line: Single-Line Title : Description */}
              <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-3 w-full overflow-hidden">
                <span className="font-jakarta text-xs sm:text-sm font-medium text-[#a78bfa] tracking-wider shrink-0">
                  {`0${index + 1}`}
                </span>
                <Link
                  href={`/projects/${project.id}`}
                  className="font-display font-bold text-lg sm:text-2xl md:text-3xl text-white tracking-tight shrink-0 transition-colors duration-300 group-hover:text-[#a78bfa]"
                >
                  {project.title}
                </Link>
                <span className="font-display font-light text-zinc-600 text-lg sm:text-2xl shrink-0 select-none">:</span>
                <span className="font-jakarta font-normal text-zinc-400 text-xs sm:text-base md:text-lg tracking-tight truncate shrink">
                  {project.tagline}
                </span>
              </div>

              {/* Video Showcase Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.006 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="w-full"
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="relative block w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl lg:rounded-[2.2rem] overflow-hidden border-2 border-white/10 bg-zinc-950 shadow-2xl group/card transition-all duration-500 ease-out hover:border-[#a78bfa]/40 hover:shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
                >
                  {/* Auto-playing Preview Video */}
                  <video
                    src={project.videoUrl}
                    poster={project.poster || undefined}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.03]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />

                  {/* Ambient Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover/card:from-black/85 transition-all duration-500" />

                  {/* Floating CTA Pill - VIEW MY WORK */}
                  <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-10 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white text-black font-jakarta font-bold text-xs uppercase tracking-wider hover:bg-[#a78bfa] hover:text-black transition-all duration-400 ease-out shadow-xl border-2 border-black cursor-pointer group-hover/card:scale-105">
                    <span>VIEW MY WORK</span>
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] sm:text-xs group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
