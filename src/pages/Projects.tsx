import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";

const Projects: React.FC = () => {
  const projectTypes = [
    {
      title: "R43 Creative Projects",
      label: "Websites & Digital Presence",
      text:
        "Website projects are focused on clean presentation, reliable hosting setup, contact forms, mobile-friendly layouts, and ongoing support.",
      link: "/creative",
      linkText: "View Creative",
      bullets: [
        "Business websites",
        "Hosting and launch setup",
        "Contact forms",
        "Website maintenance",
      ],
    },
    {
      title: "R43 Ops Projects",
      label: "Software & Operational Systems",
      text:
        "Ops projects are focused on dashboards, workflows, internal tools, reporting, data organization, and custom systems built around business processes.",
      link: "/ops",
      linkText: "View Ops",
      bullets: [
        "Dashboards",
        "Workflow systems",
        "Internal tools",
        "Operational tracking",
      ],
    },
  ];

  const delivery = [
    {
      title: "Discovery",
      text:
        "We define the business need, current setup, users, constraints, goals, and what a successful project should deliver.",
      list: [
        "Business goals and pain points",
        "Current tools, systems, and process review",
        "Initial scope and project direction",
      ],
    },
    {
      title: "Scope",
      text:
        "The work is shaped into a clear scope so expectations, deliverables, and responsibilities are understood before the build starts.",
      list: [
        "Defined deliverables",
        "Acceptance criteria",
        "Dependencies and client-provided content",
      ],
    },
    {
      title: "Build",
      text:
        "The project is implemented in practical stages with visible progress, feedback points, and controlled changes.",
      list: [
        "Website, system, or workflow buildout",
        "Testing and review checkpoints",
        "Adjustments based on approved scope",
      ],
    },
    {
      title: "Launch & Support",
      text:
        "After launch, the project is handed off with support options, documentation, and a clear path for future improvements.",
      list: [
        "Launch checklist",
        "Documentation and ownership details",
        "Support or maintenance options",
      ],
    },
  ];

  const standards = [
    {
      title: "Clear Communication",
      text:
        "Projects are managed with straightforward updates, practical expectations, and no unnecessary complexity.",
      list: [
        "Simple project status updates",
        "Known blockers identified early",
        "Changes discussed before work continues",
      ],
    },
    {
      title: "Documentation",
      text:
        "Important technical details are documented so the project remains understandable and supportable after launch.",
      list: [
        "Hosting and domain details",
        "Access and ownership notes",
        "Runbook or README where needed",
      ],
    },
    {
      title: "Security & Access",
      text:
        "Access is handled carefully, with ownership transferred appropriately and unnecessary access avoided.",
      list: [
        "SSL/HTTPS where applicable",
        "Least-needed access approach",
        "Credential handoff checklist",
      ],
    },
    {
      title: "Supportability",
      text:
        "The goal is not just to build something, but to build something that can be maintained and improved over time.",
      list: [
        "Clean structure",
        "Reusable patterns",
        "Future improvement path",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Projects — How We Work | R43 Digital Tech</title>
        <meta
          name="description"
          content="R43 Digital Tech project approach for websites, business systems, dashboards, workflow tools, and operational software through R43 Creative and R43 Ops."
        />
      </Helmet>

      <main className="font-['Roboto'] text-slate-200">
        <section className="relative overflow-hidden border-b border-slate-800/70 bg-[#080d10]">
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-teal-400 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="max-w-4xl">
              <div className="inline-flex items-center rounded-full border border-teal-700/30 bg-[#0f171a] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-teal-300/90">
                R43 Digital Tech Projects
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-teal-100 md:text-6xl">
                Clear project delivery for websites, software, and business systems.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300/90 md:text-lg">
                Projects are scoped clearly, built in practical stages, documented for long-term support,
                and routed through the right side of R43: Creative for websites, Ops for custom systems.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#project-types"
                  className="inline-flex items-center rounded-md bg-teal-600/90 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
                >
                  View project types
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-md border border-slate-700 bg-[#0f1418] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-teal-600/60 hover:text-teal-100"
                >
                  Start a project
                </a>
              </div>
            </div>
          </div>

          <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
        </section>

        <section id="project-types" className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-teal-200 md:text-3xl">
                Project types
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400 md:text-base">
                R43 Digital Tech separates projects by need so customers are routed to the right service path.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {projectTypes.map((project) => (
                <article
                  key={project.title}
                  className="rounded-2xl border border-slate-800 bg-[#0f1416] p-6"
                >
                  <div className="text-sm uppercase tracking-[0.16em] text-slate-500">
                    {project.label}
                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-teal-200">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {project.text}
                  </p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-slate-300/90">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={project.link}
                    className="mt-6 inline-flex rounded-md border border-slate-700 bg-[#0b1013] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-teal-500/60 hover:text-teal-200"
                  >
                    {project.linkText}
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-slate-800/70" />
        </section>

        <section className="bg-[#0a0f12]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-teal-200 md:text-3xl">
                  Delivery process
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Each project follows a structured path from discovery to launch and support.
                </p>
              </div>
              <div className="hidden h-px flex-1 bg-slate-800/70 md:block" />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {delivery.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-slate-800 bg-[#0f1416] p-6"
                >
                  <div className="h-[10px] w-[10px] rounded-sm bg-gradient-to-br from-teal-400 to-cyan-500" />

                  <h3 className="mt-4 text-xl font-semibold text-teal-200">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {card.text}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-slate-300/90">
                    {card.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
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

        <section className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-teal-200 md:text-3xl">
                  Project standards
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  The same delivery standards apply across Creative and Ops projects.
                </p>
              </div>
              <div className="hidden h-px flex-1 bg-slate-800/70 md:block" />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {standards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-slate-800 bg-[#0f1416] p-6"
                >
                  <h3 className="text-xl font-semibold text-teal-200">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {card.text}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-slate-300/90">
                    {card.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
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

        <section className="bg-[#0a0f12]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="rounded-2xl border border-slate-800 bg-[#0f1416] p-6 md:p-8">
              <h2 className="text-2xl font-bold text-teal-200 md:text-3xl">
                Quotes are scoped after project review
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
                Website and software projects vary based on goals, content, features, integrations,
                users, hosting needs, timeline, and support requirements. After a short discovery
                conversation, R43 provides a clear project scope and quote before work begins.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-slate-800/70" />
        </section>

        <section id="contact" className="bg-[#0c1114]">
          <CTA />
        </section>
      </main>
    </>
  );
};

export default Projects;