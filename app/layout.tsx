import "./globals.css";
import "./fontawesome";
import {inter, jetbrains} from "./fonts";
import type {ReactNode} from "react";
import CommandMenu from "@/components/CommandMenu";
import ReadingProgress from "@/components/ReadingProgress";
import SiteHeader from "@/components/SiteHeader";

/* Stronger SEO + sharing + platform hints */
export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jasonflatford.com"),
    applicationName: "Jason Flatford",
    authors: [{name: "Jason Flatford", url: "https://www.jasonflatford.com"}],
    creator: "Jason Flatford",
    publisher: "Jason Flatford",
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
        "Executive Leadership",
    ],
    alternates: {canonical: "/"},
    title: {
        default: "Jason Flatford — Product & Engineering Executive",
        template: "%s | Jason Flatford",
    },
    description:
        "Product & technology leader (CPO/VP). Executive strategy + hands-on architecture for SaaS, AI, gaming, and civic tech. Built multi-tenant platforms, real-time analytics, and global event systems.",
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Jason Flatford",
        url: "/",
        title: "Jason Flatford — Product & Engineering Executive",
        description:
            "Product & technology leader (CPO/VP). Executive strategy + hands-on architecture for SaaS, AI, gaming, and civic tech.",
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
            "Executive strategy + hands-on architecture for SaaS, AI, gaming, and civic tech.",
        images: ["/og-image.png"],
    },
    robots: {index: true, follow: true},
    icons: {
        icon: [
            {url: "/favicon.ico", rel: "icon"},
            {url: "/icon.png", type: "image/png", sizes: "512x512"},
        ],
        apple: [{url: "/apple-touch-icon.png", sizes: "180x180"}],
    },
} as const;

/* Explicit viewport + system UI hints */
export const viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "#1F4FFF"},
        {media: "(prefers-color-scheme: dark)", color: "#0B122B"},
    ],
} as const;

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
        <SiteHeader/>
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