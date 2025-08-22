/* Duly case study — refined with persona pages (Constituent/Official/Staff/Observer)
   Route: /case-studies/duly
*/

import Link from "next/link";
import styles from "./DulyCaseStudy.module.css";

export const metadata = {
    title: "Duly Case Study — Authenticated Civic Workflows",
    description:
        "Duly authenticates locals and turns natural-language requests into governed, auditable workflows for civic operations — product thesis, architecture, outcomes, and roadmap.",
};

export default function DulyCaseStudyPage() {
    return (
        <main className={styles.wrap}>
            <a href="#content" className={styles.skip}>Skip to content</a>

            {/* HERO */}
            <header className={styles.hero} id="top" aria-labelledby="title">
                <div className={styles.heroCopy}>
                    <p className={styles.kicker}>Case study</p>
                    <h1 id="title" className={styles.title}>
                        Duly — authenticated, AI-assisted workflows for civic operations
                    </h1>
                    <p className={styles.subtitle}>
                        Authenticates local senders, transforms free-text into structured tickets, routes by policy and SLA,
                        and keeps residents, staff, and elected offices aligned — with full audit and public transparency.
                    </p>

                    <ul className={styles.badges} role="list">
                        <li className={styles.badge}>Pre-alpha (soft launch • Jul 2025)</li>
                        <li className={styles.badge}>Multi-tenant SaaS</li>
                        <li className={styles.badge}>AI-assisted workflows</li>
                        <li className={styles.badge}>Verified-Local filter</li>
                    </ul>

                    <div className={styles.heroCTAs}>
                        <Link href="#demo" className={styles.btnPrimary} aria-label="Jump to 90-second demo">
                            Watch 90-sec walk-through
                        </Link>
                        <Link href="/contact" className={styles.btnGhost} aria-label="Contact about pilot access">
                            Contact for pilot
                        </Link>
                    </div>
                </div>

                <aside className={styles.fastFacts} aria-labelledby="facts-title">
                    <h2 id="facts-title" className={styles.h2}>Fast facts</h2>
                    <dl className={styles.factsGrid}>
                        <div>
                            <dt>Role</dt>
                            <dd>Founder / Product & Tech Lead</dd>
                        </div>
                        <div>
                            <dt>Primary users</dt>
                            <dd>Residents, office staffers, elected officials; public observers</dd>
                        </div>
                        <div>
                            <dt>Top use cases</dt>
                            <dd>Service requests, work orders, constituent comms, public transparency</dd>
                        </div>
                        <div>
                            <dt>Differentiators</dt>
                            <dd>Authenticated senders • Verified-Local filter • Safe-handling lane</dd>
                        </div>
                        <div>
                            <dt>Leadership views</dt>
                            <dd>Trends & district map • Queue health • SLA performance</dd>
                        </div>
                        <div>
                            <dt>Privacy posture</dt>
                            <dd>PII redaction • Audit log • Anonymized observer view</dd>
                        </div>
                    </dl>
                </aside>
            </header>

            <div id="content" className={styles.bodyLayout}>
                {/* STICKY TOC */}
                <nav className={styles.toc} aria-label="Sections">
                    <ol>
                        <li><a href="#problem">Problem</a></li>
                        <li><a href="#outcomes">Outcomes</a></li>
                        <li><a href="#solution">Solution</a></li>
                        <li><a href="#personas">By persona</a></li>
                        <li><a href="#architecture">Architecture</a></li>
                        <li><a href="#ownership">What I owned</a></li>
                        <li><a href="#demo">Demo</a></li>
                        <li><a href="#results">Early results</a></li>
                        <li><a href="#security">Security & compliance</a></li>
                        <li><a href="#roadmap">Roadmap</a></li>
                    </ol>
                </nav>

                {/* MAIN CONTENT */}
                <article className={styles.content}>
                    <section id="problem" aria-labelledby="problem-h">
                        <h2 id="problem-h" className={styles.h2}>Problem & context</h2>
                        <p className={styles.lede}>
                            Requests land across phones, inboxes, web forms, and social. Teams re-type data, hand-route,
                            and lose status visibility. Threats and harassment complicate safe handling and compliance.
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Residents:</strong> confusing entry points; uncertain status; slow first response.</li>
                            <li><strong>Staff:</strong> manual classification and routing; no unified view; difficult handoffs.</li>
                            <li><strong>Leaders:</strong> poor observability on queues, SLAs, and district-level trends.</li>
                            <li><strong>Public:</strong> wants transparency without exposing personal data.</li>
                        </ul>
                    </section>

                    <section id="outcomes" aria-labelledby="outcomes-h">
                        <h2 id="outcomes-h" className={styles.h2}>Target outcomes (pilot goals)</h2>
                        <div className={styles.statsGrid} role="group" aria-label="Target KPIs">
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>&lt; 24h</div>
                                <div className={styles.statLabel}>Time-to-first-response</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>-50%</div>
                                <div className={styles.statLabel}>Time-to-resolution</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>30–60%</div>
                                <div className={styles.statLabel}>Automation on common requests</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>↑ CSAT</div>
                                <div className={styles.statLabel}>Proactive status & clear comms</div>
                            </div>
                        </div>
                        <p className={styles.caption}>Metrics are pilot targets; production figures available under NDA.</p>
                    </section>

                    <section id="solution" aria-labelledby="solution-h">
                        <h2 id="solution-h" className={styles.h2}>Solution overview</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Intake & authentication</h3>
                                <ul className={styles.list}>
                                    <li>Natural-language intake (web/email/SMS) → structured ticket in one click.</li>
                                    <li>Authenticated senders; **Verified-Local** filter to prioritize constituents.</li>
                                </ul>

                                <h3 className={styles.h3}>Routing & execution</h3>
                                <ul className={styles.list}>
                                    <li>Policy-based routing, SLA calendars, and queue load-balancing.</li>
                                    <li>Unified inbox with priority highlighting and a safe-handling lane for threats/harassment.</li>
                                    <li>Human + automation steps; approvals, escalations, and internal summaries.</li>
                                </ul>

                                <h3 className={styles.h3}>Comms, trends & transparency</h3>
                                <ul className={styles.list}>
                                    <li>Proactive resident updates; multilingual templates.</li>
                                    <li>Leader views: trends and district map; queue and SLA performance.</li>
                                    <li>Observer view: anonymized public signals — never personal data.</li>
                                </ul>
                            </div>

                            <figure className={styles.figure}>
                                <img
                                    src="/images/case-studies/duly/pipeline.png"
                                    alt="Duly pipeline: intake/auth → router/SLA → inbox/workflow → comms → audit → public signals"
                                    className={styles.img}
                                    loading="lazy"
                                />
                                <figcaption className={styles.caption}>
                                    Intake/auth → router/SLA → inbox/workflow → comms → audit → public signals.
                                </figcaption>
                            </figure>
                        </div>
                    </section>

                    <section id="personas" aria-labelledby="persona-h">
                        <h2 id="persona-h" className={styles.h2}>How it helps — by persona</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Residents</h3>
                                <ul className={styles.list}>
                                    <li>One place to reach every level; we route to the right office.</li>
                                    <li>Verified-Local priority without excluding non-locals.</li>
                                    <li>Clear status updates and easy replies.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={styles.h3}>Staff & Offices</h3>
                                <ul className={styles.list}>
                                    <li>Authenticated messages, unified inbox, safe-handling lane.</li>
                                    <li>Bulk actions, exports, and records-ready audit logs.</li>
                                    <li>Leader views for trends, districts, and SLA performance.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section id="architecture" aria-labelledby="arch-h">
                        <h2 id="arch-h" className={styles.h2}>Architecture & AI approach</h2>
                        <details className={styles.details}>
                            <summary className={styles.summaryHead}>High-level design (NDA-safe)</summary>
                            <div className={styles.detailsBody}>
                                <ul className={styles.list}>
                                    <li><strong>Multi-tenant:</strong> strict tenant isolation; per-tenant config & secrets.</li>
                                    <li><strong>Orchestration:</strong> tool-augmented LLM flows with guardrails and fallbacks.</li>
                                    <li><strong>Moderation:</strong> threat/harassment detection → safe-handling queue.</li>
                                    <li><strong>Governance:</strong> PII redaction, hashed identifiers, immutable audit trail and export.</li>
                                    <li><strong>Integrations:</strong> ticketing/CRM, email/SMS, GIS; phased rollout.</li>
                                    <li><strong>Observability:</strong> structured logs and run-level tracing.</li>
                                </ul>
                            </div>
                        </details>
                        <figure className={styles.figure}>
                            <img
                                src="/images/case-studies/duly/data-boundaries.png"
                                alt="Data boundaries and tenant isolation surfaces with audit/export"
                                className={styles.img}
                                loading="lazy"
                            />
                            <figcaption className={styles.caption}>Data boundaries, tenant isolation, and export surfaces.</figcaption>
                        </figure>
                    </section>

                    <section id="ownership" aria-labelledby="own-h">
                        <h2 id="own-h" className={styles.h2}>What I owned</h2>
                        <ul className={styles.list}>
                            <li>Product thesis and roadmap; user research with residents and offices.</li>
                            <li>Architecture, prompting/tooling strategy, data model, auth/roles.</li>
                            <li>UX for NL intake, unified inbox, status pages, and run log.</li>
                            <li>Delivery leadership: CI/CD, infra posture, security review, incident playbooks.</li>
                            <li>Pilot partnerships and success cadence with stakeholders.</li>
                        </ul>
                    </section>

                    <section id="demo" aria-labelledby="demo-h">
                        <h2 id="demo-h" className={styles.h2}>90-second demo</h2>
                        <p className={styles.note}>
                            Walkthrough: intake → verification → routing/SLA → inbox/safe-handling → comms → trends → audit → public view.
                        </p>

                        <video
                            className={styles.video}
                            controls
                            preload="metadata"
                            poster="/images/case-studies/duly/demo-poster.jpg"
                        >
                            <source src="/video/case-studies/duly-90sec.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>

                        <p className={styles.caption}>
                            Prefer a script? <a href="/files/duly-demo-script.pdf">Download PDF</a> or use the Markdown below.
                        </p>

                        <details className={styles.details}>
                            <summary className={styles.summaryHead}>Read the 90-second script</summary>
                            <div className={styles.detailsBody}>
                <pre style={{whiteSpace: "pre-wrap"}}>
{`(See repository: /files/duly-demo-script.md or PDF)`}
                </pre>
                            </div>
                        </details>
                    </section>

                    <section id="results" aria-labelledby="results-h">
                        <h2 id="results-h" className={styles.h2}>Early results (pilot)</h2>
                        <div className={styles.card}>
                            <ul className={styles.list}>
                                <li>Pilot scope: <em>[N depts, N request types]</em>.</li>
                                <li>Throughput to date: <em>[N requests]</em>; correct auto-classification <em>[~X%]</em>.</li>
                                <li>Human-in-the-loop rate: <em>[Y%]</em>; top deflections: <em>[examples]</em>.</li>
                                <li>Leader usage: trends & district view consulted weekly; top actions taken.</li>
                            </ul>
                            <p className={styles.caption}>Replace bracketed values as data accrues; labels stay stable for longitudinal tracking.</p>
                        </div>
                    </section>

                    <section id="security" aria-labelledby="sec-h">
                        <h2 id="sec-h" className={styles.h2}>Security, privacy, compliance</h2>
                        <ul className={styles.list}>
                            <li>Encryption in transit/at rest; tenant-scoped secrets and keys.</li>
                            <li>Records retention & export; FOIA/Public-records support.</li>
                            <li>Model/data policy: no training on tenant data; prompts/responses logged with redaction.</li>
                            <li>Accessibility (WCAG 2.2) and multilingual support.</li>
                        </ul>
                    </section>

                    <section id="roadmap" aria-labelledby="road-h">
                        <h2 id="road-h" className={styles.h2}>Roadmap</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Next 60–90 days</h3>
                                <ul className={styles.list}>
                                    <li>SLA engine v2, safe-handling workflows, bulk actions.</li>
                                    <li>Explain-my-status summaries; additional intake channels.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={styles.h3}>Next 6 months</h3>
                                <ul className={styles.list}>
                                    <li>Leader analytics (trends/district deep-dives), KPI digests.</li>
                                    <li>No-code playbooks and marketplace integrations.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section aria-labelledby="cta-h">
                        <h2 id="cta-h" className={styles.h2}>Pilot with Duly</h2>
                        <p className={styles.lede}>
                            We’re inviting 2–3 additional pilot municipalities. If this could help your team, let’s talk.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/contact" className={styles.btnPrimary}>Get in touch</Link>
                            <Link href="/case-studies/memnai" className={styles.btnGhost}>See Memnai (analytics)</Link>
                        </div>
                    </section>

                    <p className={styles.backTop}><a href="#top">Back to top ↑</a></p>
                </article>
            </div>
        </main>
    );
}