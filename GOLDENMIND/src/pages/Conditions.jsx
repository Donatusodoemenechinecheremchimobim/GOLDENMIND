import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Brain, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONDITIONS } from '../data/clinicalData';

export default function Conditions({ onOpenBooking }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCondition, setActiveCondition] = useState(CONDITIONS[0]);

  useEffect(() => {
    const queryCond = searchParams.get('condition');
    if (queryCond) {
      const found = CONDITIONS.find((c) => c.id === queryCond);
      if (found) setActiveCondition(found);
    }
  }, [searchParams]);

  const handleSelect = (cond) => {
    setActiveCondition(cond);
    setSearchParams({ condition: cond.id });
  };

  return (
    <div className="space-y-14 sm:space-y-20 pb-16">
      <section className="bg-[#132A21] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#A7E3C9] text-xs font-semibold">
              <Brain className="w-3.5 h-3.5" />
              <span>Evidence-Based Diagnostic & Treatment Protocols</span>
            </div>
            <h1 className="font-serif-clinical text-4xl sm:text-5xl lg:text-6xl font-medium">
              Conditions We Treat
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Select any condition below to explore our diagnostic framework, symptoms we evaluate, and how we personalize your treatment plan.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-4 mb-8 border-b border-slate-200">
          {CONDITIONS.map((cond) => {
            const isSelected = activeCondition.id === cond.id;
            return (
              <button
                key={cond.id}
                onClick={() => handleSelect(cond)}
                className={`px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#1F4738] text-white shadow-lg shadow-[#1F4738]/20'
                    : 'bg-white text-slate-600 hover:bg-[#F2F7F4] border border-slate-200/80'
                }`}
              >
                <span>{cond.name}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-5 relative min-h-[300px] bg-slate-900">
              <img
                src={activeCondition.image}
                alt={activeCondition.name}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E19] via-[#0F1E19]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 rounded-full bg-[#A7E3C9]/20 backdrop-blur-md text-[#A7E3C9] text-xs font-semibold inline-block">
                  {activeCondition.category}
                </span>
                <h2 className="font-serif-clinical text-3xl sm:text-4xl font-medium">
                  {activeCondition.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {activeCondition.tagline}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1F4738] mb-2">
                  Clinical Overview
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeCondition.overview}
                </p>
              </div>

              <div className="bg-[#F9FBF9] p-5 sm:p-6 rounded-2xl border border-slate-200/70">
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#1F4738]" />
                  Key Symptoms & Patterns We Evaluate
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeCondition.symptoms.map((sym, i) => (
                    <div key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1F4738] shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#F2F7F4] border border-[#D5E6DD]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F4738]">
                    01 • Diagnosis
                  </span>
                  <h5 className="font-bold text-slate-900 text-sm mt-1">Diagnostic Protocol</h5>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {activeCondition.diagnosticProcess}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F2F7F4] border border-[#D5E6DD]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F4738]">
                    02 • Medication
                  </span>
                  <h5 className="font-bold text-slate-900 text-sm mt-1">Pharmacotherapy</h5>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {activeCondition.pharmacotherapy}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F2F7F4] border border-[#D5E6DD]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F4738]">
                    03 • Whole-Person
                  </span>
                  <h5 className="font-bold text-slate-900 text-sm mt-1">Holistic Integration</h5>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {activeCondition.holisticSupport}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  Evaluations available for both adults (18+) and children/adolescents (ages 6–17).
                </p>
                <button
                  onClick={() => onOpenBooking({ concern: `${activeCondition.name} Evaluation` })}
                  className="px-6 py-3.5 rounded-xl bg-[#1F4738] hover:bg-[#153327] text-white text-sm font-semibold shadow-md transition flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Book {activeCondition.shortName} Evaluation</span>
                  <ArrowRight className="w-4 h-4 text-[#A7E3C9]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
