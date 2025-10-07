import React from "react";

export type FAQItem = { q: string; a: string };

type FaqsProps = {
  items: FAQItem[];
  title?: string;
  id?: string; // optional anchor id (e.g., "faqs")
};

const Faqs: React.FC<FaqsProps> = ({ items, title = "Frequently Asked Questions", id }) => {
  return (
    <section id={id} className="bg-[#0a0f12]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-200">{title}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {items.map(({ q, a }) => (
            <div key={q} className="rounded-lg border border-slate-800 bg-[#0f1416] p-5">
              <div className="text-base font-semibold text-slate-200">{q}</div>
              <p className="mt-2 text-sm text-slate-300/90">{a}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-slate-800/60" />
    </section>
  );
};

export default Faqs;
