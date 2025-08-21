"use client";

import {useState} from "react";
import Script from "next/script";
import styles from "./Contact.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;
const CAL_LINK = "https://calendly.com/flatts-scg/15-minute-intro";
const LI_LINK = "https://www.linkedin.com/in/flatford/";

export default function Page() {
    const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
    const [err, setErr] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        setErr(null);

        const fd = new FormData(e.currentTarget);

        // honeypot — real users leave this empty
        if (String(fd.get("website") || "").trim().length > 0) {
            setStatus("ok");
            (e.target as HTMLFormElement).reset();
            return;
        }

        const payload = {
            name: String(fd.get("name") || ""),
            email: String(fd.get("email") || ""),
            company: String(fd.get("company") || ""),
            message: String(fd.get("message") || ""),
            token: String(fd.get("cf-turnstile-response") || ""),
        };

        const r = await fetch("/api/contact", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(payload),
        });
        const j = await r.json();

        if (r.ok && j.ok) {
            setStatus("ok");
            (e.target as HTMLFormElement).reset();
            // @ts-ignore Turnstile global
            if (window.turnstile) window.turnstile.reset();
        } else {
            setStatus("error");
            setErr(j.error || "Something went wrong. Please try again.");
        }
    }

    return (
        <section className={styles.section} aria-labelledby="contact-title">
            <div className={styles.grid}>
                {/* LEFT: copy + quick actions */}
                <div className={styles.copy}>
                    <p className={styles.kicker}>Contact</p>
                    <h1 className={styles.title} id="contact-title">Let’s connect</h1>
                    <p className={styles.lede}>
                        Quick intro to explore fit for CPO/VP roles or advisory. Prefer not to share your email?
                        Use the form — it delivers to my private alias.
                    </p>

                    <div className={styles.quickLinks}>
                        <a
                            href={CAL_LINK}
                            className="btn btn-primary"
                            aria-label="Book a 15-minute intro via Calendly"
                        >
                            <FontAwesomeIcon icon={faCalendarDays} fixedWidth/>&nbsp;Book a 15-min intro
                        </a>

                        <a
                            href={LI_LINK}
                            className="btn btn-secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Jason Flatford on LinkedIn (opens in new tab)"
                        >
                            <FontAwesomeIcon icon={faLinkedin} fixedWidth/>&nbsp;Connect on LinkedIn
                        </a>
                    </div>

                    <ul className={styles.notes}>
                        <li>No mailing lists. Replies come from my jasonflatford.com alias.</li>
                        <li>Calendly not your thing? Send a message and I’ll reply by email.</li>
                    </ul>
                </div>

                {/* RIGHT: form card */}
                <form onSubmit={onSubmit} className={styles.card} aria-labelledby="form-title">
                    <h2 id="form-title" className={styles.cardTitle}>Send a message</h2>

                    {status === "ok" && (
                        <div className={styles.alertSuccess} role="status">
                            Thanks — got it! I’ll get back to you shortly.
                        </div>
                    )}
                    {status === "error" && (
                        <div className={styles.alertError} role="alert">
                            {err}
                        </div>
                    )}

                    {/* Honeypot (hidden from humans) */}
                    <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        className={styles.honey}
                        aria-hidden="true"
                    />

                    <div className={styles.fieldsTwo}>
                        <div className={styles.field}>
                            <label htmlFor="name">Your name</label>
                            <input id="name" name="name" autoComplete="name" required/>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email">Work email</label>
                            <input id="email" name="email" type="email" autoComplete="email" required/>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="company">Company <span className={styles.optional}>(optional)</span></label>
                        <input id="company" name="company" autoComplete="organization"/>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="message">How can I help?</label>
                        <textarea id="message" name="message" rows={6} required/>
                    </div>

                    {/* Cloudflare Turnstile */}
                    <div className={styles.turnstile}>
                        <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light"/>
                    </div>

                    <div className={styles.actions}>
                        <button className="btn btn-primary" disabled={status === "sending"}>
                            {status === "sending" ? "Sending…" : (
                                <>
                                    <FontAwesomeIcon icon={faPaperPlane} fixedWidth/>&nbsp;Send message
                                </>
                            )}
                        </button>
                        <span className={styles.status} aria-live="polite">
              {status === "sending" ? "Working…" : ""}
            </span>
                    </div>

                    <p className={styles.smallprint}>
                        By submitting, you consent to be contacted about roles or opportunities. No marketing lists.
                    </p>
                </form>
            </div>

            {/* Turnstile loader */}
            <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive"/>
        </section>
    );
}