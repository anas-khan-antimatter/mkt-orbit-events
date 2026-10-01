"use client";

import Link from "next/link";

const allProjects = [
  { slug: "aether-summit", title: "AETHER SUMMIT", category: "Product Launch", venue: "Pier 17, NYC", attendees: 3400, year: 2024, color: "#00e5ff" },
  { slug: "noir-gala", title: "NOIR GALA", category: "Annual Gala", venue: "The Shed, NYC", attendees: 620, year: 2024, color: "#ff6bb5" },
  { slug: "verdant-fest", title: "VERDANT FEST", category: "Experiential Activation", venue: "Miami Marine Stadium", attendees: 18000, year: 2024, color: "#00e5ff" },
  { slug: "pulse-showcase", title: "PULSE SHOWCASE", category: "Brand Immersion", venue: "LA State Historic Park", attendees: 1200, year: 2024, color: "#ff6bb5" },
  { slug: "nexus-summit", title: "NEXUS SUMMIT", category: "Corporate Summit", venue: "Convention Center, LV", attendees: 2200, year: 2023, color: "#00e5ff" },
  { slug: "drift-series", title: "DRIFT SERIES", category: "Pop-Up Tour", venue: "Multiple cities", attendees: 8500, year: 2023, color: "#ff6bb5" },
];

export default function WorkPage() {
  return (
    <>
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

      <div className="scanlines" />

      <main className="min-h-screen bg-[#030303]">
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00b8d4]">Portfolio</span>
          <h1 className="mt-4 poster text-6xl font-black text-[#f8f8f2]">Every Event<br />a Composition</h1>
          <p className="mt-5 max-w-xl text-[#6b7280]">Selected works from our portfolio. Each project represents a unique convergence of brand narrative, spatial design, and human connection.</p>

          <div className="mt-12 space-y-8">
            {allProjects.map((p, i) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="group flex items-center gap-6 py-6 px-6 border-b border-[#1f2937]/40 glass-card rounded-lg transition-all hover:border-[#00e5ff]/20">
                <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-[#1f2937] flex items-center justify-center text-lg font-black text-[#6b7280]">{i + 1}</div>
                <div className="flex-1">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#00b8d4]">{p.category}</span>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#f8f8f2]">{p.title}</h2>
                  <div className="mt-1 text-xs text-[#6b7280]">{p.venue} · {p.attendees.toLocaleString()} attendees · {p.year}</div>
                </div>
                <span className="text-[#00e5ff] text-lg group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1f2937] py-8 bg-[#0a0a0a] text-center">
        <p className="text-[10px] text-[#6b7280]">© 2025 Orbit Events</p>
      </footer>
    </>
  );
}