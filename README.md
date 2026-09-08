# Imran M A — Modern Portfolio

A high-performance personal portfolio website built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, and modern serverless services.

## Architecture

- **Frontend & Serverless API**: Hosted on [Vercel](https://vercel.com)
- **Database & Persistence**: [Supabase](https://supabase.com) (PostgreSQL with Row Level Security)
- **Transactional Notifications**: [Resend](https://resend.com)
- **CI/CD**: GitHub Actions (`.github/workflows/ci.yml`) + Vercel automatic git deployments

```text
User
  ↓
Vercel (Next.js 15)
  ├── Frontend Showcase
  └── Serverless API (/api/contact)
          ↓
      Supabase (PostgreSQL)
      ├── contact_submissions
      └── email_logs
          
Vercel API Route
          ↓
        Resend
          ↓
     Admin Email
```

## Features

- ⚡ **Next.js 15 App Router** with React 19 server and client components
- 🎨 **Tailwind CSS v4** styling with custom theme tokens and responsive layouts
- 🌊 **Smooth Scrolling** with Lenis and interactive GSAP / Framer Motion animations
- 🛡️ **Secure Contact Pipeline**:
  - In-memory sliding-window IP rate limiting
  - Server-side payload validation & sanitization
  - Supabase PostgreSQL persistence via privileged server-side service role
  - Automatic admin notification dispatch via Resend
  - Non-blocking email fallback (contact submission is never lost if email delivery delays)
  - Detailed delivery auditing in `email_logs`

## Getting Started

### 1. Prerequisites
- Node.js 20.x or 22.x LTS
- npm

### 2. Installation
```bash
npm install
```

### 3. Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Populate the required credentials:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Resend Configuration
RESEND_API_KEY=re_your_resend_api_key
RESEND_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
EMAIL_TO=info.imran.ma@gmail.com
```

### 4. Supabase Database Setup
Run the SQL queries in `supabase/schema.sql` inside your **Supabase Project SQL Editor**:
- Creates `contact_submissions` and `email_logs` tables
- Configures Row Level Security (RLS) policies protecting visitor privacy

### 5. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### 6. Verification Commands
```bash
# Run linting
npm run lint

# Build production bundle
npm run build
```

## Deployment to Vercel

1. Push your changes to the GitHub repository.
2. In the [Vercel Dashboard](https://vercel.com/new), import your repository.
3. Add the environment variables from `.env.local` to **Project Settings → Environment Variables**.
4. Click **Deploy**. Vercel will automatically trigger deployments on pushes to `main`.
