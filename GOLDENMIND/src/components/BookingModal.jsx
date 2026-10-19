import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, preset }) {
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    patientType: 'Adult (18+)',
    visitFormat: 'Secure Telehealth Video',
    primaryConcern: 'Comprehensive Psychiatric Evaluation',
    preferredWindow: 'Morning (9:00 AM – 12:00 PM)'
  });

  useEffect(() => {
    if (isOpen) {
      setBookingStep(1);
      setBookingSubmitted(false);
      if (preset) {
        setBookingForm((prev) => ({
          ...prev,
          primaryConcern: preset.concern || prev.primaryConcern,
          patientType: preset.patientType || prev.patientType,
          visitFormat: preset.visitFormat || prev.visitFormat
        }));
      }
    }
  }, [isOpen, preset]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/65 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative my-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900"
        >
          <X className="w-5 h-5" />
        </button>

        {!bookingSubmitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setBookingSubmitted(true);
            }}
            className="space-y-6"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#1F4738]">
                Golden Mind Psychiatry PLLC • Step {bookingStep} of 2
              </span>
              <h3 className="font-serif-clinical text-2xl sm:text-3xl font-medium text-slate-900 mt-1">
                Schedule Your Consultation
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="h-1.5 rounded-full bg-[#1F4738]" />
              <div className={`h-1.5 rounded-full ${bookingStep === 2 ? 'bg-[#1F4738]' : 'bg-slate-200'}`} />
            </div>

            {bookingStep === 1 ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Who is this appointment for?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {['Adult (18+)', 'Child / Teen (Ages 6–17)'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setBookingForm({ ...bookingForm, patientType: type })}
                        className={`p-3.5 rounded-xl text-xs sm:text-sm font-semibold border text-left transition cursor-pointer ${
                          bookingForm.patientType === type
                            ? 'border-[#1F4738] bg-[#E8F3EE] text-[#1F4738]'
                            : 'border-slate-200 text-slate-700'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Preferred Care Format
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {['Secure Telehealth Video', 'In-Person Clinic Visit'].map((format) => (
                      <button
                        type="button"
                        key={format}
                        onClick={() => setBookingForm({ ...bookingForm, visitFormat: format })}
                        className={`p-3.5 rounded-xl text-xs sm:text-sm font-semibold border text-left transition cursor-pointer ${
                          bookingForm.visitFormat === format
                            ? 'border-[#1F4738] bg-[#E8F3EE] text-[#1F4738]'
                            : 'border-slate-200 text-slate-700'
                        }`}
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Clinical Service / Focus
                  </label>
                  <select
                    value={bookingForm.primaryConcern}
                    onChange={(e) => setBookingForm({ ...bookingForm, primaryConcern: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-sm bg-[#F9FBF9]"
                  >
                    <option>Comprehensive Psychiatric Evaluation</option>
                    <option>ADHD & Executive Function Evaluation</option>
                    <option>Anxiety & Panic Treatment</option>
                    <option>Depression & Mood Management</option>
                    <option>PTSD & Trauma Recovery</option>
                    <option>Bipolar Disorder & Mood Stabilization</option>
                    <option>Child & Adolescent Psychiatry</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => setBookingStep(2)}
                  className="w-full py-4 rounded-2xl bg-[#1F4738] hover:bg-[#153327] text-white font-semibold text-sm shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continue to Contact Info</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Patient or Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingForm.fullName}
                    onChange={(e) => setBookingForm({ ...bookingForm, fullName: e.target.value })}
                    placeholder="Full legal name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-[#F9FBF9]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-[#F9FBF9]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      placeholder="(432) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-[#F9FBF9]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Time Window (Mon–Fri, 9AM–3PM)
                  </label>
                  <select
                    value={bookingForm.preferredWindow}
                    onChange={(e) => setBookingForm({ ...bookingForm, preferredWindow: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-[#F9FBF9]"
                  >
                    <option>Morning (9:00 AM – 12:00 PM)</option>
                    <option>Early Afternoon (12:00 PM – 3:00 PM)</option>
                    <option>First Available Appointment</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setBookingStep(1)}
                    className="px-5 py-3.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-xl bg-[#1F4738] hover:bg-[#153327] text-white font-semibold text-sm shadow-lg transition cursor-pointer"
                  >
                    Confirm Consultation Request
                  </button>
                </div>
              </div>
            )}
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#E8F3EE] text-[#1F4738] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-serif-clinical text-2xl sm:text-3xl font-medium text-slate-900">
              Consultation Request Received
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{bookingForm.fullName}</span>. Our intake coordinator will reach out within 1 business day (Mon–Fri, 9AM–3PM) to confirm your{' '}
              <span className="font-semibold text-[#1F4738]">{bookingForm.visitFormat}</span> appointment.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-7 py-3 rounded-xl bg-[#1F4738] text-white text-xs font-bold"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
