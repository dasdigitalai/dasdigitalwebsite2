"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

// Live "so far this year" clock of sales a typical small business loses to missed calls.
// The assumptions are the ROI calculator's defaults (app/_components/RoiCalculator.jsx);
// keep the two in sync. They're printed under the number so it's never mistaken for a statistic.
const ASSUME = { calls: 200, missed: 0.35, newShare: 0.25, win: 0.3, value: 500 };
const PER_MONTH = ASSUME.calls * ASSUME.missed * ASSUME.newShare * ASSUME.win * ASSUME.value; // $2,625
const PER_YEAR = PER_MONTH * 12; // $31,500

const money = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function lostSoFar(now) {
  const start = new Date(now.getFullYear(), 0, 1);
  const end = new Date(now.getFullYear() + 1, 0, 1);
  return PER_YEAR * ((now - start) / (end - start));
}


// Little looping scene: your phone rings with no answer while a customer runs to the competitor.
// Decoration only (aria-hidden); the CSS lives in app/globals.css under "Missed-call scene".
function Store({ label, open }) {
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 80 64" className="h-16 w-20 sm:h-20 sm:w-24" fill="none">
        <rect x="6" y="18" width="68" height="44" rx="2" className={open ? "fill-purple-600" : "fill-slate-700"} />
        <path d="M2 18 L10 4 H70 L78 18 Z" className={open ? "fill-amber-300" : "fill-slate-500"} />
        <path d="M18 4 L14 18 M34 4 L32 18 M46 4 L48 18 M62 4 L66 18" stroke="rgba(15,23,42,0.35)" strokeWidth="3" />
        <rect x="31" y="34" width="18" height="28" rx="1.5" className={open ? "fill-amber-200" : "fill-slate-900"} />
        <rect x="12" y="28" width="14" height="12" rx="1" className={open ? "fill-purple-300" : "fill-slate-800"} />
        <rect x="54" y="28" width="14" height="12" rx="1" className={open ? "fill-purple-300" : "fill-slate-800"} />
      </svg>
      <span className={`mt-1 text-xs font-semibold sm:text-sm ${open ? "text-amber-300" : "text-slate-400"}`}>{label}</span>
    </div>
  );
}

const PHONE_PATH = "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z";

// A standing customer, used in the "after" scene.
function Person({ className = "", stroke = "white" }) {
  return (
    <svg viewBox="0 0 24 40" className={`h-10 w-6 sm:h-12 sm:w-7 ${className}`} fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round">
      <circle cx="12" cy="5" r="4" fill={stroke} stroke="none" />
      <path d="M12 11 V25 M12 14 L6 21 M12 14 L18 21 M12 25 L8 38 M12 25 L16 38" />
    </svg>
  );
}

// Before: the phone rings with no answer and a customer runs to the competitor.
function BeforeScene() {
  return (
    <>
      <div className="absolute bottom-0 left-0">
        <div className="scene-ring absolute -top-8 left-0 origin-bottom-left whitespace-nowrap rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-200">
          <svg viewBox="0 0 24 24" className="mr-1 inline h-3.5 w-3.5 -translate-y-px" fill="none" stroke="currentColor" strokeWidth="2"><path d={PHONE_PATH} /></svg>
          Ring… no answer
        </div>
        <Store label="Your business" />
      </div>
      <div className="absolute bottom-0 right-0">
        <span className="scene-plus absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-amber-300">+1</span>
        <Store label="Competitor" open />
      </div>
      <div className="scene-runner absolute bottom-7">
        <svg viewBox="0 0 24 40" className="h-10 w-6 sm:h-12 sm:w-7" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
          <circle cx="13" cy="5" r="4" fill="white" stroke="none" />
          <path d="M12 11 L10 24" />
          <path className="scene-arm-a" d="M11 14 L4 20" />
          <path className="scene-arm-b" d="M11 14 L19 18" />
          <path className="scene-leg-a" d="M10 24 L4 38" />
          <path className="scene-leg-b" d="M10 24 L17 37" />
        </svg>
      </div>
    </>
  );
}

