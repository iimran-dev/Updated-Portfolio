'use client';

import { use } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowLeft, ExternalLink, CheckCircle2, Sparkles, Layers, Code, User, Calendar } from "lucide-react";

export default function ProjectDetailPage({ params }) {
  const resolvedParams = use(params);
  const projectId = resolvedParams.id;
  const project = projects.find((p) => p.id === projectId) || projects[0];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12 px-4 sm:px-6 lg:px-12 relative overflow-hidden font-body">
      {/* Background Ambient Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ backgroundColor: project.accentColor || "#fde047" }}
      />

      <div className="max-w-6xl mx-auto flex flex-col gap-10 relative z-10">
        {/* Navigation Back Button */}
        <div>
          <Link
            href="/#about"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs sm:text-sm font-mono font-semibold text-zinc-300 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO SELECTED WORK</span>
          </Link>
        </div>

        {/* Project Header Banner */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-zinc-200 border border-white/20">
              {project.category}
            </span>
            <span className="text-zinc-500 font-mono text-xs">• CASE STUDY</span>
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08]">
            {project.title}
          </h1>

          <p className="font-display text-zinc-400 text-base sm:text-lg md:text-2xl max-w-3xl leading-relaxed">
            {project.tagline} — <span className="text-white font-medium">{project.subtitle}</span>
          </p>
        </div>

        {/* Video Player & Media Container */}
        <div className="relative aspect-video w-full bg-black rounded-3xl overflow-hidden border-2 border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-zinc-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] text-zinc-500 uppercase flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-zinc-400" /> CLIENT / ORGANISATION
            </span>
            <span className="font-display font-bold text-sm sm:text-base text-zinc-200">{project.client}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] text-zinc-500 uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-zinc-400" /> TIMELINE
            </span>
            <span className="font-display font-bold text-sm sm:text-base text-zinc-200">{project.year}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] text-zinc-500 uppercase flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-zinc-400" /> ROLE
            </span>
            <span className="font-display font-bold text-sm sm:text-base text-zinc-200">{project.role}</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] text-zinc-500 uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" /> STATUS
            </span>
            <span className="font-mono text-xs font-bold text-emerald-400">SHIPPED &amp; LIVE</span>
          </div>
        </div>

        {/* Detailed Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Description & Key Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-zinc-900/40 p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col gap-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#fde047]" />
                Project Overview &amp; Strategy
              </h2>
              <p className="font-body text-zinc-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="bg-zinc-900/40 p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col gap-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Key Features &amp; Impact
              </h2>
              <ul className="flex flex-col gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-body text-sm sm:text-base text-zinc-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Tech Stack & Actions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-zinc-900/40 p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col gap-5">
              <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
                <Code className="w-5 h-5 text-[#fde047]" />
                Technologies &amp; Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl bg-zinc-950 border border-white/10 font-mono text-xs font-medium text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Card */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col gap-4">
              <h3 className="font-display font-bold text-lg text-white">Project Case Study</h3>
              <p className="font-body text-xs text-zinc-400 leading-relaxed">
                Explore the interactive design system, live product prototypes, and code repository.
              </p>
              <Link
                href="/#contact"
                className="w-full py-3.5 rounded-full bg-white text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-[#fde047] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>REQUEST FULL DEMO</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
