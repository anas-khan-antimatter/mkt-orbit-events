"use client";

import { useState } from "react";

const vendorCategories: Record<string, { label: string; items: string[] }> = {
  venue: {
    label: "Venue & Site",
    items: ["Venue booking confirmation", "Site map & floor plan", "Permits & licenses", "Insurance certificates", "Accessibility assessment", "Parking & transport plan", "Weather contingency plan"],
  },
  av: {
    label: "AV / Lighting / Tech",
    items: ["Sound system & microphones", "Lighting design & fixtures", "LED screens / projection", "Video playback & switcher", "WiFi / network infrastructure", "Power distribution & generators", "Technical director"],
  },
  catering: {
    label: "Catering & F&B",
    items: ["Menu tasting & finalization", "Catering staff count", "Dietary restriction plan", "Bar service & beverage menu", "Linen, glassware & flatware", "Waste management & compost"],
  },
  decor: {
    label: "Decor & Design",
    items: ["Floral arrangements", "Furniture rental (tables, chairs, lounge)", "Signage & wayfinding", "Tabletop decor (centerpieces, place settings)", "Draping & fabric installation", "Custom branded elements"],
  },
  talent: {
    label: "Entertainment & Talent",
    items: ["Live band / DJ booking", "MC / host confirmation", "Performer tech riders", "Green room hospitality", "Rehearsal schedule", "Backline equipment"],
  },
  production: {
    label: "Production & Staffing",
    items: ["Event manager / producer", "Stage manager", "Security team", "Volunteer coordinator", "Registration / check-in staff", "Cleanup crew", "First aid / medical staff"],
  },
  photo: {
    label: "Photo / Video / Content",
    items: ["Photographer booking", "Videographer & editor", "Drone / aerial footage", "Photo booth / selfie station", "Livestream setup", "Social media coverage team"],
  },
};

export default function VendorChecklistPage() {
  const [eventCategory, setEventCategory] = useState("corporate");
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggleCheck = (item: string) => {
    const next = new Set(checked);
    if (next.has(item)) next.delete(item);
    else next.add(item);
    setChecked(next);
  };

  const totalItems = Object.values(vendorCategories).reduce(
    (sum, cat) => sum + cat.items.length,
    0,
  );
  const completed = checked.size;

  return (
    <div className="min-h-screen bg-stone-950 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Planner Tool
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Vendor Checklist
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-stone-400">
            Stay organized with a comprehensive vendor checklist tailored to your event type.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-sm text-stone-400">
            <span>
              {completed} / {totalItems} items checked
            </span>
            <span>{totalItems > 0 ? Math.round((completed / totalItems) * 100) : 0}%</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-stone-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
              style={{ width: `${totalItems > 0 ? (completed / totalItems) * 100 : 0}%` }}
            />
          </div>
        </div>

        {/* Event category selector */}
        <div className="mb-10 flex flex-wrap gap-3">
          {[
            { id: "corporate", label: "Corporate Event" },
            { id: "gala", label: "Gala / Fundraiser" },
            { id: "festival", label: "Festival" },
            { id: "wedding", label: "Wedding" },
            { id: "activation", label: "Brand Activation" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setEventCategory(cat.id);
                setChecked(new Set());
              }}
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                eventCategory === cat.id
                  ? "border-violet-500 bg-violet-500/10 text-violet-300"
                  : "border-stone-700 text-stone-500 hover:border-stone-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Checklist */}
        <div className="space-y-8">
          {Object.entries(vendorCategories).map(([key, cat]) => (
            <div key={key}>
              <h2 className="mb-4 text-lg font-bold text-white">{cat.label}</h2>
              <div className="space-y-2">
                {cat.items.map((item) => {
                  const id = `${key}--${item}`;
                  const isChecked = checked.has(id);
                  return (
                    <button
                      key={id}
                      onClick={() => toggleCheck(id)}
                      className={`flex w-full items-center gap-4 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                        isChecked
                          ? "border-violet-500/50 bg-violet-500/5 text-stone-300"
                          : "border-stone-800 bg-stone-900/50 text-stone-400 hover:border-stone-700"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs transition-all ${
                          isChecked
                            ? "border-violet-500 bg-violet-500 text-white"
                            : "border-stone-700 bg-transparent"
                        }`}
                      >
                        {isChecked ? "✓" : ""}
                      </span>
                      <span className={isChecked ? "line-through opacity-60" : ""}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}