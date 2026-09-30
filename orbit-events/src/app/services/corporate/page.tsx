import Link from "next/link";

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-stone-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-stone-950 to-indigo-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">Services</span>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Corporate Events</h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-300">
              From high-stakes product launches to executive summits and annual galas — we deliver
              flawless corporate events that elevate your brand and achieve measurable business outcomes.
            </p>
            <Link
              href="/inquire"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-600/30"
            >
              Plan Your Event
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">Our Corporate Capabilities</h2>
              <ul className="mt-6 space-y-4 text-stone-400">
                {[
                  "Product launches & flagship keynotes",
                  "Executive retreats & offsites",
                  "Annual shareholder & investor meetings",
                  "Sales kickoffs & incentive trips",
                  "Galas, award ceremonies & milestone celebrations",
                  "Hybrid / virtual event production",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-800 bg-stone-900/50 p-8">
              <h3 className="text-lg font-bold text-white">Case in Point</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">
                We produced a global sales kickoff for a Fortune 500 tech company across 12 time zones, blending live keynotes in New York with immersive virtual breakouts that reached 8,000 employees worldwide.
              </p>
              <Link
                href="/work/aether-summit"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-400 hover:text-violet-300"
              >
                View related work &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}