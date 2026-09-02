import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowLeft, ArrowUpRight, Check, Layers, Code, User, Calendar, ShieldCheck } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const projectId = resolvedParams?.id;
  const project = projects.find((p) => p.id === projectId) || projects[0];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-10 sm:py-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden font-sans">
      {/* Background Ambient Backdrop Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ backgroundColor: project.accentColor || "#a78bfa" }}
      />

      <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-14 relative z-10">
        {/* Navigation & Header Controls */}
        <div className="flex items-center justify-between">
          <Link
            href="/#about"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all duration-300 cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span className="tracking-wider uppercase text-[11px] font-medium">BACK TO SELECTED WORK</span>
          </Link>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30 text-xs font-medium text-[#a78bfa] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse" />
            {project.category}
          </span>
        </div>

        {/* Project Header Banner */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 sm:pb-10">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.06]">
            {project.title}
          </h1>

          <p className="font-light text-zinc-300 text-lg sm:text-2xl max-w-3xl leading-relaxed">
            {project.tagline} <span className="text-zinc-500 font-light">—</span> <span className="text-[#a78bfa] font-medium">{project.subtitle}</span>
          </p>
        </div>

        {/* Media Container */}
        <div className="relative aspect-video w-full bg-zinc-950 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.9)]">
          <video
            src={project.videoUrl}
            poster={project.poster}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        </div>

        {/* Project Meta Info Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#121212] p-5 sm:p-6 rounded-2xl border border-white/10">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-medium flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#a78bfa]" /> CLIENT
            </span>
            <span className="font-bold text-sm sm:text-base text-zinc-200">{project.client}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-medium flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#a78bfa]" /> TIMELINE
            </span>
            <span className="font-bold text-sm sm:text-base text-zinc-200">{project.year}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-medium flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#a78bfa]" /> ROLE
            </span>
            <span className="font-bold text-sm sm:text-base text-zinc-200">{project.role}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#a78bfa]" /> STATUS
            </span>
            <span className="font-bold text-xs text-emerald-400 uppercase tracking-wider">SHIPPED &amp; LIVE</span>
          </div>
        </div>

        {/* Detailed Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Strategy & Deliverables */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-[#121212] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col gap-4">
              <h2 className="font-bold text-xl sm:text-2xl text-white">
                Project Overview &amp; Strategy
              </h2>
              <p className="font-regular text-zinc-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="bg-[#121212] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col gap-4">
              <h2 className="font-bold text-xl sm:text-2xl text-white">
                Key Deliverables &amp; Impact
              </h2>
              <ul className="flex flex-col gap-3.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 font-regular">
                    <span className="w-5 h-5 rounded-full bg-[#a78bfa]/15 border border-[#a78bfa]/40 text-[#a78bfa] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Tech Stack & Actions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#121212] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col gap-5">
              <h2 className="font-bold text-xl text-white flex items-center gap-2">
                <Code className="w-4 h-4 text-[#a78bfa]" />
                Technologies &amp; Frameworks
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-white/10 font-medium text-xs text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Card */}
            <div className="bg-[#141414] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/15 flex flex-col gap-4">
              <h3 className="font-bold text-lg text-white">Project Case Study</h3>
              <p className="font-regular text-xs text-zinc-400 leading-relaxed">
                Explore the interactive design system, live product prototypes, and code repository.
              </p>
              <Link
                href="/#contact"
                className="w-full py-3.5 rounded-full bg-[#a78bfa] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#b89eff] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(167,139,250,0.35)] group"
              >
                <span>REQUEST FULL DEMO</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
