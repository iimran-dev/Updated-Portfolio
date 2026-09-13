'use client';

import { motion } from "motion/react";

export function Testimonials() {
  return (
    <section className="w-full py-24 sm:py-32 border-t border-[#DDDDD8] bg-[#F7F7F5]">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="pb-8 border-b border-[#DDDDD8] mb-16 sm:mb-20"
        >
          <span className="eyebrow block mb-2">Endorsement</span>
          <h2 className="editorial-h2 text-[#111111]">
            Client &amp; Collaborator Feedback
          </h2>
        </motion.div>

        {/* Large Prominent Editorial Quotation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <blockquote className="space-y-8">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-[#111111] leading-snug tracking-tight">
              &ldquo;Imran has a rare ability to bridge high-level product design thinking with meticulous frontend execution. The results spoke for themselves — faster delivery, exceptional polish, and immediate user adoption.&rdquo;
            </p>

            <footer className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-6 border-t border-[#DDDDD8]">
              <cite className="not-italic font-bold text-base text-[#111111]">
                Alex Chen
              </cite>
              <span className="hidden sm:inline-block text-[#BFBFB8]">·</span>
              <span className="text-sm text-[#555555]">
                Head of Product &amp; Engineering, Stealth SaaS Venture
              </span>
            </footer>
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}
