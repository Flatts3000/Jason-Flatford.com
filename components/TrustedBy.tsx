import Image from "next/image";
import styles from "./TrustedBy.module.css";

type Logo = {
    name: string;
    src: string;      // path in /public
};

const LOGOS: Logo[] = [
    {
        name: "Wizards of the Coast",
        src: "/images/logos/wotc.png",
    },
    {
        name: "Fantasy Flight Games",
        src: "/images/logos/fantasy-flight-games.png",
    },
    {
        name: "Star City Games",
        src: "/images/logos/scg.png",
    },
    {
        name: "Fanfinity",
        src: "/images/logos/fanfinity.png",
    },
];

export default function TrustedBy() {
    return (
        <section className={styles.section} aria-labelledby="trustedby-title">
            <div className={styles.header}>
                <div>
                    <p className={styles.kicker}>Trusted by</p>
                    <h2 id="trustedby-title" className={styles.title}>
                        Selected partners & collaborators
                    </h2>
                </div>
            </div>

            <div className={styles.rail} role="list">
                {LOGOS.map((l) => (
                    <div key={l.name} className={styles.cell} role="listitem" aria-label={l.name}>
                        <Image
                            src={l.src}
                            alt={l.name}
                            width={320}
                            height={160}
                            className={styles.logo}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            <p className={styles.footnote}>
                Logos are trademarks of their respective owners and appear for identification purposes only.
            </p>
        </section>
    );
}