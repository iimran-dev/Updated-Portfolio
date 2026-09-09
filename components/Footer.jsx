'use client';

import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const lenis = useLenis();

  const scrollToTop = (e) => {
    e.preventDefault();
    lenis?.scrollTo(0, { duration: 1.2 });
  };

  return (
    <footer className="w-full bg-[#111111] text-[#AAAAAA] border-t border-[#222222] py-14 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#222222] items-start">
          
          <div className="md:col-span-6 space-y-3">
            <span className="text-xl font-bold text-[#FFFFFF] tracking-tight block">
              Imran
            </span>
            <p className="text-sm text-[#777777] max-w-sm leading-relaxed">
              Product Designer &amp; Frontend Engineer shaping intentional, high-performance web software.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap gap-8 md:justify-end text-sm">
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-mono text-[#666666] uppercase tracking-wider">
                Connect
              </span>
              <a
                href="mailto:info.imran.ma@gmail.com"
                className="text-[#FFFFFF] hover:text-[#AAAAAA] transition-colors"
              >
                info.imran.ma@gmail.com
              </a>
              <a
                href="https://github.com/iimran-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFFFFF] hover:text-[#AAAAAA] transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/imran-m-a-35a89128a/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFFFFF] hover:text-[#AAAAAA] transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-mono text-[#666666] uppercase tracking-wider">
                Index
              </span>
              <a href="#work" className="text-[#AAAAAA] hover:text-[#FFFFFF] transition-colors">
                Selected Work
              </a>
              <a href="#methodology" className="text-[#AAAAAA] hover:text-[#FFFFFF] transition-colors">
                Methodology
              </a>
              <a href="#services" className="text-[#AAAAAA] hover:text-[#FFFFFF] transition-colors">
                Services
              </a>
              <a href="#about" className="text-[#AAAAAA] hover:text-[#FFFFFF] transition-colors">
                About
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-4">
          <div className="flex items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Imran. All rights reserved.</p>
            <span>·</span>
            <span>Designed &amp; Built with Next.js</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#888888] hover:text-[#FFFFFF] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}
