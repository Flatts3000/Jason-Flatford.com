import {NextRequest, NextResponse} from "next/server";
import {Resend} from "resend";

/** Keep Node runtime for parsers */
export const runtime = "nodejs";
export const maxDuration = 30;
export const dynamic = "force-dynamic";

/* ---------- Helpers: file → text ---------- */
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10MB
const MAX_JD_CHARS = 35_000;

function extFromName(name?: string | null) {
    if (!name) return "";
    const i = name.lastIndexOf(".");
    return i >= 0 ? name.slice(i + 1).toLowerCase() : "";
}

async function readFileText(file: File): Promise<string> {
    const type = file.type || "";
    const ext = extFromName((file as any).name);
    const buf = Buffer.from(await file.arrayBuffer());
    if (buf.length > MAX_FILE_BYTES) throw new Error("File too large (max 10MB).");

    if (type === "application/pdf" || ext === "pdf") {
        const pdfParse = (await import("pdf-parse")).default;
        const data = await pdfParse(buf);
        return (data.text || "").trim();
    }
    if (type === "text/plain" || ext === "txt") {
        return buf.toString("utf8").trim();
    }
    if (
        type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        ext === "docx"
    ) {
        const mammoth = await import("mammoth");
        const {value} = await mammoth.extractRawText({buffer: buf});
        return (value || "").trim();
    }
    throw new Error("Unsupported file type. Please upload a PDF, DOCX, or TXT.");
}

/* ---------- Profile ---------- */
const PROFILE = {
    name: "Jason Flatford",
    targetTitles: [
        "Chief Product Officer", "Head of Product", "VP of Product", "SVP of Product",
        "VP of Product Engineering", "VP of Technical Product Management", "Chief Innovation Officer",
        "Chief Experience Officer", "Chief AI Officer", "Chief Transformation Officer"
    ],
    locations: ["Roanoke, VA", "Washington DC", "Seattle, WA"],
    industries: ["SaaS", "AI/ML", "Gaming/Esports", "Civic Tech", "Cybersecurity", "Health Tech", "Infrastructure/Civil Tech", "Developer Platforms"],
    stagePref: ["Series A", "Series B", "Series C", "High-growth <500 employees"],
    strengths: [
        "Scaled Melee.gg to 400K+ users, ~70K MAU, ~13K organizer partners",
        "Architected 2M+ LOC multi-tenant SaaS with real-time analytics, multilingual UX, PCI-aware payments",
        "OpenAI-powered analytics & automation to reduce operational workload",
        "Exec leadership + hands-on (.NET, Java/Kotlin/Spring Boot, React/React Native, AWS/Azure; Docker/Terraform; Postgres/MySQL/Mongo/Redis)",
        "Governance/compliance: GDPR, COPPA, PCI, SOC-2",
        "Partnerships with global brands (Wizards of the Coast, Red Bull); PLG and cross-functional leadership",
    ],
};

/* ---------- Prompts ---------- */
const SYSTEM_PROMPT = `
You are a precise role-fit evaluator for ${PROFILE.name}. Analyze a job description and rate fit for the target roles.
Be frank but constructive. Prefer evidence from the JD; when uncertain, state assumptions explicitly.
Return only well-formed JSON per the rubric.
`.trim();

const RUBRIC_INSTRUCTIONS = `
Return a JSON object with:
- score: 0-100 (integer)
- verdict: "yes" | "borderline" | "no"
- rationale: 1-2 sentences explaining the score
- strengths: array of 3-6 concise bullets grounded in the JD and candidate profile
- gaps: array of 3-6 concise bullets with risky mismatches or missing requirements
- resume_bullets: array of 3-6 impact bullets tailored to this JD (include metrics from the profile when relevant)
- cover_letter_opener: 2-3 sentences tailored to this JD
- tags: array of 3-10 keywords (role, stage, stack, industry)

Scoring weights:
- Role/title alignment (25)
- Seniority & scope (15)
- Company stage & size (10)
- Industry/domain (10)
- Tech stack & architecture (10)
- Leadership & cross-functional impact (10)
- Location/onsite expectations (10)
- Bonus: AI/LLM, governance, multi-tenant, growth (10)

Be specific; avoid generic phrasing. Keep bullets short and scan-friendly.
`.trim();

