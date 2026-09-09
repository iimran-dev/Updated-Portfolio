'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Methodology", href: "#methodology" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    if (href === "#top") {
      lenis?.scrollTo(0, { duration: 1.2 });
      return;
    }
    lenis?.scrollTo(href, {
      offset: -40,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
      scrolled 
        ? "bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[#DDDDD8]" 
        : "bg-[#F7F7F5] border-b border-transparent"
    }`}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        
        {/* Left: Wordmark */}
        <a
          href="#top"
          onClick={(e) => handleScrollTo(e, "#top")}
          className="group flex items-baseline gap-2 text-[#111111] no-underline focus-visible:outline-none"
        >
          <span className="text-xl font-bold tracking-tight text-[#111111]">
            Imran
          </span>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#858585] font-medium transition-colors group-hover:text-[#111111]">
            Product &amp; Code
          </span>
        </a>

        {/* Right: Typography-Driven Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#555555]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-[#555555] hover:text-[#111111] transition-colors duration-200 no-underline py-1"
            >
              {item.label}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] bg-[#111111] text-[#FFFFFF] text-[13px] font-medium hover:opacity-90 transition-opacity"
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="md:hidden p-2 -mr-2 text-[#111111] focus-visible:outline-none"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Clean Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden border-b border-[#DDDDD8] bg-[#F7F7F5] px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-lg font-medium text-[#111111] hover:text-[#555555] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#DDDDD8]">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="btn-primary w-full text-center"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
