"use client";

import React from "react";
import { CheckCircle2, XCircle, ShieldAlert, Award, PhoneCall } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getDirectPhoneCallLink } from "@/utils/whatsapp";

interface MaidBureauComparisonProps {
  cityName: string;
  hiCityName?: string;
  onOpenBooking: () => void;
}

export const MaidBureauComparison: React.FC<MaidBureauComparisonProps> = ({
  cityName,
  hiCityName,
  onOpenBooking,
}) => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const comparisonRows = [
    {
      feature: isHindi ? "अग्रिम एजेंसी कमीशन / दलाली" : "Advance Placement Brokerage",
      traditional: isHindi
        ? "1 महीने का पूरा वेतन (₹15,000–₹25,000) अग्रिम व नॉन-रिफंडेबल"
        : "Demands 1 month's full salary upfront (₹15,000 – ₹25,000) non-refundable",
      maidPro: isHindi
        ? "₹0 अग्रिम कमीशन — सीधे मेड को मासिक वेतन दें"
        : "Zero (₹0) Advance Brokerage — Pay helper directly every month",
    },
    {
      feature: isHindi ? "पहचान व पुलिस सत्यापन" : "Identity & Police Background Check",
      traditional: isHindi
        ? "केवल मौखिक आश्वासन, कोई आधिकारिक पुलिस रिकॉर्ड नहीं"
        : "Unverified or verbal assurance only; no legal police records provided",
      maidPro: isHindi
        ? "100% यूआईडीएआई आधार प्रमाणीकरण व स्थानीय पुलिस रिकॉर्ड जांच"
        : "100% UIDAI Aadhaar verification & local police background clearance",
    },
    {
      feature: isHindi ? "मेड के न आने पर रिप्लेसमेंट" : "Absenteeism & Replacement Policy",
      traditional: isHindi
        ? "हफ्तों का इंतजार, फोन न उठाना या दोबारा कमीशन की मांग"
        : "Weeks of waiting, unanswered calls, or demands another placement fee",
      maidPro: isHindi
        ? "24 से 48 घंटे में तुरंत मुफ्त बैकअप रिप्लेसमेंट"
        : "Instant free backup replacement within 24 to 48 hours",
    },
    {
      feature: isHindi ? "रिप्लेसमेंट वारंटी अवधि" : "Free Replacement Period",
      traditional: isHindi
        ? "केवल 1 बार या अधिकतम 15-30 दिन"
        : "Limited to 1 replacement only or expires within 30 days",
      maidPro: isHindi
        ? "3 महीने तक मुफ्त अनलिमिटेड रिप्लेसमेंट सपोर्ट"
        : "Up to 3 months of replacement support without extra charges",
    },
    {
      feature: isHindi ? "हायरिंग से पहले इंटरव्यू / बातचीत" : "Candidate Interview & Trial",
      traditional: isHindi
        ? "पहले कमीशन जमा करें, फिर मेड से बात करने को मिलेगा"
        : "Must pay advance commission before even meeting or interviewing the helper",
      maidPro: isHindi
        ? "पहले टेलीफोनिक / व्यक्तिगत परिचय, संतुष्ट होने पर ही हायर करें"
        : "Free candidate telephonic/in-person introduction; hire only if satisfied",
    },
    {
      feature: isHindi ? "लोकल कस्टमर सपोर्ट व हेल्पलाइन" : "Dedicated Support in Kalyan",
      traditional: isHindi
        ? "दलाल अक्सर नंबर बंद कर लेते हैं या कॉल सेंटर पर टालते हैं"
        : "Brokers switch off phones or route you to unresponsive call centers",
      maidPro: isHindi
        ? "लोकल कल्याण डेस्क (+91 93210 34262) सातों दिन सक्रिय"
        : "Dedicated Kalyan support desk (+91 93210 34262) available 7 days a week",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white dark:bg-[#0e1820] relative transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-emerald-500/15 border border-primary/20 dark:border-emerald-500/30 text-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>{isHindi ? "पारदर्शिता व तुलना" : "Comparison Guide"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-slate-50 font-heading tracking-tight leading-tight">
            {isHindi ? (
              <>
                पारंपरिक मेड एजेंसियों / सुलेखा की तुलना में{" "}
                <span className="text-primary dark:text-emerald-400">MaidPro</span> क्यों बेहतर है?
              </>
            ) : (
              <>
                Why Choose MaidPro vs Traditional Maid Agencies in{" "}
                <span className="text-primary dark:text-emerald-400">{cityName}</span>?
              </>
            )}
          </h2>

          <p className="text-xs sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {isHindi
              ? "कल्याण में पारंपरिक दलालों को ₹15,000–₹25,000 अग्रिम कमीशन देना बंद करें। जानें कि क्यों 5,000+ परिवार सुरक्षित और पारदर्शी घरेलू सहायता के लिए MaidPro चुनते हैं।"
              : `Avoid paying non-refundable 1-month commissions to offline bureaus or online directories in ${cityName}. See how MaidPro guarantees safety, transparency, and instant replacements.`}
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800">
                <th className="py-4 px-6 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 font-heading w-1/3">
                  {isHindi ? "सुविधा / पैरामीटर" : "Service Parameter"}
                </th>
                <th className="py-4 px-6 text-xs sm:text-sm font-bold text-rose-700 dark:text-rose-400 font-heading w-1/3 bg-rose-50/50 dark:bg-rose-950/20">
                  <div className="flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                    <span>{isHindi ? "पारंपरिक दलाल / सुलेखा एजेंसी" : "Traditional Kalyan Bureaus / Sulekha"}</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-xs sm:text-sm font-bold text-primary dark:text-emerald-400 font-heading w-1/3 bg-emerald-50/60 dark:bg-emerald-950/30">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-primary dark:text-emerald-400" />
                    <span>MaidPro Solution 4 You</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                  <td className="py-4 px-6 font-semibold text-slate-900 dark:text-slate-100">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-slate-600 dark:text-slate-400 bg-rose-50/30 dark:bg-rose-950/10">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-900 dark:text-slate-100 font-medium bg-emerald-50/30 dark:bg-emerald-950/20">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{row.maidPro}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="md:hidden space-y-4">
          {comparisonRows.map((row, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/60 p-4 space-y-3"
            >
              <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
                {row.feature}
              </h3>

              {/* Traditional */}
              <div className="p-3 rounded-lg bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/40 space-y-1">
                <span className="text-[11px] font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wide block">
                  {isHindi ? "पारंपरिक दलाल / एजेंसी" : "Traditional Kalyan Bureaus"}
                </span>
                <div className="flex items-start gap-2 text-xs text-rose-900 dark:text-rose-200">
                  <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>
              </div>

              {/* MaidPro */}
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <span className="text-[11px] font-bold text-primary dark:text-emerald-400 uppercase tracking-wide block">
                  MaidPro Solution 4 You
                </span>
                <div className="flex items-start gap-2 text-xs text-slate-900 dark:text-slate-100 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{row.maidPro}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
          <div className="space-y-0.5">
            <span className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 block">
              {isHindi ? "सुरक्षित व सत्यापित मेड आज ही हायर करें" : "Ready to hire a verified helper without broker commission?"}
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400">
              {isHindi ? "कोई अग्रिम शुल्क नहीं • सीधे मेड को भुगतान • मुफ्त ट्रायल" : "Zero advance deposit • Direct helper payout • Free trial interview"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary-container dark:bg-emerald-600 dark:hover:bg-emerald-500 transition active:scale-95 shadow-sm cursor-pointer"
            >
              {isHindi ? "फ्री कॉलबैक बुक करें" : "Book Free Callback"}
            </button>
            <a
              href={getDirectPhoneCallLink()}
              className="py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 transition active:scale-95 flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-primary dark:text-emerald-400" />
              <span>+91 93210 34262</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
