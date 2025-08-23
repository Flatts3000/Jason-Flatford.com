'use client';

import {useEffect, useRef} from 'react';

type TurnstileAPI = {
    render: (el: HTMLElement, opts: Record<string, any>) => string; // widget id
    reset: (id?: string) => void;
    remove?: (id: string) => void;
};

declare global {
    interface Window {
        turnstile?: TurnstileAPI;
    }
}

type Props = {
    siteKey?: string;
    onVerify: (token: string) => void;
    onExpire?: () => void;
    theme?: 'light' | 'dark' | 'auto';
    size?: 'normal' | 'compact' | 'flexible' | 'invisible';
    className?: string;
};

export default function Turnstile({
                                      siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
                                      onVerify,
                                      onExpire,
                                      theme = 'light',
                                      size = 'flexible',
                                      className,
                                  }: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    const widgetId = useRef<string | null>(null);

    // Ensure script is present (once)
    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (window.turnstile) return;

        const existing = document.querySelector<HTMLScriptElement>(
            'script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
        );
        if (existing) return;

        const s = document.createElement('script');
        s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        s.async = true;
        s.defer = true;
        document.head.appendChild(s);
    }, []);

    useEffect(() => {
        let canceled = false;

        const tryRender = () => {
            if (canceled || !window.turnstile) return;

            // If we already rendered once, remove before re-render
            if (widgetId.current && window.turnstile.remove) {
                try {
                    window.turnstile.remove(widgetId.current);
                } catch {
                }
                widgetId.current = null;
            }

            const el = ref.current;
            if (!el) return; // <-- Guard fixes TS2345
            widgetId.current = window.turnstile.render(el as HTMLElement, {
                sitekey: siteKey,           // Turnstile expects 'sitekey'
                theme,
                size,
                callback: (token: string) => onVerify(token),
                'expired-callback': () => onExpire?.(),
                'error-callback': () => onExpire?.(),
            });
        };

        // Wait until the script finished loading
        const id = setInterval(() => {
            if (window.turnstile) {
                clearInterval(id);
                tryRender();
            }
        }, 50);

        return () => {
            canceled = true;
            clearInterval(id);
            if (window.turnstile && widgetId.current && window.turnstile.remove) {
                try {
                    window.turnstile.remove(widgetId.current);
                } catch {
                }
                widgetId.current = null;
            }
        };
    }, [siteKey, theme, size, onVerify, onExpire]);

    return <div ref={ref} className={className}/>;
}