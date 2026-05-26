import React, { useState } from "react";

const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export type FAQItem = {
  q: string;
  a: string;
};

type FaqsProps = {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  id?: string;
  accent?: "teal" | "cyan";
};

const Faqs: React.FC<FaqsProps> = ({
  items,
  title = "Frequently Asked Questions",
  subtitle,
  id,
  accent = "teal",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accentClasses =
    accent === "cyan"
      ? {
          text: "text-cyan-200",
          border: "border-cyan-700/40",
          glow: "shadow-[0_0_18px_rgba(34,211,238,0.08)]",
          dot: "bg-cyan-400",
          hover: "hover:border-cyan-600/50",
        }
      : {
          text: "text-teal-200",
          border: "border-teal-700/40",
          glow: "shadow-[0_0_18px_rgba(45,212,191,0.08)]",
          dot: "bg-teal-400",
          hover: "hover:border-teal-600/50",
        };

  return (
    <section
      id={id}
      className="border-t border-slate-800/60 bg-[#0a0f12]"
    >
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className={`text-2xl md:text-3xl font-bold ${accentClasses.text}`}>
            {title}
          </h2>

          {subtitle && (
            <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-400">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Items */}
        <div className="mt-8 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.q}
                className={[
                  "overflow-hidden rounded-2xl border bg-[#0f1416] transition-all duration-200",
                  isOpen
                    ? `${accentClasses.border} ${accentClasses.glow}`
                    : `border-slate-800 ${accentClasses.hover}`,
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-[9px] h-2 w-2 rounded-full ${accentClasses.dot}`}
                    />

                    <span className="text-base font-semibold text-slate-100">
                      {item.q}
                    </span>
                  </div>

                  <ChevronDown
                    className={[
                      "h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                <div
                  className={[
                    "grid transition-all duration-300 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-800/70 px-5 py-4">
                      <p className="text-sm leading-relaxed text-slate-300/90">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-px w-full bg-slate-800/60" />
    </section>
  );
};

export default Faqs;