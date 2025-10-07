import React from "react";
import { Link } from "react-router-dom";

type CTAProps = {
  title?: string;
  message?: string;
  primaryText?: string;
  secondaryText?: string;
  secondaryLink?: string;
};

const CTA: React.FC<CTAProps> = ({
  title = "Ready to talk?",
  message = "Tell me what you’re trying to solve. I’ll propose the simplest path forward.",
  primaryText = "Contact Me",
  secondaryText = "Explore Services",
  secondaryLink = "/services",
}) => {
  return (
    <section className="bg-[#0c1114] border-t border-slate-800/60">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="rounded-xl border border-slate-800 bg-[#0f1416]/95 p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] items-center">
            {/* Left Side */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-teal-200">
                {title}
              </h3>
              <p className="mt-2 text-sm text-slate-300/90">{message}</p>
            </div>

            {/* Right Side - Buttons */}
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              {/* Primary button always links to Contact page */}
              <Link
                to="/contact"
                className="rounded-md bg-teal-600/90 px-4 py-2 text-sm font-medium text-white hover:bg-teal-500 transition"
              >
                {primaryText}
              </Link>

              {secondaryLink && (
                <Link
                  to={secondaryLink}
                  className="rounded-md border border-slate-700 bg-[#0f1418] px-4 py-2 text-sm font-medium text-slate-200 hover:border-teal-600/50 transition"
                >
                  {secondaryText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
