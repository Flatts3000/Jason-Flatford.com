import { ThemeToggle } from "@/components/ThemeToggle";

export default function Page(){
  return (
    <section>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12}}>
        <h1 style={{fontSize: '28px', margin: 0}}>Theme Preview</h1>
        <ThemeToggle />
      </div>
      <p className="muted" style={{marginTop:'8px'}}>Cycle themes to see token changes.</p>

      <div className="grid" style={{gridTemplateColumns:'repeat(3,1fr)', gap:'16px', marginTop:'16px'}}>
        <div className="card">
          <div className="stat">
            <div className="value">380,000+</div>
            <div className="label">Registered Users</div>
            <div className="cap">Melee.gg growth</div>
          </div>
        </div>
        <div className="card">
          <div className="stat">
            <div className="value">~70,000</div>
            <div className="label">Monthly Active Users</div>
            <div className="cap">Engagement at scale</div>
          </div>
        </div>
        <div className="card">
          <div className="stat">
            <div className="value">~13,000</div>
            <div className="label">B2B Organizers</div>
            <div className="cap">Event host adoption</div>
          </div>
        </div>
      </div>

      <div style={{marginTop:'24px'}}>
        <a className="btn btn-primary" href="#">Primary Button</a>
        <span style={{display:'inline-block', width:12}} />
        <a className="btn btn-secondary" href="#">Secondary Button</a>
      </div>
    </section>
  );
}
