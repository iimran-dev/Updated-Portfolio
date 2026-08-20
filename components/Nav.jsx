'use client';

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Work", href: "#about" },
  { label: "Process", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  const scrollTo = (target) => {
    if (target === "#top") {
      lenis?.scrollTo(0, { duration: 1.5 });
      return;
    }
    lenis?.scrollTo(target, {
      offset: -80,
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 5),
    });
  };

  // Scroll listener for Liquid Glass transformation threshold
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full pt-3 sm:pt-4 px-3 sm:px-8 pointer-events-none">
      
      {/* Butter-Smooth GPU Hardware-Accelerated Floating Capsule Navbar */}
      <div
        className={`pointer-events-auto mx-auto flex items-center justify-between transform-gpu transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "max-w-4xl sm:max-w-5xl rounded-full py-2.5 px-6 sm:px-8 bg-[#121212]/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
            : "w-full max-w-7xl rounded-2xl py-4 sm:py-5 px-6 sm:px-10 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10"
        }`}
      >
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#top");
            }}
            className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight hover:text-[#a78bfa] transition-colors cursor-pointer"
          >
            Imran<span className="text-[#a78bfa]">.</span>
          </button>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-jakarta text-sm sm:text-base font-medium">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.href);
              }}
              className="text-zinc-300 hover:text-white transition-colors duration-200 relative group cursor-pointer"
            >
              <span>{l.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#a78bfa] group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          ))}
        </nav>

        {/* Right Side: CTA Button */}
        <div className="hidden md:flex items-center justify-end">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-jakarta font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#a78bfa] transition-colors duration-300 shadow-md cursor-pointer group"
          >
            <span>Let's talk</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Menu Button - Prevent Default to stop page refresh */}
        <button
          type="button"
          className="md:hidden p-2.5 rounded-full bg-zinc-900/90 border border-white/10 text-white cursor-pointer active:scale-95 transition-transform"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen((o) => !o);
          }}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden mt-3 max-w-xl mx-auto border border-white/15 bg-[#121212]/95 backdrop-blur-2xl rounded-3xl p-6 flex flex-col gap-5 font-jakarta font-medium text-sm shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                Navigation
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                }}
                className="text-zinc-400 hover:text-white text-xs uppercase font-mono cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.href);
                  setOpen(false);
                }}
                className="text-left text-zinc-200 text-lg font-semibold hover:text-[#a78bfa] transition-colors cursor-pointer"
              >
                {l.label}
              </button>
            ))}

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
                setOpen(false);
              }}
              className="w-full py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#a78bfa] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Let's talk</span>
              <ArrowUpRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
