import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";

const About: React.FC = () => {
  const divisions = [
    {
      name: "R43 Creative",
      label: "Websites & Digital Presence",
      text:
        "Professional websites, hosting setup, contact forms, branding support, and ongoing website maintenance for small businesses.",
      link: "/creative",
      linkText: "Explore Creative",
      bullets: [
        "Business websites",
        "Hosting and launch setup",
        "Contact forms",
        "Website maintenance",
      ],
    },
    {
      name: "R43 Ops",
      label: "Software & Operational Systems",
      text:
        "Custom software, dashboards, workflow systems, reporting tools, and internal applications built around real business operations.",
      link: "/ops",
      linkText: "Explore Ops",
      bullets: [
        "Dashboards",
        "Workflow systems",
        "Internal tools",
        "Operational tracking",
      ],
    },
  ];

  const values = [
    {
      title: "Practical",
      text:
        "R43 focuses on tools that solve real business problems, not unnecessary features or overbuilt systems.",
    },
    {
      title: "Documented",
      text:
        "Projects are built with clear handoff notes, setup details, and supportable structure.",
    },
    {
      title: "Reliable",
      text:
        "The goal is to build websites and systems that stay useful after launch, with support available when needed.",
    },
  ];

  const timeline = [
    {
      title: "Operations Background",
      text: "Experience started in sawmill and industrial environments, where reliability, safety, and practical workflows matter.",
    },
    {
      title: "IT & Infrastructure",
      text: "Hands-on work with systems, networks, software support, business technology, and operational problem solving.",
    },
    {
      title: "Software Engineering",
      text: "Formal software engineering education combined with real-world experience building practical business systems.",
    },
    {
      title: "R43 Digital Tech",
      text: "Founded to help businesses improve their digital presence, technical setup, and operational systems.",
    },
  ];

  const stack = [
    "React",
    "Tailwind CSS",
    ".NET / Blazor",
    "SQL",
    "GitHub",
    "GoDaddy Hosting",
    "Formspree",
    "AWS / Cloud Basics",
  ];

  const certifications = [
    "Ignition Certified",
    "AWS Practitioner Certified",
    "Project+ Certified",
    "ITIL Certified",
  ];

  return (
    <>
      <Helmet>
        <title>About — R43 Digital Tech</title>
        <meta
          name="description"
          content="R43 Digital Tech LLC is a technology company with two divisions: R43 Creative for websites and digital presence, and R43 Ops for custom software and operational systems."
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
                About R43 Digital Tech LLC
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-teal-100 md:text-6xl">
                A practical technology company for websites, software, and business systems.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300/90 md:text-lg">
                R43 Digital Tech LLC helps businesses build a stronger digital foundation through two focused divisions:
                <span className="font-medium text-teal-200"> R43 Creative</span> for websites and digital presence,
                and <span className="font-medium text-cyan-200"> R43 Ops</span> for custom software, workflows,
                dashboards, and operational systems.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#divisions"
                  className="inline-flex items-center rounded-md bg-teal-600/90 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
                >
                  View divisions
                </a>
                <a
                  href="#background"
                  className="inline-flex items-center rounded-md border border-slate-700 bg-[#0f1418] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-teal-600/60 hover:text-teal-100"
                >
                  Read background
                </a>
              </div>
            </div>
          </div>

          <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
        </section>

        <section id="divisions" className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-teal-200 md:text-3xl">
                Two focused divisions
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400 md:text-base">
                R43 separates website work from software and operations work so businesses can quickly find the right service path.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {divisions.map((division) => {
                const isOps = division.name === "R43 Ops";

                return (
                  <article
                    key={division.name}
                    className="rounded-2xl border border-slate-800 bg-[#0f1416] p-6"
                  >
                    <div className="text-sm uppercase tracking-[0.16em] text-slate-500">
                      {division.label}
                    </div>

                    <h3 className={isOps ? "mt-2 text-2xl font-bold text-cyan-200" : "mt-2 text-2xl font-bold text-teal-200"}>
                      {division.name}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-slate-400">
                      {division.text}
                    </p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {division.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-slate-300/90">
                          <span className={isOps ? "mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400" : "mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400"} />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={division.link}
                      className="mt-6 inline-flex rounded-md border border-slate-700 bg-[#0b1013] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-teal-500/60 hover:text-teal-200"
                    >
                      {division.linkText}
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="h-px w-full bg-slate-800/70" />
        </section>

        <section className="bg-[#0a0f12]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="text-2xl font-bold text-teal-200 md:text-3xl">
                  What R43 stands for
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                  Technology should make the business easier to operate. R43 focuses on clear, useful,
                  supportable solutions rather than flashy systems that are hard to maintain.
                </p>
              </div>

              <div className="grid gap-4">
                {values.map((value) => (
                  <article
                    key={value.title}
                    className="rounded-xl border border-slate-800 bg-[#0f1416] p-5"
                  >
                    <h3 className="text-lg font-semibold text-teal-200">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {value.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-slate-800/70" />
        </section>

        <section id="background" className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-2xl border border-slate-800 bg-[#0f1416] p-6 md:p-8">
                <h2 className="text-2xl font-bold text-teal-200 md:text-3xl">
                  Built from operations, IT, and software experience
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-slate-300/90 md:text-base">
                  R43 Digital Tech is built from a mix of operations, IT, and software experience. That background
                  shapes the way projects are approached: practical first, documented clearly, and designed around
                  how people actually work.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-300/90 md:text-base">
                  The goal is not just to create websites or software. The goal is to help businesses build tools
                  that improve credibility, organization, workflow, visibility, and long-term supportability.
                </p>

                <blockquote className="mt-6 rounded-xl border border-teal-700/30 bg-[#0d1619] p-5 text-sm leading-relaxed text-teal-200">
                  “Technology should serve the business — not the other way around.”
                </blockquote>
              </article>

              <aside className="rounded-2xl border border-slate-800 bg-[#0f1416] p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Background
                </h3>

                <ul className="mt-5 space-y-4">
                  {timeline.map((row) => (
                    <li key={row.title} className="flex items-start gap-3">
                      <span className="mt-1 h-[10px] w-[10px] rounded-sm bg-gradient-to-br from-teal-400 to-cyan-500" />
                      <div>
                        <div className="font-semibold text-slate-200">
                          {row.title}
                        </div>
                        <div className="mt-1 text-sm leading-relaxed text-slate-400">
                          {row.text}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>

          <div className="h-px w-full bg-slate-800/70" />
        </section>

        <section className="bg-[#0a0f12]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-2xl border border-slate-800 bg-[#0f1416] p-6">
                <h2 className="text-2xl font-bold text-teal-200">
                  Certifications
                </h2>

                <ul className="mt-5 grid gap-3 text-sm text-slate-300/90 sm:grid-cols-2">
                  {certifications.map((certification) => (
                    <li key={certification} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      {certification}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-800 bg-[#0f1416] p-6">
                <h2 className="text-2xl font-bold text-teal-200">
                  Preferred stack
                </h2>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300/90 sm:grid-cols-4">
                  {stack.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-slate-800 bg-[#0b1013] p-3 text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
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

export default About;