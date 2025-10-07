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
          content="Contact R43 Digital Tech for websites & hosting, POS, task management, LocalDocs, and custom Blazor apps."
        />
      </Helmet>

      <main className="font-['Roboto'] text-slate-200">
        {/* Header band */}
        <section className="bg-[#0a0f12] border-b border-slate-800/60">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-[0.03em] text-teal-200">
                  Contact
                </h1>
                <p className="mt-2 text-sm text-slate-300/90">
                  Tell me what you're trying to solve. You'll get a clear next step and estimate.
                </p>
              </div>
              <div className="hidden md:block h-px flex-1 bg-slate-800/60" />
            </div>
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
        </section>

        {/* Form */}
        <section className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              {status === "success" ? (
                <div className="rounded-md border border-teal-700/40 bg-[#0d1619] p-5">
                  <h2 className="text-lg font-semibold text-teal-200">Thank you!</h2>
                  <p className="mt-2 text-sm text-slate-300/90">
                    Your message has been sent. I'll get back to you soon. {" "}
             
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-6">
                  {/* hidden fields */}
                  <input type="hidden" name="_subject" value="New inquiry — R43 Digital Tech" />
                  {/* Honeypot (bot trap) */}
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
                      <label htmlFor="phone" className="text-sm text-slate-300">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        className="rounded-md border border-slate-700 bg-[#0b1012] px-3 py-2 text-sm text-slate-200 outline-none focus:border-teal-500"
                        placeholder="(509) 555-0138"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label htmlFor="company" className="text-sm text-slate-300">Company</label>
                      <input
                        id="company"
                        name="company"
                        className="rounded-md border border-slate-700 bg-[#0b1012] px-3 py-2 text-sm text-slate-200 outline-none focus:border-teal-500"
                        placeholder="Acme Fabrication"
                      />
                    </div>
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
                      <option value="" disabled>Select a service…</option>
                      <option>Websites & Hosting</option>
                      <option>Business Setup & Support</option>
                      <option>Point-of-Sale (POS)</option>
                      <option>Task Manager</option>
                      <option>LocalDocs (On-Prem Files)</option>
                      <option>Blazor Business App (Heavier Tracking)</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="budget" className="text-sm text-slate-300">Approx. budget</label>
                    <select
                      id="budget"
                      name="budget"
                      className="rounded-md border border-slate-700 bg-[#0b1012] px-3 py-2 text-sm text-slate-200 outline-none focus:border-teal-500"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a range…</option>
                      <option>Under $1,000</option>
                      <option>$1,000 - $3,000</option>
                      <option>$3,000 - $7,500</option>
                      <option>$7,500 - $15,000</option>
                      <option>$15,000+</option>
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
                      rows={5}
                      className="rounded-md border border-slate-700 bg-[#0b1012] px-3 py-2 text-sm text-slate-200 outline-none focus:border-teal-500"
                      placeholder="Website refresh, POS rollout, or a Blazor app for asset tracking…"
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
                      You may contact me about this request. (No spam.)
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
                      className="inline-flex items-center rounded-md bg-teal-600/90 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-500 disabled:opacity-60"
                    >
                      {status === "loading" ? "Sending…" : "Send message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
