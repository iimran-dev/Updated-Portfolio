import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

function normalizeSrc(src) {
  if (!src) return "";
  return src.startsWith("/public/") ? src.replace("/public/", "/") : src;
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const projectId = resolvedParams?.id;
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[currentIndex];

  if (!project) {
    return notFound();
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111111] selection:bg-[#111111] selection:text-[#FFFFFF] font-sans">
      <Nav />

      <main id="main-content" className="pt-28 sm:pt-36 lg:pt-40">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          
          {/* Top Breadcrumb Bar: Preserved Horizontal Alignment */}
          <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-[#DDDDD8] mb-12 sm:mb-16">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#555555] hover:text-[#111111] transition-colors group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              <span>Back to All Work</span>
            </Link>

            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#666666]">
              {project.category}
            </span>
          </div>

          {/* ========================================================================= */}
          {/* 01 — HERO                                                                 */}
          {/* ========================================================================= */}
          <header className="mb-14 sm:mb-20">
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              {/* Project Title: Calibrated display scale */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.1]">
                {project.title}
              </h1>

              {/* Short Description: Disciplined editorial lead */}
              <p className="text-base sm:text-lg lg:text-xl text-[#555555] font-normal leading-relaxed max-w-2xl">
                {project.shortDescription}
              </p>

              {/* Technology Stack & Live Action Row: Preserved Horizontal Bar on Mobile */}
              <div className="flex flex-row items-center justify-between gap-4 pt-3 sm:pt-4 border-t border-[#DDDDD8]">

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors group shrink-0"
                  >
                    <span>View Live</span>
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>
                )}
              </div>
            </div>
          </header>

          {/* ========================================================================= */}
          {/* 02 — OVERVIEW (Split Layout Preserved on Mobile)                           */}
          {/* ========================================================================= */}
          <section id="overview" className="py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-14 items-start">
              
              {/* Left Column: Heading & Metadata (Preserved sticky split anchor) */}
              <div className="col-span-4 sticky top-24 sm:top-28 space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-base sm:text-xl lg:text-2xl font-semibold tracking-tight text-[#111111]">
                    Overview
                  </h2>
                </div>

                {/* Minimalist Metadata Group */}
                <div className="border-t border-[#DDDDD8] pt-3.5 sm:pt-5 space-y-3 sm:space-y-4">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono text-[#777777] uppercase tracking-wider block mb-0.5">
                      Role
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#111111] leading-snug">
                      {project.role}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] sm:text-xs font-mono text-[#777777] uppercase tracking-wider block mb-0.5">
                      Timeline
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#111111] leading-snug">
                      {project.year}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] sm:text-xs font-mono text-[#777777] uppercase tracking-wider block mb-0.5">
                      Status
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#111111] leading-snug">
                      {project.status}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="col-span-8 space-y-6 sm:space-y-8 lg:space-y-10">
                <p className="text-xs sm:text-base lg:text-lg text-[#222222] font-normal leading-relaxed max-w-xl">
                  {project.overview}
                </p>

                {project.problemStatement && (
                  <div className="space-y-1.5 sm:space-y-2 border-t border-[#DDDDD8] pt-4 sm:pt-6">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#777777] block">
                      The Challenge
                    </span>
                    <p className="text-xs sm:text-sm lg:text-base text-[#555555] leading-relaxed max-w-xl">
                      {project.problemStatement}
                    </p>
                  </div>
                )}

                {project.objective && (
                  <div className="space-y-1.5 sm:space-y-2 border-t border-[#DDDDD8] pt-4 sm:pt-6">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#777777] block">
                      Objective
                    </span>
                    <p className="text-xs sm:text-sm lg:text-base text-[#555555] leading-relaxed max-w-xl">
                      {project.objective}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* 03 — PROJECT VISUALS / THE EXPERIENCE                                     */}
          {/* ========================================================================= */}
          {project.images && project.images.length > 0 && (
            <section id="experience" className="border-t border-[#DDDDD8] py-12 sm:py-16 lg:py-20">
              <div className="mb-6 sm:mb-10 lg:mb-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-[#111111]">
                  The Experience
                </h2>
              </div>

              <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                {project.images.map((image, idx) => (
                  <figure key={idx} className="space-y-2.5 sm:space-y-3">
                    <div className="relative w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DDDDD8] bg-[#FFFFFF] shadow-xs">
                      <Image
                        src={normalizeSrc(image.src)}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1200px) 100vw, 1140px"
                        className="object-cover"
                      />
                    </div>
                    {image.caption && (
                      <figcaption className="flex items-baseline justify-between gap-4 text-[11px] sm:text-xs text-[#777777] font-normal pt-1 px-1">
                        <span className="font-mono text-[#888888] uppercase tracking-wider text-[10px] sm:text-xs shrink-0">
                          Figure 0{idx + 1}
                        </span>
                        <span className="text-right max-w-xl">
                          {image.caption}
                        </span>
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 04 — TECHNOLOGY STACK: BUILT WITH (Split Layout Preserved on Mobile)       */}
          {/* ========================================================================= */}
          {project.builtWith && project.builtWith.length > 0 && (
            <section id="built-with" className="border-t border-[#DDDDD8] py-12 sm:py-16 lg:py-20">
              <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-14 items-start">
                
                <div className="col-span-4 sticky top-24 sm:top-28">
                  <h2 className="text-base sm:text-xl lg:text-2xl font-semibold tracking-tight text-[#111111]">
                    Built with
                  </h2>
                </div>

                <div className="col-span-8 border-b border-[#DDDDD8]">
                  {project.builtWith.map((item) => (
                    <div
                      key={item.name}
                      className="border-t border-[#DDDDD8] py-3.5 sm:py-5 flex flex-row items-baseline justify-between gap-3 sm:gap-6"
                    >
                      <span className="text-xs sm:text-base font-semibold text-[#111111] tracking-tight shrink-0 w-2/5">
                        {item.name}
                      </span>
                      <p className="text-xs sm:text-sm text-[#555555] leading-snug w-3/5">
                        {item.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 05 — KEY DELIVERABLES (Split Layout Preserved on Mobile)                   */}
          {/* ========================================================================= */}
          {project.deliverables && project.deliverables.length > 0 && (
            <section id="deliverables" className="border-t border-[#DDDDD8] py-12 sm:py-16 lg:py-20">
              <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-14 items-start">
                
                <div className="col-span-4 sticky top-24 sm:top-28">
                  <h2 className="text-base sm:text-xl lg:text-2xl font-semibold tracking-tight text-[#111111]">
                    Key Deliverables
                  </h2>
                </div>

                <div className="col-span-8 border-b border-[#DDDDD8]">
                  {project.deliverables.map((item, idx) => {
                    const numString = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
                    return (
                      <div
                        key={idx}
                        className="border-t border-[#DDDDD8] py-3 sm:py-4.5 flex items-baseline gap-3 sm:gap-6 group"
                      >
                        <span className="font-mono text-[10px] sm:text-xs text-[#666666] tracking-wider shrink-0 select-none">
                          {numString}
                        </span>
                        <p className="text-xs sm:text-sm lg:text-base text-[#222222] font-normal leading-snug group-hover:translate-x-1 transition-transform duration-200">
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 06 — OUTCOME (Split Layout Preserved on Mobile)                            */}
          {/* ========================================================================= */}
          {project.outcome && (
            <section id="outcome" className="border-t border-[#DDDDD8] py-12 sm:py-16 lg:py-20">
              <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-14 items-start">
                
                <div className="col-span-4 sticky top-24 sm:top-28">
                  <h2 className="text-base sm:text-xl lg:text-2xl font-semibold tracking-tight text-[#111111]">
                    Outcome
                  </h2>
                </div>

                <div className="col-span-8 space-y-6 sm:space-y-8">
                  {/* Quantitative Metric Callout: Refined display typography */}
                  {project.outcome.metric && (
                    <div className="space-y-1">
                      <div className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#111111] tracking-tight">
                        {project.outcome.metric}
                      </div>
                      {project.outcome.metricLabel && (
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#666666] block">
                          {project.outcome.metricLabel}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Qualitative Narrative */}
                  <p className="text-xs sm:text-sm lg:text-base text-[#444444] font-normal leading-relaxed border-t border-[#DDDDD8] pt-4 sm:pt-6 max-w-xl">
                    {project.outcome.description}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 07 — LIVE PROJECT (CLOSING CALL TO ACTION)                                 */}
          {/* ========================================================================= */}
          <section id="live-project" className="border-t border-[#DDDDD8] py-12 sm:py-18">
            <div className="flex flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-2xl lg:text-3xl font-bold text-[#111111] tracking-tight leading-snug">
                  See the project in action.
                </h3>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-[#222222] text-xs sm:text-sm font-medium transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-[0.98] shrink-0"
                >
                  <span>Visit Live Site</span>
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </section>

          {/* ========================================================================= */}
          {/* CASE STUDY NAVIGATION (BETWEEN PROJECTS)                                  */}
          {/* ========================================================================= */}
          <nav aria-label="Project Navigation" className="border-t border-[#DDDDD8] py-10 sm:py-14">
            <div className="flex flex-row items-center justify-between gap-4">
              {/* Previous Project Link */}
              <div className="min-w-0">
                {prevProject ? (
                  <Link
                    href={`/projects/${prevProject.id}`}
                    className="group flex flex-col items-start gap-1 text-left"
                  >
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#777777] group-hover:text-[#111111] transition-colors">
                      <ArrowLeft size={11} className="group-hover:-translate-x-1 transition-transform" />
                      <span>Previous Project</span>
                    </span>
                    <span className="text-xs sm:text-base font-semibold text-[#111111] group-hover:opacity-75 transition-opacity truncate max-w-[140px] sm:max-w-xs">
                      {prevProject.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              {/* Next Project Link */}
              <div className="min-w-0 text-right">
                {nextProject ? (
                  <Link
                    href={`/projects/${nextProject.id}`}
                    className="group flex flex-col items-end gap-1"
                  >
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#777777] group-hover:text-[#111111] transition-colors">
                      <span>Next Project</span>
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-xs sm:text-base font-semibold text-[#111111] group-hover:opacity-75 transition-opacity truncate max-w-[140px] sm:max-w-xs">
                      {nextProject.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </nav>

        </div>
      </main>

      <Footer />
    </div>
  );
}

