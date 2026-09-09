"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS, getFaqDetails } from "@/data/faqs";
import { useLanguage } from "@/context/LanguageContext";

export const FAQSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("f1");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { id: "All", label: t.faqs.allCategory },
    { id: "Safety", label: t.faqs.safetyCategory },
    { id: "Pricing", label: t.faqs.pricingCategory },
    { id: "Services", label: language === "hi" ? "सेवाएं" : "Services" },
    { id: "Booking", label: t.faqs.bookingCategory },
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#fffbfa]/70 dark:bg-[#0e171e]/70 border-t border-slate-200/60 dark:border-slate-800 relative transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-emerald-500/10 text-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faqs.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 font-heading tracking-tight">
            {t.faqs.title}
          </h2>
          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            {t.faqs.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all active:scale-95 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
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
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
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

