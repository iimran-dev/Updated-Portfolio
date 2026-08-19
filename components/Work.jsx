import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/Badge";

const PROJECTS = [
  {
    title: "Task Flow",
    tag: "Todo App",
    desc: "A simple yet effective task management application.",
    tint: "bg-amber-light",
    href: "https://github.com/iimran-dev/TaskFlow-Task-management.git",
    big: false,
  },
  {
    title: "Go-Cart",
    tag: "E-commerce",
    desc: "Design and build of a modern e-commerce platform with a focus on user experience and performance.",
    tint: "bg-rose-light",
    href: "https://github.com/iimran-dev/Ecommerce.git",
    big: false,
  },
  {
    title: "UI Modules",
    tag: "Components",
    desc: "A collection of reusable components and design patterns for building modern web applications.",
    tint: "bg-blue-light",
    big: true,
  },
];

export function Work() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 pt-0">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <h2 className="font-display font-bold text-3xl sm:text-4xl">Selected work</h2>
        <Badge className="bg-blue-100">03 projects</Badge>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p) => (
          <a
            href={p.href || "#"}
            key={p.title}
            className={`group ${p.tint} border-4 border-border-primary neo-shadow rounded-2xl p-7 flex flex-col justify-between ${
              p.big ? "md:col-span-2 md:min-h-[260px]" : "md:min-h-[220px]"
            }`}
          >
            <div className="flex items-start justify-between">
              <Badge className="bg-bg-input text-xs">{p.tag}</Badge>
              <ArrowUpRight
                size={22}
                className="border-4 border-border-primary bg-bg-input rounded-full p-1 group-hover:rotate-45 transition-transform"
              />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-2">{p.title}</h3>
              <p className="font-body text-text-secondary max-w-md">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
