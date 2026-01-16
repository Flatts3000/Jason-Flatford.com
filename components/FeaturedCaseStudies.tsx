import Link from "next/link";
import Image from "next/image";
import styles from "./FeaturedCaseStudies.module.css";
import ScrollReveal from "@/components/ScrollReveal";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

type CaseItem = {
    href: string;
    title: string;
    summary: string;
    image: string;
    tags: string[];
    alt?: string;
};

const items: CaseItem[] = [
    {
        href: "/case-studies/snappycvs",
        title: "SnappyCVs — AI Resume Tailoring Platform",
        summary: "Full-stack SaaS for AI-powered job fit scoring, tailored resume generation, and application tracking with Stripe billing.",
        image: "/images/cases/snappycvs.webp",
        tags: ["SaaS", "AI", "Architecture"],
        alt: "SnappyCVs platform interface showing resume tailoring",
    },
    {
        href: "/case-studies/melee",
        title: "Esports SaaS Platform (Melee.gg)",
        summary: "Envisioned, launched and scaled a multi-tenant platform; led product strategy and architecture end-to-end.",
        image: "/images/cases/melee.webp",
        tags: ["Product Strategy", "Architecture", "SaaS"],
        alt: "Esports platform interface mockup",
    },
    {
        href: "/case-studies/slotomancer",
        title: "Slotomancer — Cross-Platform Roguelike",
        summary: "Hexagonal architecture achieving 100% code sharing between desktop and mobile; platform-agnostic game engine with privacy-first telemetry.",
        image: "/images/cases/slotomancer.webp",
        tags: ["Architecture", "Cross-Platform", "Game"],
        alt: "Slotomancer wizard-themed slot-battler interface",
    },
    {
        href: "/case-studies/duly",
        title: "Duly — AI for Civic Ops",
        summary: "Automations and natural-language workflows for elected officials and citizens; faster service delivery.",
        image: "/images/cases/duly.webp",
        tags: ["AI", "Automation", "Civic Tech"],
        alt: "Civic operations dashboard",
    },
];

export default function FeaturedCaseStudies() {
    return (
        <section className={styles.section} aria-labelledby="featured-cases-title">
            <div className={styles.header}>
                <div>
                    <p className={styles.kicker}>Featured Case Studies</p>
                    <h2 id="featured-cases-title" className={styles.title}>
                        Selected work
                    </h2>
                </div>
                <div className={styles.headerAction}>
                    <Link href="/case-studies">View all</Link>
                </div>
            </div>

            <div className={styles.grid}>
                {items.map((c) => (
                    <ScrollReveal key={c.href}>
                        <Link href={c.href} className={styles.card} aria-labelledby={`${c.href}-title`}>
                            <div className={styles.frame}>
                                <Image
                                    src={c.image}
                                    alt={c.alt ?? ""}
                                    fill
                                    sizes="(min-width: 980px) 50vw, 100vw"
                                    className={styles.img}
                                    priority={false}
                                />
                            </div>
                            <div className={styles.meta}>
                                <h3 id={`${c.href}-title`} className={styles.h3}>
                                    {c.title}
                                </h3>
                                <p className={styles.summary}>{c.summary}</p>

                                <div className={styles.tags}>
                                    {c.tags.map((t) => (
                                        <span key={t} className={styles.tag}>{t}</span>
                                    ))}
                                </div>

                                <div className={styles.ctaRow}>
                                    Read case study
                                    <FontAwesomeIcon icon={faArrowRight} className={styles.arrow}/>
                                </div>
                            </div>
                        </Link>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}