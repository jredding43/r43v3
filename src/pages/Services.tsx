import React from "react";
import { Helmet } from "react-helmet-async";
import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services — R43 Digital Tech</title>
        <meta
          name="description"
          content="Detailed services from R43 Digital Tech: Websites & Hosting, Business Setup & Support, POS, Task Manager, LocalDocs, and Blazor business applications."
        />
      </Helmet>

      <main className="font-['Roboto'] text-slate-200">
        {/* Header band */}
        <section className="bg-[#0a0f12] border-b border-slate-800/60">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-[0.03em] text-teal-200">
                  Services
                </h1>
                <p className="mt-2 max-w-2xl text-slate-300/90">
                  Industrial-grade delivery with clear scope, documentation, and support. Choose what you need now and scale when you’re ready.
                </p>
              </div>
              <div className="hidden md:block h-px flex-1 bg-slate-800/60" />
            </div>
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
        </section>

        {/* Services grid */}
        <section className="bg-[#0c1114]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-slate-800/60" />
        </section>

        {/* CTA */}
        <section id="contact" className="bg-[#0a0f12]">
          <CTA />
        </section>
      </main>
    </>
  );
};

export default Services;
