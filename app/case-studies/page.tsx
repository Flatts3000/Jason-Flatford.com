import Link from "next/link";

const items = [
  { href: "/case-studies/melee", title: "Melee.gg — From Zero to 380k Users", summary: "Scaled multi-tenant esports SaaS via product strategy + architecture." },
  { href: "/case-studies/duly", title: "Duly — AI for Civic Ops", summary: "Automations and NL workflows for staff and citizens." },
  { href: "/case-studies/memnai", title: "Memnai — Natural‑Language BI", summary: "Text‑to‑SQL analytics." },
];

export default function Page(){
  return (
    <section>
      <h1 style={{fontSize: '28px', margin: 0}}>Case Studies</h1>
      <div className="grid" style={{gridTemplateColumns:'repeat(1,1fr)', gap: '16px', marginTop:'16px'}}>
        {items.map(it => (
          <Link key={it.href} href={it.href} className="card">
            <h2 style={{margin:0}}>{it.title}</h2>
            <p className="muted" style={{marginTop:6}}>{it.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