function userPrompt(jd: string) {
    const clipped = jd.length > MAX_JD_CHARS ? jd.slice(0, MAX_JD_CHARS) : jd;
    const notice = jd.length > MAX_JD_CHARS ? "\n\n[Note: JD truncated for length]" : "";
    return `
CANDIDATE PROFILE
- Target titles: ${PROFILE.targetTitles.join(", ")}
- Preferred locations: ${PROFILE.locations.join(", ")}
- Industries: ${PROFILE.industries.join(", ")}
- Preferred stage/size: ${PROFILE.stagePref.join(", ")}
- Signature strengths:
  - ${PROFILE.strengths.join("\n  - ")}

JOB DESCRIPTION (raw text):
${clipped}${notice}
`.trim();
}

/* ---------- Types & sanitizer ---------- */
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

function sanitize(obj: any): FitResult {
    return {
        score: Math.max(0, Math.min(100, Math.round(obj?.score ?? 0))),
        verdict: (obj?.verdict === "yes" || obj?.verdict === "borderline" || obj?.verdict === "no") ? obj.verdict : "borderline",
        rationale: String(obj?.rationale ?? ""),
        strengths: Array.isArray(obj?.strengths) ? obj.strengths.slice(0, 6) : [],
        gaps: Array.isArray(obj?.gaps) ? obj.gaps.slice(0, 6) : [],
        resume_bullets: Array.isArray(obj?.resume_bullets) ? obj.resume_bullets.slice(0, 6) : [],
        cover_letter_opener: String(obj?.cover_letter_opener ?? ""),
        tags: Array.isArray(obj?.tags) ? obj.tags.slice(0, 10) : [],
    };
}

/* ---------- CAPTCHA verify ---------- */
async function verifyTurnstile(token?: string | null, req?: NextRequest): Promise<boolean> {
    if (process.env.TURNSTILE_DISABLED === "1" || process.env.NEXT_PUBLIC_TURNSTILE_DISABLED === "1") {
        return true;
    }
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret || !token) return false;

    // Best-effort client IP (optional)
    const ip =
        req?.headers.get("cf-connecting-ip") ||
        req?.headers.get("x-real-ip") ||
        req?.headers.get("x-forwarded-for")?.split(",")[0] ||
        undefined;

    const body = new URLSearchParams();
    body.set("secret", secret);
    body.set("response", token);
    if (ip) body.set("remoteip", ip);

    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: {"content-type": "application/x-www-form-urlencoded"},
        body,
    });

    if (!r.ok) return false;
    const data = await r.json().catch(() => ({}));
    return !!(data as any).success;
}

/* ---------- Notify (email) ---------- */
const resend = new Resend(process.env.RESEND_API_KEY || "");

function shouldNotify(result: FitResult) {
    if (process.env.FIT_NOTIFY_ENABLED !== "1") return false;
    const min = Number(process.env.FIT_NOTIFY_MIN_SCORE ?? "80");
    if (result.verdict === "yes") return true;
    if (!Number.isNaN(min) && result.score >= min) return true;
    return false;
}

