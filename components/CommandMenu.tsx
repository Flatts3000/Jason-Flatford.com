'use client'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type Item = { label: string; href: string; external?: boolean };
const ITEMS: Item[] = [
  { label: 'Home', href: '/' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
  { label: 'Résumé (page)', href: '/resume' },
  { label: 'Download Résumé (PDF)', href: '/resume.pdf' },
];

export default function CommandMenu(){
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    function onKey(e: KeyboardEvent){
      const metaK = (e.key.toLowerCase() === 'k') && (e.metaKey || e.ctrlKey);
      if(metaK){
        e.preventDefault();
        dialogRef.current?.showModal();
        setQuery('');
        setTimeout(() => inputRef.current?.focus(), 0);
      }
      if(e.key === 'Escape'){
        dialogRef.current?.close();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const results = ITEMS.filter(i => i.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <dialog ref={dialogRef} className="cmdk">
      <form method="dialog">
        <input
          ref={inputRef}
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          placeholder="Search… (type to filter)"
          aria-label="Command menu search"
        />
        <div className="list" role="listbox">
          {results.map((i)=> (
            <Link
              key={i.label}
              href={i.href}
              role="option"
              className="row"
              onClick={()=>dialogRef.current?.close()}
              {...(i.external ? {target:'_blank'} : {})}
            >
              {i.label}
            </Link>
          ))}
          {results.length===0 && <div className="empty">No matches</div>}
        </div>
        <div className="hint">Press Esc to close • ⌘K / Ctrl K to open</div>
      </form>
    </dialog>
  );
}
