'use client';

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export function SelectedWork() {
  const p1 = projects[0]; // Loopy AI
  const p2 = projects[1]; // TaskFlow
  const p3 = projects[2]; // Pulse Systems

  return (
    <section id="work" className="w-full py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 sm:pb-12 border-b border-[#DDDDD8] mb-16 sm:mb-24 gap-4">
          <div>
            <span className="eyebrow block mb-2">Portfolio</span>
            <h2 className="editorial-h2 text-[#111111]">
              Selected Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555555] max-w-md font-normal">
            A curated selection of shipped products, focusing on strategic value, 
            interaction polish, and measurable engineering outcomes.
          </p>
        </div>

        {/* Project Presentations List */}
        <div className="flex flex-col gap-28 sm:gap-36 lg:gap-44">

          {/* ============================================================== */}
          {/* PROJECT 01: Large Image/Video Followed by Rich Editorial Text */}
          {/* ============================================================== */}
          {p1 && (
            <article className="flex flex-col gap-8 sm:gap-12">
              
              {/* Large Media Showcase */}
              <Link
                href={`/projects/${p1.id}`}
                className="group relative block w-full aspect-[16/10] sm:aspect-[16/9] rounded-md border border-[#DDDDD8] bg-[#FFFFFF] overflow-hidden focus-visible:outline-none"
                aria-label={`View case study: ${p1.title}`}
              >
                <div className="absolute top-0 left-0 right-0 h-9 bg-[#FAFAF8] border-b border-[#DDDDD8] px-4 flex items-center justify-between z-20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5DF]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5DF]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5DF]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#858585]">
                    loopy.app · Production Showcase
                  </span>
                  <div className="w-8" />
                </div>

                <div className="pt-9 w-full h-full">
                  <video
                    src={p1.videoUrl}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>

                {/* Subtle Hover Pill */}
                <div className="absolute bottom-5 right-5 z-20 hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-[#111111] text-[#FFFFFF] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Case Study</span>
                  <ArrowRight size={13} />
                </div>
              </Link>

              {/* Editorial Narrative & Outcome Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
                
                <div className="lg:col-span-8 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#858585] uppercase">
                    <span>01</span>
                    <span>·</span>
                    <span>{p1.metaString}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] tracking-tight">
                    <Link href={`/projects/${p1.id}`} className="hover:opacity-80 transition-opacity">
                      {p1.title} — {p1.headline}
                    </Link>
                  </h3>

                  <p className="text-base sm:text-lg text-[#555555] leading-relaxed mt-1 max-w-2xl">
                    {p1.overview}
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between h-full pt-1 lg:pl-6 lg:border-l border-[#DDDDD8] gap-6">
                  <div>
                    <span className="eyebrow block mb-1.5 text-[#111111]">
                      Measurable Impact
                    </span>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {p1.outcomeDetail}
                    </p>
                  </div>

                  <Link
                    href={`/projects/${p1.id}`}
                    className="link-editorial self-start text-sm"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

              </div>

            </article>
          )}

          {/* ============================================================== */}
          {/* PROJECT 02: Asymmetric 2-Column (Text Alongside Large Image) */}
          {/* ============================================================== */}
          {p2 && (
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Rich Editorial Story & Outcomes */}
              <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
                <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#858585] uppercase">
                  <span>02</span>
                  <span>·</span>
                  <span>{p2.metaString}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] tracking-tight leading-tight">
                  <Link href={`/projects/${p2.id}`} className="hover:opacity-80 transition-opacity">
                    {p2.title} — {p2.headline}
                  </Link>
                </h3>

                <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                  {p2.overview}
                </p>

                {/* Key Deliverables Minimal List */}
                <div className="pt-4 border-t border-[#DDDDD8] space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs uppercase font-mono text-[#858585]">Core Metric</span>
                    <span className="text-sm font-semibold text-[#111111]">{p2.outcomeMetric}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555]">
                    {p2.outcomeDetail}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/projects/${p2.id}`}
                    className="link-editorial text-sm"
                  >
                    <span>Explore Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Large Media Showcase */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <Link
                  href={`/projects/${p2.id}`}
                  className="group relative block w-full aspect-[4/3] sm:aspect-[16/10] rounded-md border border-[#DDDDD8] bg-[#FFFFFF] overflow-hidden focus-visible:outline-none"
                  aria-label={`View case study: ${p2.title}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-9 bg-[#FAFAF8] border-b border-[#DDDDD8] px-4 flex items-center justify-between z-20">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5DF]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5DF]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5DF]" />
                    </div>
                    <span className="text-[11px] font-mono text-[#858585]">
                      taskflow.local · Native Performance
                    </span>
                    <div className="w-8" />
                  </div>

                  <div className="pt-9 w-full h-full">
                    <video
                      src={p2.videoUrl}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>

                  <div className="absolute bottom-5 right-5 z-20 hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-[#111111] text-[#FFFFFF] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Case Study</span>
                    <ArrowRight size={13} />
                  </div>
                </Link>
              </div>

            </article>
          )}

          {/* ============================================================== */}
          {/* PROJECT 03: Panoramic Full-Width Showcase + 3-Column Info Grid */}
          {/* ============================================================== */}
          {p3 && (
            <article className="flex flex-col gap-8 sm:gap-12">
              
              {/* Full Width Media Showcase Frame */}
              <Link
                href={`/projects/${p3.id}`}
                className="group relative block w-full min-h-[320px] sm:min-h-[420px] rounded-md border border-[#DDDDD8] bg-[#FAFAF8] overflow-hidden focus-visible:outline-none p-6 sm:p-10"
                aria-label={`View case study: ${p3.title}`}
              >
                {/* Clean Editorial UI Mockup Presentation */}
                <div className="max-w-4xl mx-auto bg-[#FFFFFF] rounded border border-[#DDDDD8] p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between pb-4 border-b border-[#DDDDD8] text-xs font-mono text-[#858585]">
                    <span className="font-semibold text-[#111111]">PULSE DESIGN SYSTEM · COMPONENT ATLAS</span>
                    <span>WCAG 2.1 AA · REACT 19</span>
                  </div>

                  <div className="py-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded border border-[#DDDDD8] bg-[#FAFAF8]">
                      <span className="text-[11px] font-mono text-[#858585] block mb-1">Tokens</span>
                      <span className="text-xl font-bold text-[#111111]">140+ CSS Vars</span>
                    </div>
                    <div className="p-4 rounded border border-[#DDDDD8] bg-[#FAFAF8]">
                      <span className="text-[11px] font-mono text-[#858585] block mb-1">Coverage</span>
                      <span className="text-xl font-bold text-[#111111]">60+ Primitives</span>
                    </div>
                    <div className="p-4 rounded border border-[#DDDDD8] bg-[#FAFAF8]">
                      <span className="text-[11px] font-mono text-[#858585] block mb-1">Hydration</span>
                      <span className="text-xl font-bold text-[#111111]">Zero-Runtime</span>
                    </div>
                    <div className="p-4 rounded border border-[#DDDDD8] bg-[#FAFAF8]">
                      <span className="text-[11px] font-mono text-[#858585] block mb-1">Accessibility</span>
                      <span className="text-xl font-bold text-[#111111]">100% Passed</span>
                    </div>
                  </div>

                  <div className="p-4 rounded border border-[#DDDDD8] bg-[#F7F7F5] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#555555]">
                      import &#123; Button, Modal, DataTable, ThemeProvider &#125; from &#39;@pulse/ui&#39;;
                    </span>
                    <span className="text-xs font-semibold text-[#111111]">v2.4 Live</span>
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 z-20 hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-[4px] bg-[#111111] text-[#FFFFFF] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Case Study</span>
                  <ArrowRight size={13} />
                </div>
              </Link>

              {/* 3-Column Editorial Metadata & Overview Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                <div className="md:col-span-5">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#858585] uppercase mb-2">
                    <span>03</span>
                    <span>·</span>
                    <span>{p3.metaString}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                    <Link href={`/projects/${p3.id}`} className="hover:opacity-80 transition-opacity">
                      {p3.title} — {p3.headline}
                    </Link>
                  </h3>
                </div>

                <div className="md:col-span-4">
                  <span className="eyebrow block mb-2">Architecture &amp; Strategy</span>
                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                    {p3.overview}
                  </p>
                </div>

                <div className="md:col-span-3 flex flex-col justify-between gap-4">
                  <div>
                    <span className="eyebrow block mb-2">Engineering Outcome</span>
                    <p className="text-xs sm:text-sm text-[#555555]">
                      {p3.outcomeDetail}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${p3.id}`}
                    className="link-editorial self-start text-sm"
                  >
                    <span>Read Architecture Review</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </article>
          )}

        </div>

      </div>
    </section>
  );
}
