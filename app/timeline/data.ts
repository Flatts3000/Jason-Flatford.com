export type TimelineEvent = {
    id: string;
    date: string;         // ISO, e.g., "2024-06-01"
    title: string;
    summary?: string;
    tags: string[];       // e.g., ["Launch", "SaaS"]
    links?: { label: string; href: string }[];
    images?: { src: string; alt?: string; ratio?: "16/9" | "4/3" | "1/1" }[]; // Optional images for events
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
        id: "melee-scale-1",
        date: "2024-05-01",
        title: "Scaled esports SaaS to significant six-figure users",
        summary: "Led product strategy + architecture; multi-tenant, real-time ops. Rounded aggregates shown; details under NDA.",
        tags: ["Scale", "SaaS", "Gaming", "Leadership", "Architecture"],
        links: [{label: "Case study", href: "/case-studies/melee"}],
    },
    {
        id: "duly-launch",
        date: "2025-03-15",
        title: "Launched Duly — AI workflows for civic operations",
        summary: "Natural-language automations for staff and citizens; service delivery time reduced.",
        tags: ["Launch", "AI", "Civic Tech", "Architecture"],
        links: [{label: "Case study", href: "/case-studies/duly"}],
    },
    {
        id: "memnai-pilot",
        date: "2025-02-01",
        title: "Memnai private pilot — natural-language BI",
        summary: "Text-to-SQL analytics; governed access and auditability.",
        tags: ["AI", "SaaS", "Launch"],
        links: [{label: "Case study", href: "/case-studies/memnai"}],
    },
    {
        id: "grimoire-ship",
        date: "2023-10-01",
        title: "Shipped ‘The Endless Grimoire’ mobile game",
        summary: "Systems design, UX, analytics, iterative live ops.",
        tags: ["Launch", "Gaming"],
        links: [{label: "Case study", href: "/case-studies/endless-grimoire"}],
    },
    {
        id: "partnerships",
        date: "2022-09-01",
        title: "Forged partnerships with global brands",
        summary: "Collaborations with Red Bull, Wizards of the Coast, Disney (identification only).",
        tags: ["Leadership", "Press"],
    },
    {
        id: "platform-arch",
        date: "2021-06-01",
        title: "Architected multi-tenant SaaS platform (2M+ LOC)",
        summary: "Real-time analytics, multilingual support, PCI-aware payments.",
        tags: ["Architecture", "SaaS"],
    },
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
    }
];