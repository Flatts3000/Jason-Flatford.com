"use client";

import {useMemo, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CaseStudies.module.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faFilter, faMagnifyingGlass,} from "@fortawesome/free-solid-svg-icons";

type CaseItem = {
    href: string;
    title: string;
    summary: string;
    image: string;     // /public path
    alt: string;
    tags: string[];    // used for filters
    year?: number;     // for sort/future expansion
};

const ALL_ITEMS: CaseItem[] = [
    {
        href: "/case-studies/melee",
        title: "Esports SaaS Platform (Melee.gg)",
        summary:
            "Launched and scaled a multi-tenant esports platform; led product strategy and architecture end-to-end.",
        image: "/images/cases/melee.webp",
        alt: "Esports platform interface mockup",
        tags: ["SaaS", "Architecture", "Strategy"],
        year: 2024,
    },
    {
        href: "/case-studies/slotomancer",
        title: "Slotomancer — Cross-Platform Roguelike",
        summary:
            "Hexagonal architecture enabling 100% code sharing between desktop and mobile; platform-agnostic game engine with privacy-first telemetry.",
        image: "/images/cases/slotomancer.webp",
        alt: "Slotomancer game interface showing wizard-themed slot-battler",
        tags: ["Game", "Architecture", "Platform"],
        year: 2024,
    },
    {
        href: "/case-studies/duly",
        title: "Duly — AI for Civic Ops",
        summary:
            "Automations and natural-language workflows for elected officials and citizens; faster service delivery.",
        image: "/images/cases/duly.webp",
        alt: "Civic operations dashboard",
        tags: ["AI", "Civic Tech", "Automation"],
        year: 2025,
    },
    {
        href: "/case-studies/memnai",
        title: "Memnai — Natural-Language BI",
        summary:
            "Text-to-SQL analytics that puts data questions in plain English; secure, governed insights.",
        image: "/images/cases/memnai.png",
        alt: "Analytics UI mockup",
        tags: ["AI", "Data", "Platform"],
        year: 2025,
    },
    {
        href: "/case-studies/endless-grimoire",
        title: "The Endless Grimoire — Mobile Idle/Clicker",
        summary:
            "Designed and shipped a mobile idle/clicker experience; systems design, UX, analytics, and iterative live ops.",
        image: "/images/cases/endless-grimoire.webp",
        alt: "Mobile game UI mockup",
        tags: ["Game", "Design", "Mobile"],
        year: 2023,
    },
];

const ALL_TAGS = [
    "SaaS",
    "AI",
    "Civic Tech",
    "Data",
    "Game",
    "Automation",
    "Architecture",
    "Strategy",
    "Platform",
    "Design",
    "Mobile",
] as const;

export default function Page() {
    const [q, setQ] = useState("");
    const [active, setActive] = useState<string[]>([]);

    function toggleTag(tag: string) {
        setActive((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    }

    function clearFilters() {
        setActive([]);
        setQ("");
    }

    const filtered = useMemo(() => {
        const nq = q.trim().toLowerCase();
        const base = [...ALL_ITEMS].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
        if (!nq && active.length === 0) return base;

        return base.filter((it) => {
            const byText =
                !nq ||
                it.title.toLowerCase().includes(nq) ||
                it.summary.toLowerCase().includes(nq) ||
                it.tags.some((t) => t.toLowerCase().includes(nq));

            const byTags =
                active.length === 0 || active.every((t) => it.tags.includes(t));

            return byText && byTags;
        });
    }, [q, active]);

    return (
        <section className={styles.section} aria-labelledby="cases-title">
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.headCopy}>
                    <p className={styles.kicker}>Case Studies</p>
                    <h1 id="cases-title" className={styles.title}>
                        Product outcomes & case studies
                    </h1>
                    <p className={styles.lede}>
                        Selected work across SaaS, AI, gaming, and civic tech — focusing on
                        strategy, architecture, and measurable impact.
                    </p>
                </div>

                {/* Search + count */}
                <div className={styles.searchWrap}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon}/>
                    <input
                        type="search"
                        inputMode="search"
                        placeholder="Search titles, tags, domains…"
                        className={styles.search}
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        aria-label="Search case studies"
                    />
                    <div className={styles.count} aria-live="polite">
                        {filtered.length}/{ALL_ITEMS.length}
                    </div>
                </div>
            </header>

            {/* Tag filters */}
            <div className={styles.filters} role="group" aria-label="Filter by tag">
        <span className={styles.filterLabel}>
          <FontAwesomeIcon icon={faFilter}/> Filters:
        </span>
                <div className={styles.pills}>
                    {ALL_TAGS.map((tag) => {
                        const on = active.includes(tag);
                        return (
                            <button
                                key={tag}
                                type="button"
                                className={`${styles.pill} ${on ? styles.pillOn : ""}`}
                                aria-pressed={on}
                                onClick={() => toggleTag(tag)}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </div>
                {(q || active.length > 0) && (
                    <button
                        type="button"
                        className={styles.clear}
                        onClick={clearFilters}
                        aria-label="Clear search and filters"
                    >
                        Clear
                    </button>
                )}
            </div>

            {/* Grid */}
            <div className={styles.grid}>
                {filtered.map((c) => (
                    <Link
                        key={c.href}
                        href={c.href}
                        className={styles.card}
                        aria-labelledby={`${c.href}-title`}
                    >
                        <div className={styles.frame}>
                            <Image
                                src={c.image}
                                alt={c.alt}
                                fill
                                sizes="(min-width: 980px) 33vw, 100vw"
                                className={styles.img}
                            />
                            {/* Soft vignette for text legibility if needed */}
                            <span className={styles.vignette} aria-hidden="true"/>
                        </div>

                        <div className={styles.meta}>
                            <h2 id={`${c.href}-title`} className={styles.h2}>
                                {c.title}
                            </h2>
                            <p className={styles.summary}>{c.summary}</p>

                            <ul className={styles.tags} role="list">
                                {c.tags.map((t) => (
                                    <li key={`${c.href}-${t}`} className={styles.tag}>
                                        {t}
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.cta}>
                                Read case study
                                <FontAwesomeIcon icon={faArrowRight} className={styles.arrow}/>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}