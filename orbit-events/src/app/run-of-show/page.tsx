"use client";

import { useState } from "react";

interface RunOfShowItem {
  time: string;
  activity: string;
  notes: string;
}

interface ROSData {
  title: string;
  totalDuration: string;
  eventType: string;
  guestCount: string;
  date: string;
  items: RunOfShowItem[];
}

export default function RunOfShowPage() {
  const [eventType, setEventType] = useState("corporate");
  const [guestCount, setGuestCount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ROSData | null>(null);
  const [error, setError] = useState("");

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/run-of-show", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventType, guestCount, date, description }),
      });
      const json = await res.json();
      if (json.success) {
        setResult(json.data);
      } else {
        setError("Failed to generate run of show.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-stone-950 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            AI Tool
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Run of Show Generator
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-stone-400">
            Generate a detailed timeline for your event — powered by AI when available, or by our expert templates.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <form onSubmit={handleGenerate} className="lg:col-span-2 space-y-5 rounded-2xl border border-stone-800 bg-stone-900/50 p-6 sm:p-8">
            <div>
              <label className="block text-sm font-semibold uppercase tracking-widest text-stone-300">
                Event Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-sm text-white focus:border-violet-500 focus:outline-none"
              >
                <option value="corporate">Corporate Conference</option>
                <option value="gala">Gala / Fundraiser</option>
                <option value="festival">Music Festival</option>
                <option value="product-launch">Product Launch</option>
                <option value="wedding">Wedding</option>
                <option value="activation">Brand Activation</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold uppercase tracking-widest text-stone-300">
                Estimated Guests
              </label>
              <input
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-sm text-white placeholder-stone-500 focus:border-violet-500 focus:outline-none"
                placeholder="e.g., 500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold uppercase tracking-widest text-stone-300">
                Event Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-sm text-white focus:border-violet-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold uppercase tracking-widest text-stone-300">
                Notes / Details
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-sm text-white placeholder-stone-500 focus:border-violet-500 focus:outline-none"
                placeholder="Any special requirements, format, or context..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-600/30 disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate Run of Show"}
            </button>

            {error && <p className="text-sm text-red-400">{error}</p>}
          </form>

          {/* Results */}
          <div className="lg:col-span-3">
            {result ? (
              <div className="rounded-2xl border border-stone-800 bg-stone-900/50 p-6 sm:p-8">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white">{result.title}</h2>
                  <p className="mt-1 text-sm text-stone-400">
                    {result.totalDuration} &middot; {result.eventType} &middot; {result.guestCount} guests
                    {result.date !== "TBD" ? ` &middot; ${result.date}` : ""}
                  </p>
                </div>
                <div className="space-y-2">
                  {result.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-1 rounded-xl border border-stone-800 p-4 sm:flex-row sm:items-center sm:gap-6"
                    >
                      <span className="shrink-0 text-sm font-bold text-violet-400 w-14">
                        {item.time}
                      </span>
                      <div className="flex-1">
                        <span className="text-sm font-semibold text-white">{item.activity}</span>
                        <p className="text-xs text-stone-500 mt-0.5">{item.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex h-full min-h-[400px] items-center justify-center rounded-2xl border border-dashed border-stone-800">
                <p className="text-sm text-stone-500">
                  Fill in the form and generate your run of show.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}