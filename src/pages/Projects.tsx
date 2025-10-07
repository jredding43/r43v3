import React from "react";
import { Helmet } from "react-helmet-async";
import CTA from "../components/CTA";

const sections = {
  overview: {
    title: "How Projects Work",
    body:
      "Every project is scoped clearly, documented thoroughly, and delivered with predictable steps. You’ll always know what we’re building, what it costs, and what comes next.",
    bullets: [
      "Straightforward scope and estimates",
      "Clear communication and change control",
      "Documentation at every stage",
    ],
  },
  engagement: [
    {
      title: "Engagement Models",
      text:
        "Choose the right shape for your work. Smaller website or setup jobs fit fixed-scope. Larger software or Blazor builds often run phased to reduce risk and validate early.",
      list: [
        "Fixed-scope (website, POS rollout, LocalDocs setup)",
        "Phased delivery (modules / milestones for Blazor or larger builds)",
        "Advisory retainers (monthly support, roadmap, improvements)",
      ],
    },
    {
      title: "Typical Timeline",
      text:
        "Time varies with scope, but we aim for short, well-defined cycles with visible progress and demos.",
      list: [
        "Discovery & estimate: 2–5 days",
        "Implementation window: 1–6 weeks (phased for bigger work)",
        "Handoff & support: same week as delivery",
      ],
    },
    {
      title: "Communication",
      text:
        "One owner, one channel. We use concise weekly updates and a shared checklist so nothing is missed.",
      list: [
        "Single point of contact",
        "Weekly status (done / next / risks)",
        "Shared task list & change log",
      ],
    },
    {
      title: "Deliverables",
      text:
        "You receive the finished work plus the operational pieces to keep it running—credentials, diagrams, and a brief runbook.",
      list: [
        "Working site/app or configured system",
        "Credentials & account ownership documented",
        "Runbook/README and basic training",
      ],
    },
  ],
  controls: [
    {
      title: "Scope & Changes",
      text:
        "Requests are captured, sized, and either swapped into scope or scheduled for a follow-up phase. No surprise invoices.",
      list: [
        "Written scope with acceptance criteria",
        "Change requests sized in hours or a small work package",
        "Sign-off before changes start",
      ],
    },
    {
      title: "Quality & Testing",
      text:
        "We test functionally and, for software, add basic unit or integration checks as appropriate. You validate against acceptance criteria.",
      list: [
        "Functional tests for key paths",
        "UAT checklist (you verify fit)",
        "Fix-forward window included",
      ],
    },
    {
      title: "Security & Access",
      text:
        "Least-privilege by default. Credentials are transferred at handoff and stored in your chosen password manager.",
      list: [
        "Least privilege roles and scoped keys",
        "HTTPS/SSL, patches, backups on by default",
        "Credential transfer & revocation checklist",
      ],
    },
    {
      title: "Documentation",
      text:
        "We leave things understandable. You’ll get enough detail to operate and extend without hunting for answers.",
      list: [
        "Architecture/diagram (where relevant)",
        "Accounts & DNS/hosting details",
        "Runbook: backup/restore, updates, contacts",
      ],
    },
  ],
  commercial: [
    {
      title: "Pricing",
      text:
        "Transparent estimates before work begins. Fixed price for clearly bounded scopes; time & materials for research-heavy items.",
      list: [
        "Upfront estimate or fixed bid for websites/rollouts",
        "Phased budgets for Blazor/line-of-business apps",
        "No auto-renewing surprises",
      ],
    },
    {
      title: "Invoicing",
      text:
        "Milestone-based or 50/50 for small projects. Managed services/hosting billed monthly.",
      list: [
        "Deposit for small fixed scopes",
        "Milestone billing for multi-phase builds",
        "Net-15 terms standard",
      ],
    },
    {
      title: "Support",
      text:
        "Post-launch, you can engage ad-hoc or via a small monthly plan for updates, monitoring, and incremental improvements.",
      list: [
        "Care plans for sites/hosting",
        "Ad-hoc tickets for changes",
        "Response targets agreed up front",
      ],
    },
  ],
};

const Projects: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Projects — How We Work | R43 Digital Tech</title>
        <meta
          name="description"
          content="R43 Digital Tech project approach: clear scope, phased delivery, documented handoff, and predictable support for websites, hosting, POS, LocalDocs, and Blazor apps."
        />
      </Helmet>

      <main className="font-['Roboto'] text-slate-200">
        {/* Header band */}
        <section className="bg-[#0a0f12] border-b border-slate-800/60">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-[0.03em] text-teal-200">
                  Projects: How We Work
                </h1>
                <p className="mt-2 max-w-2xl text-slate-300/90">
                  Industrial-grade delivery with clear scope, phased execution for bigger efforts,
                  and documentation so your team can operate confidently.
                </p>
              </div>
              <div className="hidden md:block h-px flex-1 bg-slate-800/60" />
            </div>
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
        </section>

        {/* Overview */}
        <section className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
              <div className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <h2 className="text-xl md:text-2xl font-bold text-teal-200">{sections.overview.title}</h2>
                <p className="mt-3 text-slate-300/90">{sections.overview.body}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-300/90">
                  {sections.overview.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6">
                <h3 className="text-sm font-semibold tracking-wide text-slate-300 uppercase">Typical Fit</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300/90">
                  {[
                    "Websites & reliable hosting",
                    "POS rollout or refresh",
                    "Task Manager or LocalDocs setup",
                    "Blazor app for heavier tracking",
                  ].map((v) => (
                    <li key={v} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      {v}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 h-px w-full bg-slate-800/60" />
                <div className="mt-4 text-xs text-slate-400">
                  Clear acceptance criteria and documented ownership at handoff.
                </div>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        {/* Engagement & Delivery */}
        <section className="bg-[#0a0f12]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-200">Engagement & Delivery</h2>
              <div className="hidden md:block h-px flex-1 bg-slate-800/60" />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {sections.engagement.map((card) => (
                <article
                  key={card.title}
                  className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-[10px] w-[10px] rounded-sm bg-gradient-to-br from-teal-400 to-cyan-500" />
                    <h3 className="text-lg font-semibold text-teal-300">{card.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-300/90">{card.text}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300/90">
                    {card.list.map((li) => (
                      <li key={li} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        {/* Controls & Documentation */}
        <section className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-200">Controls & Documentation</h2>
              <div className="hidden md:block h-px flex-1 bg-slate-800/60" />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {sections.controls.map((card) => (
                <article
                  key={card.title}
                  className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-[10px] w-[10px] rounded-sm bg-gradient-to-br from-teal-400 to-cyan-500" />
                    <h3 className="text-lg font-semibold text-teal-300">{card.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-300/90">{card.text}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300/90">
                    {card.list.map((li) => (
                      <li key={li} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        {/* Commercials */}
        <section className="bg-[#0a0f12]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-200">Pricing, Invoicing & Support</h2>
              <div className="hidden md:block h-px flex-1 bg-slate-800/60" />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {sections.commercial.map((card) => (
                <article
                  key={card.title}
                  className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  <h3 className="text-lg font-semibold text-teal-300">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-300/90">{card.text}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300/90">
                    {card.list.map((li) => (
                      <li key={li} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        {/* CTA */}
        <section id="contact" className="bg-[#0c1114]">
         <CTA />
        </section>
      </main>
    </>
  );
};

export default Projects;
