import "./globals.css";
import "./fontawesome";
import {inter, jetbrains} from "./fonts";
import type {ReactNode} from "react";
import Link from "next/link";
import CommandMenu from "@/components/CommandMenu";
import ReadingProgress from "@/components/ReadingProgress";

/* Stronger SEO + sharing + platform hints */
export const metadata = {
    metadataBase: new URL("https://jasonflatford.com"),
    applicationName: "Jason Flatford — Portfolio",
    authors: [{name: "Jason Flatford", url: "https://jasonflatford.com"}],
    keywords: [
        "Chief Product Officer",
        "VP of Product",
        "Product Engineering",
        "SaaS",
        "AI",
        "Gaming",
        "Esports",
        "Civic Tech",
        "Platform Scaling",
    ],
    alternates: {canonical: "/"},
    title: {
        default: "Jason Flatford — Product & Engineering Executive",
        template: "%s | Jason Flatford",
    },
    description:
        "CPO/VP-level product & engineering leader. Scaled Melee.gg to 400k users, ~70k MAU, ~13k organizers. Executive + hands-on.",
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Jason Flatford",
        url: "https://jasonflatford.com",
        title: "Jason Flatford — Product & Engineering Executive",
        description:
            "CPO/VP-level product & engineering leader. Scaled Melee.gg to 400k users, ~70k MAU, ~13k organizers. Executive + hands-on.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                type: "image/png",
                alt: "Jason Flatford — Product & Engineering Executive",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Jason Flatford — Product & Engineering Executive",
        description:
            "Scaled Melee.gg to 400k users, ~70k MAU, ~13k organizers. Executive + hands-on.",
        images: ["/og-image.png"],
    },
    robots: {index: true, follow: true},
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png", // safe to leave; add when ready
    },
} as const;

/* Explicit viewport + system UI hints */
export const viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#0F2A6B", // navy action color (executive theme)
} as const;

function Header() {
    return (
        <header className="site-header" role="banner">
            <div className="container header-inner">
                <Link href="/" className="brand" aria-label="Jason Flatford — Home">
                    Jason Flatford
                </Link>

                {/* Keep nav minimal & scannable */}
                <nav aria-label="Main Navigation" className="nav">
                    <ul>
                        <li><Link href="/case-studies">Case Studies</Link></li>
                        <li><Link href="/skills">Skills</Link></li>
                        <li><Link href="/timeline">Timeline</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        {/* Serve the PDF directly; download attribute sets a clean filename */}
                        <li>
                            <Link
                                href="/resume.pdf"
                                download={"Jason-Flatford-Resume-2025-08.pdf"}
                                aria-label="Download résumé (PDF)"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Résumé
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

function Footer() {
    return (
        <footer className="site-footer" role="contentinfo">
            <div className="container footer-inner">
                <p>
                    © {new Date().getFullYear()} Jason Flatford
                    {" · "}
                    <a
                        href="https://www.linkedin.com/in/flatford/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Jason Flatford on LinkedIn (opens in new tab)"
                    >
                        LinkedIn
                    </a>
                </p>
                <p className="muted">
                    Privacy: This site uses privacy-friendly analytics and does not use
                    cookies. Scheduling is powered by Calendly.
                </p>
            </div>
        </footer>
    );
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${jetbrains.variable}`}
            data-theme="executive"
        >
        <body>
        {/* Progress bar respects reduced-motion */}
        <ReadingProgress/>
        {/* Accessibility: first focus takes users past navigation */}
        <a href="#main" className="skip-link">
            Skip to content
        </a>
        <Header/>
        <main id="main" className="container main">
            {children}
        </main>
        <Footer/>
        {/* Cmd/Ctrl+K palette */}
        <CommandMenu/>
        {/* (Optional) Plausible — uncomment when domain is live
        <script defer data-domain="your-domain.com" src="https://plausible.io/js/script.js" />
        */}
        </body>
        </html>
    );
}