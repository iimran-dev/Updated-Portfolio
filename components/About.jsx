'use client';

import { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Zap,
  Check,
  Copy,
  Code2,
  Palette,
  Flame,
  Film,
  Cpu,
  Gauge,
} from "lucide-react";

const videoClips = [
  {
    id: "frontend-apps",
    title: "Production Frontend Projects & Web Apps",
    badge: "React 19 & Next.js 15",
    tabLabel: "Web Apps",
    url: "https://assets.mixkit.co/videos/preview/mixkit-code-animation-web-development-42774-large.mp4",
    description: "Interactive web applications built with Next.js, responsive layouts, dynamic state management, and zero-latency UI performance.",
  },
  {
    id: "uiux-design",
    title: "UI/UX & Interactive Design Mockups",
    badge: "Figma & Visual Systems",
    tabLabel: "UI/UX Design",
    url: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-42892-large.mp4",
    description: "High-fidelity visual design systems, user flow wireframing, responsive grids, and interactive component prototypes.",
  },
  {
    id: "design-system",
    title: "Design Systems & Custom UI Components",
    badge: "Tailwind & Motion",
    tabLabel: "Design Systems",
    url: "https://assets.mixkit.co/videos/preview/mixkit-hand-holding-a-smartphone-with-green-screen-41527-large.mp4",
    description: "Atomic design components, standardized token architectures, and responsive layouts mapped pixel-for-pixel.",
  },
];

