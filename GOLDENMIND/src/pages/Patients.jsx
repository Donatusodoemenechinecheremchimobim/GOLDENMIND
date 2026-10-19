import React, { useState } from 'react';
import {
  ClipboardCheck,
  CreditCard,
  FileText,
  Clock,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Lock,
  Phone,
  ArrowRight
} from 'lucide-react';
import { FAQS } from '../data/clinicalData';

export default function Patients({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Page Hero Header */}
      <section className="bg-[#132A21] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#234E3E]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#A7E3C9] text-xs font-semibold">
              <ClipboardCheck className="w-3.5 h-3.5" />
              <span>Patient Orientation, Onboarding & Policies</span>
            </div>
            <h1 className="font-serif-clinical text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
              New Patient Center & FAQs
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Starting psychiatric care should feel clear, supportive, and stress-free. Here is everything you need to know before your first consultation at Golden Mind Psychiatry PLLC.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step New Patient Onboarding Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F4738]">
            Your Care Journey
          </span>
          <h2 className="font-serif-clinical text-3xl sm:text-4xl font-medium text-slate-900">
            How Your First Visit Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            We guide you through every step from initial booking to ongoing follow-up care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              step: 'Step 01',
              title: 'Schedule & Digital Intake',
              desc: 'Request your appointment online or by calling (432) 934-3185. Once confirmed, you will receive secure digital intake forms to complete privately on your phone or computer before your session.',
              img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80'
            },
            {
              step: 'Step 02',
              title: '60-Minute Diagnostic Evaluation',
              desc: 'Meet with your clinician in-clinic or via 1-click HIPAA telehealth video. We review your symptoms, medical history, sleep, and goals in a warm, unhurried conversation.',
              img: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=700&q=80'
            },
            {
              step: 'Step 03',
              title: 'Personalized Care & Follow-Up',
              desc: 'Together, we establish a tailored treatment plan. If medication is indicated, prescriptions are sent electronically to your preferred pharmacy, followed by regular supportive check-ins.',
              img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 bg-slate-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#1F4738] text-[#A7E3C9] text-xs font-bold">
                    {item.step}
                  </span>
                </div>
                <div className="p-6 sm:p-7 space-y-2.5">
                  <h3 className="font-serif-clinical text-2xl font-medium text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance, Billing & Practice Policies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EAF3EE] rounded-[2.25rem] p-6 sm:p-10 lg:p-12 border border-[#CBE2D6]">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F4738]">
                Transparent Practice Policies
              </span>
              <h2 className="font-serif-clinical text-3xl sm:text-4xl font-medium text-slate-900 leading-tight">
                Insurance, Billing & Clinical Guidelines
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe financial and scheduling policies should be clear and predictable so you can focus entirely on your mental health.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking({ concern: 'New Patient Intake Consultation' })}
                  className="inline-flex items-center gap-2 bg-[#1F4738] hover:bg-[#153327] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-2xl shadow-md transition cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#A7E3C9]" />
                  <span>Book Your Initial Intake</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#1F4738] flex items-center justify-center">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Insurance & Superbills</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Contact our office to verify accepted insurance coverage, self-pay rates, or itemized medical Superbills for out-of-network and HSA/FSA reimbursement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#1F4738] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">100% Digital Paperwork</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No clipboards or waiting rooms. All intake questionnaires, consent forms, and rating scales are completed online prior to your appointment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#1F4738] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">24-Hour Rescheduling</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Because we reserve a dedicated 60-minute block for new evaluations, please provide at least 24 business hours’ notice if you need to reschedule.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF3EE] text-[#1F4738] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Prescription Refill Policy</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Medications are refilled during scheduled follow-up visits to ensure safe monitoring. Please request any interim refills at least 3 business days in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1F4738]">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif-clinical text-3xl sm:text-4xl font-medium text-slate-900">
            Answers to Common Patient Questions
          </h2>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1F4738] block mb-1">
                      {faq.category}
                    </span>
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#1F4738] text-white rotate-180' : 'bg-[#F2F7F4] text-[#1F4738]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <p className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
