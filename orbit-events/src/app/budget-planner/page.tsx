"use client";

import { useState } from "react";

const eventTypes = [
  { id: "corporate", label: "Corporate Conference", base: 85000 },
  { id: "product-launch", label: "Product Launch", base: 65000 },
  { id: "gala", label: "Annual Gala", base: 120000 },
  { id: "festival", label: "Music Festival", base: 250000 },
  { id: "wedding", label: "Wedding", base: 55000 },
  { id: "activation", label: "Brand Activation", base: 45000 },
];

const multipliers: Record<string, number> = {
  intimate: 0.7,
  medium: 1.0,
  large: 1.5,
  mega: 2.5,
};

const addons: Record<string, { label: string; cost: number }> = {
  av: { label: "Advanced AV & Lighting", cost: 18000 },
  catering: { label: "Premium Catering", cost: 12000 },
  entertainment: { label: "Live Entertainment", cost: 25000 },
  decor: { label: "Custom Decor & Design", cost: 15000 },
  digital: { label: "Digital / Hybrid Production", cost: 22000 },
  transport: { label: "Guest Transport", cost: 8000 },
  photo: { label: "Photo & Video", cost: 10000 },
  staffing: { label: "Additional Staffing", cost: 12000 },
};

export default function BudgetPlannerPage() {
  const [eventType, setEventType] = useState(eventTypes[0].id);
  const [scale, setScale] = useState("medium");
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());

  const selectedEvent = eventTypes.find((e) => e.id === eventType)!;
  const scaleMultiplier = multipliers[scale] ?? 1;
  const addonTotal = Array.from(selectedAddons).reduce(
    (sum, id) => sum + addons[id].cost,
    0,
  );
  const estimatedTotal = Math.round(
    selectedEvent.base * scaleMultiplier + addonTotal,
  );

  const toggleAddon = (id: string) => {
    const next = new Set(selectedAddons);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedAddons(next);
  };

  return (
    <div className="min-h-screen bg-stone-950 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Planner Tool
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Budget Planner
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-stone-400">
            Estimate costs for your next event. Adjust the parameters below to
            get a rough budget range.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-800 bg-stone-900/50 p-6 sm:p-10">
          {/* Event Type */}
          <div>
            <label className="text-sm font-semibold uppercase tracking-widest text-stone-300">
              Event Type
            </label>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {eventTypes.map((et) => (
                <button
                  key={et.id}
                  onClick={() => setEventType(et.id)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                    eventType === et.id
                      ? "border-violet-500 bg-violet-500/10 text-white"
                      : "border-stone-700 bg-stone-800/50 text-stone-400 hover:border-stone-600"
                  }`}
                >
                  <div className="font-semibold">{et.label}</div>
                  <div className="mt-0.5 text-xs opacity-70">
                    From ${et.base.toLocaleString()}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Scale */}
          <div className="mt-10">
            <label className="text-sm font-semibold uppercase tracking-widest text-stone-300">
              Scale
            </label>
            <div className="mt-3 flex gap-3">
              {[
                { id: "intimate", label: "Intimate", desc: "&lt; 100 guests" },
                { id: "medium", label: "Medium", desc: "100–500 guests" },
                { id: "large", label: "Large", desc: "500–2,000 guests" },
                { id: "mega", label: "Mega", desc: "2,000+ guests" },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setScale(s.id)}
                  className={`flex-1 rounded-xl border px-4 py-3 text-center transition-all ${
                    scale === s.id
                      ? "border-violet-500 bg-violet-500/10 text-white"
                      : "border-stone-700 bg-stone-800/50 text-stone-400 hover:border-stone-600"
                  }`}
                >
                  <div className="text-sm font-semibold">{s.label}</div>
                  <div className="mt-0.5 text-xs opacity-70">{s.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div className="mt-10">
            <label className="text-sm font-semibold uppercase tracking-widest text-stone-300">
              Add-ons
            </label>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Object.entries(addons).map(([id, addon]) => (
                <button
                  key={id}
                  onClick={() => toggleAddon(id)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                    selectedAddons.has(id)
                      ? "border-violet-500 bg-violet-500/10 text-white"
                      : "border-stone-700 bg-stone-800/50 text-stone-400 hover:border-stone-600"
                  }`}
                >
                  <div className="font-semibold">{addon.label}</div>
                  <div className="mt-0.5 text-xs opacity-70">
                    +${addon.cost.toLocaleString()}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="mt-12 rounded-xl border border-stone-700 bg-stone-800/80 p-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Estimated Budget Range
            </span>
            <div className="mt-2 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              ${estimatedTotal.toLocaleString()}
            </div>
            <p className="mt-2 text-xs text-stone-500">
              Rough estimate only. Contact us for a detailed proposal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}