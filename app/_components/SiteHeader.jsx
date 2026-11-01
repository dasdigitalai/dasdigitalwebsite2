"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Wordmark from "./Wordmark";
import { SERVICES, serviceHref } from "./site";

// Site-wide header for the light design: wordmark, the four services, Pricing, ROI Calculator, About, and the contact button.
// Below the xl breakpoint (1280px) the links move into a menu opened by a button, so the full menu never wraps.
export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <div className="shrink-0">
          <Wordmark />
        </div>

        <nav aria-label="Main" className="hidden items-center gap-5 whitespace-nowrap text-sm font-medium text-slate-700 xl:flex">
          {SERVICES.map((s) => (
            <a key={s.key} href={serviceHref(s)} className="rounded hover:text-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600">
              {s.short ?? s.label}
            </a>
          ))}
          <a href="/pricing" className="rounded hover:text-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600">
            Pricing
          </a>
          <a href="/ai-statistics#roi" className="rounded hover:text-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600">
            ROI Calculator
          </a>
          <a href="/about" className="rounded hover:text-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600">
            About
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="/#lead" className="hidden whitespace-nowrap rounded-lg bg-purple-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 sm:inline-flex">
            Let's Talk
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-slate-200 bg-white px-4 pb-4 sm:px-6 xl:hidden">
          <ul className="mx-auto max-w-6xl divide-y divide-slate-100">
            {SERVICES.map((s) => (
              <li key={s.key}>
                <a href={serviceHref(s)} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-slate-800">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/pricing" onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-slate-800">
                Pricing
              </a>
            </li>
            <li>
              <a href="/ai-statistics#roi" onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-slate-800">
                ROI Calculator
              </a>
            </li>
            <li>
              <a href="/about" onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-slate-800">
                About
              </a>
            </li>
          </ul>
          <a href="/#lead" onClick={() => setOpen(false)} className="mt-3 flex justify-center rounded-lg bg-purple-700 px-4 py-3 text-sm font-semibold text-white">
            Let's Talk
          </a>
        </nav>
      ) : null}
    </header>
  );
}
