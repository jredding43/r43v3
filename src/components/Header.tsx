import React from "react";
import logoUrl from "../assets/newlogo.png"; 

type HeaderProps = {
  brand?: string;
  locationNote?: string;
  logoSrc?: string;
  logoAlt?: string;
};

const Header: React.FC<HeaderProps> = ({
  brand = "R43 Digital Tech",
  locationNote = "",
  logoSrc,
  logoAlt = "R43 Digital Tech logo",
}) => {
  const resolvedLogo = logoSrc ?? logoUrl;

  return (
    <header className="w-full bg-[#0a0f12] text-slate-100 font-['Roboto'] border-b border-slate-800/70">
      {/* make this relative so the location tag anchors correctly */}
      <div className="relative mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between px-6 py-5">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-4">
          <img
            src={resolvedLogo}
            alt={logoAlt}
            className="h-20 md:h-24 w-auto"
          />
          <h1
            className="text-3xl md:text-4xl font-bold tracking-[0.08em]
                       bg-gradient-to-r from-[#20f1d8] via-[#38b9b2] to-[#5f9ea0]
                       text-transparent bg-clip-text 
                       drop-shadow-[0_1px_3px_rgba(0,255,255,0.25)]
                       uppercase select-none"
          >
            {brand}
          </h1>
        </div>

        <div
        className="absolute bottom-2 right-12 md:right-10
                    flex items-center gap-3 text-[13px] md:text-[14px]
                    text-teal-300/80 tracking-wide"
        >
        <span className="h-px w-14 bg-teal-500/30" aria-hidden />
        <span className="whitespace-normal break-words max-w-[min(80vw,32rem)] leading-tight">
            {locationNote}
        </span>
        </div>
        </div>


      {/* Accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
    </header>
  );
};

export default Header;
