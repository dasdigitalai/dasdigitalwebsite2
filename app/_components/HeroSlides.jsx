"use client";

import { useEffect, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

// Home page hero, built for a ~6-second attention span.
// Each message flies into the center from a different side (left, right, top, bottom), holds for
// a moment, then drops into a row of stat cards along the bottom. After the last one the hero
// settles: the closing line in the center and all four stats lined up underneath. It plays once
// (with a Replay button) and goes straight to the settled view for visitors who ask for reduced
// motion. Every number links to its source; keep them in sync with app/ai-statistics/page.jsx.
const STEPS = [
  {
    from: "left",
    line: ["Your phone rings.", "Nobody answers.", "Your competitor gets the job."],
    accent: 2,
    stat: "1 in 3",
    label: "real calls to businesses never reach a person",
    source: { label: "Invoca, 2026", href: "https://www.invoca.com/reports/the-invoca-lead-conversion-benchmarks-report-2026" },
  },
  {
    from: "right",
    line: ["Answer in minutes,", "not hours."],
    accent: 1,
    stat: "7×",
    label: "more likely to win a lead you answer within an hour",
    source: { label: "Harvard Business Review", href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads" },
  },
  {
    from: "top",
    line: ["Customers read your reviews", "before they call."],
    accent: 1,
    stat: "80%",
    label: "choose businesses that answer all their reviews",
    source: { label: "BrightLocal, 2026", href: "https://www.brightlocal.com/research/local-consumer-review-survey/" },
  },
  {
    from: "bottom",
    line: ["Get your evenings back."],
    accent: 0,
    stat: "20+ hrs",
    label: "saved a month by 58% of small businesses using AI",
    source: { label: "Thryv, 2025", href: "https://investor.thryv.com/news/news-details/2025/AI-Adoption-Among-Small-Businesses-Surges-41-in-2025-According-to-New-Survey-from-Thryv/" },
  },
];

const FINAL = { line: ["AI that answers every call.", "From $199 a month."], accent: 1 };

const STEP_MS = 2600;
const ENTER = { left: "hero-in-left", right: "hero-in-right", top: "hero-in-top", bottom: "hero-in-bottom" };

function Headline({ line, accent }) {
  return (
    <p className="text-balance text-center text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
      {line.map((part, j) => (
        <span key={j} className={`block ${j === accent ? "text-amber-300" : ""}`}>{part}</span>
      ))}
    </p>
  );
}

export default function HeroSlides({ children }) {
  // 0..3 = that message is in the center; 4 = settled.
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0); // bumps on Replay so the entrance animations restart

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setStep(STEPS.length);
  }, []);

  useEffect(() => {
    if (step >= STEPS.length) return undefined;
    const t = setTimeout(() => setStep((s) => s + 1), STEP_MS);
    return () => clearTimeout(t);
  }, [step, run]);

  const settled = step >= STEPS.length;
  const replay = () => {
    setStep(0);
    setRun((r) => r + 1);
  };

  return (
    <div>
      {/* Center stage: every message shares one grid cell, so the height never jumps. */}
      <div className="grid min-h-[11rem] place-items-center overflow-hidden sm:min-h-[13rem] lg:min-h-[16rem]" aria-live="off">
        {STEPS.map((s, i) => {
          const isActive = i === step;
          const done = i < step;
          return (
            <div
              key={`${run}-${i}`}
              aria-hidden={!isActive}
              className={`[grid-area:1/1] w-full transition-all duration-500 ease-in ${
                isActive ? `${ENTER[s.from]} opacity-100` : done ? "translate-y-24 scale-50 opacity-0" : "opacity-0"
              }`}
            >
              <Headline line={s.line} accent={s.accent} />
            </div>
          );
        })}
        <div key={`${run}-final`} aria-hidden={!settled} className={`[grid-area:1/1] w-full ${settled ? "hero-in-zoom opacity-100" : "opacity-0"}`}>
          <Headline line={FINAL.line} accent={FINAL.accent} />
        </div>
      </div>

      {children}

      {/* The row each message drops into. */}
      <ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {STEPS.map((s, i) => {
          const shown = i < step;
          return (
            <li
              key={i}
              className={`rounded-2xl border p-4 transition-colors duration-500 sm:p-5 ${shown ? "border-white/10 bg-white/5" : "border-dashed border-white/15 bg-transparent"}`}
            >
              <div className={`transition-all duration-500 ease-out ${shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-95 opacity-0"}`}>
              <p className="text-3xl font-extrabold tracking-tight text-amber-300 sm:text-4xl">{s.stat}</p>
              <p className="mt-1 text-sm leading-snug text-slate-200">{s.label}</p>
              <a
                href={s.source.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={shown ? 0 : -1}
                className="mt-1 inline-flex min-h-11 items-center text-xs text-slate-400 underline decoration-slate-600 underline-offset-2 hover:text-white"
              >
                {s.source.label}
              </a>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <a href="/ai-statistics" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-amber-300 hover:text-amber-200">
          See all the numbers and run your own <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <button
          type="button"
          onClick={replay}
          className={`inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-sm text-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300 ${settled ? "" : "invisible"}`}
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" /> Replay
        </button>
      </div>
    </div>
  );
}
