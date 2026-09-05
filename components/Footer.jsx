export function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-zinc-400 border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col sm:flex-row items-center justify-between gap-4 font-jakarta text-xs">
        <p className="text-zinc-500 font-normal">
          © {new Date().getFullYear()} Imran. Built with Next.js, Tailwind CSS &amp; Supabase.
        </p>
        <div className="flex items-center gap-6 font-medium">
          <a href="https://github.com/iimran-dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#a78bfa] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/imran-m-a-35a89128a/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="hover:text-[#a78bfa] transition-colors">LinkedIn</a>
          <a href="mailto:info.imran.ma@gmail.com" className="hover:text-[#a78bfa] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
