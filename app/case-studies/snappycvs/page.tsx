import Link from "next/link";
import styles from "../duly/DulyCaseStudy.module.css";

export const metadata = {
    title: "SnappyCVs — AI-Powered Resume Tailoring and Job Fit Analysis",
    description:
        "Case study on building SnappyCVs, a SaaS platform that uses AI to score job fit, generate tailored resumes and cover letters, and track applications through the hiring pipeline.",
};

export default function SnappyCVsPage() {
    return (
        <main className={styles.wrap} data-project="snappycvs">
            <a href="#content" className={styles.skip}>
                Skip to content
            </a>

            {/* ───────── HERO ───────── */}
            <header className={styles.hero} id="top" aria-labelledby="title">
                <div className={styles.heroCopy}>
                    <p className={styles.kicker}>SaaS</p>
                    <h1 id="title" className={styles.title}>
                        SnappyCVs
                    </h1>
                    <p className={styles.subtitle}>
                        A SaaS platform that transforms job hunting with AI-powered fit scoring,
                        tailored resume generation, and intelligent application tracking—all
                        grounded in a single source of truth.
                    </p>

                    <ul className={styles.badges} role="list">
                        <li className={styles.badge}>Full-stack SaaS</li>
                        <li className={styles.badge}>AI/LLM integration</li>
                        <li className={styles.badge}>AWS infrastructure</li>
                        <li className={styles.badge}>Stripe billing</li>
                    </ul>

                    <div className={styles.heroCTAs}>
                        <Link href="#architecture" className={styles.btnPrimary}>
                            See the architecture
                        </Link>
                        <Link href="/contact" className={styles.btnGhost}>
                            Get in touch
                        </Link>
                    </div>
                </div>

                <aside className={styles.fastFacts} aria-labelledby="facts-title">
                    <h2 id="facts-title" className={styles.h2}>
                        Fast facts
                    </h2>
                    <dl className={styles.factsGrid}>
                        <div>
                            <dt>Role</dt>
                            <dd>Sole developer &amp; architect</dd>
                        </div>
                        <div>
                            <dt>Company</dt>
                            <dd>Mythic Works LLC</dd>
                        </div>
                        <div>
                            <dt>Status</dt>
                            <dd>Production (January 2026)</dd>
                        </div>
                        <div>
                            <dt>Stack</dt>
                            <dd>Next.js 16, React 19, AWS, Postgres</dd>
                        </div>
                        <div>
                            <dt>AI</dt>
                            <dd>OpenAI + Anthropic</dd>
                        </div>
                        <div>
                            <dt>Billing</dt>
                            <dd>Stripe subscriptions</dd>
                        </div>
                    </dl>
                </aside>
            </header>

            {/* ───────── BODY ───────── */}
            <div id="content" className={styles.bodyLayout}>
                <nav className={styles.toc} aria-label="Sections">
                    <ol>
                        <li>
                            <a href="#overview">Overview</a>
                        </li>
                        <li>
                            <a href="#problem">Problem</a>
                        </li>
                        <li>
                            <a href="#solution">Solution</a>
                        </li>
                        <li>
                            <a href="#architecture">Architecture</a>
                        </li>
                        <li>
                            <a href="#features">Key features</a>
                        </li>
                        <li>
                            <a href="#ai-pipeline">AI pipeline</a>
                        </li>
                        <li>
                            <a href="#outcomes">Outcomes</a>
                        </li>
                        <li>
                            <a href="#cta">Let&apos;s connect</a>
                        </li>
                    </ol>
                </nav>

                <article className={styles.content}>
                    {/* ───────── OVERVIEW ───────── */}
                    <section id="overview" aria-labelledby="overview-h">
                        <h2 id="overview-h" className={styles.h2}>
                            Overview
                        </h2>
                        <p className={styles.lede}>
                            SnappyCVs is a web application that helps job seekers maintain a single,
                            canonical professional profile and use it to generate tailored resumes,
                            cover letters, and fit scores for any job posting—all with AI-powered
                            intelligence and evidence-based grounding.
                        </p>
                        <ul className={styles.list}>
                            <li>
                                <strong>Single source of truth:</strong> One structured profile
                                containing all work experience, skills, projects, and achievements
                            </li>
                            <li>
                                <strong>Fit scoring:</strong> AI-powered analysis that scores job fit
                                (0–100) with clear strengths, gaps, and actionable feedback
                            </li>
                            <li>
                                <strong>Tailored generation:</strong> ATS-friendly resumes and
                                personalized cover letters grounded in profile evidence
                            </li>
                            <li>
                                <strong>Application tracking:</strong> Full pipeline management from
                                saved jobs through offers
                            </li>
                        </ul>
                    </section>

                    {/* ───────── PROBLEM ───────── */}
                    <section id="problem" aria-labelledby="problem-h">
                        <h2 id="problem-h" className={styles.h2}>
                            Problem
                        </h2>
                        <p className={styles.lede}>
                            Job hunting is broken. Candidates struggle with fragmented tools,
                            inconsistent documents, and no clear signal on whether they&apos;re a
                            good fit.
                        </p>

                        <div className={styles.grid3}>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Document chaos</h3>
                                <ul className={styles.list}>
                                    <li>Multiple conflicting resume versions</li>
                                    <li>Tedious manual tailoring per job</li>
                                    <li>Cover letters that take hours to personalize</li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>ATS uncertainty</h3>
                                <ul className={styles.list}>
                                    <li>Keyword optimization feels like guesswork</li>
                                    <li>Resumes too long or unfocused</li>
                                    <li>Formatting that breaks on parsing</li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>No feedback loop</h3>
                                <ul className={styles.list}>
                                    <li>No honest fit assessment per job</li>
                                    <li>Gaps are invisible until rejection</li>
                                    <li>Tracking applications is fragmented</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ───────── SOLUTION ───────── */}
                    <section id="solution" aria-labelledby="solution-h">
                        <h2 id="solution-h" className={styles.h2}>
                            Solution
                        </h2>
                        <p className={styles.lede}>
                            SnappyCVs provides an end-to-end workflow: import your experience once,
                            score your fit against any job, generate tailored documents, and track
                            your applications—all from a single, unified platform.
                        </p>

                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Core workflow</h3>
                                <ol className={styles.list}>
                                    <li>
                                        <strong>Build your profile:</strong> Import from LinkedIn,
                                        JSON Resume, or plain text—or use the guided form
                                    </li>
                                    <li>
                                        <strong>Paste a job posting:</strong> System parses it into
                                        structured requirements automatically
                                    </li>
                                    <li>
                                        <strong>Review your fit:</strong> Get a score, see matched
                                        strengths with citations, and identify gaps
                                    </li>
                                    <li>
                                        <strong>Generate documents:</strong> Create ATS-optimized
                                        resumes and personalized cover letters
                                    </li>
                                    <li>
                                        <strong>Export and apply:</strong> Download PDF/DOCX and
                                        track application status
                                    </li>
                                </ol>
                            </div>
                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Key differentiators</h3>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Evidence-based:</strong> Every generated bullet cites
                                        your actual profile data
                                    </li>
                                    <li>
                                        <strong>Fit-to-page engine:</strong> Intelligent compression
                                        that explains what changed
                                    </li>
                                    <li>
                                        <strong>Safe editing:</strong> Inline tweaks without breaking
                                        layout or ATS parsing
                                    </li>
                                    <li>
                                        <strong>Multi-provider AI:</strong> Choose between OpenAI and
                                        Anthropic
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* ───────── ARCHITECTURE ───────── */}
                    <section id="architecture" aria-labelledby="architecture-h">
                        <h2 id="architecture-h" className={styles.h2}>
                            Architecture
                        </h2>
                        <p className={styles.lede}>
                            Built on AWS with a modern serverless-first approach, designed for
                            reliability, security, and cost efficiency.
                        </p>

                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Frontend &amp; application</h3>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>Next.js 16 + React 19:</strong> App Router with
                                        TypeScript for type safety
                                    </li>
                                    <li>
                                        <strong>Tailwind CSS 4.x:</strong> Utility-first styling with
                                        custom theming
                                    </li>
                                    <li>
                                        <strong>Radix UI:</strong> Accessible component primitives
                                    </li>
                                    <li>
                                        <strong>Drizzle ORM 0.45:</strong> Type-safe database access
                                        with migrations
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={styles.h3}>Infrastructure (AWS)</h3>
                                <ul className={styles.list}>
                                    <li>
                                        <strong>ECS Fargate:</strong> Containerized web + worker
                                        services
                                    </li>
                                    <li>
                                        <strong>RDS Postgres:</strong> JSONB for flexible profile
                                        storage
                                    </li>
                                    <li>
                                        <strong>S3:</strong> PDF storage with presigned URLs
                                    </li>
                                    <li>
                                        <strong>Cognito:</strong> Authentication with Hosted UI
                                    </li>
                                    <li>
                                        <strong>Terraform:</strong> Infrastructure as code
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h3 className={styles.h3}>Data model highlights</h3>
                        <div className={styles.grid3}>
                            <div className={styles.card}>
                                <h4 style={{ fontWeight: 700, marginBottom: 8 }}>
                                    Professional profile
                                </h4>
                                <p className={styles.note}>
                                    Canonical JSONB with versioned schema (v2). Supports contact
                                    info, work experience, projects, skills, education,
                                    certifications, and more.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Job management</h4>
                                <p className={styles.note}>
                                    Parsed job requirements, application status pipeline, priority
                                    levels, tags, notes, and activity timeline per job.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <h4 style={{ fontWeight: 700, marginBottom: 8 }}>
                                    Generated content
                                </h4>
                                <p className={styles.note}>
                                    Tailored resumes and cover letters with configuration, HTML
                                    snapshots, citations, and export tracking.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ───────── FEATURES ───────── */}
                    <section id="features" aria-labelledby="features-h">
                        <h2 id="features-h" className={styles.h2}>
                            Key features
                        </h2>

                        <details className={styles.details}>
                            <summary className={styles.summaryHead}>
                                Fit scoring with citations
                            </summary>
                            <div className={styles.detailsBody}>
                                <ul className={styles.list}>
                                    <li>
                                        Overall fit score (0–100) with category breakdown
                                    </li>
                                    <li>
                                        Strengths section citing specific profile evidence
                                    </li>
                                    <li>
                                        Gaps framed as missing evidence with remediation suggestions
                                    </li>
                                    <li>
                                        Red flags for core missing requirements
                                    </li>
                                    <li>
                                        Reproducible scoring given same profile version + job post
                                    </li>
                                </ul>
                            </div>
                        </details>

                        <details className={styles.details}>
                            <summary className={styles.summaryHead}>
                                Tailored resume generation
                            </summary>
                            <div className={styles.detailsBody}>
                                <ul className={styles.list}>
                                    <li>
                                        Configurable target length (1-page default, 2-page option)
                                    </li>
                                    <li>
                                        Tone presets: direct, conversational, formal
                                    </li>
                                    <li>
                                        Theme selection: minimal (free), professional, modern (Pro)
                                    </li>
                                    <li>
                                        Fit-to-page engine with transparent compression
                                    </li>
                                    <li>
                                        Inline editing without regenerating AI content
                                    </li>
                                </ul>
                            </div>
                        </details>

                        <details className={styles.details}>
                            <summary className={styles.summaryHead}>
                                Cover letter composer
                            </summary>
                            <div className={styles.detailsBody}>
                                <ul className={styles.list}>
                                    <li>
                                        Tone options: formal, conversational, enthusiastic
                                    </li>
                                    <li>
                                        Length presets: concise, standard, detailed
                                    </li>
                                    <li>
                                        Per-paragraph regeneration with custom instructions
                                    </li>
                                    <li>
                                        Citation tracking to profile evidence
                                    </li>
                                    <li>
                                        Quality checklist with automated scoring
                                    </li>
                                </ul>
                            </div>
                        </details>

                        <details className={styles.details}>
                            <summary className={styles.summaryHead}>
                                Application tracking dashboard
                            </summary>
                            <div className={styles.detailsBody}>
                                <ul className={styles.list}>
                                    <li>
                                        Pipeline stages: saved → applied → interviewing → offer
                                    </li>
                                    <li>
                                        Filtering by status, priority, remote type, tags, date range
                                    </li>
                                    <li>
                                        Bulk operations for status changes and metadata updates
                                    </li>
                                    <li>
                                        Activity timeline per application
                                    </li>
                                    <li>
                                        Dashboard insights: best matches, needs attention, recent
                                        activity
                                    </li>
                                </ul>
                            </div>
                        </details>

                        <details className={styles.details}>
                            <summary className={styles.summaryHead}>
                                Export &amp; billing
                            </summary>
                            <div className={styles.detailsBody}>
                                <ul className={styles.list}>
                                    <li>
                                        PDF export via Playwright worker with presigned S3 URLs
                                    </li>
                                    <li>
                                        DOCX export for cover letters
                                    </li>
                                    <li>
                                        Stripe subscriptions with webhook-driven entitlements
                                    </li>
                                    <li>
                                        Free tier with usage limits; Pro tier ($15/mo) for unlimited
                                    </li>
                                    <li>
                                        Customer portal for self-service billing management
                                    </li>
                                </ul>
                            </div>
                        </details>
                    </section>

                    {/* ───────── AI PIPELINE ───────── */}
                    <section id="ai-pipeline" aria-labelledby="ai-pipeline-h">
                        <h2 id="ai-pipeline-h" className={styles.h2}>
                            AI pipeline
                        </h2>
                        <p className={styles.lede}>
                            A multi-step AI pipeline with grounding requirements ensures generated
                            content is truthful and evidence-based.
                        </p>

                        <div className={styles.compare}>
                            <table className={styles.table}>
                                <colgroup>
                                    <col className={styles.colLeft} />
                                    <col className={styles.colRight} />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>Pipeline step</th>
                                        <th>Output &amp; constraints</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>1. Parse job posting</strong>
                                        </td>
                                        <td>
                                            Structured JSON: title, company, responsibilities,
                                            required/preferred skills, seniority signals, domain
                                            keywords
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>2. Score fit</strong>
                                        </td>
                                        <td>
                                            Score (0–100), strengths with citations, gaps with
                                            remediation, red flags; low temperature (0.1–0.3) for
                                            consistency
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>3. Generate resume</strong>
                                        </td>
                                        <td>
                                            Structured model with section ordering, bullet IDs,
                                            rewritten text, and citations back to profile nodes
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>4. Generate cover letter</strong>
                                        </td>
                                        <td>
                                            Paragraph-level generation with evidence sources; higher
                                            temperature (0.7) for creative writing
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={styles.twoCol} style={{ marginTop: 16 }}>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Grounding requirements</h3>
                                <ul className={styles.list}>
                                    <li>Generated bullets must cite profile nodes</li>
                                    <li>No claims without a source reference</li>
                                    <li>Cover letter paragraphs track evidence sources</li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Provider flexibility</h3>
                                <ul className={styles.list}>
                                    <li>OpenAI as default provider</li>
                                    <li>Anthropic as user-configurable alternative</li>
                                    <li>Consistent interface via AI client factory pattern</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ───────── OUTCOMES ───────── */}
                    <section id="outcomes" aria-labelledby="outcomes-h">
                        <h2 id="outcomes-h" className={styles.h2}>
                            Outcomes
                        </h2>

                        <div
                            className={styles.statsGrid}
                            role="group"
                            aria-label="Key metrics"
                        >
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>16</div>
                                <div className={styles.statLabel}>Completed milestones</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>40+</div>
                                <div className={styles.statLabel}>API endpoints</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>2</div>
                                <div className={styles.statLabel}>AI providers supported</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>5</div>
                                <div className={styles.statLabel}>Export formats</div>
                            </div>
                        </div>

                        <h3 className={styles.h3} style={{ marginTop: 24 }}>
                            Delivered capabilities
                        </h3>
                        <div className={styles.twoCol}>
                            <ul className={styles.list}>
                                <li>
                                    Full authentication system with Cognito + server sessions
                                </li>
                                <li>
                                    Profile CRUD with versioning and multiple import formats
                                </li>
                                <li>
                                    Job parsing and fit scoring with evidence citations
                                </li>
                                <li>
                                    Tailored resume generation with fit-to-page engine
                                </li>
                                <li>
                                    Cover letter composer with per-paragraph control
                                </li>
                            </ul>
                            <ul className={styles.list}>
                                <li>
                                    Application tracking dashboard with pipeline visualization
                                </li>
                                <li>
                                    PDF/DOCX export via async worker pipeline
                                </li>
                                <li>
                                    Stripe billing with webhook-driven entitlements
                                </li>
                                <li>
                                    Admin dashboard with user management and moderation
                                </li>
                                <li>
                                    GDPR-compliant data export and account deletion
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* ───────── CTA ───────── */}
                    <section id="cta" aria-labelledby="cta-h">
                        <h2 id="cta-h" className={styles.h2}>
                            Building AI-powered SaaS?
                        </h2>
                        <p className={styles.lede}>
                            SnappyCVs showcases end-to-end SaaS delivery: LLM integration, Stripe billing,
                            AWS infrastructure, and production-grade UX. If you're tackling similar challenges
                            or need someone who can ship the full stack, let's talk.
                        </p>

                        <div className={styles.heroCTAs}>
                            <Link href="/contact" className={styles.btnPrimary}>
                                Discuss your project
                            </Link>
                            <Link href="/case-studies/memnai" className={styles.btnGhost}>
                                Explore Memnai →
                            </Link>
                            <Link href="/case-studies/melee" className={styles.btnGhost}>
                                Explore Melee.gg →
                            </Link>
                        </div>
                    </section>

                    <p className={styles.backTop}>
                        <a href="#top">Return to top</a>
                    </p>
                </article>
            </div>
        </main>
    );
}
