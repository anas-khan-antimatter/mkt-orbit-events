import Link from "next/link";

export default function ExperientialPage() {
  return (
    <div className="min-h-screen bg-stone-950">
      <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-950 via-stone-950 to-violet-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">Services</span>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Experiential Marketing</h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-300">
              We design immersive brand activations, pop-up environments, and sensory storytelling
              campaigns that forge deep, lasting connections between your brand and your audience.
            </p>
            <Link
              href="/inquire"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-600/30"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">What We Do</h2>
              <ul className="mt-6 space-y-4 text-stone-400">
                {[
                  "Brand activations & pop-up experiences",
                  "Immersive installations & sensory environments",
                  "Guerrilla marketing campaigns",
                  "Mobile touring experiences",
                  "Digital-physical hybrid activations",
                  "Measurement & audience analytics",
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
                For a global beverage brand, we created a pop-up parkour playground in four cities that generated 80M+ social impressions and a 22% lift in purchase intent among Gen Z.
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