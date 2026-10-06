import React from "react";
import { Search, UserCheck, Sparkles, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: "01",
      stepTag: "STEP 1",
      title: "Choose Your Service",
      desc: "Select Deep Cleaning, Hourly Maid, Cook, or Nanny with your preferred time slot and Agra area.",
      icon: Search,
      highlight: "Takes under 1 min",
      actionText: "Instant WhatsApp Booking",
      badgeIcon: Clock,
    },
    {
      stepNumber: "02",
      stepTag: "STEP 2",
      title: "Verified Helper Arrives",
      desc: "A background-checked, police-cleared professional arrives punctually at your doorstep in Agra.",
      icon: UserCheck,
      highlight: "Same-Day Service",
      actionText: "Aadhaar & Police Cleared",
      badgeIcon: ShieldCheck,
    },
    {
      stepNumber: "03",
      stepTag: "STEP 3",
      title: "Pay Post-Satisfaction",
      desc: "Enjoy a spotless home. Pay securely via UPI, Card, or Cash only after you are 100% satisfied.",
      icon: Sparkles,
      highlight: "Zero Advance Required",
      actionText: "Pay After 100% Satisfaction",
      badgeIcon: CheckCircle2,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Snabbit-Style Minimalist Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <span>In 3 Simple Steps</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight">
            How Maid Pro Works For <span className="text-amber-600">You</span>
          </h2>
          <p className="text-xs sm:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Booking professional domestic assistance in Agra takes less than 60 seconds.
          </p>
        </div>

        {/* Snabbit-Style Step Cards with Giant Watermark Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const BadgeIcon = s.badgeIcon;

            return (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-2xl sm:rounded-[22px] p-6 sm:p-8 border border-outline-variant/30 shadow-xs hover-card-elevation transition relative flex flex-col justify-between overflow-hidden group"
              >
                {/* Snabbit Giant Subtle Watermark Number */}
                <span
                  aria-hidden="true"
                  className="absolute top-2 right-4 text-7xl sm:text-8xl font-black text-slate-100 pointer-events-none select-none font-heading group-hover:text-primary/10 transition-colors"
                >
                  {s.stepNumber}
                </span>

                <div className="relative z-10">
                  {/* Step Tag Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-primary text-white text-[11px] font-extrabold rounded-full tracking-wider shadow-xs uppercase">
                      {s.stepTag}
                    </span>

                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-105 transition">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-on-surface mb-2 font-heading">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="relative z-10 pt-4 border-t border-outline-variant/20 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                    <BadgeIcon className="w-3.5 h-3.5 text-tertiary flex-shrink-0" />
                    <span>{s.actionText}</span>
                  </div>
                  
                  <span className="text-[10px] font-semibold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-md border border-outline-variant/30">
                    {s.highlight}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
