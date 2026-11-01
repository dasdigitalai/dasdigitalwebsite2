import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import { PROVIDER, SITE_URL, breadcrumbs } from "../_components/site";

// "See All Work": every product and tool DAS Digital has built, with links to the full case studies.

const path = "/work";
const description =
  "Software DAS Digital has built: FarriTech, a field service platform, lead intelligence, quoting, training and CRM automation tools for payments and sales teams.";

export const metadata = {
  title: "Our Work",
  description,
  alternates: { canonical: path },
  openGraph: { title: "Our Work | DAS Digital", description, url: path, siteName: "DAS Digital", type: "website" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DAS Digital work",
    url: `${SITE_URL}${path}`,
    description,
    publisher: PROVIDER,
  },
  breadcrumbs([{ name: "Our work", href: path }]),
];

const glowCard = "shadow-[0_0_0_1px_rgba(168,85,247,0.25),0_20px_40px_-25px_rgba(168,85,247,0.45)]";
const purpleBtn =
  "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30 hover:from-purple-500 hover:to-fuchsia-500";
const outlineBtn = "border border-white/20 bg-white/5 text-white hover:bg-white/10";

const STATS = [
  { value: "12", label: "products and tools built" },
  { value: "20+", label: "years in payments" },
  { value: "10K+", label: "merchants migrated" },
];

const CASE_STUDIES = [
  {
    kind: "Vertical SaaS · Flagship",
    title: "FarriTech",
    desc: "A mobile-first platform for independent farriers: scheduling, customer and horse records, invoicing, payments and a self-service customer portal.",
    href: "/work/farritech",
    image: {
      src: "/work/farritech/farrier-rig-stables.jpg",
      width: 1600,
      height: 1000,
      alt: "Illustration of a white farrier truck with the FarriTech logo, parked in front of a horse stable",
    },
  },
  {
    kind: "Field Service SaaS",
    title: "Field Service Platform",
    desc: "Dispatch, invoicing, service plans and equipment tracking for HVAC, plumbing, lawn, pool and pest crews.",
    href: "/work/field-service-platform",
    image: null,
  },
];

const PRODUCTS = [
  {
    kind: "Lead Intelligence",
    title: "Restaurant Radar",
    desc: "Finds and scores new Florida restaurant prospects from multiple sources and sends qualified leads to Zoho CRM.",
    tags: ["Python", "Public data", "Zoho CRM", "Lead scoring"],
  },
  {
    kind: "Sales Enablement",
    title: "POS Sales Portal",
    desc: "A bilingual quoting and profitability tool that turns hardware, SaaS and processing economics into rep-friendly proposals.",
    tags: ["Next.js", "Supabase", "Pricing logic"],
  },
  {
    kind: "Training Platform",
    title: "Merchant Sales Academy",
    desc: "Cold-call training for merchant services reps: call reluctance, opening lines, objection handling and asking for the appointment.",
    tags: ["Next.js", "Firebase-ready", "Curriculum design"],
    image: {
      src: "/work/merchant-sales-academy.jpg",
      width: 1340,
      height: 635,
      alt: "Merchant Sales Academy home page with the headline Stop avoiding the call",
    },
  },
  {
    kind: "Workflow Automation",
    title: "Zoho Lead Review",
    desc: "A permission-aware shared review queue that prevents duplicate leads, preserves ownership, enriches records and pushes approved opportunities to Zoho.",
    tags: ["Zoho API", "Shared state", "Role controls"],
  },
];

const SYSTEMS = [
  { kind: "Platform", title: "Sales Enablement Academy", desc: "A sequential sales curriculum with quizzes, AI coaching, progress tracking and manager visibility." },
  { kind: "Automation", title: "Zoho Route Sheet", desc: "Turns CRM exports into geo-ordered, printable daily routes with Google Maps directions." },
  { kind: "Analytics", title: "Support Ticket Report", desc: "Turns HESK exports into workload, urgency, repeat-merchant and issue-type insights." },
  { kind: "Lead Tool", title: "Sunbiz Lead Filter", desc: "Filters Florida business filings by territory and restaurant signals and exports rep-ready leads." },
  { kind: "Sales Tool", title: "Proposal Generator", desc: "Creates merchant proposals from centralized pricing and reusable configurations." },
  { kind: "Sales Tool", title: "POS Configuration Wizard", desc: "A guided POS setup flow with derived pricing and a spreadsheet export." },
];

const PRINCIPLES = [
  { title: "Domain first", desc: "Understand the economics, the users and the exceptions before choosing technology." },
  { title: "Build for adoption", desc: "Software reps, operators and customers will actually use." },
  { title: "Connect the workflow", desc: "Fewer handoffs, and clean data flowing into the systems you already run." },
  { title: "Measure outcomes", desc: "Faster work, better decisions, lower costs, stronger conversion and fewer errors." },
];

