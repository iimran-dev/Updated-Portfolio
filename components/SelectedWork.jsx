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
  return (
    <section id="work" className="w-full py-20 sm:py-28 lg:py-36">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">

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

        {/* Project Presentations List (2 Featured Projects) */}
        <div className="flex flex-col gap-20 sm:gap-28 lg:gap-32">
          {projects.slice(0, 2).map((project, idx) => {
            const isReversed = idx % 2 === 1;
            const numString = `0${idx + 1}`;

            return (
              <motion.article
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px" }}
                variants={cardVariants}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Media Showcase (7 Columns) */}
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

                    <div className="absolute bottom-4 right-4 z-20 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] bg-[#111111] text-[#FFFFFF] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View Case Study</span>
                      <ArrowUpRight size={13} />
                    </div>
                  </Link>
                </div>

                {/* Editorial Narrative (5 Columns) */}
                <motion.div
                  variants={textGroupVariants}
                  className={`lg:col-span-5 flex flex-col gap-4 ${isReversed ? "order-2 lg:order-1" : ""}`}
                >
                  <motion.div variants={textItemVariants} className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#858585] uppercase">
                    <span className="font-semibold text-[#111111]">{numString}</span>
                    <span>·</span>
                    <span>{project.category}</span>
                  </motion.div>

                  <motion.div variants={textItemVariants}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight leading-tight">
                      <Link href={`/projects/${project.id}`} className="hover:opacity-80 transition-opacity">
                        {project.title}
                      </Link>
                    </h3>
                  </motion.div>

                  <motion.p variants={textItemVariants} className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-md">
                    {project.shortDescription || project.tagline || project.overview}
                  </motion.p>

                  <motion.div variants={textItemVariants} className="pt-2">
                    <Link
                      href={`/projects/${project.id}`}
                      className="link-editorial text-sm group"
                    >
                      <span>View Case Study</span>
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>

        {/* View All Work CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 sm:mt-24 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="text-base sm:text-lg font-semibold text-[#111111]">
              Explore all shipped products, AI tools &amp; design architectures.
            </p>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-[#222222] text-xs sm:text-sm font-medium transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-[0.98]"
          >
            <span>View All Work</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
