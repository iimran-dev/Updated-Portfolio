# CLAUDE.md - Portfolio Project (Next.js)

## Project Overview
A high-performance modern portfolio website built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, and modern serverless architecture.
Hosted on **Vercel** with **Supabase PostgreSQL** for persistent data and **Resend** for transactional email delivery.

## Tech Stack & Architecture
- **Frontend / Hosting**: Next.js 15 (App Router), React 19, Vercel
- **Styling**: Tailwind CSS v4 (CSS-first `@import "tailwindcss"` in `app/globals.css`)
- **Animations**: Lenis (Smooth scroll), GSAP, Framer Motion
- **Database**: Supabase (PostgreSQL with Row Level Security)
- **Email Service**: Resend (Serverless transactional notification dispatch)
- **CI/CD**: GitHub Actions CI (`.github/workflows/ci.yml`) + Vercel Git integration

## Commands

```bash
# Development
npm run dev          # Start Next.js dev server on http://localhost:3000

# Build
npm run build        # Production Next.js build

# Start Production Server
npm run start        # Run production server

# Linting
npm run lint         # Run ESLint (flat config)
```

## Project Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml           # CI validation (lint + build)
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js     # Contact submission API (Supabase + Resend)
│   ├── layout.jsx           # Root layout (ThemeProvider + SmoothScroll)
│   ├── page.jsx             # Home page composition
│   ├── not-found.jsx        # 404 page
│   ├── projects/            # Project showcase sub-pages
│   └── globals.css          # Tailwind v4 imports + custom CSS variables
├── components/
│   ├── Nav.jsx              # Navigation with theme toggle
│   ├── Hero.jsx             # Hero section
│   ├── About.jsx            # About section
│   ├── WorkFlow.jsx         # Process/workflow section
│   ├── Contact.jsx          # Contact form with relative /api/contact endpoint
│   ├── Footer.jsx           # Footer
│   ├── SmoothScroll.jsx     # Lenis smooth scroll wrapper
│   ├── ThemeProvider.jsx    # Dark/light theme context provider
│   └── ui/                  # Reusable UI primitives
├── lib/
│   ├── supabaseServer.js    # Server-only Supabase client (service role)
│   ├── projects.js          # Case study data definitions
│   └── utils.js             # cn() styling helper
├── supabase/
│   ├── schema.sql           # Complete SQL schema & RLS policies
│   └── migrations/          # Versioned Supabase SQL migrations
└── vercel.json              # Vercel project deployment configuration
```

## Environment Variables

Configure in `.env.local` or Vercel Project Settings:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Resend
RESEND_API_KEY=re_your_api_key
RESEND_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
EMAIL_TO=info.imran.ma@gmail.com
```