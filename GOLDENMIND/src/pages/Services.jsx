import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, CheckCircle2, Calendar, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/clinicalData';

export default function Services({ onOpenBooking }) {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      <section className="bg-[#132A21] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#A7E3C9] text-xs font-semibold">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Comprehensive Mental Health Services</span>
            </div>
            <h1 className="font-serif-clinical text-4xl sm:text-5xl lg:text-6xl font-medium">
              Our Clinical Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Detailed psychiatric evaluations, personalized pharmacotherapy, specialized child and adolescent care, and confidential telehealth—delivered with clinical rigor and warmth.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SERVICES.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white rounded-[2rem] border border-slate-200/90 shadow-md overflow-hidden"
            >
              <div className="grid lg:grid-cols-12">
                <div className={`lg:col-span-5 relative min-h-[280px] bg-slate-900 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E19]/85 via-[#0F1E19]/20 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#1F4738] text-xs font-bold shadow-sm">
                      {service.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between text-xs">
                    <span className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md font-semibold">
                      ⏱ {service.duration}
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md font-semibold">
                      📍 {service.format}
                    </span>
                  </div>
                </div>

                <div className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 text-[#1F4738] text-xs font-bold uppercase tracking-widest">
                      <IconComponent className="w-4 h-4" />
                      <span>{service.subtitle}</span>
                    </div>
                    <h2 className="font-serif-clinical text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 pt-2">
                    <div className="bg-[#F2F7F4] p-5 rounded-2xl border border-[#D5E6DD]">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#153327] mb-3">
                        What Happens in Session
                      </h3>
                      <ul className="space-y-2">
                        {service.whatHappens.map((point, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#1F4738] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#F9FBF9] p-5 rounded-2xl border border-slate-200/80">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                        How to Prepare
                      </h3>
                      <ul className="space-y-2">
                        {service.howToPrepare.map((prep, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1F4738] mt-2 shrink-0" />
                            <span>{prep}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                    <button
                      onClick={() => onOpenBooking({ concern: service.title })}
                      className="px-6 py-3.5 rounded-2xl bg-[#1F4738] hover:bg-[#153327] text-white font-semibold text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-[#A7E3C9]" />
                      <span>Schedule {service.title.split('&')[0]}</span>
                    </button>
                    <Link
                      to="/patients"
                      className="text-xs font-bold text-[#1F4738] hover:underline flex items-center gap-1"
                    >
                      <span>View New Patient FAQs</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
