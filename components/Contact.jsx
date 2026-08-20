'use client';

import { useState } from "react";
import { Send, CheckCircle2, Loader2, Mail, ArrowUpRight } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

function GithubIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const { error } = await supabase.from("messages").insert([form]);
      if (error) throw error;
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full bg-[#0a0a0a] text-white py-8 sm:py-16 px-4 sm:px-8 overflow-hidden relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#a78bfa]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto bg-[#121212] border-2 border-white/10 rounded-[2rem] sm:rounded-[2.8rem] p-5 sm:p-8 lg:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.95)] grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 relative z-10">

        {/* Left Side Info Area */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-5 items-start">

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30 font-jakarta text-xs sm:text-sm font-medium tracking-wider uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
              <span className="text-[#a78bfa]">LET'S CONNECT</span>
            </div>

            {/* Title */}
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08]">
              Got a project? <span className="text-zinc-400 font-normal">Let's build it.</span>
            </h2>

            {/* Description */}
            <p className="font-jakarta font-normal text-zinc-400 text-base sm:text-xl leading-relaxed">
              Tell me about your product, web application, or design ideas. I respond within 24 hours.
            </p>
          </div>

          {/* Contact Direct Email & Social Buttons */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:info.imran.ma@gmail.com"
              className="inline-flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-zinc-900/90 border border-white/10 text-white font-jakarta text-sm font-medium hover:border-[#a78bfa]/50 hover:bg-zinc-800 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#a78bfa]/10 border border-[#a78bfa]/30 flex items-center justify-center text-[#a78bfa]">
                  <Mail size={18} />
                </div>
                <span>info.imran.ma@gmail.com</span>
              </div>
              <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/iimran-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-zinc-900/90 border border-white/10 text-zinc-300 font-jakarta text-xs font-semibold uppercase tracking-wider hover:text-white hover:border-[#a78bfa]/50 transition-all duration-300"
              >
                <GithubIcon size={18} />
                <span>GITHUB</span>
              </a>

              <a
                href="https://www.linkedin.com/in/imran-m-a-35a89128a/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-zinc-900/90 border border-white/10 text-zinc-300 font-jakarta text-xs font-semibold uppercase tracking-wider hover:text-white hover:border-[#a78bfa]/50 transition-all duration-300"
              >
                <LinkedinIcon size={18} />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Form Controls */}
        <form onSubmit={onSubmit} className="lg:col-span-7 flex flex-col gap-5 justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-jakarta text-xs font-medium uppercase tracking-wider text-zinc-400">
                Your Name
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={onChange}
                placeholder="What's your name?"
                className="w-full bg-zinc-900/90 border border-white/10 text-white font-jakarta text-sm sm:text-base rounded-2xl px-5 py-4 placeholder:text-zinc-500 focus:outline-none focus:border-[#a78bfa] focus:ring-2 focus:ring-[#a78bfa]/30 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-jakarta text-xs font-medium uppercase tracking-wider text-zinc-400">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={onChange}
                placeholder="name@example.com"
                className="w-full bg-zinc-900/90 border border-white/10 text-white font-jakarta text-sm sm:text-base rounded-2xl px-5 py-4 placeholder:text-zinc-500 focus:outline-none focus:border-[#a78bfa] focus:ring-2 focus:ring-[#a78bfa]/30 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-jakarta text-xs font-medium uppercase tracking-wider text-zinc-400">
                Project Details
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about your project, timeline, and goals..."
                className="w-full bg-zinc-900/90 border border-white/10 text-white font-jakarta text-sm sm:text-base rounded-2xl px-5 py-4 placeholder:text-zinc-500 focus:outline-none focus:border-[#a78bfa] focus:ring-2 focus:ring-[#a78bfa]/30 transition-all duration-300 resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 px-8 rounded-full bg-[#a78bfa] text-black font-jakarta font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#b89eff] transition-all duration-300 shadow-[0_0_25px_rgba(167,139,250,0.35)] hover:scale-[1.02] active:scale-95 cursor-pointer border-2 border-[#b89eff] flex items-center justify-center gap-2.5 disabled:opacity-60"
          >
            {status === "loading" && <Loader2 size={18} className="animate-spin" />}
            {status === "success" && <CheckCircle2 size={18} />}
            {status === "idle" && <Send size={18} />}
            <span>
              {status === "success" ? "Message Sent — Talk Soon!" : status === "loading" ? "Sending Message..." : "Send Message"}
            </span>
          </button>

          {status === "error" && (
            <p className="font-jakarta text-xs text-rose-400 text-center">
              Something went wrong. Please try again or email directly to info.imran.ma@gmail.com.
            </p>
          )}
        </form>

      </div>
    </section>
  );
}
