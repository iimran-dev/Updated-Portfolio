'use client';

const SKILL_GROUPS = [
  {
    category: "DEVELOPMENT",
    description: "Production frontend architecture & modern web standards",
    skills: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST & GraphQL APIs",
      "HTML5 / Semantic Web",
      "Modern CSS Architecture",
    ],
  },
  {
    category: "PRODUCT & DESIGN",
    description: "User experience, design systems & interaction design",
    skills: [
      "Product Strategy",
      "UI / UX Design",
      "Design Systems & Tokens",
      "Interactive Prototyping",
      "WCAG 2.1 AA Accessibility",
      "Information Architecture",
      "User Testing & Discovery",
      "Micro-Animations & Motion",
    ],
  },
  {
    category: "INFRASTRUCTURE & TOOLS",
    description: "Deployment, database & developer tooling",
    skills: [
      "Vercel Platform",
      "Supabase (PostgreSQL / RLS)",
      "Git & GitHub Workflows",
      "CI / CD Automation",
      "Performance Auditing (LCP/CWV)",
      "Resend API Integration",
      "Figma",
      "VS Code & Antigravity",
    ],
  },
];

export function Skills() {
  return (
    <section className="w-full py-24 sm:py-32 border-t border-[#DDDDD8] bg-[#F7F7F5]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-[#DDDDD8] mb-16 sm:mb-20">
          <span className="eyebrow block mb-2">Technical Proficiency</span>
          <h2 className="editorial-h2 text-[#111111]">
            Skills &amp; Capabilities
          </h2>
        </div>

        {/* 3 Text-Group Columns (Visually Restrained, No Progress Bars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="flex flex-col gap-5">
              
              <div className="pb-4 border-b border-[#DDDDD8]">
                <h3 className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase">
                  {group.category}
                </h3>
                <p className="text-xs text-[#858585] mt-1">
                  {group.description}
                </p>
              </div>

              <ul className="flex flex-col divide-y divide-[#EBEBE6]">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="py-3 text-sm sm:text-base font-medium text-[#111111] hover:text-[#555555] transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
