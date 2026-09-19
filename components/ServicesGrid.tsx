"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Truck,
  Building2,
  ShieldCheck,
  Home,
  Maximize2,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SERVICES_CATALOG, ServiceItem, getServiceDetails } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";

interface ServicesGridProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenDetail?: (service: ServiceItem) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Truck,
  Building2,
  ShieldCheck,
  Home,
  Maximize2,
  Clock,
  Users,
};

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenBooking, onOpenDetail }) => {
  const { language, t } = useLanguage();

  const handleCardClick = (service: ServiceItem, title: string) => {
    if (onOpenDetail) {
      onOpenDetail(service);
    } else {
      onOpenBooking(title);
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-transparent relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-16 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-emerald-500/10 text-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </span>
          <h2 className="font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-slate-50 font-heading tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 3 Cards per row layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_CATALOG.map((service) => {
            const Icon = ICON_MAP[service.icon] || Sparkles;
            const details = getServiceDetails(service, language);

            return (
              <div
                key={service.id}
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(service, details.title)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(service, details.title);
                  }
                }}
                className="bg-white dark:bg-[#111c24] rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between relative shadow-xs cursor-pointer active:scale-[0.99] text-left"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={service.image}
                      alt={details.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-10" />
                  </div>

                  {/* Card Main Body */}
                  <div className="p-5">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 font-heading leading-snug">
                        {details.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3.5 line-clamp-2 min-h-[34px]">
                      {details.shortDesc}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-1.5 pt-3.5 border-t border-slate-100 dark:border-slate-800">
                      {details.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 pb-5 pt-1 mt-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(service, details.title);
                    }}
                    className="w-full py-2.5 px-3.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-[#f4f7f6] dark:bg-slate-800/70 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-98 cursor-pointer"
                  >
                    <span>{language === "hi" ? "विवरण व दरें देखें" : "View Inclusions & Pricing"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
