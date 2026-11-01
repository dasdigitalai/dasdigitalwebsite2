import { ArrowRight, PhoneCall } from "lucide-react";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import RoiCalculator from "../_components/RoiCalculator";
import { CONTACT, LOCATION, PROVIDER, SITE_URL, breadcrumbs } from "../_components/site";

const path = "/ai-statistics";
const UPDATED = "November 1, 2026";
const description =
  "Real numbers on how small businesses benefit from AI: adoption, time saved, missed calls, lead response and reviews, each with its source. Plus an ROI calculator.";

export const metadata = {
  title: "AI for Small Business: Statistics and ROI Calculator",
  description,
  alternates: { canonical: path },
  openGraph: { title: "AI for Small Business: Statistics and ROI Calculator | DAS Digital", description, url: path, type: "article" },
};

// Every number links to the report it came from. Before adding or changing a stat,
// open the original source and copy the figure and its date exactly.
const SOURCES = {
  chamber: {
    short: "U.S. Chamber of Commerce, 2025",
    name: "U.S. Chamber of Commerce, Empowering Small Business: The Impact of Technology on U.S. Small Business (August 2025; survey by Teneo Research)",
    href: "https://www.uschamber.com/technology/empowering-small-business-the-impact-of-technology-on-u-s-small-business",
  },
  goldman: {
    short: "Goldman Sachs, 2026",
    name: "Goldman Sachs 10,000 Small Businesses Voices survey of 1,256 small business owners, conducted by Babson College and David Binder Research, Jan. 27 – Feb. 4, 2026",
    href: "https://www.goldmansachs.com/community-impact/10000-small-businesses-voices/insights/ai-presents-a-major-opportunity-for-small-businesses",
  },
  goldmanOct: {
    short: "Goldman Sachs via Fortune, 2026",
    name: "Goldman Sachs survey of 2,473 10,000 Small Businesses alumni, August 2026, as reported by Fortune (October 23, 2026)",
    href: "https://fortune.com/2026/10/23/david-solomon-frontier-models-not-needed-small-business/",
  },
  census: {
    short: "U.S. Census Bureau, 2026",
    name: "U.S. Census Bureau, Business Trends and Outlook Survey (May 2026)",
    href: "https://census.gov/library/stories/2026/05/ai-use-businesses.html",
  },
  thryv: {
    short: "Thryv, 2025",
    name: "Thryv, AI and Small Business Adoption survey of 540 small business decision-makers, May 2025 (Thryv sells small business software)",
    href: "https://investor.thryv.com/news/news-details/2025/AI-Adoption-Among-Small-Businesses-Surges-41-in-2025-According-to-New-Survey-from-Thryv/",
  },
  invoca: {
    short: "Invoca, 2026",
    name: "Invoca, Lead Conversion Benchmarks Report 2026 (more than 70 million calls across 10 industries)",
    href: "https://www.invoca.com/reports/the-invoca-lead-conversion-benchmarks-report-2026",
  },
  hbr: {
    short: "Harvard Business Review, 2011",
    name: "Oldroyd, McElheran and Elkington, “The Short Life of Online Sales Leads,” Harvard Business Review (March 2011)",
    href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
  },
  brightlocal: {
    short: "BrightLocal, 2026",
    name: "BrightLocal, Local Consumer Review Survey 2026 (1,002 U.S. consumers, February 2026)",
    href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
  },
};

