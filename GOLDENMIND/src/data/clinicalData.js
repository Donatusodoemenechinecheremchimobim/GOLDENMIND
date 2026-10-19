import {
  Stethoscope,
  Brain,
  Users,
  Video,
  Home,
  HeartHandshake,
  ClipboardCheck,
  Calendar
} from 'lucide-react';

export const NAV_LINKS = [
  { path: '/', label: 'Home', shortLabel: 'Home', icon: Home },
  { path: '/about', label: 'About Practice', shortLabel: 'About', icon: HeartHandshake },
  { path: '/services', label: 'Clinical Services', shortLabel: 'Services', icon: Stethoscope },
  { path: '/conditions', label: 'Conditions Treated', shortLabel: 'Conditions', icon: Brain },
  { path: '/telehealth', label: 'Telehealth Portal', shortLabel: 'Telehealth', icon: Video },
  { path: '/patients', label: 'New Patients & FAQ', shortLabel: 'Patients', icon: ClipboardCheck },
  { path: '/contact', label: 'Contact & Book', shortLabel: 'Contact', icon: Calendar }
];

export const CONDITIONS = [
  {
    id: 'adhd',
    name: 'ADHD & Executive Function',
    shortName: 'ADHD',
    category: 'Neurodevelopmental & Cognitive',
    tagline: 'Clarity, sustained focus, and calm daily structure for children, teens, and adults.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85',
    overview:
      'Attention-Deficit/Hyperactivity Disorder affects far more than workplace or school attention—it shapes working memory, emotional regulation, time perception, and self-esteem. At Golden Mind Psychiatry, we look beyond surface checklists to understand your unique cognitive architecture.',
    symptoms: [
      'Difficulty sustaining attention on multi-step tasks or reading',
      'Time blindness, chronic procrastination, and task-switching overwhelm',
      'Internal mental restlessness, racing thoughts, or verbal impulsivity',
      'Emotional dysregulation, rejection sensitivity, and burnout cycles'
    ],
    diagnosticProcess:
      'We conduct a structured 60-minute neurodevelopmental interview, utilize validated adult and pediatric ADHD clinical scales, and carefully rule out anxiety, sleep disorders, or nutritional mimics.',
    pharmacotherapy:
      'Individualized stimulant and non-stimulant medication options titrated conservatively for smooth, all-day coverage without harsh afternoon crashes or sleep disruption.',
    holisticSupport:
      'Executive functioning scaffolding, school 504/IEP accommodation documentation for youth, and workplace productivity accommodations.'
  },
  {
    id: 'anxiety',
    name: 'Anxiety & Panic Disorders',
    shortName: 'Anxiety',
    category: 'Autonomic & Worry Spectrum',
    tagline: 'Quieting physiological hyperarousal and restoring a grounded sense of calm.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=85',
    overview:
      'Generalized anxiety, social apprehension, and sudden panic attacks can narrow your world and exhaust your body. Our approach calms an overactive nervous system while helping you regain confidence in work, school, and relationships.',
    symptoms: [
      'Persistent, hard-to-control worry and "what-if" rumination',
      'Physical tension, rapid heartbeat, chest tightness, or GI distress',
      'Difficulty falling asleep due to racing thoughts at night',
      'Avoidance of social situations, presentations, or travel'
    ],
    diagnosticProcess:
      'Comprehensive evaluation of autonomic triggers, panic frequency, endocrine/medical rule-outs, and co-occurring mood or attention conditions.',
    pharmacotherapy:
      'Evidence-based, non-habit-forming daily protocols alongside targeted acute symptom relief strategies designed to restore calm without emotional blunting.',
    holisticSupport:
      'Somatic nervous system regulation techniques, sleep hygiene restoration, and seamless collaboration with Cognitive Behavioral Therapy (CBT).'
  },
  {
    id: 'depression',
    name: 'Major Depression & Mood',
    shortName: 'Depression',
    category: 'Affective & Mood Disorders',
    tagline: 'Lifting emotional heaviness and rebuilding vitality, motivation, and joy.',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=85',
    overview:
      'Depression is a complex neurobiological condition—never a personal failing. Whether you are walking through a first depressive episode, postpartum mood shifts, or persistent low mood, we formulate compassionate, biological and lifestyle care plans.',
    symptoms: [
      'Loss of interest, warmth, or pleasure in once-meaningful activities',
      'Persistent physical exhaustion, heavy limbs, and brain fog',
      'Disrupted sleep architecture (insomnia or oversleeping) and appetite shifts',
      'Feelings of worthlessness, heavy guilt, or emotional numbness'
    ],
    diagnosticProcess:
      'In-depth biopsychosocial evaluation mapping symptom history, seasonal patterns, family genetics, and past medication tolerability.',
    pharmacotherapy:
      'Modern antidepressant regimens selected for your specific symptom profile (energy, sleep, cognition) with proactive side-effect prevention.',
    holisticSupport:
      'Circadian rhythm alignment, behavioral activation pacing, and coordination with individual psychotherapy and primary care.'
  },
  {
    id: 'ptsd',
    name: 'PTSD & Trauma Recovery',
    shortName: 'PTSD & Trauma',
    category: 'Trauma & Stress-Related',
    tagline: 'Trauma-informed psychiatric care built on safety, dignity, and patient autonomy.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=85',
    overview:
      'Unresolved trauma keeps the brain’s threat-detection system locked on high alert. We deliver gentle, trauma-informed psychiatric care where you never have to recount painful details before you are ready, remaining in full control of every decision.',
    symptoms: [
      'Intrusive memories, flashbacks, or distressing trauma nightmares',
      'Hypervigilance, exaggerated startle response, and feeling unsafe',
      'Emotional detachment, numbness, or difficulty trusting others',
      'Irritability, fragmented sleep, and nervous system exhaustion'
    ],
    diagnosticProcess:
      'Gentle, pacing-focused trauma assessment focused on current nervous system symptoms rather than forced trauma retelling.',
    pharmacotherapy:
      'Targeted physiological stabilization for nightmare reduction, restorative sleep architecture, and daytime hyperarousal relief.',
    holisticSupport:
      'Coordinated care with EMDR, somatic experiencing, and trauma-focused psychotherapists.'
  },
  {
    id: 'bipolar',
    name: 'Bipolar & Mood Stabilization',
    shortName: 'Bipolar',
    category: 'Mood Spectrum Stabilization',
    tagline: 'Protecting your baseline stability while honoring your natural creativity and drive.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1000&q=85',
    overview:
      'Bipolar spectrum conditions (Bipolar I, Bipolar II, and Cyclothymia) require nuanced diagnostic skill to distinguish from unipolar depression or ADHD. We focus on long-term mood protection with modern, metabolically gentle regimens.',
    symptoms: [
      'Periods of elevated, energized, or irritable mood with reduced need for sleep',
      'Alternating episodes of deep exhaustion and depressive withdrawal',
      'Rapid speech, racing creative ideas, or impulsive decision-making during highs',
      'High sensitivity to sleep schedule or time-zone disruptions'
    ],
    diagnosticProcess:
      'Longitudinal mood timeline reconstruction, family history mapping, and careful screening before any antidepressant exposure.',
    pharmacotherapy:
      'Modern mood stabilizers and atypical options selected for high efficacy, cognitive sharpness, and long-term metabolic wellness.',
    holisticSupport:
      'Circadian rhythm protection, early-warning prodrome mapping, and proactive lab monitoring.'
  }
];

