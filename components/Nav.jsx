'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "#work", pageHref: "/#work" },
  { label: "About", href: "/about", isPage: true },
  { label: "Services", href: "#services", pageHref: "/#services" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, target) => {
    if (target === "#top") {
      e.preventDefault();
      lenis?.scrollTo(0, { duration: 1.2 });
      return;
    }
    if (isHomePage && target.startsWith("#")) {
      e.preventDefault();
      lenis?.scrollTo(target, {
        offset: -40,
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-[560px] sm:max-w-[600px] h-12 sm:h-13.5 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border transition-all duration-300 flex items-center justify-between pl-4 sm:pl-7 pr-1.5 sm:pr-2 ${
          scrolled
            ? "border-[#CECED8] shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            : "border-[#DDDDD8] shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
        }`}
      >
        {/* Monogram Brand Logo */}
        {isHomePage ? (
          <a
            href="#top"
            onClick={(e) => handleScrollTo(e, "#top")}
            className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#111111] hover:opacity-75 transition-opacity uppercase select-none focus-visible:outline-none"
          >
            Imran.
          </a>
        ) : (
          <Link
            href="/"
            className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#111111] hover:opacity-75 transition-opacity uppercase select-none focus-visible:outline-none"
          >
            Imran.
          </Link>
        )}

        {/* Center Nav Links */}
        <div className="flex items-center gap-4 sm:gap-7">
          {NAV_LINKS.map((link) => {
            if (link.isPage) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (isAboutPage) {
                      e.preventDefault();
                      lenis?.scrollTo(0, { duration: 1.2 });
                    }
                  }}
                  className={`text-xs sm:text-[13px] transition-colors py-1 focus-visible:outline-none ${
                    isAboutPage
                      ? "font-semibold text-[#111111]"
                      : "font-medium text-[#555555] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            if (isHomePage) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-xs sm:text-[13px] font-medium text-[#555555] hover:text-[#111111] transition-colors py-1 focus-visible:outline-none"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.pageHref}
                className="text-xs sm:text-[13px] font-medium text-[#555555] hover:text-[#111111] transition-colors py-1 focus-visible:outline-none"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Contact Pill CTA Button */}
        {isHomePage ? (
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-[#222222] px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-[13px] font-medium transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 focus-visible:outline-none"
          >
            <span>Contact</span>
            <ArrowRight
              size={13}
              strokeWidth={2.2}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        ) : (
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#111111] text-[#FFFFFF] hover:bg-[#222222] px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-[13px] font-medium transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95 focus-visible:outline-none"
          >
            <span>Contact</span>
            <ArrowRight
              size={13}
              strokeWidth={2.2}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        )}
      </nav>
    </header>
  );
}
