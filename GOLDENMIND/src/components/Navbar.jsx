import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Brain, Phone, Calendar, Menu, X, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import { NAV_LINKS } from '../data/clinicalData';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [crisisDismissed, setCrisisDismissed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const currentNavObj = NAV_LINKS.find((item) => item.path === location.pathname);

  return (
    <>
      {/* TOP CRISIS SAFETY BAR */}
      {!crisisDismissed && (
        <div className="bg-[#0F1E19] text-slate-200 text-xs sm:text-sm py-2.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              <p className="leading-snug">
                <span className="font-semibold text-white">24/7 Crisis Support:</span> If you are in immediate crisis, call or text{' '}
                <a href="tel:988" className="underline font-semibold text-teal-300 hover:text-white">
                  988
                </a>{' '}
                or dial 911.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300 text-xs">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                Mon–Fri: 9:00 AM – 3:00 PM
              </span>
              <button
                onClick={() => setCrisisDismissed(true)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
                aria-label="Dismiss crisis banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STICKY HEADER */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(15,30,25,0.06)] py-3 border-b border-slate-200/70'
            : 'bg-[#F8FAF9]/90 backdrop-blur-md py-4 border-b border-slate-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 text-left group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#234E3E] to-[#132C23] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-[#A7E3C9]" />
            </div>
            <div>
              <span className="font-serif-clinical text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 block leading-none">
                Golden Mind
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#234E3E] font-bold block mt-1">
                Psychiatry PLLC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Pills */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#EFF5F2] p-1.5 rounded-2xl border border-slate-200/60">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1F4738] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#1F4738] hover:bg-white/60'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:4329343185"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#1F4738] px-3 py-2.5 rounded-xl hover:bg-[#EAF3EE] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#1F4738]" />
              (432) 934-3185
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-[#1F4738] hover:bg-[#153327] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#A7E3C9]" />
              Book Intake
            </button>
          </div>

          {/* Mobile Triggers */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-2 rounded-xl bg-[#1F4738] text-white text-xs font-bold shadow-xs"
            >
              Book Visit
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-slate-900 text-white active:scale-95 transition"
              aria-label="Open Page Navigation Drawer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* BREADCRUMB BAR ON INNER PAGES */}
      {location.pathname !== '/' && (
        <div className="bg-white border-b border-slate-200/70 py-2.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-500">
              <Link to="/" className="hover:text-[#1F4738] font-semibold flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                Home
              </Link>
              <span>/</span>
              <span className="font-bold text-[#1F4738]">{currentNavObj?.label}</span>
            </div>
            <span className="hidden sm:inline text-slate-400">
              Golden Mind Psychiatry PLLC • Mon–Fri 9AM–3PM
            </span>
          </div>
        </div>
      )}

      {/* MOBILE SLIDE-OVER DRAWER */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
      >
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[86%] max-w-sm bg-white shadow-2xl flex flex-col justify-between p-6 transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#1F4738] flex items-center justify-center text-white">
                  <Brain className="w-5 h-5 text-[#A7E3C9]" />
                </div>
                <div>
                  <span className="font-serif-clinical text-lg font-semibold text-slate-900 block leading-none">
                    Golden Mind
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#1F4738] font-bold">
                    Site Pages
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-100 text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-1.5">
              {NAV_LINKS.map((page) => {
                const Icon = page.icon;
                return (
                  <NavLink
                    key={page.path}
                    to={page.path}
                    className={({ isActive }) =>
                      `w-full p-3.5 rounded-2xl flex items-center justify-between text-left transition ${
                        isActive
                          ? 'bg-[#1F4738] text-white font-bold shadow-md'
                          : 'hover:bg-[#F2F7F4] text-slate-800 font-semibold'
                      }`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-sm">{page.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className="pt-5 border-t border-slate-100 space-y-3">
            <a
              href="tel:4329343185"
              className="w-full py-3 px-4 rounded-2xl bg-[#EAF3EE] text-[#1F4738] font-bold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Clinic: (432) 934-3185
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 px-4 rounded-2xl bg-[#1F4738] text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#A7E3C9]" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
