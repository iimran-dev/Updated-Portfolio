import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";

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
          
          {/* Top Breadcrumb Bar */}
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

            <span className="text-xs font-mono uppercase tracking-wider text-[#888888]">
              {project.category}
            </span>
          </div>

          {/* ========================================================================= */}
          {/* 01 — HERO                                                                 */}
          {/* ========================================================================= */}
          <header className="mb-14 sm:mb-20">
            <div className="max-w-4xl space-y-6">
              {/* Project Title */}
              <h1 className="editorial-h1 text-[#111111] tracking-tight">
                {project.title}
              </h1>

              {/* Short Description */}
              <p className="text-xl sm:text-2xl md:text-[26px] text-[#444444] font-normal leading-[1.35] tracking-[-0.01em]">
                {project.shortDescription}
              </p>

              {/* Technology Stack & Live Action Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#DDDDD8]">
                <p className="text-xs sm:text-sm font-mono text-[#666666] tracking-wide">
                  {project.technologies.join(" · ")}
                </p>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors group self-start sm:self-auto"
                  >
                    <span>View Live</span>
                    <ArrowUpRight
                      size={15}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>
                )}
              </div>
            </div>
          </header>


          {/* 02 — OVERVIEW                                                             */}

          <section id="overview" className="border-t border-[#DDDDD8] py-14 sm:py-18 lg:py-22">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: Heading & Metadata */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
                <div>
                  <span className="eyebrow block mb-2">01 / Context</span>
                  <h2 className="editorial-h2 text-[#111111]">
                    Overview
                  </h2>
                </div>

                {/* Minimalist Metadata Group */}
                <div className="border-t border-[#DDDDD8] pt-6 space-y-4">
                  <div>
                    <span className="text-xs font-mono text-[#888888] uppercase tracking-wider block mb-1">
                      Role
                    </span>
                    <p className="text-sm font-medium text-[#111111]">
                      {project.role}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-[#888888] uppercase tracking-wider block mb-1">
                      Timeline
                    </span>
                    <p className="text-sm font-medium text-[#111111]">
                      {project.year}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-[#888888] uppercase tracking-wider block mb-1">
                      Status
                    </span>
                    <p className="text-sm font-medium text-[#111111]">
                      {project.status}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative */}
              <div className="lg:col-span-8 space-y-8 sm:space-y-10">
                <p className="text-lg sm:text-xl md:text-2xl text-[#222222] font-normal leading-relaxed">
                  {project.overview}
                </p>

                {project.problemStatement && (
                  <div className="space-y-2 border-t border-[#DDDDD8] pt-6 sm:pt-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#888888] block">
                      The Challenge
                    </span>
                    <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>
                )}

                {project.objective && (
                  <div className="space-y-2 border-t border-[#DDDDD8] pt-6 sm:pt-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#888888] block">
                      Objective
                    </span>
                    <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
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
            <section id="experience" className="border-t border-[#DDDDD8] py-14 sm:py-18 lg:py-22">
              <div className="mb-10 sm:mb-14">
                <span className="eyebrow block mb-2">02 / Interface</span>
                <h2 className="editorial-h2 text-[#111111]">
                  The Experience
                </h2>
              </div>

              <div className="space-y-12 sm:space-y-16">
                {project.images.map((image, idx) => (
                  <figure key={idx} className="space-y-3 sm:space-y-4">
                    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-[#DDDDD8] bg-[#FFFFFF] shadow-xs">
                      <Image
                        src={normalizeSrc(image.src)}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1200px) 100vw, 1140px"
                        className="object-cover"
                      />
                    </div>
                    {image.caption && (
                      <figcaption className="flex items-baseline justify-between gap-4 text-xs sm:text-sm text-[#777777] font-normal pt-1 px-1">
                        <span className="font-mono text-[#999999] uppercase tracking-wider text-xs">
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
          {/* 04 — TECHNOLOGY STACK: BUILT WITH                                         */}
          {/* ========================================================================= */}
          {project.builtWith && project.builtWith.length > 0 && (
            <section id="built-with" className="border-t border-[#DDDDD8] py-14 sm:py-18 lg:py-22">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <span className="eyebrow block mb-2">03 / Architecture</span>
                  <h2 className="editorial-h2 text-[#111111]">
                    Built with
                  </h2>
                </div>

                <div className="lg:col-span-8 border-b border-[#DDDDD8]">
                  {project.builtWith.map((item, idx) => (
                    <div
                      key={item.name}
                      className="border-t border-[#DDDDD8] py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-8"
                    >
                      <span className="text-lg sm:text-xl font-semibold text-[#111111] tracking-tight shrink-0 sm:w-1/3">
                        {item.name}
                      </span>
                      <p className="text-sm sm:text-base text-[#555555] leading-relaxed sm:w-2/3">
                        {item.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 05 — KEY DELIVERABLES                                                     */}
          {/* ========================================================================= */}
          {project.deliverables && project.deliverables.length > 0 && (
            <section id="deliverables" className="border-t border-[#DDDDD8] py-14 sm:py-18 lg:py-22">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <span className="eyebrow block mb-2">04 / Scope</span>
                  <h2 className="editorial-h2 text-[#111111]">
                    Key Deliverables
                  </h2>
                </div>

                <div className="lg:col-span-8 border-b border-[#DDDDD8]">
                  {project.deliverables.map((item, idx) => {
                    const numString = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
                    return (
                      <div
                        key={idx}
                        className="border-t border-[#DDDDD8] py-4 sm:py-5 flex items-baseline gap-4 sm:gap-6 group"
                      >
                        <span className="font-mono text-xs text-[#888888] tracking-wider shrink-0 select-none">
                          {numString}
                        </span>
                        <p className="text-base sm:text-lg text-[#222222] font-normal leading-relaxed group-hover:translate-x-1 transition-transform duration-200">
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
          {/* 06 — OUTCOME                                                              */}
          {/* ========================================================================= */}
          {project.outcome && (
            <section id="outcome" className="border-t border-[#DDDDD8] py-14 sm:py-18 lg:py-22">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <span className="eyebrow block mb-2">05 / Impact</span>
                  <h2 className="editorial-h2 text-[#111111]">
                    Outcome
                  </h2>
                </div>

                <div className="lg:col-span-8 space-y-8">
                  {/* Quantitative Metric Callout */}
                  {project.outcome.metric && (
                    <div className="space-y-1">
                      <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#111111] tracking-tight">
                        {project.outcome.metric}
                      </div>
                      {project.outcome.metricLabel && (
                        <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#888888] block">
                          {project.outcome.metricLabel}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Qualitative Narrative */}
                  <p className="text-base sm:text-lg md:text-xl text-[#444444] font-normal leading-relaxed border-t border-[#DDDDD8] pt-6">
                    {project.outcome.description}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 07 — LIVE PROJECT (CLOSING CALL TO ACTION)                                 */}
          {/* ========================================================================= */}
          <section id="live-project" className="border-t border-[#DDDDD8] py-16 sm:py-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <span className="eyebrow block mb-2">Explore</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111111] tracking-tight">
                  See the project in action.
                </h3>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-[#222222] text-sm font-medium transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-[0.98] self-start sm:self-auto"
                >
                  <span>Visit Live Site</span>
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </section>

          {/* ========================================================================= */}
          {/* CASE STUDY NAVIGATION (BETWEEN PROJECTS)                                  */}
          {/* ========================================================================= */}
          <nav aria-label="Project Navigation" className="border-t border-[#DDDDD8] py-12 sm:py-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
              {/* Previous Project Link */}
              <div className="min-w-0">
                {prevProject ? (
                  <Link
                    href={`/projects/${prevProject.id}`}
                    className="group flex flex-col items-start gap-1 text-left"
                  >
                    <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#888888] group-hover:text-[#111111] transition-colors">
                      <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                      <span>Previous Project</span>
                    </span>
                    <span className="text-lg sm:text-xl font-semibold text-[#111111] group-hover:opacity-75 transition-opacity truncate max-w-xs">
                      {prevProject.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              {/* Next Project Link */}
              <div className="min-w-0 text-left sm:text-right">
                {nextProject ? (
                  <Link
                    href={`/projects/${nextProject.id}`}
                    className="group flex flex-col items-start sm:items-end gap-1"
                  >
                    <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#888888] group-hover:text-[#111111] transition-colors">
                      <span>Next Project</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-lg sm:text-xl font-semibold text-[#111111] group-hover:opacity-75 transition-opacity truncate max-w-xs">
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
