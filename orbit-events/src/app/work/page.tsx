import Link from "next/link";

const projects = [
  {
    slug: "aether-summit",
    title: "Aether Summit",
    category: "Product Launch",
    gradient: "from-violet-600 to-blue-600",
    desc: "A global tech brand unveiled its next-gen flagship to 1,200 guests across a multi-sensory immersive experience spanning three floors of a converted warehouse in Brooklyn.",
    year: "2025",
    client: "Confidential Tech Brand",
    location: "Brooklyn, NY",
  },
  {
    slug: "noir-gala",
    title: "Noir Gala",
    category: "Annual Gala",
    gradient: "from-stone-700 to-stone-500",
    desc: "An haute couture charity gala blending fashion, philanthropy, and theatrical performance under one roof. Raised $4.2M for arts education.",
    year: "2024",
    client: "The Noir Foundation",
    location: "New York, NY",
  },
  {
    slug: "verdant-festival",
    title: "Verdant Festival",
    category: "Experiential Activation",
    gradient: "from-emerald-600 to-teal-600",
    desc: "A three-day sustainable music and arts festival drawing 50,000+ attendees across 12 immersive zones powered entirely by renewable energy.",
    year: "2024",
    client: "Verdant Collective",
    location: "Hudson Valley, NY",
  },
  {
    slug: "stellar-launch",
    title: "Stellar Launch",
    category: "Product Launch",
    gradient: "from-amber-600 to-orange-600",
    desc: "An automotive reveal experience combining augmented reality, live performance, and a 360-degree projection-mapped environment.",
    year: "2025",
    client: "Confidential Automotive Brand",
    location: "Los Angeles, CA",
  },
  {
    slug: "lunar-benefit",
    title: "Lunar Benefit",
    category: "Annual Gala",
    gradient: "from-sky-600 to-indigo-600",
    desc: "A moonlit fundraising gala on a private rooftop with celestial-themed decor, curated dining, and a live auction of exclusive experiences.",
    year: "2024",
    client: "Lunar Foundation",
    location: "London, UK",
  },
  {
    slug: "solstice-music-fest",
    title: "Solstice Music Fest",
    category: "Experiential Activation",
    gradient: "from-rose-600 to-pink-600",
    desc: "A sunset-to-sunrise music festival celebrating the summer solstice with 30+ artists, interactive art installations, and a wellness village.",
    year: "2025",
    client: "Solstice Events Ltd",
    location: "Ibiza, Spain",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-stone-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Portfolio
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Work
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-stone-400">
            Every project is a story. Here are some of our favorites.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
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
                <h2 className="mt-1 text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                  {p.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-400">
                  {p.desc}
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-stone-500">
                  <span>{p.location}</span>
                  <span className="h-1 w-1 rounded-full bg-stone-600" />
                  <span>{p.year}</span>
                </div>
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
      </div>
    </div>
  );
}