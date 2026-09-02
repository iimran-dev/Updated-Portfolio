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

    // Set initial states: Card 01 visible, Cards 02/03/04 completely hidden below
    cards.forEach((card, index) => {
      if (index > 0) {
        gsap.set(card, {
          yPercent: 120,
          autoAlpha: 0,
          scale: 0.98,
        });
      } else {
        gsap.set(card, {
          yPercent: 0,
          autoAlpha: 1,
          scale: 1,
        });
      }
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

      // Step 1: Scale down and dim the previous card underneath
      tl.to(
        prevCard,
        {
          scale: 0.93,
          opacity: 0.35,
          y: -25,
          duration: 1,
          ease: "power2.inOut",
        },
        `step-${index}`
      );

      // Step 2: Animate current card sliding cleanly from bottom to stack on top
      tl.to(
        card,
        {
          yPercent: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        `step-${index}`
      );
    });
  }, { scope: sectionRef });

  return (
    <section id="skills" ref={sectionRef} className="w-full bg-[#0a0a0a] text-white pt-10 sm:pt-16 pb-16 px-4 sm:px-8 overflow-hidden">

      {/* Background Ambient Blur */}
      <div className="absolute top-1/3 right-5 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#a78bfa]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start gap-2.5 sm:gap-3 border-b border-white/10 pb-6 sm:pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30 text-xs sm:text-sm font-medium tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
            <span className="text-[#a78bfa]">MY PROCESS</span>
            <span className="text-[#a78bfa]/50">·</span>
            <span className="text-[#a78bfa]">PRINCIPLES</span>
          </div>
          <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08]">
            How I work
          </h2>
        </div>

        {/* GSAP Pinned Card Stacking Area */}
        <div className="w-full pt-4 pb-12">
          <div
            ref={cardsContainerRef}
            className="relative w-full h-[450px] sm:h-[420px] md:h-[400px] lg:h-[380px]"
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
                {/* Modern Card Frame */}
                <div className="w-full h-full bg-[#121212] border border-white/10 rounded-2xl sm:rounded-[2.4rem] lg:rounded-[2.8rem] p-6 sm:p-10 lg:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.95)] flex flex-col justify-between items-start">

                  {/* Card Top Index Line */}
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm sm:text-base font-light text-[#a78bfa] tracking-wider select-none">
                      {item.number}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-widest">
                      {`0${index + 1} / 04`}
                    </span>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex flex-col gap-3 sm:gap-5 max-w-5xl my-auto">
                    <h3 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[3.2rem] text-white tracking-tight leading-[1.08]">
                      {item.title}
                    </h3>
                    <p className="font-light text-zinc-300 text-base sm:text-xl md:text-2xl lg:text-[1.45rem] leading-relaxed max-w-4xl">
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
