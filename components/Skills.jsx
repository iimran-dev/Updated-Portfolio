'use client';

import { useState, useEffect } from "react";
import { Code2, Database, Palette } from "lucide-react";
import { Badge } from "./ui/Badge";
import CurvedLoop from './CurvedLoop';

const SKILLS = [
  {
    title: "Frontend",
    icon: Code2,
    tint: "bg-blue-light",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    title: "Design",
    icon: Palette,
    tint: "bg-rose-light",
    tags: ["Branding", "UI Systems", "Prototyping"],
  },
  {
    title: "Backend & Tools",
    icon: Database,
    tint: "bg-lime-light",
    tags: ["Supabase", "Git", "REST APIs", "FastAPI", "Node.js"],
  },
];

export function Skills() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setReducedMotion(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <section id="skills" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 mb-0 pb-0">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <h2 className="font-display font-bold text-3xl sm:text-4xl">What I bring to the table</h2>
        <Badge className="bg-lime-light text-text-primary">One designer, full stack of taste</Badge>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {SKILLS.map(({ title, icon: Icon, tint, tags }) => (
          <div
            key={title}
            className={`${tint} border-4 border-border-primary neo-shadow rounded-2xl p-7 flex flex-col`}
          >
            <div className="w-12 h-12 bg-bg-input border-4 border-border-primary rounded-xl flex items-center justify-center mb-5">
              <Icon size={22} />
            </div>
            <h3 className="font-display font-bold text-xl mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((t) => (
                <span key={t} className="font-mono text-xs bg-bg-input border-2 border-border-primary px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <CurvedLoop
          marqueeText="✦ LEARN • DESIGN • BUILD • IMPROVE • REPEAT ✦ LEARN • DESIGN • BUILD • IMPROVE • REPEAT ✦ LEARN • DESIGN • BUILD • IMPROVE • REPEAT ✦ LEARN • DESIGN • BUILD • IMPROVE • REPEAT ✦ LEARN • DESIGN • BUILD • IMPROVE • REPEAT ✦ LEARN • DESIGN • BUILD • IMPROVE • REPEAT ✦ LEARN • DESIGN • BUILD • IMPROVE • REPEAT ✦ LEARN • DESIGN • BUILD • IMPROVE • REPEAT ✦ LEARN • DESIGN • BUILD • IMPROVE • REPEAT ✦ LEARN • DESIGN • BUILD • IMPROVE"
          speed={2}
          curveAmount={0}
          direction="right"
          interactive
          reducedMotion={reducedMotion}
          className="fill-current text-text-primary"
        />
      </div>
    </section>
  );
}
