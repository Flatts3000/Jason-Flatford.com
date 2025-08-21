"use client";

import {useMemo, useState} from "react";
import styles from "./Skills.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartLine, faCloudArrowUp, faCubes, faMagnifyingGlass, faShieldHalved, faSitemap, faUsersGear, faWandMagicSparkles,} from "@fortawesome/free-solid-svg-icons";

/** ====== Data ====== */
/** Keep terms terse (ATS-friendly). Add/remove freely. */
type Group = { id: string; title: string; icon: any; items: string[] };

const GROUPS: Group[] = [
    {
        id: "product-leadership",
        title: "Product Leadership",
        icon: faUsersGear,
        items: [
            "Change Management",
            "Community Strategy",
            "Cross-functional Leadership",
            "Go-to-Market Strategy",
            "Hiring & Org Design",
            "Partnership Development",
            "Pricing & Packaging",
            "Product Discovery",
            "Product-led Growth (PLG)",
            "Program/Project Management",
            "Roadmapping",
            "Stakeholder Communication (C-suite & Board)",
            "Vendor Management",
            "Vision & Strategy",
        ],
    },
    {
        id: "product-ux",
        title: "Product Design / UX",
        icon: faChartLine,
        items: [
            "Accessibility (WCAG 2.2 AA)",
            "Bootstrap / Tailwind",
            "Data Visualization",
            "Design Systems",
            "Figma Translation",
            "Information Architecture",
            "Interaction Design",
            "Material Design",
            "Motion & Micro-interactions",
            "UX Writing",
        ],
    },
    {
        id: "engineering-architecture",
        title: "Engineering & Architecture",
        icon: faSitemap,
        items: [
            "API Design (REST/GraphQL)",
            "Agile Methodologies (Scrum/Kanban)",
            "CI/CD Pipelines",
            "Caching Strategies (CDN/Redis)",
            "Code Documentation",
            "Code Quality & Reviews",
            "GDPR/CCPA Compliance",
            "Incident Management",
            "Internationalization (i18n)",
            "Legacy Modernization",
            "Microservices & Modular Monoliths",
            "Multi-tenant SaaS",
            "Observability (DataDog/Prometheus)",
            "PCI-aware Architecture",
            "Payments & Billing (Stripe/PayPal)",
            "Performance & Scalability",
            "Real-time Systems (WebSockets)",
            "SOC2 Awareness",
            "Search (Lucene)",
            "Security Best Practices",
            "Testing (unit/integration)",
            "Version Control (Git)",
            "Webhooks",
        ],
    },
    {
        id: "data-ai",
        title: "Data & AI",
        icon: faWandMagicSparkles,
        items: [
            "AI for Good (Ethical AI)",
            "Business Intelligence",
            "Dashboards and Reporting",
            "Data Privacy (GDPR/CCPA)",
            "Database Architecture",
            "Event Tracking & Telemetry",
            "LLM Integration (OpenAI API)",
            "Prompt Engineering",
            "Real-time Analytics",
            "S3 Data Lakes",
            "SQL and NoSQL",
            "Vector Indexing (pgvector)",
        ],
    },
    {
        id: "platforms-languages",
        title: "Platforms & Languages",
        icon: faCubes,
        items: [
            "ASP.NET / Razor",
            "Bash / PowerShell",
            "C# / .NET",
            "GraphQL",
            "HTML5 / CSS3 / Tailwind",
            "Java",
            "Kotlin",
            "NoSQL (MongoDB)",
            "Node.js / TypeScript",
            "React / Next.js",
            "React Native",
            "Redis",
            "SQL (PostgreSQL / MySQL)",
            "Spring Boot",
            "VBA / Excel",
            "Visual Basic",
            "WPF / WinForms",
        ],
    },
    {
        id: "cloud-devops",
        title: "Cloud & DevOps",
        icon: faCloudArrowUp,
        items: [
            "AWS (EC2, S3, RDS, Lambda, CloudFront)",
            "Azure (App Service, AKS, Cosmos DB)",
            "Cloudflare (WAF/Workers/CDN)",
            "Cost Optimization",
            "Docker",
            "GitHub Actions / CI-CD",
            "Monitoring & Alerting",
            "Terraform / IaC",
        ],
    },
    {
        id: "security-compliance",
        title: "Security & Compliance",
        icon: faShieldHalved,
        items: [
            "Audit Logging",
            "Authentication & SSO (OAuth2/OIDC/SAML)",
            "HIPAA Awareness",
            "Privacy-aware Design (GDPR/CCPA)",
            "RBAC / Permissions",
            "Secrets Management",
        ],
    },
    {
        id: "domains",
        title: "Domain Expertise",
        icon: faChartLine,
        items: [
            "API Ecosystems",
            "B2B & B2C Solutions",
            "Civic Tech / GovTech",
            "Community Platforms",
            "Gaming & Esports",
            "Live Event Operations",
            "Marketplaces & Booking",
            "Multilingual Systems",
            "Partner Ecosystems",
            "Payments & Subscriptions",
            "Public Policy & Advocacy",
            "SaaS Platforms",
            "Social Impact",
        ],
    },
];

/** ====== Page ====== */
export default function Page() {
    const [query, setQuery] = useState("");
    const normalized = query.trim().toLowerCase();

    const filtered = useMemo(() => {
        if (!normalized) return GROUPS;
        return GROUPS.map((g) => ({
            ...g,
            items: g.items.filter((it) => it.toLowerCase().includes(normalized)),
        })).filter((g) => g.items.length > 0);
    }, [normalized]);

    const totalItems = useMemo(
        () => GROUPS.reduce((acc, g) => acc + g.items.length, 0),
        []
    );
    const shownItems = useMemo(
        () => filtered.reduce((acc, g) => acc + g.items.length, 0),
        [filtered]
    );

    return (
        <section className={styles.section} aria-labelledby="skills-title">
            <header className={styles.header}>
                <div>
                    <p className={styles.kicker}>Skills & Platforms</p>
                    <h1 id="skills-title" className={styles.title}>
                        Comprehensive skill inventory
                    </h1>
                    <p className={styles.lede}>
                        Executive strategy + hands-on technical execution across product, design, engineering, data/AI, and operations.
                    </p>
                </div>

                <div className={styles.searchWrap}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon}/>
                    <input
                        type="search"
                        inputMode="search"
                        placeholder="Search skills (e.g., Kotlin, PCI, roadmap)…"
                        className={styles.search}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        aria-label="Search skills"
                    />
                    <div className={styles.count} aria-live="polite">
                        {shownItems}/{totalItems}
                    </div>
                </div>
            </header>

            <div className={styles.grid}>
                {filtered.map((g) => (
                    <article key={g.id} className={styles.card} aria-labelledby={`${g.id}-title`}>
                        <div className={styles.cardHead}>
                            <FontAwesomeIcon icon={g.icon} className={styles.cardIcon}/>
                            <h2 id={`${g.id}-title`} className={styles.cardTitle}>
                                {g.title}
                            </h2>
                        </div>
                        <ul className={styles.pills} role="list">
                            {g.items.map((it) => (
                                <li key={it} className={styles.pill}>
                                    {it}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}