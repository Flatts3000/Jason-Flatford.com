import Link from "next/link";
import styles from "./DulyCaseStudy.module.css";

export const metadata = {
    title: "Duly Case Study — Verified Voices, AI Summaries, Public Transparency",
    description:
        "Duly verifies constituents, summarizes messages with AI for staff, and publishes anonymized trends for the public — product thesis, MVP scope, principles, risks, and validation plan.",
};

export default function DulyCaseStudyPage() {
    return (
        <main className={styles.wrap} data-project="duly">
            <a href="#content" className={styles.skip}>Skip to content</a>

            {/* HERO */}
            <header className={styles.hero} id="top" aria-labelledby="title">
                <div className={styles.heroCopy}>
                    <p className={styles.kicker}>Civic Tech</p>
                    <h1 id="title" className={styles.title}>
                        Duly — verified constituent voices, AI-assisted summaries, and transparent dashboards
                    </h1>
                    <p className={styles.subtitle}>
                        In modern democracies, real constituent input is buried by spam, mass campaigns, and fragmented channels.
                        Duly restores the civic feedback loop: verify the messenger, structure the message, and make the response visible.
                    </p>

                    <ul className={styles.badges} role="list">
                        <li className={styles.badge}>Pre-alpha (soft launch • Jul 2025)</li>
                        <li className={styles.badge}>Verified constituents</li>
                        <li className={styles.badge}>AI topic/sentiment/urgency</li>
                        <li className={styles.badge}>Public transparency portal</li>
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
                            <dd>Founder & CEO</dd>
                        </div>
                        <div>
                            <dt>Primary users</dt>
                            <dd>Constituents, staffers, elected officials; public observers</dd>
                        </div>
                        <div>
                            <dt>Core loop</dt>
                            <dd>Verify → Summarize/Cluster → Prioritize/Act → Publish trends</dd>
                        </div>
                        <div>
                            <dt>Principles</dt>
                            <dd>Verified voices • Privacy-first • Nonpartisan transparency • AI assists people</dd>
                        </div>
                        <div>
                            <dt>Status</dt>
                            <dd>MVP in progress; pilot recruitment open</dd>
                        </div>
                    </dl>
                </aside>
            </header>

            <div id="content" className={styles.bodyLayout}>
                {/* STICKY TOC */}
                <nav className={styles.toc} aria-label="Sections">
                    <ol>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#problem">Problem</a></li>
                        <li><a href="#personas">Who it serves</a></li>
                        <li><a href="#principles">Product principles</a></li>
                        <li><a href="#mvp">What ships in the MVP</a></li>
                        <li><a href="#solution">How it works</a></li>
                        <li><a href="#metrics">Success metrics</a></li>
                        <li><a href="#architecture">Architecture & feasibility</a></li>
                        <li><a href="#risks">Risks & mitigations</a></li>
                        <li><a href="#ownership">What I owned</a></li>
                        <li><a href="#cta">Pilot</a></li>
                    </ol>
                </nav>

                {/* MAIN CONTENT */}
                <article className={styles.content}>
                    {/* OVERVIEW */}
                    <section id="overview" aria-labelledby="overview-h">
                        <h2 id="overview-h" className={styles.h2}>Executive overview</h2>
                        <p className={styles.lede}>
                            Duly is a civic engagement platform that verifies constituent identity, turns natural-language input into
                            structured insight for staff, and publishes anonymized district trends so the public can see where issues stand.
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Verified voices:</strong> residency check + one-time code; district routing.</li>
                            <li><strong>AI summaries, not decisions:</strong> topic, sentiment, urgency, deduplication; staff stay in control.</li>
                            <li><strong>Transparency:</strong> a public portal shows anonymized issue trends and official responses.</li>
                            <li><strong>Privacy by design:</strong> no public PII; redaction and audit trail across the pipeline.</li>
                        </ul>
                    </section>

                    {/* PROBLEM */}
                    <section id="problem" aria-labelledby="problem-h">
                        <h2 id="problem-h" className={styles.h2}>Problem</h2>
                        <p className={styles.lede}>
                            Offices are swamped with unverified, unstructured messages. Real constituent voices are diluted; staff rely on
                            filters and scripts; the public can’t see if concerns led to action.
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Fragmented channels:</strong> email, web forms, calls, social DMs — no unified intake.</li>
                            <li><strong>No verification:</strong> offices can’t trust residency or constituency at scale.</li>
                            <li><strong>Low signal-to-noise:</strong> mass campaigns/bots bury everyday residents.</li>
                            <li><strong>Opaque outcomes:</strong> citizens rarely see if/when an issue is addressed.</li>
                        </ul>
                    </section>

                    {/* PERSONAS */}
                    <section id="personas" aria-labelledby="personas-h">
                        <h2 id="personas-h" className={styles.h2}>Who it serves</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Constituents</h3>
                                <ul className={styles.list}>
                                    <li>One verified place to be heard by the correct office.</li>
                                    <li>See how your input contributes to district trends.</li>
                                    <li>Opt-in follow-ups when leaders respond or act.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={styles.h3}>Politicians & staff</h3>
                                <ul className={styles.list}>
                                    <li>Noise-free inbox: verified messages, clustered by topic/sentiment/urgency.</li>
                                    <li>Dashboards to detect emerging issues and track response SLAs.</li>
                                    <li>Publish official responses to the public portal with one click.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.card} style={{marginTop: 12}}>
                            <h3 className={styles.h3}>General public</h3>
                            <ul className={styles.list}>
                                <li>District-level, anonymized summaries of what people raise.</li>
                                <li>See responsiveness over time without exposing personal data.</li>
                            </ul>
                        </div>
                    </section>

                    {/* PRINCIPLES */}
                    <section id="principles" aria-labelledby="principles-h">
                        <h2 id="principles-h" className={styles.h2}>Product principles</h2>
                        <ul className={styles.list}>
                            <li><strong>Verified voices only:</strong> input counts after residency verification.</li>
                            <li><strong>Privacy-first:</strong> PII is redacted; public data is aggregated and anonymized.</li>
                            <li><strong>Transparency without partisanship:</strong> issue- and data-driven, not editorial.</li>
                            <li><strong>AI as a tool:</strong> assists with summaries; humans decide and publish.</li>
                            <li><strong>Build for trust, not engagement metrics:</strong> fast, respectful UX — finish in under 5 minutes.</li>
                        </ul>
                    </section>

                    {/* MVP SCOPE */}
                    <section id="mvp" aria-labelledby="mvp-h">
                        <h2 id="mvp-h" className={styles.h2}>What ships in the MVP</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Included</h3>
                                <ul className={styles.list}>
                                    <li>Constituent verification (ZIP + email/SMS; optional higher assurance).</li>
                                    <li>Message intake (structured prompts, free text, voice-to-text).</li>
                                    <li>AI summarization: topic, sentiment, urgency; deduplication and spam guard.</li>
                                    <li>Staff dashboard: clusters, filters, message review, “needs reply/escalate”.</li>
                                    <li>Public portal: anonymized trends, published responses.</li>
                                    <li>Notifications: follow-ups on topics users care about.</li>
                                    <li>Accessibility (WCAG 2.1+), mobile-first layout.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={styles.h3}>Out of scope (Phase 2+)</h3>
                                <ul className={styles.list}>
                                    <li>Mass outreach campaigns, real-time chat.</li>
                                    <li>Advanced analytics beyond core trends.</li>
                                    <li>Full voter-roll integrations; multilingual beyond English.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* HOW IT WORKS */}
                    <section id="solution" aria-labelledby="solution-h">
                        <h2 id="solution-h" className={styles.h2}>How it works (pipeline)</h2>
                        <p className={styles.note}>
                            Verify the sender → structure the message → route by policy/SLA → staff act → publish anonymized outcomes.
                        </p>

                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>For staff</h3>
                                <ul className={styles.list}>
                                    <li>Verified, deduped inbox with safe-handling lane for threats.</li>
                                    <li>Clusters show volume, sentiment, subtopics, and urgency.</li>
                                    <li>Publish official responses to close the loop publicly.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={styles.h3}>For constituents</h3>
                                <ul className={styles.list}>
                                    <li>Simple input; clear confirmation; optional follow-ups.</li>
                                    <li>See how your message contributes to district-level trends.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* METRICS */}
                    <section id="metrics" aria-labelledby="metrics-h">
                        <h2 id="metrics-h" className={styles.h2}>Success metrics (pilot targets)</h2>
                        <div className={styles.statsGrid} role="group" aria-label="Target KPIs">
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>↑ verification</div>
                                <div className={styles.statLabel}>% verified users submitting monthly</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>&lt; 24h</div>
                                <div className={styles.statLabel}>Time-to-first-response</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>−50%</div>
                                <div className={styles.statLabel}>Time-to-resolution</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>30–60%</div>
                                <div className={styles.statLabel}>Automation/deflection on common requests</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>↑ transparency</div>
                                <div className={styles.statLabel}>% feedback summarized & published</div>
                            </div>
                        </div>
                        <p className={styles.caption}>Additional measures: NPS (constituents & staff), model accuracy vs. human review, public dashboard engagement.</p>
                    </section>

                    {/* ARCHITECTURE */}
                    <section id="architecture" aria-labelledby="arch-h">
                        <h2 id="arch-h" className={styles.h2}>Architecture & feasibility</h2>
                        <details className={styles.details}>
                            <summary className={styles.summaryHead}>High-level design (NDA-safe)</summary>
                            <div className={styles.detailsBody}>
                                <ul className={styles.list}>
                                    <li><strong>Multi-tenant:</strong> strict tenant isolation; scoped access; per-district config.</li>
                                    <li><strong>Verification:</strong> ZIP + email/SMS; optional higher-assurance integrations later.</li>
                                    <li><strong>AI pipeline:</strong> topic clustering, sentiment/urgency, dedup/spam; human-in-the-loop for pilots.</li>
                                    <li><strong>Governance:</strong> PII redaction, hashed IDs, immutable audit/export; WCAG 2.1+.</li>
                                    <li><strong>Public data:</strong> anonymized aggregates streamed to the transparency portal.</li>
                                </ul>
                            </div>
                        </details>
                    </section>

                    {/* RISKS */}
                    <section id="risks" aria-labelledby="risks-h">
                        <h2 id="risks-h" className={styles.h2}>Risks & mitigations</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <ul className={styles.list}>
                                    <li><strong>Identity & integrity:</strong> start simple; explore voter-file partnerships; log metadata for audit.</li>
                                    <li><strong>AI accuracy:</strong> human review in pilots; confidence scores; flagging to improve models.</li>
                                    <li><strong>Adoption:</strong> begin with willing offices; deliver clear value (weekly trend briefs).</li>
                                </ul>
                            </div>
                            <div>
                                <ul className={styles.list}>
                                    <li><strong>Spam/abuse:</strong> verification, rate limits, heuristics; safe-handling lane for threats.</li>
                                    <li><strong>Legal/ethical:</strong> privacy counsel; opt-in transparency; third-party audits where applicable.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* OWNERSHIP */}
                    <section id="ownership" aria-labelledby="own-h">
                        <h2 id="own-h" className={styles.h2}>What I owned</h2>
                        <ul className={styles.list}>
                            <li>Product thesis, principles, and MVP scope; stakeholder interviews.</li>
                            <li>Architecture and data governance; verification strategy; AI prompting & evaluation.</li>
                            <li>UX for intake, cluster review, public transparency, and audit logs.</li>
                            <li>Delivery leadership: CI/CD, security posture, incident playbooks, pilot success cadence.</li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <section id="cta" aria-labelledby="cta-h">
                        <h2 id="cta-h" className={styles.h2}>Interested in civic tech?</h2>
                        <p className={styles.lede}>
                            Duly is seeking pilot municipalities ready to transform constituent engagement.
                            If you're building in the civic space or exploring similar challenges, I'd welcome the conversation.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="https://dulyelected.org" className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">
                                Visit dulyelected.org
                            </Link>
                            <Link href="/contact" className={styles.btnGhost}>Discuss civic tech</Link>
                            <Link href="/case-studies/memnai" className={styles.btnGhost}>Explore Memnai →</Link>
                        </div>
                    </section>

                    <p className={styles.backTop}><a href="#top">Return to top</a></p>
                </article>
            </div>
        </main>
    );
}