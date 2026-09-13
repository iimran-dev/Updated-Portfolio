'use client';

import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { ArrowRight } from "lucide-react";

const headlineContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 48,
    rotateX: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

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

  const headlineText = "I build digital products with purpose.";
  const words = headlineText.split(" ");

  return (
    <section id="top" className="w-full pt-20 sm:pt-28 pb-14 sm:pb-20">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        
        {/* Eyebrow Descriptor with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 text-xs text-[#111111]">
            <span>UX &amp; Frontend Engineering</span>
          </div>
        </motion.div>

        {/* Large Editorial Headline with Kinetic Motion Reveal & Re-trigger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={headlineContainerVariants}
          className="max-w-5xl mb-6 sm:mb-8"
        >
          <h1 className="display-headline text-[#111111] font-bold flex flex-wrap gap-x-[0.28em] gap-y-0 leading-[1.02] sm:leading-[1.0]">
            {words.map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden pt-1 pb-4 -mt-1 -mb-4 [perspective:1000px]"
              >
                <motion.span
                  variants={wordVariants}
                  className="kinetic-word inline-block origin-bottom transform-gpu"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </motion.div>

        {/* Supporting Statement & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 sm:gap-8"
        >
          <p className="text-base sm:text-lg md:text-xl font-normal text-[#666666] leading-relaxed max-w-2xl">
            From early ambiguity to production-ready software — strategy, design systems, and frontend engineering in one partnership.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
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
              className="btn-secondary w-full sm:w-auto"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={15} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