export const SERVICES = [
  {
    id: 'evaluations',
    title: 'Psychiatric Evaluations & Assessments',
    subtitle: 'Comprehensive 60-Minute Diagnostic Intake',
    badge: 'Foundational First Step',
    description:
      'Unhurried, comprehensive diagnostic evaluations that examine your biological health, personal history, lifestyle, and goals to establish an accurate clinical diagnosis.',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1000&q=85',
    icon: Stethoscope,
    duration: '60 Minutes',
    format: 'In-Person or Secure Telehealth',
    whatHappens: [
      'In-depth conversation about your current symptoms, stressors, and personal goals',
      'Review of medical history, past medications, family history, and sleep/nutrition',
      'Clear explanation of diagnostic impressions in plain, compassionate language',
      'Co-creation of an evidence-based treatment plan before the visit concludes'
    ],
    howToPrepare: [
      'Complete your secure digital intake packet sent via email/SMS prior to your visit',
      'Have a list of current or past medications and dosages handy',
      'Prepare any questions you have about diagnosis, therapy, or medication options'
    ]
  },
  {
    id: 'medication',
    title: 'Personalized Medication Management',
    subtitle: 'Precision, Conservative Pharmacotherapy',
    badge: 'Ongoing Care & Titration',
    description:
      'Thoughtful, collaborative prescribing guided by clinical evidence. We prioritize the lowest effective dose, minimize side effects, and monitor your progress closely.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=85',
    icon: Brain,
    duration: '20–30 Minute Follow-Ups',
    format: 'In-Person or Secure Telehealth',
    whatHappens: [
      'Shared decision-making reviewing benefits, timelines, and potential side effects',
      'Careful dosage adjustments (titration) based on your real-world symptom response',
      'Direct electronic prescribing (e-Rx) sent immediately to your preferred pharmacy',
      'Coordination with your primary care physician or therapist when helpful'
    ],
    howToPrepare: [
      'Jot down any changes in sleep, energy, focus, or mood since your last visit',
      'Confirm your preferred local or mail-order pharmacy address and phone number',
      'Let us know if you need any prescription refills during your session'
    ]
  },
  {
    id: 'youth',
    title: 'Child & Adolescent Psychiatry',
    subtitle: 'Developmentally Sensitive Care for Ages 6–17',
    badge: 'Pediatric & Family Centered',
    description:
      'Warm, specialized psychiatric care for children and teenagers navigating ADHD, school anxiety, mood shifts, or behavioral challenges—partnering closely with parents.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85',
    icon: Users,
    duration: '60-Min Intake / 30-Min Follow-Up',
    format: 'Parent + Child Collaborative Visits',
    whatHappens: [
      'Age-appropriate, comforting conversation that helps children and teens feel safe',
      'Dedicated time with parents/guardians to review developmental and school history',
      'Conservative, pediatric-validated treatment recommendations',
      'Support with school 504 Plan / IEP clinical documentation when indicated'
    ],
    howToPrepare: [
      'Bring recent teacher feedback, report cards, or existing IEP/504 evaluations',
      'Both a legal parent/guardian and the child/teen must attend the consultation',
      'Invite your child to share 1 or 2 things they wish felt easier at school or home'
    ]
  },
  {
    id: 'telehealth-service',
    title: 'Confidential Telehealth Psychiatry',
    subtitle: 'HIPAA-Compliant Virtual Video Consultations',
    badge: '100% Virtual Convenience',
    description:
      'Access board-certified psychiatric care from the privacy of your home or office. Our encrypted video platform eliminates commute stress while keeping care deeply personal.',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1000&q=85',
    icon: Video,
    duration: 'Mon–Fri: 9:00 AM – 3:00 PM',
    format: '1-Click Browser Video Link',
    whatHappens: [
      'Receive a secure SMS/email link 15 minutes prior to your appointment',
      'Connect from any smartphone, tablet, or computer—no app installation needed',
      'Full diagnostic evaluation or medication follow-up identical to in-clinic quality',
      'Digital superbills, lab orders, and e-prescriptions handled seamlessly online'
    ],
    howToPrepare: [
      'Choose a quiet, private, well-lit space (home, private office, or parked car)',
      'Ensure a stable Wi-Fi or cellular data connection',
      'Use headphones if you prefer extra audio privacy during your session'
    ]
  }
];

