"use client";

import Link from "next/link";
import { useState } from "react";

export default function InquirePage() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "" , org: "", interest: "vendor", message: "",
    talentType: "", city: "",
  });

  async function handleSubmit() {
    setSending(true);
    await new Promise(r => setTimeout(r, 800));
    setDone(true);
  }

  if (done) {
    return (
      <div className="bg-[#030303] min-h-screen flex items-center justify-center">
        <div className="max-w-lg text-center">
          <div className="text-4xl">◈</div>
          <h1 className="mt-4 poster text-5xl font-black text-[#f8f8f2]">Thank You</h1>
          <p className="mt-4 text-[#6b7280]">We&apos;ll be in touch within 48 hours to discuss how we can work together.</p>
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
          <Link href="/brief" className="text-xs text-[#6b7280] hover:text-[#f8f8f2]">← Plan an Event</Link>
        </div>
      </nav>

      <main className="bg-[#030303] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00b8d4]">Get Involved</span>
          <h1 className="mt-4 poster text-5xl font-black text-[#f8f8f2]">Talent &amp; Vendor<br/>Interest</h1>
          <p className="mt-5 text-[#6b7280]">Artists, performers, caterers, production vendors — if you&apos;d like to be considered for our roster or a specific project, drop your details here.</p>

          <div className="mt-10 glass-card p-8 rounded-lg">
            <div className="space-y-4">
              <input placeholder="Your name *" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
              <input placeholder="Email *" type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
              <input placeholder="Company / Brand" value={form.org} onChange={(e) => setForm({...form, org: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
              <select value={form.interest} onChange={(e) => setForm({...form, interest: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2]">
                <option value="vendor">Vendor / Supplier</option>
                <option value="talent">Performer / Artist</option>
                <option value="venue">Venue Partner</option>
                <option value="sponsor">Sponsor / Brand Partnership</option>
                <option value="other">Other</option>
              </select>
              <input placeholder="City / Region" value={form.city} onChange={(e) => setForm({...form, city: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
              {form.interest === "talent" && (
                <input placeholder="Talent type (e.g. band, DJ, visual artist)" value={form.talentType} onChange={(e) => setForm({...form, talentType: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280]" />
              )}
              <textarea placeholder="Tell us about yourself / your offering" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="w-full bg-transparent border border-[#1f2937] rounded-lg px-4 py-3 text-sm text-[#f8f8f2] placeholder:text-[#6b7280] h-28" />
            </div>
            <button onClick={handleSubmit} disabled={sending} className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#00e5ff] px-8 text-xs font-bold uppercase tracking-widest text-[#030303]">
              {sending ? "Sending..." : "Submit Interest"}
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