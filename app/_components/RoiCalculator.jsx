"use client";

import { useState } from "react";

// ROI scenarios for the AI receptionist and Local Visibility plans.
// Every input is an assumption the visitor can change; nothing here is a promise.
// Plan prices must match app/pricing/page.jsx.
const PLANS = {
  receptionist: [
    { key: "starter", label: "Starter, $199/mo", cost: 199 },
    { key: "pro", label: "Pro, $349/mo", cost: 349 },
  ],
  visibility: [
    { key: "essentials", label: "Essentials, $349/mo", cost: 349 },
    { key: "growth", label: "Growth, $749/mo", cost: 749 },
  ],
};

const usd = (n) => (n < 0 ? "−" : "") + "$" + Math.round(Math.abs(n)).toLocaleString("en-US");
const num = (n, d = 1) => (Math.round(n * 10 ** d) / 10 ** d).toLocaleString("en-US");

const field =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600/30";

function Input({ id, label, hint, value, onChange, prefix, suffix, min = 0, max, step = 1 }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-800">{label}</label>
      <div className="mt-1 flex items-center gap-2">
        {prefix ? <span className="text-slate-500">{prefix}</span> : null}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value === "" ? "" : Number(e.target.value))}
          className={field}
        />
        {suffix ? <span className="text-slate-500">{suffix}</span> : null}
      </div>
      {hint ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}

