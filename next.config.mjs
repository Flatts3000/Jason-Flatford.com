// next.config.mjs
const isDev = process.env.NODE_ENV !== "production";

/** Build a CSP string that is dev-safe (HMR) and prod-strict */
const csp = [
    "default-src 'self'",
    // Next dev bundles use eval for source maps; allow only in dev:
    `script-src 'self' ${isDev ? "'unsafe-eval'" : ""} 'unsafe-inline' plausible.io`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    // HMR needs ws: in dev; Plausible needs HTTPS connect
    `connect-src 'self' https://plausible.io https://events.plausible.io ${isDev ? "ws: wss:" : ""}`,
    // For embeds (Calendly, Cal.com) if you add them
    "frame-src 'self' https://calendly.com https://*.cal.com",
    "worker-src 'self' blob:",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
].join("; ");

const nextConfig = {
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {key: "Content-Security-Policy", value: csp},
                    {key: "Referrer-Policy", value: "strict-origin-when-cross-origin"},
                    {key: "X-Content-Type-Options", value: "nosniff"},
                    {key: "X-Frame-Options", value: "SAMEORIGIN"},
                    {key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()"},
                ],
            },
        ];
    },
};

export default nextConfig;