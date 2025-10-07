import React from "react";
import { Helmet } from "react-helmet-async";
import CTA from "../components/CTA";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About — R43 Digital Tech</title>
        <meta
          name="description"
          content="R43 Digital Tech: software and ad solutions for local businesses. Founded April 2025 in Stevens County. Trustworthy, precise, practical delivery."
        />
      </Helmet>

      <main className="font-['Roboto'] text-slate-200">
        {/* Hero / Intro */}
        <section className="bg-[#0a0f12] border-b border-slate-800/60">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-teal-700/30 bg-[#0f171a] px-3 py-1 text-[11px] tracking-wider uppercase text-teal-300/90">
                  Founded April 2025 • Stevens County
                </p>
                <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-[0.03em] text-teal-200">
                  Software & Ad Solutions for Local Businesses
                </h1>
                <p className="mt-3 max-w-2xl text-slate-300/90">
                  R43 Digital Tech helps small businesses launch, grow, and last — with clean websites,
                  reliable hosting, hands-on setup, and practical software. We build what you actually need,
                  not a one-size template.
                </p>
              </div>
              <div className="hidden md:block h-px flex-1 bg-slate-800/60" />
            </div>
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
        </section>

        {/* Values / Why R43 */}
        <section className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <h2 className="text-xl md:text-2xl font-bold text-teal-200">Why Choose R43 Digital</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-300/90">
                  {[
                    "Hands-on delivery — we collaborate, iterate, and hit the goals that matter.",
                    "Custom builds — no generic templates; solutions fit your business and budget.",
                    "Clear scope, fixed estimates, and reliable timelines — from intro to handoff.",
                  ].map((v) => (
                    <li key={v} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      {v}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6">
                <h2 className="text-xl md:text-2xl font-bold text-teal-200">Values</h2>
                <div className="mt-3 grid gap-3 text-sm">
                  <div>
                    <div className="font-semibold text-slate-200">Trustworthy</div>
                    <p className="text-slate-300/90">Upfront estimates, clear communication, documented delivery.</p>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">Precise</div>
                    <p className="text-slate-300/90">Right-sized solutions, attention to details that keep you online.</p>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">Practical</div>
                    <p className="text-slate-300/90">Useful over flashy — tools people actually use.</p>
                  </div>
                </div>
                <blockquote className="mt-5 rounded-md border border-teal-700/30 bg-[#0d1619] p-4 text-sm text-teal-200">
                  “Technology should serve the business — not the other way around.”
                </blockquote>
              </article>
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        {/* Story / Background */}
        <section className="bg-[#0a0f12]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-200">From Sawmill to Software</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_1fr]">
              <article className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6">
                <p className="text-slate-300/90">
                  I started my career in a sawmill facility, moved into mass timber, and then into IT —
                  eventually earning a BA in Software Engineering. That path means I understand operations
                  from the ground floor to the front office. R43 exists to give smaller businesses the
                  opportunity to build, grow, and last.
                </p>
                <p className="mt-3 text-slate-300/90">
                  Engagements begin with a free intro, followed by a fixed estimate and timeline.
                  You’ll get documentation and a 30-day adjustment window to make sure the solution matches
                  how you actually work.
                </p>
              </article>

              {/* Simple timeline */}
              <aside className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6">
                <h3 className="text-sm font-semibold tracking-wide text-slate-300 uppercase">Timeline</h3>
                <ul className="mt-3 space-y-3 text-sm text-slate-300/90">
                  {[
                    { t: "Early Career", d: "Sawmill operations — learned reliability and safety." },
                    { t: "Next", d: "Mass timber — process, quality, and team coordination." },
                    { t: "IT & Software", d: "Hands-on IT, then BA in Software Engineering." },
                    { t: "2025", d: "Founded R43 Digital Tech in Stevens County." },
                  ].map((row) => (
                    <li key={row.t} className="flex items-start gap-3">
                      <span className="mt-1 h-[10px] w-[10px] rounded-sm bg-gradient-to-br from-teal-400 to-cyan-500" />
                      <div>
                        <div className="font-semibold text-slate-200">{row.t}</div>
                        <div className="text-slate-400">{row.d}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        {/* Certifications / Stack */}
        <section className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6">
                <h2 className="text-xl md:text-2xl font-bold text-teal-200">Certifications</h2>
                <ul className="mt-4 grid gap-2 text-sm text-slate-300/90">
                  {[
                    "Ignition Certified",
                    "AWS Practitioner Certified",
                    "Project+ Certified",
                    "ITIL Certified",
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                      {c}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6">
                <h2 className="text-xl md:text-2xl font-bold text-teal-200">Preferred Stack</h2>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-300/90">
                  <div className="rounded-md border border-slate-800 bg-[#0b1012] p-3">React & Tailwind</div>
                  <div className="rounded-md border border-slate-800 bg-[#0b1012] p-3">.NET / Blazor</div>
                  <div className="rounded-md border border-slate-800 bg-[#0b1012] p-3">SQL</div>
                  <div className="rounded-md border border-slate-800 bg-[#0b1012] p-3">AWS / VPS</div>
                </div>
              </article>
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        {/* Coverage / CTA */}
        <section className="bg-[#0a0f12]">
          <CTA />
        </section>
      </main>
    </>
  );
};

export default About;
