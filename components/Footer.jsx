export function Footer() {
  return (
    <footer className="border-t-4 border-border-primary py-8 mb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-secondary">
          © {new Date().getFullYear()} Imran. Built with Next.js, Tailwind &amp; Supabase.
        </p>
        <div className="flex gap-4 font-mono text-xs">
          <a href="https://github.com/iimran-dev" className="hover-text-accent-primary">GitHub</a>
          <a href="https://www.linkedin.com/in/imran-m-a-35a89128a/?skipRedirect=true" className="hover-text-accent-primary">LinkedIn</a>
          <a href="mailto:info.imran.ma@gmail.com" className="hover-text-accent-primary">Email</a>
        </div>
      </div>
    </footer>
  );
}
