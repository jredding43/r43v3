import React from "react";
import { Link } from "react-router-dom";
import logoUrl from "../assets/newlogo.png";

type HeaderProps = {
  brand?: string;
  locationNote?: string;
  logoSrc?: string;
  logoAlt?: string;
};

const Header: React.FC<HeaderProps> = ({
  brand = "R43 Digital Tech",
  locationNote = "Websites • Software • Operational Systems",
  logoSrc,
  logoAlt = "R43 Digital Tech logo",
}) => {
  const resolvedLogo = logoSrc ?? logoUrl;

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="w-full border-b border-slate-800/70 bg-[#0a0f12] font-['Roboto'] text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        {/* ===== Top Header ===== */}
        <div className="flex flex-col gap-6 py-5 md:flex-row md:items-center md:justify-between">
          {/* ===== Brand ===== */}
          <Link
            to="/"
            onClick={handleTop}
            className="group flex items-center gap-4"
          >
            <img
              src={resolvedLogo}
              alt={logoAlt}
              className="h-20 w-auto transition duration-300 group-hover:scale-[1.02] md:h-24"
            />

            <div>
              <h1
                className="
                  bg-gradient-to-r
                  from-[#20f1d8]
                  via-[#38b9b2]
                  to-[#5f9ea0]
                  bg-clip-text
                  text-3xl
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-transparent
                  drop-shadow-[0_1px_3px_rgba(0,255,255,0.25)]
                  transition
                  duration-300
                  group-hover:brightness-110
                  md:text-4xl
                "
              >
                {brand}
              </h1>

              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                R43 Creative • R43 Ops
              </div>
            </div>
          </Link>

          {/* ===== Right Side ===== */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-slate-500 md:text-xs">
              <span className="rounded-full border border-teal-700/30 bg-[#0f171a] px-3 py-1 text-teal-300/90">
                Professional Websites
              </span>

              <span className="rounded-full border border-cyan-700/30 bg-[#0f171a] px-3 py-1 text-cyan-300/90">
                Operational Software
              </span>
            </div>

            <div className="flex items-center gap-3 text-[13px] tracking-wide text-slate-400">
              <span
                className="hidden h-px w-12 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 md:block"
                aria-hidden
              />

              <span className="leading-tight">
                {locationNote}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Accent Line ===== */}
      <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
    </header>
  );
};

export default Header;