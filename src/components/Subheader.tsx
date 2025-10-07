import React from "react";
import { Link, useLocation } from "react-router-dom";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type SubHeaderProps = {
  items?: NavItem[];
};

const SubHeader: React.FC<SubHeaderProps> = ({ items = NAV }) => {
  const location = useLocation();

  // Normalized path (no trailing slash unless it's root)
  const path = location.pathname.replace(/\/+$/, "") || "/";

  const isActive = (href: string) => {
    const target = href.replace(/\/+$/, "") || "/";
    if (target === "/") return path === "/"; // Home should only match exact "/"
    return path === target || path.startsWith(target + "/"); // match subroutes
  };

  return (
    <nav
      className="w-full font-['Roboto'] border-t border-slate-800/70 border-b 
                 bg-gradient-to-b from-[#0f1416] to-[#0a0f12] text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
      aria-label="Primary navigation"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-10 py-3 md:py-4">
          {items.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className={[
                    "relative block px-4 py-2 text-sm md:text-base font-medium uppercase tracking-wide rounded-md transition-all duration-300",
                    active
                      ? "bg-[#162427] text-teal-300 shadow-[inset_0_1px_4px_rgba(0,255,255,0.3)]"
                      : "text-slate-300 hover:text-teal-200",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {/* Hover “plate” */}
                  <span
                    aria-hidden
                    className={[
                      "absolute inset-0 bg-gradient-to-r from-[#102123] via-[#143537] to-[#102123]",
                      "opacity-0 translate-y-3 scale-95 rounded-md blur-[0.5px]",
                      "group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100",
                      "transition-all duration-300 ease-out",
                      active ? "opacity-100 translate-y-0 scale-100" : "",
                    ].join(" ")}
                  />

                  {/* Text */}
                  <span className="relative z-10">{item.label}</span>

                  {/* Top accent */}
                  <span
                    aria-hidden
                    className={[
                      "absolute top-0 left-0 h-[2px] w-full rounded-t-md transition-all duration-300 ease-out",
                      active
                        ? "bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500"
                        : "group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:via-cyan-400 group-hover:to-teal-500",
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
