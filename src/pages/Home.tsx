import React from "react";
import { Helmet } from "react-helmet-async";
import Faqs from "../components/FAQS";
import type { FAQItem } from "../components/FAQS";
import CTA from "../components/CTA";

const Home: React.FC = () => {
  // Easy-to-edit FAQ entries
  const faqs: FAQItem[] = [
    {
      q: "Do you build and host websites?",
      a: "Yes. I design and deploy modern sites, provide fast/reliable hosting, domain/DNS setup, SSL, and ongoing upkeep.",
    },
    {
      q: "Can you help set up my business tech stack?",
      a: "Absolutely—email, domains, devices, POS, task tools, and basic automations. I’ll document everything so it’s easy to maintain.",
    },
    {
      q: "What software do you provide?",
      a: "Point-of-Sale, Task Manager, and LocalDocs (on-prem document access). I also build custom line-of-business apps.",
    },
    {
      q: "Why Blazor for heavier tracking?",
      a: "Blazor lets me ship secure, fast, .NET-backed apps with role-based access, solid data models, and great performance at scale.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>R43 Digital Tech — Websites, Hosting & Business Software</title>
        <meta
          name="description"
          content="Websites and hosting, business setup, POS, task management, LocalDocs, and custom Blazor applications for heavier tracking in Stevens County and surrounding areas."
        />
      </Helmet>

      <main className="font-['Roboto'] text-slate-200">
        {/* ===== Hero (industrial, confident) ===== */}
        <section id="home" className="bg-[#0a0f12] border-b border-slate-800/60">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="grid items-center gap-10 md:grid-cols-[1.25fr_1fr]">
              {/* Left: headline + CTA */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-700/30 bg-[#0f171a] px-3 py-1 text-[11px] tracking-wider uppercase text-teal-300/90">
                  Industrial • Reliable • Documented
                </div>

                <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-[0.03em] text-teal-200">
                  Websites, Hosting & Business Software
                </h1>

                <p className="mt-4 text-slate-300/90 leading-relaxed md:text-lg">
                  I help small businesses get online and stay operational—modern sites and hosting,
                  straightforward setup, and practical software like POS, task management, and LocalDocs.
                  For deeper needs, I build Blazor apps with heavier tracking.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-md bg-teal-600/90 px-4 py-2 text-sm font-medium text-white hover:bg-teal-500 transition"
                  >
                    Get a quote
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center rounded-md border border-slate-700 bg-[#0f1418] px-4 py-2 text-sm font-medium text-slate-200 hover:border-teal-600/50 transition"
                  >
                    See services
                  </a>
                </div>

                <div className="mt-6 text-xs text-slate-400">
                  Serving Stevens County and surrounding areas
                </div>
              </div>

              {/* Right: spec panel (industrial card) */}
              <div className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <h3 className="text-sm font-semibold tracking-wide text-slate-300 uppercase">
                  What you can expect
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    {
                      strong: "Clear setup & docs:",
                      text: "domains, DNS, SSL, email, and vendor logins recorded neatly.",
                    },
                    {
                      strong: "Reliable hosting:",
                      text: "fast, secure, and monitored with backups.",
                    },
                    {
                      strong: "Right-sized software:",
                      text: "POS, task tools, LocalDocs, or custom Blazor when you need more.",
                    },
                  ].map((it) => (
                    <li key={it.strong} className="flex items-start gap-3">
                      <span className="mt-1 h-[6px] w-[6px] rounded-full bg-teal-400" />
                      <span>
                        <strong className="text-slate-200">{it.strong}</strong> {it.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 h-px w-full bg-slate-800/60" />

                <div className="mt-4 grid gap-2 text-[12px] text-slate-400">
                  <div className="flex items-center justify-between">
                    <span>Stack</span>
                    <span className="text-slate-300">Web • Hosting • POS • Blazor</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Approach</span>
                    <span className="text-slate-300">Assess → Implement → Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* industrial accent */}
          <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
        </section>

        {/* ===== Services (industrial cards) ===== */}
        <section id="services" className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-teal-200">Core Services</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Everything you need to launch and operate—without the fluff.
                </p>
              </div>
              <div className="hidden md:block h-px flex-1 bg-slate-800/60" />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Websites & Hosting",
                  bullets: ["Modern, responsive sites", "Domain, DNS, SSL, email", "Fast hosting & backups"],
                },
                {
                  title: "Business Setup & Support",
                  bullets: ["New business tech setup", "Accounts, devices, policies", "Ongoing help & documentation"],
                },
                {
                  title: "Point-of-Sale (POS)",
                  bullets: ["POS selection & rollout", "Hardware & receipt printers", "User access & training"],
                },
                {
                  title: "Task Manager",
                  bullets: ["Team tasks & status", "Light workflows", "Reports and history"],
                },
                {
                  title: "LocalDocs (On-Prem Files)",
                  bullets: ["Simple on-prem document access", "Structured folders & metadata", "Permissions and backups"],
                },
                {
                  title: "Blazor Business Apps",
                  bullets: ["Heavier tracking & LOB apps", "Role-based access & auditing", "Dashboards and reporting"],
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="group rounded-lg border border-slate-800 bg-[#0f1416] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-transform duration-200 hover:-translate-y-[2px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-[10px] w-[10px] rounded-sm bg-gradient-to-br from-teal-400 to-cyan-500 shadow-[0_0_10px_rgba(45,212,191,0.35)]" />
                    <h3 className="text-lg font-semibold text-teal-300">{card.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300/90">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        {/* ===== Fit (two spec-panels) ===== */}
        <section className="bg-[#0a0f12]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-200">Is R43 a Good Fit?</h2>
              <div className="hidden md:block h-px flex-1 bg-slate-800/60" />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-5">
                <h3 className="text-base font-semibold text-slate-200">You’ll like working with me if you want:</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300/90">
                  {[
                    "Straightforward setup and reliable hosting",
                    "Clear documentation and predictable costs",
                    "Practical tools (POS, tasks, docs) that people actually use",
                    "Room to grow into custom Blazor apps when needed",
                  ].map((v) => (
                    <li key={v} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-5">
                <h3 className="text-base font-semibold text-slate-200">Common clients:</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300/90">
                  {[
                    "Contractors & trades",
                    "Shops & small retail",
                    "Local government / community orgs",
                    "Professional services & small teams",
                  ].map((v) => (
                    <li key={v} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        {/* ===== Process (machined steps) ===== */}
        <section className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-200">How We Work</h2>
              <div className="hidden md:block h-px flex-1 bg-slate-800/60" />
            </div>

            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { step: "1", title: "Assess", text: "Quick discovery—goals, systems, constraints. Clear scope and estimate." },
                { step: "2", title: "Implement", text: "Deliver the plan, handle vendors, set up hosting, document everything." },
                { step: "3", title: "Support", text: "Monitor, improve, and stay available. No surprises." },
              ].map((s) => (
                <li
                  key={s.step}
                  className="rounded-lg border border-slate-800 bg-[#0f1416] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
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

        {/* ===== FAQs (your component) ===== */}
        <Faqs items={faqs} id="faqs" />

        {/* ===== Contact CTA ===== */}
        <section id="contact" className="bg-[#0c1114]">
          <CTA />
        </section>
      </main>
    </>
  );
};

export default Home;
