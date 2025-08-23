'use client';

import {useEffect, useRef} from 'react';

type TurnstileAPI = {
    render: (el: HTMLElement, opts: Record<string, any>) => string;
    reset: (id?: string) => void;
    remove?: (id: string) => void;
    getResponse?: (id: string) => string | null;
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
    const elRef = useRef<HTMLDivElement | null>(null);
    const widgetIdRef = useRef<string | null>(null);

    // Keep latest callbacks without causing effect to re-run
    const verifyRef = useRef(onVerify);
    const expireRef = useRef(onExpire);
    useEffect(() => {
        verifyRef.current = onVerify;
    }, [onVerify]);
    useEffect(() => {
        expireRef.current = onExpire;
    }, [onExpire]);

    // Load script once
    useEffect(() => {
        if (typeof window === 'undefined' || window.turnstile) return;

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

    // Render the widget; DO NOT depend on onVerify/onExpire here
    useEffect(() => {
        let canceled = false;
        let pollId: number | null = null;

        const render = () => {
            if (canceled || !window.turnstile) return;

            // If already rendered, avoid duplicate mounts
            if (widgetIdRef.current && window.turnstile.remove) {
                try {
                    window.turnstile.remove(widgetIdRef.current);
                } catch {
                }
                widgetIdRef.current = null;
            }

            const el = elRef.current;
            if (!el) return;

            widgetIdRef.current = window.turnstile.render(el as HTMLElement, {
                sitekey: siteKey,
                theme,
                size,
                'refresh-expired': 'auto',
                retry: 'auto',
                // Helps if auto-verification stalls
                appearance: 'interaction-only',
                callback: (token: string) => {
                    if (pollId) {
                        clearInterval(pollId);
                        pollId = null;
                    }
                    verifyRef.current?.(token);
                },
                'expired-callback': () => expireRef.current?.(),
                'error-callback': () => expireRef.current?.(),
            });

            // Safety net: poll token in case callback isn't fired
            if (window.turnstile.getResponse && widgetIdRef.current) {
                pollId = window.setInterval(() => {
                    const id = widgetIdRef.current!;
                    const token = window.turnstile!.getResponse!(id);
                    if (token) {
                        clearInterval(pollId!);
                        pollId = null;
                        verifyRef.current?.(token);
                    }
                }, 400);
            }
        };

        const wait = window.setInterval(() => {
            if (window.turnstile) {
                clearInterval(wait);
                render();
            }
        }, 50);

        return () => {
            canceled = true;
            clearInterval(wait);
            if (pollId) {
                clearInterval(pollId);
                pollId = null;
            }
            if (window.turnstile && widgetIdRef.current && window.turnstile.remove) {
                try {
                    window.turnstile.remove(widgetIdRef.current);
                } catch {
                }
                widgetIdRef.current = null;
            }
        };
    }, [siteKey, theme, size]); // <-- callbacks intentionally NOT included

    return <div ref={elRef} className={className}/>;
}