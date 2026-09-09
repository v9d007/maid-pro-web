"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import { FORMATTED_PHONE, BUSINESS_ADDRESS, getDirectWhatsAppChatLink } from "@/utils/whatsapp";
import { AGRA_LOCALITIES } from "@/data/services";
import { BrandLogo } from "@/components/BrandLogo";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <footer className="w-full bg-white dark:bg-[#0b1318] border-t border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs pt-16 pb-24 sm:pb-16 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200/60 dark:border-slate-800">
            
            {/* Col 1: Brand (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <BrandLogo />

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                {t.footer.tagline}
              </p>

              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-xs pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>{language === "hi" ? "100% पुलिस-सत्यापित घरेलू स्टाफ" : "100% Background-Checked Staff in Agra"}</span>
              </div>
            </div>

            {/* Col 2: Services (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 font-heading">
                {t.footer.services}
              </h4>
              <ul className="space-y-2">
                <li><Link href="#services" className="hover:text-primary dark:hover:text-emerald-400 transition">{language === "hi" ? "डीप हाउस क्लीनिंग" : "Deep House Cleaning"}</Link></li>
                <li><Link href="#services" className="hover:text-primary dark:hover:text-emerald-400 transition">{language === "hi" ? "दैनिक मेड व झाड़ू-पोछा" : "Daily Maid & Housekeeping"}</Link></li>
                <li><Link href="#services" className="hover:text-primary dark:hover:text-emerald-400 transition">{language === "hi" ? "किचन सैनिटाइजेशन व कुक" : "Kitchen Sanitization & Cook"}</Link></li>
                <li><Link href="#services" className="hover:text-primary dark:hover:text-emerald-400 transition">{language === "hi" ? "सोफा व कारपेट शैंपूइंग" : "Sofa & Upholstery Shampooing"}</Link></li>
                <li><Link href="#services" className="hover:text-primary dark:hover:text-emerald-400 transition">{language === "hi" ? "बेबीसिटर व नानी केयर" : "Babysitter & Nanny Care"}</Link></li>
                <li><Link href="#services" className="hover:text-primary dark:hover:text-emerald-400 transition">{language === "hi" ? "बुजुर्ग व पेशेंट केयर" : "Elderly & Patient Care"}</Link></li>
              </ul>
            </div>

            {/* Col 3: Agra Coverage Areas (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 font-heading">
                {language === "hi" ? "आगरा क्षेत्र" : "Agra Areas"}
              </h4>
              <ul className="space-y-1.5 text-[11px]">
                {AGRA_LOCALITIES.slice(0, 7).map((loc, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-emerald-400/60"></span>
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact & Office (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 font-heading">
                {t.footer.contact}
              </h4>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-primary dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.google.com/maps/place/?q=place_id:ChIJVc9fl4x3dDkRTMItenDGfAE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary dark:hover:text-emerald-400 transition"
                  >
                    <span>{BUSINESS_ADDRESS}</span>
                    <span className="text-[10px] text-primary dark:text-emerald-400 font-bold block mt-0.5 underline">
                      {language === "hi" ? "दिशा-निर्देश देखें →" : "Get Directions →"}
                    </span>
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-primary dark:text-emerald-400 flex-shrink-0" />
                  <a href="tel:+919321034262" className="hover:text-primary dark:hover:text-emerald-400 font-bold transition text-slate-900 dark:text-slate-100">
                    {FORMATTED_PHONE}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>{language === "hi" ? "24 घंटे खुला • सोमवार - रविवार" : "Open 24 Hours • Mon - Sun"}</span>
                </div>

                <div className="pt-2">
                  <a
                    href={getDirectWhatsAppChatLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{language === "hi" ? "व्हाट्सएप हेल्प" : "WhatsApp Agra Help"}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-slate-500 dark:text-slate-500 text-[11px]">
            <div>
              © {new Date().getFullYear()} Maid Pro Solution 4 You. {t.footer.allRightsReserved}
            </div>

            <div className="flex items-center gap-4">
              <span>{t.footer.serviceAreas}</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Persistent Floating WhatsApp Button (Matching Stitch) */}
      <a
        aria-label="Chat on WhatsApp"
        href={getDirectWhatsAppChatLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-high hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
};