const num = (i) => String(i).padStart(2, "0");

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/80">
      <Sparkles className="h-4 w-4" aria-hidden="true" /> {kicker}
    </div>
    <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
    {subtitle ? <p className="mt-4 text-pretty text-base text-white/70 sm:text-lg">{subtitle}</p> : null}
  </div>
);

const Kind = ({ n, children }) => (
  <div className="text-xs font-semibold uppercase tracking-widest text-purple-400">
    <span className="tabular-nums text-white/40">{n}</span> · {children}
  </div>
);

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#070910] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(168,85,247,0.18),rgba(99,102,241,0.14),rgba(236,72,153,0.16))]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
      <SiteHeader />
      <main id="main">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-8 pt-12 text-center sm:px-6 sm:pt-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80">
            <Sparkles className="h-4 w-4" aria-hidden="true" /> Our Work
          </div>
          <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Software built by someone who has done the job
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
            DAS Digital is led by David Spatz, a payments operator who now builds software for field teams, sales organizations and vertical businesses.
          </p>
          <dl className={`mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-3xl border-2 border-purple-500 bg-purple-500/30 ${glowCard}`}>
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse bg-[#0c0e18] p-5 sm:p-6">
                <dt className="mt-1 text-xs text-white/70 sm:text-sm">{s.label}</dt>
                <dd className="text-3xl font-bold tracking-tight text-fuchsia-300 sm:text-4xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Case studies */}
        <section id="case-studies" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
          <SectionTitle kicker="Case Studies" title="Full products, start to finish" />
          <ul className="mt-10 grid gap-6 lg:grid-cols-2">
            {CASE_STUDIES.map((c, i) => (
              <li key={c.title}>
                <a
                  href={c.href}
                  className={`group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-purple-500 bg-white/5 backdrop-blur transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-300 ${glowCard}`}
                >
                  {c.image ? (
                    <Image
                      src={c.image.src}
                      width={c.image.width}
                      height={c.image.height}
                      alt={c.image.alt}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="aspect-[16/9] h-auto w-full object-cover"
                    />
                  ) : (
                    <div aria-hidden="true" className="grid aspect-[16/9] w-full place-items-center bg-[radial-gradient(30rem_16rem_at_50%_50%,rgba(168,85,247,0.35),transparent)]">
                      <span className="text-3xl font-semibold tracking-tight text-white/80">{c.title}</span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-7">
                    <Kind n={num(i + 1)}>{c.kind}</Kind>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{c.title}</h3>
                    <p className="mt-2 flex-1 text-white/70">{c.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-300 group-hover:text-white">
                      Read the case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Products and tools */}
        <section id="products" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
          <SectionTitle
            kicker="Products & Tools"
            title="Built for payments and sales teams"
            subtitle="Lead generation, quoting, training and CRM automation, shaped by 20+ years in merchant services."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {PRODUCTS.map((p, i) => (
              <li key={p.title} className={`flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur ${glowCard}`}>
                {p.image ? (
                  <Image
                    src={p.image.src}
                    width={p.image.width}
                    height={p.image.height}
                    alt={p.image.alt}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[2/1] h-auto w-full object-cover object-top"
                  />
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <Kind n={num(i + 1 + CASE_STUDIES.length)}>{p.kind}</Kind>
                  <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Built with">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80">{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Selected systems */}
        <section id="systems" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
          <SectionTitle kicker="Selected Systems" title="Smaller tools that save hours every week" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SYSTEMS.map((s, i) => (
              <li key={s.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <Kind n={num(i + 1 + CASE_STUDIES.length + PRODUCTS.length)}>{s.kind}</Kind>
                <h3 className="mt-2 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm">
            <a href="/merchant-services-sales-tools" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-purple-300 hover:text-white">
              More on our sales tools for merchant services teams <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </p>
        </section>

        {/* How we work */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionTitle kicker="How We Work" title="Business first, then the build" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-sm font-semibold tabular-nums text-fuchsia-300">{num(i + 1)}</div>
                <h3 className="mt-2 font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className={`rounded-3xl border-2 border-purple-500 bg-white/5 p-10 text-center backdrop-blur ${glowCard}`}>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Have a workflow that should be software?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
              Tell us how your team works today. We will tell you what we would build, and how fast.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="/#lead" className={`inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ${purpleBtn}`}>
                Let's Talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="/custom-saas-development" className={`inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ${outlineBtn}`}>
                Custom SaaS Development <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
