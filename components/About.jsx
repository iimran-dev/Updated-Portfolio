'use client';

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Layers,
  Zap,
  Check,
  Copy,
  Code2,
  Palette,
  Flame,
  Layout,
  ExternalLink
} from "lucide-react";

export function About() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [copiedColor, setCopiedColor] = useState(null);
  const [physicsBounce, setPhysicsBounce] = useState(0);

  const videoRef = useRef(null);

  const videoClips = [
    {
      id: "frontend-apps",
      title: "Production Frontend Projects & Web Apps",
      tag: "FRONTEND APPS",
      category: "React 19 & Next.js 15",
      url: "https://assets.mixkit.co/videos/preview/mixkit-code-animation-web-development-42774-large.mp4",
      duration: "0:24",
      description: "Interactive web applications built with Next.js, responsive layouts, dynamic state, and zero-latency UI.",
      accentColor: "#4cd2ca",
    },
    {
      id: "uiux-design",
      title: "UI/UX & Interactive Design Mockups",
      tag: "UI/UX DESIGNS",
      category: "Figma & Visual Systems",
      url: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-42892-large.mp4",
      duration: "0:38",
      description: "High-fidelity visual design, user flow wireframing, responsive grids, and interactive component prototypes.",
      accentColor: "#ffd600",
    },
    {
      id: "design-system",
      title: "Design Systems & Custom UI Components",
      tag: "DESIGN SYSTEMS",
      category: "Tailwind & Motion",
      url: "https://assets.mixkit.co/videos/preview/mixkit-hand-holding-a-smartphone-with-green-screen-41527-large.mp4",
      duration: "0:45",
      description: "Atomic components, standardized color schemes, and responsive grid layouts mapped pixel-for-pixel.",
      accentColor: "#ff3b77",
    },
  ];

  const currentClip = videoClips[activeVideoIndex];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [activeVideoIndex]);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * (videoRef.current.duration || 1);
    videoRef.current.currentTime = newTime;
    setProgress((clickX / width) * 100);
  };

  const copyColorHex = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  const triggerPhysicsAnimation = () => {
    setPhysicsBounce((prev) => prev + 1);
  };

  const colorPalette = [
    { name: "Cyan Teal", hex: "#4cd2ca" },
    { name: "Neon Yellow", hex: "#ffd600" },
    { name: "Hot Pink", hex: "#ff3b77" },
    { name: "Electric Purple", hex: "#8b5cf6" },
  ];

  return (
    <section id="about" className="w-full bg-[#0a0a0a] text-white py-12 sm:py-20 md:py-24 px-3 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-10">

        {/* Section Header & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-white/10 pb-6 sm:pb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#ffd600] text-black font-mono font-bold text-[10px] sm:text-xs px-2.5 py-1 rounded-md border-2 border-black neo-shadow-sm mb-3 sm:mb-4 uppercase">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              FRONTEND &amp; UI/UX SHOWCASE
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[0.95] sm:leading-none">
              BUILDING INTERFACES.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cd2ca] via-[#ffd600] to-[#ff3b77]">
                CRAFTING EXPERIENCES.
              </span>
            </h2>
          </div>

          <p className="font-body text-gray-300 text-xs sm:text-sm md:text-base max-w-md leading-relaxed">
            Explore real showcase previews of my frontend web applications, interactive React components, and pixel-perfect UI/UX design systems.
          </p>
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">

          {/* MAIN FEATURE TILE: Autoplay Video Showcase (8 Cols) */}
          <div className="lg:col-span-8 bg-[#141414] border-3 sm:border-4 border-black rounded-[1.5rem] sm:rounded-[2rem] p-3.5 sm:p-6 neo-shadow flex flex-col justify-between gap-3 sm:gap-4 relative overflow-hidden">
            
            {/* Window Top Bar & Switcher Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-[#0a0a0a] border-2 border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              
              <div className="flex items-center justify-between sm:justify-start gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] border border-black/40" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] border border-black/40" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] border border-black/40" />
                </div>
                <span className="ml-1 sm:ml-2 font-mono text-[10px] sm:text-xs text-gray-400 truncate max-w-[140px] sm:max-w-[200px]">
                  imran.dev/projects/{currentClip.id}
                </span>
              </div>

              {/* Clip Switcher Tabs (Scrollable on mobile) */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 sm:pb-0 scrollbar-none shrink-0">
                {videoClips.map((clip, idx) => (
                  <button
                    key={clip.id}
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`font-display font-bold text-[9px] sm:text-xs px-2 sm:px-3 py-1 rounded-lg border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      activeVideoIndex === idx
                        ? "bg-white text-black border-white shadow-sm"
                        : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    0{idx + 1}. {clip.tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Viewport (Autoplay, Loop, Muted) */}
            <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden border border-white/10 sm:border-2 shadow-inner">
              
              <video
                ref={videoRef}
                src={currentClip.url}
                className="w-full h-full object-cover pointer-events-none"
                autoPlay
                loop
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
              />

              {/* Floating Category Badge Top Right */}
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 flex items-center gap-1.5 bg-black/85 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border border-white/20 text-[9px] sm:text-xs font-mono">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="text-white font-bold truncate max-w-[130px] sm:max-w-[170px]">{currentClip.category}</span>
              </div>

              {/* Bottom Minimal Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-2.5 sm:p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-1 sm:gap-1.5">
                <div
                  onClick={handleSeek}
                  className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full overflow-hidden cursor-pointer transition-all relative"
                >
                  <div
                    className="h-full transition-all duration-100"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: currentClip.accentColor,
                    }}
                  />
                </div>

                <div className="flex items-center justify-between text-[9.5px] sm:text-[11px] font-mono text-gray-300 gap-2">
                  <span className="flex items-center gap-1 text-white font-bold shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38d9a9] shrink-0" />
                    AUTOPLAY
                  </span>
                  <span className="truncate max-w-[160px] sm:max-w-[320px] text-right">{currentClip.title}</span>
                </div>
              </div>
            </div>

            {/* Video Meta Info & Description */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 bg-[#0a0a0a] p-3 sm:p-4 rounded-xl border border-white/10 min-h-[76px] sm:min-h-[84px]">
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-sm sm:text-base md:text-lg text-white flex items-center gap-1.5 sm:gap-2 truncate">
                  <span
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full inline-block shrink-0"
                    style={{ backgroundColor: currentClip.accentColor }}
                  />
                  <span className="truncate">{currentClip.title}</span>
                </h3>
                <p className="font-body text-gray-400 text-[11px] sm:text-xs md:text-sm mt-0.5 line-clamp-2 sm:line-clamp-1">
                  {currentClip.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="font-mono text-[10px] sm:text-xs text-[#38d9a9] bg-[#38d9a9]/10 border border-[#38d9a9]/30 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg flex items-center gap-1">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> SHIPPED &amp; LIVE
                </span>
              </div>
            </div>

          </div>

          {/* SIDE TILE 1: UI/UX & Design Architecture (4 Cols) */}
          <div className="lg:col-span-4 bg-[#4cd2ca] text-black border-3 sm:border-4 border-black rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 neo-shadow flex flex-col justify-between gap-4 sm:gap-6 relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="font-mono font-bold text-[10px] sm:text-xs uppercase bg-black text-white px-2 sm:px-2.5 py-1 rounded-md">
                  UI/UX ARCHITECTURE
                </span>
                <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl uppercase leading-tight mb-1.5 sm:mb-2">
                Figma Tokens &amp;<br />Color Architecture
              </h3>

              <p className="font-body text-xs sm:text-sm text-black/80 leading-relaxed mb-3 sm:mb-4">
                Structured Figma design systems with strict design tokens, accessible color palettes, and component hierarchy.
              </p>

              {/* Swatch Grid */}
              <div className="grid grid-cols-2 gap-2">
                {colorPalette.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => copyColorHex(color.hex)}
                    className="flex items-center justify-between p-2 rounded-xl bg-black/10 border-2 border-black hover:bg-black hover:text-white transition-all cursor-pointer group/swatch text-left"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-black shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="font-mono text-[10px] sm:text-[11px] font-bold">
                        {copiedColor === color.hex ? "COPIED!" : color.hex}
                      </span>
                    </div>
                    <Copy className="w-3 h-3 opacity-60 group-hover/swatch:opacity-100" />
                  </button>
                ))}
              </div>
            </div>

            {/* Typography Scale Box */}
            <div className="bg-white border-2 sm:border-3 border-black p-3 sm:p-3.5 rounded-xl neo-shadow-sm">
              <div className="font-mono text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase mb-0.5">
                UI TYPOGRAPHY SYSTEM
              </div>
              <div className="font-display font-black text-base sm:text-lg text-black leading-none">
                Space Grotesk
              </div>
              <div className="font-body text-[11px] sm:text-xs text-gray-700 mt-1">
                Inter &amp; JetBrains Mono for Code
              </div>
            </div>
          </div>

          {/* LOWER TILE 1: Physics & Interaction Motion (4 Cols) */}
          <div className="lg:col-span-4 bg-[#ffd600] text-black border-3 sm:border-4 border-black rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 neo-shadow flex flex-col justify-between gap-3 sm:gap-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono font-bold text-[10px] sm:text-xs uppercase bg-black text-white px-2 sm:px-2.5 py-1 rounded-md">
                  INTERACTION LAB
                </span>
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl uppercase leading-tight mb-1.5 sm:mb-2">
                Physics-Based Motion
              </h3>

              <p className="font-body text-xs sm:text-sm text-black/80 leading-relaxed">
                Tactile spring physics and micro-interactions built with Motion, tuned for smooth performance on desktop and touch devices.
              </p>
            </div>

            {/* Interactive Physics Demo Box */}
            <div className="bg-black text-white p-3 sm:p-4 rounded-xl border-2 sm:border-3 border-black flex flex-col gap-2.5 sm:gap-3">
              <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-gray-400">
                <span>SPRING STIFFNESS</span>
                <span className="text-[#ffd600] font-bold">300 DAMPING 20</span>
              </div>

              <div className="flex items-center justify-center py-3 sm:py-4 bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden relative">
                <motion.div
                  key={physicsBounce}
                  animate={{
                    scale: [1, 1.35, 0.9, 1.1, 1],
                    rotate: [0, -12, 12, -4, 0],
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  className="bg-[#ff3b77] text-white border-2 border-black font-display font-black text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl neo-shadow-sm select-none cursor-pointer flex items-center gap-1.5"
                  onClick={triggerPhysicsAnimation}
                >
                  <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> TEST UI PHYSICS!
                </motion.div>
              </div>

              <button
                onClick={triggerPhysicsAnimation}
                className="w-full bg-[#ffd600] text-black font-display font-bold text-[11px] sm:text-xs py-2 rounded-lg border-2 border-black hover:bg-white transition-colors cursor-pointer text-center uppercase"
              >
                Trigger Motion Impulse ⚡
              </button>
            </div>
          </div>

          {/* LOWER TILE 2: Frontend Tech Stack (4 Cols) */}
          <div className="lg:col-span-4 bg-[#18181b] text-white border-3 sm:border-4 border-black rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 neo-shadow flex flex-col justify-between gap-3 sm:gap-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono font-bold text-[10px] sm:text-xs uppercase bg-[#8b5cf6] text-white px-2 sm:px-2.5 py-1 rounded-md border border-black">
                  FRONTEND STACK
                </span>
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#8b5cf6]" />
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl uppercase leading-tight mb-1.5 sm:mb-2 text-white">
                Frontend Tech &amp; Tools
              </h3>

              <p className="font-body text-xs sm:text-sm text-gray-400 leading-relaxed mb-3 sm:mb-4">
                Production-ready stack ensuring scalable code architectures, clean component layout, and optimized user performance.
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  { name: "React 19", bg: "bg-[#2563eb]", text: "text-white" },
                  { name: "Next.js 15", bg: "bg-white", text: "text-black" },
                  { name: "Motion", bg: "bg-[#ff3b77]", text: "text-white" },
                  { name: "Tailwind CSS", bg: "bg-[#38d9a9]", text: "text-black" },
                  { name: "Lenis Scroll", bg: "bg-[#ffd600]", text: "text-black" },
                  { name: "Supabase", bg: "bg-[#3ecf8e]", text: "text-black" },
                  { name: "Figma UI/UX", bg: "bg-[#8b5cf6]", text: "text-white" },
                ].map((tag) => (
                  <span
                    key={tag.name}
                    className={`font-mono text-[10.5px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border-2 border-black ${tag.bg} ${tag.text} neo-shadow-sm cursor-default`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 p-2.5 sm:p-3 rounded-xl flex items-center justify-between text-[10px] sm:text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-green-400" /> 100% Lighthouse Score
              </span>
              <span className="text-white font-bold">0.2s LCP</span>
            </div>
          </div>

          {/* LOWER TILE 3: Metrics & Craft (4 Cols) */}
          <div className="lg:col-span-4 bg-[#ff3b77] text-white border-3 sm:border-4 border-black rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 neo-shadow flex flex-col justify-between gap-3 sm:gap-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono font-bold text-[10px] sm:text-xs uppercase bg-black text-white px-2 sm:px-2.5 py-1 rounded-md">
                  CRAFT &amp; STATS
                </span>
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl uppercase leading-tight mb-1.5 sm:mb-2">
                Design to Code Match
              </h3>

              <p className="font-body text-xs sm:text-sm text-white/90 leading-relaxed">
                Closing the gap between design concepts and shipping code that matches mockups pixel-for-pixel.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
              <div className="bg-black/30 backdrop-blur-sm border-2 border-black rounded-xl p-2 sm:p-3">
                <div className="font-display font-black text-xl sm:text-2xl text-white">3+</div>
                <div className="font-mono text-[9px] sm:text-[10px] text-white/80 uppercase mt-0.5">Projects</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border-2 border-black rounded-xl p-2 sm:p-3">
                <div className="font-display font-black text-xl sm:text-2xl text-[#ffd600]">100%</div>
                <div className="font-mono text-[9px] sm:text-[10px] text-white/80 uppercase mt-0.5">Pixel Match</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border-2 border-black rounded-xl p-2 sm:p-3">
                <div className="font-display font-black text-xl sm:text-2xl text-[#38d9a9]">60</div>
                <div className="font-mono text-[9px] sm:text-[10px] text-white/80 uppercase mt-0.5">FPS Motion</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
