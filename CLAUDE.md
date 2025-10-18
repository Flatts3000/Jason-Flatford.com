# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a professional portfolio website for Jason Flatford built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS. The site is configured as a purely static export suitable for deployment on Vercel, AWS S3/CloudFront, or similar static hosting platforms.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production (outputs to .next/)
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Node Version Requirements

This project requires Node.js version `>=18 <=20` (see package.json engines field).

## Project Architecture

### App Router Structure

The project uses Next.js 13+ App Router with file-based routing:

- **`app/layout.tsx`**: Root layout with global metadata, SEO configuration, FontAwesome setup, header, footer, and command menu
- **`app/page.tsx`**: Home page composing hero, featured case studies, signature outcomes, and CTA sections
- **`app/globals.css`**: Global styles including Tailwind directives and custom CSS variables
- **`app/themes.css`**: Theme-specific styles (currently uses "executive" theme via `data-theme` attribute)

### Key Pages

- **`app/case-studies/`**: Case study pages (Duly, Endless Grimoire, Memnai, Melee)
- **`app/contact/page.tsx`**: Contact form with Cloudflare Turnstile CAPTCHA
- **`app/skills/page.tsx`**: Skills showcase page
- **`app/timeline/page.tsx`**: Career timeline with data sourced from `app/timeline/data.ts`
- **`app/fit/page.tsx`**: AI-powered role fit analyzer tool

### API Routes

- **`app/api/contact/route.ts`**: Contact form submission handler
  - Uses Resend for email delivery
  - Validates with Zod schema
  - Verifies Cloudflare Turnstile token
  - Sends to configured email addresses via environment variables

- **`app/api/fit/route.ts`**: Role fit analysis endpoint
  - Accepts job descriptions via upload (PDF/DOCX/TXT) or paste
  - Uses OpenAI GPT-4o-mini to analyze fit against candidate profile
  - Returns structured JSON with score, verdict, strengths, gaps, tailored resume bullets, and cover letter opener
  - Optionally sends notification emails for high-scoring matches
  - Uses Node runtime for file parsing (pdf-parse, mammoth)

### Component Organization

**Reusable Components** (`components/`):
- **`Hero.tsx`**: Hero section with headshot and intro
- **`FeaturedCaseStudies.tsx`**: Grid of featured case study cards
- **`SignatureOutcomes.tsx`**: Key metrics/outcomes section
- **`TrustedBy.tsx`**: Logo row of partner organizations
- **`CTASection.tsx`**: Call-to-action with contact link
- **`FitWidget.tsx`**: AI role-fit analyzer widget
- **`CommandMenu.tsx`**: Keyboard-accessible command palette (Cmd/Ctrl+K)
- **`SiteHeader.tsx`**: Main navigation header
- **`ReadingProgress.tsx`**: Scroll progress indicator
- **`ScrollReveal.tsx`**: Scroll-based animation wrapper
- **`ThemeToggle.tsx`**: Theme switcher component
- **`Turnstile.tsx`**: Cloudflare Turnstile CAPTCHA wrapper
- **`StatCard.tsx`**: Metric display card
- **`LogoRow.tsx`**: Partner logo display
- **`MDXComponents.tsx`**: Custom components for MDX content rendering

**Component Styling**: Most components use CSS Modules (`.module.css`) for scoped styles alongside Tailwind utilities.

### MDX Content System

- **Location**: `content/` directory (currently contains `example.mdx`)
- **Helpers**: `lib/mdx.ts` provides `getAllPosts()` and `getPostBySlug()` utilities
- **Frontmatter**: Each MDX file includes YAML frontmatter with `title`, `date`, and `summary`
- **Rendering**: MDX is configured in Next.js via `@next/mdx` with:
  - `remark-gfm`: GitHub-flavored Markdown support
  - `rehype-slug`: Auto-generated heading IDs
  - `rehype-autolink-headings`: Linkable headings

### Font Configuration

- **`app/fonts.ts`**: Defines custom fonts (Inter, JetBrains Mono) loaded via `next/font`
- **`app/fontawesome.ts`**: Configures FontAwesome icon library (imported in layout)

