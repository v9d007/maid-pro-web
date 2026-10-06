"use client";

import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS_ROW_1, TESTIMONIALS_ROW_2, getTestimonialDetails } from "@/data/testimonials";
import { useLanguage } from "@/context/LanguageContext";

export const Testimonials: React.FC = () => {
  const { language, t } = useLanguage();

  // Duplicate arrays to create continuous infinite loops
  const row1 = [...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1];
  const row2 = [...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#fef4ee] dark:bg-[#0d1922] border-y border-orange-100/70 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-200">
      
      {/* Decorative ambient background radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 sm:mb-14">
        {/* Centered Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-50 font-heading tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-xs sm:text-base text-slate-700 dark:text-slate-200 max-w-xl mx-auto leading-relaxed font-medium">
            {t.testimonials.subtitle}
          </p>
        </div>
      </div>

      {/* Dual Opposite-Direction Scrolling Container */}
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 relative">
        <div className="relative w-full overflow-hidden space-y-4 sm:space-y-5 py-2">
          
          {/* Left & Right Soft Fade Edge Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-12 md:w-16 bg-gradient-to-r from-[#fef4ee] dark:from-[#0d1922] via-[#fef4ee]/90 dark:via-[#0d1922]/90 to-transparent z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-12 md:w-16 bg-gradient-to-l from-[#fef4ee] dark:from-[#0d1922] via-[#fef4ee]/90 dark:via-[#0d1922]/90 to-transparent z-20"></div>

          {/* ROW 1: Scrolls to the Left */}
          <div className="flex gap-4 sm:gap-5 animate-marquee-left hover:[animation-play-state:paused] cursor-pointer w-max">
            {row1.map((item, idx) => {
              const details = getTestimonialDetails(item, language);
              return (
                <div
                  key={`row1-${item.id}-${idx}`}
                  className="w-[280px] sm:w-[320px] shrink-0 bg-white dark:bg-[#111c24] rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between select-none"
                >
                  <div className="space-y-2.5">
                    {/* 5 Stars */}
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {Array.from({ length: details.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-normal">
                      "{details.comment}"
                    </p>
                  </div>

                  {/* Author & Location */}
                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-50 font-heading">{details.name}</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 font-medium">{details.location}</p>
                    </div>

                    <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/80">
                      {details.serviceUsed}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ROW 2: Scrolls to the Right */}
          <div className="flex gap-4 sm:gap-5 animate-marquee-right hover:[animation-play-state:paused] cursor-pointer w-max">
            {row2.map((item, idx) => {
              const details = getTestimonialDetails(item, language);
              return (
                <div
                  key={`row2-${item.id}-${idx}`}
                  className="w-[280px] sm:w-[320px] shrink-0 bg-white dark:bg-[#111c24] rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between select-none"
                >
                  <div className="space-y-2.5">
                    {/* 5 Stars */}
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {Array.from({ length: details.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-normal">
                      "{details.comment}"
                    </p>
                  </div>

                  {/* Author & Location */}
                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-50 font-heading">{details.name}</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 font-medium">{details.location}</p>
                    </div>

                    <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/80">
                      {details.serviceUsed}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

