import { ArrowRight, Check, PhoneCall } from "lucide-react";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import LeadForm from "../_components/LeadForm";
import { CONTACT, LOCATION, PROVIDER, SITE_URL, breadcrumbs } from "../_components/site";

const path = "/pricing";
const description =
  "Simple month-to-month pricing for AI receptionists, local visibility and sales dashboards for South Florida small businesses. AI receptionists from $199 a month.";

export const metadata = {
  title: "Pricing: AI Receptionists, Local Visibility and Dashboards",
  description,
  alternates: { canonical: path },
  openGraph: { title: "Pricing | DAS Digital", description, url: path, type: "website" },
};

// Limited-time sale on Local SEO Setup. The sale prices show (with the regular price crossed out)
// until SALE.ends, then the page falls back to regular prices on its own. `revalidate` below
// re-renders the page hourly so the switch happens without a deploy.
const SALE = {
  label: "Save 20% through December 31, 2026",
  ends: new Date("2027-01-01T05:00:00Z"), // midnight Eastern, Dec 31 → Jan 1
  validUntil: "2026-12-31",
};
export const revalidate = 3600;

// Every price on the site lives here. Keep it in sync with /ai-receptionist's FAQ, public/llms.txt
// and the ticker bar when a price changes.
const PLANS = [
  {
    id: "ai-receptionist",
    name: "AI Receptionist",
    href: "/ai-receptionist",
    blurb: "Answers every call you can't get to, day or night, and texts you the details.",
    setup: "$499",
    tiers: [
      {
        name: "Starter",
        price: "$199",
        unit: "/month",
        features: [
          "Answers every call 24/7 in your business's name",
          "English or Spanish",
          "Answers hours, service area and common questions",
          "Takes the caller's details and texts you a summary",
          "Flags urgent calls so you see them first",
          "Up to 300 call minutes a month",
        ],
      },
      {
        name: "Pro",
        price: "$349",
        unit: "/month",
        highlight: true,
        features: [
          "Everything in Starter",
          "Books appointments and reservations on your calendar",
          "Takes orders and texts them to you or your kitchen",
          "AI email responder: answers website and email inquiries in minutes, in your voice",
          "Monthly report: calls answered and what they were worth",
          "Up to 800 call minutes a month",
        ],
      },
    ],
    note: "Extra minutes are $0.35 each. You keep your phone number: calls you don't answer forward to the AI.",
  },
  {
    id: "local-visibility",
    name: "Local Visibility",
    blurb: "Show up on Google, Maps and in AI answers like ChatGPT and Gemini, with every review answered.",
    setup: "$299",
    tiers: [
      {
        name: "Essentials",
        price: "$349",
        unit: "/month",
        features: [
          "Google Business Profile set up and kept current",
          "A reply to every Google and Yelp review, in your voice; you approve each one",
          "Review-request texts after each job or visit",
          "Monthly reputation report",
        ],
      },
      {
        name: "Growth",
        price: "$749",
        unit: "/month",
        highlight: true,
        features: [
          "Everything in Essentials",
          "12 social media posts a month, designed and scheduled",
          "AI search check: how ChatGPT, Gemini and Google's AI answers describe you",
          "2 new pages a month on your website, written to be found",
        ],
      },
    ],
  },
  {
    id: "local-seo-setup",
    name: "Local SEO Setup",
    onSale: true,
    blurb: "A one-time tune-up so Google and Maps show the right business to people searching nearby.",
    tiers: [
      {
        name: "Basic",
        price: "$299",
        sale: "$239",
        unit: "one-time",
        features: [
          "1 location",
          "Google Business Profile optimized, with help getting verified",
          "Website SEO audit with a list of fixes",
          "10 local and \u201cnear me\u201d keywords researched",
          "Page titles and descriptions on up to 5 pages",
          "Name, address and phone checked across major directories",
        ],
      },
      {
        name: "Standard",
        price: "$499",
        sale: "$399",
        unit: "one-time",
        highlight: true,
        features: [
          "Everything in Basic, for up to 2 locations",
          "25 keywords and up to 10 pages optimized",
          "25 directory listings created or corrected",
          "Google Maps optimization",
          "Top 3 local competitors analyzed",
        ],
      },
      {
        name: "Premium",
        price: "$799",
        sale: "$639",
        unit: "one-time",
        features: [
          "Everything in Standard, for up to 3 locations",
          "50+ keywords and up to 20 pages optimized",
          "30 directory listings",
          "Technical SEO fixes: speed, mobile, broken links",
          "30-day ranking report",
        ],
      },
    ],
    note: "Delivered in about 7 business days. Start Local Visibility within 30 days and there's no Local Visibility setup fee. We never guarantee rankings; we guarantee the work.",
  },
  {
    id: "owner-insights",
    name: "Owner Insights",
    blurb: "See what's selling and when, and stop retyping paperwork.",
    tiers: [
      {
        name: "Sales Dashboard",
        price: "$149",
        unit: "/month",
        extra: "+ $750 one-time build",
        features: [
          "A dashboard built from your point-of-sale data",
          "Sales by day, hour, item and staff member",
          "A weekly email that says what changed, in plain English",
        ],
      },
      {
        name: "Paperwork Automation",
        price: "From $1,500",
        unit: "",
        extra: "One-time, quoted after a free review",
        features: [
          "AI reads invoices, applications and forms for you",
          "The details go straight into your spreadsheet or CRM",
          "Built around the forms you already use",
        ],
      },
    ],
  },
];

