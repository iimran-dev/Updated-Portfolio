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
    <div className="min-h-screen bg-[#0a0a0a] text-white py-8 sm:py-16 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden font-sans">
      {/* Background Ambient Backdrop Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] h-[350px] sm:h-[500px] rounded-full blur-[120px] sm:blur-[150px] opacity-15 pointer-events-none"
        style={{ backgroundColor: project.accentColor || "#a78bfa" }}
      />

      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-12 relative z-10">
        {/* Navigation & Header Controls */}
        <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
          <Link
            href="/#about"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all duration-300 cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span className="tracking-wider uppercase text-[11px] font-medium">BACK TO SELECTED WORK</span>
          </Link>

          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-medium uppercase tracking-wider"
            style={{ color: project.accentColor, borderColor: `${project.accentColor}40` }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: project.accentColor }}
            />
            {project.category}
          </span>
        </div>

        {/* Project Header Banner */}
        <div className="flex flex-col gap-2.5 sm:gap-3 border-b border-white/10 pb-5 sm:pb-8">
          <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.08] break-words">
            {project.title}
          </h1>

          <p className="font-light text-zinc-300 text-sm sm:text-xl max-w-2xl leading-relaxed">
            {project.tagline} <span className="text-zinc-500 font-light">—</span>{" "}
            <span style={{ color: project.accentColor }} className="font-medium">
              {project.subtitle}
            </span>
          </p>
        </div>

        {/* Media Container: Autoplay & Continuously Looping Video */}
        <div className="relative aspect-video w-full bg-zinc-950 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.9)]">
          <video
            src={project.videoUrl}
            poster={project.poster || undefined}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Project Meta Info Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#121212] p-5 sm:p-6 rounded-2xl border border-white/10">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-medium flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" style={{ color: project.accentColor }} /> CLIENT
            </span>
            <span className="font-bold text-sm sm:text-base text-zinc-200">{project.client}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-medium flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" style={{ color: project.accentColor }} /> TIMELINE
            </span>
            <span className="font-bold text-sm sm:text-base text-zinc-200">{project.year}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-medium flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" style={{ color: project.accentColor }} /> ROLE
            </span>
            <span className="font-bold text-sm sm:text-base text-zinc-200">{project.role}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: project.accentColor }} /> STATUS
            </span>
            <span className="font-bold text-xs text-emerald-400 uppercase tracking-wider">
              {project.status || "SHIPPED & LIVE"}
            </span>
          </div>
        </div>

        {/* Detailed Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Column: Strategy & Deliverables */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Card 1: Project Overview & Strategy */}
            <div className="bg-[#121212] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col gap-4">
              <h2 className="font-bold text-xl sm:text-2xl text-white">
                Project Overview &amp; Strategy
              </h2>
              <div className="flex flex-col gap-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>{project.overview}</p>
                {project.strategy && <p>{project.strategy}</p>}
              </div>
            </div>

            {/* Card 2: Key Deliverables & Impact */}
            <div className="bg-[#121212] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col gap-4">
              <h2 className="font-bold text-xl sm:text-2xl text-white">
                Key Deliverables &amp; Impact
              </h2>
              <ul className="flex flex-col gap-3.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 font-regular">
                    <span
                      className="w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                      style={{
                        backgroundColor: `${project.accentColor}15`,
                        borderColor: `${project.accentColor}50`,
                        color: project.accentColor,
                      }}
                    >
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Tech Stack & Case Study */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 1: Technologies & Frameworks */}
            <div className="bg-[#121212] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col gap-5">
              <h2 className="font-bold text-xl text-white flex items-center gap-2">
                <Code className="w-4 h-4" style={{ color: project.accentColor }} />
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

            {/* Card 2: Project Case Study */}
            <div className="bg-[#141414] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/15 flex flex-col gap-4">
              <h3 className="font-bold text-lg sm:text-xl text-white">Project Case Study</h3>
              <p className="font-regular text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.caseStudy}
              </p>
              <Link
                href="/#contact"
                className="w-full mt-2 py-3.5 px-5 rounded-full text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg group"
                style={{
                  backgroundColor: project.accentColor || "#a78bfa",
                  boxShadow: `0 0 25px ${project.accentColor}40`,
                }}
              >
                <span>EXPLORE LIVE PRODUCT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

