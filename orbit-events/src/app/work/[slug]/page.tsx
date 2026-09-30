import Link from "next/link";

const projects: Record<string, { title: string; category: string; gradient: string; desc: string; longDesc: string; year: string; client: string; location: string; highlights: string[] }> = {
  "aether-summit": {
    title: "Aether Summit",
    category: "Product Launch",
    gradient: "from-violet-600 to-blue-600",
    desc: "A global tech brand unveiled its next-gen flagship.",
    longDesc: "Over 1,200 guests were guided through a multi-sensory immersive experience spanning three floors of a converted warehouse in Brooklyn. The journey began with a sonic branding installation in the lobby, followed by interactive product pods on the second floor, and culminated in a keynote delivered via volumetric projection.",
    year: "2025",
    client: "Confidential Tech Brand",
    location: "Brooklyn, NY",
    highlights: [
      "1,200+ VIP guests",
      "Volumetric projection keynote",
      "36-person production crew",
      "12-week planning timeline",
    ],
  },
  "noir-gala": {
    title: "Noir Gala",
    category: "Annual Gala",
    gradient: "from-stone-700 to-stone-500",
    desc: "An haute couture charity gala blending fashion and philanthropy.",
    longDesc: "Held at a historic Manhattan venue, the Noir Gala combined a runway show from emerging designers with a seated dinner and live auction. The evening raised $4.2M for arts education programs in underfunded public schools.",
    year: "2024",
    client: "The Noir Foundation",
    location: "New York, NY",
    highlights: [
      "$4.2M raised for arts education",
      "400 guests in black-tie",
      "Emerging designer runway",
      "Custom lighting & set design",
    ],
  },
  "verdant-festival": {
    title: "Verdant Festival",
    category: "Experiential Activation",
    gradient: "from-emerald-600 to-teal-600",
    desc: "A sustainable music and arts festival.",
    longDesc: "Three days of music, art, and community across 12 immersive zones — all powered entirely by renewable energy. The festival featured 50+ musical acts, large-scale art installations, a farm-to-table food village, and zero-waste initiatives that diverted 95% of waste from landfill.",
    year: "2024",
    client: "Verdant Collective",
    location: "Hudson Valley, NY",
    highlights: [
      "50,000+ attendees",
      "100% renewable energy",
      "95% waste diversion rate",
      "50+ musical acts",
    ],
  },
  "stellar-launch": {
    title: "Stellar Launch",
    category: "Product Launch",
    gradient: "from-amber-600 to-orange-600",
    desc: "An automotive reveal with AR and projection mapping.",
    longDesc: "In a custom-built dome in downtown LA, guests experienced the new vehicle through an augmented reality overlay, followed by a live reveal where the car drove through a 360-degree projection-mapped tunnel. The event generated 150M+ social impressions.",
    year: "2025",
    client: "Confidential Automotive Brand",
    location: "Los Angeles, CA",
    highlights: [
      "150M+ social impressions",
      "AR-powered experience",
      "360° projection mapping",
      "Live drive-through reveal",
    ],
  },
  "lunar-benefit": {
    title: "Lunar Benefit",
    category: "Annual Gala",
    gradient: "from-sky-600 to-indigo-600",
    desc: "A moonlit fundraising gala on a private rooftop.",
    longDesc: "Guests ascended to a private penthouse rooftop in London for an evening of celestial-themed decor, a three-course menu by a Michelin-starred chef, and a live auction of exclusive experiences — including a zero-gravity flight and a private gallery tour.",
    year: "2024",
    client: "Lunar Foundation",
    location: "London, UK",
    highlights: [
      "Michelin-starred dining",
      "Celestial-themed production",
      "Exclusive live auction",
      "Rooftop London skyline venue",
    ],
  },
  "solstice-music-fest": {
    title: "Solstice Music Fest",
    category: "Experiential Activation",
    gradient: "from-rose-600 to-pink-600",
    desc: "A sunset-to-sunrise music festival in Ibiza.",
    longDesc: "Celebrating the summer solstice, this festival brought together 30+ international artists across four stages, interactive light installations, a wellness village with yoga and meditation, and a beachfront sunrise closing set that became a viral moment.",
    year: "2025",
    client: "Solstice Events Ltd",
    location: "Ibiza, Spain",
    highlights: [
      "30+ international artists",
      "Sunrise closing set",
      "Wellness village",
      "Interactive light art",
    ],
  },
};

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Project not found</h1>
          <Link href="/work" className="mt-4 inline-flex text-violet-400 hover:text-violet-300">
            &larr; Back to all work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950">
      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors mb-6"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to all work
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            {project.category}
          </span>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              {project.year}
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.client}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-stone-300 sm:text-xl">
              {project.longDesc}
            </p>

            <h2 className="mt-14 text-2xl font-bold text-white">Key Highlights</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 rounded-xl border border-stone-800 bg-stone-900/50 p-4 text-sm text-stone-300">
                  <svg className="h-5 w-5 shrink-0 text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-14 border-t border-stone-800 pt-10">
              <Link
                href="/inquire"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-600/30"
              >
                Let&apos;s Build Something Similar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}