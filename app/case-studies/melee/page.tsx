import Link from "next/link";
// Reuse the shared case study styles (same as Duly/Memnai).
import styles from "../duly/DulyCaseStudy.module.css";

export const metadata = {
    title: "Melee.gg Case Study — Scalable tournament ops & global community",
    description:
        "How Melee.gg became a full-stack esports/events platform: registration, decklists, pairings, standings, payments, analytics, and real-time ops — built with .NET/C#, SignalR, NHibernate/MariaDB, Stripe, SendGrid, and OpenAI.",
};

export default function MeleeCaseStudyPage() {
    return (
        <main className={styles.wrap} data-project="melee">
            <a href="#content" className={styles.skip}>Skip to content</a>

            {/* HERO */}
            <header className={styles.hero} id="top" aria-labelledby="title">
                <div className={styles.heroCopy}>
                    <p className={styles.kicker}>Platform</p>
                    <h1 id="title" className={styles.title}>
                        Melee.gg — From zero to a global tournament platform
                    </h1>
                    <p className={styles.subtitle}>
                        I led product and engineering for Melee.gg, a multi-tenant tournament & events
                        platform used by stores, TOs, and publishers worldwide. We scaled the product,
                        the codebase, and the community — delivering reliable event operations, rich
                        analytics, and a polished player experience.
                    </p>

                    <ul className={styles.badges} role="list">
                        <li className={styles.badge}>Global organizer adoption</li>
                        <li className={styles.badge}>Real-time round ops</li>
                        <li className={styles.badge}>Multi-tenant SaaS</li>
                        <li className={styles.badge}>Supports MTG & Star Wars: Unlimited</li>
                    </ul>

                    <div className={styles.heroCTAs}>
                        <Link href="#product" className={styles.btnPrimary}>See the product</Link>
                        <Link href="#architecture" className={styles.btnGhost}>Deep dive: architecture</Link>
                    </div>
                </div>

                <aside className={styles.fastFacts} aria-labelledby="facts-title">
                    <h2 id="facts-title" className={styles.h2}>Fast facts</h2>
                    <dl className={styles.factsGrid}>
                        <div>
                            <dt>Role</dt>
                            <dd>EVP of Product & Platform Architect</dd>
                        </div>
                        <div>
                            <dt>Highlights</dt>
                            <dd>Global rollouts; used by teams at Wizards of the Coast, Ravensburger, and Star City Games</dd>
                        </div>
                        <div>
                            <dt>Stack</dt>
                            <dd>.NET/C# • ASP.NET MVC • SignalR • NHibernate • MariaDB • Redis cache</dd>
                        </div>
                        <div>
                            <dt>Ops</dt>
                            <dd>Stripe payments • SendGrid email • OpenAI integration • Dockerized microservices</dd>
                        </div>
                    </dl>
                </aside>
            </header>

            <div id="content" className={styles.bodyLayout}>
                {/* TOC */}
                <nav className={styles.toc} aria-label="Sections">
                    <ol>
                        <li><a href="#outcomes">Outcomes</a></li>
                        <li><a href="#product">Product overview</a></li>
                        <li><a href="#organizers">Organizer workflows</a></li>
                        <li><a href="#players">Player experience</a></li>
                        <li><a href="#integrity">Competitive integrity</a></li>
                        <li><a href="#growth">Growth & collaborations</a></li>
                        <li><a href="#architecture">Architecture</a></li>
                        <li><a href="#scale">Scale & reliability</a></li>
                        <li><a href="#lessons">What I learned</a></li>
                        <li><a href="#cta">Let’s talk</a></li>
                    </ol>
                </nav>

                <article className={styles.content}>
                    {/* OUTCOMES */}
                    <section id="outcomes" aria-labelledby="outcomes-h">
                        <h2 id="outcomes-h" className={styles.h2}>Outcomes</h2>
                        <div className={styles.grid3}>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Adoption & community</h3>
                                <ul className={styles.list}>
                                    <li>Broad, global organizer adoption across retail stores, TOs, and circuits.</li>
                                    <li>Supported major titles including <strong>Magic: The Gathering</strong> and
                                        <strong> Star Wars: Unlimited</strong>.
                                    </li>
                                    <li>International rollouts with multi-language support where available.</li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Operational scale</h3>
                                <ul className={styles.list}>
                                    <li>Peak-event concurrency across thousands of matches.</li>
                                    <li>Real-time pairings, results, standings, and announcements.</li>
                                    <li>Export pipelines for coverage, broadcast, and judges.</li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Business impact</h3>
                                <ul className={styles.list}>
                                    <li>Payments via Stripe using tokenization; architecture designed to minimize PCI scope.</li>
                                    <li>Organizer revenue tools: ticketing, fees, affiliate campaigns.</li>
                                    <li>Data products: decklists, archetypes, and meta reporting.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* PRODUCT */}
                    <section id="product" aria-labelledby="product-h">
                        <h2 id="product-h" className={styles.h2}>Product overview</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>End-to-end tournament ops</h3>
                                <ul className={styles.list}>
                                    <li><strong>Registration & ticketing:</strong> waitlists, refunds, addons.</li>
                                    <li><strong>Check-in:</strong> QR/ID, late registrations, seat assignments.</li>
                                    <li><strong>Pairings & rounds:</strong> Swiss & round-robin helpers,
                                        manual overrides, byes, repairings.
                                    </li>
                                    <li><strong>Results & penalties:</strong> scorekeeper and judge tools.</li>
                                    <li><strong>Standings & cut:</strong> tiebreakers, breaks, and top-cut generation.</li>
                                </ul>

                                <h3 className={styles.h3}>Content & analytics</h3>
                                <ul className={styles.list}>
                                    <li><strong>Decklists:</strong> parsing/translation, legality checks, archetype tagging, search.</li>
                                    <li><strong>Meta reporting:</strong> pairings and conversion rates.</li>
                                    <li><strong>Realtime dashboards:</strong> entries, turn-in status, round health.</li>
                                </ul>
                            </div>

                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Why organizers used Melee.gg</h3>
                                <ul className={styles.list}>
                                    <li>Fast, reliable rounds with clear communications.</li>
                                    <li>Cleaner decklist tools reduce judge overhead.</li>
                                    <li>Cashflow and refunds handled safely via Stripe.</li>
                                    <li>Coverage-friendly exports (CSV/JSON/Zip) and broadcast helpers.</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* ORGANIZERS */}
                    <section id="organizers" aria-labelledby="org-h">
                        <h2 id="org-h" className={styles.h2}>Organizer workflows</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <ul className={styles.list}>
                                    <li><strong>Scheduling:</strong> copy-event; multi-format support.</li>
                                    <li><strong>Team tools:</strong> staff roles, judge accounts, permissions.</li>
                                    <li><strong>Comms:</strong> email via SendGrid; SignalR announcements and table posting.</li>
                                    <li><strong>Search & discovery:</strong> location & hub search with caching; async SignalR hub for queries.</li>
                                    <li><strong>Payouts & policies:</strong> configurable policies; organizer reporting.</li>
                                </ul>
                            </div>
                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Exports & integrations</h3>
                                <ul className={styles.list}>
                                    <li>Standings microservice, job runners, and coverage exports.</li>
                                    <li>OAuth tokens and webhooks for partner integrations.</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* PLAYERS */}
                    <section id="players" aria-labelledby="player-h">
                        <h2 id="player-h" className={styles.h2}>Player experience</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <ul className={styles.list}>
                                    <li><strong>My Events:</strong> registration status, seat, and round history.</li>
                                    <li><strong>Decklists:</strong> form helpers, legality validation, printable slips.</li>
                                    <li><strong>Notifications:</strong> email & in-app messages; table announcements.</li>
                                    <li><strong>Localization:</strong> language cookie + content translations where available.</li>
                                </ul>
                            </div>
                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Trust & safety</h3>
                                <ul className={styles.list}>
                                    <li>Anti-forgery tokens, role-based auth, audit logging.</li>
                                    <li>Tokenized payments via Stripe; architecture designed to keep PCI scope small.</li>
                                    <li>Rate-limited endpoints and queued jobs for heavy ops.</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* INTEGRITY */}
                    <section id="integrity" aria-labelledby="integrity-h">
                        <h2 id="integrity-h" className={styles.h2}>Competitive integrity</h2>
                        <div className={styles.grid3}>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Pairings</h3>
                                <p>Swiss & round-robin helpers with tiebreakers and repair logic.</p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Decklists</h3>
                                <p>Parser, translation, naming, modification history, and archetype tagging.</p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Standings</h3>
                                <p>Microservice calculates standings; exports for coverage and broadcast.</p>
                            </div>
                        </div>
                    </section>

                    {/* GROWTH */}
                    <section id="growth" aria-labelledby="growth-h">
                        <h2 id="growth-h" className={styles.h2}>Growth & collaborations</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <ul className={styles.list}>
                                    <li>Strategic campaigns and community initiatives to drive organizer adoption.</li>
                                    <li>Supported events and promotions with <strong>Wizards of the Coast</strong> and <strong>Fantasy Flight Games</strong>.</li>
                                    <li>Backed circuits and high-profile events; exports tailored for media/broadcast.</li>
                                </ul>
                            </div>
                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Results</h3>
                                <ul className={styles.list}>
                                    <li>Strong organizer retention driven by reliability and lower judge overhead.</li>
                                    <li>Healthy engagement during peak seasons across regions.</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* ARCHITECTURE */}
                    <section id="architecture" aria-labelledby="arch-h">
                        <h2 id="arch-h" className={styles.h2}>Architecture (selected)</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Core services</h3>
                                <ul className={styles.list}>
                                    <li><strong>ASP.NET MVC (.NET/C#):</strong> controllers for account, tournaments, decklists, and publisher-specific endpoints.</li>
                                    <li><strong>SignalR hubs:</strong> real-time search and tournament messaging.</li>
                                    <li><strong>NHibernate + MariaDB:</strong> typed models and read-only views for metrics/analytics.</li>
                                    <li><strong>Caching:</strong> Redis-style hot lookups and cached searches.</li>
                                    <li><strong>Email via SendGrid:</strong> account & operations messaging.</li>
                                    <li><strong>Stripe payments:</strong> tokenized payments; policy-driven refunds and fees.</li>
                                </ul>
                                <h3 className={styles.h3}>Microservices</h3>
                                <ul className={styles.list}>
                                    <li>Standings, Jobs, Format — deployed behind clean client wrappers.</li>
                                    <li>Background work for heavy calculations and report generation.</li>
                                </ul>
                            </div>
                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Data & AI</h3>
                                <ul className={styles.list}>
                                    <li><strong>Decklist domain:</strong> parse, translate, and search; legality checks and archetype views.</li>
                                    <li><strong>Analytics:</strong> global metrics views and conversion reporting.</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* SCALE */}
                    <section id="scale" aria-labelledby="scale-h">
                        <h2 id="scale-h" className={styles.h2}>Scale, reliability & security</h2>
                        <div className={styles.grid3}>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Reliability</h3>
                                <ul className={styles.list}>
                                    <li>Graceful failure paths; retries and queued jobs for spikes.</li>
                                    <li>Audit logging, structured error handling, and admin tools.</li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Performance</h3>
                                <ul className={styles.list}>
                                    <li>Server-push for pairings/results; cached searches and views.</li>
                                    <li>Binary and CSV/JSON exports tuned for broadcast speed.</li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Security</h3>
                                <ul className={styles.list}>
                                    <li>Role-based authorization; anti-forgery tokens.</li>
                                    <li>Tokenized payments via Stripe; architecture designed to keep PCI scope small.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* LESSONS */}
                    <section id="lessons" aria-labelledby="lessons-h">
                        <h2 id="lessons-h" className={styles.h2}>What I learned</h2>
                        <ul className={styles.list}>
                            <li><strong>Ops empathy wins:</strong> judge and TO pain points drive retention.</li>
                            <li><strong>SSOT for rules/math:</strong> pairing/standing logic in pure utilities is easier to test and evolve.</li>
                            <li><strong>Exports are product:</strong> coverage/broadcast flows are time-critical; build them like features.</li>
                            <li><strong>Privacy & payments:</strong> scope PCI, log sparingly, and automate audits.</li>
                            <li><strong>Real-time with restraint:</strong> push what matters (pairings/messages), cache the rest.</li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <section id="cta" aria-labelledby="cta-h">
                        <h2 id="cta-h" className={styles.h2}>Building event platforms?</h2>
                        <p className={styles.lede}>
                            I've shipped real-time tournament systems at global scale. Whether you're working on
                            esports, live events, or multi-tenant SaaS, I'd enjoy comparing notes on architecture and ops.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/contact" className={styles.btnPrimary}>Start a conversation</Link>
                            <Link href="/timeline" className={styles.btnGhost}>View my timeline</Link>
                            <Link href="/case-studies/slotomancer" className={styles.btnGhost}>Explore Slotomancer →</Link>
                        </div>
                    </section>

                    {/* LEGAL FOOTER */}
                    <p className={styles.note} style={{marginTop: "1.25rem"}}>
                        <em>All trademarks and brands are the property of their respective owners.
                            Names are used for identification only and do not imply endorsement.</em>
                    </p>

                    <p className={styles.backTop}><a href="#top">Return to top</a></p>
                </article>
            </div>
        </main>
    );
}