import Link from "next/link";
// Reuse the shared case study styles
import styles from "../duly/DulyCaseStudy.module.css";

export const metadata = {
    title: "Slotomancer Case Study — Cross-Platform Roguelike with Hexagonal Architecture",
    description:
        "Building a wizard-themed roguelike slot-battler that ships simultaneously on desktop and mobile from a single codebase using hexagonal architecture, achieving ~100% code sharing and enabling one-person full-stack development.",
};

export default function SlotomancerCaseStudyPage() {
    return (
        <main className={styles.wrap}>
            <a href="#content" className={styles.skip}>Skip to content</a>

            {/* HERO */}
            <header className={styles.hero} id="top" aria-labelledby="title">
                <div className={styles.heroCopy}>
                    <p className={styles.kicker}>Case study</p>
                    <h1 id="title" className={styles.title}>
                        Slotomancer — Cross-platform roguelike with hexagonal architecture
                    </h1>
                    <p className={styles.subtitle}>
                        A wizard-themed roguelike slot-battler built from the ground up with platform-agnostic
                        game engine, shared UI components, and thin platform adapters. Solo technical leadership
                        from architecture to cloud infrastructure, achieving ~100% code sharing between desktop
                        and mobile platforms.
                    </p>

                    <ul className={styles.badges} role="list">
                        <li className={styles.badge}>Desktop (Tauri) + Mobile (Expo)</li>
                        <li className={styles.badge}>100% code sharing</li>
                        <li className={styles.badge}>Hexagonal architecture</li>
                        <li className={styles.badge}>Privacy-first telemetry</li>
                        <li className={styles.badge}>350+ cards</li>
                    </ul>

                    <div className={styles.heroCTAs}>
                        <Link href="#architecture" className={styles.btnPrimary}>See the architecture</Link>
                        <Link href="#achievements" className={styles.btnGhost}>Key achievements</Link>
                    </div>
                </div>

                <aside className={styles.fastFacts} aria-labelledby="facts-title">
                    <h2 id="facts-title" className={styles.h2}>Fast facts</h2>
                    <dl className={styles.factsGrid}>
                        <div>
                            <dt>Role</dt>
                            <dd>Solo Founder, Technical Lead & Product Architect</dd>
                        </div>
                        <div>
                            <dt>Architecture</dt>
                            <dd>Hexagonal/ports-and-adapters pattern with platform-agnostic core</dd>
                        </div>
                        <div>
                            <dt>Stack</dt>
                            <dd>TypeScript • React • React Native • Tauri • Expo • Zustand • Vitest</dd>
                        </div>
                        <div>
                            <dt>Infrastructure</dt>
                            <dd>AWS (API Gateway, Lambda, S3, Athena) • Terraform IaC</dd>
                        </div>
                        <div>
                            <dt>Code sharing</dt>
                            <dd>~100% shared between platforms (game engine, state, UI, screens)</dd>
                        </div>
                    </dl>
                </aside>
            </header>

            <div id="content" className={styles.bodyLayout}>
                {/* TOC */}
                <nav className={styles.toc} aria-label="Sections">
                    <ol>
                        <li><a href="#challenge">The challenge</a></li>
                        <li><a href="#architecture">Architecture</a></li>
                        <li><a href="#achievements">Technical achievements</a></li>
                        <li><a href="#engine">Game engine design</a></li>
                        <li><a href="#systems">Core systems</a></li>
                        <li><a href="#telemetry">Privacy-first telemetry</a></li>
                        <li><a href="#tooling">Content creation tooling</a></li>
                        <li><a href="#practices">Development practices</a></li>
                        <li><a href="#metrics">Metrics & results</a></li>
                        <li><a href="#lessons">Lessons learned</a></li>
                        <li><a href="#cta">Let's connect</a></li>
                    </ol>
                </nav>

                <article className={styles.content}>
                    {/* CHALLENGE */}
                    <section id="challenge" aria-labelledby="challenge-h">
                        <h2 id="challenge-h" className={styles.h2}>The challenge</h2>
                        <p className={styles.lede}>
                            As a solo founder, I needed to ship simultaneously on desktop and mobile while maintaining
                            the agility to iterate on game balance, add content rapidly, and gather player insights
                            without sacrificing privacy.
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Solo development constraints:</strong> Limited time meant choosing between platforms
                                or finding a way to support both without duplicating work.
                            </li>
                            <li><strong>Content at scale:</strong> A roguelike needs hundreds of cards with varied mechanics,
                                but writing custom code for each would create an unsustainable bottleneck.
                            </li>
                            <li><strong>Player trust:</strong> Modern gamers expect privacy-first analytics, not
                                invasive data collection—especially from indie developers.
                            </li>
                        </ul>
                    </section>

                    {/* ARCHITECTURE */}
                    <section id="architecture" aria-labelledby="arch-h">
                        <h2 id="arch-h" className={styles.h2}>Architecture approach</h2>
                        <div className={styles.card}>
                            <h3 className={styles.h3}>Multi-shell monorepo pattern</h3>
                            <p className={styles.note}>
                                Hexagonal architecture with platform-agnostic game engine and thin platform adapters:
                            </p>
                            <pre style={{
                                background: 'var(--bg)',
                                padding: '12px',
                                borderRadius: '8px',
                                fontSize: '13px',
                                overflow: 'auto',
                                marginTop: '10px'
                            }}>
{`apps/mobile, apps/desktop  (shells: routing/bundling only)
           ↓
packages/game-state        (shared zustand store)
           ↓
packages/screens           (screen compositions)
           ↓
packages/ui                (UI primitives)
           ↓
packages/game-core         (game engine: pure TS, zero platform deps)`}
                            </pre>
                        </div>

                        <div className={styles.twoCol} style={{marginTop: '14px'}}>
                            <div>
                                <h3 className={styles.h3}>Key architectural decisions</h3>
                                <ul className={styles.list}>
                                    <li><strong>Platform-agnostic core:</strong> Game engine has zero React, React Native,
                                        or platform dependencies — pure TypeScript business logic.
                                    </li>
                                    <li><strong>Dependency inversion:</strong> Core engine has no knowledge of platforms
                                        that consume it; dependencies point inward only.
                                    </li>
                                    <li><strong>Shared everything:</strong> Screens, UI components, state management,
                                        and game logic shared across all platforms.
                                    </li>
                                    <li><strong>Deterministic gameplay:</strong> Seeded RNG enables testing, debugging,
                                        and future replay systems.
                                    </li>
                                </ul>
                            </div>
                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Benefits delivered</h3>
                                <ul className={styles.list}>
                                    <li>Test game logic without platform overhead</li>
                                    <li>Swap platforms without touching core</li>
                                    <li>Enable future platforms (web, Steam Deck) with minimal work</li>
                                    <li>Platform shells reduced to &lt;500 lines each</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* ACHIEVEMENTS */}
                    <section id="achievements" aria-labelledby="achievements-h">
                        <h2 id="achievements-h" className={styles.h2}>Key outcomes</h2>
                        <div className={styles.grid3}>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Shipped two platforms as one person</h3>
                                <p className={styles.note}>
                                    100% code sharing meant feature parity by default—no duplicate work, no platform-specific bugs.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Eliminated content bottlenecks</h3>
                                <p className={styles.note}>
                                    Standard effects system handles 95% of cards declaratively; Content Forge lets non-engineers
                                    create game-ready assets with AI assistance.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.h3}>Built player trust</h3>
                                <p className={styles.note}>
                                    Opt-in telemetry with hashed IDs, automatic retention limits, and instant opt-out
                                    earned beta community confidence.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ENGINE */}
                    <section id="engine" aria-labelledby="engine-h">
                        <h2 id="engine-h" className={styles.h2}>Game engine design</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Turn structure</h3>
                                <p className={styles.note}>
                                    An 11-phase canonical turn eliminates race conditions and timing ambiguity:
                                </p>
                                <ol className={styles.list}>
                                    <li>Start of turn → passive effects trigger</li>
                                    <li>Spin the slot machine → draw symbols</li>
                                    <li>Mana symbols → add to pools</li>
                                    <li>Spells → execute effect chains</li>
                                    <li>Player creatures → attack opponent</li>
                                    <li>Enemy creatures → attack player</li>
                                    <li>End of combat → cleanup triggers</li>
                                </ol>

                                <h3 className={styles.h3}>Determinism for testing</h3>
                                <p className={styles.note}>
                                    Seeded RNG (never Math.random()) means every test can reproduce exact gameplay
                                    sequences—critical for debugging card interactions and validating balance changes.
                                </p>
                            </div>
                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Game primitives</h3>
                                <ul className={styles.list}>
                                    <li><strong>4×5 board grid</strong> with clear/persist semantics</li>
                                    <li><strong>Library system:</strong> drawing without replacement each spin</li>
                                    <li><strong>Effect conditions:</strong> trigger only when mana/HP/turn thresholds met</li>
                                    <li><strong>Status effects:</strong> poison, shield, flying, vulnerable, etc.</li>
                                    <li><strong>RunState:</strong> immutable game state with event log</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* SYSTEMS */}
                    <section id="systems" aria-labelledby="systems-h">
                        <h2 id="systems-h" className={styles.h2}>Core systems</h2>

                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Meta-progression loops</h3>
                                <ul className={styles.list}>
                                    <li><strong>Card unlocks:</strong> Win battles and complete achievements to expand
                                        your permanent collection across all runs.
                                    </li>
                                    <li><strong>Ascension perks:</strong> Earn points from victories to purchase permanent
                                        modifiers (max 5 active)—build synergies between runs.
                                    </li>
                                    <li><strong>In-run economy:</strong> Spend 10 mana for tactical choices like artifacts,
                                        HP refills, deck removal, or rarity upgrades.
                                    </li>
                                </ul>

                                <h3 className={styles.h3}>Effects system at scale</h3>
                                <p className={styles.note}>
                                    Standard effects (dealDamage, apply, mana, modify, spawn, cleanse, draw) handle
                                    95% of the 350+ cards declaratively:
                                </p>
                                <ul className={styles.list}>
                                    <li>Every effect supports conditions (mana/HP/turn thresholds) and repeat counts</li>
                                    <li>Targeting helpers (adjacent, surrounding, all creatures) prevent manual bugs</li>
                                    <li>Custom effects registry exists only for truly unique mechanics</li>
                                </ul>
                            </div>

                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Content pipeline</h3>
                                <p className={styles.note}>
                                    JSON-driven cards/wizards/artifacts validated by Zod schemas auto-load without
                                    code changes:
                                </p>
                                <ul className={styles.list}>
                                    <li><strong>Content Forge (Python):</strong> AI-assisted wizard/card/artifact creation
                                        with pixel art generation
                                    </li>
                                    <li><strong>SQLite versioning:</strong> track content iteration history</li>
                                    <li><strong>One-click export:</strong> game-ready JSON + sprites</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* TELEMETRY */}
                    <section id="telemetry" aria-labelledby="telemetry-h">
                        <h2 id="telemetry-h" className={styles.h2}>Privacy-first telemetry</h2>
                        <p className={styles.lede}>
                            Designed an analytics system that earns player trust: opt-in only, hashed IDs, automatic
                            data deletion, and instant opt-out. Built with Terraform for infrastructure as code.
                        </p>

                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>What gets tracked</h3>
                                <ul className={styles.list}>
                                    <li><strong>Sessions:</strong> platform, OS, duration (no device fingerprinting)</li>
                                    <li><strong>Run outcomes:</strong> victory/defeat with final deck composition and artifacts</li>
                                    <li><strong>Player choices:</strong> which cards/artifacts offered vs. selected</li>
                                    <li><strong>Errors:</strong> crash reports (always sent if telemetry enabled)</li>
                                </ul>

                                <h3 className={styles.h3}>Client-side safeguards</h3>
                                <ul className={styles.list}>
                                    <li>SHA-256 hashed profile IDs—never plain text</li>
                                    <li>Event batching with 45-second flush + exponential backoff retry</li>
                                    <li>24-hour local discard policy for undelivered events</li>
                                </ul>
                            </div>

                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Infrastructure (Terraform)</h3>
                                <ul className={styles.list}>
                                    <li><strong>API Gateway + Lambda:</strong> validate and write to S3</li>
                                    <li><strong>S3 with date partitions:</strong> query by time range</li>
                                    <li><strong>Athena database:</strong> SQL analytics without servers</li>
                                    <li><strong>90-day auto-delete:</strong> lifecycle policy enforced at bucket level</li>
                                </ul>

                                <h3 className={styles.h3}>Player controls</h3>
                                <ul className={styles.list}>
                                    <li>Opt-in consent modal on first launch (disabled by default)</li>
                                    <li>Instant toggle in Settings (takes effect immediately)</li>
                                    <li>Zero PII collected—compliant by design</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* TOOLING */}
                    <section id="tooling" aria-labelledby="tooling-h">
                        <h2 id="tooling-h" className={styles.h2}>Content Forge: AI-assisted creation</h2>
                        <p className={styles.lede}>
                            Built a Python desktop app that lets non-engineers create wizards, cards, and artifacts
                            with AI-generated pixel art—then export game-ready JSON + sprites in one click.
                        </p>
                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Workflow</h3>
                                <ol className={styles.list}>
                                    <li>Describe the card/wizard/artifact in natural language</li>
                                    <li>AI generates pixel art + suggested effects</li>
                                    <li>Refine mechanics using the effects palette</li>
                                    <li>Export validates against Zod schemas</li>
                                    <li>Drop JSON + sprites into game content directory—auto-loaded on next launch</li>
                                </ol>
                            </div>
                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Why this matters</h3>
                                <ul className={styles.list}>
                                    <li>Non-engineers ship content without waiting on developers</li>
                                    <li>SQLite version history tracks iteration paths</li>
                                    <li>Schema validation catches errors before they hit the game</li>
                                    <li>Reduced card creation time from hours to minutes</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* PRACTICES */}
                    <section id="practices" aria-labelledby="practices-h">
                        <h2 id="practices-h" className={styles.h2}>Development practices</h2>

                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Testing philosophy</h3>
                                <p className={styles.note}>
                                    "Game-true" unit tests model real gameplay sequences with seeded RNG:
                                </p>
                                <ul className={styles.list}>
                                    <li><strong>Card contracts:</strong> verify rules text matches actual behavior</li>
                                    <li><strong>Effects battery:</strong> comprehensive coverage for standard + custom effects</li>
                                    <li><strong>Phase-aware timing:</strong> assert effects fire in correct turn phases</li>
                                    <li><strong>Reproducible runs:</strong> seeded tests catch non-deterministic bugs</li>
                                </ul>

                                <h3 className={styles.h3}>Monorepo structure</h3>
                                <ul className={styles.list}>
                                    <li>pnpm workspaces for dependency management</li>
                                    <li>Shared TypeScript config across packages</li>
                                    <li>Vitest for unified testing</li>
                                </ul>
                            </div>

                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Documentation for scale</h3>
                                <p className={styles.note}>
                                    17+ technical docs enable async work and AI pair programming:
                                </p>
                                <ul className={styles.list}>
                                    <li>Game rules reference (turn phases, symbol resolution)</li>
                                    <li>Architecture decision records (ADRs)</li>
                                    <li>HOW_TO guides for common workflows</li>
                                    <li>Beta participant onboarding guide</li>
                                </ul>

                                <h3 className={styles.h3}>Infrastructure as code</h3>
                                <ul className={styles.list}>
                                    <li>Terraform for AWS (API Gateway, Lambda, S3, Athena)</li>
                                    <li>GitHub repo + Discord server managed declaratively</li>
                                    <li>Version-controlled infrastructure changes</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* METRICS */}
                    <section id="metrics" aria-labelledby="metrics-h">
                        <h2 id="metrics-h" className={styles.h2}>By the numbers</h2>

                        <div className={styles.statsGrid} role="group" aria-label="Key performance metrics">
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>100%</div>
                                <div className={styles.statLabel}>Code sharing (desktop + mobile)</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>~60%</div>
                                <div className={styles.statLabel}>Faster iteration vs. dual-codebase</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>&lt;500</div>
                                <div className={styles.statLabel}>Lines per platform shell</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>350+</div>
                                <div className={styles.statLabel}>Cards (95% declarative)</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>17+</div>
                                <div className={styles.statLabel}>Technical docs</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statNumber}>Zero</div>
                                <div className={styles.statLabel}>Platform deps in game-core</div>
                            </div>
                        </div>
                    </section>

                    {/* LESSONS */}
                    <section id="lessons" aria-labelledby="lessons-h">
                        <h2 id="lessons-h" className={styles.h2}>Lessons learned</h2>

                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>What worked</h3>
                                <ul className={styles.list}>
                                    <li><strong>Ports-and-adapters from day one:</strong> Testing game logic without
                                        launching a mobile emulator or desktop window saved hundreds of hours.
                                    </li>
                                    <li><strong>Documentation as a first-class artifact:</strong> Writing rules/architecture
                                        docs enabled effective AI pair programming and async collaboration.
                                    </li>
                                    <li><strong>Opt-in telemetry with no compromises:</strong> SHA-256 hashing, 90-day
                                        auto-delete, and instant opt-out built beta community trust from day one.
                                    </li>
                                    <li><strong>Tooling investment pays dividends:</strong> Content Forge turned content
                                        creation from a week-long engineering task into a minutes-long design task.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={styles.h3}>What I'd do differently</h3>
                                <ul className={styles.list}>
                                    <li><strong>Event-driven from the start:</strong> Refactoring from phase-based to
                                        event-driven mid-development was painful; should have started there.
                                    </li>
                                    <li><strong>GUI-first for Content Forge:</strong> Started as a JSON editor; building
                                        the visual UI from day one would have accelerated non-engineer adoption.
                                    </li>
                                    <li><strong>Replay system earlier:</strong> Deterministic RNG enables replays for free;
                                        wish I'd built this for debugging and content creation sooner.
                                    </li>
                                    <li><strong>Smaller, composable effects:</strong> Some custom effects are monolithic;
                                        more aggressive composition would improve extensibility.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section id="cta" aria-labelledby="cta-h">
                        <h2 id="cta-h" className={styles.h2}>Let's connect</h2>
                        <p className={styles.lede}>
                            I'm available to discuss the architecture, technical decisions, and product thinking behind
                            Slotomancer. Happy to dive deep into cross-platform architecture, game engine design, or
                            infrastructure as code.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/contact" className={styles.btnPrimary}>Get in touch</Link>
                            <Link href="/case-studies/melee" className={styles.btnGhost}>See Melee.gg</Link>
                            <Link href="/timeline" className={styles.btnGhost}>View timeline</Link>
                        </div>
                    </section>

                    <p className={styles.backTop}><a href="#top">Back to top ↑</a></p>
                </article>
            </div>
        </main>
    );
}
