'use client';

import Link from "next/link";
import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const lenis = useLenis();

  const scrollToTop = (e) => {
    e.preventDefault();
    lenis?.scrollTo(0, { duration: 1.2 });
  };

  return (
    <footer className="w-full bg-[#111111] text-[#777777] border-t border-[#222222] py-8 sm:py-10">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3 text-[#777777]">
            <span className="font-semibold text-[#FFFFFF] tracking-tight text-sm">Imran</span>
            <span className="text-[#333333]">/</span>
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="hidden sm:inline text-[#333333]">·</span>
            <span className="hidden sm:inline text-[#666666]">Crafted with Next.js</span>
          </div>

          {/* Minimal Navigation & Socials */}
          <div className="flex items-center gap-5 sm:gap-6 font-mono text-[11px] uppercase tracking-wider">
            <Link
              href="/work"
              className="text-[#888888] hover:text-[#FFFFFF] transition-colors focus:outline-none"
            >
              Work
            </Link>
            <Link
              href="/services"
              className="text-[#888888] hover:text-[#FFFFFF] transition-colors focus:outline-none"
            >
              Services
            </Link>
            <a
              href="https://github.com/iimran-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-[#FFFFFF] transition-colors focus:outline-none"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/imran-m-a-35a89128a/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888888] hover:text-[#FFFFFF] transition-colors focus:outline-none"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Back to top with clean focus state */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#FFFFFF] transition-colors cursor-pointer focus:outline-none select-none"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
