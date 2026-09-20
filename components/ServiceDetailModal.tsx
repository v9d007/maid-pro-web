"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  MessageCircle,
  PhoneCall,
  Home,
  Clock,
  Truck,
  Building2,
  Maximize2,
  Users,
  ChefHat,
  Droplet,
  Info,
  Check,
  Star,
} from "lucide-react";
import { ServiceItem, PricingSlab, InclusionTab, getServiceDetails } from "@/data/services";
import { generateServiceBookingWhatsAppLink } from "@/utils/whatsapp";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/utils/analytics";

interface ServiceDetailModalProps {
  isOpen: boolean;
  service: ServiceItem | null;
  onClose: () => void;
  onRequestCallback: (serviceName: string) => void;
}

const TAB_ICON_MAP: Record<string, React.ElementType> = {
  Home,
  Sparkles,
  Droplet,
  ChefHat,
  Users,
  Building2,
  Maximize2,
  ShieldCheck,
  Truck,
  Clock,
};

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  isOpen,
  service,
  onClose,
  onRequestCallback,
}) => {
  const { language, t } = useLanguage();
  const [pricingMode, setPricingMode] = useState<"monthly" | "single_day">("monthly");
  const [selectedSlabIndex, setSelectedSlabIndex] = useState<number>(0);
  const [activeTabId, setActiveTabId] = useState<string>("");

  useEffect(() => {
    if (service && isOpen) {
      if (service.monthlySlabs && service.monthlySlabs.length > 0) {
        setPricingMode("monthly");
      } else {
        setPricingMode("single_day");
      }
      setSelectedSlabIndex(0);

      const tabs = service.inclusionTabs || [];
      if (tabs.length > 0) {
        setActiveTabId(tabs[0].id);
      } else {
        setActiveTabId("");
      }

      // Track modal open with service interest
      trackEvent("service_modal_view", {
        service_id: service.id,
        service_title: service.title,
      });
    }
  }, [service, isOpen]);

  useEffect(() => {
    setSelectedSlabIndex(0);
  }, [pricingMode]);

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

  if (!isOpen || !service) return null;

  const details = getServiceDetails(service, language);
  const hasMonthly = details.monthlySlabs && details.monthlySlabs.length > 0;
  const hasSingleDay = details.singleDayHourly && details.singleDayHourly.length > 0;

  const currentSlabs: PricingSlab[] =
    pricingMode === "monthly" && hasMonthly
      ? details.monthlySlabs!
      : details.singleDayHourly || [];

  const selectedSlab = currentSlabs[selectedSlabIndex] || currentSlabs[0];

  const inclusionTabs: InclusionTab[] = service.inclusionTabs || [];
  const currentTab = inclusionTabs.find((t) => t.id === activeTabId) || inclusionTabs[0];

  const currentTrainedTo =
    language === "hi" && currentTab?.hi?.trainedTo
      ? currentTab.hi.trainedTo
      : currentTab?.trainedTo || [];

  const currentNotIncluded =
    language === "hi" && currentTab?.hi?.notIncluded
      ? currentTab.hi.notIncluded
      : currentTab?.notIncluded || [];

  const handleSlabSelect = (idx: number, slab: PricingSlab) => {
    setSelectedSlabIndex(idx);
    trackEvent("pricing_slab_selected", {
      service_id: service.id,
      service_title: details.title,
      hours: slab.hours,
      rate: slab.rate,
    });
  };

  const handleWhatsAppBook = () => {
    trackEvent("service_whatsapp_book_click", {
      service_id: service.id,
      service_title: details.title,
      hours: selectedSlab?.hours,
      rate: selectedSlab?.rate,
    });

    const link = generateServiceBookingWhatsAppLink({
      serviceName: details.title,
      planType: selectedSlab?.hours,
      slabRate: selectedSlab?.rate,
      locality: "Agra",
    });
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/65 backdrop-blur-md animate-in fade-in-50 duration-200"
      aria-modal="true"
      role="dialog"
    >
      {/* Modal Box */}
      <div className="w-full sm:max-w-2xl bg-white dark:bg-[#111c24] rounded-t-[28px] sm:rounded-[24px] border border-slate-200/80 dark:border-slate-800 shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200">
        
        {/* Mobile Drag Handle */}
        <div className="w-full flex justify-center pt-2.5 pb-1 sm:hidden">
          <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>

        {/* Modal Top Header with Hero Image */}
        <div className="relative border-b border-slate-100 dark:border-slate-800">
          <div className="relative w-full h-36 sm:h-44 bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <Image
              src={service.image}
              alt={details.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 672px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md transition active:scale-95 z-30 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Title & Trust Info Overlay */}
            <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5 z-20 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                {details.badge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-primary text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                    {details.badge}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold backdrop-blur-xs">
                  <ShieldCheck className="w-3 h-3" />
                  <span>100% Verified Staff</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <span>4.6 (Agra)</span>
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-extrabold font-heading text-white drop-shadow-sm leading-tight">
                {details.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6">
          
          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {details.shortDesc}
          </p>

          {/* Transparent Pricing Slabs Section */}
          <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary dark:text-emerald-400 block">
                  {language === "hi" ? "पारदर्शी दरें" : "Transparent Pricing Details"}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 font-heading">
                  {language === "hi" ? "अपनी आवश्यकता अनुसार प्लान चुनें:" : "Select Plan According to Your Needs:"}
                </h3>
              </div>

              {/* Mode Switcher */}
              {hasMonthly && hasSingleDay && (
                <div className="inline-flex rounded-xl bg-slate-200/80 dark:bg-slate-800 p-0.5 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setPricingMode("monthly")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      pricingMode === "monthly"
                        ? "bg-white dark:bg-slate-900 text-primary dark:text-emerald-400 shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    {language === "hi" ? "मासिक प्लान" : "Monthly Slabs"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPricingMode("single_day")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      pricingMode === "single_day"
                        ? "bg-white dark:bg-slate-900 text-primary dark:text-emerald-400 shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                    }`}
                  >
                    {language === "hi" ? "प्रति घंटा / ऑन-डिमांड" : "Hourly / Single Day"}
                  </button>
                </div>
              )}
            </div>

            {/* Slabs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
              {currentSlabs.map((slab, idx) => {
                const isSelected = selectedSlabIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSlabSelect(idx, slab)}
                    className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between cursor-pointer active:scale-95 ${
                      isSelected
                        ? "bg-primary/5 dark:bg-emerald-500/10 border-primary dark:border-emerald-500 shadow-xs ring-1 ring-primary/40"
                        : "bg-white dark:bg-slate-800/80 border-slate-200/80 dark:border-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {slab.badge && (
                      <span className="absolute -top-1.5 right-2 px-1.5 py-0.2 rounded bg-primary text-white text-[9px] font-bold uppercase">
                        {slab.badge}
                      </span>
                    )}
                    <div>
                      <span className="font-semibold text-xs text-slate-900 dark:text-slate-100 block leading-tight">
                        {slab.hours}
                      </span>
                      {slab.subtext && (
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">
                          {slab.subtext}
                        </span>
                      )}
                      {slab.note && (
                        <span className="text-[9px] text-emerald-700 dark:text-emerald-400 font-medium block mt-0.5">
                          {slab.note}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                      <span className="font-extrabold text-xs sm:text-sm text-primary dark:text-emerald-400 font-heading">
                        {slab.rate}
                      </span>
                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-primary dark:bg-emerald-500 text-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Guarantee Terms */}
            {details.pricingTerms && (
              <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-600 dark:text-slate-300 bg-white/70 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{details.pricingTerms}</span>
              </div>
            )}
          </div>

          {/* "What is included ?" Section */}
          {inclusionTabs.length > 0 && (
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-slate-100 font-heading">
                  {language === "hi" ? "इस सेवा में क्या शामिल है?" : "What is included ?"}
                </h3>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {language === "hi" ? "टैब चुनकर देखें" : "Tap tabs to view details"}
                </span>
              </div>

              {/* Horizontal Scrollable Sub-Category Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
                {inclusionTabs.map((tab) => {
                  const isActive = (activeTabId || inclusionTabs[0]?.id) === tab.id;
                  const tabName = language === "hi" && tab.hi?.name ? tab.hi.name : tab.name;
                  const TabIcon = TAB_ICON_MAP[tab.icon || "Sparkles"] || Sparkles;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTabId(tab.id)}
                      className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border transition-all flex-shrink-0 cursor-pointer ${
                        isActive
                          ? "border-primary dark:border-emerald-500 bg-primary/5 dark:bg-emerald-500/10 shadow-xs ring-1 ring-primary/40"
                          : "border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:bg-slate-50 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {tab.image ? (
                        <div className="relative w-8 h-8 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200/80 dark:border-slate-700">
                          <Image src={tab.image} alt={tabName} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-xl bg-primary/10 dark:bg-emerald-500/15 text-primary dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                          <TabIcon className="w-4 h-4" />
                        </div>
                      )}
                      <span className={`text-xs font-bold whitespace-nowrap ${
                        isActive ? "text-primary dark:text-emerald-400" : "text-slate-800 dark:text-slate-200"
                      }`}>
                        {tabName}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Trained to Checklist */}
              <div className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 space-y-3">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 font-heading flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{language === "hi" ? "हेल्पर इन सभी कार्यों के लिए प्रशिक्षित हैं:" : "The expert is trained to"}</span>
                </h4>

                <div className="space-y-2 pt-1">
                  {currentTrainedTo.map((task, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{task}</span>
                    </div>
                  ))}
                </div>

                {/* Exclusions */}
                {currentNotIncluded.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/80 space-y-2.5">
                    <h4 className="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-400 font-heading flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span>{language === "hi" ? "इस सेवा में क्या शामिल नहीं है:" : "What is not included"}</span>
                    </h4>
                    <div className="space-y-2">
                      {currentNotIncluded.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          <div className="w-4 h-4 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Equipment Notice Box */}
          {details.equipmentNotice && (
            <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-primary/10 dark:bg-emerald-500/20 text-primary dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Info className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {details.equipmentNotice}
              </p>
            </div>
          )}

        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="p-3.5 sm:p-4 bg-white dark:bg-[#111c24] border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-2.5 sm:gap-3 z-20">
          <button
            type="button"
            onClick={() => {
              trackEvent("service_request_callback_click", {
                service_id: service.id,
                service_title: details.title,
              });
              onClose();
              onRequestCallback(details.title);
            }}
            className="flex-1 py-3 px-4 rounded-xl border border-primary/40 dark:border-emerald-500/40 text-primary dark:text-emerald-400 font-bold text-xs sm:text-sm hover:bg-primary/5 dark:hover:bg-emerald-500/10 transition active:scale-95 cursor-pointer text-center"
          >
            {language === "hi" ? "कॉलबैक फॉर्म" : "Request Callback"}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppBook}
            className="flex-1 py-3 px-4 rounded-xl bg-primary hover:bg-[#004d47] dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer text-center"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{language === "hi" ? "व्हाट्सएप पर बुक करें" : "Book Instant"}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