// After: every call answered, the customers are at your door, and the competitor is scratching his head.
function AfterScene() {
  return (
    <>
      <div className="absolute bottom-0 left-0">
        <div className="absolute -top-8 left-0 whitespace-nowrap rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
          <svg viewBox="0 0 24 24" className="mr-1 inline h-3.5 w-3.5 -translate-y-px" fill="none" stroke="currentColor" strokeWidth="2"><path d={PHONE_PATH} /></svg>
          Answered ✓ Booked
        </div>
        <Store label="Your business" open />
      </div>
      <div className="absolute bottom-7 left-[22%] flex items-end gap-1 sm:left-[24%]">
        <Person className="scene-bob" />
        <Person className="scene-bob [animation-delay:0.2s]" />
        <Person className="scene-bob [animation-delay:0.4s]" />
      </div>
      <div className="absolute bottom-0 right-0">
        <Store label="Competitor" />
      </div>
      <div className="absolute bottom-7 right-[20%] sm:right-[22%]">
        <span className="scene-huh absolute -top-6 left-1/2 -translate-x-1/2 text-xl font-extrabold text-slate-300">?</span>
        <svg viewBox="0 0 24 40" className="h-10 w-6 sm:h-12 sm:w-7" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round">
          <circle cx="12" cy="5" r="4" fill="#94a3b8" stroke="none" />
          <path d="M12 11 V25 M12 14 L6 21 M12 25 L8 38 M12 25 L16 38" />
          <path className="scene-scratch" d="M12 14 L19 9 L15 3" />
        </svg>
      </div>
    </>
  );
}

const BEFORE_MS = 6400; // two runs of the customer
const AFTER_MS = 5000;

function RunToCompetitor() {
  const [phase, setPhase] = useState("before");
  const [manual, setManual] = useState(false);

  useEffect(() => {
    if (manual || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const t = setTimeout(() => setPhase((p) => (p === "before" ? "after" : "before")), phase === "before" ? BEFORE_MS : AFTER_MS);
    return () => clearTimeout(t);
  }, [phase, manual]);

  const pick = (p) => {
    setManual(true);
    setPhase(p);
  };

  return (
    <div className="mx-auto mb-8 max-w-xl">
      <div className="mb-10 flex items-center justify-center gap-2" role="group" aria-label="Show the scene">
        {[
          ["before", "Before"],
          ["after", "After: AI receptionist"],
        ].map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => pick(key)}
            aria-pressed={phase === key}
            className={`min-h-11 rounded-full px-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300 ${phase === key ? (key === "after" ? "bg-emerald-400 text-slate-950" : "bg-white text-slate-950") : "bg-white/10 text-slate-300 hover:bg-white/20"}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div aria-hidden="true" className="relative h-32 sm:h-36">
        <div className="absolute inset-x-0 bottom-7 h-px bg-white/15" />
        <div className={`absolute inset-0 transition-opacity duration-500 ${phase === "before" ? "opacity-100" : "opacity-0"}`}>
          <BeforeScene />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-500 ${phase === "after" ? "opacity-100" : "opacity-0"}`}>
          <AfterScene />
        </div>
      </div>
    </div>
  );
}

export default function MissedCallClock() {
  // Rendered after mount so the server and browser never disagree about the time.
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    const tick = () => setAmount(lostSoFar(new Date()));
    tick();
    const t = setInterval(tick, 250);
    return () => clearInterval(t);
  }, []);

  return (
    <section aria-labelledby="clock-heading" className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-16">
        <RunToCompetitor />
        <h2 id="clock-heading" className="text-balance text-lg font-semibold text-slate-200 sm:text-xl">
          A small business that misses 1 in 3 calls has lost about
        </h2>
        <p className="mt-3 text-5xl font-extrabold tracking-tight text-amber-300 tabular-nums sm:text-7xl" aria-live="off">
          {amount === null ? <span className="text-amber-300/40">$——,———.——</span> : money(amount)}
        </p>
        <p className="mt-3 text-lg text-slate-200 sm:text-xl">
          in sales so far this year. That's <span className="font-semibold text-white">{money(PER_MONTH).replace(".00", "")}</span> a month walking to the competition.
        </p>
        <a
          href="/ai-statistics#roi"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-300 px-7 py-3.5 text-base font-bold text-slate-950 hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          What's it costing me? <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </a>
        <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-slate-400">
          Estimate, not a statistic: 200 calls a month, 1 in 3 not reaching a person (
          <a href="https://www.invoca.com/reports/the-invoca-lead-conversion-benchmarks-report-2026" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">Invoca, 2026</a>
          ), 25% of those from new customers, 30% of them won, $500 per new customer. Your numbers will differ.
        </p>
      </div>
    </section>
  );
}
