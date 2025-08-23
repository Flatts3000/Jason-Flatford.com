'use client';
import Link from 'next/link';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.row}`}>
                <Link href="/" className={styles.brand} aria-label="Go to home">
                    <span className={styles.brandTop}>Jason</span>
                    <span className={styles.brandBottom}>Flatford</span>
                </Link>

                <details className={styles.menu}>
                    <summary className={styles.trigger} aria-label="Open menu" aria-controls="site-menu" aria-expanded="false">
                        <span className={styles.burger} aria-hidden="true"></span>
                    </summary>
                    <nav id="site-menu" className={styles.sheet} aria-label="Primary">
                        <ul>
                            <li><Link href="/case-studies">Case Studies</Link></li>
                            <li><Link href="/skills">Skills</Link></li>
                            <li><Link href="/timeline">Timeline</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><a href="/resume.pdf" target="_blank" rel="noopener">Résumé</a></li>
                        </ul>
                    </nav>
                </details>

                {/* Desktop nav */}
                <nav className={styles.navDesktop} aria-label="Primary">
                    <Link href="/case-studies">Case</Link>
                    <Link href="/skills">Skills</Link>
                    <Link href="/timeline">Timeline</Link>
                    <Link href="/contact">Contact</Link>
                    <a href="/resume.pdf" target="_blank" rel="noopener">Résumé</a>
                </nav>
            </div>
        </header>
    );
}