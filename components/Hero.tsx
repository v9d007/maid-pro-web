"use client";

import React from "react";
import { ShieldCheck, ThumbsUp, RefreshCw, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
  onOpenBooking?: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-white dark:bg-[#0e171e] overflow-hidden py-12 sm:py-16 lg:py-20 border-b border-slate-100 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clean Typography, Copy & Minimalist Trust Pills */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Bold, Clean Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[3.5rem] text-slate-900 dark:text-slate-50 tracking-tight leading-[1.12]">
              {t.hero.headingLine1}<br />
              <span className="text-primary dark:text-emerald-400">{t.hero.headingLine2}</span>
            </h1>

            {/* Clear, Airy Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Minimalist Trust Pill Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>{t.hero.verifiedStaff}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-xs">
                <ThumbsUp className="w-4 h-4 text-primary dark:text-teal-400 flex-shrink-0" />
                <span>{t.hero.satisfactionGuaranteed}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-xs">
                <RefreshCw className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <span>{t.hero.instantReplacement}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-xs">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>{t.hero.payAfterWork}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean, Pristine Living Room Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl lg:rounded-[32px] overflow-hidden border border-slate-200/80 dark:border-slate-700 shadow-sm bg-slate-50 dark:bg-slate-800">
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&auto=format&fit=crop&q=90"
                alt="Spotless, serene living room in Agra"
                className="w-full h-80 sm:h-96 lg:h-[440px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


