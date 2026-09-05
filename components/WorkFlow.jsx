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
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  // GSAP ScrollTrigger Pinned View Stacking Animation
  useGSAP(() => {
    if (!cardsRef.current.length || !cardsContainerRef.current) return;

    const cards = cardsRef.current.filter(Boolean);
    const totalCards = cards.length;

    // Set initial states: Card 01 visible at yPercent 0, Cards 02/03/04 positioned below at yPercent 120
    // ALL CARDS MAINTAIN 100% SOLID OPACITY (opacity: 1) AT ALL TIMES
    cards.forEach((card, index) => {
      gsap.set(card, {
        yPercent: index === 0 ? 0 : 120,
        opacity: 1,
        autoAlpha: 1,
        scale: 1,
      });
    });

    // Create a pinned timeline where the cards container is fixed while scrolling
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsContainerRef.current,
        pin: true,
        start: "top top+=110",
        end: () => `+=${totalCards * 90}%`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    cards.forEach((card, index) => {
      if (index === 0) return; // First card is initially resting in place

      const prevCard = cards[index - 1];

      // Step 1: Slightly scale down and shift the previous card underneath while preserving solid opacity
      tl.to(
        prevCard,
        {
          scale: 0.94,
          y: -20,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        `step-${index}`
      );

      // Step 2: Slide current card up with 100% SOLID OPACITY throughout the entire transition
      tl.to(
        card,
        {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        `step-${index}`
      );
    });
  }, { scope: sectionRef });

  return (
    <section id="skills" ref={sectionRef} className="w-full bg-[#0a0a0a] text-white pt-10 sm:pt-16 pb-16 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 overflow-hidden">

      {/* Background Ambient Blur */}
      <div className="absolute top-1/3 right-5 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#a78bfa]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:gap-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start gap-2.5 sm:gap-3 border-b border-white/10 pb-5 sm:pb-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
            <span className="text-[#a78bfa]">MY PROCESS</span>
            <span className="text-[#a78bfa]/50">·</span>
            <span className="text-[#a78bfa]">PRINCIPLES</span>
          </div>
          <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.08]">
            How I work
          </h2>
        </div>

        {/* GSAP Pinned Card Stacking Area */}
        <div className="w-full pt-2 pb-8 overflow-hidden">
          <div
            ref={cardsContainerRef}
            className="relative w-full h-[380px] sm:h-[350px] md:h-[320px]"
          >
            {PRINCIPLES.map((item, index) => (
              <div
                key={item.number}
                ref={(el) => (cardsRef.current[index] = el)}
                className="absolute inset-0 w-full h-full origin-top"
                style={{
                  zIndex: (index + 1) * 10,
                }}
              >
                {/* Modern Card Frame with 100% Solid Opaque Background */}
                <div
                  className="w-full h-full border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.95)] flex flex-col justify-between items-start"
                  style={{ backgroundColor: '#121212', opacity: 1 }}
                >

                  {/* Card Top Index Line */}
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs sm:text-sm font-light text-[#a78bfa] tracking-wider select-none">
                      {item.number}
                    </span>
                    <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                      {`0${index + 1} / 04`}
                    </span>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex flex-col gap-2.5 sm:gap-4 max-w-4xl my-auto">
                    <h3 className="font-bold text-xl sm:text-3xl md:text-[2.2rem] text-white tracking-tight leading-[1.08]">
                      {item.title}
                    </h3>
                    <p className="font-light text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Loop at Section Bottom */}
        <div className="overflow-hidden pt-6">
          <CurvedLoop
            marqueeText="UI/UX Design & Development            High-Fidelity Figma Prototypes            Modern, Responsive Web Experiences            From Design Concepts to Functional Products            React, Next.js & Full-Stack Projects            Clean Interfaces Built for Real-World Use            Bridging Design, Development & Product Thinking            UI Systems Designed for Consistency and Scalability            "
            speed={1.8}
            curveAmount={0}
            direction="right"
            interactive
            className="fill-current text-zinc-400 font-medium text-sm sm:text-lg md:text-xl tracking-widest"
          />
        </div>

      </div>
    </section>
  );
}
