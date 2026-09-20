import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import earthHero from "@/assets/earth-hero.jpg";
import cityIntelligence from "@/assets/EditorialVisual.png";
import whereWeWork1 from "@/assets/where-we-work-1.png";
import whereWeWork2 from "@/assets/where-we-work-2.png";
import whereWeWork3 from "@/assets/where-we-work-3.png";
import whereWeWork4 from "@/assets/where-we-work-4.png";
import whereWeWork5 from "@/assets/where-we-work-5.png";
import whereWeWork6 from "@/assets/where-we-work-6.png";
import servicesOverview from "@/assets/ServicesOverview.jpg";
import visualComposition from "@/assets/VisualComposition.png";
import brandDark from "@/assets/brand-dark.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iTechs Data Intelligence | Geospatial & GIS" },
      {
        name: "description",
        content:
          "Egypt's leading geospatial and GIS software company and Esri Gold Partner serving clients across EMEA.",
      },
      { property: "og:title", content: "iTechs Data Intelligence | Geospatial & GIS" },
      {
        property: "og:description",
        content: "Spatial intelligence for governments, defense, infrastructure, and enterprise across EMEA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const principles = [
  ["01", "AI-native from day one", "AI isn't bolted on. It is built into how we think, design and deliver."],
  ["02", "Senior expertise, accountable", "Experienced teams stay close to the work and own the outcome."],
  ["03", "Sovereign trust", "Your data stays protected, governed and under your control."],
  ["04", "Globally connected, committed", "Global standards and partnerships, delivered with local understanding."],
  ["05", "Built to outlast projects", "We build capability, knowledge and systems designed to endure."],
];

const services = [
  ["Enterprise GIS & Spatial Data Infrastructure", "We build the foundations that make spatial data reliable, accessible and useful."],
  ["GeoAI & Spatial Analytics", "Advanced analytics that turn complex location data into practical intelligence."],
  ["Earth Observation & Satellite Analytics", "Satellite insight for monitoring change, risk and performance at scale."],
  ["Defense & National Security Geospatial", "Mission-focused platforms for situational awareness and critical decisions."],
  ["Strategy, Architecture & Advisory", "Clear roadmaps that connect geospatial investment to operational outcomes."],
  ["Managed Services & Capability Building", "Long-term support and knowledge transfer that strengthen your teams."],
  ["Technology Implementation & Partner Solutions", "Proven platforms implemented around your needs, not the other way around."],
];

const sectors = [
  {
    title: "Government & Digital Transformation",
    shortDescription: "Better services and more informed public decisions.",
    image: whereWeWork1,
  },
  {
    title: "Defense & National Security",
    shortDescription: "Secure intelligence for mission-critical operations.",
    image: whereWeWork2,
  },
  {
    title: "Energy & Utilities",
    shortDescription: "Visibility across networks, assets and field operations.",
    image: whereWeWork3,
  },
  {
    title: "Infrastructure & Transport",
    shortDescription: "Planning and operating connected infrastructure.",
    image: whereWeWork4,
  },
  {
    title: "Agriculture & Food Security",
    shortDescription: "Monitoring land, crops and resources at scale.",
    image: whereWeWork5,
  },
  {
    title: "Climate & Environment",
    shortDescription: "Earth observation for a changing world.",
    image: whereWeWork6,
  },
];

