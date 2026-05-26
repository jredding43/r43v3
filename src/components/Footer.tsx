import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";

const Footer: React.FC = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800/70 bg-[#0a0f12] font-['Roboto'] text-slate-300">
      {/* ===== Main Footer ===== */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* ===== Brand ===== */}
          <div className="md:col-span-1">
            <h2 className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
              R43 Digital Tech
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A technology company focused on professional websites, operational
              software, dashboards, workflows, and practical business systems.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61574246566116"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-[#0f1416] text-slate-300 transition hover:border-teal-500/60 hover:text-teal-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
            </div>
          </div>

          {/* ===== Company ===== */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  onClick={handleTop}
                  className="text-slate-400 transition hover:text-teal-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  onClick={handleTop}
                  className="text-slate-400 transition hover:text-teal-300"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={handleTop}
                  className="text-slate-400 transition hover:text-teal-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={handleTop}
                  className="text-slate-400 transition hover:text-teal-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== R43 Creative ===== */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
              R43 Creative
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  to="/creative"
                  onClick={handleTop}
                  className="text-slate-400 transition hover:text-teal-300"
                >
                  Websites
                </Link>
              </li>

              <li>
                <Link
                  to="/creative"
                  onClick={handleTop}
                  className="text-slate-400 transition hover:text-teal-300"
                >
                  Hosting & Launch
                </Link>
              </li>

              <li>
                <Link
                  to="/creative"
                  onClick={handleTop}
                  className="text-slate-400 transition hover:text-teal-300"
                >
                  Contact Forms
                </Link>
              </li>

              <li>
                <Link
                  to="/creative"
                  onClick={handleTop}
                  className="text-slate-400 transition hover:text-teal-300"
                >
                  Website Support
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== R43 Ops ===== */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              R43 Ops
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  to="/ops"
                  onClick={handleTop}
                  className="text-slate-400 transition hover:text-cyan-300"
                >
                  Dashboards
                </Link>
              </li>

              <li>
                <Link
                  to="/ops"
                  onClick={handleTop}
                  className="text-slate-400 transition hover:text-cyan-300"
                >
                  Workflow Systems
                </Link>
              </li>

              <li>
                <Link
                  to="/ops"
                  onClick={handleTop}
                  className="text-slate-400 transition hover:text-cyan-300"
                >
                  Operational Software
                </Link>
              </li>

              <li>
                <Link
                  to="/ops"
                  onClick={handleTop}
                  className="text-slate-400 transition hover:text-cyan-300"
                >
                  Internal Tools
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Accent Line ===== */}
      <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />

      {/* ===== Bottom Footer ===== */}
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-slate-500 md:flex-row">
          <div>
            © {new Date().getFullYear()} R43 Digital Tech LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Websites • Software • Operational Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;