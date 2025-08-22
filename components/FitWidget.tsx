"use client";

import {useEffect, useId, useRef, useState} from "react";
import Link from "next/link";
import styles from "./FitWidget.module.css";
import Turnstile from "./Turnstile";

// Font Awesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare, faCircleCheck, faClock, faFileLines, faRotateLeft, faShield, faSpinner, faTriangleExclamation, faUpload, faWandMagicSparkles,} from "@fortawesome/free-solid-svg-icons";

type FitResult = {
    score: number;
    verdict: "yes" | "borderline" | "no";
    rationale: string;
    strengths: string[];
    gaps: string[];
    resume_bullets: string[];
    cover_letter_opener: string;
    tags: string[];
};

export default function FitWidget() {
    const [jdText, setJdText] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [dragOver, setDragOver] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showDelayMsg, setShowDelayMsg] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<FitResult | null>(null);
    const [captcha, setCaptcha] = useState<string | null>(null);
    const fileRef = useRef<HTMLInputElement>(null);
    const formId = useId();

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

    // Delayed progress message (appears if server takes >1.5s)
    useEffect(() => {
        let t: any;
        if (loading) {
            t = setTimeout(() => setShowDelayMsg(true), 1500);
        } else {
            setShowDelayMsg(false);
        }
        return () => clearTimeout(t);
    }, [loading]);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!jdText.trim() && !file) {
            setError("Upload a file or paste the job description text.");
            return;
        }
        if (!captcha && !process.env.NEXT_PUBLIC_TURNSTILE_DISABLED) {
            setError("Please complete the verification.");
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const form = new FormData();
            if (jdText.trim()) form.append("text", jdText.trim());
            if (file) form.append("file", file);
            if (captcha) form.append("turnstileToken", captcha);

            const res = await fetch("/api/fit", {method: "POST", body: form});
            if (!res.ok) {
                let msg = "Something went wrong";
                try {
                    const j = await res.json();
                    if (j?.error) msg = j.error;
                } catch {
                }
                throw new Error(msg);
            }
            const data: FitResult = await res.json();
            setResult(data);
        } catch (err: any) {
            setError(err?.message ?? "Server error");
        } finally {
            setLoading(false);
            setCaptcha(null); // token is single-use
        }
    }

    function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const f = e.target.files?.[0];
        if (!f) return;
        const allowed = [
            "application/pdf",
            "text/plain",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        if (!allowed.includes(f.type)) {
            setError("Please upload a PDF, DOCX, or TXT file.");
            e.currentTarget.value = "";
            return;
        }
        setError(null);
        setFile(f);
    }

    function handleDrop(e: React.DragEvent<HTMLLabelElement>) {
        e.preventDefault();
        setDragOver(false);
        const f = e.dataTransfer.files?.[0];
        if (!f) return;
        const dt = new DataTransfer();
        dt.items.add(f);
        if (fileRef.current) {
            fileRef.current.files = dt.files;
            onFileChange({target: fileRef.current} as any);
        }
    }

    function resetAll() {
        setJdText("");
        setFile(null);
        setResult(null);
        setError(null);
        setCaptcha(null);
        if (fileRef.current) fileRef.current.value = "";
    }

    const disabled =
        loading || (!jdText.trim() && !file) || (!captcha && !process.env.NEXT_PUBLIC_TURNSTILE_DISABLED);

    const verdictLabel =
        result?.verdict === "yes"
            ? "Strong fit"
            : result?.verdict === "borderline"
                ? "Potential fit"
                : result?.verdict === "no"
                    ? "Low fit"
                    : "";

    return (
        <section className={styles.wrap} aria-labelledby={`${formId}-title`}>
            <div className={styles.header}>
                <h2 id={`${formId}-title`} className={styles.title}>Role fit check</h2>
                <p className={styles.lede}>
                    Upload a job description or paste it below. I’ll analyze how well I match this role.
                </p>
            </div>

            <form onSubmit={onSubmit} className={styles.form} aria-describedby={`${formId}-help`}>
                <div className={styles.inputGrid}>
                    {/* File uploader / drop zone */}
                    <div className={styles.uploaderBlock}>
                        <label
                            onDragOver={(e) => {
                                e.preventDefault();
                                setDragOver(true);
                            }}
                            onDragLeave={() => setDragOver(false)}
                            onDrop={handleDrop}
                            className={`${styles.drop} ${dragOver ? styles.dropOver : ""}`}
                        >
                            <input
                                ref={fileRef}
                                type="file"
                                onChange={onFileChange}
                                accept=".pdf,.docx,.txt"
                                aria-label="Upload job description file"
                            />
                            <div className={styles.dropIcon} aria-hidden="true">
                                <FontAwesomeIcon icon={faUpload} className={styles.iconLg}/>
                            </div>
                            <div className={styles.dropText}>
                                <strong>Drag & drop</strong> a PDF/DOCX/TXT here<br/>or <span className={styles.linkish}>browse</span> to upload
                            </div>
                            {file ? (
                                <div className={styles.fileBadge} title={file.name}>
                                    <FontAwesomeIcon icon={faFileLines} className={styles.iconInline}/>
                                    <span>{file.name}</span>
                                </div>
                            ) : null}
                        </label>
                        <div className={styles.hint}>No files are stored. Parsing happens server-side.</div>
                    </div>

                    <div className={styles.or} aria-hidden="true">or</div>

                    {/* Paste box */}
                    <div className={styles.pasteBlock}>
            <textarea
                className={styles.textarea}
                placeholder="Paste the job description here…"
                value={jdText}
                onChange={(e) => setJdText(e.target.value)}
                rows={8}
                aria-describedby={`${formId}-help`}
            />
                        <div id={`${formId}-help`} className={styles.hint}>
                            Tip: Include responsibilities, requirements, and tech stack for best results.
                        </div>
                    </div>
                </div>

                {/* CAPTCHA */}
                {siteKey ? (
                    <div style={{marginTop: 10, display: "flex", alignItems: "center", gap: 8}}>
                        <FontAwesomeIcon icon={faShield} className={styles.iconInline}/>
                        <Turnstile
                            onVerify={(t) => setCaptcha(t)}
                            onExpire={() => setCaptcha(null)}
                            theme="light"
                            size="flexible"
                        />
                    </div>
                ) : (
                    <div className={styles.hint} style={{marginTop: 8}}>
                        (CAPTCHA not configured — set <code>NEXT_PUBLIC_TURNSTILE_SITE_KEY</code> to enable.)
                    </div>
                )}

                <div className={styles.actions}>
                    <button type="submit" className={styles.btnPrimary} disabled={disabled}>
                        {loading ? (
                            <>
                                <FontAwesomeIcon icon={faSpinner} className={`${styles.iconInline} ${styles.spin}`}/>
                                Scoring…
                            </>
                        ) : (
                            <>
                                <FontAwesomeIcon icon={faWandMagicSparkles} className={styles.iconInline}/>
                                Check fit
                            </>
                        )}
                    </button>
                    <button type="button" className={styles.btnGhost} onClick={resetAll} disabled={loading}>
                        <FontAwesomeIcon icon={faRotateLeft} className={styles.iconInline}/>
                        Reset
                    </button>
                </div>

                {error ? <div role="alert" className={styles.error}>{error}</div> : null}

                {/* Delayed progress note */}
                {loading && showDelayMsg && !error && (
                    <div className={styles.progressNote} role="status" aria-live="polite">
                        <FontAwesomeIcon icon={faClock} className={styles.iconInline}/>
                        Analyzing the job description — this can take a few seconds.
                    </div>
                )}
            </form>

            {/* Results */}
            {result && (
                <div className={styles.resultCard} aria-live="polite">
                    <div className={styles.scoreWrap}>
                        <div className={styles.scoreRing} aria-hidden="true">
                            <svg viewBox="0 0 36 36">
                                <path className={styles.ringBg} d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32"/>
                                <path
                                    className={styles.ringFg}
                                    d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32"
                                    strokeDasharray={`${Math.max(0, Math.min(100, result.score))}, 100`}
                                />
                            </svg>
                            <div className={styles.scoreText}>{result.score}</div>
                        </div>
                        <div className={styles.scoreMeta}>
                            <div className={styles.verdict}>
                                {result.verdict === "yes" && <FontAwesomeIcon icon={faCircleCheck} className={`${styles.iconInline} ${styles.positive}`}/>}
                                {result.verdict === "borderline" && <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconInline}/>}
                                {result.verdict === "no" && <FontAwesomeIcon icon={faTriangleExclamation} className={`${styles.iconInline} ${styles.warning}`}/>}
                                <span aria-label="verdict">
                  {result.verdict ? verdictLabel : ""}
                </span>
                            </div>
                            <p className={styles.rationale}>{result.rationale}</p>
                            {!!result.tags?.length && (
                                <ul className={styles.tags} role="list">
                                    {result.tags.slice(0, 8).map((t) => <li key={t} className={styles.tag}>{t}</li>)}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className={styles.cols}>
                        <div>
                            <h3 className={styles.h3}>
                                <FontAwesomeIcon icon={faCircleCheck} className={styles.headingIcon}/>
                                Strengths
                            </h3>
                            <ul className={styles.list}>
                                {result.strengths.slice(0, 4).map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className={styles.h3}>
                                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.headingIcon}/>
                                Gaps
                            </h3>
                            <ul className={styles.list}>
                                {result.gaps.slice(0, 4).map((g, i) => <li key={i}>{g}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.ctaRow}>
                        <Link href="/contact" className={styles.btnPrimary}>Introduce me to the team</Link>
                    </div>
                </div>
            )}
        </section>
    );
}