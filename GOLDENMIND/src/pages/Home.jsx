import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Stethoscope,
  ShieldCheck,
  Video,
  Users,
  Lock,
  ChevronRight,
  MessageSquareHeart,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { CONDITIONS, WELLNESS_QUESTIONS } from '../data/clinicalData';

export default function Home({ onOpenBooking }) {
  const navigate = useNavigate();
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleQuizSelect = (stepIndex, option) => {
    const updated = { ...quizAnswers, [stepIndex]: option };
    setQuizAnswers(updated);
    if (stepIndex + 1 < WELLNESS_QUESTIONS.length) {
      setQuizStep(stepIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
    setQuizCompleted(false);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 sm:pt-12 lg:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F1EC] border border-[#C5DFD3] text-[#1B4332] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#234E3E]" />
                <span>Accepting New Adult, Child & Adolescent Patients</span>
              </div>

              <h1 className="font-serif-clinical text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-slate-900 tracking-tight leading-[1.12]">
                Your path to{' '}
                <span className="italic font-normal text-[#1F4738] bg-[#E8F3EE] px-2.5 py-0.5 rounded-2xl inline-block">
                  emotional well-being
                </span>{' '}
                starts here.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Golden Mind Psychiatry PLLC is a compassionate mental health practice dedicated to helping you achieve lasting stability through comprehensive psychiatric evaluations, personalized medication management, and convenient telehealth care.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#1F4738] hover:bg-[#153327] text-white font-semibold px-7 py-4 rounded-2xl shadow-xl shadow-[#1F4738]/20 hover:-translate-y-0.5 transition-all duration-300 text-base cursor-pointer"
                >
                  <span>Schedule Your Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#A7E3C9]" />
                </button>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2F7F4] text-slate-800 font-semibold px-6 py-4 rounded-2xl border border-slate-200/90 shadow-xs transition-all duration-300 text-base"
                >
                  <Stethoscope className="w-4 h-4 text-[#1F4738]" />
                  <span>Explore Clinical Services</span>
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 sm:gap-6">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#E8F3EE] flex items-center justify-center text-[#1F4738] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">Evidence-Based</p>
                    <p className="text-[11px] sm:text-xs text-slate-500">Tailored treatment</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#E8F3EE] flex items-center justify-center text-[#1F4738] shrink-0 mt-0.5">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">HIPAA Telehealth</p>
                    <p className="text-[11px] sm:text-xs text-slate-500">Virtual & in-clinic</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#E8F3EE] flex items-center justify-center text-[#1F4738] shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">Ages 6 to Adult</p>
                    <p className="text-[11px] sm:text-xs text-slate-500">Youth & adult care</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/4.5]">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                    alt="Warm psychiatric specialist welcoming a patient"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E19]/80 via-[#0F1E19]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium mb-2">
                      <Lock className="w-3 h-3 text-[#A7E3C9]" />
                      <span>Compassionate, Judgment-Free Psychiatry</span>
                    </div>
                    <p className="font-serif-clinical text-lg sm:text-xl italic leading-snug">
                      “We believe quality psychiatric care should be accessible, personalized, and delivered with genuine compassion.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Page Directory Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4738]">
              Explore Golden Mind Psychiatry
            </span>
            <h2 className="font-serif-clinical text-3xl sm:text-4xl font-medium text-slate-900 mt-1">
              Dedicated Pages for Every Step of Your Care
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              path: '/services',
              title: 'Clinical Services',
              badge: '4 Core Modalities',
              desc: 'Explore 60-minute psychiatric evaluations, precision medication management, and child & adolescent psychiatry.',
              img: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=700&q=80',
              cta: 'Open Services Page'
            },
            {
              path: '/conditions',
              title: 'Conditions We Treat',
              badge: 'Symptom & Care Guide',
              desc: 'Detailed clinical breakdowns for ADHD, Anxiety, Major Depression, PTSD & Trauma, and Bipolar Disorder.',
              img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80',
              cta: 'Open Conditions Page'
            },
            {
              path: '/telehealth',
              title: 'Telehealth Virtual Clinic',
              badge: '100% HIPAA Encrypted',
              desc: 'See how our 1-click virtual video visits work, test your readiness checklist, and book from home.',
              img: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=700&q=80',
              cta: 'Open Telehealth Page'
            },
            {
              path: '/about',
              title: 'About Our Practice',
              badge: 'Our Philosophy',
              desc: 'Learn about Golden Mind Psychiatry PLLC’s mission, our holistic clinical values, and our care environment.',
              img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80',
              cta: 'Open About Page'
            },
            {
              path: '/patients',
              title: 'New Patient Center & FAQ',
              badge: 'First Visit Guide',
              desc: 'What to expect at your first appointment, prescription policies, insurance/superbills, and FAQs.',
              img: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=700&q=80',
              cta: 'Open Patient Center'
            },
            {
              path: '/contact',
              title: 'Contact & Hours',
              badge: 'Mon–Fri 9AM–3PM',
              desc: 'Direct phone and email channels, clinic hours, and our online consultation request form.',
              img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80',
              cta: 'Open Contact Page'
            }
          ].map((card, i) => (
            <Link
              key={i}
              to={card.path}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 text-[#1F4738] text-[11px] font-bold">
                    {card.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif-clinical text-2xl font-medium text-slate-900 group-hover:text-[#1F4738] transition">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-[#1F4738]">
                <span>{card.cta}</span>
                <div className="w-8 h-8 rounded-xl bg-[#EAF3EE] group-hover:bg-[#1F4738] group-hover:text-white flex items-center justify-center transition">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Condition Quick-Jump Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EAF3EE] rounded-3xl p-6 sm:p-10 border border-[#CBE2D6]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F4738]">
                Specialized Psychiatric Treatment
              </span>
              <h3 className="font-serif-clinical text-2xl sm:text-3xl font-medium text-slate-900">
                Looking for support with a specific condition?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Tap any condition below to open its full clinical protocol on our Conditions page.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {CONDITIONS.map((cond) => (
                <Link
                  key={cond.id}
                  to={`/conditions?condition=${cond.id}`}
                  className="px-4 py-3 rounded-2xl bg-white hover:bg-[#1F4738] text-slate-800 hover:text-white text-xs sm:text-sm font-semibold shadow-xs transition flex items-center gap-2"
                >
                  <span>{cond.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 60-Second Wellness Care Finder */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#132A21] text-white rounded-[2.25rem] p-6 sm:p-12 shadow-2xl">
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#A7E3C9] text-xs font-semibold">
              <MessageSquareHeart className="w-4 h-4" />
              <span>60-Second Care Finder</span>
            </div>
            <h2 className="font-serif-clinical text-3xl sm:text-4xl font-medium">
              Find Your Recommended Starting Point
            </h2>
          </div>

          <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-9">
            {!quizCompleted ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                  <span>Step {quizStep + 1} of {WELLNESS_QUESTIONS.length}</span>
                  <span>{Math.round(((quizStep + 1) / WELLNESS_QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1F4738] transition-all duration-500 rounded-full"
                    style={{ width: `${((quizStep + 1) / WELLNESS_QUESTIONS.length) * 100}%` }}
                  />
                </div>
                <h3 className="font-serif-clinical text-2xl sm:text-3xl font-medium text-slate-900">
                  {WELLNESS_QUESTIONS[quizStep].question}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {WELLNESS_QUESTIONS[quizStep].options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleQuizSelect(quizStep, opt)}
                      className="text-left p-4 rounded-2xl border-2 border-slate-200/80 hover:border-[#1F4738] hover:bg-[#F2F7F4] transition group flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <span className="font-semibold text-sm text-slate-800 group-hover:text-[#1F4738]">
                        {opt.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1F4738] shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-5 py-3">
                <div className="w-14 h-14 rounded-2xl bg-[#E8F3EE] text-[#1F4738] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1.5 max-w-lg mx-auto">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1F4738]">
                    Personalized Recommendation
                  </span>
                  <h3 className="font-serif-clinical text-2xl sm:text-3xl font-medium text-slate-900">
                    {quizAnswers[0]?.rec}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Tailored for <span className="font-semibold text-slate-900">{quizAnswers[1]?.label}</span> via{' '}
                    <span className="font-semibold text-slate-900">{quizAnswers[2]?.label}</span>.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() =>
                      onOpenBooking({
                        concern: quizAnswers[0]?.rec,
                        patientType: quizAnswers[1]?.label,
                        visitFormat: quizAnswers[2]?.label
                      })
                    }
                    className="px-6 py-3.5 rounded-2xl bg-[#1F4738] text-white font-semibold text-sm shadow-md hover:bg-[#153327] transition cursor-pointer"
                  >
                    Book This Intake Consultation
                  </button>
                  <button
                    onClick={() => navigate(`/conditions?condition=${quizAnswers[0]?.match}`)}
                    className="px-5 py-3.5 rounded-2xl bg-[#EAF3EE] text-[#1F4738] font-semibold text-sm hover:bg-[#d8ebe1] transition cursor-pointer"
                  >
                    Read Clinical Guide
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-2 flex items-center gap-1"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Reset
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
