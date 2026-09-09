import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const projectId = resolvedParams?.id;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111111] py-8 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Navigation / Back Bar */}
        <div className="flex items-center justify-between pb-8 border-b border-[#DDDDD8] mb-12">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#555555] hover:text-[#111111] uppercase transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Selected Work</span>
          </Link>

          <span className="text-xs font-mono uppercase tracking-wider text-[#858585]">
            {project.category}
          </span>
        </div>

        {/* Case Study Header Banner */}
        <div className="space-y-6 max-w-4xl mb-12 sm:mb-16">
          <div className="text-xs font-mono tracking-widest text-[#858585] uppercase">
            {project.metaString}
          </div>

          <h1 className="display-headline text-[#111111] font-bold">
            {project.title} — {project.headline}
          </h1>

          <p className="text-lg sm:text-xl text-[#555555] leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Media Showcase Frame */}
        <div className="w-full rounded-md border border-[#DDDDD8] bg-[#FFFFFF] overflow-hidden mb-16 shadow-xs">
          <div className="h-9 bg-[#FAFAF8] border-b border-[#DDDDD8] px-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5DF]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5DF]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5DF]" />
            </div>
            <span className="text-[11px] font-mono text-[#858585]">
              {project.title.toLowerCase()}.live · Interface Inspection
            </span>
            <div className="w-8" />
          </div>

          <div className="relative aspect-video w-full bg-[#FAFAF8]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Project Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-md border border-[#DDDDD8] bg-[#FFFFFF] mb-16">
          <div>
            <span className="text-[11px] font-mono text-[#858585] uppercase tracking-wider block mb-1">
              Client
            </span>
            <span className="text-sm font-bold text-[#111111]">{project.client}</span>
          </div>

          <div>
            <span className="text-[11px] font-mono text-[#858585] uppercase tracking-wider block mb-1">
              Timeline
            </span>
            <span className="text-sm font-bold text-[#111111]">{project.year}</span>
          </div>

          <div>
            <span className="text-[11px] font-mono text-[#858585] uppercase tracking-wider block mb-1">
              Role
            </span>
            <span className="text-sm font-bold text-[#111111]">{project.role}</span>
          </div>

          <div>
            <span className="text-[11px] font-mono text-[#858585] uppercase tracking-wider block mb-1">
              Status
            </span>
            <span className="text-sm font-bold text-[#111111]">{project.status}</span>
          </div>
        </div>

        {/* Editorial Breakdown: Strategy & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 pt-8 border-t border-[#DDDDD8]">
          
          {/* Left Column: Overview & Strategy */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="eyebrow block">Discovery &amp; Strategy</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                Project Overview
              </h2>
              <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                {project.overview}
              </p>
              {project.strategy && (
                <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                  {project.strategy}
                </p>
              )}
            </div>

            <div className="pt-8 border-t border-[#DDDDD8] space-y-5">
              <span className="eyebrow block">Execution Scope</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
                Key Deliverables &amp; Outcomes
              </h2>

              <ul className="flex flex-col gap-3">
                {project.deliverables?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#555555]">
                    <span className="w-5 h-5 rounded-full border border-[#DDDDD8] bg-[#FFFFFF] flex items-center justify-center shrink-0 mt-0.5 text-[#111111]">
                      <Check size={12} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Measurable Impact & Tech Stack */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            
            {/* Impact Box */}
            <div className="p-6 sm:p-8 rounded-md border border-[#DDDDD8] bg-[#FFFFFF] space-y-3">
              <span className="eyebrow block text-[#111111]">
                Measurable Impact
              </span>
              <div className="text-3xl sm:text-4xl font-light text-[#111111] tracking-tight">
                {project.outcomeMetric}
              </div>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                {project.outcomeDetail}
              </p>
            </div>

            {/* Tech Stack List */}
            <div className="p-6 sm:p-8 rounded-md border border-[#DDDDD8] bg-[#FFFFFF] space-y-4">
              <span className="eyebrow block">
                Technologies &amp; Architecture
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-[4px] border border-[#DDDDD8] bg-[#F7F7F5] text-xs font-mono text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Box */}
            <div className="p-6 sm:p-8 rounded-md border border-[#DDDDD8] bg-[#111111] text-[#F7F7F5] space-y-4">
              <h3 className="text-lg font-bold text-[#FFFFFF]">Interested in similar outcomes?</h3>
              <p className="text-xs sm:text-sm text-[#AAAAAA] leading-relaxed">
                Let&apos;s discuss how product design strategy and performant frontend engineering can elevate your project.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[#FFFFFF] text-[#111111] font-semibold text-xs py-3 px-5 rounded-[4px] hover:bg-[#EBEBE6] transition-colors"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
