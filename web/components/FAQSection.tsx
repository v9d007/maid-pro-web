"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS, getFaqDetails } from "@/data/faqs";
import { useLanguage } from "@/context/LanguageContext";

export const FAQSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-transparent relative transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 space-y-2.5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 font-heading tracking-tight">
            {t.faqs.title}
          </h2>
          <p className="text-xs sm:text-base text-slate-700 dark:text-slate-200 max-w-xl mx-auto leading-relaxed">
            {t.faqs.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            const details = getFaqDetails(faq, language);

            return (
              <div
                key={faq.id}
                className={`bg-white dark:bg-[#111c24] rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs ${
                  isOpen ? "border-primary/40 dark:border-emerald-500/40 shadow-sm" : "border-slate-200/80 dark:border-slate-800"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-xs sm:text-base font-bold text-slate-900 dark:text-slate-100 font-heading leading-snug">
                    {details.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                      isOpen
                        ? "rotate-180 bg-primary/10 dark:bg-emerald-500/20 text-primary dark:text-emerald-400"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                    {details.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