const BUNDLE = {
  name: "Main Street Bundle",
  price: "$499",
  includes: "AI Receptionist Starter + Local Visibility Essentials",
  offer: "Founding-client offer: setup fees waived for our first 10 businesses.",
};

const FAQS = [
  { q: "Is there a contract?", a: "No. Every monthly plan is month-to-month. Cancel with 30 days' notice." },
  { q: "What does the setup fee cover?", a: "We build and test everything for you: your greeting, your answers, your calendar and your forwarding. You approve it before it goes live, usually within a week." },
  { q: "Do I need a new phone number?", a: "No. Your phone rings as usual, and calls you don't pick up forward to your AI receptionist." },
  { q: "What if I go over my call minutes?", a: "Nothing stops working. Extra minutes are $0.35 each, and we'll tell you if a bigger plan would cost less." },
  { q: "Will review replies go out without me seeing them?", a: "Only if you want them to. By default you approve every reply. Many owners let 4- and 5-star replies go out on their own." },
  { q: "Which point-of-sale systems work with the Sales Dashboard?", a: "Most point-of-sale systems can export a daily sales report, and we build from that. Tell us which one you use and we'll confirm before you pay anything." },
  { q: "Do you guarantee a spot on Google?", a: "No one honestly can. Google decides rankings. We guarantee the work: a complete, accurate profile, consistent listings and pages written for the searches your customers make, with a report showing everything we did." },
  { q: "What about websites and online stores?", a: "Online stores are a one-time $995 with our Online Store Starter Package. Websites and automation projects get a clear price after a short conversation, before any work starts." },
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600";
const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600";

// "$1,500" → "1500"; prices like "From $1,500" are given as a minimum.
const amount = (price) => price.replace(/[^0-9.]/g, "");

export default function Page() {
  const url = `${SITE_URL}${path}`;
  const saleActive = Date.now() < SALE.ends.getTime();
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: "DAS Digital pricing",
      url,
      itemListElement: PLANS.flatMap((plan) =>
        plan.tiers.map((t) => ({
          "@type": "Offer",
          name: `${plan.name} ${t.name}`,
          description: t.features.join("; "),
          seller: PROVIDER,
          priceSpecification: {
            "@type": t.unit === "/month" ? "UnitPriceSpecification" : "PriceSpecification",
            ...(t.price.startsWith("From") ? { minPrice: amount(t.price) } : { price: amount(saleActive && t.sale ? t.sale : t.price) }),
            ...(saleActive && t.sale ? { validThrough: SALE.validUntil } : {}),
            priceCurrency: "USD",
            ...(t.unit === "/month" ? { unitCode: "MON" } : {}),
          },
        }))
      ),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    breadcrumbs([{ name: "Pricing", href: path }]),
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />

      <main id="main">
        {/* Hero */}
        <section className="border-b border-slate-100 bg-gradient-to-b from-purple-50/70 to-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="text-sm font-semibold text-purple-700">Pricing</p>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Simple monthly pricing. No long contracts.</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              We set everything up, run it for you and send you a plain-English report every month. There's no software to learn, and you can cancel with 30 days' notice.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#lead" className={btnPrimary}>
                Let's Talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={`tel:${CONTACT.phone}`} className={btnSecondary}>
                <PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {CONTACT.phoneDisplay}
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">{LOCATION.summary}</p>
            <p className="mt-6 text-sm">
              <a href="/ai-statistics#roi" className="font-semibold text-purple-700 hover:text-purple-800">
                Not sure it pays for itself? Run your numbers in our ROI calculator <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
              </a>
            </p>
          </div>
        </section>

        {/* Plans */}
        {PLANS.map((plan, i) => (
          <section key={plan.id} id={plan.id} className={`scroll-mt-20 py-20 ${i % 2 ? "bg-slate-50" : ""}`}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{plan.name}</h2>
                  {plan.onSale && saleActive ? (
                    <p className="mt-3 inline-flex rounded-full bg-fuchsia-100 px-3 py-1 text-sm font-semibold text-fuchsia-800">{SALE.label}</p>
                  ) : null}
                  <p className="mt-3 text-lg text-slate-600">{plan.blurb}</p>
                </div>
                {plan.setup ? (
                  <p className="shrink-0 text-sm font-medium text-slate-600">
                    One-time setup: <span className="font-semibold text-slate-900">{plan.setup}</span>
                  </p>
                ) : null}
              </div>

              <div className={`mt-10 grid gap-6 md:grid-cols-2 ${plan.tiers.length === 3 ? "lg:grid-cols-3" : ""}`}>
                {plan.tiers.map((t) => (
                  <div
                    key={t.name}
                    className={`flex flex-col rounded-2xl bg-white p-8 shadow-sm ${t.highlight ? "border-2 border-purple-700" : "border border-slate-200"}`}
                  >
                    <h3 className="text-xl font-semibold">{t.name}</h3>
                    <p className="mt-4">
                      {saleActive && t.sale ? (
                        <>
                          <span className="mr-2 text-2xl font-semibold text-slate-400 line-through decoration-2">
                            <span className="sr-only">Regular price </span>{t.price}
                          </span>
                          <span className="text-4xl font-bold tracking-tight text-purple-700">
                            <span className="sr-only">Sale price </span>{t.sale}
                          </span>
                        </>
                      ) : (
                        <span className="text-4xl font-bold tracking-tight">{t.price}</span>
                      )}
                      {t.unit ? <span className="text-slate-600">{t.unit.startsWith("/") ? t.unit : ` ${t.unit}`}</span> : null}
                    </p>
                    {t.extra ? <p className="mt-1 text-sm text-slate-600">{t.extra}</p> : null}
                    <ul className="mt-6 space-y-3">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-slate-700">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-purple-700" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {plan.note ? <p className="mt-6 text-sm text-slate-600">{plan.note}</p> : null}
              {plan.href ? (
                <p className="mt-3 text-sm">
                  <a href={plan.href} className="font-semibold text-purple-700 hover:text-purple-800">
                    How the AI receptionist works, and talk to our demo, Riley <ArrowRight className="inline h-4 w-4" aria-hidden="true" />
                  </a>
                </p>
              ) : null}
            </div>
          </section>
        ))}

        {/* Bundle */}
        <section className="pb-20 pt-4">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-6 rounded-2xl bg-purple-700 p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-purple-100">{BUNDLE.name}</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  {BUNDLE.includes} for {BUNDLE.price}/month
                </h2>
                <p className="mt-3 text-purple-100">{BUNDLE.offer}</p>
              </div>
              <a
                href="#lead"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-purple-800 hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Claim a founding spot <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-100 py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Common questions</h2>
            <dl className="mt-10 divide-y divide-slate-200">
              {FAQS.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="flex gap-2 text-lg font-semibold">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-purple-700" aria-hidden="true" /> {f.q}
                  </dt>
                  <dd className="mt-2 pl-7 leading-relaxed text-slate-600">{f.a}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 pl-7 text-sm">
              <a href="/online-store" className="font-semibold text-purple-700 hover:text-purple-800">Online Store Starter Package</a>
              <span className="text-slate-400"> · </span>
              <a href="/website-design" className="font-semibold text-purple-700 hover:text-purple-800">Website design</a>
              <span className="text-slate-400"> · </span>
              <a href="/ai-automation-small-business" className="font-semibold text-purple-700 hover:text-purple-800">Business automation</a>
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="lead" className="scroll-mt-20 bg-purple-50/60 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold text-purple-700">Let's talk</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Not sure which plan fits?</h2>
              <p className="mt-4 text-slate-600">
                Tell us a little about your business. In a short call we'll show you how many calls you're missing and how Google and AI search describe you today. No obligation.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <p className="text-slate-600">Prefer to talk now?</p>
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 text-lg font-semibold text-slate-900 hover:text-purple-700">
                  <PhoneCall className="h-5 w-5 text-purple-700" aria-hidden="true" /> {CONTACT.phoneDisplay}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="block font-medium text-slate-700 hover:text-purple-700">{CONTACT.email}</a>
              </div>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
