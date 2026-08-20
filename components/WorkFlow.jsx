'use client';

import { useRef } from 'react';
import CurvedLoop from './CurvedLoop';
import { gsap, useGSAP } from '@/lib/gsap';

const PRINCIPLES = [
  {
    number: "01",
    title: "I start with the problem, not the pixels.",
    description: "I understand the goal, users, and context before jumping into design or development. Every decision has a reason behind it — not just a nice-looking interface."
  },
  {
    number: "02",
    title: "I design with development in mind.",
    description: "From high-fidelity UI to interactive prototypes and production-ready interfaces, I bridge the gap between design and code so ideas can move smoothly from concept to reality."
  },
  {
    number: "03",
    title: "I bring ideas, not just execution.",
    description: "I don't just follow a brief. I question, explore, and suggest better approaches when I see an opportunity to improve the product, experience, or outcome."
  },
  {
    number: "04",
    title: "I build for clarity, performance, and impact.",
    description: "Whether it's a landing page, web application, or digital product, I focus on creating experiences that are intuitive for users, practical to build, and valuable for the business."
  }
];

export function WorkFlow() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // GSAP ScrollTrigger: Shows card 1 first, then smoothly places subsequent cards on top as you scroll
  useGSAP(() => {
    if (!cardsRef.current.length) return;

    cardsRef.current.forEach((card, index) => {
      if (index === 0) return; // Card 01 starts in full view

      const prevCard = cardsRef.current[index - 1];

      // Current card slides up cleanly on top of previous card
      gsap.fromTo(
        card,
        { y: 60, opacity: 0.9 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 30%",
            scrub: 0.5,
          },
        }
      );

      // Previous card scales down slightly and dims as new card places on top
      if (prevCard) {
        gsap.to(prevCard, {
          scale: 0.95,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 30%",
            scrub: 0.5,
          },
        });
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="skills" ref={sectionRef} className="w-full bg-[#0a0a0a] text-white py-16 sm:py-28 px-4 sm:px-8 overflow-hidden">

      {/* Background Ambient Blur */}
      <div className="absolute top-1/3 right-5 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-16 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start gap-2.5 sm:gap-3 border-b border-white/10 pb-6 sm:pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30 font-jakarta text-xs sm:text-sm font-medium tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
            <span className="text-[#a78bfa]">MY PROCESS</span>
            <span className="text-[#a78bfa]/50">·</span>
            <span className="text-[#a78bfa]">PRINCIPLES</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08]">
            How I work
          </h2>
        </div>

        {/* Borderless Stacking Cards Container */}
        <div className="flex flex-col gap-2 sm:gap-4 relative w-full pb-8 sm:pb-14">
          {PRINCIPLES.map((item, index) => (
            <div
              key={item.number}
              ref={(el) => (cardsRef.current[index] = el)}
              className="sticky top-20 sm:top-28 md:top-32 w-full transition-all duration-300 origin-top"
              style={{
                zIndex: index + 10,
                marginBottom: index < PRINCIPLES.length - 1 ? '0.5rem' : '0'
              }}
            >
              {/* Borderless Modern Card Frame */}
              <div className="w-full bg-[#141414] rounded-2xl sm:rounded-[2.4rem] lg:rounded-[2.8rem] p-5 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col items-start justify-between gap-4 sm:gap-6">

                {/* Card Top Index Line */}
                <div className="flex items-center justify-between w-full">
                  <span className="font-jakarta text-xs sm:text-base font-medium text-[#a78bfa] select-none">
                    {item.number}
                  </span>
                  <span className="font-jakarta text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-medium">
                    {`0${index + 1} / 04`}
                  </span>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col gap-3 sm:gap-5 max-w-5xl">
                  <h3 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-white tracking-tight leading-[1.1]">
                    {item.title}
                  </h3>
                  <p className="font-jakarta font-normal text-zinc-400 text-sm sm:text-xl md:text-2xl lg:text-[1.65rem] leading-relaxed max-w-4xl">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Marquee Loop at Section Bottom */}
        <div className="overflow-hidden">
          <CurvedLoop
            marqueeText="UI/UX Design & Development            High-Fidelity Figma Prototypes            Modern, Responsive Web Experiences            From Design Concepts to Functional Products            React, Next.js & Full-Stack Projects            Clean Interfaces Built for Real-World Use            Bridging Design, Development & Product Thinking            UI Systems Designed for Consistency and Scalability            "
            speed={1.8}
            curveAmount={0}
            direction="right"
            interactive
            className="fill-current text-zinc-500 font-display font-medium text-xs sm:text-sm tracking-widest"
          />
        </div>

      </div>
    </section>
  );
}
