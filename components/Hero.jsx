'use client';

import { motion } from "motion/react";
import { useLenis } from "lenis/react";

export function Hero() {
  const lenis = useLenis();

  const scrollToContact = (e) => {
    e.preventDefault();
    lenis?.scrollTo('#contact', {
      offset: -80,
      duration: 2,
      easing: (t) => 1 - Math.pow(1 - t, 5),
    });
  };

  return (
    <section id="top" className="w-full bg-[#0a0a0a] text-white pt-6 pb-12 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">

        {/* Giant Title & Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-6 w-full">
          <div>
            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-[7rem] xl:text-[8.5rem] leading-[0.85] tracking-tight uppercase text-white/95 select-none text-left">
              UI-UX &amp;<br/>FRONTEND DEVELOPER
            </h1>
          </div>

          <div className="flex flex-col justify-between items-start lg:items-end gap-4 shrink-0 max-w-md">
            <p className="leading-relaxed text-gray-300 text-left lg:text-right font-body text-xs sm:text-sm md:text-base pt-1 sm:pt-2">
              I turn ideas into interfaces<br/>combining design, code, and visual storytelling<br/>to build digital experiences that stand out.
            </p>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 font-display font-bold text-white uppercase text-sm sm:text-base tracking-wider border-b-2 border-white pb-1 hover:text-lime-400 hover:border-lime-400 transition-colors"
            >
              GET IN TOUCH <span className="group-hover:translate-x-1.5 transition-transform">→</span>
            </a>
          </div>
        </div>

       
       

        {/* Main Grid Graphic Container with Spaced Out Elements & Popped Out Stickers */}
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px]">

          {/* White Graphic Box with Top-Right Arch Curve matching reference */}
          <div className="absolute inset-0 bg-white bg-grid-pattern rounded-[2rem] sm:rounded-[2.5rem] rounded-tr-[100px] sm:rounded-tr-[160px] md:rounded-tr-[220px] border-4 border-black text-black overflow-hidden shadow-2xl">
            {/* Main Subject Photo (hero-thumb.png) - Dominant centered hero subject */}
            <div className="absolute bottom-0 left-1/2 lg:left-[35%] -translate-x-1/2 h-full z-20 flex items-end pointer-events-none">
              <img
                src="/hero-thumb.png"
                alt="Imran - UI-UX & Frontend Developer"
                className="h-[270px] sm:h-[350px] md:h-[430px] object-contain object-bottom drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)] select-none"
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

        </div>
      </div>
    </section>
  );
}
