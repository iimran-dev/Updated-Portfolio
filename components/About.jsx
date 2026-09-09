'use client';

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="w-full py-24 sm:py-32 border-t border-[#DDDDD8] bg-[#F7F7F5]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-[#DDDDD8] mb-16 sm:mb-20">
          <span className="eyebrow block mb-2">Background &amp; Philosophy</span>
          <h2 className="editorial-h2 text-[#111111]">
            About Me
          </h2>
        </div>

        {/* Editorial Layout: Large Rectangular Image + Professional Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Large Rectangular Editorial Portrait */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-md border border-[#DDDDD8] bg-[#FFFFFF] overflow-hidden">
              <Image
                src="/hero-thumb.png"
                alt="Imran — Product Designer & Developer"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top filter contrast-[1.02] grayscale-[20%]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent p-5 text-white">
                <span className="text-xs font-mono tracking-wider uppercase block opacity-90">
                  Imran · Lead Designer &amp; Engineer
                </span>
              </div>
            </div>
            
            <p className="text-xs font-mono text-[#858585] mt-3 tracking-wide">
              Obsessed with typography, zero-latency interactions, and design systems.
            </p>
          </div>

          {/* Right: Narrative Story, Current Focus & Disciplines */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Short Introduction */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] leading-tight tracking-tight">
                Engineering interfaces that feel as good as they look.
              </h3>
              <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
                I am an independent product designer and frontend engineer specializing in building high-performance web software. 
                I bridge the gap between creative visual direction and production-grade engineering, ensuring what gets designed is exactly what ships to users.
              </p>
            </div>

            {/* Professional Story */}
            <div className="pt-8 border-t border-[#DDDDD8] space-y-4">
              <span className="eyebrow block text-[#111111]">
                Professional Trajectory
              </span>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                Over the past several years, I have architected and deployed modern web applications, AI productivity tools, and modular design systems. 
                My focus is always on simplifying complex domain logic into effortless interfaces — removing cognitive load for end-users while building maintainable, scalable foundations for engineering teams.
              </p>
            </div>

            {/* Current Focus & Disciplines */}
            <div className="pt-8 border-t border-[#DDDDD8] grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <span className="eyebrow block mb-2 text-[#111111]">
                  Current Focus
                </span>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Exploring local-first software architectures, intelligent AI streaming workspaces, and high-contrast editorial web interfaces.
                </p>
              </div>

              <div>
                <span className="eyebrow block mb-2 text-[#111111]">
                  Core Disciplines
                </span>
                <ul className="text-xs sm:text-sm text-[#555555] space-y-1.5 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                    Product Strategy &amp; Discovery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                    UI/UX &amp; Design Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                    Next.js, React &amp; TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                    Performance &amp; WCAG AA Accessibility
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
