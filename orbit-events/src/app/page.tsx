import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200/60 bg-[#fafaf9]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
              O
            </span>
            Orbit Events
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#work"
              className="text-sm font-medium uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900"
            >
              Work
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900"
            >
              About
            </Link>
            <Link
              href="#insights"
              className="text-sm font-medium uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900"
            >
              Insights
            </Link>
            <Link href="#inquire">
              <span className="inline-flex h-9 items-center justify-center rounded-full bg-violet-600 px-6 text-sm font-medium uppercase tracking-widest text-white transition-all hover:bg-violet-700">
                Inquire
              </span>
            </Link>
          </nav>
          <button className="md:hidden" aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-stone-900 to-violet-950">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQgMTBhNiA2IDAgMSAwIDAtMTIgNiA2IDAgMCAwIDAgMTJ6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-40" />
          <div className="mx-auto max-w-7xl px-4 pb-32 pt-20 sm:px-6 lg:px-8 lg:pb-40 lg:pt-28">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-violet-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Award-Winning Event Agency
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Experiences That
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-amber-300 bg-clip-text text-transparent">
                  Redefine the Extraordinary
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300 sm:text-xl">
                Orbit Events is a premium event planning and experiential
                marketing agency. We craft unforgettable moments for brands that
                refuse to settle for ordinary.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#inquire"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-violet-600 px-8 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-violet-700"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="#work"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-stone-600 px-8 text-sm font-semibold uppercase tracking-widest text-stone-200 transition-all hover:border-stone-400 hover:text-white"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute -left-10 top-1/3 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />
        </section>

        {/* Stats / Social Proof */}
        <section className="border-b border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { number: "250+", label: "Events Produced" },
                { number: "40+", label: "Global Brands" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "15+", label: "Industry Awards" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-violet-600 sm:text-4xl">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-widest text-stone-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work / Portfolio Section */}
        <section
          id="work"
          className="bg-stone-50 py-20 dark:bg-stone-900 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
                Portfolio
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                Featured Experiences
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-stone-500 dark:text-stone-400">
                From intimate brand launches to global-scale productions — every
                event tells a story.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Aether Summit",
                  category: "Product Launch",
                  image: "/work-1.svg",
                  gradient: "from-violet-600 to-blue-600",
                },
                {
                  title: "Noir Gala",
                  category: "Annual Gala",
                  image: "/work-2.svg",
                  gradient: "from-stone-800 to-stone-600",
                },
                {
                  title: "Verdant Festival",
                  category: "Experiential Activation",
                  image: "/work-3.svg",
                  gradient: "from-emerald-600 to-teal-600",
                },
              ].map((project) => (
                <Link
                  key={project.title}
                  href="#inquire"
                  className="group relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-stone-200/60 transition-all hover:shadow-lg dark:bg-stone-800 dark:ring-stone-700"
                >
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  >
                    <span className="text-5xl font-bold tracking-tight text-white/30">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-stone-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="bg-white py-20 dark:bg-stone-950 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
                Services
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                Full-Spectrum Event Craft
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-stone-500 dark:text-stone-400">
                Every detail considered. Every moment orchestrated.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Event Strategy & Design",
                  desc: "Concept development, creative direction, and end-to-end event architecture tailored to your brand identity.",
                  icon: (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Experiential Marketing",
                  desc: "Immersive brand activations, pop-ups, and sensory experiences that captivate audiences and drive engagement.",
                  icon: (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Production Management",
                  desc: "Flawless on-the-ground execution — logistics, vendor coordination, staging, and technical direction.",
                  icon: (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "VIP & Hospitality",
                  desc: "White-glove guest experiences, concierge logistics, and premium hospitality for high-stakes events.",
                  icon: (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Brand Partnerships",
                  desc: "Strategic sponsorship curation, influencer integration, and co-branded event programs.",
                  icon: (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Creative Production",
                  desc: "Set design, lighting, soundscapes, and multimedia storytelling that transform spaces into worlds.",
                  icon: (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                      />
                    </svg>
                  ),
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group rounded-xl border border-stone-200 bg-stone-50 p-6 transition-all hover:border-violet-200 hover:bg-violet-50/50 dark:border-stone-700 dark:bg-stone-800 dark:hover:border-violet-700 dark:hover:bg-violet-900/20"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-400">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-stone-50 py-20 dark:bg-stone-900 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
                  About
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                  Crafting Moments That
                  <br />
                  Orbit Around You
                </h2>
                <p className="mt-6 text-stone-600 leading-relaxed dark:text-stone-400">
                  Founded in 2015, Orbit Events has grown from a boutique studio
                  into a globally recognized experiential agency. We partner with
                  visionary brands — from fast-scaling startups to Fortune 500
                  icons — to design events that leave lasting impressions.
                </p>
                <p className="mt-4 text-stone-600 leading-relaxed dark:text-stone-400">
                  Our team of strategists, designers, producers, and
                  storytellers brings together decades of expertise across
                  luxury, technology, fashion, and entertainment. Every project
                  is built on precision, creativity, and an obsessive attention
                  to detail.
                </p>
                <Link href="#inquire">
                  <span className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-violet-600 px-7 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-violet-700">
                    Meet Our Team
                  </span>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600/20 to-amber-400/20 ring-1 ring-stone-200 dark:ring-stone-700">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl font-bold text-violet-600/10 dark:text-violet-400/10">
                        OE
                      </div>
                      <p className="mt-2 text-sm text-stone-400 dark:text-stone-500">
                        Since 2015
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section
          id="insights"
          className="bg-white py-20 dark:bg-stone-950 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
                Insights
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                Perspectives from Orbit
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  date: "Mar 12, 2025",
                  title: "The Future of Experiential Branding",
                  excerpt:
                    "How immersive technology is reshaping the way brands connect with audiences at live events.",
                  tag: "Trends",
                },
                {
                  date: "Feb 28, 2025",
                  title: "Sustainability in Event Production",
                  excerpt:
                    "A practical guide to reducing environmental impact without compromising on quality or scale.",
                  tag: "Production",
                },
                {
                  date: "Jan 15, 2025",
                  title: "Designing for Emotional Impact",
                  excerpt:
                    "The psychology behind memorable event design — and how we apply it to every project.",
                  tag: "Design",
                },
              ].map((post) => (
                <Link
                  key={post.title}
                  href="#inquire"
                  className="group rounded-xl border border-stone-200 bg-stone-50 p-6 transition-all hover:border-violet-200 hover:shadow-md dark:border-stone-700 dark:bg-stone-800 dark:hover:border-violet-700"
                >
                  <span className="text-xs font-medium uppercase tracking-widest text-violet-600 dark:text-violet-400">
                    {post.tag}
                  </span>
                  <time className="ml-3 text-xs text-stone-400 dark:text-stone-500">
                    {post.date}
                  </time>
                  <h3 className="mt-3 text-lg font-semibold text-stone-900 transition-colors group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Inquire Section */}
        <section
          id="inquire"
          className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-violet-600 to-amber-600 py-20 sm:py-28"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDYpIi8+PC9zdmc+')] opacity-30" />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Create Something
              <br />
              <span className="text-amber-200">Extraordinary?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-violet-100">
              Tell us about your vision. Our team will reach out within 24 hours
              to start crafting an experience that exceeds every expectation.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="mailto:hello@orbitevents.com"
                className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-widest text-violet-700 transition-all hover:bg-amber-50 sm:w-auto"
              >
                Start a Conversation
              </Link>
              <p className="text-xs text-violet-200/80">
                or call{" "}
                <span className="font-semibold text-white">
                  +1 (888) 550-ORBIT
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 bg-stone-950 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 text-lg font-semibold text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                  O
                </span>
                Orbit Events
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">
                Premium event planning and experiential agency for brands that
                demand extraordinary.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                Services
              </h4>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Event Strategy",
                  "Experiential Marketing",
                  "Production Management",
                  "VIP Hospitality",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#services"
                      className="text-sm text-stone-400 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                Company
              </h4>
              <ul className="mt-4 space-y-2.5">
                {["About", "Careers", "Press", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-stone-400 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                Connect
              </h4>
              <ul className="mt-4 space-y-2.5">
                {["Instagram", "LinkedIn", "YouTube", "Vimeo"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-stone-400 transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-stone-800 pt-8 text-center">
            <p className="text-xs text-stone-500">
              &copy; {new Date().getFullYear()} Orbit Events. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}