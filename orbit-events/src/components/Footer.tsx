import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-bold text-white">
                O
              </span>
              Orbit Events
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-stone-400">
              Premium event planning and experiential marketing agency. We craft moments that matter.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500">Services</h4>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/services/experiential", label: "Experiential Marketing" },
                { href: "/services/corporate", label: "Corporate Events" },
                { href: "/services/festivals", label: "Festivals" },
                { href: "/budget-planner", label: "Budget Planner" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-stone-400 transition-colors hover:text-violet-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500">Resources</h4>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/work", label: "Our Work" },
                { href: "/vendor-checklist", label: "Vendor Checklist" },
                { href: "/run-of-show", label: "Run of Show Generator" },
                { href: "/inquire", label: "Inquire" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-stone-400 transition-colors hover:text-violet-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-500">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-stone-400">
              <li>hello@orbitevents.agency</li>
              <li>+1 (212) 555-0199</li>
              <li>New York / Los Angeles / London</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-800 pt-8 text-center text-xs text-stone-600">
          &copy; {new Date().getFullYear()} Orbit Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
}