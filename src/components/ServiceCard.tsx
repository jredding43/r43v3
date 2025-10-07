import React from "react";
import type { Service } from "../data/services";

type Props = { service: Service };

const ServiceCard: React.FC<Props> = ({ service }) => {
  const { title, summary, deliverables, outcomes, notes } = service;

  return (
    <article className="group rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-transform duration-200 hover:-translate-y-[2px]">
      <div className="flex items-center gap-3">
        <div className="h-[10px] w-[10px] rounded-sm bg-gradient-to-br from-teal-400 to-cyan-500 shadow-[0_0_10px_rgba(45,212,191,0.35)]" />
        <h3 className="text-xl font-semibold text-teal-300">{title}</h3>
      </div>

      <p className="mt-3 text-sm text-slate-300/90">{summary}</p>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold text-slate-200">Deliverables</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-300/90">
            {deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-200">Expected Outcomes</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-300/90">
            {outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {notes?.length ? (
        <div className="mt-5 rounded-md border border-slate-800 bg-[#0b1012] p-3">
          <h5 className="text-xs font-semibold uppercase tracking-wide text-slate-300">Notes</h5>
          <ul className="mt-2 space-y-1 text-xs text-slate-400">
            {notes.map((n) => (
              <li key={n} className="list-disc list-inside">{n}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
};

export default ServiceCard;