export const WELLNESS_QUESTIONS = [
  {
    step: 1,
    question: 'What has been weighing on your mind or daily energy the most lately?',
    options: [
      { id: 'focus', label: 'Trouble focusing, staying organized, or finishing tasks', match: 'adhd', rec: 'ADHD & Executive Function Evaluation' },
      { id: 'worry', label: 'Constant worry, racing thoughts, or physical tension', match: 'anxiety', rec: 'Anxiety & Nervous System Stabilization' },
      { id: 'mood', label: 'Low mood, emotional exhaustion, or loss of motivation', match: 'depression', rec: 'Comprehensive Mood & Depression Care' },
      { id: 'trauma', label: 'Past trauma, disrupted sleep, or unpredictable mood shifts', match: 'ptsd', rec: 'Trauma-Informed & Mood Stabilization Assessment' }
    ]
  },
  {
    step: 2,
    question: 'Who are you seeking psychiatric support for today?',
    options: [
      { id: 'self', label: 'Myself (Adult 18+)' },
      { id: 'child', label: 'My Child or Teen (Ages 6–17)' },
      { id: 'loved', label: 'Exploring options for a family member' }
    ]
  },
  {
    step: 3,
    question: 'How would you prefer to connect with your provider?',
    options: [
      { id: 'telehealth', label: 'Secure Video Telehealth (From home or private office)' },
      { id: 'inperson', label: 'In-Person Clinic Visit' },
      { id: 'either', label: 'Flexible — Whichever has the earliest availability' }
    ]
  }
];

