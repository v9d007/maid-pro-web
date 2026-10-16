"use client";

import React from "react";
import { Check, Clock, Sparkles, ArrowRight } from "lucide-react";
import { CityRateItem } from "@/data/citiesData";
import { useLanguage } from "@/context/LanguageContext";

interface SalaryRateCardProps {
  cityName: string;
  hiCityName?: string;
  rates: CityRateItem[];
  onOpenBooking: (serviceName?: string) => void;
}

export const SalaryRateCard: React.FC<SalaryRateCardProps> = ({
  cityName,
  hiCityName,
  rates,
  onOpenBooking,
}) => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  if (!rates || rates.length === 0) return null;

  return (
    <section id="salary-rates" className="py-14 sm:py-20 bg-slate-50/70 dark:bg-[#0c161d] relative transition-colors duration-200 border-t border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isHindi ? "2026 वेतन व दर सूची" : "2026 Local Rate Card & Salary Guide"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-slate-50 font-heading tracking-tight leading-tight">
            {isHindi ? (
              <>
                <span className="text-primary dark:text-emerald-400">{hiCityName || cityName}</span> में घरेलू सहायकों का अनुमानित मासिक वेतन
              </>
            ) : (
              <>
                Monthly Maid Salary & Rates in{" "}
                <span className="text-primary dark:text-emerald-400">{cityName}</span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {isHindi
              ? "कल्याण पश्चिम, कल्याण पूर्व, खड़कपाड़ा और डोंबिवली के लिए पारदर्शी मासिक वेतन दरें। सीधे मेड को वेतन दें — कोई अग्रिम दलाली या एजेंट कमीशन नहीं।"
              : `Standard market salary slabs for Aadhaar and Police-verified domestic help across ${cityName}. Pay your helper directly with zero advance placement brokerage.`}
          </p>
        </div>

        {/* Rates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {rates.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl bg-white dark:bg-[#111c24] p-5 sm:p-6 border transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md ${
                item.popular
                  ? "border-primary/50 dark:border-emerald-500/50 ring-1 ring-primary/20 dark:ring-emerald-500/20"
                  : "border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              {/* Badge */}
              {item.badge && (
                <div className="absolute -top-3 right-4">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-xs ${
                      item.popular
                        ? "bg-primary text-white dark:bg-emerald-600"
                        : "bg-slate-800 text-white dark:bg-slate-700"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
              )}

              {/* Top Details */}
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 leading-snug">
                  {isHindi ? item.hiService : item.service}
                </h3>

                <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md">
                  <Clock className="w-3.5 h-3.5 text-primary dark:text-emerald-400" />
                  <span>{isHindi ? item.hiShift : item.shift}</span>
                </div>

                <div className="pt-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
                    {isHindi ? "अनुमानित मासिक वेतन" : "Estimated Rate"}
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-primary dark:text-emerald-400 font-heading">
                    {item.rate}
                  </div>
                </div>

                {/* Features checklist */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{isHindi ? "आधार व पुलिस पृष्ठभूमि जांच" : "100% Aadhaar & Police Verified"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{isHindi ? "मुफ्त बातचीत व ट्रायल उपलब्ध" : "Free Candidate Interview / Trial"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{isHindi ? "छुट्टी पर तुरंत बैकअप रिप्लेसमेंट" : "Instant 24-48h Backup Replacement"}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => onOpenBooking(item.service)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary-container dark:bg-emerald-600 dark:hover:bg-emerald-500 transition active:scale-98 flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>{isHindi ? "यह सेवा बुक करें" : "Hire This Staff"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Highlight Banner */}
        <div className="mt-10 sm:mt-12 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-primary/10 border border-emerald-500/20 p-5 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100 font-heading block">
                {isHindi ? "₹0 अग्रिम दलाली" : "₹0 Advance Commission"}
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isHindi ? "सीधे मेड को वेतन दें, बिचौलियों को कमीशन नहीं।" : "Direct helper payment. No 1-month broker fees."}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100 font-heading block">
                {isHindi ? "100% सत्यापित पहचान" : "100% Aadhaar Verified"}
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isHindi ? "सरकारी पहचान पत्र व पते की पूर्ण जांच।" : "UIDAI Aadhaar and police verification recorded."}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100 font-heading block">
                {isHindi ? "मुफ्त रिप्लेसमेंट गारंटी" : "Free Replacement Support"}
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isHindi ? "मेड के न आने पर 24-48 घंटे में दूसरा सहायक।" : "Instant substitute within 24–48 hours if helper leaves."}
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100 font-heading block">
                {isHindi ? "कल्याण लोकल हेल्पलाइन" : "Local Kalyan Helpline"}
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isHindi ? "+91 93210 34262 पर कभी भी कॉल करें।" : "Call/WhatsApp +91 93210 34262 (7 Days a Week)."}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
