export function StatCard({ label, value, caption }: { label: string; value: string; caption?: string }){
  return (
    <div className="card stat">
      <div className="value">{value}</div>
      <div className="label">{label}</div>
      {caption && <div className="cap">{caption}</div>}
    </div>
  )
}
