"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  MapPin,
  User,
  Phone,
} from "lucide-react";
import { AGRA_LOCALITIES, SERVICES, getServiceDetails } from "@/data/services";
import { generateWhatsAppLink, PHONE_NUMBER, FORMATTED_PHONE } from "@/utils/whatsapp";
import { useLanguage } from "@/context/LanguageContext";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = "Deep Clean",
}) => {
  const { language, t } = useLanguage();
  const [service, setService] = useState(initialService);
  const [homeSize, setHomeSize] = useState("2 BHK");
  const [locality, setLocality] = useState("Khandari");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Reset submission state when modal re-opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const isFormValid =
    name.trim().length >= 2 && phone.trim().replace(/\D/g, "").length >= 10;

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    // Generate formatted WhatsApp message for quick team response
    const waLink = generateWhatsAppLink({
      service,
      homeSize,
      locality,
      customNotes: `Name: ${name} | Phone: ${phone}${notes ? ` | Requirement: ${notes}` : ""}`,
    });

    // Open WhatsApp link in new tab
    window.open(waLink, "_blank");

    // Switch to success confirmation state
    setIsSubmitted(true);
  };

  const handleModalClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#111c24] rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 p-5 sm:p-7 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button Top Right */}
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition active:scale-95 cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* ================= SUCCESS CONFIRMATION VIEW ================= */
          <div className="py-4 text-center space-y-5 animate-in zoom-in-95 duration-200">
            {/* Verified Green Success Icon */}
            <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-50 font-heading">
                {t.booking.successTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                {language === "hi" ? (
                  <>
                    धन्यवाद <strong className="text-slate-900 dark:text-slate-100">{name}</strong>! हमारी आगरा टीम विवरण की पुष्टि और सेवा तय करने के लिए जल्द ही <strong className="text-primary dark:text-emerald-400">{phone}</strong> पर आपसे संपर्क करेगी।
                  </>
                ) : (
                  <>
                    Thank you <strong className="text-slate-900 dark:text-slate-100">{name}</strong>! Our Agra coordinator will call you back shortly on <strong className="text-primary dark:text-emerald-400">{phone}</strong> to arrange your service.
                  </>
                )}
              </p>
            </div>

            {/* Summary Box */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-left space-y-2.5 text-xs">
              <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800 pb-2">
                <span className="font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider text-[11px]">
                  {t.booking.successDetailsTitle}
                </span>
                <span className="text-[10px] font-bold text-primary dark:text-emerald-400 bg-primary/10 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  {locality}, Agra
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
                <div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{t.booking.serviceLabel}:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{service}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{t.booking.homeSizeLabel}:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{homeSize}</span>
                </div>
              </div>

              {notes && (
                <div className="pt-1.5 border-t border-slate-200/60 dark:border-slate-800 text-[11px]">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{t.booking.notesLabel}:</span>
                  <span className="text-slate-700 dark:text-slate-300 italic">"{notes}"</span>
                </div>
              )}
            </div>

            {/* Trust Guarantee Note */}
            <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span>{language === "hi" ? "100% पुलिस-सत्यापित घरेलू स्टाफ • काम के बाद भुगतान" : "100% Police Verified Staff • Pay After Service"}</span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <a
                href={generateWhatsAppLink({
                  service,
                  homeSize,
                  locality,
                  customNotes: `Name: ${name} | Phone: ${phone}${notes ? ` | Requirement: ${notes}` : ""}`,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-emerald-600 active:scale-98 transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.booking.chatWhatsApp}</span>
              </a>

              <button
                type="button"
                onClick={handleModalClose}
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition active:scale-98 cursor-pointer"
              >
                {t.booking.doneClose}
              </button>
            </div>
          </div>
        ) : (
          /* ================= ENQUIRY & CALLBACK FORM ================= */
          <form onSubmit={handleSubmitEnquiry} className="space-y-4">
            {/* Header */}
            <div className="space-y-1 pr-6">
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-primary dark:text-emerald-400 bg-primary/10 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full mb-1">
                <Sparkles className="w-3 h-3" />
                {language === "hi" ? "आगरा सत्यापित सेवा" : "Agra Verified Service"}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-50 font-heading">
                {t.booking.modalTitle}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.booking.modalSubtitle}
              </p>
            </div>

            {/* 1. Service Selection */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                {t.booking.serviceLabel}
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:outline-none transition shadow-2xs"
              >
                {SERVICES.map((s) => {
                  const d = getServiceDetails(s, language);
                  return (
                    <option key={s.id} value={d.title}>
                      {d.title} ({d.priceTag})
                    </option>
                  );
                })}
              </select>
            </div>

            {/* 2. Home Size Selector */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
                <span>{t.booking.homeSizeLabel}</span>
                <span className="text-primary dark:text-emerald-400 font-semibold text-[10px]">{homeSize}</span>
              </label>
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                {["1 RK", "1 BHK", "2 BHK", "3 BHK", "Villa"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setHomeSize(size === "Villa" ? "4 BHK / Villa" : size)}
                    className={`py-2 px-1 text-[11px] sm:text-xs font-semibold rounded-xl border text-center transition cursor-pointer active:scale-95 ${
                      homeSize.includes(size)
                        ? "bg-primary dark:bg-emerald-600 text-white border-primary dark:border-emerald-600 shadow-xs"
                        : "bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Locality in Agra */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
                <span>{t.booking.localityLabel}</span>
                <span className="text-primary dark:text-emerald-400 font-semibold flex items-center gap-1 text-[10px]">
                  <MapPin className="w-3 h-3" /> {locality}
                </span>
              </label>
              <div className="flex flex-wrap gap-1.5">
                {AGRA_LOCALITIES.slice(0, 8).map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setLocality(loc)}
                    className={`px-2.5 py-1 text-[11px] rounded-lg border font-medium transition cursor-pointer active:scale-95 ${
                      locality === loc
                        ? "bg-primary dark:bg-emerald-600 text-white border-primary dark:border-emerald-600 font-bold shadow-2xs"
                        : "bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Name and Phone Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  {t.booking.yourNameLabel} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder={t.booking.yourNamePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:outline-none transition shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  {t.booking.yourPhoneLabel} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder={t.booking.yourPhonePlaceholder}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:outline-none transition shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* 5. Optional Note / Preferred Time */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                {t.booking.notesLabel}
              </label>
              <input
                type="text"
                placeholder={t.booking.notesPlaceholder}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:outline-none transition shadow-2xs"
              />
            </div>

            {/* Guarantees Pill */}
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>{language === "hi" ? "100% सत्यापित स्टाफ • शून्य अग्रिम भुगतान" : "100% Verified Staff • Zero Advance"}</span>
              </div>
              <a
                href={`tel:+${PHONE_NUMBER}`}
                className="text-primary dark:text-emerald-400 font-bold hover:underline"
              >
                {FORMATTED_PHONE}
              </a>
            </div>

            {/* Action CTA Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                isFormValid
                  ? "text-white bg-primary hover:bg-primary-container dark:bg-emerald-600 dark:hover:bg-emerald-500 active:scale-98 shadow-mid cursor-pointer"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-300/60 dark:border-slate-700/60"
              }`}
            >
              <PhoneCall className={`w-4 h-4 ${isFormValid ? "text-white" : "text-slate-400 dark:text-slate-500"}`} />
              <span>{t.booking.submitButton}</span>
            </button>

            {!isFormValid ? (
              <p className="text-[11px] text-amber-600 dark:text-amber-400 text-center font-medium">
                {language === "hi"
                  ? "कृपया कॉलबैक अनुरोध के लिए अपना नाम और 10-अंकों का फोन नंबर दर्ज करें।"
                  : "Please enter your name & 10-digit phone number to activate callback request."}
              </p>
            ) : (
              <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center">
                {language === "hi"
                  ? "सबमिट करने पर हमारे प्रतिनिधि सीधे विवरण की पुष्टि के लिए कॉलबैक करेंगे।"
                  : "Upon submission, our coordinator will call you back promptly to arrange your service."}
              </p>
            )}
          </form>
        )}

      </div>
    </div>
  );
};
