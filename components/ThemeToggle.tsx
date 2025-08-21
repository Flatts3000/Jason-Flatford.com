'use client'
import { useEffect, useState } from 'react';

const THEMES = ['clean','executive','playful'] as const;
type Theme = typeof THEMES[number];

export function ThemeToggle(){
  const [theme, setTheme] = useState<Theme>('clean');

  useEffect(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem('theme')) as Theme | null;
    const initial = saved && THEMES.includes(saved) ? saved : 'clean';
    setTheme(initial);
    if (typeof document !== 'undefined') document.documentElement.setAttribute('data-theme', initial);
  }, []);

  function cycle(){
    const idx = THEMES.indexOf(theme);
    const next = THEMES[(idx + 1) % THEMES.length];
    setTheme(next);
    if (typeof document !== 'undefined'){
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    }
  }

  return (
    <button onClick={cycle} className="btn btn-secondary" aria-label="Toggle color theme">
      Theme: {theme}
    </button>
  )
}
