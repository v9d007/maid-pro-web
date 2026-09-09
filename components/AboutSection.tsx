"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck, Heart, Send, CheckCircle2 } from "lucide-react";
import { generateWhatsAppLink } from "@/utils/whatsapp";
import { useLanguage } from "@/context/LanguageContext";

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    locality: "Khandari",
    message: "",
  });

  const isFormValid =
    formData.name.trim().length >= 2 &&
    formData.phone.trim().replace(/\D/g, "").length >= 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    const link = generateWhatsAppLink({
      service: "Direct Inquiry / Callback Request",
      locality: formData.locality,
      customNotes: `Name: ${formData.name} | Phone: ${formData.phone}${formData.message ? ` | Note: ${formData.message}` : ""}`,
    });
    window.open(link, "_blank");
    setFormSubmitted(true);
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-[#0e171e] border-t border-slate-200/60 dark:border-slate-800 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Mission, Values & Office Hub (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-emerald-500/10 text-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 font-heading tracking-tight leading-tight">
              {t.about.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.about.story1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.about.story2}
            </p>

            {/* Core Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-4 rounded-2xl bg-[#fffbfa] dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-primary dark:text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>{language === "hi" ? "पुलिस व आधार सत्यापित" : "Police & Aadhaar Verified"}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language === "hi"
                    ? "प्रत्येक घरेलू सहायक की आईडी और स्थानीय पुलिस सत्यापन अनिवार्य है।"
                    : "Every helper is verified through official ID authentication and local record checks."}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#fffbfa] dark:bg-[#111c24] border border-slate-200/80 dark:border-slate-800 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-primary dark:text-emerald-400 font-bold text-sm">
                  <Heart className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <span>{language === "hi" ? "उचित वेतन व सम्मान" : "Fair Pay & Dignity"}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language === "hi"
                    ? "पारदर्शी मासिक वेतन, कोई छिपे शुल्क नहीं और गरिमापूर्ण कार्य वातावरण।"
                    : "Transparent wages, zero hidden deductions, and respectful working standards."}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Callback & Consultation Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-[#fffbfa] dark:bg-[#111c24] rounded-[24px] p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-mid relative">
              <div className="mb-5 space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-50 font-heading">
                  {t.about.callbackTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.about.callbackSubtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    {t.about.fullName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === "hi" ? "उदा. डॉ. राजेश शर्मा" : "e.g. Dr. Rajesh Sharma"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition shadow-2xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      {t.about.phoneNumber}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      {language === "hi" ? "आगरा में क्षेत्र" : "Locality in Agra"}
                    </label>
                    <select
                      value={formData.locality}
                      onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition shadow-2xs"
                    >
                      <option value="Khandari">Khandari, Agra</option>
                      <option value="Bodla">Bodla, Agra</option>
                      <option value="Dayalbagh">Dayalbagh, Agra</option>
                      <option value="Kamla Nagar">Kamla Nagar, Agra</option>
                      <option value="Sanjay Place">Sanjay Place, Agra</option>
                      <option value="Shahganj">Shahganj, Agra</option>
                      <option value="Civil Lines">Civil Lines, Agra</option>
                      <option value="Other Area">{language === "hi" ? "अन्य क्षेत्र" : "Other Agra Area"}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    {language === "hi" ? "आपकी आवश्यकता" : "Requirement Details"}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={
                      language === "hi"
                        ? "उदा. दयालबाग में 3 BHK के लिए सोमवार से कुक व हाउसकीपर चाहिए।"
                        : "e.g. Need a full-time cook & housekeeper for 3 BHK in Dayalbagh starting Monday."
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition shadow-2xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    isFormValid
                      ? "text-white bg-primary hover:bg-primary-container dark:bg-emerald-600 dark:hover:bg-emerald-500 active:scale-98 shadow-mid cursor-pointer"
                      : "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-300/60 dark:border-slate-700/60"
                  }`}
                >
                  <Send className={`w-4 h-4 ${isFormValid ? "text-white" : "text-slate-400 dark:text-slate-500"}`} />
                  <span>{t.about.requestCallback}</span>
                </button>
              </form>

              {formSubmitted && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>{t.about.callbackSuccess}</span>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

