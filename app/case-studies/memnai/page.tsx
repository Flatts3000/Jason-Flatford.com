import Link from "next/link";
// Reuse the Duly styles for identical aesthetics:
import styles from "../duly/DulyCaseStudy.module.css";

export const metadata = {
    title: "Memnai Case Study — Unifying Data Ingestion & AI Reporting",
    description:
        "Memnai ingests documents and data at scale, extracts structured information, and lets anyone query with natural language for instant, secure reporting.",
};

export default function MemnaiCaseStudyPage() {
    return (
        <main className={styles.wrap}>
            <a href="#content" className={styles.skip}>Skip to content</a>

            {/* HERO */}
            <header className={styles.hero} id="top" aria-labelledby="title">
                <div className={styles.heroCopy}>
                    <p className={styles.kicker}>Case study</p>
                    <h1 id="title" className={styles.title}>
                        Memnai — Unifying data ingestion & AI reporting
                    </h1>
                    <p className={styles.subtitle}>
                        From raw documents to ready-to-use insights: Memnai captures any document, extracts and
                        normalizes data, and lets teams ask questions in natural language to get trusted,
                        shareable answers in seconds.
                    </p>

                    <ul className={styles.badges} role="list">
                        <li className={styles.badge}>Pre-MVP</li>
                        <li className={styles.badge}>AI OCR + schema-aware extraction</li>
                        <li className={styles.badge}>LLM → SQL query engine</li>
                        <li className={styles.badge}>Interactive reports & exports</li>
                    </ul>

                    <div className={styles.heroCTAs}>
                        <Link href="#solution" className={styles.btnPrimary}>See how it works</Link>
                        <Link href="/contact" className={styles.btnGhost}>Talk about pilots</Link>
                    </div>
                </div>

                <aside className={styles.fastFacts} aria-labelledby="facts-title">
                    <h2 id="facts-title" className={styles.h2}>Fast facts</h2>
                    <dl className={styles.factsGrid}>
                        <div>
                            <dt>Role</dt>
                            <dd>Founder & Product/Tech Lead</dd>
                        </div>
                        <div>
                            <dt>Thesis</dt>
                            <dd>Unlock data through conversation — secure, no-code insights</dd>
                        </div>
                        <div>
                            <dt>Core loop</dt>
                            <dd>Ingest → Extract/Validate → Query (NL→SQL) → Visualize/Export</dd>
                        </div>
                        <div>
                            <dt>Deployment</dt>
                            <dd>Cloud or on-prem (enterprise)</dd>
                        </div>
                    </dl>
                </aside>
            </header>

            <div id="content" className={styles.bodyLayout}>
                {/* STICKY TOC */}
                <nav className={styles.toc} aria-label="Sections">
                    <ol>
                        <li><a href="#problem">Problem & opportunity</a></li>
                        <li><a href="#market">Market</a></li>
                        <li><a href="#solution">Product overview</a></li>
                        <li><a href="#pipeline">Ingestion pipeline</a></li>
                        <li><a href="#reporting">AI reporting & query</a></li>
                        <li><a href="#verticals">Industry verticals</a></li>
                        <li><a href="#competitive">Competitive landscape</a></li>
                        <li><a href="#gtm">Business model & GTM</a></li>
                        <li><a href="#vision">Vision</a></li>
                        <li><a href="#cta">Pilot</a></li>
                    </ol>
                </nav>

                {/* MAIN CONTENT */}
                <article className={styles.content}>
                    {/* PROBLEM */}
                    <section id="problem" aria-labelledby="problem-h">
                        <h2 id="problem-h" className={styles.h2}>Problem & opportunity</h2>
                        <p className={styles.lede}>
                            Most organizations still rely on manual data entry and scattered tooling. Time is wasted,
                            costs compound, and critical decisions wait on spreadsheets and email chains.
                        </p>
                        <ul className={styles.list}>
                            <li>Office teams spend huge chunks of time on manual entry and reconciliation.</li>
                            <li>Per-employee cost of data inefficiency is measured in tens of thousands annually.</li>
                            <li>Adoption of automation and NL query is still low — a major efficiency gap.</li>
                        </ul>
                    </section>

                    {/* MARKET */}
                    <section id="market" aria-labelledby="market-h">
                        <h2 id="market-h" className={styles.h2}>Market opportunity</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <p>
                                    The AI-driven Intelligent Document Processing and data-entry markets are large and growing,
                                    with billions in spend shifting from manual workflows to AI-assisted automation.
                                </p>
                                <p>
                                    Targeting document-heavy enterprises yields a sizable SAM; even single-digit market capture
                                    supports a venture-scale outcome.
                                </p>
                            </div>
                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Why now</h3>
                                <ul className={styles.list}>
                                    <li>LLMs dramatically improve OCR + extraction accuracy.</li>
                                    <li>Natural-language query puts analytics in every team’s hands.</li>
                                    <li>On-prem options meet security/compliance needs.</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* SOLUTION */}
                    <section id="solution" aria-labelledby="solution-h">
                        <h2 id="solution-h" className={styles.h2}>Product overview</h2>
                        <div>
                            <h3 className={styles.h3}>Unified platform</h3>
                            <ul className={styles.list}>
                                <li><strong>Ingestion:</strong> any document or file type.</li>
                                <li><strong>Structured storage:</strong> cleaned & validated data.</li>
                                <li><strong>AI query engine:</strong> NL → SQL with previews.</li>
                                <li><strong>Visualization & export:</strong> tables/charts; CSV, Excel, PDF, Google Docs.</li>
                            </ul>
                        </div>
                    </section>

                    {/* PIPELINE */}
                    <section id="pipeline" aria-labelledby="pipeline-h">
                        <h2 id="pipeline-h" className={styles.h2}>Ingestion pipeline</h2>
                        <p className={styles.note}>
                            Documents, spreadsheets, PDFs, medical records, logs, and even audio/video transcripts
                            are parsed by the Memnai ingestion engine (AI OCR, ML, schema-aware extraction), then
                            stored in validated, structured form for BI and apps.
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Business & legal docs:</strong> invoices, POs, contracts.</li>
                            <li><strong>Forms & applications:</strong> intake, surveys; OCR/ICR for handwriting.</li>
                            <li><strong>Structured files:</strong> spreadsheets & CSVs without copy-paste.</li>
                            <li><strong>Unstructured & media:</strong> scans, medical records, logs, audio/video.</li>
                        </ul>
                    </section>

                    {/* REPORTING */}
                    <section id="reporting" aria-labelledby="reporting-h">
                        <h2 id="reporting-h" className={styles.h2}>AI reporting & query</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <ul className={styles.list}>
                                    <li><strong>Natural language → SQL:</strong> describe a question; generate optimized SQL with result previews.</li>
                                    <li><strong>Enterprise security:</strong> role-based permissions and granular access controls.</li>
                                    <li><strong>Interactive reports & exports:</strong> tables/charts; export to common formats.</li>
                                    <li><strong>Impact:</strong> early adopters report large workload reductions.</li>
                                </ul>
                            </div>
                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Why it matters</h3>
                                <p>
                                    Analysts and operators get answers without waiting on BI backlogs; leaders get
                                    faster, repeatable decisions grounded in clean data.
                                </p>
                            </aside>
                        </div>
                    </section>

                    {/* VERTICALS */}
                    <section id="verticals" aria-labelledby="verticals-h">
                        <h2 id="verticals-h" className={styles.h2}>Industry verticals</h2>
                        <div className={styles.grid3}>
                            <div className={styles.card}><h3 className={styles.h3}>Finance & Accounting</h3><p>Automate invoices, statements & claims; reduce errors and cost.</p></div>
                            <div className={styles.card}><h3 className={styles.h3}>Healthcare & Life Sciences</h3><p>Capture patient charts, prescriptions & lab reports with high accuracy.</p></div>
                            <div className={styles.card}><h3 className={styles.h3}>Logistics & Manufacturing</h3><p>Digitize work orders, manifests & shipping docs for faster operations.</p></div>
                            <div className={styles.card}><h3 className={styles.h3}>Government & Public Sector</h3><p>Streamline permits, tax filings and benefits applications to cut backlogs.</p></div>
                            <div className={styles.card}><h3 className={styles.h3}>Retail & E-commerce</h3><p>Automate POs, invoices and customer forms to improve agility.</p></div>
                            <div className={styles.card}><h3 className={styles.h3}>Legal & Education</h3><p>Extract key metadata from contracts, case files and academic records.</p></div>
                        </div>
                        <p className={styles.caption}>Representative target sectors for early GTM focus.</p>
                    </section>

                    {/* COMPETITIVE */}
                    <section id="competitive" aria-labelledby="competitive-h">
                        <h2 id="competitive-h" className={styles.h2}>Competitive landscape</h2>
                        <div className={styles.compare}>
                            <table className={styles.table}>
                                {/* NEW: lock column proportions for readability */}
                                <colgroup>
                                    <col className={styles.colLeft}/>
                                    <col className={styles.colRight}/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th>Capabilities & integration</th>
                                    <th>Ease of use</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>IDP vendors (document capture & extraction)</td>
                                    <td>Powerful but complex; limited analytics</td>
                                </tr>
                                <tr>
                                    <td>Analytics platforms (dashboards, BI)</td>
                                    <td>Great for viz; weak on ingestion/extraction</td>
                                </tr>
                                <tr>
                                    <td>LLM query tools (NL→SQL)</td>
                                    <td>Fast ad-hoc Q&A; no unified data layer</td>
                                </tr>
                                <tr>
                                    <td><strong>Memnai</strong></td>
                                    <td><strong>Ingestion + structured storage + NL→SQL + reporting</strong></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className={styles.caption}>Memnai bridges three fragmented tool categories into one secure platform.</p>
                    </section>

                    {/* GTM */}
                    <section id="gtm" aria-labelledby="gtm-h">
                        <h2 id="gtm-h" className={styles.h2}>Business model & GTM</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <ul className={styles.list}>
                                    <li><strong>Subscription:</strong> freemium + monthly premium AI features.</li>
                                    <li><strong>Enterprise:</strong> per-seat licensing; on-prem for regulated teams.</li>
                                    <li><strong>API platform:</strong> developer APIs & integrations (Postgres, MySQL, etc.).</li>
                                    <li><strong>Community/content:</strong> demos, webinars, thought leadership.</li>
                                    <li><strong>Enterprise sales:</strong> focus on security/compliance-heavy industries.</li>
                                </ul>
                            </div>
                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Targets</h3>
                                <ul className={styles.list}>
                                    <li>Paid users: growth toward six figures with focused verticals.</li>
                                    <li>Funding: seed round for 12–18 month runway.</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* VISION */}
                    <section id="vision" aria-labelledby="vision-h">
                        <h2 id="vision-h" className={styles.h2}>Vision</h2>
                        <p className={styles.lede}>
                            Unlock your data through conversation — democratize access to organizational data with real-time,
                            secure answers, without code or BI backlogs.
                        </p>
                        <p className={styles.note}>
                            Powered by schema-aware AI and flexible deployment, we envision insights flowing freely across teams.
                        </p>
                    </section>

                    {/* CTA */}
                    <section id="cta" aria-labelledby="cta-h">
                        <h2 id="cta-h" className={styles.h2}>Pilot Memnai</h2>
                        <p className={styles.lede}>
                            We’re lining up early pilots in document-heavy environments (finance, healthcare, manufacturing).
                            If you’d like to explore on-prem or private-cloud deployments, let’s talk.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/contact" className={styles.btnPrimary}>Get in touch</Link>
                            <Link href="/case-studies/duly" className={styles.btnGhost}>See Duly (civic)</Link>
                        </div>
                    </section>

                    <p className={styles.backTop}><a href="#top">Back to top ↑</a></p>
                </article>
            </div>
        </main>
    );
}