### Security Configuration

- **`next.config.mjs`**: Production-only security headers including:
  - Strict Content Security Policy (CSP) allowing scripts from plausible.io and Cloudflare challenges
  - Frames allowed from Calendly and Cal.com
  - X-Frame-Options, X-Content-Type-Options, Referrer-Policy
  - No CSP in development to avoid HMR issues

### Environment Variables

Required for full functionality (configure in `.env.local`):

```bash
# Site URL
NEXT_PUBLIC_SITE_URL=https://www.jasonflatford.com

# Contact form (Resend)
RESEND_API_KEY=re_...
CONTACT_FROM=noreply@jasonflatford.com
CONTACT_TO=your-email@example.com

# Cloudflare Turnstile (CAPTCHA)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4A...
TURNSTILE_SECRET_KEY=0x4A...
TURNSTILE_DISABLED=1  # Set to 1 to disable during development

# Role fit analyzer (/api/fit)
OPENAI_API_KEY=sk-...
FIT_NOTIFY_ENABLED=1  # Enable email notifications for high-scoring roles
FIT_NOTIFY_MIN_SCORE=80  # Minimum score to trigger notification
NEXT_PUBLIC_TURNSTILE_DISABLED=1  # Disable Turnstile for /fit endpoint
```

### TypeScript Configuration

- **Base URL**: Set to `.` for absolute imports via `@/*` path alias
- **Strict Mode**: Enabled
- **Target**: ES6
- **MDX Support**: `.mdx` files included in compilation

### Styling System

- **Tailwind CSS**: Utility-first framework configured in `tailwind.config.js`
  - Content paths: `app/`, `components/`, `content/`, `pages/`
  - Extended font family: Inter
- **CSS Modules**: Scoped component styles (`.module.css` files)
- **Global Styles**: `app/globals.css` with CSS custom properties for theming
- **Theme System**: Uses `data-theme` attribute on `<html>` element (currently set to "executive")

### Static Assets

- **`public/images/`**: Organized by type (cases, logos, timeline, case-studies)
- **`public/textures/`**: Background textures (noise, paper)
- **`public/`**: Favicon, OG image, resume PDF, icons

### SEO & Metadata

- **Structured Data**: JSON-LD person schema on home page (app/page.tsx:18)
- **Metadata**: Comprehensive OpenGraph, Twitter Card, and canonical URL configuration in `app/layout.tsx`
- **Sitemap**: Auto-generated via `app/sitemap.ts`
- **Robots.txt**: Auto-generated via `app/robots.ts`

## Development Workflow

1. **Adding New Pages**: Create files in `app/` directory following App Router conventions
2. **Adding Components**: Place in `components/` with optional `.module.css` for scoped styles
3. **Adding Case Studies**: Create page in `app/case-studies/[slug]/page.tsx` or use MDX in `content/`
4. **Updating Styles**: Prefer Tailwind utilities; use CSS Modules for component-specific styles
5. **Icons**: FontAwesome icons are pre-configured; import from `@fortawesome/free-solid-svg-icons` or `@fortawesome/free-brands-svg-icons`

## Deployment

The site is designed for static export deployment:

- **Vercel**: Auto-detects Next.js config; push to GitHub and connect
- **AWS S3/CloudFront**: Run `npm run build` then deploy `.next/` folder
- **Security Headers**: Production CSP is applied automatically (see next.config.mjs)

## Important Architectural Notes

- **Command Menu**: Keyboard shortcut (Cmd/Ctrl+K) opens navigation palette with fuzzy search
- **Reading Progress**: Auto-displays scroll progress bar on long pages
- **Turnstile CAPTCHA**: Used on contact form and role fit analyzer; can be disabled via environment variable
- **AI Integration**: The `/api/fit` endpoint uses OpenAI to analyze job descriptions against a hardcoded candidate profile (see app/api/fit/route.ts:45-63)
- **Email Integration**: Contact submissions and fit alerts use Resend API
- **File Upload Support**: The fit analyzer supports PDF, DOCX, and TXT file uploads (max 10MB)
