import React, { useState } from 'react';
import {
  PhoneCall,
  Phone,
  Mail,
  Clock,
  Lock,
  Check,
  Calendar,
  AlertCircle,
  Video,
  ShieldCheck
} from 'lucide-react';

export default function Contact({ onOpenBooking }) {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    patientAgeGroup: 'Adult Patient (18+)',
    preferredFormat: 'Secure Telehealth Video',
    subject: 'New Patient Consultation Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Page Hero Banner */}
      <section className="bg-[#132A21] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#A7E3C9] text-xs font-semibold">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Direct Clinic Communication</span>
            </div>
            <h1 className="font-serif-clinical text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
              Contact & Appointment Requests
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We are here to answer your questions and help you schedule your initial psychiatric evaluation. Reach out by phone, email, or our confidential inquiry form below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 bg-white rounded-[2.25rem] p-6 sm:p-10 lg:p-14 border border-slate-200/90 shadow-xl">
          {/* Left Column: Direct Clinic Info */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between bg-[#153327] text-white p-7 sm:p-9 rounded-3xl">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#A7E3C9]">
                  Direct Clinic Channels
                </span>
                <h2 className="font-serif-clinical text-3xl font-medium mt-2">
                  Golden Mind Psychiatry PLLC
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Our intake coordinator responds to all phone and email inquiries promptly during regular weekday clinic hours.
                </p>
              </div>

              <div className="space-y-3.5">
                <a
                  href="tel:4329343185"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 transition"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#A7E3C9] text-[#153327] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300">Clinic Phone (Tap to Call)</p>
                    <p className="text-base font-bold text-white">(432) 934-3185</p>
                  </div>
                </a>

                <a
                  href="mailto:beehobs@yahoo.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 transition"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#A7E3C9] text-[#153327] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300">Direct Clinic Email</p>
                    <p className="text-base font-bold text-white break-all">beehobs@yahoo.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10">
                  <div className="w-11 h-11 rounded-xl bg-[#A7E3C9] text-[#153327] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300">Operating Hours</p>
                    <p className="text-base font-bold text-white">Monday – Friday: 9:00 AM – 3:00 PM</p>
                    <p className="text-[11px] text-[#A7E3C9] mt-0.5">Closed Weekends & Major Holidays</p>
                  </div>
                </div>
              </div>

              {/* Instant Booking Modal Trigger Card */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2.5">
                <p className="text-xs font-bold text-[#A7E3C9] uppercase tracking-wider">
                  Prefer Guided Scheduling?
                </p>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Use our interactive 2-step intake wizard to select your care format and preferred time window.
                </p>
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking()}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#A7E3C9] text-[#132A21] font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-white transition cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Launch Interactive Booking Wizard</span>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-white/15 text-xs text-slate-300 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#A7E3C9] shrink-0" />
              <span>All patient inquiries are handled with strict confidentiality.</span>
            </div>
          </div>

          {/* Right Column: Full Contact & Consultation Request Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {!contactSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1F4738]">
                    Confidential Online Form
                  </span>
                  <h3 className="font-serif-clinical text-2xl sm:text-3xl font-medium text-slate-900 mt-1">
                    Send a Message or Request an Appointment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Complete the fields below and our intake coordinator will reach out within 1 business day.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#1F4738] focus:outline-none text-sm bg-[#F9FBF9]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#1F4738] focus:outline-none text-sm bg-[#F9FBF9]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="(432) 000-0000"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#1F4738] focus:outline-none text-sm bg-[#F9FBF9]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Patient Age Group
                    </label>
                    <select
                      value={contactForm.patientAgeGroup}
                      onChange={(e) => setContactForm({ ...contactForm, patientAgeGroup: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#1F4738] focus:outline-none text-sm bg-[#F9FBF9]"
                    >
                      <option>Adult Patient (18+)</option>
                      <option>Child / Adolescent (Ages 6–17)</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Preferred Visit Format
                    </label>
                    <select
                      value={contactForm.preferredFormat}
                      onChange={(e) => setContactForm({ ...contactForm, preferredFormat: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#1F4738] focus:outline-none text-sm bg-[#F9FBF9]"
                    >
                      <option>Secure Telehealth Video</option>
                      <option>In-Person Clinic Visit</option>
                      <option>First Available (Either Format)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Primary Topic
                    </label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#1F4738] focus:outline-none text-sm bg-[#F9FBF9]"
                    >
                      <option>New Patient Consultation Inquiry</option>
                      <option>ADHD / Executive Function Evaluation</option>
                      <option>Anxiety, Depression, or Mood Care</option>
                      <option>Child & Adolescent Psychiatry</option>
                      <option>Medication Management Follow-Up</option>
                      <option>General Practice Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    How Can We Support You? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Let us know your preferred weekday times (Mon–Fri, 9AM–3PM) or any questions..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#1F4738] focus:outline-none text-sm bg-[#F9FBF9]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-[11px] text-slate-500 max-w-xs">
                    Please do not include urgent crisis details in this web form. For emergencies, call 988 or 911.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1F4738] hover:bg-[#153327] text-white font-semibold text-sm shadow-lg transition cursor-pointer shrink-0"
                  >
                    Submit Confidential Inquiry
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 px-6 bg-[#F2F7F4] rounded-3xl space-y-4 border border-[#CBE2D6]">
                <div className="w-16 h-16 rounded-2xl bg-[#1F4738] text-[#A7E3C9] flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif-clinical text-2xl sm:text-3xl font-medium text-slate-900">
                  Thank you, {contactForm.name}.
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your message regarding <span className="font-semibold text-slate-900">{contactForm.subject}</span> has been received by Golden Mind Psychiatry PLLC. We will contact you at{' '}
                  <span className="font-semibold text-slate-900">{contactForm.email}</span> or{' '}
                  <span className="font-semibold text-slate-900">{contactForm.phone}</span> during clinic hours (Mon–Fri, 9AM–3PM).
                </p>
                <button
                  onClick={() => {
                    setContactSubmitted(false);
                    setContactForm({
                      name: '',
                      email: '',
                      phone: '',
                      patientAgeGroup: 'Adult Patient (18+)',
                      preferredFormat: 'Secure Telehealth Video',
                      subject: 'New Patient Consultation Inquiry',
                      message: ''
                    });
                  }}
                  className="text-xs font-bold text-[#1F4738] underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
