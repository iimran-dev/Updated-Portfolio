'use client';

import { useState } from "react";
import { Send, CheckCircle2, Loader2, Mail } from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import { Badge } from "./ui/Badge";

function GithubIcon({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 24 }) {
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
    <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
      <div className="bg-bg-card text-text-primary border-4 border-border-primary neo-shadow-static rounded-2xl p-8 sm:p-12 grid md:grid-cols-2 gap-10">
        <div>
          <Badge className="bg-lime-light text-text-primary mb-5">Contact</Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Got a project? Let's build it.
          </h2>
          <p className="font-body text-text-muted mb-8 max-w-sm">
            Tell me what you're making — I reply within a day, usually sooner.
          </p>
          <div className="flex gap-3">
            <a href="mailto:info.imran.ma@gmail.com" className="bg-bg-input text-text-primary border-4 border-bg-input rounded-xl p-3 hover:bg-lime-light transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/iimran-dev" className="bg-bg-input text-text-primary border-4 border-bg-input rounded-xl p-3 hover:bg-lime-light transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/imran-m-a-35a89128a/?skipRedirect=true" className="bg-bg-input text-text-primary border-4 border-bg-input rounded-xl p-3 hover:bg-lime-light transition-colors">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            required
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            className="bg-bg-input text-text-primary border-4 border-bg-input rounded-xl px-4 py-3 font-body placeholder:text-text-muted focus:outline-none focus:border-accent-secondary"
          />
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={onChange}
            placeholder="Your email"
            className="bg-bg-input text-text-primary border-4 border-bg-input rounded-xl px-4 py-3 font-body placeholder:text-text-muted focus:outline-none focus:border-accent-secondary"
          />
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={onChange}
            placeholder="What are you building?"
            className="bg-bg-input text-text-primary border-4 border-bg-input rounded-xl px-4 py-3 font-body placeholder:text-text-muted focus:outline-none focus:border-accent-secondary resize-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="font-display font-bold bg-accent-secondary text-text-primary border-4 border-accent-secondary rounded-xl px-6 py-3 inline-flex items-center justify-center gap-2 neo-shadow-sm disabled:opacity-70"
          >
            {status === "loading" && <Loader2 size={18} className="animate-spin" />}
            {status === "success" && <CheckCircle2 size={18} />}
            {status === "idle" && <Send size={18} />}
            {status === "success" ? "Sent — talk soon" : status === "loading" ? "Sending..." : "Send message"}
          </button>
          {status === "error" && (
            <p className="font-mono text-xs text-accent-tertiary">Something went wrong — try again, or email me directly.</p>
          )}
        </form>
      </div>
    </section>
  );
}
