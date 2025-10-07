import React from "react";
import { FaFacebookF} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0f12] border-t border-slate-800/70 text-slate-300 font-['Roboto']">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent mb-3">
            R43 Digital Tech
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Delivering software and ad solutions for local businesses across
            Stevens County and beyond. Precision, practicality, and reliability
            — built into everything we do.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-teal-300 mb-3 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-teal-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-teal-400 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-teal-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-teal-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-teal-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold text-teal-300 mb-3 uppercase tracking-wide">
            Connect
          </h3>
          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-4 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61574246566116"
                className="hover:text-teal-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
      
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />

      {/* Bottom Section */}
      <div className="text-center text-xs md:text-sm text-slate-500 py-4">
        © {new Date().getFullYear()} R43 Digital Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
