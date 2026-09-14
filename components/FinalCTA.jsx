'use client';

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";

export function FinalCTA() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "Failed to send message. Please reach out via email directly.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full bg-[#111111] text-[#F7F7F5] py-28 sm:py-36 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Conversion Headline & Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between h-full gap-8"
          >
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-[#AAAAAA]">
                Not sure what you need?
              </p>

              <h2 className="display-headline text-[#FFFFFF] font-bold">
                Let&apos;s build something useful.
              </h2>

              <p className="text-base sm:text-lg text-[#AAAAAA] leading-relaxed max-w-lg">
                Whether you are starting from zero on a new product venture, designing a modern design system, 
                or elevating existing web software — let&apos;s discuss your timeline and goals.
              </p>
            </div>

            <div className="pt-8 border-t border-[#282828] space-y-4">
              <div>
                <span className="text-xs font-mono text-[#777777] uppercase tracking-wider block mb-1">
                  Direct Inquiries
                </span>
                <a
                  href="mailto:info.imran.ma@gmail.com"
                  className="inline-flex items-center gap-2 text-base font-medium text-[#FFFFFF] hover:text-[#AAAAAA] transition-colors"
                >
                  <Mail size={16} />
                  <span>info.imran.ma@gmail.com</span>
                </a>
              </div>

              <div>
                <span className="text-xs font-mono text-[#777777] uppercase tracking-wider block mb-1">
                  Availability
                </span>
                <p className="text-sm text-[#AAAAAA]">
                  Accepting select consulting &amp; build partnerships for Q2 / Q3 2026.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Editorial Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#161616] p-8 sm:p-10 rounded-xl border border-[#242424]"
          >
            <h3 className="text-lg font-bold text-[#FFFFFF] mb-6 tracking-tight">
              Start a Conversation
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-[#888888]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name or company"
                  className="w-full bg-[#111111] border border-[#282828] text-[#F7F7F5] text-sm rounded-lg px-4 py-3 placeholder:text-[#555555] focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:bg-[#141414] transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-[#888888]">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full bg-[#111111] border border-[#282828] text-[#F7F7F5] text-sm rounded-lg px-4 py-3 placeholder:text-[#555555] focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:bg-[#141414] transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-[#888888]">
                  Project Overview
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your product, objectives, and approximate timeline..."
                  className="w-full bg-[#111111] border border-[#282828] text-[#F7F7F5] text-sm rounded-lg px-4 py-3 placeholder:text-[#555555] focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 focus:bg-[#141414] transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#111111] font-semibold text-sm py-3.5 px-7 rounded-full hover:bg-[#EBEBE6] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 min-h-[48px] shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {status === "loading" && <Loader2 size={16} className="animate-spin" />}
                {status === "success" && <Check size={16} />}
                {status === "idle" && <ArrowRight size={16} />}
                <span>
                  {status === "success"
                    ? "Inquiry Received — I will respond shortly."
                    : status === "loading"
                    ? "Submitting..."
                    : "Send Message"}
                </span>
              </button>

              {status === "error" && (
                <p className="text-xs text-red-400 mt-2">
                  {errorMessage}
                </p>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
