'use client';

import { useRef } from "react";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { ArrowRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

export function Hero() {
  const lenis = useLenis();
  const heroRef = useRef(null);
  const headlineRef = useRef(null);

  // GSAP kinetic typography entrance animation
  useGSAP(() => {
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll(".kinetic-word");
      gsap.fromTo(
        words,
        { opacity: 0, y: 48, rotateX: 20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.0,
          stagger: 0.045,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    }
  }, { scope: heroRef });

  const scrollToSection = (e, target) => {
    e.preventDefault();
    lenis?.scrollTo(target, {
      offset: -40,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
  };

  const headlineText = "I shape digital products through strategic clarity and engineering precision.";
  const words = headlineText.split(" ");

  return (
    <section id="top" ref={heroRef} className="w-full pt-10 sm:pt-16 pb-20 sm:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Eyebrow Descriptor with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <p className="eyebrow flex items-center gap-2 text-[#858585]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            <span>Product Partner</span>
            <span className="text-[#BFBFB8]">·</span>
            <span>Design Systems &amp; Frontend Engineering</span>
          </p>
        </motion.div>

        {/* Large Editorial Headline with GSAP Kinetic Reveal */}
        <div ref={headlineRef} className="max-w-5xl mb-8 sm:mb-12 overflow-hidden">
          <h1 className="display-headline text-[#111111] font-bold flex flex-wrap gap-x-[0.28em] gap-y-[0.08em]">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1">
                <span className="kinetic-word inline-block">
                  {word}
                </span>
              </span>
            ))}
          </h1>
        </div>

        {/* Supporting Statement & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 sm:pb-16 border-b border-[#DDDDD8]"
        >
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-[#555555] leading-relaxed max-w-2xl">
              From early product ambiguity to production-ready software — unifying user research, 
              editorial UX, and performant Next.js code into seamless digital experiences.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-4 lg:justify-end">
            <motion.a
              href="#work"
              onClick={(e) => scrollToSection(e, "#work")}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="btn-primary w-full sm:w-auto"
            >
              <span>View Selected Work</span>
              <ArrowRight size={15} />
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="btn-secondary w-full sm:w-auto text-center"
            >
              <span>Start a Conversation</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
