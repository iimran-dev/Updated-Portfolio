'use client';

import Image from "next/image";
import { useLenis } from "lenis/react";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  const lenis = useLenis();

  const scrollToSection = (e, target) => {
    e.preventDefault();
    lenis?.scrollTo(target, {
      offset: -40,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
  };

  return (
    <section id="top" className="w-full pt-10 sm:pt-16 pb-20 sm:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Eyebrow Descriptor */}
        <div className="mb-6 sm:mb-8">
          <p className="eyebrow flex items-center gap-2 text-[#858585]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            <span>Product Partner</span>
            <span className="text-[#BFBFB8]">·</span>
            <span>Design Systems &amp; Frontend Engineering</span>
          </p>
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-5xl mb-8 sm:mb-12">
          <h1 className="display-headline text-[#111111] font-bold">
            I shape digital products through strategic clarity and engineering precision.
          </h1>
        </div>

        {/* Supporting Statement & Actions (Asymmetric Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 sm:pb-16 border-b border-[#DDDDD8]">
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#555555] leading-relaxed max-w-2xl">
              From early product ambiguity to production-ready software — unifying user research, 
              editorial UX, and performant Next.js code into seamless digital experiences.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-4 lg:justify-end">
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, "#work")}
              className="btn-primary w-full sm:w-auto"
            >
              <span>View Selected Work</span>
              <ArrowRight size={15} />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="btn-secondary w-full sm:w-auto text-center"
            >
              <span>Start a Conversation</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Presentation featuring Imran */}
        <div className="mt-12 sm:mt-16">
          <div className="relative w-full rounded-md border border-[#DDDDD8] bg-[#FFFFFF] overflow-hidden shadow-xs">
            
            {/* Editorial Top Bar Indicator */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-[#DDDDD8] bg-[#FAFAF8] text-xs font-mono text-[#858585]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#111111]" />
                <span className="uppercase tracking-wider font-semibold text-[#111111]">
                  Imran — Product Designer &amp; Developer
                </span>
              </div>
              <span className="hidden sm:inline-block tracking-wider">
                AVAILABLE FOR SELECT PROJECTS · 2026
              </span>
            </div>

            {/* Asymmetric Hero Showcase Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] sm:min-h-[460px] md:min-h-[500px]">
              
              {/* Left Column: Editorial Philosophy & Credentials */}
              <div className="lg:col-span-5 p-6 sm:p-10 md:p-12 flex flex-col justify-between order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-[#DDDDD8]">
                <div className="space-y-6">
                  <div>
                    <span className="eyebrow block mb-2">Core Focus</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111111] leading-snug">
                      Bridging high-level product strategy with obsessive frontend execution.
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                    Rather than separating design from technical implementation, I work across the entire product lifecycle: 
                    crystallizing requirements, establishing design systems, and writing maintainable code.
                  </p>
                </div>

                <div className="pt-8 border-t border-[#DDDDD8] grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#858585] block mb-1">
                      Disciplines
                    </span>
                    <p className="text-xs font-medium text-[#111111]">
                      Product UX · Frontend Architecture
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#858585] block mb-1">
                      Location &amp; Delivery
                    </span>
                    <p className="text-xs font-medium text-[#111111]">
                      Remote Worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Portrait of Imran */}
              <div className="lg:col-span-7 relative bg-[#F7F7F5] flex items-end justify-center p-6 sm:p-8 order-1 lg:order-2 overflow-hidden min-h-[320px] sm:min-h-[400px]">
                {/* Subtle Paper Texture/Grid */}
                <div 
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(to right, #E5E5DF 1px, transparent 1px), linear-gradient(to bottom, #E5E5DF 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}
                />

                {/* Imran's Portrait Image */}
                <div className="relative z-10 w-full max-w-[420px] h-[320px] sm:h-[400px] md:h-[460px] flex items-end justify-center">
                  <Image
                    src="/hero-thumb.png"
                    alt="Imran — Product Designer & Frontend Developer"
                    width={1024}
                    height={1536}
                    priority
                    className="h-full w-auto object-contain object-bottom filter contrast-[1.02] drop-shadow-sm select-none"
                  />
                </div>

                {/* Subtle Floating Editorial Caption */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-[#FFFFFF]/90 backdrop-blur-xs border border-[#DDDDD8] px-3.5 py-2 rounded-[4px] text-[11px] font-mono text-[#555555]">
                  <span className="text-[#111111] font-medium">Imran</span> · Designing for Humans
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
