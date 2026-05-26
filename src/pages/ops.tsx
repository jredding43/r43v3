import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Faqs from "../components/FAQS";
import type { FAQItem } from "../components/FAQS";
import CTA from "../components/CTA";

const Ops: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      q: "What is R43 Ops?",
      a: "R43 Ops is the software and operational systems division of R43 Digital Tech LLC. It focuses on dashboards, workflows, internal tools, reporting systems, and operational software.",
    },
    {
      q: "Do you build custom software?",
      a: "Yes. R43 Ops builds custom web-based applications tailored around real business processes, workflows, reporting needs, and operational visibility.",
    },
    {
      q: "What technologies do you use?",
      a: "R43 Ops primarily focuses on modern web technologies and .NET-based systems including Blazor, SQL-backed applications, dashboards, workflow systems, and operational tooling.",
    },
    {
      q: "Can you replace spreadsheets or manual tracking?",
      a: "Yes. Many systems are designed specifically to reduce manual processes, disconnected spreadsheets, repetitive entry, and fragmented operational tracking.",
    },
  ];

  const systems = [
    {
      title: "Operational Dashboards",
      text: "Centralized visibility into workflows, metrics, reporting, and operational status.",
      items: [
        "Business dashboards",
        "Operational reporting",
        "Status tracking",
        "Data visualization",
      ],
    },
    {
      title: "Workflow Systems",
      text: "Custom systems that help teams manage tasks, approvals, processes, and operational workflows.",
      items: [
        "Task tracking",
        "Workflow approvals",
        "Activity history",
        "Structured processes",
      ],
    },
    {
      title: "Internal Business Tools",
      text: "Applications built around the actual way a business operates instead of generic software limitations.",
      items: [
        "Custom business logic",
        "Role-based access",
        "Internal portals",
        "Department tools",
      ],
    },
    {
      title: "Data & Reporting",
      text: "Structured systems for collecting, organizing, and reporting operational information.",
      items: [
        "SQL-backed systems",
        "Reporting tools",
        "Data organization",
        "Operational records",
      ],
    },
  ];

  const solutions = [
    {
      name: "Business Dashboards",
      description:
        "Centralized dashboards for operational visibility, reporting, metrics, and workflow awareness.",
      features: [
        "Role-based access",
        "Operational summaries",
        "Data tracking",
        "Custom layouts",
        "Web-based access",
      ],
    },
    {
      name: "Workflow Applications",
      description:
        "Custom workflow systems designed around how your organization actually operates.",
      features: [
        "Task workflows",
        "Approval systems",
        "Activity history",
        "Notifications",
        "Reporting integration",
      ],
    },
    {
      name: "Custom Operational Software",
      description:
        "Purpose-built systems for businesses that need more than spreadsheets or disconnected tools.",
      features: [
        "Custom business logic",
        "Internal systems",
        "Operational tracking",
        "Scalable architecture",
        "Future expansion support",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>R43 Ops — Operational Software & Systems</title>
        <meta
          name="description"
          content="R43 Ops builds operational software, dashboards, workflow systems, reporting tools, and custom applications for businesses and organizations."
        />
      </Helmet>

      <main className="font-['Roboto'] text-slate-200">
        {/* ===== Hero ===== */}
        <section className="relative overflow-hidden border-b border-slate-800/70 bg-[#070b0e]">
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="inline-flex items-center rounded-full border border-cyan-700/30 bg-[#0f171a] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-300/90">
                  R43 Ops
                </div>

                <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-cyan-100 md:text-6xl">
                  Operational software built around real business workflows.
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300/90 md:text-lg">
                  R43 Ops develops dashboards, workflow systems, internal tools,
                  reporting platforms, and operational software for organizations
                  that need more than disconnected spreadsheets and generic tools.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#solutions"
                    className="inline-flex items-center rounded-md bg-cyan-600/90 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-500"
                  >
                    View solutions
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-md border border-slate-700 bg-[#0f1418] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-600/60 hover:text-cyan-100"
                  >
                    Discuss a project
                  </a>
                </div>

                <div className="mt-6 text-xs text-slate-400">
                  Dashboards • Workflows • Internal Tools • Operational Systems
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#0f1416]/95 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Built for operations
                </h2>

                <ul className="mt-5 space-y-4 text-sm text-slate-300/90">
                  {[
                    "Custom systems designed around actual business processes",
                    "Operational visibility through dashboards and reporting",
                    "Structured workflows instead of disconnected spreadsheets",
                    "Scalable systems designed for long-term use and growth",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 h-px w-full bg-slate-800/70" />

                <div className="mt-5 rounded-xl border border-slate-800 bg-[#0b1013] p-4">
                  <div className="text-sm font-semibold text-cyan-300">
                    Part of R43 Digital Tech LLC
                  </div>

                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    Need a professional business website instead of custom software?
                    Visit R43 Creative for websites, hosting, and business presence.
                  </p>

                  <Link
                    to="/creative"
                    className="mt-3 inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
                  >
                    Explore R43 Creative →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400" />
        </section>

        {/* ===== Systems ===== */}
        <section id="systems" className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-cyan-200 md:text-3xl">
                Operational systems
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-400 md:text-base">
                R43 Ops focuses on practical systems that improve visibility,
                organization, reporting, and workflow management.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {systems.map((system) => (
                <article
                  key={system.title}
                  className="rounded-2xl border border-slate-800 bg-[#0f1416] p-6"
                >
                  <div className="h-[10px] w-[10px] rounded-sm bg-gradient-to-br from-cyan-400 to-blue-500" />

                  <h3 className="mt-4 text-xl font-semibold text-cyan-200">
                    {system.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {system.text}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-slate-300/90">
                    {system.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-slate-800/70" />
        </section>

        {/* ===== Solutions ===== */}
        <section id="solutions" className="bg-[#0a0f12]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-cyan-200 md:text-3xl">
                  Solution categories
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Systems are scoped around business process, operational requirements,
                  reporting needs, integrations, and future scalability.
                </p>
              </div>

              <div className="hidden h-px flex-1 bg-slate-800/70 md:block" />
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {solutions.map((solution) => (
                <article
                  key={solution.name}
                  className="rounded-2xl border border-slate-800 bg-[#0f1416] p-6"
                >
                  <h3 className="text-xl font-semibold text-slate-100">
                    {solution.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {solution.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-slate-300/90">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-[#0f1416] p-6">
              <h3 className="text-lg font-semibold text-cyan-200">
                Projects are scoped after operational review
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Operational software varies significantly depending on workflows,
                integrations, reporting requirements, user counts, infrastructure,
                and long-term operational goals.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-slate-800/70" />
        </section>

        {/* ===== Process ===== */}
        <section className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="text-2xl font-bold text-cyan-200 md:text-3xl">
                  How operational projects work
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                  R43 Ops focuses on understanding how the organization actually works
                  before designing systems around those workflows.
                </p>
              </div>

              <ol className="grid gap-4">
                {[
                  {
                    step: "01",
                    title: "Operational Review",
                    text: "Understand the workflow, reporting requirements, users, pain points, and business goals.",
                  },
                  {
                    step: "02",
                    title: "System Design",
                    text: "Define the structure, workflows, access models, reporting, and overall application direction.",
                  },
                  {
                    step: "03",
                    title: "Development",
                    text: "Build the operational system, dashboards, workflows, and supporting infrastructure.",
                  },
                  {
                    step: "04",
                    title: "Support & Growth",
                    text: "Continue improving the system as operational needs evolve over time.",
                  },
                ].map((item) => (
                  <li
                    key={item.step}
                    className="rounded-xl border border-slate-800 bg-[#0f1416] p-5"
                  >
                    <div className="text-sm font-semibold text-cyan-400">
                      Step {item.step}
                    </div>

                    <div className="mt-1 text-lg font-semibold text-slate-200">
                      {item.title}
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="h-px w-full bg-slate-800/70" />
        </section>

        <Faqs
          items={faqs}
          id="faqs"
          accent="cyan"
          title="Software & Systems Questions"
          subtitle="Common questions about dashboards, workflows, reporting, and operational software."
        />

        <section id="contact" className="bg-[#0c1114]">
          <CTA />
        </section>
      </main>
    </>
  );
};

export default Ops;