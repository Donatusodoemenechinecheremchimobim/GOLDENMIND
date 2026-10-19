import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Brain, Home, Stethoscope, Video, PhoneCall } from 'lucide-react';
import { NAV_LINKS, CONDITIONS } from '../data/clinicalData';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0F1E19] text-slate-400 py-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#1F4738] flex items-center justify-center text-[#A7E3C9]">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="font-serif-clinical text-xl text-white font-medium">
                  Golden Mind Psychiatry
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">
                Compassionate, evidence-based psychiatric evaluations, medication management, and telehealth care for children, adolescents, and adults.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Site Pages</h4>
              <ul className="space-y-2 text-xs">
                {NAV_LINKS.map((p) => (
                  <li key={p.path}>
                    <Link to={p.path} className="hover:text-white transition">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Conditions Treated</h4>
              <ul className="space-y-2 text-xs">
                {CONDITIONS.map((c) => (
                  <li key={c.id}>
                    <Link to={`/conditions?condition=${c.id}`} className="hover:text-white transition">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Practice Hours & Contact</h4>
              <ul className="space-y-2 text-xs">
                <li className="text-white font-medium">Monday – Friday: 9:00 AM – 3:00 PM</li>
                <li>Phone: <a href="tel:4329343185" className="text-[#A7E3C9] hover:underline">(432) 934-3185</a></li>
                <li>Email: <a href="mailto:beehobs@yahoo.com" className="text-[#A7E3C9] hover:underline">beehobs@yahoo.com</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Golden Mind Psychiatry PLLC. All rights reserved.</p>
            <p>In a psychiatric or medical emergency, call or text 988 or dial 911 immediately.</p>
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM APP BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 px-2 py-1.5 shadow-[0_-8px_25px_rgba(15,30,25,0.08)]">
        <div className="grid grid-cols-5 gap-1 max-w-md mx-auto">
          {[
            { path: '/', label: 'Home', icon: Home },
            { path: '/services', label: 'Services', icon: Stethoscope },
            { path: '/conditions', label: 'Conditions', icon: Brain },
            { path: '/telehealth', label: 'Telehealth', icon: Video },
            { path: '/contact', label: 'Contact', icon: PhoneCall }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) =>
                  `py-2 px-1 rounded-xl flex flex-col items-center justify-center gap-1 transition ${
                    isActive ? 'bg-[#EAF3EE] text-[#1F4738] font-bold' : 'text-slate-500 font-medium'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span className="text-[10px] leading-none">{tab.label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