export function About() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [copiedColor, setCopiedColor] = useState(null);
  const [physicsBounce, setPhysicsBounce] = useState(0);

  const activeVideo = videoClips[activeVideoIndex];

  const copyColorHex = (hex) => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(hex);
    }
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  const triggerPhysicsAnimation = () => {
    setPhysicsBounce((prev) => prev + 1);
  };

  const colorPalette = [
    { name: "Cyan Teal", hex: "#4cd2ca" },
    { name: "Electric Indigo", hex: "#6366f1" },
    { name: "Purple Violet", hex: "#a855f7" },
    { name: "Emerald Mint", hex: "#10b981" },
  ];

  return (
    <section id="about" className="w-full bg-[#08080a] text-zinc-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12 relative z-10">

        {/* Section Header & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-mono font-medium text-cyan-400 backdrop-blur-md mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              FRONTEND ARCHITECTURE &amp; SHOWCASE
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.05]">
              ENGINEERING INTERFACES.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                CRAFTING EXPERIENCES.
              </span>
            </h2>
          </div>

          <p className="font-body text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Discover design system architecture, physics-driven micro-interactions, live video showcase previews, and pixel-perfect design-to-code execution.
          </p>
        </div>

        {/* Unified Bento Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* MAIN BENTO ROW: Split Side-by-Side (Video on Left, Description on Right) */}
          
          {/* SIDE A: Video Showcase Card (7 Cols) */}
          <div className="lg:col-span-7 bg-zinc-900/40 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 rounded-3xl p-5 sm:p-7 transition-all duration-300 flex flex-col justify-between gap-5 relative overflow-hidden group shadow-2xl">
            {/* Subtle ambient glow */}
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Video Header & Tab Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Film className="w-5 h-5 text-cyan-400" />
                <span className="font-mono font-semibold text-xs text-zinc-300 uppercase tracking-wider">
                  Interactive Video Showcase
                </span>
              </div>

              {/* Video Selector Tabs */}
              <div className="flex items-center gap-1 bg-zinc-950/80 p-1 rounded-xl border border-white/[0.08]">
                {videoClips.map((clip, idx) => (
                  <button
                    key={clip.id}
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg font-mono text-[11px] sm:text-xs transition-all duration-200 cursor-pointer ${
                      activeVideoIndex === idx
                        ? "bg-zinc-800 text-white font-medium shadow-sm border border-white/10"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {clip.tabLabel}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Mockup Frame */}
            <div className="flex flex-col gap-3">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between bg-zinc-950/80 border border-white/[0.08] rounded-2xl px-4 py-2.5">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-xs text-zinc-500 truncate pl-1">
                    imran.dev/showcase/{activeVideo.id}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  LIVE PREVIEW
                </span>
              </div>

              {/* Video Player Container */}
              <div className="relative aspect-video w-full bg-black rounded-2xl overflow-hidden border border-white/10 shadow-inner group/video">
                <video
                  key={activeVideo.id}
                  src={activeVideo.url}
                  className="w-full h-full object-cover pointer-events-none select-none transition-opacity duration-300"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3 z-10 bg-zinc-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono font-medium text-cyan-300">
                  {activeVideo.badge}
                </div>
              </div>
            </div>

            {/* Video Footer Info */}
            <div className="bg-zinc-950/60 p-4 rounded-2xl border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-semibold text-sm sm:text-base text-zinc-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  {activeVideo.title}
                </h3>
                <p className="font-body text-zinc-400 text-xs mt-1 leading-relaxed">
                  {activeVideo.description}
                </p>
              </div>
              <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg flex items-center gap-1.5 shrink-0">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> SHIPPED &amp; LIVE
              </span>
            </div>
          </div>

          {/* SIDE B: Description & Design System Architecture Card (5 Cols) */}
          <div className="lg:col-span-5 bg-zinc-900/40 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 rounded-3xl p-5 sm:p-7 transition-all duration-300 flex flex-col justify-between gap-6 relative overflow-hidden group shadow-2xl">
            {/* Ambient glow */}
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono font-semibold text-xs text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  UI/UX ARCHITECTURE
                </span>
                <Palette className="w-5 h-5 text-indigo-400" />
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-zinc-100 tracking-tight mb-2">
                Figma Tokens &amp;<br />Color Architecture
              </h3>

              <p className="font-body text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                Structured Figma design systems with strict design tokens, accessible color palettes, and component hierarchy mapped directly to frontend code.
              </p>

              {/* Interactive Color Swatch Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {colorPalette.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => copyColorHex(color.hex)}
                    className="flex items-center justify-between p-3 rounded-2xl bg-zinc-950/70 border border-white/[0.08] hover:border-white/20 hover:bg-zinc-900 transition-all cursor-pointer group/swatch text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-4 h-4 rounded-full border border-white/20 shrink-0 shadow-sm"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex flex-col">
                        <span className="font-mono text-[11px] font-semibold text-zinc-200">
                          {copiedColor === color.hex ? "COPIED!" : color.hex}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-body">
                          {color.name}
                        </span>
                      </div>
                    </div>
                    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover/swatch:text-zinc-300 transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            {/* Typography Scale Card */}
            <div className="bg-zinc-950/70 border border-white/[0.08] p-4 rounded-2xl flex flex-col gap-1">
              <div className="font-mono text-[10px] font-semibold text-zinc-500 uppercase tracking-wider flex items-center justify-between">
                <span>UI TYPOGRAPHY SYSTEM</span>
                <span className="text-indigo-400">VARIABLE FONTS</span>
              </div>
              <div className="font-display font-bold text-lg text-zinc-100">
                Space Grotesk
              </div>
              <div className="font-body text-xs text-zinc-400">
                Inter (Body) &amp; JetBrains Mono (Code &amp; Specs)
              </div>
            </div>
          </div>

          {/* SECONDARY BENTO ROW: 3 Equal Bento Cards (4 Cols Each) */}

          {/* Bento Card 1: Physics & Interaction Motion */}
          <div className="lg:col-span-4 bg-zinc-900/40 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between gap-5 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono font-semibold text-xs text-amber-400 uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  INTERACTION LAB
                </span>
                <Zap className="w-5 h-5 text-amber-400" />
              </div>

              <h3 className="font-display font-bold text-xl text-zinc-100 mb-2">
                Physics-Based Motion
              </h3>

              <p className="font-body text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Tactile spring physics and micro-interactions built with Motion engine, tuned for 60fps performance on all devices.
              </p>
            </div>

            {/* Motion Impulse Interactive Box */}
            <div className="bg-zinc-950/70 p-4 rounded-2xl border border-white/[0.08] flex flex-col gap-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>SPRING STIFFNESS</span>
                <span className="text-amber-400 font-semibold">350 • DAMPING 15</span>
              </div>

              <div className="flex items-center justify-center py-4 bg-zinc-900/90 rounded-xl border border-white/[0.06] overflow-hidden relative">
                <motion.div
                  key={physicsBounce}
                  animate={{
                    scale: [0.88, 1],
                    rotate: [-12, 0],
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 font-display font-bold text-xs px-4 py-2 rounded-xl shadow-lg select-none cursor-pointer flex items-center gap-2"
                  onClick={triggerPhysicsAnimation}
                >
                  <Flame className="w-4 h-4 text-zinc-950" /> TEST UI IMPULSE!
                </motion.div>
              </div>

              <button
                onClick={triggerPhysicsAnimation}
                className="w-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 font-mono text-xs py-2 rounded-xl border border-white/10 transition-colors cursor-pointer text-center uppercase tracking-wider font-semibold"
              >
                Trigger Motion Impulse ⚡
              </button>
            </div>
          </div>

          {/* Bento Card 2: Frontend Tech & Tools */}
          <div className="lg:col-span-4 bg-zinc-900/40 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between gap-5 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono font-semibold text-xs text-purple-400 uppercase tracking-wider bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                  FRONTEND STACK
                </span>
                <Code2 className="w-5 h-5 text-purple-400" />
              </div>

              <h3 className="font-display font-bold text-xl text-zinc-100 mb-2">
                Tech &amp; Tooling Stack
              </h3>

              <p className="font-body text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                Production-ready tech stack ensuring scalable architecture, clean component modularity, and rapid load speed.
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "React 19" },
                  { name: "Next.js 15" },
                  { name: "Motion" },
                  { name: "Tailwind CSS" },
                  { name: "Lenis Scroll" },
                  { name: "Supabase" },
                  { name: "Figma UI/UX" },
                ].map((tag) => (
                  <span
                    key={tag.name}
                    className="font-mono text-xs font-medium px-3 py-1.5 rounded-xl border border-white/10 bg-zinc-950/70 text-zinc-300 cursor-default hover:border-purple-500/40 transition-colors"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-950/70 border border-white/[0.08] p-3.5 rounded-2xl flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-emerald-400" /> Lighthouse Rating
              </span>
              <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                100% SCORE
              </span>
            </div>
          </div>

          {/* Bento Card 3: Metrics & Craft Precision */}
          <div className="lg:col-span-4 bg-zinc-900/40 backdrop-blur-xl border border-white/[0.08] hover:border-white/20 rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between gap-5 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono font-semibold text-xs text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  CRAFT &amp; PERFORMANCE
                </span>
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>

              <h3 className="font-display font-bold text-xl text-zinc-100 mb-2">
                Engineering Metrics
              </h3>

              <p className="font-body text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Closing the gap between design concepts and shipping production code that matches mockups pixel-for-pixel.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-zinc-950/70 border border-white/[0.08] rounded-2xl p-3">
                <div className="font-display font-bold text-xl text-zinc-100">0.2s</div>
                <div className="font-mono text-[10px] text-zinc-500 uppercase mt-1">LCP Speed</div>
              </div>
              <div className="bg-zinc-950/70 border border-white/[0.08] rounded-2xl p-3">
                <div className="font-display font-bold text-xl text-cyan-400">100%</div>
                <div className="font-mono text-[10px] text-zinc-500 uppercase mt-1">Pixel Match</div>
              </div>
              <div className="bg-zinc-950/70 border border-white/[0.08] rounded-2xl p-3">
                <div className="font-display font-bold text-xl text-emerald-400">60</div>
                <div className="font-mono text-[10px] text-zinc-500 uppercase mt-1">FPS Motion</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

