'use client';

import { useRef } from "react";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { gsap, useGSAP } from "@/lib/gsap";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const popScaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Hero() {
  const lenis = useLenis();
  const heroRef = useRef(null);
  const headlineRef = useRef(null);

  // Smooth Kinetic Typography Entrance Animation using GSAP
  useGSAP(() => {
    if (headlineRef.current) {
      const lines = headlineRef.current.querySelectorAll(".typo-line");
      gsap.fromTo(
        lines,
        { opacity: 0, y: 35, skewY: 1.5 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.1,
          stagger: 0.18,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    }
  }, { scope: heroRef });

  const scrollToContact = (e) => {
    e.preventDefault();
    lenis?.scrollTo('#contact', {
      offset: -80,
      duration: 2,
      easing: (t) => 1 - Math.pow(1 - t, 5),
    });
  };

  return (
    <section id="top" ref={heroRef} className="w-full bg-[#0a0a0a] text-white pt-6 pb-12 px-4 sm:px-8 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8"
      >
        {/* Full-Width Viewport Headline Header */}
        <div className="flex flex-col items-start gap-4 sm:gap-6 w-full">
          {/* Eyebrow badge line */}
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30 font-jakarta text-xs sm:text-sm font-medium tracking-wider uppercase backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
            <span className="text-[#a78bfa]">UI/UX</span>
            <span className="text-[#a78bfa]/50">·</span>
            <span className="text-[#a78bfa]">FRONTEND DEVELOPER</span>
          </motion.div>

          {/* Main Headline - Viewport Spanning & Typography Effects */}
          <div ref={headlineRef} className="select-none w-full">
            <h1 className="leading-[1.05] tracking-tight text-left">
              {/* Line 1: Grey Description Typography */}
              <span className="typo-line block font-jakarta text-zinc-400 font-normal text-2xl sm:text-4xl md:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] 2xl:text-[4.8rem] mb-1 sm:mb-2 transition-colors duration-300 hover:text-zinc-300">
                Ideas deserve better than ordinary websites.
              </span>
              {/* Line 2: Bold White Title Typography with Lavender Highlight */}
              <span className="typo-line block text-white font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[4.6rem] xl:text-[5.4rem] 2xl:text-[6.2rem] mb-2">
                I turn complex problems into{" "}
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="relative inline-flex items-center px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-2xl bg-[#a78bfa]/15 border border-[#a78bfa]/40 backdrop-blur-md shadow-[0_0_25px_rgba(167,139,250,0.3)] font-jakarta font-medium text-[#a78bfa] cursor-pointer group transition-all duration-300 hover:border-[#a78bfa] hover:shadow-[0_0_35px_rgba(167,139,250,0.5)] mx-1"
                >
                  <span className="text-[#a78bfa] font-medium">
                    intuitive
                  </span>
                  <span className="absolute -bottom-1 left-2 right-2 h-[3px] bg-[#a78bfa] rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                </motion.span>{" "}
                experiences.
              </span>
            </h1>
          </div>

          {/* Subtitle Description & Get in Touch Button Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 w-full pt-1 mb-4">
            <motion.p
              variants={fadeUpVariants}
              className="font-jakarta text-zinc-400 font-normal text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-left max-w-xl"
            >
              Through thoughtful design and modern development. Designed with purpose. Built to perform.
            </motion.p>

            {/* Get in Touch Button */}
            <motion.div variants={popScaleVariants} className="shrink-0 self-start md:self-auto">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#a78bfa] text-black font-jakarta font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#b89eff] transition-all duration-300 shadow-[0_0_25px_rgba(167,139,250,0.35)] hover:shadow-[0_0_35px_rgba(167,139,250,0.55)] hover:scale-105 active:scale-95 cursor-pointer border-2 border-[#b89eff] overflow-hidden"
              >
                <span className="relative z-10 font-bold">GET IN TOUCH</span>
                <span className="relative z-10 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Main Grid Graphic Container with Modern Architectural Outer Shape & Spaced Out Stickers */}
        <motion.div
          variants={fadeUpVariants}
          className="relative w-full h-[320px] sm:h-[400px] md:h-[480px]"
        >
          {/* Outer Ambient Backdrop Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/10 to-amber-500/20 rounded-[2.8rem] sm:rounded-[3.8rem] blur-xl opacity-50 pointer-events-none" />

          {/* White Graphic Box with Modern Architectural Dual-Curve Shape */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f9f9fb] to-[#f1f1f5] bg-grid-pattern rounded-[2.2rem] sm:rounded-[3.2rem] lg:rounded-[3.8rem] rounded-tr-[70px] sm:rounded-tr-[120px] lg:rounded-tr-[150px] rounded-bl-[40px] sm:rounded-bl-[70px] lg:rounded-bl-[90px] border-3 border-black text-black overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] transition-all duration-300">
            {/* Soft Ambient Inner Highlight */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.8),transparent_70%)] pointer-events-none" />

            {/* Main Subject Photo (hero-thumb.png) - Dominant centered hero subject */}
            <div className="absolute bottom-0 left-1/2 lg:left-[35%] -translate-x-1/2 h-full z-20 flex items-end pointer-events-none">
              <img
                src="/hero-thumb.png"
                alt="Imran - UI-UX & Frontend Developer"
                className="h-[270px] sm:h-[350px] md:h-[430px] object-contain object-bottom drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)] select-none"
              />
            </div>
          </div>


          {/* Sticker 1: DESIGN STRATEGY (Top-Left Circular Cyan Badge) */}
          <motion.div
            className="absolute top-3 sm:top-6 left-2 sm:left-6 md:left-8 z-30 bg-[#4cd2ca] border-2 sm:border-3 border-black text-black rounded-full w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 p-1 sm:p-2.5 flex flex-col items-center justify-center text-center neo-shadow-sm cursor-pointer select-none -rotate-6"
            whileHover={{ scale: 1.08, rotate: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex gap-0.5 mb-0.5 text-black">
              <div className="w-2 h-2 sm:w-3.5 sm:h-3.5 rounded-full border border-black sm:border-2 bg-black" />
              <div className="w-2 h-2 sm:w-3.5 sm:h-3.5 rounded-full border border-black sm:border-2 bg-transparent -ml-1 sm:-ml-1.5" />
            </div>
            <span className="font-display font-black text-[7px] sm:text-[10px] md:text-xs uppercase tracking-tight leading-none mb-0.5">
              DESIGN<br />STRATEGY
            </span>
            <span className="font-mono text-[5.5px] sm:text-[8px] leading-tight uppercase opacity-90 hidden sm:block">
              ALIGNING<br />YOUR → BUSINESS<br />&amp; USER NEEDS
            </span>
          </motion.div>

          {/* Sticker 2: E-COMM. WWW. EXPERIENCES (Mid-Left Yellow Pill Badge) */}
          <motion.div
            className="absolute top-[40%] sm:top-[40%] left-2 sm:left-6 md:left-8 z-30 bg-[#ffd600] border-2 sm:border-3 border-black text-black rounded-lg sm:rounded-xl px-2 sm:px-3.5 py-1 sm:py-2 neo-shadow-sm cursor-pointer select-none -rotate-6"
            whileHover={{ scale: 1.08, rotate: -2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center gap-0.5 sm:gap-1 font-display font-black text-[7px] sm:text-xs uppercase">
              <span>E-COMM.</span>
              <span className="bg-black text-white px-1 sm:px-1.5 py-0.5 rounded text-[6px] sm:text-[9px] font-mono">WWW.✦</span>
            </div>
            <div className="font-display font-black text-[7px] sm:text-xs uppercase tracking-tight flex items-center gap-0.5">
              <span className="text-[7px] sm:text-[10px]">⬡</span> EXPERIENCES
            </div>
          </motion.div>

          {/* Sticker 3: MOTION & INTERACTION DESIGN (Bottom-Left Orange Badge) */}
          <motion.div
            className="absolute bottom-3 sm:bottom-6 left-2 sm:left-6 md:left-10 z-30 bg-[#ff6b00] border-2 sm:border-3 border-black text-white rounded-lg sm:rounded-xl p-1.5 sm:p-3.5 max-w-[100px] sm:max-w-[170px] md:max-w-[190px] neo-shadow-sm cursor-pointer select-none -rotate-3"
            whileHover={{ scale: 1.08, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="font-display font-black text-[8px] sm:text-xs md:text-sm uppercase leading-tight tracking-tight">
              M<span className="inline-block w-1.5 sm:w-2.5 h-0.5 bg-white mx-0.5 mb-0.5" />TION &amp;<br />INTERACTION<br />→ DESIGN
            </div>
          </motion.div>

          {/* Sticker 4: USER EXPERIENCE DESIGN (Top-Center Pink Sticker) */}
          <motion.div
            className="absolute top-3 sm:top-6 left-[50%] sm:left-[35%] md:left-[50%] -translate-x-1/2 sm:translate-x-0 z-30 bg-[#ff3b77] border-2 sm:border-3 border-black text-white rounded-lg sm:rounded-xl px-2 sm:px-4 py-1 sm:py-2.5 neo-shadow-sm cursor-pointer select-none -rotate-6"
            whileHover={{ scale: 1.08, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="font-display font-black text-[7.5px] sm:text-xs md:text-sm uppercase leading-tight tracking-tight text-center">
              USER<br />EXPER—IENCE<br />DESIGN©
            </div>
          </motion.div>

          {/* Sticker 5: BRANDING & VISUAL COMMUNICATION (Top-Right Purple Sticker) */}
          <motion.div
            className="absolute top-3 sm:top-6 right-8 sm:right-16 md:right-24 z-30 bg-[#8b5cf6] border-2 sm:border-3 border-black text-white rounded-lg sm:rounded-xl px-2 sm:px-4 py-1 sm:py-2.5 neo-shadow-sm cursor-pointer select-none rotate-3"
            whileHover={{ scale: 1.08, rotate: -2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="font-display font-black text-[7.5px] sm:text-xs md:text-sm uppercase leading-tight tracking-tight">
              BRANDING &amp;<br />
              VISUAL<br />
              COMMUNICATION ✦
            </div>
          </motion.div>

          {/* Sticker 6: BRANDING & IDENTITY ©'26 (Mid-Right Teal Angled Badge - Popping out over rounded-tr edge) */}
          <motion.div
            className="absolute top-[34%] sm:top-[32%] right-[-10px] sm:right-[-20px] md:right-[-28px] z-30 bg-[#38d9a9] border-2 sm:border-3 border-black text-black rounded-lg sm:rounded-xl px-2.5 sm:px-5 py-1.5 sm:py-3 neo-shadow-sm cursor-pointer select-none rotate-12"
            whileHover={{ scale: 1.08, rotate: 6 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="font-display font-black text-[7.5px] sm:text-xs md:text-sm uppercase leading-tight flex flex-col">
              <span>BRANDING &amp;</span>
              <span>IDENTITY</span>
              <span className="font-mono text-[6px] sm:text-[9px] text-right mt-0.5">©'26 ✦</span>
            </div>
          </motion.div>

          {/* Sticker 7: DIGITAL MARKETING (Lower-Mid Right Orange Badge) */}
          <motion.div
            className="absolute top-[64%] sm:top-[60%] right-[14%] sm:right-[20%] md:right-[22%] z-30 bg-[#ff9f43] border-2 sm:border-3 border-black text-black rounded-lg sm:rounded-xl px-1.5 sm:px-3.5 py-0.5 sm:py-2 neo-shadow-sm cursor-pointer select-none -rotate-6 flex flex-col"
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center gap-0.5 sm:gap-1 font-display font-black text-[6.5px] sm:text-xs uppercase">
              <span>DIGITAL</span>
              <span className="bg-black text-white px-1 sm:px-1.5 py-0.5 rounded text-[5.5px] sm:text-[8px] font-mono">GROWTH 🚀</span>
            </div>
            <div className="font-display font-black text-[7px] sm:text-xs uppercase tracking-tight">
              MARKETING
            </div>
          </motion.div>

          {/* Sticker 8: USABILITY TESTING Circular Stamp (Bottom-Right Green Stamp - Popping out over bottom edge) */}
          <motion.div
            className="absolute bottom-[-16px] sm:bottom-[-24px] right-[10%] sm:right-[15%] md:right-[18%] z-30 bg-[#9be53c] border-2 sm:border-3 border-black text-black rounded-full w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 p-1 sm:p-2 flex items-center justify-center neo-shadow-sm cursor-pointer select-none -rotate-6"
            whileHover={{ scale: 1.1, rotate: 15 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
              <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full border sm:border-2 border-black flex items-center justify-center bg-transparent mb-0.5">
                <span className="text-[9px] sm:text-sm">🌐</span>
              </div>
              <span className="font-mono font-bold text-[6px] sm:text-[8px] uppercase tracking-tight leading-none px-0.5">
                USABILITY TESTING
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

