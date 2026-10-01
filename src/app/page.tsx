"use client";

import Link from "next/link";

const projects = [
  { slug: "aether-summit", title: "AETHER SUMMIT", category: "Product Launch", clients: 3400, color: "#00e5ff" },
  { slug: "noir-gala", title: "NOIR GALA", category: "Annual Gala", clients: 620, color: "#ff6bb5" },
  { slug: "verdant-fest", title: "VERDANT FEST", category: "Experiential Activation", clients: 18000, color: "#00e5ff" },
  { slug: "pulse-showcase", title: "PULSE SHOWCASE", category: "Brand Immersion", clients: 1200, color: "#ff6bb5" },
];

const services = [
  { title: "Event Strategy & Design", desc: "Concept, creative direction, and full event architecture tailored to your brand identity. Every detail calibrated for impact." },
  { title: "Experiential Marketing", desc: "Immersive brand activations, pop-up environments, and sensory installations that captivate audiences." },
  { title: "Production & Logistics", desc: "Flawless on-the-ground execution — venue sourcing, vendor orchestration, staging, and technical direction." },
  { title: "Festival & Large-Scale", desc: "Multi-day festival production, crowd-flow design, and large-format spatial storytelling." },
  { title: "Corporate & Summit", desc: "Executive off-sites, product launches, investor events, and high-stakes stakeholder gatherings." },
  { title: "Talent & Vendor Curation", desc: "Artist booking, talent negotiation, and vendor sourcing that aligns with your creative vision and budget." },
];

