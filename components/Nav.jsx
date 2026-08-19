'use client';

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { useLenis } from "lenis/react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  const scrollTo = (target) => {
    lenis?.scrollTo(target, {
      offset: -80,
      duration: 2,
      easing: (t) => 1 - Math.pow(1 - t, 5),
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-bg-primary backdrop-blur border-b-4 border-border-primary">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-2xl tracking-tight">
          IMRAN<span className="text-blue-500">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body font-medium">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="marker-underline hover-text-accent-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="lime"
            className="px-5 py-2.5 text-sm"
            onClick={() => scrollTo("#contact")}
          >
            Let's talk <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className="hidden md:flex items-center">
          <ThemeToggle size="sm" />
        </div>

        <button
          className="md:hidden border-4 border-border-primary p-2 bg-bg-input text-text-primary neo-shadow-sm"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-4 border-border-primary bg-bg-primary px-5 py-6 flex flex-col gap-5 font-body font-medium">
          <div className="flex items-center justify-between pt-2">
            <span className="text-text-secondary font-display text-sm uppercase tracking-wider">Theme</span>
            <ThemeToggle size="sm" />
          </div>
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => {
                scrollTo(l.href);
                setOpen(false);
              }}
              className="text-left marker-underline hover-text-accent-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
          <Button
            variant="lime"
            className="w-full justify-center"
            onClick={() => {
              scrollTo("#contact");
              setOpen(false);
            }}
          >
            Let's talk <ArrowUpRight size={16} />
          </Button>
        </div>
      )}
    </header>
  );
}
