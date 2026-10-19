import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  Video, 
  Pill, 
  Brain, 
  HeartHandshake, 
  CheckCircle2, 
  ChevronDown, 
  ChevronRight, 
  ChevronLeft,
  Menu, 
  X, 
  Award, 
  Sparkles, 
  AlertCircle,
  Activity,
  Users,
  Stethoscope,
  ArrowRight,
  Lock,
  Check,
  RefreshCw,
  Compass,
  FileCheck,
  Building2
} from 'lucide-react';

// Custom Hook for Scroll Reveal Animations
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
}

export default function App() {
  useScrollReveal();

  const [crisisBannerDismissed, setCrisisBannerDismissed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('adhd');
  const [tabAnimating, setTabAnimating] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Interactive 3-Question Mental Wellness Check-In State
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({ focus: '', duration: '', preference: '' });
  const [quizTransition, setQuizTransition] = useState(false);

  // Multi-Step Intake Booking Modal State
  const [formStep, setFormStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    patientType: 'new',
    careType: 'telehealth',
    ageGroup: 'adult',
    condition: 'adhd',
    paymentMethod: 'insurance',
    insuranceCarrier: '',
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    notes: ''
  });

  const conditionTabsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer or modal is open
  useEffect(() => {
    if (mobileMenuOpen || bookingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, bookingModalOpen]);

  const handleTabChange = (id) => {
    if (id === activeTab) return;
    setTabAnimating(true);
    setTimeout(() => {
      setActiveTab(id);
      setTabAnimating(false);
    }, 180);
  };

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const openBookingWithCondition = (conditionId, careType = 'telehealth') => {
    setFormData((prev) => ({
      ...prev,
      condition: conditionId || prev.condition,
      careType: careType || prev.careType
    }));
    setFormStep(1);
    setFormSubmitted(false);
    setBookingModalOpen(true);
  };

  const resetBookingForm = () => {
    setFormSubmitted(false);
    setFormStep(1);
    setBookingModalOpen(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Interactive Wellness Check-In Handlers
  const handleQuizSelect = (field, value, mappedConditionId) => {
    setQuizTransition(true);
    setTimeout(() => {
      setQuizAnswers((prev) => ({
        ...prev,
        [field]: value,
        ...(mappedConditionId ? { recommendedId: mappedConditionId } : {})
      }));
      setQuizStep((prev) => prev + 1);
      setQuizTransition(false);
    }, 220);
  };

  const resetQuiz = () => {
    setQuizTransition(true);
    setTimeout(() => {
      setQuizStep(0);
      setQuizAnswers({ focus: '', duration: '', preference: '' });
      setQuizTransition(false);
    }, 200);
  };

  // Conditions Data
  const conditions = [
    {
      id: 'adhd',
      shortLabel: 'ADHD & Focus',
      title: 'ADHD & Executive Functioning',
      category: 'Focus & Neurodevelopmental Care',
      image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1000&q=85',
      description: 'Chronic inattention, task paralysis, restlessness, and executive dysfunction can quietly undermine both academic and career fulfillment. We deliver comprehensive diagnostic clarity and structured medical support.',
      symptoms: [
        'Difficulty sustaining attention & task completion',
        'Working memory & organizational overwhelm',
        'Internal restlessness or impulsive decisions',
        'Time blindness & chronic procrastination'
      ],
      clinicalApproach: 'Objective diagnostic evaluation combined with precision stimulant or non-stimulant pharmacotherapy and executive function scaffolding.',
      timeToRelief: 'Initial titration review within 2–3 weeks'
    },
    {
      id: 'anxiety',
      shortLabel: 'Anxiety & Panic',
      title: 'Generalized Anxiety & Panic Disorders',
      category: 'Nervous System Regulation',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1000&q=85',
      description: 'Persistent worry, racing thoughts, and sudden autonomic panic surges can leave your nervous system in a state of constant exhaustion. Our protocols gently restore calm without dulling your mental sharpness.',
      symptoms: [
        'Uncontrollable worry or sense of impending doom',
        'Physical tension, rapid heart rate & shallow breathing',
        'Social avoidance or performance dread',
        'Sleep-onset insomnia from racing thoughts'
      ],
      clinicalApproach: 'Targeted, non-habit-forming anxiolytic medication management paired with autonomic nervous system stabilization strategies.',
      timeToRelief: 'Gradual symptom relief tracked bi-weekly'
    },
    {
      id: 'depression',
      shortLabel: 'Depression',
      title: 'Major Depression & Persistent Mood Changes',
      category: 'Affective & Neurochemical Health',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=85',
      description: 'Depression is more than temporary sadness—it is a biological weight that dims motivation, joy, sleep quality, and cognitive vitality. We look at the complete biological and emotional picture.',
      symptoms: [
        'Loss of interest or pleasure in daily life (anhedonia)',
        'Persistent fatigue, low energy & heavy limbs',
        'Feelings of guilt, numbness, or hopelessness',
        'Disrupted sleep cycles & appetite shifts'
      ],
      clinicalApproach: 'Individualized antidepressant therapy, metabolic/biomarker screening recommendations, and compassionate longitudinal follow-ups.',
      timeToRelief: 'Close monitoring across the first 4–6 weeks'
    },
    {
      id: 'mood',
      shortLabel: 'Mood & Bipolar',
      title: 'Bipolar Spectrum & Mood Disorders',
      category: 'Mood Stabilization',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=85',
      description: 'Distinguishing between unipolar depression and bipolar spectrum conditions is one of the most important steps in psychiatry. Accurate diagnosis ensures safe, sustainable mood equilibrium.',
      symptoms: [
        'Distinct cycles of elevated energy or heightened irritability',
        'Decreased need for sleep during high-energy phases',
        'Oscillation into deep depressive exhaustion',
        'Racing thoughts & rapid speech patterns'
      ],
      clinicalApproach: 'Precision mood stabilizers, circadian rhythm protection, and careful avoidance of destabilizing monotherapy.',
      timeToRelief: 'Structured mood-charting & stabilization'
    },
    {
      id: 'ptsd',
      shortLabel: 'PTSD & Trauma',
      title: 'PTSD & Trauma-Related Disorders',
      category: 'Trauma Recovery & Safety',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=85',
      description: 'Unresolved trauma alters how the brain perceives safety, keeping the body locked in fight-or-flight. We provide trauma-informed psychiatric care that respects your pace and autonomy.',
      symptoms: [
        'Intrusive memories, flashbacks, or distressing nightmares',
        'Hypervigilance & heightened startle response',
        'Emotional numbness or detachment from loved ones',
        'Acute physiological distress around reminders'
      ],
      clinicalApproach: 'Evidence-based pharmacotherapy targeting hyperarousal and sleep restoration, coordinated seamlessly with trauma psychotherapy.',
      timeToRelief: 'Immediate focus on sleep & nervous system relief'
    }
  ];

  const currentCondition = conditions.find((c) => c.id === activeTab) || conditions[0];

  // Core Services Data (Grounded in goldenmindpsychiatry.org)
  const services = [
    {
      id: 'evaluations',
      title: 'Psychiatric Evaluations & Assessments',
      badge: 'Comprehensive 60-Min Intake',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
      description: 'Every healing journey begins with an unhurried, in-depth psychiatric assessment. We evaluate your symptom history, medical background, genetics, and lifestyle factors to reach an accurate diagnosis.',
      points: [
        'Complete differential diagnostic clarity',
        'Review of past medications & treatment history',
        'Screening for ADHD, anxiety, mood & trauma conditions',
        'Collaborative discussion of treatment options'
      ]
    },
    {
      id: 'medication',
      title: 'Personalized Medication Management',
      badge: 'Precision Titration & Care',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=85',
      description: 'Thoughtful, conservative prescribing tailored to your unique neurochemistry. We monitor effectiveness closely, prioritize minimal effective dosages, and adjust proactively so you feel like your best self.',
      points: [
        'Careful dosage titration to minimize side effects',
        'Direct electronic prescribing to your preferred pharmacy',
        'Ongoing progress check-ins & refill coordination',
        'Education on how each medication supports your brain'
      ]
    },
    {
      id: 'child-adolescent',
      title: 'Child & Adolescent Psychiatry',
      badge: 'Compassionate Youth Care',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85',
      description: 'Young minds deserve specialized, gentle psychiatric support. We partner closely with parents and families to help children and teens navigate focus challenges, school anxiety, and emotional growth.',
      points: [
        'Age-appropriate evaluations for children & teens',
        'Parent-partnered treatment planning & education',
        'Support for academic focus, ADHD & youth anxiety',
        'Warm, destigmatizing clinical environment'
      ]
    },
    {
      id: 'telehealth',
      title: 'Secure Telehealth Consultations',
      badge: 'Private Video Visits',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85',
      description: 'Access premier psychiatric care from the privacy of your home or office. Our HIPAA-compliant virtual platform eliminates commute stress while delivering the exact same clinical rigor as in-office visits.',
      points: [
        'One-click encrypted video link on phone or computer',
        'Zero waiting room exposure or travel time',
        'Same-day digital prescription routing',
        'Convenient Monday–Friday (9 AM – 3 PM) scheduling'
      ]
    }
  ];

  // FAQs
  const faqs = [
    {
      q: 'What happens during my initial psychiatric evaluation?',
      a: 'Your first appointment is a comprehensive, confidential conversation lasting approximately 45 to 60 minutes. We explore your current symptoms, medical and family history, sleep, stressors, and personal goals. By the end of the visit, we share our diagnostic impressions and collaborate with you on a personalized care plan.'
    },
    {
      q: 'Will I automatically be prescribed medication?',
      a: 'Never without your full comfort and consent. While medication management is one of our core strengths, we view treatment as a partnership. We explain how recommended medications work, what to expect, and holistic lifestyle strategies so you can make an informed decision.'
    },
    {
      q: 'How do Telehealth appointments work at Golden Mind Psychiatry?',
      a: 'Once your appointment is confirmed, you will receive a secure, HIPAA-compliant video link via email or text message. At your appointment time, simply tap the link from your smartphone, tablet, or computer—no special app installation is needed. Prescriptions are sent electronically to your local pharmacy right after your session.'
    },
    {
      q: 'Do you treat both adults and children/adolescents?',
      a: 'Yes. Golden Mind Psychiatry PLLC provides specialized psychiatric assessments and medication management for both adults and pediatric/adolescent patients, involving parents and guardians closely in youth care plans.'
    },
    {
      q: 'What are your practice hours and how do I reach the clinic?',
      a: 'Our clinical hours are Monday through Friday from 9:00 AM to 3:00 PM. You can reach us directly by calling (432) 934-3185, emailing beehobs@yahoo.com, or submitting an online consultation request through this website at any time.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAF8] text-slate-800 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-950 pb-20 lg:pb-0 overflow-x-hidden">
      {/* Custom Styles for Keyframe Animations & Scroll Reveals */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleInModal {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatDelayed 7s ease-in-out 1.5s infinite;
        }
        .animate-fade-slide-up {
          animation: fadeSlideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scale-in {
          animation: scaleInModal 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-drawer-right {
          animation: slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        /* Hide scrollbars on swipeable mobile pill bars */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* 1. CALM, REFINED CLINICAL TOP BANNER (No harsh yellow lines) */}
      {!crisisBannerDismissed && (
        <div className="bg-[#0F1E19] text-slate-200 text-xs py-2.5 px-4 border-b border-emerald-950/60 relative z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              <p className="text-[11px] sm:text-xs text-slate-300 leading-snug">
                <strong className="text-white font-semibold">24/7 Support Notice:</strong> If you are experiencing a mental health crisis, call or text{' '}
                <a href="tel:988" className="text-teal-300 underline underline-offset-2 font-semibold hover:text-white transition">
                  988
                </a>{' '}
                (Suicide & Crisis Lifeline) or dial 911.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="hidden lg:flex items-center gap-4 text-[11px] text-slate-300 border-l border-slate-800 pl-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-400" /> Mon–Fri: 9:00 AM – 3:00 PM
                </span>
                <a href="tel:4329343185" className="hover:text-teal-300 transition font-medium">
                  (432) 934-3185
                </a>
              </div>
              <button
                onClick={() => setCrisisBannerDismissed(true)}
                className="text-slate-400 hover:text-white p-1 rounded-lg transition"
                aria-label="Dismiss crisis notice"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. FROSTED-GLASS STICKY HEADER */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200/70 py-3'
            : 'bg-[#F9FAF8]/95 backdrop-blur-md border-b border-slate-200/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#133A2E] via-[#1B4D3E] to-[#266855] flex items-center justify-center text-white shadow-md shadow-emerald-950/15 group-hover:scale-105 transition-transform duration-300">
              <Brain className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-none">
                Golden Mind
              </span>
              <span className="block text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] text-[#1B4D3E] uppercase mt-1">
                Psychiatry PLLC
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-[#1B4D3E] transition py-1">Services</a>
            <a href="#conditions" className="hover:text-[#1B4D3E] transition py-1">Conditions</a>
            <a href="#wellness-check" className="hover:text-[#1B4D3E] transition py-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" /> Wellness Check
            </a>
            <a href="#telehealth" className="hover:text-[#1B4D3E] transition py-1">Telehealth</a>
            <a href="#about" className="hover:text-[#1B4D3E] transition py-1">About Us</a>
            <a href="#faq" className="hover:text-[#1B4D3E] transition py-1">FAQs</a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:4329343185"
              className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1B4D3E] hover:bg-emerald-50/60 transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#1B4D3E]" />
              <span>(432) 934-3185</span>
            </a>
            <button
              onClick={() => openBookingWithCondition('adhd')}
              className="bg-[#1B4D3E] hover:bg-[#133A2E] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-emerald-950/15 hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4 text-emerald-200" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Quick Actions & Menu Button (Min 48px touch target) */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:4329343185"
              aria-label="Call Golden Mind Psychiatry"
              className="w-11 h-11 rounded-xl bg-emerald-50 text-[#1B4D3E] border border-emerald-200/70 flex items-center justify-center active:scale-95 transition"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center active:scale-95 transition"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* 2B. LUXURY SLIDE-OVER MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-over Panel */}
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-drawer-right z-10">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1B4D3E] flex items-center justify-center text-white">
                    <Brain className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div>
                    <span className="block font-serif text-lg font-bold text-slate-900 leading-none">
                      Golden Mind
                    </span>
                    <span className="block text-[10px] font-semibold tracking-widest text-[#1B4D3E] uppercase mt-0.5">
                      Psychiatry PLLC
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-11 h-11 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center active:scale-95 transition"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Staggered Navigation Links */}
              <nav className="mt-6 space-y-2">
                {[
                  { label: 'Clinical Services', sub: 'Evaluations, Medication & Youth Care', href: '#services' },
                  { label: 'Conditions We Treat', sub: 'ADHD, Anxiety, Depression, PTSD & Mood', href: '#conditions' },
                  { label: 'Mental Wellness Check-In', sub: 'Interactive 60-second reflection', href: '#wellness-check' },
                  { label: 'Telehealth Virtual Care', sub: 'Private video sessions from home', href: '#telehealth' },
                  { label: 'About Our Practice', sub: 'Our clinical philosophy & environment', href: '#about' },
                  { label: 'Patient FAQs', sub: 'Common intake & insurance questions', href: '#faq' }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${idx * 50}ms` }}
                    className="animate-fade-slide-up flex items-center justify-between p-3.5 rounded-2xl hover:bg-emerald-50/70 active:bg-emerald-100/60 transition group border border-transparent hover:border-emerald-200/60"
                  >
                    <div>
                      <span className="block text-base font-semibold text-slate-900 group-hover:text-[#1B4D3E]">
                        {item.label}
                      </span>
                      <span className="block text-xs text-slate-500 mt-0.5">{item.sub}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#1B4D3E] group-hover:translate-x-0.5 transition" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Footer Contact & CTAs */}
            <div className="pt-6 border-t border-slate-100 space-y-4 mt-6">
              <div className="p-4 rounded-2xl bg-[#F4F7F4] border border-emerald-900/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Clock className="w-4 h-4 text-[#1B4D3E]" />
                  <span>Mon – Fri: 9:00 AM – 3:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4 text-[#1B4D3E]" />
                  <a href="mailto:beehobs@yahoo.com" className="underline">beehobs@yahoo.com</a>
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingWithCondition('adhd');
                }}
                className="w-full py-4 rounded-2xl bg-[#1B4D3E] text-white font-semibold text-sm shadow-lg shadow-emerald-950/20 flex items-center justify-center gap-2 active:scale-98 transition"
              >
                <Calendar className="w-4 h-4 text-emerald-200" />
                <span>Request Appointment</span>
              </button>

              <a
                href="tel:4329343185"
                className="w-full py-3.5 rounded-2xl border border-slate-200 text-slate-800 font-semibold text-sm flex items-center justify-center gap-2 active:bg-slate-50 transition"
              >
                <Phone className="w-4 h-4 text-[#1B4D3E]" />
                <span>Call (432) 934-3185</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 3. HERO SECTION (No harsh yellow wavy underline—uses calm sage pill highlight) */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#F2F6F3] via-[#F9FAF8] to-[#F9FAF8]">
        {/* Soft Ambient Orbs */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-teal-200/25 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/5 border border-emerald-900/10 text-[#1B4D3E] text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#1B4D3E]" />
                <span>Golden Mind Psychiatry PLLC • Accepting New Patients</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-bold text-slate-900 leading-[1.12] tracking-tight">
                Your Path to{' '}
                <span className="relative inline-block text-[#1B4D3E]">
                  <span className="relative z-10">Emotional Well-Being</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-emerald-200/60 -z-0 rounded-sm"></span>
                </span>{' '}
                Starts Here.
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Compassionate, evidence-based psychiatric evaluations, personalized medication management, and dedicated child & adolescent care—delivered in a calm clinical setting or via private telehealth.
              </p>

              {/* Primary Hero Actions (Mobile-first generous 52px height) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => openBookingWithCondition('adhd')}
                  className="min-h-[52px] bg-[#1B4D3E] hover:bg-[#133A2E] text-white font-semibold px-7 py-3.5 rounded-2xl shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-3 cursor-pointer group active:scale-98"
                >
                  <Calendar className="w-5 h-5 text-emerald-200" />
                  <span>Schedule Intake Evaluation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#wellness-check"
                  className="min-h-[52px] bg-white hover:bg-emerald-50/50 text-slate-800 font-semibold px-6 py-3.5 rounded-2xl border border-slate-200/90 shadow-xs transition text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4 text-[#1B4D3E]" />
                  <span>Take 60-Sec Wellness Check</span>
                </a>
              </div>

              {/* Trust Anchors */}
              <div className="pt-6 border-t border-slate-200/70 grid grid-cols-3 gap-3 sm:gap-6">
                <div className="flex items-start sm:items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-[#1B4D3E] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Full Evaluations</h4>
                    <p className="text-[11px] text-slate-500">Adult & Pediatric</p>
                  </div>
                </div>

                <div className="flex items-start sm:items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-100/80 text-teal-800 flex items-center justify-center shrink-0">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Telepsychiatry</h4>
                    <p className="text-[11px] text-slate-500">HIPAA Video Visits</p>
                  </div>
                </div>

                <div className="flex items-start sm:items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-200/80 text-slate-800 flex items-center justify-center shrink-0">
                    <Pill className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Rx Management</h4>
                    <p className="text-[11px] text-slate-500">Direct E-Prescribing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual Card Stack with Smooth Floating Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 aspect-[4/4.6]">
                  <img
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1000&q=85"
                    alt="Warm, attentive psychiatric clinician in consultation"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />

                  {/* Bottom Glassmorphic Clinical Card */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-[#1B4D3E] text-white shrink-0">
                        <HeartHandshake className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                          "We take the time to understand your complete story—never rushing your diagnosis or care plan."
                        </p>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[11px]">
                          <span className="font-bold text-[#1B4D3E]">Golden Mind Clinical Care</span>
                          <span className="text-slate-500">Mon–Fri • 9AM–3PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Animated Badge 1: Telehealth Ready */}
                <div className="animate-float-slow absolute -top-4 -left-3 sm:-left-6 flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-200/70">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=160&q=80"
                      alt="Board certified provider"
                      className="w-10 h-10 rounded-xl object-cover"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[#1B4D3E] uppercase tracking-wider flex items-center gap-1">
                      <Activity className="w-3 h-3" /> Telehealth & In-Clinic
                    </div>
                    <div className="text-xs font-bold text-slate-900">Same-Week Availability</div>
                  </div>
                </div>

                {/* Floating Animated Badge 2: Direct Contact */}
                <a
                  href="tel:4329343185"
                  className="animate-float-delayed absolute -top-4 right-3 sm:-right-4 bg-[#0F1E19] text-white px-3.5 py-2.5 rounded-2xl shadow-xl border border-emerald-900/40 flex items-center gap-2.5 hover:bg-[#1B4D3E] transition"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] uppercase tracking-wider text-emerald-300 font-semibold">Direct Line</span>
                    <span className="text-xs font-bold">(432) 934-3185</span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE "QUICK MENTAL WELLNESS CHECK-IN" TOOL */}
      <section id="wellness-check" className="py-14 sm:py-20 bg-white border-y border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
          <div className="rounded-3xl bg-gradient-to-br from-[#112A22] via-[#173A30] to-[#1E4A3D] text-white p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Description */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-emerald-200 text-xs font-semibold">
                  <Compass className="w-3.5 h-3.5" /> Interactive Care Finder
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold leading-snug">
                  Not Sure Where to Begin? Take a 60-Second Check-In.
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
                  Answer 3 quick questions about what you or your child are experiencing to see our recommended clinical evaluation pathway.
                </p>
                <div className="pt-2 flex items-center gap-4 text-[11px] text-emerald-200/80">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" /> 100% Private & Anonymous
                  </span>
                  <span>•</span>
                  <span>3 Quick Taps</span>
                </div>
              </div>

              {/* Right Interactive Step Card */}
              <div className="lg:col-span-7">
                <div className="bg-white text-slate-800 rounded-2xl p-5 sm:p-7 shadow-lg min-h-[290px] flex flex-col justify-between">
                  {/* Progress Bar */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B4D3E]">
                      {quizStep < 3 ? `Question ${quizStep + 1} of 3` : 'Personalized Recommendation'}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {[0, 1, 2].map((step) => (
                        <span
                          key={step}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            quizStep >= step ? 'w-7 bg-[#1B4D3E]' : 'w-3 bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Animated Question Body */}
                  <div className={`transition-all duration-200 ${quizTransition ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                    {quizStep === 0 && (
                      <div className="space-y-4">
                        <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                          What has been weighing on your mind most recently?
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {[
                            { label: 'Difficulty focusing, restlessness, or task overwhelm', id: 'adhd' },
                            { label: 'Constant worry, racing thoughts, or panic feelings', id: 'anxiety' },
                            { label: 'Low mood, exhaustion, or loss of motivation', id: 'depression' },
                            { label: 'Past trauma, nightmares, or mood swings', id: 'ptsd' },
                            { label: 'Behavioral, focus, or emotional support for my child/teen', id: 'adhd' }
                          ].map((opt, i) => (
                            <button
                              key={i}
                              onClick={() => handleQuizSelect('focus', opt.label, opt.id)}
                              className={`text-left p-3.5 rounded-xl border border-slate-200 hover:border-[#1B4D3E] hover:bg-emerald-50/50 transition text-xs sm:text-sm font-medium text-slate-700 flex items-center justify-between gap-2 cursor-pointer active:scale-98 ${
                                i === 4 ? 'sm:col-span-2' : ''
                              }`}
                            >
                              <span>{opt.label}</span>
                              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {quizStep === 1 && (
                      <div className="space-y-4">
                        <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                          How long have these symptoms been affecting daily life?
                        </h3>
                        <div className="grid grid-cols-1 gap-2.5">
                          {[
                            'Recently started over the past few weeks',
                            'Several months—it is starting to impact work, school, or relationships',
                            'Over a year, or I am looking to adjust an existing medication plan'
                          ].map((opt, i) => (
                            <button
                              key={i}
                              onClick={() => handleQuizSelect('duration', opt)}
                              className="text-left p-3.5 rounded-xl border border-slate-200 hover:border-[#1B4D3E] hover:bg-emerald-50/50 transition text-xs sm:text-sm font-medium text-slate-700 flex items-center justify-between gap-2 cursor-pointer active:scale-98"
                            >
                              <span>{opt}</span>
                              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {quizStep === 2 && (
                      <div className="space-y-4">
                        <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                          How would you feel most comfortable meeting with your provider?
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            { label: 'Private Telehealth Video Visit', sub: 'Connect from home on phone or laptop', care: 'telehealth' },
                            { label: 'In-Person Clinic Consultation', sub: 'Calm, confidential office visit', care: 'in-person' }
                          ].map((opt, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                handleInputChange('careType', opt.care);
                                handleQuizSelect('preference', opt.label);
                              }}
                              className="text-left p-4 rounded-xl border border-slate-200 hover:border-[#1B4D3E] hover:bg-emerald-50/50 transition cursor-pointer active:scale-98 flex flex-col justify-between"
                            >
                              <span className="text-sm font-bold text-slate-900 block">{opt.label}</span>
                              <span className="text-xs text-slate-500 mt-1 block">{opt.sub}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {quizStep >= 3 && (
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/70 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-[#1B4D3E]">
                            <CheckCircle2 className="w-4 h-4" /> Recommended Clinical Pathway:
                          </div>
                          <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                            Comprehensive Psychiatric Evaluation & Personalized Care Plan
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Based on your responses, a 60-minute diagnostic consultation via{' '}
                            <strong>{quizAnswers.preference || 'Telehealth or In-Clinic'}</strong> will give you clear answers and a tailored treatment roadmap.
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                          <button
                            onClick={() => openBookingWithCondition(quizAnswers.recommendedId || 'adhd')}
                            className="bg-[#1B4D3E] hover:bg-[#133A2E] text-white font-semibold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <Calendar className="w-4 h-4 text-emerald-200" />
                            <span>Book This Evaluation Now</span>
                          </button>
                          <button
                            onClick={resetQuiz}
                            className="text-xs font-semibold text-slate-500 hover:text-slate-800 py-2 px-3 flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <RefreshCw className="w-3.5 h-3.5" /> Start Over
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Step Navigation */}
                  {quizStep > 0 && quizStep < 3 && (
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setQuizStep((prev) => prev - 1)}
                        className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" /> Previous Question
                      </button>
                      <span className="text-[11px] text-slate-400">Golden Mind Psychiatry PLLC</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONDITIONS WE TREAT (SWIPEABLE MOBILE TABS + CROSS-FADE MATRIX) */}
      <section id="conditions" className="py-16 sm:py-24 bg-[#F4F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <span className="text-xs font-bold text-[#1B4D3E] uppercase tracking-widest bg-emerald-950/5 border border-emerald-900/10 px-3.5 py-1.5 rounded-full inline-block">
              Specialized Psychiatric Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Conditions We Diagnose & Treat
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Swipe or select a condition below to explore symptoms and our evidence-based medical treatment approach.
            </p>
          </div>

          {/* Horizontally Swipeable Touch-Friendly Pill Bar on Mobile */}
          <div
            ref={conditionTabsRef}
            className="flex items-center sm:justify-center gap-2.5 overflow-x-auto no-scrollbar pb-3 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x"
          >
            {conditions.map((c) => {
              const isActive = activeTab === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => handleTabChange(c.id)}
                  className={`snap-start shrink-0 min-h-[46px] px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#1B4D3E] text-white shadow-md shadow-emerald-950/15 scale-[1.02]'
                      : 'bg-white text-slate-600 hover:bg-emerald-50/60 border border-slate-200/80'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full transition-colors ${isActive ? 'bg-emerald-300' : 'bg-slate-300'}`} />
                  <span>{c.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Animated Condition Showcase Card */}
          <div
            className={`bg-white rounded-3xl shadow-xl border border-slate-200/70 overflow-hidden transition-all duration-200 ${
              tabAnimating ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left High-Resolution Photo */}
              <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[340px] lg:min-h-full bg-slate-100">
                <img
                  src={currentCondition.image}
                  alt={currentCondition.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 text-white">
                  <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-widest block mb-1">
                    {currentCondition.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-tight">
                    {currentCondition.title}
                  </h3>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-200 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-emerald-300" />
                    <span>{currentCondition.timeToRelief}</span>
                  </div>
                </div>
              </div>

              {/* Right Clinical Breakdown */}
              <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B4D3E] mb-2">
                      Clinical Perspective
                    </h4>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {currentCondition.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#1B4D3E]" />
                      <span>Key Symptoms We Evaluate</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentCondition.symptoms.map((symptom, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-[#F9FAF8] p-3 rounded-xl border border-slate-200/60"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#1B4D3E] shrink-0 mt-0.5" />
                          <span>{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-teal-700" />
                      <span>Our Treatment Protocol</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 bg-emerald-50/60 border border-emerald-200/70 p-4 rounded-2xl leading-relaxed">
                      {currentCondition.clinicalApproach}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    onClick={() => openBookingWithCondition(currentCondition.id)}
                    className="min-h-[48px] bg-[#1B4D3E] hover:bg-[#133A2E] text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98"
                  >
                    <Calendar className="w-4 h-4 text-emerald-200" />
                    <span>Schedule {currentCondition.shortLabel} Evaluation</span>
                  </button>
                  <a
                    href="tel:4329343185"
                    className="text-xs font-semibold text-slate-600 hover:text-[#1B4D3E] text-center py-2"
                  >
                    Or call (432) 934-3185 to speak with us
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CORE CLINICAL SERVICES (Rich Photography Cards) */}
      <section id="services" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold text-[#1B4D3E] uppercase tracking-widest bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-block">
              Comprehensive Psychiatric Modalities
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Dedicated Clinical Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Grounded in medical precision and genuine human connection, our services support every stage of your mental health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((srv, idx) => (
              <div
                key={srv.id}
                className="group rounded-3xl bg-[#F9FAF8] border border-slate-200/80 hover:border-emerald-700/30 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                {/* Service Photography */}
                <div className="h-56 sm:h-64 relative overflow-hidden bg-slate-200">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1B4D3E] shadow-sm">
                    {srv.badge}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-2.5 group-hover:text-[#1B4D3E] transition">
                      {srv.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {srv.description}
                    </p>
                    <ul className="space-y-2.5">
                      {srv.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#1B4D3E] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 border-t border-slate-200/70 flex items-center justify-between">
                    <button
                      onClick={() =>
                        openBookingWithCondition(
                          srv.id === 'child-adolescent' ? 'adhd' : 'anxiety',
                          srv.id === 'telehealth' ? 'telehealth' : 'in-person'
                        )
                      }
                      className="min-h-[44px] px-4 py-2 rounded-xl bg-emerald-950/5 hover:bg-[#1B4D3E] text-[#1B4D3E] hover:text-white text-xs font-bold flex items-center gap-2 transition cursor-pointer"
                    >
                      <span>Request This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> HIPAA Protected
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. ABOUT OUR PRACTICE & CLINICAL ENVIRONMENT GALLERY */}
      <section id="about" className="py-16 sm:py-24 bg-[#F4F7F4] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Image Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3.5 sm:gap-4">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md h-48 sm:h-60 bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80"
                    alt="Serene, modern medical consultation office"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-36 sm:h-44 bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=700&q=80"
                    alt="Detailed psychiatric diagnostic evaluation notes"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />
                </div>
              </div>

              <div className="space-y-3.5 sm:space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-md h-36 sm:h-44 bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=700&q=80"
                    alt="Empathetic mental health support"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-48 sm:h-60 bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80"
                    alt="Dedicated psychiatric clinician smiling"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Right Clinical Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1B4D3E] uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80">
                About Golden Mind Psychiatry PLLC
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                A Sanctuary for Evidence-Based Psychiatric Healing.
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                At <strong>Golden Mind Psychiatry PLLC</strong>, we believe that exceptional psychiatric care begins with feeling genuinely heard. Too often, mental health visits feel rushed or impersonal. We built our practice around a different standard: unhurried evaluations, clear diagnostic answers, and deeply collaborative treatment planning.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether you are seeking clarity on adult ADHD, relief from persistent anxiety or depression, recovery from trauma, or compassionate psychiatric support for your child or teenager, our team provides steady, judgment-free guidance every step of the way.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#1B4D3E] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Individualized Plans</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Tailored pharmacology & holistic wellness strategies.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#1B4D3E] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Adult & Youth Care</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Supporting individuals, adolescents, and families.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openBookingWithCondition('adhd')}
                  className="min-h-[48px] bg-[#1B4D3E] hover:bg-[#133A2E] text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition cursor-pointer shadow-md"
                >
                  Book Your Initial Consultation
                </button>
                <div className="text-xs text-slate-600">
                  Direct Office Line: <a href="tel:4329343185" className="font-bold text-slate-900 underline">(432) 934-3185</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. TELEHEALTH & VIRTUAL CARE SPOTLIGHT */}
      <section id="telehealth" className="py-16 sm:py-24 bg-[#0F1E19] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/25 text-emerald-300 text-xs font-semibold">
                <Video className="w-3.5 h-3.5" /> Seamless HIPAA Telepsychiatry
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                Confidential Psychiatric Care From the Comfort of Home.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you have a demanding work schedule, live miles away, or simply feel most at ease in your own space, our virtual visits bring board-certified psychiatric care directly to your screen.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    icon: ShieldCheck,
                    title: 'Private, Browser-Based Video',
                    desc: 'Join with one tap from your phone, tablet, or computer—no complicated downloads required.'
                  },
                  {
                    icon: Pill,
                    title: 'Direct E-Prescribing to Your Pharmacy',
                    desc: 'New prescriptions and refills are sent electronically to your local pharmacy immediately after your visit.'
                  },
                  {
                    icon: Clock,
                    title: 'Consistent Weekday Hours',
                    desc: 'Available Monday through Friday, 9:00 AM – 3:00 PM, for both initial evaluations and medication follow-ups.'
                  }
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 text-emerald-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">{item.title}</h4>
                        <p className="text-xs text-slate-300/80 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => openBookingWithCondition('anxiety', 'telehealth')}
                  className="min-h-[48px] bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg transition cursor-pointer text-xs sm:text-sm inline-flex items-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  <span>Schedule a Virtual Telehealth Visit</span>
                </button>
              </div>
            </div>

            {/* Interactive Telehealth Visual Window */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900">
                <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">Golden Mind Secure Telehealth Portal</span>
                  <span className="text-emerald-400 text-[11px] flex items-center gap-1 font-semibold">
                    <Lock className="w-3 h-3" /> Encrypted
                  </span>
                </div>

                <div className="relative aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85"
                    alt="Telemedicine psychiatric video consultation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Clinician Picture-in-Picture */}
                  <div className="absolute bottom-4 right-4 w-28 sm:w-36 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/90 shadow-xl bg-slate-900">
                    <img
                      src="https://images.unsplash.com/photo-1594824813571-638f0263441f?auto=format&fit=crop&w=400&q=80"
                      alt="Psychiatric provider on video"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1.5 left-2 text-[10px] text-white font-semibold bg-slate-950/70 px-2 py-0.5 rounded-md">
                      Golden Mind Clinician
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs text-white border border-white/15">
                    <span className="text-emerald-300 font-semibold block text-[10px]">E-Prescription Ready</span>
                    <span>Connected • HD Audio & Video</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. THE 3-STEP PATIENT JOURNEY */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold text-[#1B4D3E] uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full inline-block">
              Simple, Supportive Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              How Your Care Journey Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From your very first reach-out to ongoing wellness check-ins, we make every step clear and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: '01',
                title: 'Schedule Your Intake',
                desc: 'Request an appointment online or call (432) 934-3185. Choose between a private telehealth video session or an in-clinic evaluation.',
                items: ['Fast intake confirmation', 'Digital intake forms before your visit', 'Weekday slots Mon–Fri (9 AM – 3 PM)']
              },
              {
                step: '02',
                title: 'Comprehensive Evaluation',
                desc: 'Meet with your psychiatric provider for a thorough diagnostic assessment exploring your symptoms, history, and personal wellness goals.',
                items: ['Unhurried 60-minute consultation', 'Clear diagnostic explanation', 'Collaborative treatment roadmap'],
                featured: true
              },
              {
                step: '03',
                title: 'Personalized Care & Follow-Up',
                desc: 'Begin your tailored treatment plan with electronic pharmacy prescriptions and regular follow-up visits to fine-tune your progress.',
                items: ['Thoughtful medication titration', 'Ongoing symptom & side-effect checks', 'Long-term emotional stability']
              }
            ].map((card, i) => (
              <div
                key={i}
                className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-5 ${
                  card.featured
                    ? 'bg-[#1B4D3E] text-white border-[#1B4D3E] shadow-xl'
                    : 'bg-[#F9FAF8] text-slate-800 border-slate-200/80 hover:shadow-lg'
                }`}
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-2xl font-serif font-bold text-base flex items-center justify-center ${
                      card.featured ? 'bg-white text-[#1B4D3E]' : 'bg-[#1B4D3E] text-white'
                    }`}
                  >
                    {card.step}
                  </div>
                  <h3 className={`text-xl font-serif font-bold ${card.featured ? 'text-white' : 'text-slate-900'}`}>
                    {card.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${card.featured ? 'text-emerald-100' : 'text-slate-600'}`}>
                    {card.desc}
                  </p>
                </div>

                <ul className={`space-y-2 pt-4 border-t text-xs ${card.featured ? 'border-emerald-800 text-emerald-100' : 'border-slate-200/70 text-slate-600'}`}>
                  {card.items.map((it, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className={`w-4 h-4 shrink-0 ${card.featured ? 'text-emerald-300' : 'text-[#1B4D3E]'}`} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-16 sm:py-24 bg-[#F4F7F4] border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold text-[#1B4D3E] uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 inline-block">
              Patient Questions & Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Everything you need to know about preparing for your first visit with Golden Mind Psychiatry PLLC.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = faqOpen === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left font-semibold text-slate-900 hover:text-[#1B4D3E] flex items-center justify-between gap-4 transition cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-[#1B4D3E] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-fade-slide-up">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. DIRECT CONTACT & HOURS STRIP */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            <a
              href="tel:4329343185"
              className="flex items-start gap-4 p-6 rounded-2xl bg-[#F9FAF8] border border-slate-200/80 hover:border-[#1B4D3E] transition group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1B4D3E] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Call Our Practice</h4>
                <p className="text-xs text-slate-500 mt-0.5">Direct scheduling & clinical questions</p>
                <span className="text-base font-bold text-[#1B4D3E] mt-2 block group-hover:underline">
                  (432) 934-3185
                </span>
              </div>
            </a>

            <a
              href="mailto:beehobs@yahoo.com"
              className="flex items-start gap-4 p-6 rounded-2xl bg-[#F9FAF8] border border-slate-200/80 hover:border-[#1B4D3E] transition group"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Direct Email</h4>
                <p className="text-xs text-slate-500 mt-0.5">Reach our administrative team</p>
                <span className="text-sm font-bold text-teal-900 mt-2 block group-hover:underline break-all">
                  beehobs@yahoo.com
                </span>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#F9FAF8] border border-slate-200/80">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Practice Hours</h4>
                <p className="text-xs text-slate-500 mt-0.5">In-Clinic & Telehealth Appointments</p>
                <span className="text-sm font-bold text-slate-900 mt-2 block">
                  Monday – Friday: 9:00 AM – 3:00 PM
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. MULTI-STEP ANIMATED APPOINTMENT INTAKE MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 animate-scale-in max-h-[92vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={resetBookingForm}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!formSubmitted ? (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                {/* Modal Header & Smooth Step Progress Bar */}
                <div>
                  <span className="text-[11px] font-bold text-[#1B4D3E] uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                    Step {formStep} of 3 • Confidential Intake
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-2">
                    Request a Psychiatric Consultation
                  </h3>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-3">
                    <div
                      className="h-full bg-[#1B4D3E] transition-all duration-300 rounded-full"
                      style={{ width: `${(formStep / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* STEP 1: Patient & Visit Type */}
                {formStep === 1 && (
                  <div className="space-y-5 animate-fade-slide-up">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        1. Who is this appointment for?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: 'adult', label: 'Adult Patient', sub: 'Ages 18+' },
                          { id: 'youth', label: 'Child / Adolescent', sub: 'Ages 6 – 17' }
                        ].map((item) => (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => handleInputChange('ageGroup', item.id)}
                            className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                              formData.ageGroup === item.id
                                ? 'border-[#1B4D3E] bg-emerald-50/70 text-slate-900'
                                : 'border-slate-200 hover:border-slate-300 text-slate-600'
                            }`}
                          >
                            <span className="text-xs sm:text-sm font-bold block">{item.label}</span>
                            <span className="text-[11px] text-slate-500">{item.sub}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        2. Preferred Consultation Format
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: 'telehealth', label: 'Telehealth Video', sub: 'Private virtual session' },
                          { id: 'in-person', label: 'In-Clinic Visit', sub: 'In-office consultation' }
                        ].map((item) => (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => handleInputChange('careType', item.id)}
                            className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                              formData.careType === item.id
                                ? 'border-[#1B4D3E] bg-emerald-50/70 text-slate-900'
                                : 'border-slate-200 hover:border-slate-300 text-slate-600'
                            }`}
                          >
                            <span className="text-xs sm:text-sm font-bold block">{item.label}</span>
                            <span className="text-[11px] text-slate-500">{item.sub}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        3. Are you a new or returning patient?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: 'new', label: 'New Patient Intake' },
                          { id: 'returning', label: 'Returning Follow-Up' }
                        ].map((item) => (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => handleInputChange('patientType', item.id)}
                            className={`p-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                              formData.patientType === item.id
                                ? 'border-[#1B4D3E] bg-[#1B4D3E] text-white'
                                : 'border-slate-200 text-slate-700'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setFormStep(2)}
                        className="w-full sm:w-auto min-h-[48px] bg-[#1B4D3E] hover:bg-[#133A2E] text-white font-semibold px-7 py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Continue to Clinical Focus</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Condition Focus & Payment Preference */}
                {formStep === 2 && (
                  <div className="space-y-5 animate-fade-slide-up">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Primary Area of Focus
                      </label>
                      <select
                        value={formData.condition}
                        onChange={(e) => handleInputChange('condition', e.target.value)}
                        className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] bg-white"
                      >
                        <option value="adhd">ADHD & Executive Functioning</option>
                        <option value="anxiety">Anxiety & Panic Disorders</option>
                        <option value="depression">Depression & Low Mood</option>
                        <option value="mood">Bipolar & Mood Disorders</option>
                        <option value="ptsd">PTSD & Trauma Recovery</option>
                        <option value="medication">Medication Management / Refill Review</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Payment / Coverage Preference
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: 'insurance', label: 'Using Insurance / Superbill' },
                          { id: 'self-pay', label: 'Direct Self-Pay' }
                        ].map((item) => (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => handleInputChange('paymentMethod', item.id)}
                            className={`p-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                              formData.paymentMethod === item.id
                                ? 'border-[#1B4D3E] bg-emerald-50/80 text-[#1B4D3E]'
                                : 'border-slate-200 text-slate-600'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Brief Confidential Note (Optional)
                      </label>
                      <textarea
                        rows="3"
                        placeholder="Share any goals, current medications, or questions for our provider..."
                        value={formData.notes}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                        className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1B4D3E]"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="min-h-[48px] px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormStep(3)}
                        className="min-h-[48px] bg-[#1B4D3E] hover:bg-[#133A2E] text-white font-semibold px-7 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
                      >
                        <span>Continue to Contact Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact Info & Preferred Time */}
                {formStep === 3 && (
                  <div className="space-y-4 animate-fade-slide-up">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full legal name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1B4D3E]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(432) 000-0000"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1B4D3E]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1B4D3E]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Preferred Weekday Date
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                          className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1B4D3E]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Preferred Window (9AM–3PM)
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                          className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] bg-white"
                        >
                          <option>Morning (9:00 AM - 11:30 AM)</option>
                          <option>Midday (11:30 AM - 1:30 PM)</option>
                          <option>Early Afternoon (1:30 PM - 3:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F4F7F4] border border-emerald-900/10 text-[11px] text-slate-600 flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#1B4D3E] shrink-0 mt-0.5" />
                      <span>
                        Protected by HIPAA privacy standards. Our intake coordinator will reach out within 1 business day to confirm your exact appointment slot.
                      </span>
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setFormStep(2)}
                        className="min-h-[48px] px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="min-h-[48px] bg-[#1B4D3E] hover:bg-[#133A2E] text-white font-semibold px-7 py-3 rounded-xl text-xs sm:text-sm shadow-lg transition flex items-center gap-2 cursor-pointer"
                      >
                        <Calendar className="w-4 h-4 text-emerald-200" />
                        <span>Complete Consultation Request</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              /* Animated Confirmation View */
              <div className="text-center py-6 space-y-4 animate-fade-slide-up">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#1B4D3E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Consultation Request Received
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Golden Mind Psychiatry PLLC has received your intake request and will contact you at{' '}
                  <strong>{formData.phone || formData.email}</strong> during our clinic hours (Mon–Fri, 9:00 AM – 3:00 PM).
                </p>
                <div className="p-4 rounded-2xl bg-[#F4F7F4] border border-emerald-900/10 text-xs text-slate-700 max-w-sm mx-auto text-left space-y-1.5">
                  <div><strong>Format:</strong> {formData.careType === 'telehealth' ? 'Telehealth Video Visit' : 'In-Clinic Consultation'}</div>
                  <div><strong>Time Window:</strong> {formData.preferredTime}</div>
                  <div><strong>Direct Clinic Phone:</strong> (432) 934-3185</div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={resetBookingForm}
                    className="min-h-[46px] bg-[#1B4D3E] text-white font-semibold px-7 py-2.5 rounded-xl text-xs sm:text-sm hover:bg-[#133A2E] transition cursor-pointer"
                  >
                    Return to Golden Mind Psychiatry
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 13. COMPREHENSIVE MEDICAL FOOTER */}
      <footer className="bg-[#0B1612] text-slate-400 text-xs pt-14 pb-12 border-t border-emerald-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Brand & Crisis Care Note */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1B4D3E] flex items-center justify-center text-white">
                  <Brain className="w-5 h-5 text-emerald-200" />
                </div>
                <div>
                  <span className="font-serif text-lg font-bold text-white block leading-none">
                    Golden Mind Psychiatry
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-widest block mt-1">
                    PLLC • Your Path to Emotional Well-Being
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Compassionate psychiatric evaluations, individualized medication management, child & adolescent mental healthcare, and secure telepsychiatry consultations.
              </p>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-slate-300 space-y-1">
                <div className="text-emerald-300 font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" /> Crisis Support Resource
                </div>
                <p className="text-slate-400 leading-normal">
                  If you or someone you know is in immediate danger or experiencing a mental health crisis, call or text <strong>988</strong> or visit your nearest emergency room.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-2.5">
              <h4 className="text-white font-bold text-sm">Clinical Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#services" className="hover:text-emerald-300 transition">Psychiatric Evaluations</a></li>
                <li><a href="#services" className="hover:text-emerald-300 transition">Medication Management</a></li>
                <li><a href="#services" className="hover:text-emerald-300 transition">Child & Adolescent Psychiatry</a></li>
                <li><a href="#telehealth" className="hover:text-emerald-300 transition">Telehealth Video Consultations</a></li>
              </ul>
            </div>

            {/* Conditions */}
            <div className="space-y-2.5">
              <h4 className="text-white font-bold text-sm">Conditions Treated</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#conditions" onClick={() => setActiveTab('adhd')} className="hover:text-emerald-300 transition">ADHD & Focus Challenges</a></li>
                <li><a href="#conditions" onClick={() => setActiveTab('anxiety')} className="hover:text-emerald-300 transition">Anxiety & Panic Disorders</a></li>
                <li><a href="#conditions" onClick={() => setActiveTab('depression')} className="hover:text-emerald-300 transition">Major Depressive Disorder</a></li>
                <li><a href="#conditions" onClick={() => setActiveTab('mood')} className="hover:text-emerald-300 transition">Bipolar & Mood Disorders</a></li>
                <li><a href="#conditions" onClick={() => setActiveTab('ptsd')} className="hover:text-emerald-300 transition">PTSD & Trauma Recovery</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-2.5">
              <h4 className="text-white font-bold text-sm">Contact & Hours</h4>
              <div className="space-y-2 text-slate-400">
                <p><strong className="text-slate-200">Phone:</strong> <a href="tel:4329343185" className="hover:text-emerald-300">(432) 934-3185</a></p>
                <p><strong className="text-slate-200">Email:</strong> <a href="mailto:beehobs@yahoo.com" className="hover:text-emerald-300">beehobs@yahoo.com</a></p>
                <p><strong className="text-slate-200">Hours:</strong> Mon – Fri, 9:00 AM – 3:00 PM</p>
                <div className="pt-2">
                  <button
                    onClick={() => openBookingWithCondition('adhd')}
                    className="bg-[#1B4D3E] hover:bg-emerald-700 text-white font-semibold px-4 py-2.5 rounded-xl text-xs transition cursor-pointer"
                  >
                    Request Appointment
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              © {new Date().getFullYear()} Golden Mind Psychiatry PLLC. All Rights Reserved.
            </div>
            <div className="flex items-center gap-5">
              <span>HIPAA Compliant Practice</span>
              <span>•</span>
              <span>Confidential Mental Healthcare</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 14. FLOATING MOBILE BOTTOM QUICK-ACTION BAR (Only on Mobile Screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/90 px-3 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <div className="max-w-md mx-auto grid grid-cols-12 gap-2.5 items-center">
          <a
            href="tel:4329343185"
            className="col-span-5 min-h-[48px] rounded-xl bg-slate-100 active:bg-slate-200 text-slate-900 font-bold text-xs flex items-center justify-center gap-2 transition"
          >
            <Phone className="w-4 h-4 text-[#1B4D3E]" />
            <span>Call Clinic</span>
          </a>
          <button
            onClick={() => openBookingWithCondition('adhd')}
            className="col-span-7 min-h-[48px] rounded-xl bg-[#1B4D3E] active:bg-[#133A2E] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-950/20 transition cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-emerald-200" />
            <span>Book Intake Visit</span>
          </button>
        </div>
      </div>

    </div>
  );
}