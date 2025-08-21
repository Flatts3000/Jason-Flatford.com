// next.config.mjs
const isProd = process.env.NODE_ENV === "production";

// Utility: build a single-line header string (no CR/LF/TAB)
const oneLine = (parts) =>
    parts.join("; ").replace(/[\r\n\t]+/g, " ").replace(/\s{2,}/g, " ").trim();

// Production CSP (single line, no eval)
const cspProd = oneLine([
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' plausible.io https://challenges.cloudflare.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self' https://plausible.io https://events.plausible.io https://challenges.cloudflare.com",
    "frame-src 'self' https://challenges.cloudflare.com https://calendly.com https://*.cal.com",
    "worker-src 'self' blob:",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
]);

const securityHeadersProd = [
    {key: "Content-Security-Policy", value: cspProd},
    {key: "Referrer-Policy", value: "strict-origin-when-cross-origin"},
    {key: "X-Content-Type-Options", value: "nosniff"},
    {key: "X-Frame-Options", value: "SAMEORIGIN"},
    {key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()"},
];

const nextConfig = {
    async headers() {
        // No CSP in dev to avoid HMR issues and accidental newline crashes
        return isProd
            ? [{source: "/:path*", headers: securityHeadersProd}]
            : [];
    },
};

export default nextConfig;