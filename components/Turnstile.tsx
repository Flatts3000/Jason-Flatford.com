"use client";

import {useEffect, useRef} from "react";

declare global {
    interface Window {
        turnstile?: {
            render: (el: HTMLElement, opts: any) => string;
            reset: (id?: string) => void;
        };
    }
}

type Props = {
    siteKey?: string;               // defaults to NEXT_PUBLIC_TURNSTILE_SITE_KEY
    onVerify: (token: string) => void;
    onExpire?: () => void;
    theme?: "light" | "dark" | "auto";
    size?: "normal" | "compact" | "flexible" | "invisible";
    className?: string;
};

export default function Turnstile({
                                      siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
                                      onVerify,
                                      onExpire,
                                      theme = "light",
                                      size = "flexible",
                                      className,
                                  }: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    const widgetId = useRef<string | null>(null);

    // load script once
    useEffect(() => {
        if (window.turnstile) return;
        const s = document.createElement("script");
        s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        s.async = true;
        s.defer = true;
        document.head.appendChild(s);
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        function render() {
            if (!window.turnstile || widgetId.current) return;
            widgetId.current = window.turnstile.render(el, {
                sitekey: siteKey,
                theme,
                size,
                callback: (token: string) => onVerify(token),
                "expired-callback": () => onExpire?.(),
                "error-callback": () => onExpire?.(),
            });
        }

        const id = setInterval(() => {
            if (window.turnstile) {
                clearInterval(id);
                render();
            }
        }, 50);

        return () => clearInterval(id);
    }, [siteKey, theme, size, onVerify, onExpire]);

    return <div ref={ref} className={className}/>;
}