import React, { useState } from "react";
import type { FormEvent } from "react";
import { Helmet } from "react-helmet-async";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzzerrrd";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setError(json?.errors?.[0]?.message ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact — R43 Digital Tech</title>
        <meta
          name="description"
          content="Contact R43 Digital Tech for website projects through R43 Creative or custom software and operational systems through R43 Ops."
        />
      </Helmet>

      <main className="font-['Roboto'] text-slate-200">
        <section className="relative overflow-hidden border-b border-slate-800/70 bg-[#080d10]">
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-teal-400 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center rounded-full border border-teal-700/30 bg-[#0f171a] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-teal-300/90">
                Contact R43 Digital Tech
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-teal-100 md:text-5xl">
                Tell me what you are trying to build or improve.
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300/90 md:text-lg">
                Use the form below for website projects, hosting support, custom software, workflow systems,
                dashboards, or general business technology questions.
              </p>
            </div>
          </div>

          <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
        </section>

        <section className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <aside className="rounded-2xl border border-slate-800 bg-[#0f1416]/95 p-6">
                <h2 className="text-xl font-bold text-teal-200">
                  Choose the right path
                </h2>

                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-slate-800 bg-[#0b1013] p-4">
                    <div className="text-sm font-semibold text-teal-300">
                      R43 Creative
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      Websites, hosting, contact forms, business pages, and ongoing website support.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-[#0b1013] p-4">
                    <div className="text-sm font-semibold text-cyan-300">
                      R43 Ops
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      Custom software, dashboards, workflow systems, reporting, and operational tools.
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-px w-full bg-slate-800/70" />

                <p className="mt-5 text-sm leading-relaxed text-slate-400">
                  After reviewing your request, R43 will help determine whether it fits best under Creative,
                  Ops, or a combined project.
                </p>
              </aside>

              <div className="rounded-2xl border border-slate-800 bg-[#0f1416]/95 p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                {status === "success" ? (
                  <div className="rounded-xl border border-teal-700/40 bg-[#0d1619] p-5">
                    <h2 className="text-lg font-semibold text-teal-200">
                      Thank you!
                    </h2>
                    <p className="mt-2 text-sm text-slate-300/90">
                      Your message has been sent. I will review your request and follow up with a clear next step.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="grid gap-6">
                    <input type="hidden" name="_subject" value="New inquiry — R43 Digital Tech" />
                    <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm text-slate-300">
                          Name <span className="text-teal-400">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          className="rounded-md border border-slate-700 bg-[#0b1012] px-3 py-2 text-sm text-slate-200 outline-none focus:border-teal-500"
                          placeholder="Jane Doe"
                        />
                      </div>

                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm text-slate-300">
                          Email <span className="text-teal-400">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="rounded-md border border-slate-700 bg-[#0b1012] px-3 py-2 text-sm text-slate-200 outline-none focus:border-teal-500"
                          placeholder="jane@company.com"
                        />
                      </div>

                      <div className="grid gap-2">
                        <label htmlFor="phone" className="text-sm text-slate-300">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          className="rounded-md border border-slate-700 bg-[#0b1012] px-3 py-2 text-sm text-slate-200 outline-none focus:border-teal-500"
                          placeholder="(509) 555-0138"
                        />
                      </div>

                      <div className="grid gap-2">
                        <label htmlFor="company" className="text-sm text-slate-300">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          className="rounded-md border border-slate-700 bg-[#0b1012] px-3 py-2 text-sm text-slate-200 outline-none focus:border-teal-500"
                          placeholder="Company or organization"
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="division" className="text-sm text-slate-300">
                        Which side of R43 does this fit?
                      </label>
                      <select
                        id="division"
                        name="division"
                        className="rounded-md border border-slate-700 bg-[#0b1012] px-3 py-2 text-sm text-slate-200 outline-none focus:border-teal-500"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a division…
                        </option>
                        <option>R43 Creative — Websites & digital presence</option>
                        <option>R43 Ops — Software & operational systems</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="service" className="text-sm text-slate-300">
                        What do you need help with?
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="rounded-md border border-slate-700 bg-[#0b1012] px-3 py-2 text-sm text-slate-200 outline-none focus:border-teal-500"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a project type…
                        </option>
                        <option>New business website</option>
                        <option>Website refresh</option>
                        <option>Hosting / domain / DNS support</option>
                        <option>Contact forms or quote request forms</option>
                        <option>Website maintenance</option>
                        <option>Custom software</option>
                        <option>Dashboard or reporting tool</option>
                        <option>Workflow or task system</option>
                        <option>Internal business tool</option>
                        <option>Other / not sure yet</option>
                      </select>
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="timeline" className="text-sm text-slate-300">
                        Desired timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        className="rounded-md border border-slate-700 bg-[#0b1012] px-3 py-2 text-sm text-slate-200 outline-none focus:border-teal-500"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a timeline…
                        </option>
                        <option>As soon as practical</option>
                        <option>Within 2–4 weeks</option>
                        <option>Within 1–3 months</option>
                        <option>Planning for later</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm text-slate-300">
                        Briefly describe your project <span className="text-teal-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="rounded-md border border-slate-700 bg-[#0b1012] px-3 py-2 text-sm text-slate-200 outline-none focus:border-teal-500"
                        placeholder="Tell me what you need, what is not working today, or what you are trying to improve…"
                      />
                    </div>

                    <div className="flex items-start gap-2">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-slate-700 bg-[#0b1012] text-teal-500 focus:ring-0"
                      />
                      <label htmlFor="consent" className="text-xs text-slate-400">
                        You may contact me about this request. No spam.
                      </label>
                    </div>

                    {status === "error" && (
                      <div className="rounded-md border border-red-500/40 bg-red-900/20 px-3 py-2 text-sm text-red-200">
                        {error}
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="inline-flex items-center rounded-md bg-teal-600/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-500 disabled:opacity-60"
                      >
                        {status === "loading" ? "Sending…" : "Send message"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;