const SECTIONS = [
  {
    id: "adoption",
    kicker: "Adoption",
    title: "Most small businesses have started using AI",
    lead: "Use has more than doubled in two years, and owners who use it say it's working. But very few have built it into how the business actually runs.",
    stats: [
      { value: "58%", text: "of small businesses use generative AI, up from 40% in 2024 and 23% in 2023.", source: "chamber" },
      { value: "93%", text: "of small business owners who use AI say it has had a positive impact on their business. 84% name efficiency and productivity as the main benefit.", source: "goldman" },
      { value: "14%", text: "of small businesses have fully integrated AI into their core operations, even though 76% say they use it.", source: "goldman" },
      { value: "19.8%", text: "of all U.S. employer businesses reported using AI in their operations as of May 2026. The Census Bureau found use grew among firms with 20+ employees but did not change significantly among smaller firms.", source: "census" },
    ],
  },
  {
    id: "time",
    kicker: "Time and money",
    title: "Owners get hours back every month",
    lead: "The biggest reported win is time: hours that go back into customers, planning and marketing.",
    stats: [
      { value: "58%", text: "of small businesses using AI report saving more than 20 hours a month.", source: "thryv" },
      { value: "66%", text: "of small businesses using AI say it saves them $500 to $2,000 a month.", source: "thryv" },
      { value: "56%", text: "of owners using AI put the time it saves into strategic planning; 44% put it into expanded marketing.", source: "goldmanOct" },
    ],
  },
  {
    id: "calls",
    kicker: "Calls and leads",
    title: "Speed wins the customer",
    lead: "A call that isn't answered, or a lead that waits until tomorrow, usually goes to the next business on the list.",
    stats: [
      { value: "56%", text: "of inbound callers spoke with a person. Even after removing calls under 15 seconds (misdials and quick hang-ups), about 1 in 3 real calls didn't reach anyone.", source: "invoca" },
      { value: "7×", text: "Firms that tried to contact a lead within an hour were nearly 7 times as likely to qualify it as firms that waited even one hour longer, and more than 60 times as likely as firms that waited a day or more.", source: "hbr" },
      { value: "42 hrs", text: "was the average time companies took to respond to a web lead. Only 37% responded within an hour, and 23% never responded at all.", source: "hbr" },
    ],
  },
  {
    id: "reviews",
    kicker: "Reviews and search",
    title: "Customers check you out before they call",
    lead: "Reviews are often the first thing a customer sees, and more people now ask AI tools which local business to use.",
    stats: [
      { value: "97%", text: "of consumers read reviews for local businesses.", source: "brightlocal" },
      { value: "80%", text: "of consumers are more likely to use a business that responds to all of its reviews. 89% expect business owners to respond.", source: "brightlocal" },
      { value: "45%", text: "of consumers used AI tools to get local business recommendations in 2026, up from 6% the year before.", source: "brightlocal" },
    ],
  },
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600";
const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600";

// Footnote numbers, in the order sources first appear on the page.
const ORDER = [...new Set(SECTIONS.flatMap((s) => s.stats.map((x) => x.source)))];
const footnote = (key) => ORDER.indexOf(key) + 1;

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "AI for Small Business: Statistics and ROI Calculator",
      description,
      url: `${SITE_URL}${path}`,
      dateModified: "2026-11-01",
      author: PROVIDER,
      publisher: PROVIDER,
      citation: ORDER.map((k) => ({ "@type": "CreativeWork", name: SOURCES[k].name, url: SOURCES[k].href })),
    },
    breadcrumbs([{ name: "AI statistics", href: path }]),
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />

      <main id="main">
        {/* Hero */}
        <section className="border-b border-slate-100 bg-gradient-to-b from-purple-50/70 to-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="text-sm font-semibold text-purple-700">AI for small business, by the numbers</p>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">What AI is actually doing for small businesses</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Real numbers from government data, national surveys and published research, with the source for every figure. Then run your own numbers to see what an AI receptionist or better search visibility could add to your bottom line.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#roi" className={btnPrimary}>
                Calculate your ROI <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="/pricing" className={btnSecondary}>See pricing</a>
            </div>
            <p className="mt-4 text-sm text-slate-500">Last updated {UPDATED}.</p>
          </div>
        </section>

        {/* Stats */}
        {SECTIONS.map((s, i) => (
          <section key={s.id} id={s.id} className={`scroll-mt-20 py-20 ${i % 2 ? "bg-slate-50" : ""}`}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-purple-700">{s.kicker}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{s.title}</h2>
                <p className="mt-4 text-lg text-slate-600">{s.lead}</p>
              </div>
              <div className={`mt-10 grid gap-6 md:grid-cols-2 ${s.stats.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
                {s.stats.map((x) => (
                  <figure key={x.text} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                    <p className="text-5xl font-bold tracking-tight text-purple-700">{x.value}</p>
                    <blockquote className="mt-3 flex-1 leading-relaxed text-slate-700">{x.text}</blockquote>
                    <figcaption className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-500">
                      Source:{" "}
                      <a href={SOURCES[x.source].href} target="_blank" rel="noopener noreferrer" className="font-medium text-purple-700 hover:text-purple-800 hover:underline">
                        {SOURCES[x.source].short}
                      </a>{" "}
                      <a href={`#source-${footnote(x.source)}`} className="text-slate-400 hover:text-purple-700" aria-label={`Full citation ${footnote(x.source)}`}>
                        [{footnote(x.source)}]
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ROI */}
        <section id="roi" className="scroll-mt-20 border-t border-slate-100 bg-purple-50/40 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-purple-700">Run your numbers</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">What could it add to your bottom line?</h2>
              <p className="mt-4 text-lg text-slate-600">
                Change any number to match your business. The calculator counts only new customers you'd win and the profit on them, then subtracts the monthly plan.
              </p>
            </div>
            <div className="mt-10">
              <RoiCalculator />
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight">Sources</h2>
            <ol className="mt-6 space-y-3 text-sm text-slate-600">
              {ORDER.map((k, i) => (
                <li key={k} id={`source-${i + 1}`} className="flex gap-3 scroll-mt-24">
                  <span className="shrink-0 font-semibold text-slate-400">[{i + 1}]</span>
                  <span>
                    {SOURCES[k].name}.{" "}
                    <a href={SOURCES[k].href} target="_blank" rel="noopener noreferrer" className="break-all font-medium text-purple-700 hover:underline">
                      {SOURCES[k].href.replace(/^https?:\/\//, "")}
                    </a>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-slate-500">
              Survey figures describe the people each survey asked; for example, the Goldman Sachs surveys cover owners in its 10,000 Small Businesses program. Figures were checked against their sources on {UPDATED}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-purple-700 py-16 text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Want help putting AI to work?</h2>
              <p className="mt-3 text-purple-100">
                We set it up for you and explain it in plain English. {LOCATION.summary}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="/pricing#lead" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-purple-800 hover:bg-purple-50">
                Let's Talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-300 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-600">
                <PhoneCall className="h-4 w-4" aria-hidden="true" /> {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
