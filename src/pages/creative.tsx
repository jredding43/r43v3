import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Faqs from "../components/FAQS";
import type { FAQItem } from "../components/FAQS";
import CTA from "../components/CTA";

const Creative: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      q: "What does R43 Creative do?",
      a: "R43 Creative builds professional websites and digital setups for small businesses, including hosting setup, domain/DNS configuration, SSL, contact forms, mobile-friendly layouts, and ongoing website support.",
    },
    {
      q: "Do you use Wix or Squarespace?",
      a: "No. R43 Creative focuses on custom-built websites and professional deployment workflows rather than drag-and-drop website builders.",
    },
    {
      q: "Can you host and maintain the website after launch?",
      a: "Yes. Hosting, SSL, form monitoring, backups, content updates, and ongoing maintenance can be handled through a monthly support plan.",
    },
    {
      q: "Can you add contact forms?",
      a: "Yes. Contact forms can be added for general inquiries, quote requests, service requests, and other simple business workflows.",
    },
  ];

  const services = [
    {
      title: "Business Websites",
      text: "Modern, mobile-friendly websites built to make your business look credible and easy to contact.",
      items: [
        "Home, services, about, and contact pages",
        "Responsive layouts",
        "Fast loading structure",
        "Clear calls to action",
      ],
    },
    {
      title: "Hosting & Launch Setup",
      text: "Technical setup handled properly so your site is live, secure, and connected to the right domain.",
      items: [
        "Domain and DNS setup",
        "SSL configuration",
        "GoDaddy hosting support",
        "GitHub-based code workflow",
      ],
    },
    {
      title: "Contact Forms",
      text: "Simple, reliable forms that help customers reach you without needing a full custom backend.",
      items: [
        "Formspree integration",
        "Quote request forms",
        "Spam protection",
        "Email notifications",
      ],
    },
    {
      title: "Maintenance & Updates",
      text: "Ongoing help after launch so your website stays current and supported.",
      items: [
        "Content updates",
        "Small layout changes",
        "Monitoring and troubleshooting",
        "Future improvements",
      ],
    },
  ];

  const solutions = [
    {
      name: "Starter Website",
      description:
        "For small businesses that need a clean, professional online presence without unnecessary complexity.",
      features: [
        "Core business pages",
        "Mobile-friendly design",
        "Contact form",
        "Basic SEO structure",
        "Hosting and launch setup",
      ],
    },
    {
      name: "Professional Website",
      description:
        "For established businesses that need stronger presentation, more complete structure, and room to grow.",
      features: [
        "Custom page layouts",
        "Expanded service pages",
        "Advanced forms",
        "Analytics setup",
        "Performance-focused build",
      ],
    },
    {
      name: "Managed Website Support",
      description:
        "For businesses that want ongoing support instead of managing the technical side themselves.",
      features: [
        "Hosting support",
        "SSL and form monitoring",
        "Content updates",
        "Backups",
        "Priority troubleshooting",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>R43 Creative — Professional Websites & Hosting</title>
        <meta
          name="description"
          content="R43 Creative builds professional websites, hosting setups, contact forms, and digital presence solutions for small businesses in Stevens County and surrounding areas."
        />
      </Helmet>

      <main className="font-['Roboto'] text-slate-200">
        <section className="relative overflow-hidden border-b border-slate-800/70 bg-[#080d10]">
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-teal-400 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="inline-flex items-center rounded-full border border-teal-700/30 bg-[#0f171a] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-teal-300/90">
                  R43 Creative
                </div>

                <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-teal-100 md:text-6xl">
                  Professional websites for businesses that need to look credible online.
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300/90 md:text-lg">
                  R43 Creative builds clean, modern websites with hosting setup, contact forms, mobile-friendly design,
                  and ongoing support for small businesses in Northeast Washington and surrounding areas.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#options"
                    className="inline-flex items-center rounded-md bg-teal-600/90 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500"
                  >
                    View website options
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-md border border-slate-700 bg-[#0f1418] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-teal-600/60 hover:text-teal-100"
                  >
                    Request a quote
                  </a>
                </div>

                <div className="mt-6 text-xs text-slate-400">
                  Websites • Hosting • Contact Forms • Maintenance
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#0f1416]/95 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Built for local business
                </h2>

                <ul className="mt-5 space-y-4 text-sm text-slate-300/90">
                  {[
                    "Custom-built pages instead of generic drag-and-drop templates",
                    "Hosting, domain, DNS, SSL, and launch support",
                    "Contact forms for leads, quote requests, and customer inquiries",
                    "Ongoing maintenance so you are not left managing everything alone",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 h-px w-full bg-slate-800/70" />

                <div className="mt-5 rounded-xl border border-slate-800 bg-[#0b1013] p-4">
                  <div className="text-sm font-semibold text-teal-300">
                    Part of R43 Digital Tech LLC
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    Need custom software instead of a website? Visit R43 Ops for dashboards, workflows, and internal systems.
                  </p>
                  <Link
                    to="/ops"
                    className="mt-3 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                  >
                    Explore R43 Ops →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
        </section>

        <section id="services" className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-teal-200 md:text-3xl">
                Website services
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400 md:text-base">
                R43 Creative focuses on business websites that are clean, supportable, and built around practical customer action.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="rounded-2xl border border-slate-800 bg-[#0f1416] p-6">
                  <div className="h-[10px] w-[10px] rounded-sm bg-gradient-to-br from-teal-400 to-cyan-500" />
                  <h3 className="mt-4 text-xl font-semibold text-teal-200">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {service.text}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-slate-300/90">
                    {service.items.map((item) => (
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

        <section id="options" className="bg-[#0a0f12]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-teal-200 md:text-3xl">
                  Website options
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Each website is scoped based on page count, content needs, integrations, and support requirements.
                </p>
              </div>
              <div className="hidden h-px flex-1 bg-slate-800/70 md:block" />
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {solutions.map((solution) => (
                <article key={solution.name} className="rounded-2xl border border-slate-800 bg-[#0f1416] p-6">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {solution.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {solution.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-slate-300/90">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-[#0f1416] p-6">
              <h3 className="text-lg font-semibold text-teal-200">
                Pricing is quoted after scope is reviewed
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Website projects vary depending on content, features, integrations, timeline, hosting needs,
                and ongoing support. After a short discovery conversation, R43 Creative provides a clear project quote.
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/70" />
        </section>

        <section className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="text-2xl font-bold text-teal-200 md:text-3xl">
                  How a website project works
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                  The goal is to keep the process simple: define what the business needs, build the right structure,
                  launch cleanly, and support it after it goes live.
                </p>
              </div>

              <ol className="grid gap-4">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    text: "Review your business, services, current online presence, competitors, and project goals.",
                  },
                  {
                    step: "02",
                    title: "Build",
                    text: "Create the site structure, design the pages, configure forms, and prepare hosting/deployment.",
                  },
                  {
                    step: "03",
                    title: "Launch",
                    text: "Connect the domain, verify SSL, test mobile layouts, test forms, and publish the site.",
                  },
                  {
                    step: "04",
                    title: "Maintain",
                    text: "Handle updates, small changes, troubleshooting, and future improvements through support plans.",
                  },
                ].map((item) => (
                  <li key={item.step} className="rounded-xl border border-slate-800 bg-[#0f1416] p-5">
                    <div className="text-sm font-semibold text-teal-400">
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
          accent="teal"
          title="Website Questions"
          subtitle="Common questions about websites, hosting, maintenance, and support."
        />

        <section id="contact" className="bg-[#0c1114]">
          <CTA />
        </section>
      </main>
    </>
  );
};

export default Creative;