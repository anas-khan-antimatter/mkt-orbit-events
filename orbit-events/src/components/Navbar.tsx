"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services/experiential", label: "Experiential" },
  { href: "/services/corporate", label: "Corporate" },
  { href: "/services/festivals", label: "Festivals" },
  { href: "/budget-planner", label: "Budget" },
  { href: "/vendor-checklist", label: "Checklist" },
  { href: "/run-of-show", label: "Run of Show" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-800/60 bg-[#0c0a09]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white sm:text-2xl"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-bold text-white shadow-lg shadow-violet-500/25">
            O
          </span>
          Orbit Events
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-widest text-stone-400 transition-colors hover:text-violet-300"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/inquire">
            <span className="inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 text-sm font-medium uppercase tracking-widest text-white transition-all hover:from-violet-500 hover:to-fuchsia-500 shadow-lg shadow-violet-600/20">
              Inquire
            </span>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
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
            className="text-stone-300"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-stone-800 bg-[#0c0a09] px-4 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-widest text-stone-400 transition-colors hover:text-violet-300"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/inquire"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 text-sm font-medium uppercase tracking-widest text-white"
            >
              Inquire
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}