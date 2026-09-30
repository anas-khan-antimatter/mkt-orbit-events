import Link from "next/link";

const stats = [
  { number: "250+", label: "Events Produced" },
  { number: "40+", label: "Global Brands" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "15+", label: "Industry Awards" },
];

const featuredWork = [
  {
    title: "Aether Summit",
    category: "Product Launch",
    gradient: "from-violet-600 to-blue-600",
    desc: "A global tech brand unveiled its next-gen flagship to 1,200 guests across a multi-sensory immersive experience.",
    slug: "aether-summit",
  },
  {
    title: "Noir Gala",
    category: "Annual Gala",
    gradient: "from-stone-700 to-stone-500",
    desc: "An haute couture charity gala blending fashion, philanthropy, and theatrical performance under one roof.",
    slug: "noir-gala",
  },
  {
    title: "Verdant Festival",
    category: "Experiential Activation",
    gradient: "from-emerald-600 to-teal-600",
    desc: "A three-day sustainable music and arts festival drawing 50,000+ attendees across 12 immersive zones.",
    slug: "verdant-festival",
  },
];

const services = [
  {
    title: "Experiential Marketing",
    desc: "Immersive brand activations, pop-up environments, and sensory storytelling that forge deep audience connections.",
    href: "/services/experiential",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Corporate Events",
    desc: "High-stakes conferences, product launches, and executive retreats executed with precision and panache.",
    href: "/services/corporate",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Festival Production",
    desc: "End-to-end festival management — from site design and talent booking to F&B and crowd-flow logistics.",
    href: "/services/festivals",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553l3-.75M9 12l10.5-3m0 6.553l3-.75M9 15l10.5-3M9 18l10.5-3" />
      </svg>
    ),
  },
];

const tools = [
  {
    title: "Budget Planner",
    desc: "Estimate costs for any event type with our interactive planning tool.",
    href: "/budget-planner",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.295 0-3.174-.529-.397-1.4-.647-2.121-.647M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.295 0-3.174-.529-.397-1.4-.647-2.121-.647" />
      </svg>
    ),
  },
  {
    title: "Vendor Checklist",
    desc: "Generate a tailored vendor checklist for your event category.",
    href: "/vendor-checklist",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-violet-950">
        {/* Floating orbs */}
        <div className="pointer-events-none absolute -inset-32 overflow-hidden">
          <div className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[120px]" />
          <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full bg-amber-500/5 blur-[100px]" />
        </div>

        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-40 pt-24 sm:px-6 lg:px-8 lg:pb-52 lg:pt-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              Award-Winning Event Agency
            </div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Experiences That
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                Redefine the Extraordinary
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300 sm:text-xl">
              Orbit Events is a premium event planning and experiential
              marketing agency. We craft unforgettable moments for brands
              that refuse to settle for ordinary.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/inquire"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-600/30 hover:shadow-violet-500/40"
              >
                Start Your Journey
              </Link>
              <Link
                href="/work"
                className="inline-flex h-12 items-center justify-center rounded-full border border-stone-700 px-8 text-sm font-semibold uppercase tracking-widest text-stone-200 transition-all hover:border-violet-500/50 hover:text-white"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative border-b border-stone-800 bg-stone-950">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                  {s.number}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED WORK ===== */}
      <section id="work" className="bg-stone-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Portfolio
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Experiences
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-stone-400">
              From intimate brand launches to global-scale productions — every
              event tells a story.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredWork.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-stone-900 shadow-xl shadow-black/20 ring-1 ring-stone-800 transition-all hover:ring-violet-500/30 hover:shadow-violet-500/10"
              >
                <div
                  className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${p.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="relative text-7xl font-black tracking-tight text-white/20">
                    {p.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                    {p.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">
                    {p.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    View case study
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex h-11 items-center justify-center rounded-full border border-stone-700 px-7 text-xs font-semibold uppercase tracking-widest text-stone-300 transition-all hover:border-violet-500/50 hover:text-white"
            >
              View All Work
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="border-t border-stone-800 bg-stone-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Services
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Full-Spectrum Event Craft
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-stone-400">
              Every detail considered. Every moment orchestrated.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-2xl border border-stone-800 bg-stone-900/50 p-8 transition-all hover:border-violet-500/30 hover:bg-stone-900 hover:shadow-xl hover:shadow-violet-500/5"
              >
                <div className="text-violet-400 transition-colors group-hover:text-violet-300">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">
                  {s.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-violet-400">
                  Learn more
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PLANNER TOOLS ===== */}
      <section className="bg-stone-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Planner Tools
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Plan with Confidence
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-stone-400">
              Free tools to help you scope, budget, and organize your next event.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {tools.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group flex flex-col items-center rounded-2xl border border-stone-800 bg-stone-900/50 p-10 text-center transition-all hover:border-violet-500/30 hover:bg-stone-900 hover:shadow-xl hover:shadow-violet-500/5"
              >
                <div className="text-violet-400 transition-colors group-hover:text-violet-300">
                  {t.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">
                  {t.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-stone-950 to-fuchsia-950 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Create Something
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Truly Unforgettable?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-stone-400">
            Let&apos;s talk about your vision. One conversation can change everything.
          </p>
          <Link
            href="/inquire"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-10 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-600/30 hover:shadow-violet-500/40"
          >
            Inquire Now
          </Link>
        </div>
      </section>
    </>
  );
}