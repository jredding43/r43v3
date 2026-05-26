import React from "react";
import { Helmet } from "react-helmet-async";
import Faqs from "../components/FAQS";
import type { FAQItem } from "../components/FAQS";
import CTA from "../components/CTA";

const Home: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      q: "What is R43 Digital Tech?",
      a: "R43 Digital Tech LLC is the parent technology company behind R43 Creative and R43 Ops. R43 Creative focuses on websites and business presence. R43 Ops focuses on custom software, workflow systems, and operational tools.",
    },
    {
      q: "What is the difference between R43 Creative and R43 Ops?",
      a: "R43 Creative is for websites, hosting, branding, and small business digital setup. R43 Ops is for custom software, dashboards, workflow systems, internal tools, and heavier business or operational tracking.",
    },
    {
      q: "Do you build and host websites?",
      a: "Yes. Through R43 Creative, I design and deploy modern websites with hosting setup, domain/DNS configuration, SSL, contact forms, and ongoing maintenance.",
    },
    {
      q: "Can you build custom business software?",
      a: "Yes. Through R43 Ops, I build practical web-based software such as dashboards, task systems, document access tools, operational tracking, and custom line-of-business applications.",
    },
  ];

  const divisions = [
    {
      name: "R43 Creative",
      label: "Websites & Business Presence",
      description:
        "Professional websites, hosting setup, contact forms, business pages, branding support, and digital tools for small businesses that need to look credible online.",
      href: "/creative",
      cta: "Explore Creative",
      bullets: ["Websites", "Hosting setup", "Contact forms", "Business branding"],
    },
    {
      name: "R43 Ops",
      label: "Software & Operational Systems",
      description:
        "Custom software, dashboards, internal tools, workflow systems, document access, reporting, and practical applications for businesses that need more than a basic website.",
      href: "/ops",
      cta: "Explore Ops",
      bullets: ["Custom apps", "Dashboards", "Workflow systems", "Operational tracking"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>R43 Digital Tech — Websites, Software & Business Systems</title>
        <meta
          name="description"
          content="R43 Digital Tech LLC provides professional websites through R43 Creative and custom business software through R43 Ops for Stevens County and surrounding areas."
        />
      </Helmet>

      <main className="font-['Roboto'] text-slate-200">
        {/* ===== Hero ===== */}
        <section id="home" className="bg-[#0a0f12] border-b border-slate-800/60">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/30 bg-[#0f171a] px-3 py-1 text-[11px] tracking-wider uppercase text-teal-300/90">
                  R43 Digital Tech LLC
                </div>

                <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-teal-100">
                  Websites, software, and systems built for real business operations.
                </h1>

                <p className="mt-5 max-w-2xl text-slate-300/90 leading-relaxed md:text-lg">
                  R43 Digital Tech is a technology company with two focused divisions:
                  <span className="text-teal-200 font-medium"> R43 Creative</span> for websites and digital presence,
                  and <span className="text-teal-200 font-medium">R43 Ops</span> for custom software, workflows,
                  dashboards, and operational systems.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#divisions"
                    className="inline-flex items-center rounded-md bg-teal-600/90 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-500 transition"
                  >
                    Choose a division
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-md border border-slate-700 bg-[#0f1418] px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-teal-600/50 transition"
                  >
                    Start a project
                  </a>
                </div>

                <div className="mt-6 text-xs text-slate-400">
                  Serving Stevens County, Northeast Washington, and surrounding areas
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#0f1416]/95 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <h3 className="text-sm font-semibold tracking-wide text-slate-300 uppercase">
                  One company. Two focused divisions.
                </h3>

                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-slate-800 bg-[#0b1013] p-4">
                    <div className="text-teal-300 font-semibold">R43 Creative</div>
                    <p className="mt-1 text-sm text-slate-400">
                      Websites, hosting, branding, and business-facing digital presence.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-[#0b1013] p-4">
                    <div className="text-cyan-300 font-semibold">R43 Ops</div>
                    <p className="mt-1 text-sm text-slate-400">
                      Custom software, dashboards, workflows, and operational systems.
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-px w-full bg-slate-800/60" />

                <div className="mt-4 grid gap-2 text-[12px] text-slate-400">
                  <div className="flex items-center justify-between">
                    <span>Approach</span>
                    <span className="text-slate-300">Assess → Build → Support</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Focus</span>
                    <span className="text-slate-300">Practical, documented, scalable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
        </section>

        {/* ===== Division Split ===== */}
        <section id="divisions" className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-200">
                Choose the right side of R43
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-400">
                Some businesses need a professional website. Others need software that helps them operate.
                R43 separates those needs clearly.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {divisions.map((division) => (
                <article
                  key={division.name}
                  className="group rounded-2xl border border-slate-800 bg-[#0f1416] p-6 transition duration-200 hover:-translate-y-[2px] hover:border-teal-700/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm uppercase tracking-wider text-slate-500">
                        {division.label}
                      </div>
                      <h3 className="mt-2 text-2xl font-bold text-teal-200">
                        {division.name}
                      </h3>
                    </div>

                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 shadow-[0_0_20px_rgba(45,212,191,0.25)]" />
                  </div>

                  <p className="mt-4 text-slate-300/90 leading-relaxed">
                    {division.description}
                  </p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {division.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={division.href}
                    className="mt-6 inline-flex items-center rounded-md border border-slate-700 bg-[#0b1013] px-4 py-2 text-sm font-medium text-slate-200 hover:border-teal-500/60 hover:text-teal-200 transition"
                  >
                    {division.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        {/* ===== Shared Strengths ===== */}
        <section id="services" className="bg-[#0a0f12]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-teal-200">
                  Built with the same standard
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Whether it is a website or a custom system, the work is built to be clean, reliable, and supportable.
                </p>
              </div>
              <div className="hidden md:block h-px flex-1 bg-slate-800/60" />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Professional setup",
                  text: "Domains, DNS, SSL, hosting, email, forms, and deployment handled properly.",
                },
                {
                  title: "Clear documentation",
                  text: "Systems, access, vendors, and technical details documented for long-term support.",
                },
                {
                  title: "Practical development",
                  text: "Solutions are designed around real business use, not unnecessary complexity.",
                },
                {
                  title: "Long-term support",
                  text: "Hosting, updates, changes, troubleshooting, and improvements can continue after launch.",
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="rounded-xl border border-slate-800 bg-[#0f1416] p-5"
                >
                  <div className="h-[10px] w-[10px] rounded-sm bg-gradient-to-br from-teal-400 to-cyan-500" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-200">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        {/* ===== Fit ===== */}
        <section className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-[#0f1416]/95 p-6">
                <h2 className="text-2xl font-bold text-teal-200">
                  R43 Creative is a fit when you need:
                </h2>

                <ul className="mt-5 space-y-3 text-sm text-slate-300/90">
                  {[
                    "A professional website for your business",
                    "Hosting, domain, DNS, SSL, and contact form setup",
                    "A clean online presence that works well on mobile",
                    "Ongoing website support without dealing with the technical details",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#0f1416]/95 p-6">
                <h2 className="text-2xl font-bold text-cyan-200">
                  R43 Ops is a fit when you need:
                </h2>

                <ul className="mt-5 space-y-3 text-sm text-slate-300/90">
                  {[
                    "Custom software instead of another spreadsheet",
                    "Dashboards, reporting, or internal business tools",
                    "Workflow tracking, task systems, or document access",
                    "A web-based application built around your actual process",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        {/* ===== Process ===== */}
        <section className="bg-[#0a0f12]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-200">
                How We Work
              </h2>
              <div className="hidden md:block h-px flex-1 bg-slate-800/60" />
            </div>

            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Assess",
                  text: "Understand the business need, current setup, users, budget, and what success looks like.",
                },
                {
                  step: "2",
                  title: "Build",
                  text: "Design and implement the website, system, workflow, or tool with a clear scope.",
                },
                {
                  step: "3",
                  title: "Support",
                  text: "Provide ongoing hosting, updates, troubleshooting, documentation, and improvements.",
                },
              ].map((s) => (
                <li
                  key={s.step}
                  className="rounded-xl border border-slate-800 bg-[#0f1416] p-5"
                >
                  <div className="text-teal-400 text-sm font-semibold">Step {s.step}</div>
                  <div className="mt-1 text-lg font-semibold text-slate-200">{s.title}</div>
                  <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        <Faqs
          items={faqs}
          id="faqs"
          accent="teal"
          title="Frequently Asked Questions"
          subtitle="Questions about R43 Digital Tech, R43 Creative, and R43 Ops."
        />

        <section id="contact" className="bg-[#0c1114]">
          <CTA />
        </section>
      </main>
    </>
  );
};

export default Home;