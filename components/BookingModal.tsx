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
  ChevronDown,
} from "lucide-react";
import { AGRA_LOCALITIES, SERVICES, getServiceDetails } from "@/data/services";
import { generateWhatsAppLink } from "@/utils/whatsapp";
import { useLanguage } from "@/context/LanguageContext";
import { submitLeadToSheet, trackEvent } from "@/utils/analytics";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = "House Maid Service (Hourly & Monthly)",
}) => {
  const { language, t } = useLanguage();
  const [service, setService] = useState(initialService);
  const [locality, setLocality] = useState("Khandari");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Reset submission state when modal re-opens & log tracking
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      trackEvent("callback_modal_opened", {
        service: initialService,
        locality,
      });
    }
  }, [isOpen, initialService]);

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

  const handleSubmitEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    // 1. Asynchronously submit lead to Google Sheets
    submitLeadToSheet({
      name: name.trim(),
      phone: phone.trim(),
      service,
      locality,
      source: "Website Callback Modal",
    });

    // 2. Track analytics conversion event
    trackEvent("enquiry_submitted", {
      service,
      locality,
      name: name.trim(),
    });

    // 3. Generate formatted WhatsApp message for quick team response
    const waLink = generateWhatsAppLink({
      service,
      locality,
      customNotes: `Name: ${name.trim()} | Phone: ${phone.trim()}`,
    });

    // 4. Open WhatsApp link in new tab
    window.open(waLink, "_blank");

    // 5. Switch to success confirmation state
    setIsSubmitted(true);
  };

  const handleModalClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) handleModalClose();
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200"
      aria-modal="true"
      role="dialog"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white dark:bg-[#121c24] rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-7 max-h-[92vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={handleModalClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition active:scale-95 cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* ================= SUCCESS CONFIRMATION VIEW ================= */
          <div className="py-3 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-50 font-heading">
                {t.booking.successTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                {language === "hi" ? (
                  <>
                    धन्यवाद <strong className="text-slate-900 dark:text-slate-100">{name}</strong>! हमारी आगरा टीम विवरण की पुष्टि के लिए जल्द ही <strong className="text-primary dark:text-emerald-400">{phone}</strong> पर कॉल करेगी।
                  </>
                ) : (
                  <>
                    Thank you <strong className="text-slate-900 dark:text-slate-100">{name}</strong>! Our Agra coordinator will call you back shortly on <strong className="text-primary dark:text-emerald-400">{phone}</strong> to confirm your booking.
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
                <span className="text-[11px] font-bold text-primary dark:text-emerald-400 bg-primary/10 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  {locality}, Agra
                </span>
              </div>

              <div className="space-y-1 text-slate-600 dark:text-slate-300">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{t.booking.serviceLabel}:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 truncate block">{service}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <a
                href={generateWhatsAppLink({
                  service,
                  locality,
                  customNotes: `Name: ${name} | Phone: ${phone}`,
                })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("success_whatsapp_chat_click", {
                    service,
                    locality,
                  })
                }
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-emerald-600 active:scale-98 transition flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.booking.chatWhatsApp}</span>
              </a>

              <button
                type="button"
                onClick={handleModalClose}
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition active:scale-98 cursor-pointer"
              >
                {t.booking.doneClose}
              </button>
            </div>
          </div>
        ) : (
          /* ================= ENQUIRY & CALLBACK FORM ================= */
          <form onSubmit={handleSubmitEnquiry} className="space-y-4">
            {/* Header */}
            <div className="space-y-1 pr-8">
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary dark:text-emerald-400 bg-primary/10 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3" />
                  {language === "hi" ? "आगरा सत्यापित सेवा" : "Agra Verified Service"}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-50 font-heading tracking-tight">
                {t.booking.modalTitle}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.booking.modalSubtitle}
              </p>
            </div>

            {/* 1. Service Selection */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                {t.booking.serviceLabel}
              </label>
              <div className="relative">
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full pl-3.5 pr-10 py-2.5 text-xs sm:text-sm font-semibold bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary dark:focus:ring-emerald-500 focus:border-transparent focus:outline-none transition appearance-none cursor-pointer"
                >
                  {SERVICES.map((s) => {
                    const d = getServiceDetails(s, language);
                    return (
                      <option key={s.id} value={d.title}>
                        {d.title}
                      </option>
                    );
                  })}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* 2. Locality in Agra Dropdown */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                {t.booking.localityLabel}
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 text-xs sm:text-sm font-semibold bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary dark:focus:ring-emerald-500 focus:border-transparent focus:outline-none transition appearance-none cursor-pointer"
                >
                  {AGRA_LOCALITIES.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}, Agra
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* 3. Full Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                {t.booking.yourNameLabel} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder={t.booking.yourNamePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary dark:focus:ring-emerald-500 focus:border-transparent focus:outline-none transition"
                />
              </div>
            </div>

            {/* 4. Phone / WhatsApp Number */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                {t.booking.yourPhoneLabel} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder={t.booking.yourPhonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary dark:focus:ring-emerald-500 focus:border-transparent focus:outline-none transition"
                />
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.98] ${
                  isFormValid
                    ? "text-white bg-primary hover:bg-primary-container dark:bg-emerald-600 dark:hover:bg-emerald-500 shadow-primary/20"
                    : "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-300/60 dark:border-slate-700/60"
                }`}
              >
                <PhoneCall className={`w-4 h-4 ${isFormValid ? "text-white" : "text-slate-400 dark:text-slate-500"}`} />
                <span>{t.booking.submitButton}</span>
              </button>

              {/* Trust Badges Line */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 text-center pt-0.5">
                <span className="flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  100% Police Verified
                </span>
                <span>•</span>
                <span className="font-medium">Zero Advance Payment</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