function PlanPicker({ name, plans, value, onChange }) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-slate-800">Plan</legend>
      <div className="mt-1 flex flex-wrap gap-2">
        {plans.map((p) => (
          <label
            key={p.key}
            className={`cursor-pointer rounded-lg border px-3 py-2 text-sm font-medium ${value === p.key ? "border-purple-700 bg-purple-50 text-purple-800" : "border-slate-300 bg-white text-slate-700"}`}
          >
            <input type="radio" name={name} value={p.key} checked={value === p.key} onChange={() => onChange(p.key)} className="sr-only" />
            {p.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Results({ rows, net, breakEven, cost }) {
  const positive = net >= 0;
  return (
    <div className="rounded-2xl bg-slate-900 p-6 text-white" aria-live="polite">
      <dl className="space-y-3 text-sm">
        {rows.map((r) => (
          <div key={r.label} className="flex justify-between gap-4">
            <dt className="text-slate-300">{r.label}</dt>
            <dd className="font-semibold tabular-nums">{r.value}</dd>
          </div>
        ))}
        <div className="flex justify-between gap-4 border-t border-slate-700 pt-3">
          <dt className="text-slate-300">Plan cost</dt>
          <dd className="font-semibold tabular-nums">−{usd(cost)}</dd>
        </div>
      </dl>
      <p className="mt-5 text-sm text-slate-300">Added to your bottom line each month</p>
      <p className={`text-4xl font-bold tracking-tight tabular-nums ${positive ? "text-emerald-300" : "text-rose-300"}`}>{usd(net)}</p>
      <p className="mt-1 text-sm text-slate-300">{usd(net * 12)} a year</p>
      <p className="mt-4 border-t border-slate-700 pt-4 text-sm text-slate-300">
        Break-even: <span className="font-semibold text-white">{breakEven}</span>
      </p>
    </div>
  );
}

function ReceptionistScenario() {
  const [calls, setCalls] = useState(200);
  const [missed, setMissed] = useState(35);
  const [newShare, setNewShare] = useState(25);
  const [win, setWin] = useState(30);
  const [value, setValue] = useState(500);
  const [margin, setMargin] = useState(50);
  const [plan, setPlan] = useState("starter");

  const cost = PLANS.receptionist.find((p) => p.key === plan).cost;
  const n = (x) => Number(x) || 0;
  const missedCalls = n(calls) * (n(missed) / 100);
  const newCallers = missedCalls * (n(newShare) / 100);
  const customers = newCallers * (n(win) / 100);
  const revenue = customers * n(value);
  const profit = revenue * (n(margin) / 100);
  const net = profit - cost;
  const perCustomerProfit = n(value) * (n(margin) / 100);
  const breakEven = perCustomerProfit > 0 ? `${num(cost / perCustomerProfit)} new customers a month` : "—";

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input id="r-calls" label="Calls you get per month" value={calls} onChange={setCalls} />
        <Input id="r-missed" label="Calls that don't reach a person" suffix="%" max={100} value={missed} onChange={setMissed} hint="Invoca's 2026 data suggests about 35% for real calls (see above)." />
        <Input id="r-new" label="Missed callers who are new customers" suffix="%" max={100} value={newShare} onChange={setNewShare} hint="Your estimate. The rest are existing customers, vendors and spam." />
        <Input id="r-win" label="Of those, how many you'd win if answered" suffix="%" max={100} value={win} onChange={setWin} hint="Your usual close rate on new calls." />
        <Input id="r-value" label="Average value of a new customer" prefix="$" value={value} onChange={setValue} hint="First-year revenue from one new customer." />
        <Input id="r-margin" label="Your profit margin" suffix="%" max={100} value={margin} onChange={setMargin} hint="What's left after materials and labor." />
        <div className="sm:col-span-2">
          <PlanPicker name="r-plan" plans={PLANS.receptionist} value={plan} onChange={setPlan} />
        </div>
      </div>
      <Results
        cost={cost}
        net={net}
        breakEven={breakEven}
        rows={[
          { label: "Calls that don't reach you", value: num(missedCalls, 0) },
          { label: "New customers recovered", value: num(customers) },
          { label: "Added revenue", value: usd(revenue) },
          { label: "Added profit", value: usd(profit) },
        ]}
      />
    </div>
  );
}

function VisibilityScenario() {
  const [base, setBase] = useState(20);
  const [lift, setLift] = useState(15);
  const [value, setValue] = useState(500);
  const [margin, setMargin] = useState(50);
  const [plan, setPlan] = useState("essentials");

  const cost = PLANS.visibility.find((p) => p.key === plan).cost;
  const n = (x) => Number(x) || 0;
  const extra = n(base) * (n(lift) / 100);
  const revenue = extra * n(value);
  const profit = revenue * (n(margin) / 100);
  const net = profit - cost;
  const perCustomerProfit = n(value) * (n(margin) / 100);
  const breakEven = perCustomerProfit > 0 ? `${num(cost / perCustomerProfit)} new customers a month` : "—";

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input id="v-base" label="New customers a month who find you online" value={base} onChange={setBase} hint="From Google, Maps, reviews and AI search." />
        <Input id="v-lift" label="Increase from better visibility and reviews" suffix="%" max={200} value={lift} onChange={setLift} hint="Your assumption. Start low; results depend on your market." />
        <Input id="v-value" label="Average value of a new customer" prefix="$" value={value} onChange={setValue} hint="First-year revenue from one new customer." />
        <Input id="v-margin" label="Your profit margin" suffix="%" max={100} value={margin} onChange={setMargin} />
        <div className="sm:col-span-2">
          <PlanPicker name="v-plan" plans={PLANS.visibility} value={plan} onChange={setPlan} />
        </div>
      </div>
      <Results
        cost={cost}
        net={net}
        breakEven={breakEven}
        rows={[
          { label: "Extra new customers", value: num(extra) },
          { label: "Added revenue", value: usd(revenue) },
          { label: "Added profit", value: usd(profit) },
        ]}
      />
    </div>
  );
}

const TABS = [
  { key: "receptionist", label: "AI Receptionist", Panel: ReceptionistScenario },
  { key: "visibility", label: "Search & reviews", Panel: VisibilityScenario },
];

export default function RoiCalculator() {
  const [tab, setTab] = useState("receptionist");
  const Active = TABS.find((t) => t.key === tab).Panel;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div role="tablist" aria-label="ROI scenario" className="flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            id={`tab-${t.key}`}
            aria-selected={tab === t.key}
            aria-controls={`panel-${t.key}`}
            onClick={() => setTab(t.key)}
            className={`rounded-lg px-4 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 ${tab === t.key ? "bg-purple-700 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="mt-8">
        <Active />
      </div>
      <p className="mt-6 text-xs leading-relaxed text-slate-500">
        This is an estimate built from the numbers you enter, not a guarantee. Results depend on your market, your prices and how you follow up. Monthly plan cost only; the one-time setup fee isn't included.
      </p>
    </div>
  );
}
