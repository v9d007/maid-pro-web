"use client";

import React from "react";
import { Sparkles, Star, ShieldCheck, Clock, HeartHandshake, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();

  const principles = [
    {
      num: "01",
      icon: ShieldCheck,
      iconColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-500/20 border-emerald-200 dark:border-emerald-700/60",
      cardGradient: "bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60 dark:from-emerald-950/40 dark:via-[#111c24] dark:to-teal-950/30 border-emerald-200/80 dark:border-emerald-800/60 shadow-emerald-900/5",
      title: language === "hi" ? "100% पुलिस व आधार सत्यापन" : "100% Police & ID Verified",
      desc:
        language === "hi"
          ? "आधार और यूपी पुलिस रिकॉर्ड की अनिवार्य जांच।"
          : "UIDAI Aadhaar and UP Police background clearance.",
      badge: language === "hi" ? "सत्यापित" : "Verified",
      badgeColor: "text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-900/40 border-emerald-200 dark:border-emerald-800/60",
      position: "sm:-rotate-2 sm:translate-x-2 sm:translate-y-0",
    },
    {
      num: "02",
      icon: Clock,
      iconColor: "text-amber-600 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-500/20 border-amber-200 dark:border-amber-700/60",
      cardGradient: "bg-gradient-to-br from-amber-50/90 via-white to-orange-50/60 dark:from-amber-950/40 dark:via-[#111c24] dark:to-orange-950/30 border-amber-200/80 dark:border-amber-800/60 shadow-amber-900/5",
      title: language === "hi" ? "₹0 एडवांस • संतुष्टि पर भुगतान" : "Zero Advance • Pay After Work",
      desc:
        language === "hi"
          ? "काम पसंद आने पर ही भुगतान, साथ में तुरंत रिप्लेसमेंट।"
          : "Pay only when satisfied. Free instant replacement.",
      badge: language === "hi" ? "जीरो रिस्क" : "Zero Risk",
      badgeColor: "text-amber-700 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-900/40 border-amber-200 dark:border-amber-800/60",
      position: "sm:rotate-2 sm:translate-y-4 sm:ml-auto sm:-translate-x-2",
    },
    {
      num: "03",
      icon: HeartHandshake,
      iconColor: "text-rose-600 dark:text-rose-400 bg-rose-100/80 dark:bg-rose-500/20 border-rose-200 dark:border-rose-700/60",
      cardGradient: "bg-gradient-to-br from-rose-50/90 via-white to-pink-50/60 dark:from-rose-950/40 dark:via-[#111c24] dark:to-pink-950/30 border-rose-200/80 dark:border-rose-800/60 shadow-rose-900/5",
      title: language === "hi" ? "उचित वेतन व सम्मान" : "Fair Pay & Worker Dignity",
      desc:
        language === "hi"
          ? "बिना किसी दलाली के 100% पारदर्शी और सीधा भुगतान।"
          : "Direct on-time pay with zero broker commission.",
      badge: language === "hi" ? "सम्मान" : "Dignity",
      badgeColor: "text-rose-700 dark:text-rose-300 bg-rose-100/80 dark:bg-rose-900/40 border-rose-200 dark:border-rose-800/60",
      position: "sm:-rotate-1 sm:-translate-y-2 sm:ml-8 sm:translate-x-4",
    },
  ];

  const operationalStandards = [
    {
      title: language === "hi" ? "कड़ा 3-चरणीय सत्यापन" : "Strict 3-Step Verification",
      desc:
        language === "hi"
          ? "हर सहायक के स्थायी पते, सरकारी फोटो पहचान पत्र और स्थानीय पुलिस रिकॉर्ड की जांच।"
          : "Every helper's identity, permanent address, and police record are formally vetted.",
    },
    {
      title: language === "hi" ? "स्वच्छता व शिष्टाचार" : "Hygiene & Etiquette",
      desc:
        language === "hi"
          ? "आधुनिक सफाई मानकों, रसोई स्वच्छता, समय की पाबंदी और विनम्र व्यवहार का प्रशिक्षण।"
          : "Practical training in modern sanitization, punctuality, and polite household manners.",
    },
    {
      title: language === "hi" ? "स्थानीय आगरा सहायता" : "Local Agra Support",
      desc:
        language === "hi"
          ? "आगरा में हमारी स्थानीय टीम द्वारा किसी भी प्रतिस्थापन का त्वरित समाधान।"
          : "Dedicated local support team in Agra for prompt replacement assistance.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-transparent transition-colors duration-200 relative overflow-hidden">
      
      {/* Ambient background glow for right side cards */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary/5 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* MAIN SPLIT LAYOUT: Text & Standards on Left, Staggered Square Cards Right */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT SIDE: Story, Mission, Proof Stats & Operational Standards (7 cols) */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header & Badges */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-emerald-500/10 text-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-primary/15 dark:border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === "hi" ? "हमारे बारे में" : "About MaidPro"}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-slate-50 font-heading tracking-tight leading-[1.2]">
                {language === "hi" ? (
                  <>
                    आगरा के परिवारों के लिए एक{" "}
                    <span className="text-primary dark:text-emerald-400">
                      सुरक्षित, सत्यापित और संगठित
                    </span>{" "}
                    घरेलू सेवा।
                  </>
                ) : (
                  <>
                    Making domestic home care in Agra{" "}
                    <span className="text-primary dark:text-emerald-400">
                      safe, verified, and dependable.
                    </span>
                  </>
                )}
              </h2>

              <div className="space-y-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
                <p>
                  {language === "hi"
                    ? "MaidPro Solution 4 You की स्थापना आगरा में घरेलू सहायता क्षेत्र में सुरक्षा, पारदर्शिता और पेशेवर विश्वसनीयता लाने के उद्देश्य से की गई थी। पारंपरिक रूप से घरेलू सहायकों की नियुक्ति केवल मौखिक सिफारिशों पर निर्भर थी — जिसमें न तो कोई पुलिस सत्यापन होता था और न सुरक्षा की गारंटी।"
                    : "MaidPro Solution 4 You was founded to bring professional security, transparency, and structure to Agra's domestic service sector. Traditionally, hiring domestic help meant relying on unverified word-of-mouth references with zero police background checks and unpredictable attendance."}
                </p>

                <p>
                  {language === "hi"
                    ? "हमने इस व्यवस्था को पूरी तरह बदलकर एक ऐसा मंच तैयार किया है जहां आगरा के परिवारों को 100% पुलिस-सत्यापित, स्वच्छता-प्रशिक्षित सहायक मिलते हैं — बिना किसी अग्रिम शुल्क के। साथ ही, हम अपने कार्यकर्ताओं को उचित वेतन और सम्मानजनक माहौल सुनिश्चित करते हैं।"
                    : "We transformed this informal ecosystem into an organized platform where Agra families receive thoroughly vetted, police-verified, and etiquette-trained helpers with zero advance fee, while ensuring domestic workers receive fair living wages, on-time pay, and dignity."}
                </p>
              </div>
            </div>

            {/* Proof Numbers Strip */}
            <div className="py-5 border-y border-slate-200/80 dark:border-slate-800 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary dark:text-emerald-400 font-heading tracking-tight">
                  500+
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-heading">
                  {language === "hi" ? "सत्यापित सहायक" : "Police-Verified Staff"}
                </div>
                <p className="hidden sm:block text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                  {language === "hi" ? "आधार व पुलिस क्लियरेंस" : "Background checked"}
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 font-heading tracking-tight">
                  5,000+
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-heading">
                  {language === "hi" ? "आगरा परिवार" : "Agra Homes Served"}
                </div>
                <p className="hidden sm:block text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                  {language === "hi" ? "आगरा की प्रमुख कॉलोनियों में" : "Across Agra"}
                </p>
              </div>

              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-heading tracking-tight flex items-center justify-center sm:justify-start gap-1">
                  <span>4.9</span>
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100 font-heading">
                  {language === "hi" ? "ग्राहक रेटिंग" : "Satisfaction Rating"}
                </div>
                <p className="hidden sm:block text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                  {language === "hi" ? "1,200+ समीक्षाएं" : "From 1,200+ reviews"}
                </p>
              </div>
            </div>

            {/* 3 Operating Standards Mini-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              {operationalStandards.map((std, sIdx) => (
                <div key={sIdx} className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-slate-100 font-heading">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary dark:text-emerald-400 shrink-0" />
                    <span>{std.title}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-5">
                    {std.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT SIDE: 3 Compact Gradient Staggered Cards (5 cols) */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-5 relative py-2 flex flex-col gap-3.5 sm:gap-4 sm:block">
            
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className={`relative w-full sm:w-56 md:w-60 rounded-2xl ${p.cardGradient} border p-4 shadow-sm hover:shadow-md hover:scale-[1.03] hover:z-20 transition-all duration-300 flex flex-col justify-between ${p.position}`}
                >
                  {/* Top Bar inside square card */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center border shadow-2xs ${p.iconColor}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md border ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>

                  {/* Middle: Title & concise desc */}
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-50 font-heading leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[11px] text-slate-700 dark:text-slate-200 leading-relaxed">
                      {p.desc}
                    </p>
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

