import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
    return (
        <section className={styles.hero} aria-labelledby="home-hero-title">
            {/* LEFT: copy + CTAs */}
            <div className={styles.copy}>
                <p className={styles.eyebrow}>Product & Engineering Executive</p>

                <h1 id="home-hero-title" className={styles.display}>
                    Hi, I'm Flatts
                </h1>

                <h2 id="home-hero-subtitle" className={styles.subtitle}>
                    I've built & scaled products used by 500k+ people
                </h2>

                <p className={styles.lede}>
                    Executive strategy + hands-on architecture for SaaS, AI, and gaming—shipping fast and scaling reliably.
                </p>

                <p className={styles.callout}>
                    <span className={styles.calloutIcon} aria-hidden="true">⚡</span>
                    <span>Painful tech problem? I dig in, find root cause, and ship the fix — fast.</span>
                </p>

                <div className={styles.cta}>
                    <a
                        href="https://calendly.com/flatts-scg/15-minute-intro"
                        className="btn btn-primary"
                        aria-label="Book a 15-minute intro via Calendly"
                    >
                        Book a 15-min intro
                    </a>
                    <a
                        href="/resume.pdf"
                        download="Jason-Flatford-Resume-2025-08.pdf"
                        className="btn btn-secondary"
                        aria-label="Download résumé as PDF"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Résumé
                    </a>
                </div>
            </div>

            {/* RIGHT: headshot (240px) */}
            <div className={styles.photo}>
                <Image
                    src="/images/founder.webp"
                    alt="Headshot of Jason Flatford"
                    width={240}
                    height={240}
                    priority
                    sizes="(min-width: 1024px) 240px, 50vw"
                    className={`${styles.avatar} ${styles.avatarElevated} ${styles.avatarRing}`}
                />
            </div>
        </section>
    );
}