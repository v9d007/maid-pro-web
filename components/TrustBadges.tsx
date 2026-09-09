import React from "react";
import { ShieldCheck, RefreshCw, Sparkles, Award } from "lucide-react";

export const TrustBadges: React.FC = () => {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: "100% Police & Identity Verified",
      desc: "Mandatory Aadhaar, address, and criminal background checks for every helper.",
      color: "text-primary bg-primary/10 border-primary/20",
    },
    {
      icon: RefreshCw,
      title: "Free Instant Backup Replacement",
      desc: "If your helper is on leave or unsatisfied, we provide an immediate backup.",
      color: "text-tertiary bg-tertiary-container/15 border-tertiary/20",
    },
    {
      icon: Sparkles,
      title: "Trained & Hygiene Certified",
      desc: "Professional training in modern cleaning equipment, stain removal, and hygiene.",
      color: "text-primary bg-primary/10 border-primary/20",
    },
    {
      icon: Award,
      title: "Zero Advance / Pay After Work",
      desc: "Complete transparency with no hidden fees. Pay only after 100% satisfaction.",
      color: "text-tertiary bg-tertiary-container/15 border-tertiary/20",
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-surface border-y border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2x2 Grid on Mobile (<lg), 4 Cols on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-3.5 sm:p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 hover:border-outline-variant/60 transition hover-card-elevation group flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-3 sm:mb-4 border transition ${item.color} group-hover:scale-105`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  
                  <h3 className="text-xs sm:text-sm font-bold text-on-surface mb-1 sm:mb-1.5 leading-snug font-heading">
                    {item.title}
                  </h3>
                  
                  <p className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
