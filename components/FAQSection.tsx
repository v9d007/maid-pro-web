"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MapPin } from "lucide-react";
import { FAQS, getFaqDetails } from "@/data/faqs";
import { CityFaqItem } from "@/data/citiesData";
import { useLanguage } from "@/context/LanguageContext";

interface FAQSectionProps {
  cityFaqs?: CityFaqItem[];
  cityName?: string;
  hiCityName?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  cityFaqs,
  cityName,
  hiCityName,
}) => {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(
    cityFaqs && cityFaqs.length > 0 ? "city-faq-0" : null
  );

  const isHindi = language === "hi";

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-transparent relative transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-emerald-500/15 border border-primary/20 dark:border-emerald-500/30 text-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isHindi ? "संदेह व सवाल" : "Got Questions?"}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 font-heading tracking-tight">
            {cityName ? (
              isHindi ? (
                <>
                  <span className="text-primary dark:text-emerald-400">{hiCityName || cityName}</span> में मेड सर्विस से जुड़े सवाल
                </>
              ) : (
                <>
                  Maid Service FAQs in{" "}
                  <span className="text-primary dark:text-emerald-400">{cityName}</span>
                </>
              )
            ) : (
              t.faqs.title
            )}
          </h2>
          <p className="text-xs sm:text-base text-slate-700 dark:text-slate-200 max-w-xl mx-auto leading-relaxed">
            {cityName
              ? isHindi
                ? "कल्याण पश्चिम व पूर्व में मेड हायरिंग, वेतन, पुलिस वेरिफिकेशन और रिप्लेसमेंट के सामान्य उत्तर।"
                : `Everything you need to know about domestic helpers, monthly salaries, police checks & replacements in ${cityName}.`
              : t.faqs.subtitle}
          </p>
        </div>

        {/* Localized City FAQs (if available) */}
        {cityFaqs && cityFaqs.length > 0 && (
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-2 px-1 text-xs font-bold text-primary dark:text-emerald-400 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>{isHindi ? `${hiCityName || cityName} विशेष सवाल-जवाब` : `${cityName} Specific Questions`}</span>
            </div>

            {cityFaqs.map((faq, idx) => {
              const id = `city-faq-${idx}`;
              const isOpen = openId === id;
              const question = isHindi && faq.hiQuestion ? faq.hiQuestion : faq.question;
              const answer = isHindi && faq.hiAnswer ? faq.hiAnswer : faq.answer;

              return (
                <div
                  key={id}
                  className={`bg-white dark:bg-[#111c24] rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs ${
                    isOpen
                      ? "border-primary/50 dark:border-emerald-500/50 shadow-sm ring-1 ring-primary/20 dark:ring-emerald-500/20"
                      : "border-slate-200/90 dark:border-slate-800"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(id)}
                    className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-xs sm:text-base font-bold text-slate-900 dark:text-slate-100 font-heading leading-snug">
                      {question}
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
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* General FAQs */}
        <div className="space-y-3">
          {cityFaqs && cityFaqs.length > 0 && (
            <div className="flex items-center gap-2 px-1 pt-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{isHindi ? "सामान्य बुकिंग व पॉलिसी सवाल" : "General Platform & Policy FAQs"}</span>
            </div>
          )}

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
