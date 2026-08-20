'use client';

import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/lib/projects";

export function About() {
  return (
    <section id="about" className="w-full bg-[#0a0a0a] text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-20">

        {/* Senior-Level Header matching Hero Section Typography */}
        <div className="flex flex-col items-start gap-4 sm:gap-5 border-b border-white/10 pb-8 sm:pb-10">
          {/* Eyebrow badge matching Hero design system */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/10 font-mono text-xs sm:text-sm font-bold tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#fde047] animate-pulse" />
            <span className="text-[#a78bfa]">SELECTED WORK</span>
            <span className="text-zinc-500">·</span>
            <span className="text-[#fde047]">EXPLORE PROJECTS</span>
          </div>

          {/* Section Main Title matching Hero font-display */}
          <h2 className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.6rem] tracking-tight text-white leading-[1.05] text-left select-none">
            Featured Projects &amp; Work.
          </h2>
        </div>

        {/* Vertical Stacked Work List - Senior Typography & Frame Layout */}
        <div className="flex flex-col gap-16 sm:gap-24 w-full">
          {projects.map((project, index) => (
            <div key={project.id} className="flex flex-col gap-4 sm:gap-5 w-full group">
              
              {/* Header Line: Single-Line Title : Description (Solid White Title & Solid Grey Description) */}
              <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-3 font-display w-full overflow-hidden">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#a78bfa] tracking-wider shrink-0">
                  {`0${index + 1}`}
                </span>
                <Link
                  href={`/projects/${project.id}`}
                  className="font-display font-semibold text-xl sm:text-3xl md:text-4xl text-white tracking-tight shrink-0 transition-colors duration-300 group-hover:text-[#fde047]"
                >
                  {project.title}
                </Link>
                <span className="font-display font-light text-zinc-600 text-xl sm:text-3xl shrink-0 select-none">:</span>
                <span className="font-display font-normal text-zinc-400 text-sm sm:text-xl md:text-2xl tracking-tight truncate shrink">
                  {project.tagline}
                </span>
              </div>

              {/* Video Showcase Card - Silk-Smooth Motion Hover */}
              <motion.div
                whileHover={{ y: -5, scale: 1.008 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="w-full"
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="relative block w-full aspect-[16/10] sm:aspect-[16/9] rounded-[1.8rem] sm:rounded-[2.4rem] lg:rounded-[2.8rem] overflow-hidden border-2 border-white/10 bg-zinc-950 shadow-2xl group/card transition-all duration-500 ease-out hover:border-white/30 hover:shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
                >
                  {/* Auto-playing Preview Video */}
                  <video
                    src={project.videoUrl}
                    poster={project.poster}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.03]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />

                  {/* Ambient Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover/card:from-black/85 transition-all duration-500" />

                  {/* Floating CTA Pill - VIEW MY WORK */}
                  <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 z-10 inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-black font-display font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#fde047] transition-all duration-400 ease-out shadow-xl border-2 border-black cursor-pointer group-hover/card:scale-105">
                    <span>VIEW MY WORK</span>
                    <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-xs group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform duration-300">
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
