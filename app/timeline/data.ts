export type TimelineEvent = {
    id: string;
    date: string;         // ISO, e.g., "2024-06-01"
    title: string;
    summary?: string;
    tags: string[];       // e.g., ["Launch", "SaaS"]
    links?: { label: string; href: string }[];
    images?: { src: string; alt?: string; ratio?: "16/9" | "4/3" | "1/1"; maxWidth?: number; }[]; // Optional images for events
    logo?: string; // Optional logo for the event, e.g., company or product logo
};

export const ALL_TAGS = [
    "Launch",
    "Scale",
    "Leadership",
    "Architecture",
    "AI",
    "SaaS",
    "Gaming",
    "Civic Tech",
    "Speaking",
    "Press",
    "Award",
] as const;

export const EVENTS: TimelineEvent[] = [
    {
        title: "Graduated with AAS in Drafting and Design",
        date: "2005-05-01",
        id: "aas-drafting-design",
        summary: "Focused on CAD and 3D modeling; foundational skills in design and engineering.",
        tags: ["Education", "Design"],
    },
    {
        title: "Graduated from Union County High School",
        date: "2003-05-01",
        id: "high-school-graduation",
        summary: "Completed high school with a focus on technical subjects.",
        tags: ["Education", "High School"],
    },
    {
        title: "Won third in an invite-only state Drafting competition",
        date: "2000-04-01",
        id: "drafting-competition",
        summary: "Competed against top students in the state; recognized for technical drawing skills.",
        tags: ["Award", "Design"],
    },
    {
        title: "Selected for school-to-work program with Tennessee Valley Authority (TVA)",
        date: "2001-02-01",
        id: "tva-school-work",
        summary: "Converted paper blueprints to CAD; gained early exposure to engineering workflows.",
        tags: ["Education", "Engineering"],
    },
    {
        title: "Started job at Eagle Boat Docks as Director of Drafting and Design",
        date: "2001-08-01",
        id: "eagle-boat-docks",
        summary: "Led drafting and design; designed custom boat docks and marinas; honed leadership and design skills.",
        tags: ["Leadership", "Design", "Engineering"],
        images: [
            {src: "/images/timeline/eagle-boat-docks-01.webp", alt: "Eagle Boat Docks design blueprint", ratio: "16/9"},
        ],
    },
    {
        title: "Started J.F. Design, a freelance drafting and design business",
        date: "2010-09-01",
        id: "jf-design-freelance",
        summary: "Provided CAD services for residential and commercial projects; built a client base and honed business skills.",
        tags: ["Entrepreneurship", "Design", "Engineering"],
        logo: "/images/timeline/jf-design-logo.svg",
    },
    {
        title: "Designed my third custom home for a client",
        date: "2011-03-22",
        id: "custom-home-design",
        summary: "Created detailed architectural plans for a custom home; integrated client feedback and design principles.",
        tags: ["Design", "Architecture"],
        images: [
            {src: "/images/timeline/custom-home-design-01.webp", alt: "Custom home design blueprint", ratio: "16/9"},
            {src: "/images/timeline/custom-home-design-02.webp", alt: "Custom home design exterior layout", ratio: "16/9"}
        ],
    },
    {
        id: "2020-03-melee-public-launch",
        date: "2020-03-01",
        title: "Public launch of Melee.gg",
        summary: "Led product from concept to GA; multi-tenant tournament SaaS for global events.",
        tags: ["Launch", "Melee.gg", "SaaS"],
        logo: "/images/timeline/melee-logo.webp",
    },
    {
        id: "2020-06-largest-independent-online-mtg",
        date: "2020-06-01",
        title: "Melee.gg powered the largest independent online MTG tournament for Red Bull Untapped: 2,466 players",
        summary: "Record-setting online tournament operated end-to-end on Melee.gg.",
        tags: ["Tournament", "Scale", "Melee.gg"],
        logo: "/images/timeline/red-bull-logo.webp",
        images: [
            {src: "/images/timeline/red-bull-untapped-01.webp", alt: "Red Bull Untapped tournament screenshot", ratio: "16/9", maxWidth: 800}
        ]
    },
    {
        id: "2020-07-wotc-enterprise-partnership",
        date: "2020-07-01",
        title: "Signed enterprise partnership with Wizards of the Coast",
        summary: "Secured enterprise partnership; Melee selected for premier events.",
        tags: ["Partnership", "Enterprise", "WotC", "Melee.gg"],
        logo: "/images/timeline/wotc-logo.webp",
    },
    {
        id: "2020-09-10-wotc-flagship-events",
        date: "2020-09-01",
        title: "$250k WotC Mythic Invitational & Season Grand Finals delivered",
        summary: "Platform of record for flagship, broadcast events across consecutive months.",
        tags: ["Tournament", "Flagship", "Broadcast", "WotC", "Melee.gg"]
    },
    {
        id: "2020-10-global-reach",
        date: "2020-10-01",
        title: "Delivered tournaments on every continent (except Antarctica); users in 85 countries",
        summary: "Expanded global operations and community participation across regions.",
        tags: ["Global Reach", "Scale", "Melee.gg"]
    },
    {
        id: "2021-02-melee-i18n-japanese",
        date: "2021-02-01",
        title: "Internationalization: Launched Melee.gg Japanese language support",
        summary: "Localised UI and content, opening APAC growth channel.",
        tags: ["Internationalization", "Localization", "Japan", "Melee.gg"]
    },
    {
        title: "Started working on Melee.gg",
        date: "2019-02-01",
        id: "2019-02-melee-start",
        summary: "Envisioned a platform to empower esports organizers; initial development phase.",
        tags: ["Melee.gg", "SaaS", "Esports", "Founding Engineer"],
        images: [
            {src: "/images/timeline/melee-start-01.webp", alt: "Melee.gg founding idea", ratio: "16/9", maxWidth: 690},
        ],
        links: [{label: "Case study", href: "/case-studies/melee"}]
    },
    {
        id: "2008-01-start-scg",
        date: "2012-03-01",
        title: "Started at StarCityGames.com — Coordinator of Event Operations & Technical Lead",
        summary: "Technical lead for large-scale TCG tournaments; designed and launched the Concierge event platform; coordinated hundreds of event teams.",
        tags: ["Career", "StarCityGames", "Operations", "Product", "Leadership"],
        logo: "/images/timeline/scg-log.webp",
    },

    {
        id: "2012-01-start-foresite",
        date: "2017-05-01",
        title: "Joined Foresite LLC as Software Developer",
        summary: "Delivered UI/UX for enterprise cybersecurity tools and built log-parsing microservices to speed classification and triage at scale.",
        tags: ["Career", "Foresite", "Software", "UI/UX", "Microservices"],
        logo: "/images/timeline/foresite-logo.svg",
    },
    {
        title: "Founded Flattsware LLC",
        date: "2019-03-01",
        id: "flattsware-llc",
        summary: "Created Flattsware LLC to develop and maintain Melee.gg; focused on esports SaaS solutions.",
        tags: ["Entrepreneurship", "SaaS", "Esports"],
    },

    {
        title: "Designed solar panel array for commericial marina",
        date: "2008-12-19",
        id: "solar-panel-design",
        summary: "Created detailed plans for a solar panel array to power a commercial marina; integrated renewable energy solutions into design.",
        tags: ["Design", "Engineering", "Renewable Energy"],
        images: [
            {src: "/images/timeline/solar-panel-design-01.webp", alt: "Solar panel array design blueprint", ratio: "16/9"}
        ]
    },
    {
        title: "Started volunteering as a Magic Judge and Tournament Organizer",
        date: "2009-03-01",
        id: "magic-judge-volunteer",
        summary: "Became a certified Magic Judge; organized local tournaments and events, enhancing community engagement.",
        tags: ["Volunteer", "Magic: The Gathering", "Community"],
        logo: "/images/timeline/magic-judge-logo.webp",
    },
    {
        title: "Became a certified Level Three Magic Judge",
        date: "2013-06-01",
        id: "magic-judge-level-three",
        summary: "Achieved Level Three certification (only 100 L3s out of 6,000 judges globally); led 100's of unique teams and events; mentored judges and TOs; contributed to the Magic community.",
        tags: ["Magic: The Gathering", "Judging", "Leadership"],
    },
    {
        title: "Co-founded Keyrune Incorporated",
        date: "2022-06-01",
        id: "keyrune-incorporated",
        summary: "Co-founded Keyrune Incorporated to develop and maintain Melee.gg.",
        tags: ["Entrepreneurship", "SaaS", "Esports"],
        logo: "/images/timeline/keyrune-logo.webp",
    },
    {
        title: "Left Keyrune Incorporated to focus on other projects",
        date: "2025-05-01",
        id: "keyrune-incorporated-exit",
        summary: "Transitioned from Keyrune Incorporated to pursue new opportunities and projects.",
        tags: ["Entrepreneurship", "Transition"],
    },
    {
        title: "Upgraded Melee.gg to support more games; Worked with Ravensburger to launch Disney Lorcana tournaments",
        date: "2024-5-01",
        id: "melee-gg-disney-lorcana",
        summary: "Expanded Melee.gg's capabilities to support additional games; collaborated with Ravensburger to launch Disney Lorcana tournaments.",
        tags: ["Melee.gg", "SaaS", "Gaming", "Disney Lorcana"],
        logo: "/images/timeline/disney-lorcana-logo.webp",
    },
    {
        title: "Implemented a fully-fledged tournament decklist API for any trading card game; specifically for Star Wars: Unlimited.",
        date: "2025-03-01",
        id: "melee-gg-decklist-api",
        summary: "Developed a comprehensive decklist API for trading card games; supports rules enforcement, decklist validation, and more; enhances tournament management capabilities.",
        tags: ["Melee.gg", "SaaS", "API", "Gaming", "Trading Card Games"],
        logo: "/images/timeline/star-wars-unlimited-logo.webp",
    },
    {
        id: "duly-prealpha",
        date: "2025-07-01",
        title: "Soft-launched Duly — AI workflows for civic operations (pre-alpha)",
        summary: "Early-access release focused on natural-language intake and automation for elected officials and constituents. Orchestrates requests into structured workflows, routes tasks to the right teams, and generates status updates and summaries. Built with multi-tenant governance and auditable runs to support public-sector requirements; targeting pilot partners.",
        tags: ["Duly", "AI", "Civic Tech", "SaaS", "Launch", "Pre-Alpha"],
        links: [{label: "Case study", href: "/case-studies/duly"}],
        images: [
            {src: "/images/cases/duly.webp", alt: "Duly app screenshot", ratio: "16/9", maxWidth: 600}
        ]
    },
    {
        id: "memnai-pre-mvp",
        date: "2025-06-01",
        title: "Memnai — natural-language BI (pre-MVP)",
        summary: "Designing a text-to-SQL analytics AI assistant with governance & observability; building connectors and a secure execution sandbox.",
        tags: ["Memnai", "AI", "Data", "Analytics", "SaaS", "Pre-MVP"],
        links: [{label: "Case study", href: "/case-studies/memnai"}],
        images: [
            {src: "/images/cases/memnai.png", alt: "Memnai app screenshot", ratio: "16/9", maxWidth: 600}
        ]
    },
    {
        id: "endless-grimoire-pre-mvp",
        date: "2025-06-01",
        title: "The Endless Grimoire — idle mobile game (pre-MVP)",
        summary: "Pre-MVP prototype in React Native/Expo focused on core loops (gather → automate → cast). Built a single-source-of-truth stats/modifier engine powering workers & accelerators, a JSON-driven spellbook (active/passive grid with adjacency unlocks, cooldowns, and haptics), offline progression/reconciliation, and geometric pricing.",
        tags: ["The Endless Grimoire", "Gaming", "Mobile", "Systems Design", "Pre-MVP"],
        links: [{label: "Case study", href: "/case-studies/the-endless-grimoire"}],
        images: [
            {src: "/images/cases/endless-grimoire.webp", alt: "The Endless Grimoire game screenshot", ratio: "16/9", maxWidth: 600}
        ]
    },
    {
        id: "slotomancer-launch",
        date: "2026-01-09",
        title: "Launched Slotomancer — cross-platform roguelike with hexagonal architecture",
        summary: "Shipped a wizard-themed roguelike slot-battler simultaneously on desktop (Tauri) and mobile (Expo) from a single codebase using hexagonal architecture, achieving ~100% code sharing.",
        tags: ["Launch", "Gaming", "Architecture"],
        links: [{label: "Case study", href: "/case-studies/slotomancer"}],
    },
    {
        id: "snappycvs-launch",
        date: "2026-01-16",
        title: "Launched SnappyCVs — AI-powered resume tailoring SaaS",
        summary: "Shipped a full-stack SaaS platform that uses AI to score job fit, generate tailored resumes and cover letters, and track applications through the hiring pipeline.",
        tags: ["Launch", "SaaS", "AI"],
        links: [{label: "Case study", href: "/case-studies/snappycvs"}],
    },
];