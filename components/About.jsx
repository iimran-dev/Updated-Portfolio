import { Badge } from "./ui/Badge";

export function About() {
  const stats = [
    { n: "3+", label: "Projects shipped" },
    { n: "2", label: "Happy clients" },
    { n: "1+", label: "Years in the craft" },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
      <div className="grid md:grid-cols-5 gap-5">
        <div className="md:col-span-3 bg-bg-card border-4 border-border-primary neo-shadow rounded-2xl p-8 sm:p-10">
          <Badge className="bg-blue-light text-text-primary mb-5">About</Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Design and code, from the same hands.
          </h2>
          <p className="font-body text-text-secondary leading-relaxed">
            Most projects lose something between the mockup and the shipped product.
            I close that gap by doing both: visual identity and design systems in Figma,
            then production React and Tailwind that actually matches the file — pixel
            for pixel, interaction for interaction.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-rows-3 gap-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-4 border-border-primary neo-shadow-sm rounded-2xl px-6 flex items-center justify-between ${
                i === 0 ? "bg-rose-light" : i === 1 ? "bg-lime-light" : "bg-amber-light"
              }`}
            >
              <span className="font-display font-bold text-4xl">{s.n}</span>
              <span className="font-mono text-xs text-right max-w-[8rem]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
