"use client";

import Link from "next/link";
import { useState } from "react";

export default function VendorPage() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    company: "", contact: "", email: "", phone: "", category: "catering",
    city: "", pastClients: "", notes: "",
  });

  async function handleSubmit() {
    setSending(true);
    await new Promise(r => setTimeout(r, 700));
    setDone(true);
  }

  if (done) {
    return (
      <div className="bg-[#030303] min-h-screen flex items-center justify-center">
        <div className="max-w-lg text-center">
          <div className="text-4xl">◈</div>
          <h1 className="mt-4 poster text-5xl font-black text-[#f8f8f2]">Application Received</h1>
          <p className="mt-4 text-[#6b7280]">Our vendor partnerships team will review your submission and reach out within 5 business days.</p>
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
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#f8f8f2]">
            <span className="text-[#00e5ff] text-xs font-black">◈</span> ORBIT
          </Link>
          <Link href="/inquire" className="text-xs text-[#6b7280] hover:text-[#f8f8f2]">← Talent Form</Link>
        </div>
      </nav>

      <main className="bg-[#030303] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00b8d4]">Partnerships</span>
          <h1 className="mt-4 poster text-5xl font-black text-[#f8f8f2]">Vendor<br/>Roster Application</h1>
          <p className="mt-5 text-[#6b7280]">
            Orbit Events works with a curated network of vendors across every production category. 
            If your company delivers exceptional quality and reliability, we want to hear from you.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 glass-card p-6 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-black text-[#00e5ff]">150+</div>
              <div className="text-[10px] uppercase tracking-widest text-[#6b7280]">Active Vendors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-[#00e5ff]">98%</div>
              <div className="text-[10px] uppercase tracking-widest text-[#6b7280]">Retention Rate</div>
            </div>
          </div>

          <div className="mt-10 glass-card p-8 rounded-lg">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#00b8d4]">Apply to Our Roster</h2>
            <div className="mt-6 space-y-4">
              <input placeholder="Company name *" value={form.company} onChange={(e) => setForm({...form, company: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
              <input placeholder="Contact person *" value={form.contact} onChange={(e) => setForm({...form, contact: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
              <input placeholder="Email *" type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
              <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
              <select value={form.category} onChange={(e) => setForm({...form, category: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2]">
                <option value="catering">Catering & Food Service</option>
                <option value="av">Audio / Visual / Lighting</option>
                <option value="staging">Staging & Scenic</option>
                <option value="tent">Tents & Structures</option>
                <option value="transport">Transportation & Logistics</option>
                <option value="security">Security & Crowd Management</option>
                <option value="decor">Decor & Florals</option>
                <option value="entertainment">Entertainment & Talent</option>
                <option value="production">Production Management</option>
                <option value="other">Other</option>
              </select>
              <input placeholder="City / Region" value={form.city} onChange={(e) => setForm({...form, city: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
              <input placeholder="Notable past clients / events" value={form.pastClients} onChange={(e) => setForm({...form, pastClients: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
              <textarea placeholder="Tell us about your capacity, specialities, and why you&apos;d be a good fit for the Orbit roster" value={form.notes} onChange={(e) => setForm({...form, notes: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280] h-28" />
            </div>
            <button onClick={handleSubmit} disabled={sending} className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#00e5ff] px-8 text-xs font-bold uppercase tracking-widest text-[#030303]">
              {sending ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#1f2937] py-8 bg-[#0a0a0a] text-center">
        <p className="text-[10px] text-[#6b7280]">© 2025 Orbit Events</p>
      </footer>
    </>
  );
}