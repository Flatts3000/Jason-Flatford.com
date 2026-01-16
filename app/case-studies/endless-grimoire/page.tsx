import Link from "next/link";
// Reuse the Duly styles so visuals match other case studies
import styles from "../duly/DulyCaseStudy.module.css";

export const metadata = {
    title: "The Endless Grimoire — cozy spell-craft idle with polished systems",
    description:
        "A cozy, tap-friendly spell-craft idle game: gather → hire workers → learn spells → automate → prestige across rotating themes. Case study highlighting design craft and a strongly-typed, modular engine.",
};

export default function EndlessGrimoireCaseStudy() {
    return (
        <main className={styles.wrap} data-project="grimoire">
            <a href="#content" className={styles.skip}>Skip to content</a>

            {/* HERO */}
            <header className={styles.hero} id="top" aria-labelledby="title">
                <div className={styles.heroCopy}>
                    <p className={styles.kicker}>Game Dev</p>
                    <h1 id="title" className={styles.title}>
                        The Endless Grimoire — cozy spell-craft idle, built for delight
                    </h1>
                    <p className={styles.subtitle}>
                        Tap to gather, hire quirky workers, unlock passive sigils, and time active spells to
                        push the run. Under the hood: a strongly-typed game loop, configurable balance, and
                        human-friendly math with a smooth, responsive UI.
                    </p>

                    <ul className={styles.badges} role="list">
                        <li className={styles.badge}>Pre-MVP</li>
                        <li className={styles.badge}>Active & passive spells</li>
                        <li className={styles.badge}>Workers + automation</li>
                        <li className={styles.badge}>Offline progress</li>
                        <li className={styles.badge}>20+ theme variants</li>
                    </ul>

                    <div className={styles.heroCTAs}>
                        <Link href="#gallery" className={styles.btnPrimary}>See screenshots</Link>
                        <Link href="/contact" className={styles.btnGhost}>Request a build</Link>
                    </div>
                </div>

                <aside className={styles.fastFacts} aria-labelledby="facts">
                    <h2 id="facts" className={styles.h2}>Fast facts</h2>
                    <dl className={styles.factsGrid}>
                        <div>
                            <dt>Role</dt>
                            <dd>Design, Engineering, Art Direction</dd>
                        </div>
                        <div>
                            <dt>Core loop</dt>
                            <dd>Gather → Hire → Learn spells → Automate → Prestige</dd>
                        </div>
                        <div>
                            <dt>Stack</dt>
                            <dd>TypeScript • React Native/Expo • Zod-validated configs</dd>
                        </div>
                        <div>
                            <dt>UX flourishes</dt>
                            <dd>Parallax BG • micro-animations • Font Awesome 6</dd>
                        </div>
                    </dl>
                </aside>
            </header>

            <div id="content" className={styles.bodyLayout}>
                {/* TOC */}
                <nav className={styles.toc} aria-label="Sections">
                    <ol>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#fun">What makes it fun</a></li>
                        <li><a href="#systems">Systems</a></li>
                        <li><a href="#engineering">Engineering highlights</a></li>
                        <li><a href="#gallery">Screenshots</a></li>
                        <li><a href="#roadmap">Roadmap</a></li>
                        <li><a href="#cta">Get a build</a></li>
                    </ol>
                </nav>

                <article className={styles.content}>
                    {/* OVERVIEW */}
                    <section id="overview" aria-labelledby="overview-h">
                        <h2 id="overview-h" className={styles.h2}>Overview</h2>
                        <p className={styles.lede}>
                            <em>The Endless Grimoire</em> is a cozy, session-friendly idle/incremental with a spellbook
                            at its heart. You gather arcana, hire workers to automate taps, unlock passive sigils that
                            reshape the math, and time active spells with cooldowns to break through soft caps.
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Active & passive magic:</strong> actives have costs/cooldowns; passives unlock permanent
                                modifiers and new builds.
                            </li>
                            <li><strong>Workers & automation:</strong> Producers, Speeders, and Boosters with readable value curves
                                and batch-purchase helpers.
                            </li>
                            <li><strong>Rotating themes:</strong> <u>20+ themes</u> planned for launch (some purchasable). Each time you
                                prestige—jumping the rift into the next timeline—you’ll play in a theme you haven’t seen yet.
                            </li>
                        </ul>
                    </section>

                    {/* FUN */}
                    <section id="fun" aria-labelledby="fun-h">
                        <h2 id="fun-h" className={styles.h2}>What makes it fun</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Pacing & payoffs</h3>
                                <ul className={styles.list}>
                                    <li>Short spikes from actives; long arcs from passives.</li>
                                    <li>Clear near-term goals: the next worker, sigil, or spell rank.</li>
                                    <li>“Aha!” moments when synergies unlock a new tier of income.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className={styles.h3}>Clarity by design</h3>
                                <ul className={styles.list}>
                                    <li>Cards explain exactly what changed (icons + crisp copy).</li>
                                    <li>Cooldowns, costs, and yields in human time/number formats.</li>
                                    <li>Progress bars and highlight states reduce cognitive load.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* SYSTEMS */}
                    <section id="systems" aria-labelledby="systems-h">
                        <h2 id="systems-h" className={styles.h2}>Systems at a glance</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <h3 className={styles.h3}>Spellbook</h3>
                                <ul className={styles.list}>
                                    <li><strong>Actives:</strong> cost magic, trigger effects, and enter cooldown.</li>
                                    <li><strong>Passives:</strong> unlock permanent multipliers and new caps.</li>
                                    <li><strong>Detail sheets:</strong> cost rows, cooldown bars, availability, and smart primary
                                        actions (“Develop”, “Cast”, “Cooling down”).
                                    </li>
                                </ul>
                                <h3 className={styles.h3}>Workers</h3>
                                <ul className={styles.list}>
                                    <li>Three worker families (Producers/Speeders/Boosters) with geometric pricing.</li>
                                    <li>Batch math + max-purchasable helpers; clear buy/affordance states.</li>
                                </ul>
                                <h3 className={styles.h3}>Progression</h3>
                                <ul className={styles.list}>
                                    <li>Soft/hard caps via config; narrative intro variants per theme.</li>
                                    <li>Theme packs (palette, flavor, icons) swap with a single line.</li>
                                </ul>
                            </div>
                            <aside className={styles.card}>
                                <h3 className={styles.h3}>UX touches</h3>
                                <ul className={styles.list}>
                                    <li>Parallax backgrounds with clamped scroll transforms.</li>
                                    <li>Font Awesome 6 for iconography; accessible contrast & sizes.</li>
                                    <li>Tap targets & gestures tuned for “one-thumb” play.</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* ENGINEERING */}
                    <section id="engineering" aria-labelledby="eng-h">
                        <h2 id="eng-h" className={styles.h2}>Engineering highlights</h2>
                        <div className={styles.twoCol}>
                            <div>
                                <ul className={styles.list}>
                                    <li><strong>SSOT for math:</strong> a Derived-Stats engine aggregates all modifiers (spells, upgrades,
                                        theme) so UI reads from one source of truth.
                                    </li>
                                    <li><strong>Typed configs with Zod:</strong> game balance in JSON validated by Zod; safe merges +
                                        experiment flags for rapid iteration.
                                    </li>
                                    <li><strong>Workers domain:</strong> pure utilities for pricing, batch buys, and max-buy; framework-agnostic
                                        so logic is easy to unit test.
                                    </li>
                                    <li><strong>Offline reconciliation:</strong> snapshot, cap, and produce during downtime with predictable,
                                        human-readable math.
                                    </li>
                                    <li><strong>React context + hooks:</strong> Campaign & Theme providers isolate state; tiny, memoized
                                        selectors keep the UI snappy.
                                    </li>
                                </ul>
                            </div>
                            <aside className={styles.card}>
                                <h3 className={styles.h3}>Stack & tooling</h3>
                                <ul className={styles.list}>
                                    <li>TypeScript • React Native (Expo) • Font Awesome 6</li>
                                    <li>Intl APIs for number/time formatting</li>
                                    <li>Deep-merge config loader, feature flags, telemetry hooks</li>
                                </ul>
                            </aside>
                        </div>
                    </section>

                    {/* GALLERY */}
                    <section id="gallery" aria-labelledby="gallery-h">
                        <h2 id="gallery-h" className={styles.h2}>Screenshots</h2>
                        <p className={styles.note}>
                            Phone-first UI: portrait screens are displayed in a comfortable two-column gallery on desktop and a single column on mobile.
                        </p>

                        {/* NOTE: This grid class is defined below in the CSS add-on */}
                        <div className={styles.portraitGrid}>
                            {/* 05 — Intro */}
                            <figure className={styles.figure}>
                                <img
                                    src="/images/case-studies/grimoire/screen-05.png"
                                    alt="Intro scene with Begin Calibration button and tagline 'Spells are promises. Keep yours.'"
                                    className={styles.img}
                                    loading="lazy"
                                />
                                <figcaption className={styles.caption}>
                                    <strong>Opening:</strong> “A spell is a promise.” Begin Calibration to start your first run.
                                </figcaption>
                            </figure>

                            {/* 01 — Narrative objective */}
                            <figure className={styles.figure}>
                                <img
                                    src="/images/case-studies/grimoire/screen-01.png"
                                    alt="Narrative objective with large call-to-action and parallax harbor backdrop"
                                    className={styles.img}
                                    loading="lazy"
                                />
                                <figcaption className={styles.caption}>
                                    <strong>Narrative objective:</strong> story-driven goals with big, thumb-friendly actions.
                                </figcaption>
                            </figure>

                            {/* 02 — Trading / Items & Workers */}
                            <figure className={styles.figure}>
                                <img
                                    src="/images/case-studies/grimoire/screen-02.png"
                                    alt="Trading view showing yields, automation, items with bonuses, and workers"
                                    className={styles.img}
                                    loading="lazy"
                                />
                                <figcaption className={styles.caption}>
                                    <strong>Trading:</strong> yields & automation at the top; items and workers drive long-term efficiency.
                                </figcaption>
                            </figure>

                            {/* 03 — Spellbook */}
                            <figure className={styles.figure}>
                                <img
                                    src="/images/case-studies/grimoire/screen-03.png"
                                    alt="Spellbook grid with active and passive spells"
                                    className={styles.img}
                                    loading="lazy"
                                />
                                <figcaption className={styles.caption}>
                                    <strong>Spellbook:</strong> actives for bursts, passives for permanent power.
                                </figcaption>
                            </figure>

                            {/* 04 — Spell detail sheet */}
                            <figure className={styles.figure}>
                                <img
                                    src="/images/case-studies/grimoire/screen-04.png"
                                    alt="Spell detail sheet with cost rows, cooldown, availability, and context action"
                                    className={styles.img}
                                    loading="lazy"
                                />
                                <figcaption className={styles.caption}>
                                    <strong>Detail sheet:</strong> costs, cooldown, and a smart primary action (Develop, Cast, or Cooling).
                                </figcaption>
                            </figure>

                            {/* 06 — Ancient Antiquity (Bronze-age) theme */}
                            <figure className={styles.figure}>
                                <img
                                    src="/images/case-studies/grimoire/screen-06.png"
                                    alt="Ancient Antiquity theme with Chariot Rim Sets objective and bronze-tinted UI"
                                    className={styles.img}
                                    loading="lazy"
                                />
                                <figcaption className={styles.caption}>
                                    <strong>Ancient Antiquity:</strong> forge <em>Chariot Rim Sets</em>; bronze palette, period flavor text.
                                </figcaption>
                            </figure>

                            {/* 07 — Wild-West theme */}
                            <figure className={styles.figure}>
                                <img
                                    src="/images/case-studies/grimoire/screen-07.png"
                                    alt="Wild-West theme with Dustwhisper Tonic objective and frontier town backdrop"
                                    className={styles.img}
                                    loading="lazy"
                                />
                                <figcaption className={styles.caption}>
                                    <strong>Wild-West:</strong> distill <em>Dustwhisper Tonic</em> before the rift closes; new art, copy, and items.
                                </figcaption>
                            </figure>
                        </div>

                        <p className={styles.note}>
                            Themes rotate as you prestige. At launch we’re targeting <strong>20+ distinct themes</strong> (with some
                            purchasable) so each timeline jump feels fresh.
                        </p>
                    </section>

                    {/* ROADMAP */}
                    <section id="roadmap" aria-labelledby="roadmap-h">
                        <h2 id="roadmap-h" className={styles.h2}>What’s next</h2>
                        <ul className={styles.list}>
                            <li>Achievements & meta-progress “chapters”.</li>
                            <li>More passive synergies and late-game loops.</li>
                            <li>Live-ops hooks for seasonal and purchasable themes.</li>
                            <li>Web build + iOS/Android via Expo EAS.</li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <section id="cta" aria-labelledby="cta-h">
                        <h2 id="cta-h" className={styles.h2}>Curious about the game?</h2>
                        <p className={styles.lede}>
                            I'm sharing private builds with studios and fellow devs. If you'd like to playtest—or
                            dig into the systems design and math engine—reach out and I'll send a build your way.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/contact" className={styles.btnPrimary}>Request a build</Link>
                            <Link href="/case-studies/slotomancer" className={styles.btnGhost}>Explore Slotomancer →</Link>
                        </div>
                    </section>

                    <p className={styles.backTop}><a href="#top">Return to top</a></p>
                </article>
            </div>
        </main>
    );
}