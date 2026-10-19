import React, { useState } from 'react';
import { Video, Check, Camera, Lock, CreditCard, FileText } from 'lucide-react';

export default function Telehealth({ onOpenBooking }) {
  const [checklist, setChecklist] = useState({
    device: true,
    space: false,
    idCard: false,
    medList: false
  });

  const completedChecks = Object.values(checklist).filter(Boolean).length;

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      <section className="bg-[#132A21] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#A7E3C9] text-xs font-semibold">
              <Video className="w-3.5 h-3.5" />
              <span>HIPAA-Encrypted Virtual Psychiatry</span>
            </div>
            <h1 className="font-serif-clinical text-4xl sm:text-5xl lg:text-6xl font-medium">
              Telehealth Virtual Care Portal
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              With Golden Mind Psychiatry’s convenient telehealth options, we make it easier for you to access the mental health support you deserve—whenever and wherever you need it.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4738]">
              Zero Commute • 100% Private
            </span>
            <h2 className="font-serif-clinical text-3xl sm:text-4xl font-medium text-slate-900">
              How Your Virtual Psychiatric Visit Works
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Book Your Weekday Telehealth Slot',
                  desc: 'Choose a convenient time Monday–Friday between 9:00 AM and 3:00 PM. Complete your intake paperwork digitally on your phone or laptop.'
                },
                {
                  step: '02',
                  title: 'Tap Your Secure 1-Click Video Link',
                  desc: '15 minutes before your session, we send a private HIPAA-encrypted link via SMS and email. No app downloads or complex logins required.'
                },
                {
                  step: '03',
                  title: 'Direct Electronic Prescribing (e-Rx)',
                  desc: 'Following your consultation, any prescribed medications are transmitted directly to your local pharmacy for same-day pickup.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#1F4738] text-[#A7E3C9] font-serif-clinical font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1F4738]">
                    Interactive Pre-Visit Tool
                  </span>
                  <h3 className="font-serif-clinical text-2xl font-medium text-slate-900 mt-0.5">
                    Telehealth Readiness Checklist
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#EAF3EE] text-[#1F4738] text-xs font-bold">
                  {completedChecks}/4 Ready
                </span>
              </div>

              <div className="space-y-3">
                {[
                  { key: 'device', label: 'Smartphone, tablet, or computer with camera & microphone', icon: Camera },
                  { key: 'space', label: 'Quiet, private, well-lit room (or parked vehicle)', icon: Lock },
                  { key: 'idCard', label: 'Photo ID & insurance information handy for verification', icon: CreditCard },
                  { key: 'medList', label: 'List of current medications & preferred local pharmacy address', icon: FileText }
                ].map((item) => {
                  const checked = checklist[item.key];
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setChecklist((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                      className={`w-full p-4 rounded-2xl border text-left transition flex items-center justify-between gap-3 cursor-pointer ${
                        checked
                          ? 'bg-[#EAF3EE] border-[#1F4738] text-slate-900'
                          : 'bg-[#F9FBF9] border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center transition ${
                            checked ? 'bg-[#1F4738] text-white' : 'border border-slate-300 bg-white'
                          }`}
                        >
                          {checked && <Check className="w-4 h-4" />}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() =>
                  onOpenBooking({
                    concern: 'Telehealth Virtual Consultation',
                    patientType: 'Adult (18+)',
                    visitFormat: 'Secure Telehealth Video'
                  })
                }
                className="w-full py-4 rounded-2xl bg-[#1F4738] hover:bg-[#153327] text-white font-semibold text-sm shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Video className="w-4 h-4 text-[#A7E3C9]" />
                <span>Schedule a Virtual Telehealth Visit</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
