import Link from "next/link";

export default function FestivalsPage() {
  return (
    <div className="min-h-screen bg-stone-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-stone-950 to-teal-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">Services</span>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Festival Production</h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-300">
              End-to-end festival production — from site design and artist booking to crowd-flow
              logistics, sustainability planning, and post-event analytics.
            </p>
            <Link
              href="/inquire"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-600/30"
            >
              Produce Your Festival
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">Festival Services</h2>
              <ul className="mt-6 space-y-4 text-stone-400">
                {[
                  "Site selection & master planning",
                  "Stage design & production",
                  "Artist booking & talent management",
                  "F&B vendor curation & operations",
                  "Sustainability & zero-waste strategy",
                  "Crowd-flow, safety & medical planning",
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
                We produced a three-day sustainable festival for 50,000+ attendees powered entirely by renewable energy, with a 95% waste diversion rate and a wellness village that became the most Instagrammed activation of the summer.
              </p>
              <Link
                href="/work/verdant-festival"
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