export const FAQS = [
  {
    category: 'First Visit & Evaluations',
    question: 'What happens during my first psychiatric evaluation?',
    answer:
      'Your initial consultation is an unhurried, 60-minute conversation. We review your current symptoms, personal and family medical history, sleep, lifestyle factors, and past experiences with therapy or medication. Together, we clarify your diagnosis and co-create an evidence-based treatment plan you feel completely comfortable with.'
  },
  {
    category: 'Medications & Prescribing',
    question: 'Will I automatically be placed on medication?',
    answer:
      'Never without your full agreement. While medication management is one of our core specialties, we practice shared decision-making. We explain the benefits, expected timeline, and potential side effects of any medication option alongside lifestyle, sleep, and psychotherapy recommendations.'
  },
  {
    category: 'Telehealth & Virtual Care',
    question: 'How do telehealth virtual appointments work?',
    answer:
      'Once your appointment is scheduled, you will receive a secure, HIPAA-compliant video link via email and text message. Simply click the link from your smartphone, tablet, or computer at your appointment time—no complicated software downloads required. Prescriptions are sent electronically to your local pharmacy.'
  },
  {
    category: 'Child & Adolescent Care',
    question: 'Do you treat children and teenagers?',
    answer:
      'Yes. We provide specialized child and adolescent psychiatric evaluations and medication management for youth ages 6 to 17. We work closely with parents and guardians, and with your permission, we can coordinate with your child’s pediatrician, therapist, or school support team.'
  },
  {
    category: 'Scheduling & Hours',
    question: 'What are your hours and how quickly can I be seen?',
    answer:
      'Our clinic hours are Monday through Friday from 9:00 AM to 3:00 PM. We strive to offer prompt new-patient intake availability—typically within the same or following week—so you do not have to wait months when seeking support.'
  },
  {
    category: 'Privacy & Records',
    question: 'Is my psychiatric care completely confidential?',
    answer:
      'Yes. Golden Mind Psychiatry PLLC adheres to strict federal HIPAA privacy and security standards. Your medical records, video sessions, and personal information are never shared without your explicit written authorization.'
  }
];
