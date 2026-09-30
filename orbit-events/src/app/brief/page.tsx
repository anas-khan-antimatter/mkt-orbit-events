"use client";

import Link from "next/link";
import { useState } from "react";

export default function BriefPage() {
  const [step, setStep] = useState(1);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    name: "", email: "", org: "", type: "corporate", guests: "", city: "", budget: "", description: "",
  });

  async function handleSubmit() {
    setSending(true);
    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setDone(true);
    } catch { /* fallback */ }
    setSending(false);
  }

  if (done) {
    return (
      <div className="bg-[#030303] min-h-screen flex items-center justify-center">
        <div className="max-w-lg text-center">
          <span className="text-4xl">◈</span>
          <h1 className="mt-4 poster text-5xl font-black text-[#f8f8f2]">Brief Received</h1>
          <p className="mt-4 text-[#6b7280]">We&apos;ll review your event brief and respond within 24 hours with a creative direction proposal and a rough budget band.</p>
          <Link href="/" className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[#00e5ff] px-8 text-xs font-bold uppercase tracking-widest text-[#030303]">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="scanlines" />
      <nav className="sticky top-0 z-50 w-full border-b border-[#1f2937]/60 bg-[#030303]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#f8f8f2]"><span className="text-[#00e5ff]">◈</span> ORBIT</Link>
        </div>
      </nav>

      <main className="bg-[#030303] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00b8d4]">Step {step} of 3</span>
          <h1 className="mt-4 poster text-5xl font-black text-[#f8f8f2]">Event Brief</h1>

          {/* Step indicator */}
          <div className="mt-6 flex gap-2">
            {[1,2,3].map((s) => (
              <div key={s} className={`w-3 h-3 rounded-full ${s <= step ? 'bg-[#00e5ff]' : 'bg-[#1f2937]'}`} />
            ))}
          </div>

          {step === 1 && (
            <div className="mt-10 glass-card p-8 rounded-lg">
              <h2 className="text-xl font-bold text-[#f8f8f2]">About You</h2>
              <div className="mt-6 space-y-4">
                <input placeholder="Your name *" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
                <input placeholder="Email *" type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
                <input placeholder="Organization / Brand" value={data.org} onChange={(e) => setData({...data, org: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
              </div>
              <button onClick={() => setStep(2)} className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#00e5ff] px-8 text-xs font-bold uppercase tracking-widest text-[#030303]">Next →</button>
            </div>
          )}

          {step === 2 && (
            <div className="mt-10 glass-card p-8 rounded-lg">
              <h2 className="text-xl font-bold text-[#f8f8f2]">Event Details</h2>
              <div className="mt-6 space-y-4">
                <select value={data.type} onChange={(e) => setData({...data, type: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2]">
                  <option value="corporate">Corporate / Summit</option>
                  <option value="product-launch">Product Launch</option>
                  <option value="festival">Festival / Activation</option>
                  <option value="gala">Gala / Fundraiser</option>
                  <option value="private">Private Event</option>
                  <option value="other">Other</option>
                </select>
                <input placeholder="Estimated guest count *" type="number" value={data.guests} onChange={(e) => setData({...data, guests: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
                <input placeholder="City / Location" value={data.city} onChange={(e) => setData({...data, city: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
                <select value={data.budget} onChange={(e) => setData({...data, budget: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2]">
                  <option value="">Budget band (optional)</option>
                  <option value="under-50k">Under $50K</option>
                  <option value="50-150k">$50K – $150K</option>
                  <option value="150-500k">$150K – $500K</option>
                  <option value="500k-1m">$500K – $1M</option>
                  <option value="over-1m">Over $1M</option>
                </select>
              </div>
              <div className="mt-4 flex gap-3">
                <button onClick={() => setStep(1)} className="inline-flex h-11 items-center justify-center rounded-full border border-[#1f2937] px-8 text-xs font-bold uppercase tracking-widest text-[#6b7280]">← Back</button>
                <button onClick={() => setStep(3)} className="inline-flex h-11 items-center justify-center rounded-full bg-[#00e5ff] px-8 text-xs font-bold uppercase tracking-widest text-[#030303]">Next →</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="mt-10 glass-card p-8 rounded-lg">
              <h2 className="text-xl font-bold text-[#f8f8f2]">Tell Us More</h2>
              <div className="mt-6">
                <textarea placeholder="Describe your event — the vision, the vibe, the goals. What would make this unforgettable?" value={data.description} onChange={(e) => setData({...data, description: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280] h-32" />
              </div>
              <div className="mt-4 flex gap-3">
                <button onClick={() => setStep(2)} className="inline-flex h-11 items-center justify-center rounded-full border border-[#1f2937] px-8 text-xs font-bold uppercase tracking-widest text-[#6b7280]">← Back</button>
                <button onClick={handleSubmit} disabled={sending} className="inline-flex h-11 items-center justify-center rounded-full bg-[#00e5ff] px-8 text-xs font-bold uppercase tracking-widest text-[#030303]">
                  {sending ? "Sending..." : "Submit Brief"}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}