import React from "react";
import { Link, useLocation } from "react-router-dom";

type NavItem = {
  label: string;
  href: string;
  eyebrow?: string;
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Creative", href: "/creative", eyebrow: "Web" },
  { label: "Ops", href: "/ops", eyebrow: "Software" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type SubHeaderProps = {
  items?: NavItem[];
};

const SubHeader: React.FC<SubHeaderProps> = ({ items = NAV }) => {
  const location = useLocation();
  const path = location.pathname.replace(/\/+$/, "") || "/";

  const isActive = (href: string) => {
    const target = href.replace(/\/+$/, "") || "/";
    if (target === "/") return path === "/";
    return path === target || path.startsWith(target + "/");
  };

  return (
    <nav
      className="w-full font-['Roboto'] border-y border-slate-800/70 bg-[#0a0f12]/95 text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
      aria-label="Primary navigation"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ul className="flex flex-wrap items-center justify-center gap-2 py-3 md:gap-3">
          {items.map((item) => {
            const active = isActive(item.href);

            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "group relative flex min-w-[92px] flex-col items-center justify-center rounded-lg border px-4 py-2 text-center transition-all duration-200",
                    active
                      ? "border-teal-500/40 bg-[#102123] text-teal-200 shadow-[0_0_18px_rgba(45,212,191,0.12)]"
                      : "border-transparent text-slate-400 hover:border-slate-700 hover:bg-[#0f1416] hover:text-slate-200",
                  ].join(" ")}
                >
                  {item.eyebrow && (
                    <span
                      className={[
                        "text-[10px] font-medium uppercase tracking-[0.18em]",
                        active ? "text-teal-300/90" : "text-slate-500 group-hover:text-teal-400/80",
                      ].join(" ")}
                    >
                      {item.eyebrow}
                    </span>
                  )}

                  <span className="text-sm font-semibold uppercase tracking-wide">
                    {item.label}
                  </span>

                  <span
                    aria-hidden
                    className={[
                      "absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-200",
                      active
                        ? "bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 opacity-100"
                        : "bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 opacity-0 group-hover:opacity-70",
                    ].join(" ")}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default SubHeader;