const thinking = [
  "Why national geospatial strategies fail and how to write one that doesn't",
  "From pixels to predictions: operationalizing Earth observation with AI",
  "Building a sovereign GEOINT capability from scratch",
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-header/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="font-display text-xl font-bold text-foreground" aria-label="iTechs home">
            <img src={brandDark} alt="iTechs Logo" className="h-8 w-auto" />
          </a>
          <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-foreground" href="#about">About Us</a>
            <a className="transition-colors hover:text-foreground" href="#services">Services</a>
            <a className="transition-colors hover:text-foreground" href="#projects">Projects</a>
            <a className="font-semibold text-foreground" href="#geospatial">GeoSpatial</a>
            <a className="transition-colors hover:text-foreground" href="#careers">Careers</a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu"><Menu /></Button>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[720px] items-center justify-center pt-20">
        <img src={earthHero} width={1920} height={1088} alt="Earth at night with connected geospatial networks across EMEA" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-12 text-center lg:px-10">
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">Spatial Intelligence.<br />Delivered.</h1>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            iTechs GeoSpatial is an AI-native geospatial company built to manage and investigate insights. We design, deliver, and operate the systems that governments, defense organizations, and enterprises use to turn spatial data into decisions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild><a href="#services">Explore our services <ArrowRight /></a></Button>
            <Button size="lg" variant="ghost" asChild><a href="#contact">Talk to our team <ArrowRight /></a></Button>
          </div>
          <div className="mt-24 grid grid-cols-2 gap-x-7 gap-y-8 border-t border-border/50 pt-7 text-left md:grid-cols-4">
            {[["+25 Years", "Delivering mission-critical geospatial systems"], ["EMEA", "Built in Egypt, serving a region"], ["7 Lines", "A full spectrum of geospatial capability"], ["Secure", "Sovereign systems for sensitive missions"]].map(([title, copy]) => (
              <div key={title}>
                <p className="text-4xl font-bold text-primary">{title}</p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-band bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl">GIS, AI, and Earth observation have become one discipline. We were built for it.</h2>
          <div className="mt-10 grid gap-8 text-sm leading-7 text-muted-foreground md:grid-cols-2 md:gap-14">
            <p>Most geospatial problems are no longer maps but the architecture of decisions. We combine GIS, satellite data, GeoAI and domain expertise in one integrated discipline, so organizations can move from fragmented information to operational clarity.</p>
            <p className="border-l-2 border-accent pl-6">From foundations in enterprise GIS to the new reality of AI-native geospatial intelligence, our work meets organizations where they are and helps them build what comes next.</p>
          </div>
          <img src={cityIntelligence} loading="lazy" width={1920} height={747} alt="Terrain analysis view with contour lines, a coverage grid, and a highlighted heat zone" className="mt-12 aspect-[1920/747] w-full rounded-lg object-cover" />
        </div>
      </section>

      <section className="section-band bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">Our principles</p><h2 className="section-title">What We Stand For</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {principles.map(([number, title, copy]) => <Card key={number} className="principle-card"><CardContent className="p-7"><span className="text-xs font-bold text-accent">{number}</span><h3 className="mt-7 font-display text-lg font-semibold">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p></CardContent></Card>)}
          </div>
        </div>
      </section>

      <section id="services" className="section-band relative isolate overflow-hidden bg-surface">
        <img src={servicesOverview} loading="lazy" width={1483} height={768} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-services-overlay" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">Capabilities</p><h2 className="section-title">What we do</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">Seven lines combining the tools to grow intelligence — from the strategy through to mission-ready operations.</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, copy]) => <article key={title} className="min-h-52 bg-panel p-6"><h3 className="font-display text-base font-semibold leading-snug">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}
            <article className="flex min-h-52 flex-col justify-between bg-primary p-6 text-primary-foreground"><h3 className="font-display text-xl font-semibold">Tell us</h3><a href="#contact" className="flex items-center gap-2 text-sm font-semibold">Talk to our team <ArrowRight className="size-4" /></a></article>
          </div>
        </div>
      </section>

      <section id="projects" className="section-band bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">Sectors</p><h2 className="section-title">Where we work</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map(({ title, shortDescription, image }) => (
              <Card key={title} className="sector-card">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
                <CardContent className="p-5">
                  <h3 className="font-display font-semibold">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {shortDescription}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="geospatial" className="section-band bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 lg:px-10">
          <div><p className="eyebrow">Our difference</p><h2 className="section-title">Why iTechs GeoSpatial</h2><p className="mt-6 text-sm leading-7 text-muted-foreground">Senior geospatial leaders. AI-native. Regional delivery scale. Defense-grade security. Esri Gold partnership. An integrated team with the range to meet complexity, concentrate on the real mission and deliver solutions that last.</p></div>
          <img src={visualComposition} loading="lazy" width={1132} height={800} alt="Satellite night view of the Middle East with a targeting reticle and tracking overlay" className="aspect-[1132/800] w-full rounded-lg object-cover" />
        </div>
      </section>

      <section className="section-band bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">Insights from our team</p><h2 className="section-title">Our thinking</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">{thinking.map((title, i) => <Card key={title} className="principle-card"><CardContent className="p-7"><span className="text-xs uppercase text-accent">Insight 0{i + 1}</span><h3 className="mt-5 font-display text-lg font-semibold leading-snug">{title}</h3><a className="mt-8 flex items-center gap-2 text-sm text-accent" href="#contact">Read more <ArrowRight className="size-4" /></a></CardContent></Card>)}</div>
        </div>
      </section>

      <section id="contact" className="bg-cta px-6 py-16 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold sm:text-4xl">Planning a geospatial program? Start the conversation early.</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">The best programs are shaped before the tender is written. Talk to us at the strategy stage.</p>
        <Button className="mt-7" asChild><a href="mailto:info@itechs.com">Talk to our team <ArrowRight /></a></Button>
      </section>

      <footer id="careers" className="border-t border-border bg-footer py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-3 lg:px-10">
          <div>
            <img src={brandDark} alt="iTechs Logo" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-xs leading-5 text-muted-foreground">iTechs Data Intelligence transforms spatial complexity into decisions that move governments and enterprises forward.</p></div>
          <div><p className="text-xs font-bold uppercase text-foreground">Services</p><div className="mt-4 grid gap-2 text-xs text-muted-foreground"><a href="#services">Enterprise GIS</a><a href="#services">Spatial Analytics</a><a href="#services">Earth Observation</a><a href="#services">GeoAI</a></div></div>
          <div><p className="text-xs font-bold uppercase text-foreground">Company</p><div className="mt-4 grid gap-2 text-xs text-muted-foreground"><a href="#about">About Us</a><a href="#projects">Projects</a><a href="#careers">Careers</a><a href="#contact">Contact</a></div></div>
        </div>
      </footer>
    </main>
  );
}
