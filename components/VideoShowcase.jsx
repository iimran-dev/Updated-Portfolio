'use client';

import { Sparkles, Check, Film, Layers, Monitor, Cpu } from "lucide-react";

export function VideoShowcase() {
  const videoClips = [
    {
      id: "frontend-apps",
      title: "Production Frontend Projects & Web Apps",
      tag: "FRONTEND APPS",
      category: "React 19 & Next.js 15",
      url: "https://assets.mixkit.co/videos/preview/mixkit-code-animation-web-development-42774-large.mp4",
      description: "Interactive web applications built with Next.js, responsive layouts, dynamic state, and zero-latency UI.",
      accentColor: "#4cd2ca",
    },
    {
      id: "uiux-design",
      title: "UI/UX & Interactive Design Mockups",
      tag: "UI/UX DESIGNS",
      category: "Figma & Visual Systems",
      url: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-42892-large.mp4",
      description: "High-fidelity visual design, user flow wireframing, responsive grids, and interactive component prototypes.",
      accentColor: "#ffd600",
    },
    {
      id: "design-system",
      title: "Design Systems & Custom UI Components",
      tag: "DESIGN SYSTEMS",
      category: "Tailwind & Motion",
      url: "https://assets.mixkit.co/videos/preview/mixkit-hand-holding-a-smartphone-with-green-screen-41527-large.mp4",
      description: "Atomic components, standardized color schemes, and responsive grid layouts mapped pixel-for-pixel.",
      accentColor: "#ff3b77",
    },
  ];

  return (
    <section id="video-showcase" className="w-full bg-[#0a0a0a] text-white py-10 sm:py-16 px-3 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#4cd2ca] text-black font-mono font-bold text-[10px] sm:text-xs px-2.5 py-1 rounded-md border-2 border-black neo-shadow-sm mb-3 uppercase">
              <Film className="w-3.5 h-3.5" />
              VIDEO &amp; INTERACTIVE SHOWCASE
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
              LIVE PREVIEWS.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cd2ca] via-[#ffd600] to-[#ff3b77]">
                SHIPPED IN CODE.
              </span>
            </h2>
          </div>

          <p className="font-body text-gray-300 text-xs sm:text-sm max-w-md leading-relaxed">
            High-definition previews of production web applications, user interface systems, and interactive React component design.
          </p>
        </div>

        {/* Video Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">

          {/* BENTO TILE 1: Main Featured Video (7 Cols) */}
          <div className="lg:col-span-7 bg-[#141414] border-3 sm:border-4 border-black rounded-[1.5rem] sm:rounded-[2rem] p-3.5 sm:p-5 neo-shadow flex flex-col justify-between gap-3 relative overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center justify-between bg-[#0a0a0a] border-2 border-white/10 rounded-xl px-3 py-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-black/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-black/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-black/40" />
                </div>
                <span className="font-mono text-[10px] sm:text-xs text-gray-400 truncate">
                  imran.dev/projects/{videoClips[0].id}
                </span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] bg-[#4cd2ca]/10 border border-[#4cd2ca]/30 text-[#4cd2ca] px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4cd2ca] animate-pulse" />
                LIVE PREVIEW
              </span>
            </div>

            {/* Video Player Container (No Controls) */}
            <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden border border-white/10 sm:border-2 shadow-inner">
              <video
                src={videoClips[0].url}
                className="w-full h-full object-cover pointer-events-none select-none"
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Category Badge */}
              <div className="absolute top-2.5 right-2.5 z-10 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[9px] sm:text-xs font-mono font-bold text-white">
                {videoClips[0].category}
              </div>
            </div>

            {/* Info Footer */}
            <div className="bg-[#0a0a0a] p-3 sm:p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-display font-bold text-sm sm:text-base text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4cd2ca]" />
                  {videoClips[0].title}
                </h3>
                <p className="font-body text-gray-400 text-xs mt-0.5">
                  {videoClips[0].description}
                </p>
              </div>
              <span className="font-mono text-[10px] text-[#38d9a9] bg-[#38d9a9]/10 border border-[#38d9a9]/30 px-2.5 py-1 rounded-lg flex items-center gap-1 shrink-0">
                <Check className="w-3 h-3" /> SHIPPED &amp; LIVE
              </span>
            </div>
          </div>

          {/* BENTO TILE 2: UI/UX Mockups Video (5 Cols) */}
          <div className="lg:col-span-5 bg-[#141414] border-3 sm:border-4 border-black rounded-[1.5rem] sm:rounded-[2rem] p-3.5 sm:p-5 neo-shadow flex flex-col justify-between gap-3 relative overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center justify-between bg-[#0a0a0a] border-2 border-white/10 rounded-xl px-3 py-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-black/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-black/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-black/40" />
                </div>
                <span className="font-mono text-[10px] sm:text-xs text-gray-400 truncate">
                  imran.dev/projects/{videoClips[1].id}
                </span>
              </div>
            </div>

            {/* Video Player Container (No Controls) */}
            <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden border border-white/10 sm:border-2 shadow-inner">
              <video
                src={videoClips[1].url}
                className="w-full h-full object-cover pointer-events-none select-none"
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Category Badge */}
              <div className="absolute top-2.5 right-2.5 z-10 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[9px] sm:text-xs font-mono font-bold text-[#ffd600]">
                {videoClips[1].category}
              </div>
            </div>

            {/* Info Footer */}
            <div className="bg-[#0a0a0a] p-3 sm:p-4 rounded-xl border border-white/10">
              <h3 className="font-display font-bold text-sm sm:text-base text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffd600]" />
                {videoClips[1].title}
              </h3>
              <p className="font-body text-gray-400 text-xs mt-0.5">
                {videoClips[1].description}
              </p>
            </div>
          </div>

          {/* BENTO TILE 3: Design Systems Video (5 Cols) */}
          <div className="lg:col-span-5 bg-[#141414] border-3 sm:border-4 border-black rounded-[1.5rem] sm:rounded-[2rem] p-3.5 sm:p-5 neo-shadow flex flex-col justify-between gap-3 relative overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center justify-between bg-[#0a0a0a] border-2 border-white/10 rounded-xl px-3 py-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-black/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-black/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-black/40" />
                </div>
                <span className="font-mono text-[10px] sm:text-xs text-gray-400 truncate">
                  imran.dev/projects/{videoClips[2].id}
                </span>
              </div>
            </div>

            {/* Video Player Container (No Controls) */}
            <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden border border-white/10 sm:border-2 shadow-inner">
              <video
                src={videoClips[2].url}
                className="w-full h-full object-cover pointer-events-none select-none"
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Category Badge */}
              <div className="absolute top-2.5 right-2.5 z-10 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[9px] sm:text-xs font-mono font-bold text-[#ff3b77]">
                {videoClips[2].category}
              </div>
            </div>

            {/* Info Footer */}
            <div className="bg-[#0a0a0a] p-3 sm:p-4 rounded-xl border border-white/10">
              <h3 className="font-display font-bold text-sm sm:text-base text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff3b77]" />
                {videoClips[2].title}
              </h3>
              <p className="font-body text-gray-400 text-xs mt-0.5">
                {videoClips[2].description}
              </p>
            </div>
          </div>

          {/* BENTO TILE 4: Video Specs & Playback Performance (4 Cols) */}
          <div className="lg:col-span-4 bg-[#18181b] border-3 sm:border-4 border-black rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-5 neo-shadow flex flex-col justify-between gap-3">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono font-bold text-[10px] uppercase bg-[#8b5cf6] text-white px-2.5 py-1 rounded-md border border-black">
                  SHOWCASE SPECS
                </span>
                <Monitor className="w-5 h-5 text-[#8b5cf6]" />
              </div>
              <h3 className="font-display font-black text-lg sm:text-xl uppercase text-white mb-2">
                High Performance Playback
              </h3>
              <p className="font-body text-xs text-gray-400 leading-relaxed mb-3">
                Hardware-accelerated HTML5 video rendering with clean autoplay and zero control distraction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#0a0a0a] border border-white/10 p-2.5 rounded-xl text-center">
                <div className="font-display font-black text-lg text-[#4cd2ca]">60 FPS</div>
                <div className="font-mono text-[9px] text-gray-400 uppercase mt-0.5">Smooth Motion</div>
              </div>
              <div className="bg-[#0a0a0a] border border-white/10 p-2.5 rounded-xl text-center">
                <div className="font-display font-black text-lg text-[#ffd600]">1080p HD</div>
                <div className="font-mono text-[9px] text-gray-400 uppercase mt-0.5">High Clarity</div>
              </div>
            </div>
          </div>

          {/* BENTO TILE 5: Tech Craft Badges (3 Cols) */}
          <div className="lg:col-span-3 bg-[#ff3b77] text-white border-3 sm:border-4 border-black rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-5 neo-shadow flex flex-col justify-between gap-3">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono font-bold text-[10px] uppercase bg-black text-white px-2.5 py-1 rounded-md">
                  STACK CRAFT
                </span>
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-black text-lg sm:text-xl uppercase leading-tight mb-2">
                Pixel-Perfect Precision
              </h3>
              <p className="font-body text-xs text-white/90 leading-relaxed">
                Matching design prototypes pixel-for-pixel in production UI code.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border-2 border-black p-2.5 rounded-xl flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold">ACCURACY</span>
              <span className="font-display font-black text-sm text-[#ffd600]">100% MATCH</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
