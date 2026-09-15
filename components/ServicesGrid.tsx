"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Truck,
  Building2,
  ShieldCheck,
  Home,
  Maximize2,
  Bed,
  Droplet,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { SERVICES_CATALOG, ServiceItem, getServiceDetails } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";

interface ServicesGridProps {
  onOpenBooking: (serviceName?: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Truck,
  Building2,
  ShieldCheck,
  Home,
  Maximize2,
  Bed,
  Droplet,
  Clock,
  Users,
};

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenBooking }) => {
  const [filterCategory, setFilterCategory] = useState<"all" | "cleaning" | "maid_care">("all");
  const [showAll, setShowAll] = useState(false);
  const { language, t } = useLanguage();

  const filteredServices = SERVICES_CATALOG.filter((service) => {
    if (filterCategory === "cleaning") {
      return ["deep-clean", "moving-cleaning", "office-cleaning", "standard-cleaning", "window-cleaning", "mattress-cleaning", "upholstery-cleaning"].includes(service.id);
    }
    if (filterCategory === "maid_care") {
      return ["general-housekeeping", "house-maid-hourly", "caregiver-combined"].includes(service.id);
    }
    return true;
  });

  const displayedServices = showAll ? filteredServices : filteredServices.slice(0, 6);

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-[#0b1318] border-t border-slate-200/60 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-14 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-emerald-500/10 text-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </span>
          <h2 className="font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-slate-50 font-heading tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-3 sm:pt-4">
            <button
              type="button"
              onClick={() => {
                setFilterCategory("all");
                setShowAll(false);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition active:scale-95 cursor-pointer ${
                filterCategory === "all"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700"
              }`}
            >
              {t.services.allServices} (10)
            </button>
            <button
              type="button"
              onClick={() => {
                setFilterCategory("cleaning");
                setShowAll(false);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition active:scale-95 cursor-pointer ${
                filterCategory === "cleaning"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700"
              }`}
            >
              {t.services.deepCleaning} (7)
            </button>
            <button
              type="button"
              onClick={() => {
                setFilterCategory("maid_care");
                setShowAll(false);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition active:scale-95 cursor-pointer ${
                filterCategory === "maid_care"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700"
              }`}
            >
              {t.services.maidCleaning} & {t.services.elderlyCare} (3)
            </button>
          </div>
        </div>

        {/* Modern Cards: 2 Columns on Mobile, 3 Columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-7">
          {displayedServices.map((service) => {
            const Icon = ICON_MAP[service.icon] || Sparkles;
            const details = getServiceDetails(service, language);

            return (
              <div
                key={service.id}
                onClick={() => onOpenBooking(details.title)}
                className="bg-white dark:bg-[#111c24] rounded-2xl sm:rounded-[22px] border border-slate-200/80 dark:border-slate-800 overflow-hidden hover-card-elevation transition-all flex flex-col justify-between group relative shadow-xs sm:shadow-sm cursor-pointer"
              >
                <div>
                  {/* Top Image Banner with Floating Badges */}
                  <div
                    className="bg-cover bg-center w-full h-32 sm:h-48 relative transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Step Number Badge */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-primary dark:text-emerald-400 font-heading font-extrabold text-[10px] sm:text-xs flex items-center justify-center border border-slate-200/80 dark:border-slate-700 shadow-sm">
                        {service.stepNumber}
                      </div>
                      {details.badge && (
                        <span className="hidden sm:inline-block px-2.5 py-0.5 bg-primary dark:bg-emerald-600 text-white text-[10px] font-bold rounded-full shadow-sm">
                          {details.badge}
                        </span>
                      )}
                    </div>

                    {/* Price Pill Floating at Bottom of Image */}
                    <div className="absolute bottom-2 left-2.5 sm:bottom-3 sm:left-3.5">
                      <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-primary dark:text-emerald-400 font-extrabold text-[11px] sm:text-xs shadow-xs border border-slate-200/80 dark:border-slate-700">
                        {details.priceTag}
                      </span>
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div className="p-3 sm:p-5">
                    <div className="flex items-start sm:items-center gap-1.5 sm:gap-2 mb-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-primary/10 dark:bg-emerald-500/15 text-primary dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <h3 className="font-bold text-xs sm:text-base text-slate-900 dark:text-slate-100 font-heading leading-tight group-hover:text-primary dark:group-hover:text-emerald-400 transition line-clamp-2 min-h-[2rem] sm:min-h-0">
                        {details.title}
                      </h3>
                    </div>

                    <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2 sm:line-clamp-none">
                      {details.shortDesc}
                    </p>

                    {/* Special Hourly Salary Slabs Display */}
                    {details.salarySlab && (
                      <div className="mb-3 p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-1">
                        <span className="text-[9px] sm:text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                          {language === "hi" ? "मासिक वेतन स्लैब:" : "Monthly Salary Slabs:"}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[9px] sm:text-[11px]">
                          {details.salarySlab.map((slab, sIdx) => (
                            <div key={sIdx} className="bg-white dark:bg-slate-900 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded border border-slate-200/60 dark:border-slate-800 flex justify-between items-center">
                              <span className="text-slate-600 dark:text-slate-400 font-medium truncate">{slab.hours}:</span>
                              <span className="font-bold text-primary dark:text-emerald-400 ml-1">{slab.rate}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Features checklist (Hidden on mobile cards, visible on desktop) */}
                    <div className="hidden sm:block space-y-1 pt-2 border-t border-slate-200/60 dark:border-slate-800 mb-4">
                      {details.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Subtle, Refined Action that Doesn't Overpower the Card */}
                <div className="p-3 sm:p-4 pt-0 border-t border-slate-100 dark:border-slate-800/80 bg-white dark:bg-[#111c24]">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking(details.title);
                    }}
                    className="w-full py-2.5 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/70 hover:bg-primary hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white border border-slate-200/80 dark:border-slate-700/80 transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-98 group-hover:border-primary/40 dark:group-hover:border-emerald-500/40 cursor-pointer shadow-2xs"
                  >
                    <span>{t.services.bookService}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-primary dark:text-emerald-400 group-hover:translate-x-1 transition-transform group-hover:text-inherit" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* View More Services Button */}
        {filteredServices.length > 6 && (
          <div className="mt-8 sm:mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm text-primary dark:text-emerald-400 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700 shadow-xs hover:shadow-mid transition-all active:scale-95 cursor-pointer"
            >
              <span>
                {showAll
                  ? (language === "hi" ? "कम सेवाएं दिखाएं" : "Show Less Services")
                  : (language === "hi" ? `और सेवाएं देखें (${filteredServices.length - 6} और)` : `View More Services (${filteredServices.length - 6} More)`)}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

