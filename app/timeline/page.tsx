"use client";

import {useEffect, useMemo, useRef, useState} from "react";
import Image from "next/image";
import styles from "./Timeline.module.css";
import {ALL_TAGS, EVENTS, type TimelineEvent} from "./data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare, faCalendarDays, faFileArrowDown, faFilter, faMagnifyingGlass, faXmark,} from "@fortawesome/free-solid-svg-icons";

const RATIO_CLASS: Record<
    NonNullable<NonNullable<TimelineEvent["images"]>[number]["ratio"]>,
    string
> = {
    "16/9": styles.ratioSixteenNine,
    "4/3": styles.ratioFourThree,
    "1/1": styles.ratioSquare,
};

function byDateDesc(a: TimelineEvent, b: TimelineEvent) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}

/** Accessible modal for enlarged media (images only; never for logos). */
function MediaModal({
                        open,
                        src,
                        alt,
                        onClose,
                    }: {
    open: boolean;
    src: string | null;
    alt?: string;
    onClose: () => void;
}) {
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!open) return;
        const {style} = document.body;
        const prev = style.overflow;
        style.overflow = "hidden";
        closeRef.current?.focus();
        return () => {
            style.overflow = prev;
        };
    }, [open]);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (!open) return;
            if (e.key === "Escape") onClose();
        }

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open || !src) return null;

    return (
        <div
            className={styles.modalBackdrop}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={onClose}
        >
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
                role="document"
            >
                <button
                    ref={closeRef}
                    type="button"
                    className={styles.modalClose}
                    onClick={onClose}
                    aria-label="Close image preview"
                >
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
                <div className={styles.modalImgWrap}>
                    <Image
                        src={src}
                        alt={alt || ""}
                        fill
                        sizes="90vw"
                        className={styles.modalImg}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}

