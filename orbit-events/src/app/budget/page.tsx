"use client";

import Link from "next/link";
import { useState } from "react";

const bands = [
  { label: "Intimate ($50K–$150K)", min: 50000, max: 150000 },
  { label: "Mid-Scale ($150K–$500K)", min: 150000, max: 500000 },
  { label: "Large Production ($500K–$1.5M)", min: 500000, max: 1500000 },
  { label: "Signature (>$1.5M)", min: 1500000, max: 5000000 },
];

const costPerGuestByType: Record<string, { low: number; high: number }> = {
  "corporate": { low: 250, high: 800 },
  "product-launch": { low: 300, high: 1200 },
  "festival": { low: 80, high: 300 },
  "gala": { low: 400, high: 1500 },
  "private": { low: 200, high: 1000 },
};

export default function BudgetPage() {
  const [type, setType] = useState("corporate");
  const [guests, setGuests] = useState(100);
  const [city, setCity] = useState("new-york");
  const [result, setResult] = useState<null | { low: number; high: number; band: string }>(null);

  const cityMultiplier: Record<string, number> = {
    "new-york": 1.3, "los-angeles": 1.2, "san-francisco": 1.35,
    "london": 1.25, "dubai": 1.15, "miami": 1.1, "other": 1.0,
  };

  function calculate() {
    const perGuest = costPerGuestByType[type] || { low: 200, high: 800 };
    const mult = cityMultiplier[city] || 1.0;
    const low = Math.round(perGuest.low * guests * mult);
    const high = Math.round(perGuest.high * guests * mult);

    let band = "";
    for (const b of bands) {
      if (low >= b.min && high <= b.max) { band = b.label; break; }
    }
    if (!band) band = low < 50000 ? "Boutique (under $50K)" : "Custom (over $5M)";

    setResult({ low, high, band });
  }

  return (
    <>
      <div className="scanlines" />
      <nav className="sticky top-0 z-50 w-full border-b border-[#1f2937]/60 bg-[#030303]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#f8f8f2]"><span className="text-[#00e5ff]">◈</span> ORBIT</Link>
          <Link href="/brief" className="text-xs text-[#6b7280] hover:text-[#f8f8f2]">← Brief</Link>
        </div>
      </nav>

      <main className="bg-[#030303] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00b8d4]">Planner</span>
          <h1 className="mt-4 poster text-5xl font-black text-[#f8f8f2]">Budget<br/>Estimator</h1>
          <p className="mt-5 text-[#6b7280]">Rough budget bands based on event type, guest count, and location. All figures are indicative — final quotes depend on creative scope and production complexity.</p>

          <div className="mt-10 glass-card p-8 rounded-lg">
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-[#00b8d4]">Event Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2]">
                <option value="corporate">Corporate / Summit</option>
                <option value="product-launch">Product Launch</option>
                <option value="festival">Festival / Activation</option>
                <option value="gala">Gala / Fundraiser</option>
                <option value="private">Private Event</option>
              </select>

              <label className="text-xs font-bold uppercase tracking-widest text-[#00b8d4]">Estimated Guests</label>
              <input type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value) || 0)} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2]" min={1} />

              <label className="text-xs font-bold uppercase tracking-widest text-[#00b8d4]">City / Region</label>
              <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2]">
                <option value="new-york">New York City</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="san-francisco">San Francisco / Bay Area</option>
                <option value="miami">Miami</option>
                <option value="london">London</option>
                <option value="dubai">Dubai</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button onClick={calculate} className="mt-8 w-full inline-flex h-12 items-center justify-center rounded-full bg-[#00e5ff] px-8 text-xs font-bold uppercase tracking-widest text-[#030303] transition-all hover:shadow-[0_0_24px_rgba(0,229,255,0.5)]">
              Calculate Estimate
            </button>
          </div>

          {result && (
            <div className="mt-8 glass-card p-8 rounded-lg animate-[float-up_0.6s_ease-out_both]">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#00b8d4]">Estimated Budget Range</h2>
              <div className="mt-4">
                <div className="text-4xl font-black text-[#f8f8f2]">
                  ${(result.low / 1000).toFixed(0)}K – ${(result.high / 1000).toFixed(0)}K
                </div>
                <div className="mt-2 text-xs text-[#6b7280]">Based on {guests.toLocaleString()} guests in your selected city</div>
                <div className="mt-4 glass-card p-4 rounded-lg">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#00b8d4]">Budget Band</span>
                  <div className="mt-1 text-lg font-bold text-[#f8f8f2]">{result.band}</div>
                </div>
              </div>
              <p className="mt-6 text-xs text-[#6b7280]">This is a directional estimate. Submit a brief for a detailed proposal.</p>
              <Link href="/brief" className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-[#00e5ff] px-6 text-[10px] font-bold uppercase tracking-widest text-[#030303]">
                Submit Brief →
              </Link>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-[#1f2937] py-8 bg-[#0a0a0a] text-center">
        <p className="text-[10px] text-[#6b7280]">© 2025 Orbit Events</p>
      </footer>
    </>
  );
}