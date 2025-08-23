import Link from "next/link";
import styles from "./CTASection.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faFileArrowDown} from "@fortawesome/free-solid-svg-icons";

export function CTASection() {
    return (
        <section
            className={styles.section}
            aria-labelledby="cta-title"
            role="region"
        >
            <div className={styles.inner}>
                <div className={styles.copy}>
                    <p className={styles.kicker}>Next steps</p>
                    <h2 id="cta-title" className={styles.title}>
                        Let’s talk about your product goals
                    </h2>
                    <p className={styles.lede}>
                        Quick 15-minute intro to explore fit for CPO/VP roles or advisory.
                    </p>
                </div>

                <div className={styles.actions}>
                    <a
                        href="https://calendly.com/flatts-scg/15-minute-intro"
                        className="btn btn-primary"
                        aria-label="Book a 15-minute intro via Calendly"
                    >
                        <FontAwesomeIcon icon={faCalendarDays} fixedWidth/>&nbsp;Book a 15-min intro
                    </a>

                    <a
                        href="/resume.pdf"
                        download="Jason-Flatford-Resume-2025-08.pdf"
                        className="btn btn-secondary"
                        aria-label="Download résumé as PDF"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faFileArrowDown} fixedWidth/>&nbsp;Download Résumé
                    </a>

                    {/* Tertiary text link for folks who prefer email/details page */}
                    <Link href="/contact" className={styles.tertiary}>
                        Contact details
                    </Link>
                </div>
            </div>
        </section>
    );
}