export default function TimelineClient() {
    const [q, setQ] = useState("");
    const [tags, setTags] = useState<string[]>([]);
    const yearsRef = useRef<HTMLDivElement>(null);

    // Image modal state
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState<string | null>(null);
    const [modalAlt, setModalAlt] = useState<string>("");

    const openModal = (src: string, alt?: string) => {
        setModalSrc(src);
        setModalAlt(alt || "");
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
        setModalSrc(null);
        setModalAlt("");
    };

    const toggleTag = (t: string) =>
        setTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
    const clearFilters = () => {
        setQ("");
        setTags([]);
    };

    // Text + tag filtering (does not affect the year menu range)
    const filtered = useMemo(() => {
        const nq = q.trim().toLowerCase();
        const list = [...EVENTS].sort(byDateDesc);
        return list.filter((e) => {
            const text =
                !nq ||
                e.title.toLowerCase().includes(nq) ||
                (e.summary && e.summary.toLowerCase().includes(nq)) ||
                e.tags.some((t) => t.toLowerCase().includes(nq));
            const tag = tags.length === 0 || tags.every((t) => e.tags.includes(t));
            return text && tag;
        });
    }, [q, tags]);

    // Build map of filtered events by year (for visible groups)
    const groupsMap = useMemo(() => {
        const map = new Map<number, TimelineEvent[]>();
        for (const e of filtered) {
            const y = new Date(e.date).getFullYear();
            if (!map.has(y)) map.set(y, []);
            map.get(y)!.push(e);
        }
        return map;
    }, [filtered]);

    // Compute complete year range for the LEFT NAV from first-ever event to current year (inclusive)
    const firstEventYear = useMemo(() => {
        const all = [...EVENTS].sort(byDateDesc);
        if (all.length === 0) return new Date().getFullYear();
        return new Date(all[all.length - 1].date).getFullYear(); // oldest
    }, []);
    const currentYear = new Date().getFullYear();

    const allYearsDesc = useMemo(() => {
        const years: number[] = [];
        for (let y = currentYear; y >= firstEventYear; y--) years.push(y);
        return years;
    }, [currentYear, firstEventYear]);

    const visibleGroups = useMemo(() => {
        return Array.from(groupsMap.entries())
            .sort((a, b) => b[0] - a[0])
            .map(([year, items]) => ({year, items}));
    }, [groupsMap]);

    return (
        <section className={styles.section} aria-labelledby="timeline-title">
            <header className={styles.header}>
                <div className={styles.headCopy}>
                    <p className={styles.kicker}>Timeline</p>
                    <h1 id="timeline-title" className={styles.title}>
                        Professional timeline & milestones
                    </h1>
                    <p className={styles.lede}>
                        Key launches, scale moments, partnerships, and speaking. Privacy-safe
                        aggregates where needed; detailed numbers available under NDA.
                    </p>
                </div>

                <div className={styles.searchWrap}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon}/>
                    <input
                        type="search"
                        inputMode="search"
                        placeholder="Search titles, tags, partners…"
                        className={styles.search}
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        aria-label="Search timeline"
                    />
                    <div className={styles.count} aria-live="polite">
                        {filtered.length}/{EVENTS.length}
                    </div>
                </div>
            </header>

            <div className={styles.controls} role="group" aria-label="Filter by tags">
        <span className={styles.filterLabel}>
          <FontAwesomeIcon icon={faFilter}/> Filters:
        </span>
                <div className={styles.pills}>
                    {ALL_TAGS.map((t) => {
                        const on = tags.includes(t);
                        return (
                            <button
                                key={t}
                                type="button"
                                className={`${styles.pill} ${on ? styles.pillOn : ""}`}
                                aria-pressed={on}
                                onClick={() => toggleTag(t)}
                            >
                                {t}
                            </button>
                        );
                    })}
                </div>
                {q || tags.length ? (
                    <button type="button" className={styles.clear} onClick={clearFilters}>
                        Clear
                    </button>
                ) : null}

                <div className={styles.actions}>
                    <a
                        href="https://calendly.com/flatts-scg"
                        className="btn btn-primary"
                        aria-label="Book a 15-minute intro via Calendly"
                    >
                        <FontAwesomeIcon icon={faCalendarDays} fixedWidth/>
                        &nbsp;Book intro
                    </a>
                    <a
                        href="/resume.pdf"
                        download="Jason-Flatford-Resume.pdf"
                        className="btn btn-secondary"
                        aria-label="Download résumé as PDF"
                    >
                        <FontAwesomeIcon icon={faFileArrowDown} fixedWidth/>
                        &nbsp;Résumé PDF
                    </a>
                </div>
            </div>

            <div className={styles.layout}>
                {/* LEFT YEAR MENU — always shows full range from first event to current year */}
                <nav className={styles.yearNav} aria-label="Jump to year" ref={yearsRef}>
                    {allYearsDesc.map((y) => (
                        <a key={y} href={`#y${y}`} className={styles.yearLink}>
                            {y}
                        </a>
                    ))}
                </nav>

                {/* TIMELINE */}
                <ol className={styles.timeline} role="list">
                    {/* Invisible anchors for empty years so the left menu always scrolls somewhere */}
                    {allYearsDesc.map((y) => {
                        const group = groupsMap.get(y);
                        if (group && group.length) {
                            return (
                                <li key={y} id={`y${y}`} className={styles.yearGroup}>
                                    <div className={styles.yearBadge} aria-hidden="true">
                                        {y}
                                    </div>

                                    <ol className={styles.items} role="list">
                                        {group.map((e) => {
                                            const imgs = e.images ?? [];
                                            return (
                                                <li key={e.id} className={styles.item}>
                                                    <div className={styles.dot} aria-hidden="true"/>
                                                    <article className={styles.card} aria-labelledby={`${e.id}-title`}>
                                                        {/* Logo row — larger, responsive, preserves non-square ratios */}
                                                        {e.logo ? (
                                                            <div className={styles.logoBar}>
                                                                <img
                                                                    src={e.logo}
                                                                    alt=""
                                                                    aria-hidden="true"
                                                                    className={styles.logoImg}
                                                                    loading="lazy"
                                                                    onError={(ev) => {
                                                                        (ev.currentTarget as HTMLImageElement).style.display = "none";
                                                                    }}
                                                                />
                                                            </div>
                                                        ) : null}

                                                        {/* Meta + copy */}
                                                        <div className={styles.metaRow}>
                                                            <time dateTime={e.date} className={styles.time}>
                                                                {new Date(e.date).toLocaleString(undefined, {
                                                                    month: "short",
                                                                    year: "numeric",
                                                                })}
                                                            </time>
                                                            <ul className={styles.tags} role="list">
                                                                {e.tags.map((t) => (
                                                                    <li key={`${e.id}-${t}`} className={styles.tag}>
                                                                        {t}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <h2 id={`${e.id}-title`} className={styles.h2}>
                                                            {e.title}
                                                        </h2>
                                                        {e.summary ? <p className={styles.summary}>{e.summary}</p> : null}

                                                        {e.links?.length ? (
                                                            <div className={styles.links}>
                                                                {e.links.map((l) => (
                                                                    <a
                                                                        key={l.href}
                                                                        href={l.href}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className={styles.link}
                                                                    >
                                                                        {l.label}{" "}
                                                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        ) : null}

                                                        {/* Images BELOW the copy — clicking opens modal */}
                                                        {imgs.length > 0 && (
                                                            <div
                                                                className={styles.mediaGrid}
                                                                role="group"
                                                                aria-label={`Images for ${e.title}`}
                                                            >
                                                                {imgs.map((m, i) => {
                                                                    const ratioClass = m.ratio ? RATIO_CLASS[m.ratio] : "";
                                                                    const alt = m.alt || "";
                                                                    return (
                                                                        <div
                                                                            key={`${e.id}-img-${i}`}
                                                                            className={`${styles.mediaItem} ${ratioClass}`}
                                                                        >
                                                                            <button
                                                                                type="button"
                                                                                className={styles.mediaBtn}
                                                                                onClick={() => openModal(m.src, alt)}
                                                                                aria-label="Open larger view"
                                                                            >
                                                                                <Image
                                                                                    src={m.src}
                                                                                    alt={alt}
                                                                                    fill
                                                                                    sizes="(min-width:1100px) 720px, 100vw"
                                                                                    className={styles.mediaImgContain}
                                                                                    priority={false}
                                                                                />
                                                                            </button>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}
                                                    </article>
                                                </li>
                                            );
                                        })}
                                    </ol>
                                </li>
                            );
                        }
                        return <li key={y} id={`y${y}`} className={styles.yearAnchor} aria-hidden="true"/>;
                    })}
                </ol>
            </div>

            {/* Global media modal (images only) */}
            <MediaModal open={modalOpen} src={modalSrc} alt={modalAlt} onClose={closeModal}/>
        </section>
    );
}