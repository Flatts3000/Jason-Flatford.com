'use client'
import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children }: { children: React.ReactNode }){
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el = ref.current!;
    el.classList.add('reveal');
    const io = new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){ el.classList.add('reveal-in'); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return ()=> io.disconnect();
  }, []);
  return <div ref={ref}>{children}</div>;
}
