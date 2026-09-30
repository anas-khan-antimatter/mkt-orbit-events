"use client";

import { useState } from "react";

export default function InquirePage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Simulate submission — in production, send to CRM / email API
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center">
        <div className="mx-auto max-w-lg px-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-3xl text-white">
            ✓
          </div>
          <h1 className="mt-6 text-3xl font-bold text-white">Thank You</h1>
          <p className="mt-4 text-stone-400">
            Your inquiry has been received. Our team will reach out within 24 hours to
            discuss your vision.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Connect
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Inquire
          </h1>
          <p className="mx-auto mt-4 max-w-md text-stone-400">
            Tell us about your vision. We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-stone-800 bg-stone-900/50 p-6 sm:p-10 space-y-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold uppercase tracking-widest text-stone-300">
                Name
              </label>
              <input
                required
                className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-sm text-white placeholder-stone-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold uppercase tracking-widest text-stone-300">
                Email
              </label>
              <input
                required
                type="email"
                className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-sm text-white placeholder-stone-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold uppercase tracking-widest text-stone-300">
              Company / Organization
            </label>
            <input
              className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-sm text-white placeholder-stone-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
              placeholder="Company name (optional)"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold uppercase tracking-widest text-stone-300">
              Event Type
            </label>
            <select
              className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-sm text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            >
              <option value="">Select event type</option>
              <option value="corporate">Corporate Event</option>
              <option value="launch">Product Launch</option>
              <option value="gala">Gala / Fundraiser</option>
              <option value="festival">Festival</option>
              <option value="activation">Brand Activation</option>
              <option value="wedding">Wedding / Celebration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold uppercase tracking-widest text-stone-300">
              Estimated Budget
            </label>
            <select
              className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-sm text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
            >
              <option value="">Select range</option>
              <option value="under-25k">Under $25,000</option>
              <option value="25-50k">$25,000 – $50,000</option>
              <option value="50-100k">$50,000 – $100,000</option>
              <option value="100-250k">$100,000 – $250,000</option>
              <option value="250-500k">$250,000 – $500,000</option>
              <option value="500k-plus">$500,000+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold uppercase tracking-widest text-stone-300">
              Tell Us About Your Event
            </label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-stone-700 bg-stone-800/50 px-4 py-3 text-sm text-white placeholder-stone-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
              placeholder="Describe your vision, expected guest count, dates, and any special requirements..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-600/30"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}