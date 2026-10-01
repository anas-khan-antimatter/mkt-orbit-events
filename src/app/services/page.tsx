"use client";

import Link from "next/link";

const serviceDetails = [
  {
    title: "Event Strategy & Design",
    desc: "Concept development, creative direction, and end-to-end event architecture. We define the narrative spine, design the guest journey, and align every touchpoint with your brand identity.",
    deliverables: ["Creative brief & moodboard", "Venue strategy & spatial design", "Guest journey mapping", "Production schedule & budget"],
  },
  {
    title: "Experiential Marketing",
    desc: "Immersive brand activations, pop-up environments, and sensory installations that create measurable emotional connection between your audience and your brand.",
    deliverables: ["Interactive installation design", "Pop-up & touring activation", "Scent-scape & soundscape design", "Virality-forward social mechanics"],
  },
  {
    title: "Production & Logistics",
    desc: "Flawless on-the-ground execution. We manage every moving part — vendor coordination, staging, AV, lighting, catering, permits, and contingency planning.",
    deliverables: ["Technical production plan", "Vendor sourcing & management", "On-site direction & stage management", "Risk assessment & backup plans"],
  },
  {
    title: "Festival & Large-Scale",
    desc: "Multi-day festival production for crowds of 5,000 to 50,000+. Site design, crowd-flow engineering, multiple stages, F&B programs, and artist logistics.",
    deliverables: ["Site master plan", "Stage & production design", "Crowd-flow & safety plan", "Artist & talent management"],
  },
  {
    title: "Corporate & Summit",
    desc: "Executive off-sites, product launches, investor events, board retreats, and stakeholder convenings. High-stakes environments where precision is non-negotiable.",
    deliverables: ["Executive itinerary design", "Keynote staging & speaker prep", "VIP hospitality & NDA management", "Post-event impact report"],
  },
  {
    title: "Talent & Vendor Curation",
    desc: "Artist booking, talent negotiation, and vendor sourcing that aligns with your creative vision and budget. From headliners to specialty caterers.",
    deliverables: ["Talent shortlist & booking", "Vendor RFPs & negotiation", "Contract review & insurance", "On-site talent hospitality"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="scanlines" />
      <nav className="sticky top-0 z-50 w-full border-b border-[#1f2937]/60 bg-[#030303]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#f8f8f2]">
            <span className="text-[#00e5ff] text-xs font-black">◈</span> ORBIT
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {["Work", "Services", "Brief", "Budget", "Inquire"].map((item) => (
              <Link key={item} href={item === "Work" ? "/work" : `/${item.toLowerCase()}`} className="text-xs font-medium uppercase tracking-widest text-[#6b7280] hover:text-[#f8f8f2] transition-colors">{item}</Link>
            ))}
          </nav>
          <button className="md:hidden text-[#6b7280]" aria-label="Menu">☰</button>
        </div>
      </nav>

      <main className="bg-[#030303]">
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00b8d4]">Capabilities</span>
          <h1 className="mt-4 poster text-6xl font-black text-[#f8f8f2]">Full-Spectrum<br />Event Craft</h1>
          <p className="mt-5 max-w-xl text-[#6b7280]">Every service is designed to work independently or as part of an integrated production ecosystem. We scale from creative consultation to full turnkey execution.</p>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {serviceDetails.map((svc) => (
            <div key={svc.title} className="glass-card p-8 rounded-lg border-b border-[#1f2937]/20">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-[#f8f8f2]">{svc.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">{svc.desc}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#00b8d4]">Deliverables</h3>
                  <ul className="mt-3 space-y-1.5">
                    {svc.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-[#f8f8f2]/70">
                        <span className="text-[#00e5ff]">—</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="py-20 text-center">
          <h2 className="poster text-4xl font-black text-[#f8f8f2]">Not sure what you need?</h2>
          <p className="mt-4 max-w-lg mx-auto text-[#6b7280]">Brief us on your event and we&apos;ll recommend a package. No pitch decks, no pressure.</p>
          <Link href="/brief" className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[#00e5ff] px-8 text-xs font-bold uppercase tracking-widest text-[#030303] transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]">
            Open the Brief →
          </Link>
        </section>
      </main>

      <footer className="border-t border-[#1f2937] py-8 bg-[#0a0a0a] text-center">
        <p className="text-[10px] text-[#6b7280]">© 2025 Orbit Events</p>
      </footer>
    </>
  );
}