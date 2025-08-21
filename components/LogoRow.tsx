import Image from "next/image";

type Logo = { src: string; alt: string };
export function LogoRow({ items }: { items: Logo[] }){
  return (
    <div className="logo-row">
      {items.map((l) => (
        <div key={l.alt} className="logo-cell">
          <Image src={l.src} alt={l.alt} width={140} height={40} />
        </div>
      ))}
    </div>
  )
}
