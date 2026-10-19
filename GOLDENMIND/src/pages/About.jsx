import React from 'react';
import { HeartHandshake, Clock, ShieldCheck, Users, Video } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <section className="bg-[#132A21] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#A7E3C9] text-xs font-semibold">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>About Golden Mind Psychiatry PLLC</span>
            </div>
            <h1 className="font-serif-clinical text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
              Compassionate Psychiatry Rooted in Clinical Excellence.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We believe mental health care should never feel rushed, impersonal, or out of reach. Our practice was founded to give every child, teen, and adult a safe space to heal and thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4738]">
              Our Mission & Clinical Philosophy
            </span>
            <h2 className="font-serif-clinical text-3xl sm:text-4xl font-medium text-slate-900 leading-tight">
              Understanding the whole person—never just a symptom list.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Golden Mind Psychiatry PLLC is a dedicated mental health practice committed to supporting individuals and families on their journey to emotional well-being. Our mission is to help our patients achieve mental health stability and an improved quality of life through evidence-based treatment approaches and a genuine commitment to understanding each person’s unique life story.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Whether you are navigating ADHD, anxiety, depression, mood disorders, PTSD, or bipolar disorder, our experienced clinical team provides thorough diagnostic evaluations and thoughtful medication management tailored to your biology and personal preferences.
            </p>

            <div className="bg-[#EAF3EE] p-6 rounded-3xl border border-[#CBE2D6] space-y-2">
              <p className="font-serif-clinical text-xl italic text-[#153327]">
                “True psychiatric healing happens when scientific precision meets unhurried human empathy.”
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1F4738]">
                — Golden Mind Psychiatry Clinical Standard
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85"
                  alt="Clinician listening attentively"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=85"
                  alt="Calm restorative workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-6">
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=85"
                  alt="Warm medical consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=85"
                  alt="Peaceful clinical setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] p-8 sm:p-12 border border-slate-200/80 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1F4738]">
              What Sets Us Apart
            </span>
            <h3 className="font-serif-clinical text-3xl sm:text-4xl font-medium text-slate-900">
              Our Four Pillars of Psychiatric Care
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: 'Unhurried 60-Min Intakes',
                desc: 'We take the time to listen deeply to your history, context, and goals rather than rushing through a 15-minute checklist.'
              },
              {
                icon: ShieldCheck,
                title: 'Shared Decision-Making',
                desc: 'You are the co-author of your care plan. We explain every option transparently and respect your preferences.'
              },
              {
                icon: Users,
                title: 'Lifespan Continuity',
                desc: 'Equipped to care for children, adolescents, and adults so families have a trusted, consistent psychiatric home.'
              },
              {
                icon: Video,
                title: 'Accessible Hybrid Care',
                desc: 'Seamless switching between in-clinic visits and HIPAA-secure telehealth appointments whenever life gets busy.'
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200/60 space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#1F4738] text-[#A7E3C9] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
