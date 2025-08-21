export default function Page(){
  return (
    <article>
      <h1 style={{fontSize: '28px', margin: 0}}>Melee.gg — From Zero to 380k Users</h1>

      <div className="cs-summary" style={{marginTop: '12px'}}>
        <p><strong>Role:</strong> EVP of Product & Chief Architect</p>
        <p><strong>Goal:</strong> Centralize tournament ops for scale</p>
        <p><strong>Outcome:</strong> <strong>380k+ users</strong>, <strong>~70k MAU</strong>, <strong>~13k organizers</strong></p>
      </div>

      <div className="cs-body">
        <h2>Problem</h2>
        <p>Grassroots esports relied on forums/spreadsheets; organizers needed a scalable, PCI‑safe, real‑time platform.</p>

        <h2>Strategy</h2>
        <p>Prioritized organizer UX, platformized operations, built real‑time analytics, and set a multi‑tenant architecture to support growth.</p>

        <h2>What I Built</h2>
        <ul>
          <li>2M+ LOC core SaaS as sole architect (initially), later leading a small cross‑functional team.</li>
          <li>Real‑time bracket engine, organizer dashboards, payments, multilingual support, telemetry.</li>
          <li>Cloud infra with autoscaling and observability; API integrations with partners.</li>
        </ul>

        <h2>Impact</h2>
        <ul>
          <li><strong>380k+ registered users</strong>, <strong>~70k MAU</strong></li>
          <li><strong>~13k organizers</strong> onboarded globally</li>
          <li>Partnerships with <strong>Red Bull</strong>, <strong>Wizards of the Coast</strong>, <strong>Disney</strong></li>
        </ul>

        <h2>Tech Stack</h2>
        <p>.NET / Java / React / React Native / AWS & Azure / PostgreSQL / Redis / Stripe</p>

        <h2>Lessons</h2>
        <p>Build for scale from day one; center organizer workflows; instrument everything.</p>
      </div>
    </article>
  );
}
