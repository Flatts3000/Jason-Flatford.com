export default function Page() {
    return (
        <section>
            <h1 style={{fontSize: '28px', margin: 0}}>Contact / Book Intro</h1>
            <p className="muted" style={{marginTop: '8px'}}>Interested in CPO/VP roles, advisory, or partnerships? Let’s talk.</p>
            <div style={{display: 'flex', gap: 12, marginTop: '16px', flexWrap: 'wrap'}}>
                <a href="https://calendly.com/flatts-scg/15-minute-intro" className="btn btn-primary">Book a 15‑min Intro</a>
            </div>
            <p className="muted" style={{marginTop: '8px'}}>Prefer an inline scheduler? We can add Calendly embed later.</p>
        </section>
    );
}
