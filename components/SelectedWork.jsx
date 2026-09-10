'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const textGroupVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function SelectedWork() {
  const p1 = projects[0]; // Loopy AI
  const p2 = projects[1]; // TaskFlow
  const p3 = projects[2]; // UI / UX Systems

  return (
    <section id="work" className="w-full py-20 sm:py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">

        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 sm:pb-12 border-b border-[#DDDDD8] mb-16 sm:mb-24 gap-4"
        >
          <div>
            <span className="eyebrow block mb-2">Portfolio</span>
            <h2 className="editorial-h2 text-[#111111]">
              Selected Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#555555] max-w-md font-normal leading-relaxed">
            A curated selection of shipped digital products, focusing on strategic product design,
            interaction polish, and measurable engineering outcomes.
          </p>
        </motion.div>

        {/* Project Presentations List */}
        <div className="flex flex-col gap-24 sm:gap-32 lg:gap-36">

          {/* ============================================================== */}
          {/* PROJECT 01: Loopy AI */}
          {/* ============================================================== */}
          {p1 && (
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-80px" }}
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* Media Showcase (7 Columns) */}
              <div className="lg:col-span-7">
                <Link
                  href={`/projects/${p1.id}`}
                  className="group relative block w-full aspect-[16/9] rounded-md border border-[#DDDDD8] bg-[#FFFFFF] overflow-hidden focus-visible:outline-none shadow-xs"
                  aria-label={`View case study: ${p1.title}`}
                >
                  <Image
                    src={p1.coverImage}
                    alt={p1.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority
                  />

                  <div className="absolute bottom-4 right-4 z-20 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#111111] text-[#FFFFFF] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Case Study</span>
                    <ArrowUpRight size={13} />
                  </div>
                </Link>
              </div>

              {/* Editorial Narrative & Impact (5 Columns) */}
              <motion.div variants={textGroupVariants} className="lg:col-span-5 flex flex-col gap-5">
                <motion.div variants={textItemVariants} className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#858585] uppercase">
                  <span className="font-semibold text-[#111111]">01</span>
                  <span>·</span>
                  <span>{p1.category}</span>
                </motion.div>

                <motion.div variants={textItemVariants}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight leading-tight">
                    <Link href={`/projects/${p1.id}`} className="hover:opacity-80 transition-opacity">
                      {p1.title}
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-[#111111] mt-1">
                    {p1.headline}
                  </p>
                </motion.div>

                <motion.p variants={textItemVariants} className="text-sm sm:text-base text-[#555555] leading-relaxed">
                  {p1.overview}
                </motion.p>

                {/* Measurable Impact Card */}
                <motion.div variants={textItemVariants} className="p-4 rounded-md border border-[#DDDDD8] bg-[#FFFFFF] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#858585]">
                      Measurable Impact
                    </span>
                    <span className="text-xs font-bold text-[#111111]">
                      {p1.outcomeMetric}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {p1.outcomeDetail}
                  </p>
                </motion.div>

                <motion.div variants={textItemVariants} className="pt-1">
                  <Link
                    href={`/projects/${p1.id}`}
                    className="link-editorial text-sm group"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.article>
          )}

          {/* ============================================================== */}
          {/* PROJECT 02: TaskFlow */}
          {/* ============================================================== */}
          {p2 && (
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-80px" }}
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* Editorial Narrative & Impact (5 Columns) */}
              <motion.div variants={textGroupVariants} className="lg:col-span-5 flex flex-col gap-5 order-2 lg:order-1">
                <motion.div variants={textItemVariants} className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#858585] uppercase">
                  <span className="font-semibold text-[#111111]">02</span>
                  <span>·</span>
                  <span>{p2.category}</span>
                </motion.div>

                <motion.div variants={textItemVariants}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight leading-tight">
                    <Link href={`/projects/${p2.id}`} className="hover:opacity-80 transition-opacity">
                      {p2.title}
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-[#111111] mt-1">
                    {p2.headline}
                  </p>
                </motion.div>

                <motion.p variants={textItemVariants} className="text-sm sm:text-base text-[#555555] leading-relaxed">
                  {p2.overview}
                </motion.p>

                {/* Measurable Impact Card */}
                <motion.div variants={textItemVariants} className="p-4 rounded-md border border-[#DDDDD8] bg-[#FFFFFF] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#858585]">
                      Measurable Impact
                    </span>
                    <span className="text-xs font-bold text-[#111111]">
                      {p2.outcomeMetric}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {p2.outcomeDetail}
                  </p>
                </motion.div>

                <motion.div variants={textItemVariants} className="pt-1">
                  <Link
                    href={`/projects/${p2.id}`}
                    className="link-editorial text-sm group"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Media Showcase (7 Columns) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <Link
                  href={`/projects/${p2.id}`}
                  className="group relative block w-full aspect-[16/9] rounded-md border border-[#DDDDD8] bg-[#FFFFFF] overflow-hidden focus-visible:outline-none shadow-xs"
                  aria-label={`View case study: ${p2.title}`}
                >
                  <Image
                    src={p2.coverImage}
                    alt={p2.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority
                  />

                  <div className="absolute bottom-4 right-4 z-20 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#111111] text-[#FFFFFF] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Case Study</span>
                    <ArrowUpRight size={13} />
                  </div>
                </Link>
              </div>
            </motion.article>
          )}

          {/* ============================================================== */}
          {/* PROJECT 03: UI / UX Systems */}
          {/* ============================================================== */}
          {p3 && (
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-80px" }}
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* Media Showcase (7 Columns) */}
              <div className="lg:col-span-7">
                <Link
                  href={`/projects/${p3.id}`}
                  className="group relative block w-full aspect-[16/9] rounded-md border border-[#DDDDD8] bg-[#FFFFFF] overflow-hidden focus-visible:outline-none shadow-xs"
                  aria-label={`View case study: ${p3.title}`}
                >
                  <Image
                    src={p3.coverImage}
                    alt={p3.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority
                  />

                  <div className="absolute bottom-4 right-4 z-20 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#111111] text-[#FFFFFF] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Case Study</span>
                    <ArrowUpRight size={13} />
                  </div>
                </Link>
              </div>

              {/* Editorial Narrative & Impact (5 Columns) */}
              <motion.div variants={textGroupVariants} className="lg:col-span-5 flex flex-col gap-5">
                <motion.div variants={textItemVariants} className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#858585] uppercase">
                  <span className="font-semibold text-[#111111]">03</span>
                  <span>·</span>
                  <span>{p3.category}</span>
                </motion.div>

                <motion.div variants={textItemVariants}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight leading-tight">
                    <Link href={`/projects/${p3.id}`} className="hover:opacity-80 transition-opacity">
                      {p3.title}
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-[#111111] mt-1">
                    {p3.headline}
                  </p>
                </motion.div>

                <motion.p variants={textItemVariants} className="text-sm sm:text-base text-[#555555] leading-relaxed">
                  {p3.overview}
                </motion.p>

                {/* Measurable Impact Card */}
                <motion.div variants={textItemVariants} className="p-4 rounded-md border border-[#DDDDD8] bg-[#FFFFFF] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#858585]">
                      Measurable Impact
                    </span>
                    <span className="text-xs font-bold text-[#111111]">
                      {p3.outcomeMetric}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {p3.outcomeDetail}
                  </p>
                </motion.div>

                <motion.div variants={textItemVariants} className="pt-1">
                  <Link
                    href={`/projects/${p3.id}`}
                    className="link-editorial text-sm group"
                  >
                    <span>Read Architecture Review</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.article>
          )}

        </div>

      </div>
    </section>
  );
}
