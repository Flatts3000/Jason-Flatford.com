import Link from "next/link";
import styles from "./SignatureOutcomes.module.css";
import ScrollReveal from "@/components/ScrollReveal";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine, faCode, faPeopleGroup, faUsers,} from "@fortawesome/free-solid-svg-icons";

type Item = {
    id: string;
    value: string;          // what you display (e.g., "500k+", "5-figure MAU")
    aria: string;           // how SR reads it (e.g., "over five hundred thousand")
    label: string;          // short label
    cap: string;            // muted caption
    icon: any;              // FA icon
    numericHint?: number;   // optional machine-readable number for <data>
};

function StatValue({display, aria, hint}: { display: string; aria: string; hint?: number }) {
    // If we have a number we can expose it via <data>; otherwise render text only.
    return hint !== undefined ? (
        <div className={styles.value}>
            <data value={hint} aria-label={aria}>{display}</data>
        </div>
    ) : (
        <div className={styles.value} aria-label={aria}>{display}</div>
    );
}

export default function SignatureOutcomes() {
    const items: Item[] = [
        {
            id: "total-users",
            value: "500k+",
            aria: "over five hundred thousand",
            label: "Total Users Served",
            cap: "Across all shipped products",
            icon: faUsers,
            numericHint: 500_000,
        },
        {
            id: "mau",
            value: "5-figure",
            aria: "five-figure monthly active users",
            label: "Monthly Active Users",
            cap: "Sustained engagement",
            icon: faChartLine,
        },
        {
            id: "organizers",
            value: "Thousands",
            aria: "thousands",
            label: "of B2B Clients",
            cap: "Adoption by event hosts",
            icon: faPeopleGroup,
        },
        {
            id: "loc",
            value: "Million+ LOC",
            aria: "multi-million lines of code",
            label: "Codebase Built",
            cap: "Multi-tenant SaaS",
            icon: faCode,
        },
    ];

    return (
        <section id="outcomes" className={styles.section} aria-labelledby="outcomes-title">
            <div className={styles.header}>
                <div>
                    <p className={styles.kicker}>Signature Outcomes</p>
                    <h2 className={styles.title} id="outcomes-title">Results at a glance</h2>
                </div>
            </div>

            <div className={styles.grid}>
                {items.map(({id, value, aria, label, cap, icon, numericHint}) => (
                    <ScrollReveal key={id}>
                        <article className={styles.card} aria-labelledby={`${id}-label`}>
                            <div className={styles.row}>
                                <div className={styles.icon} aria-hidden="true">
                                    <FontAwesomeIcon icon={icon} fixedWidth/>
                                </div>
                                <div>
                                    <StatValue display={value} aria={aria} hint={numericHint}/>
                                    <div id={`${id}-label`} className={styles.label}>{label}</div>
                                    <div className={styles.cap}>{cap}</div>
                                </div>
                            </div>
                        </article>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}