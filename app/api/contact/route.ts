import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";
import {Resend} from "resend";

const schema = z.object({
    name: z.string().min(2).max(80),
    email: z.string().email(),
    company: z.string().max(120).optional().nullable(),
    message: z.string().min(10).max(2000),
    token: z.string(), // Turnstile
});

const resend = new Resend(process.env.RESEND_API_KEY!);

async function verifyTurnstile(token: string, ip?: string | null) {
    const secret = process.env.TURNSTILE_SECRET_KEY!;
    const body = new URLSearchParams({
        secret,
        response: token,
        ...(ip ? {remoteip: ip} : {}),
    });

    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body,
    });
    const data = await r.json();
    return data.success === true;
}

export async function POST(req: NextRequest) {
    try {
        const json = await req.json();
        const parsed = schema.safeParse(json);
        if (!parsed.success) {
            return NextResponse.json({ok: false, error: "Invalid input"}, {status: 400});
        }
        const {name, email, company, message, token} = parsed.data;

        const ip = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for");
        const ok = await verifyTurnstile(token, ip);
        if (!ok) return NextResponse.json({ok: false, error: "Verification failed"}, {status: 400});

        // Send to your alias (private address never exposed)
        await resend.emails.send({
            from: process.env.CONTACT_FROM!,
            to: process.env.CONTACT_TO!,
            replyTo: email, // lets you reply directly to the sender
            subject: `New inquiry — ${name}${company ? ` @ ${company}` : ""}`,
            text:
                `Name: ${name}\nEmail: ${email}\nCompany: ${company ?? ""}\n\n` +
                `Message:\n${message}\n\n— jasonflatford.com`,
        });

        return NextResponse.json({ok: true}, {status: 200});
    } catch (e) {
        return NextResponse.json({ok: false, error: "Server error"}, {status: 500});
    }
}