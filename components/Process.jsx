const PROCESS = [
  { n: "01", title: "Discover", desc: "Understand the goal, the users, and what success looks like." },
  { n: "02", title: "Design", desc: "Created responsive UI focused on a clean and intuitive UX." },
  { n: "03", title: "Build", desc: "Clean React + Tailwind code, componentised and responsive." },
  { n: "04", title: "Launch", desc: "Ship, connect the backend, and hand over docs that make sense." },
];

export function Process() {
  return (
    <section id="process" className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
      <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8">How a project runs</h2>
      <div className="grid md:grid-cols-4 gap-5">
        {PROCESS.map((step) => (
          <div
            key={step.n}
            className="bg-bg-card border-4 border-border-primary neo-shadow-sm rounded-2xl p-6"
          >
            <span className="font-mono text-accent-primary font-bold text-sm">{step.n}</span>
            <h3 className="font-display font-bold text-xl mt-2 mb-2">{step.title}</h3>
            <p className="font-body text-sm text-text-secondary">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