async function sendFitEmail(args: {
    result: FitResult;
    jd: string;
    source: "upload" | "paste" | "both";
}) {
    const from = process.env.CONTACT_FROM;
    const to = process.env.CONTACT_TO;
    if (!resend || !process.env.RESEND_API_KEY || !from || !to) return;

    const {result, jd, source} = args;
    const jdSnippet = jd.slice(0, 800);
    const subject = `Fit alert — ${result.score} (${result.verdict.toUpperCase()}) — Role fit check`;

    const text =
        `Role Fit Check — ${new Date().toISOString()}

Verdict: ${result.verdict.toUpperCase()}
Score:   ${result.score}
Source:  ${source}

Rationale:
${result.rationale}

Top strengths:
- ${(result.strengths[0] ?? "")}
- ${(result.strengths[1] ?? "")}
- ${(result.strengths[2] ?? "")}

Top gaps:
- ${(result.gaps[0] ?? "")}
- ${(result.gaps[1] ?? "")}
- ${(result.gaps[2] ?? "")}

Suggested résumé bullets:
${result.resume_bullets.map(b => `- ${b}`).join("\n")}

Tags: ${result.tags.join(", ")}

Cover-letter opener:
${result.cover_letter_opener}

JD (snippet):
${jdSnippet}
— jasonflatford.com`;

    try {
        await resend.emails.send({
            from,
            to,
            subject,
            text,
        });
    } catch (e) {
        // Swallow email errors; don't block the API response
        console.error("[/api/fit] email send failed:", e);
    }
}

/* ---------- Handler ---------- */
export async function POST(req: NextRequest) {
    try {
        const form = await req.formData();
        const pasted = (form.get("text") as string) || "";
        const file = form.get("file") as File | null;
        const token =
            (form.get("turnstileToken") as string) ||
            (form.get("cf-turnstile-response") as string) ||
            "";

        // CAPTCHA gate
        const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
        const mustCheck =
            !!siteKey &&
            process.env.TURNSTILE_DISABLED !== "1" &&
            process.env.NEXT_PUBLIC_TURNSTILE_DISABLED !== "1";

        if (mustCheck) {
            const ok = await verifyTurnstile(token, req);
            if (!ok) {
                return NextResponse.json({error: "Verification failed. Please try again."}, {status: 400});
            }
        }

        if (!pasted && !file) {
            return NextResponse.json({error: "Provide a file or pasted text."}, {status: 400});
        }

        let jd = pasted.trim();
        let source: "upload" | "paste" | "both" = jd ? "paste" : "upload";
        if (file) {
            const extracted = await readFileText(file);
            jd = `${jd}\n\n${extracted}`.trim();
            source = pasted && extracted ? "both" : file ? "upload" : "paste";
        }

        if (jd.length < 200) {
            return NextResponse.json(
                {error: "The job description seems too short. Please paste or upload the full text."},
                {status: 400}
            );
        }

        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                {error: "Server is missing OPENAI_API_KEY. Set it in .env.local."},
                {status: 500}
            );
        }

        // Direct HTTP call to OpenAI (no SDK; avoids zod peer deps)
        const completionRes = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                temperature: 0.2,
                response_format: {type: "json_object"},
                messages: [
                    {role: "system", content: SYSTEM_PROMPT},
                    {role: "user", content: userPrompt(jd)},
                    {role: "system", content: RUBRIC_INSTRUCTIONS},
                ],
            }),
        });

        if (!completionRes.ok) {
            const text = await completionRes.text().catch(() => "");
            throw new Error(`OpenAI error: ${completionRes.status} ${text}`);
        }

        const json = await completionRes.json();
        const content = json?.choices?.[0]?.message?.content ?? "{}";

        let parsed: any = {};
        try {
            parsed = JSON.parse(content);
        } catch {
        }

        const result = sanitize(parsed);

        // Fire-and-forget notify (don’t block response)
        if (shouldNotify(result)) {
            // no need to await; but do not let promise rejection crash handler
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            sendFitEmail({result, jd, source});
        }

        return NextResponse.json(result);
    } catch (err: any) {
        console.error("[/api/fit] error:", err);
        const msg = typeof err?.message === "string" ? err.message : "Unexpected server error. Please try again.";
        return NextResponse.json({error: msg}, {status: 500});
    }
}