'use client'
import { useEffect, useState } from 'react';

export default function ReadingProgress(){
  const [pct, setPct] = useState(0);
  useEffect(() => {
    function onScroll(){
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      const v = height > 0 ? (scrollTop / height) * 100 : 0;
      setPct(Math.max(0, Math.min(100, v)));
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return <div className="progressbar" style={{ width: pct + '%' }} aria-hidden="true" />;
}