export default function Home() {
  return (
    <>
      {/* Scan lines */}
      <div className="scanlines" />

      {/* ─── NAV ─── */}
      <header className="sticky top-0 z-50 w-full border-b border-[#1f2937]/60 bg-[#030303]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#f8f8f2]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#00e5ff]/50 text-[#00e5ff] text-xs font-black">
              ◈
            </span>
            ORBIT
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {["Work", "Services", "Brief", "Budget", "Inquire"].map((item) => (
              <Link
                key={item}
                href={item === "Work" ? "/work" : item === "Brief" ? "/brief" : item === "Budget" ? "/budget" : item === "Inquire" ? "/inquire" : `/${item.toLowerCase()}`}
                className="text-xs font-medium uppercase tracking-widest text-[#6b7280] transition-colors hover:text-[#f8f8f2]"
              >
                {item}
              </Link>
            ))}
          </nav>
          <button className="md:hidden text-[#6b7280]" aria-label="Menu">☰</button>
        </div>
      </header>

      <main>

        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden min-h-[85vh] flex items-center">
          {/* Aurora line */}
          <div className="aurora-line" />

          <div className="mx-auto max-w-7xl px-4 pb-32 pt-28 sm:px-6 lg:px-8 lg:pb-44 lg:pt-36">
            <div className="max-w-4xl">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/8 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-[#00b8d4]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff]" />
                Premium Event Agency — Est. 2018
              </div>
              <h1 className="poster text-[clamp(3rem,8vw,7rem)] font-black leading-[0.88] tracking-[-0.04em] text-[#f8f8f2]">
                Experiences
                <br />
                <span className="glow-text text-[#00e5ff]">
                  Beyond Orbit
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#6b7280] sm:text-lg">
                We design, produce, and execute high-stakes events for brands, 
                artists, and institutions that refuse to exist in the ordinary. 
                Void-black production. Laser-white precision. Cyan-aura atmosphere.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/brief"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#00e5ff] px-8 text-xs font-bold uppercase tracking-widest text-[#030303] transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                >
                  Start Your Brief →
                </Link>
                <Link
                  href="/work"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-[#1f2937] px-8 text-xs font-bold uppercase tracking-widest text-[#6b7280] transition-all hover:border-[#00e5ff]/40 hover:text-[#f8f8f2]"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>

          {/* Atmospheric glow */}
          <div className="absolute -top-20 -right-20 w-[30rem] h-[30rem] rounded-full bg-[#00e5ff]/4 blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#ff6bb5]/3 blur-[80px]" />
        </section>

        {/* ─── STATS ─── */}
        <section className="border-b border-[#1f2937] bg-[#0a0a0a]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
              {[
                { n: "280+", label: "Events Produced" },
                { n: "45+", label: "Global Brands" },
                { n: "97%", label: "Net Promoter Score" },
                { n: "18", label: "Industry Awards" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-4xl font-black tracking-tight text-[#00e5ff] glow-text">{s.n}</div>
                  <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6b7280]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WORK / PORTFOLIO ─── */}
        <section id="work" className="py-24 sm:py-32 bg-[#030303]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00b8d4]">Portfolio</span>
              <h2 className="mt-4 poster text-5xl font-black text-[#f8f8f2]">Featured<br />Experiences</h2>
              <p className="mx-auto mt-5 max-w-lg text-[#6b7280]">
                Every event is a composition — light, space, sound, and narrative converging into a single unforgettable moment.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="group relative overflow-hidden glass-card"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#030303] flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-7xl font-black text-[#f8f8f2]/5">{p.title.charAt(0)}</div>
                      </div>
                    </div>
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#00e5ff]/5 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#00b8d4]">{p.category}</span>
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-[#f8f8f2]">{p.title}</h3>
                    <div className="mt-2 text-xs text-[#6b7280]">{p.clients.toLocaleString()} attendees</div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/work" className="inline-flex h-11 items-center justify-center rounded-full border border-[#1f2937] px-8 text-xs font-bold uppercase tracking-widest text-[#6b7280] transition-all hover:border-[#00e5ff]/30 hover:text-[#f8f8f2]">
                View All Work →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section id="services" className="py-24 sm:py-32 bg-[#0a0a0a] border-t border-[#1f2937]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00b8d4]">Capabilities</span>
              <h2 className="mt-4 poster text-5xl font-black text-[#f8f8f2]">Full-Spectrum<br />Event Craft</h2>
              <p className="mx-auto mt-5 max-w-lg text-[#6b7280]">
                From a 20-person executive dinner to a 50,000-attendee festival — we operate across every scale.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((svc) => (
                <div key={svc.title} className="glass-card p-6 rounded-lg">
                  <h3 className="text-base font-bold tracking-tight text-[#f8f8f2]">{svc.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6b7280]">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BRIEF / CTA ─── */}
        <section className="relative py-28 sm:py-36 bg-[#030303] overflow-hidden">
          <div className="absolute inset-0">
            <div className="aurora-line" style={{ top: '30%' }} />
          </div>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00b8d4]">Start the Conversation</span>
            <h2 className="mt-5 poster text-5xl font-black text-[#f8f8f2]">
              Ready to Go<br />
              <span className="glow-text text-[#00e5ff]">Beyond Orbit?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#6b7280]">
              Tell us about your event. We&apos;ll respond within 24 hours with a creative direction 
              proposal and a rough budget band — no commitment, just signal.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row items-center justify-center">
              <Link href="/brief" className="inline-flex h-12 items-center justify-center rounded-full bg-[#00e5ff] px-8 text-xs font-bold uppercase tracking-widest text-[#030303] transition-all hover:shadow-[0_0_24px_rgba(0,229,255,0.5)]">
                Open the Brief →
              </Link>
              <Link href="/inquire" className="inline-flex h-12 items-center justify-center rounded-full border border-[#1f2937] px-8 text-xs font-bold uppercase tracking-widest text-[#6b7280] transition-all hover:border-[#00e5ff]/30 hover:text-[#f8f8f2]">
                Vendor Interest Form
              </Link>
            </div>
          </div>
          <div className="absolute -bottom-16 -left-16 w-96 h-96 rounded-full bg-[#ff6bb5]/5 blur-[100px]" />
        </section>

      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#1f2937] py-12 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <span className="flex items-center gap-2 text-lg font-bold tracking-tight text-[#f8f8f2]">
                <span className="text-[#00e5ff]">◈</span> ORBIT EVENTS
              </span>
              <p className="mt-3 text-xs leading-relaxed text-[#6b7280]">
                Void-black production · Laser-white precision · Cyan-aura atmosphere.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#6b7280]">Navigate</h4>
              <div className="mt-3 flex flex-col gap-2 text-xs">
                {[{ label: "Work", href: "/work" }, { label: "Services", href: "/services" }, { label: "Brief", href: "/brief" }, { label: "Budget Planner", href: "/budget" }].map((l) => (
                  <Link key={l.label} href={l.href} className="text-[#6b7280] hover:text-[#f8f8f2] transition-colors">{l.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#6b7280]">Contact</h4>
              <p className="mt-3 text-xs text-[#6b7280]">
                New York · London · Dubai<br />
                <Link href="/inquire" className="text-[#00b8d4] hover:text-[#00e5ff] transition-colors">hello@orbitevents.com</Link>
              </p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-[#1f2937] text-center text-[10px] text-[#6b7280]">
            © {new Date().getFullYear?.() || 2025} Orbit Events. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}