'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function WorkPage() {
  return (
    <div className="bg-[#F7F7F5] text-[#111111] min-h-screen selection:bg-[#111111] selection:text-[#FFFFFF] font-sans">
      {/* Global Header Navigation */}
      <Nav />

      <main id="main-content" className="pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-32">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          
          {/* Top Breadcrumb Bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between pb-6 sm:pb-8 border-b border-[#DDDDD8] mb-12 sm:mb-16"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#555555] hover:text-[#111111] transition-colors group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              <span>Back to Overview</span>
            </Link>
          </motion.div>

          {/* Page Header */}
          <motion.header
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-20 sm:mb-28"
          >
            <h1 className="editorial-h1 text-[#111111] mb-4">
              All Shipped Work
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#555555] font-normal leading-relaxed">
              Case-study-driven digital products, scalable design systems, and modern frontend architectures engineered for measurable business impact.
            </p>
          </motion.header>

          {/* Projects Presentation List (Editorial Case Studies) */}
          <div className="flex flex-col gap-28 sm:gap-36 lg:gap-44">
            {projects.map((project, idx) => {
              const isReversed = idx % 2 === 1;
              const numString = `0${idx + 1}`;

              return (
                <motion.article
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={cardVariants}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  {/* Media Frame (7 Columns) */}
                  <div className={`lg:col-span-7 ${isReversed ? "order-1 lg:order-2" : "order-1"}`}>
                    <Link
                      href={`/projects/${project.id}`}
                      className="group relative block w-full aspect-[16/10] rounded-lg border border-[#DDDDD8] bg-[#FFFFFF] overflow-hidden focus-visible:outline-none shadow-xs"
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

                      <div className="absolute bottom-4 right-4 z-20 hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111]/90 backdrop-blur-md text-[#FFFFFF] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span>Read Case Study</span>
                        <ArrowRight size={13} />
                      </div>
                    </Link>
                  </div>

                  {/* Editorial Details (5 Columns) */}
                  <div
                    className={`lg:col-span-5 flex flex-col gap-5 ${
                      isReversed ? "order-2 lg:order-1" : "order-2"
                    }`}
                  >
                    {/* Chapter Number */}
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[#888888] tracking-widest uppercase">
                      {numString}
                    </span>

                    {/* Project Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#111111] tracking-tight leading-[1.1]">
                      <Link
                        href={`/projects/${project.id}`}
                        className="hover:opacity-75 transition-opacity"
                      >
                        {project.title}
                      </Link>
                    </h2>

                    {/* Concise Short Description */}
                    <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Restrained Technology Line */}
                    <p className="text-xs sm:text-sm font-mono text-[#777777] tracking-wide pt-1">
                      {project.technologies.slice(0, 4).join(" · ")}
                    </p>

                    {/* Action Links: View Live ↗ & Read Case Study → */}
                    <div className="flex items-center gap-6 pt-3 border-t border-[#DDDDD8]">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors group"
                        >
                          <span>View Live</span>
                          <ArrowUpRight
                            size={14}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          />
                        </a>
                      )}

                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#666666] hover:text-[#111111] transition-colors group"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight
                          size={13}
                          className="group-hover:translate-x-1 transition-transform"
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
            className="mt-28 sm:mt-36 pt-10 border-t border-[#DDDDD8] flex flex-col sm:flex-row sm:items-center justify-between gap-6"
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
