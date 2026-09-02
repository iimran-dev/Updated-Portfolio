# CLAUDE.md - Portfolio Project (Next.js)

## Project Overview
A modern portfolio website built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, and **shadcn/ui** design patterns. Features a dark/light theme system, smooth scrolling (Lenis), and custom animations.

## Tech Stack
- **Next.js 15** (App Router, React 19)
- **Tailwind CSS v4** (CSS-first config via `@import "tailwindcss"` in `app/globals.css`)
- **Lenis** for smooth scrolling
- **Supabase** for contact form submissions

## Commands

```bash
# Development
npm run dev          # Start Next.js dev server

# Build
npm run build        # Production Next.js build

# Start Production Server
npm run start        # Run production server

# Linting
npm run lint         # Run Next.js ESLint
```

## Project Structure

```
├── app/
│   ├── layout.jsx           # Root layout (ThemeProvider + SmoothScroll)
│   ├── page.jsx             # Home page composition
│   └── globals.css          # Tailwind v4 imports + custom CSS variables + utilities
├── components/
│   ├── Nav.jsx              # Navigation with theme toggle
│   ├── Hero.jsx             # Hero section
│   ├── About.jsx            # About section
│   ├── Skills.jsx           # Skills section
│   ├── Work.jsx             # Work/portfolio section
│   ├── Process.jsx          # Process section
│   ├── Contact.jsx          # Contact form
│   ├── Footer.jsx           # Footer
│   ├── SmoothScroll.jsx     # Lenis smooth scroll wrapper
│   ├── ThemeProvider.jsx    # Dark/light theme context provider
│   ├── ThemeToggle.jsx      # Theme toggle button
│   ├── BlurText.jsx         # Blur text animation component
│   ├── CurvedLoop.jsx       # Curved text loop animation
│   └── ui/                  # Reusable UI primitives (Button, Badge)
├── lib/
│   ├── supabaseClient.js    # Supabase client setup
│   └── utils.js             # cn() utility (clsx + tailwind-merge)
└── public/                  # Static assets
```

## Key Configuration Files
| File | Purpose |
|------|---------|
| `app/globals.css` | All CSS variables, Tailwind v4 imports, utility classes, animations |
| `next.config.mjs` | Next.js configuration |
| `postcss.config.mjs` | PostCSS config for `@tailwindcss/postcss` |
| `jsconfig.json` | `@/*` path alias mapping |