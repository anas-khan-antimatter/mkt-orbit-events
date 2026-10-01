"use client";

import Link from "next/link";
import { use } from "react";

const caseStudies: Record<string, { title: string; category: string; venue: string; attendees: number; year: number; client: string; challenge: string; approach: string; results: string[]; testimonial?: { quote: string; name: string; title: string } }> = {
  "aether-summit": {
    title: "AETHER SUMMIT",
    category: "Product Launch",
    venue: "Pier 17, NYC",
    attendees: 3400,
    year: 2024,
    client: "Aether Technologies",
    challenge: "Aether needed a product launch that matched the scale of their ambition — a new AR platform revealed to 3,400 guests across a single night. The brief: make the technology invisible and the experience unforgettable.",
    approach: "We transformed Pier 17 into a multi-sensory environment with 16 projection-mapped surfaces, a 360° LED ceiling, and a custom scent-scape. The keynote was staged as a cinematic reveal with live orchestration and holographic product demos. No keynote slides. No static panels.",
    results: [
      "3,400 attendees, 98% stay-through rate",
      "12M+ social impressions within 48 hours",
      "Product waitlist grew 340% overnight",
      "82% of surveyed guests rated it 'best launch ever attended'",
    ],
    testimonial: {
      quote: "Orbit didn't just produce an event — they built a universe around our product. The energy in that room was unlike anything we've experienced.",
      name: "Sofia Miralles",
      title: "CMO, Aether Technologies",
    },
  },
  "noir-gala": {
    title: "NOIR GALA",
    category: "Annual Gala",
    venue: "The Shed, NYC",
    attendees: 620,
    year: 2024,
    client: "Noir Foundation",
    challenge: "An annual fundraiser that had grown stale — same venue, same format, same results. The Foundation needed to reignite donor excitement and attract a younger philanthropic cohort without alienating legacy supporters.",
    approach: "We designed a single long-table format spanning The Shed's entire hall, seating all 620 guests along one continuous line. The menu was a collaboration with a Michelin-starred chef, and each course was paired with a live performance — spoken word, string quartet, digital art. The evening culminated in a live auction run as a game show.",
    results: [
      "$4.2M raised (record, +67% YoY)",
      "40% of attendees were first-time donors under 35",
      "98% of post-event survey rated dining 'exceptional'",
      "Featured in Vanity Fair's 'Best Parties of 2024'",
    ],
    testimonial: {
      quote: "Orbit understood that our 'product' is the feeling of being part of something larger. They amplified that feeling by an order of magnitude.",
      name: "James K. Osei",
      title: "Executive Director, Noir Foundation",
    },
  },
  "verdant-fest": {
    title: "VERDANT FEST",
    category: "Experiential Activation",
    venue: "Miami Marine Stadium",
    attendees: 18000,
    year: 2024,
    client: "Verdant Beverage Co.",
    challenge: "Verdant wanted to launch their new line of functional beverages not through advertising, but through a live brand universe — a one-day festival that embodied the product's ethos: vibrant, sustainable, and energizing.",
    approach: "We built a temporary bioluminescent garden on the historic Miami Marine Stadium grounds, featuring 40+ interactive art installations, a main stage powered entirely by renewable energy, and a 'flavor lab' where attendees could customize and bottle their own drinks. Every material was compostable or recyclable.",
    results: [
      "18,000 attendees (venue sold out)",
      "2.3M earned media impressions",
      "95% waste diversion rate (landfill-free)",
      "Product trial conversion rate of 73%",
    ],
  },
  "pulse-showcase": {
    title: "PULSE SHOWCASE",
    category: "Brand Immersion",
    venue: "LA State Historic Park",
    attendees: 1200,
    year: 2024,
    client: "Pulse Audio",
    challenge: "Pulse Audio needed to demonstrate their premium headphones weren't just consumer electronics — they were a portal to a deeper listening experience. A standard booth at a trade show wouldn't cut it.",
    approach: "We designed a 45-minute guided listening journey through 6 themed chambers (anechoic → forest → cathedral → studio → club → silence). Each guest experienced Pulse products in environments designed to showcase specific audio capabilities. The journey ended in a dark-room 'silent concert' with 100 dancers wearing Pulse headphones.",
    results: [
      "1,200 guests, avg dwell time 52 min",
      "Press preview drew 40+ publications",
      "Pre-orders on opening night exceeded 6-month forecast",
      "94% of attendees said they'd 'definitely' recommend to a peer",
    ],
  },
};

export default function WorkSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = caseStudies[slug];

  if (!project) {
    return (
      <div className="bg-[#030303] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#f8f8f2]">Event not found</h1>
          <Link href="/work" className="mt-4 text-[#00b8d4] hover:text-[#00e5ff] transition-colors">← Back to work</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="scanlines" />
      <nav className="sticky top-0 z-50 w-full border-b border-[#1f2937]/60 bg-[#030303]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#f8f8f2]"><span className="text-[#00e5ff] text-xs font-black">◈</span> ORBIT</Link>
          <Link href="/work" className="text-xs text-[#6b7280] hover:text-[#f8f8f2] transition-colors">← Back to Work</Link>
        </div>
      </nav>

      <main className="bg-[#030303]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="py-16 lg:py-24">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00b8d4]">{project.category}</span>
            <h1 className="mt-4 poster text-6xl font-black text-[#f8f8f2]">{project.title}</h1>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#6b7280]">
              <span>📍 {project.venue}</span>
              <span>👥 {project.attendees.toLocaleString()} attendees</span>
              <span>📅 {project.year}</span>
              <span>🤝 {project.client}</span>
            </div>
          </div>

          {/* Challenge + Approach */}
          <div className="grid gap-12 lg:grid-cols-2 py-8">
            <div className="glass-card p-8 rounded-lg">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#00b8d4]">The Challenge</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#f8f8f2]/80">{project.challenge}</p>
            </div>
            <div className="glass-card p-8 rounded-lg">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#00b8d4]">Our Approach</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#f8f8f2]/80">{project.approach}</p>
            </div>
          </div>

          {/* Results */}
          <div className="py-16">
            <h2 className="poster text-4xl font-black text-[#f8f8f2]">Results</h2>
            <ul className="mt-8 space-y-4">
              {project.results.map((r, i) => (
                <li key={i} className="flex items-center gap-4 text-sm text-[#f8f8f2]/80">
                  <span className="text-[#00e5ff] glow-text">▸</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="py-16 border-t border-[#1f2937]">
              <blockquote className="max-w-3xl mx-auto text-center">
                <p className="text-lg italic leading-relaxed text-[#f8f8f2]/90">&ldquo;{project.testimonial.quote}&rdquo;</p>
                <footer className="mt-4 text-xs text-[#6b7280]">— {project.testimonial.name}, {project.testimonial.title}</footer>
              </blockquote>
            </div>
          )}

          {/* CTA */}
          <div className="py-16 text-center">
            <Link href="/brief" className="inline-flex h-12 items-center justify-center rounded-full bg-[#00e5ff] px-8 text-xs font-bold uppercase tracking-widest text-[#030303] transition-all hover:shadow-[0_0_24px_rgba(0,229,255,0.5)]">
              Start Your Brief →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}