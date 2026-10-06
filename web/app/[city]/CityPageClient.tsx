"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ShieldCheck,
  Star,
  Clock,
  ThumbsUp,
  PhoneCall,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Building2,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Testimonials } from "@/components/Testimonials";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { ServiceDetailModal } from "@/components/ServiceDetailModal";
import { ServiceItem } from "@/data/services";
import { CityInfo } from "@/data/citiesData";
import { useLanguage } from "@/context/LanguageContext";
import { getDirectPhoneCallLink, generateWhatsAppLink } from "@/utils/whatsapp";
import { trackEvent } from "@/utils/analytics";

interface CityPageClientProps {
  city: CityInfo;
}

export const CityPageClient: React.FC<CityPageClientProps> = ({ city }) => {
  const { language } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("House Maid Service (Hourly & Monthly)");
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);

  const isHindi = language === "hi";

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    trackEvent("city_page_open_booking", {
      city: city.name,
      service: serviceName,
    });
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleOpenDetail = (service: ServiceItem) => {
    setSelectedDetailService(service);
  };

  const handleCloseDetail = () => {
    setSelectedDetailService(null);
  };

  const handleRequestCallbackFromDetail = (serviceName: string) => {
    setSelectedDetailService(null);
    handleOpenBooking(serviceName);
  };

  const handleDirectCall = () => {
    trackEvent("city_page_call_click", { city: city.name });
    window.location.href = getDirectPhoneCallLink();
  };

  const handleDirectWhatsApp = () => {
    trackEvent("city_page_whatsapp_click", { city: city.name });
    const waUrl = generateWhatsAppLink({
      locality: city.name,
      customNotes: `Enquiry for Maid/Cleaning in ${city.name} (${city.state})`,
    });
    window.open(waUrl, "_blank");
  };

  return (
    <main className="flex-1 flex flex-col min-h-screen">
      {/* 1. Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 2. City Hero Banner */}
      <section className="relative w-full bg-gradient-to-b from-[#eaf4f2] via-[#f4f9f8]/80 to-white dark:from-[#0e1d24] dark:via-[#0c171d]/80 dark:to-[#0b1318] overflow-hidden py-12 sm:py-16 lg:py-20 transition-colors duration-200">
        <div className="absolute top-0 right-1/4 w-[550px] h-[300px] bg-primary/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              {/* City Hub Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-emerald-500/15 border border-primary/20 dark:border-emerald-500/30 text-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{isHindi ? `${city.hiName} में पुलिस-सत्यापित सेवा` : `Verified Domestic Staff in ${city.name}`}</span>
              </div>

              {/* Dynamic Headline */}
              <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50 tracking-tight leading-[1.15]">
                {isHindi ? (
                  <>
                    <span className="text-primary dark:text-emerald-400">{city.hiName}</span> में विश्वसनीय घरेलू मेड, कुक व डीप क्लीनिंग
                  </>
                ) : (
                  <>
                    Verified House Maids, Cooks & Deep Cleaning in{" "}
                    <span className="text-primary dark:text-emerald-400">{city.name}</span>
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-normal max-w-2xl leading-relaxed">
                {isHindi ? city.hiDescription : city.description}
              </p>

              {/* Trust Metric Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{isHindi ? "100% पुलिस व आधार सत्यापित" : "100% Police Verified Staff"}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold shadow-xs">
                  <Clock className="w-4 h-4 text-primary dark:text-teal-400" />
                  <span>{isHindi ? `${city.avgResponseTime} में सहायता` : `${city.avgResponseTime} Quick Dispatch`}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold shadow-xs">
                  <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{isHindi ? `${city.verifiedStaffCount}+ सक्रिय सहायक` : `${city.verifiedStaffCount}+ Active Helpers`}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => handleOpenBooking(`House Maid in ${city.name}`)}
                  className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-container dark:bg-emerald-600 dark:hover:bg-emerald-500 transition active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-white" />
                  <span>{isHindi ? "तुरंत कॉलबैक बुक करें" : "Book Instant Callback"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-emerald-600 transition active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{isHindi ? "व्हाट्सएप पर चैट करें" : "Chat on WhatsApp"}</span>
                </button>
              </div>

            </div>

            {/* Right Card: Verified Hub & Coverage */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-[#121c24] rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary dark:text-emerald-400" />
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 font-heading">
                        {city.name} {isHindi ? "ऑपरेशनल हब" : "Operational Hub"}
                      </h3>
                      <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
                        {city.hasGbpVerification ? "Google Verified Profile ✓" : "Active Service Area Hub"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>4.8/5</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{city.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary dark:text-emerald-400 shrink-0" />
                    <span>{isHindi ? "सप्ताह के सातों दिन: सुबह 7:00 से रात 9:00 तक" : "Mon - Sun: 7:00 AM - 9:00 PM"}</span>
                  </div>
                </div>

                {/* Localities Tags Preview */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-2">
                    {isHindi ? `${city.hiName} के प्रमुख इलाके:` : `Key Areas Served in ${city.name}:`}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {city.localities.map((loc) => (
                      <span
                        key={loc.slug}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {isHindi ? loc.hiName : loc.name}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Core Services Catalog */}
      <ServicesGrid
        onOpenBooking={handleOpenBooking}
        onOpenDetail={handleOpenDetail}
      />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. About */}
      <AboutSection city={city} />

      {/* 8. FAQs */}
      <FAQSection />

      {/* 9. Footer */}
      <Footer />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
        initialCity={city.name}
      />

      <ServiceDetailModal
        isOpen={!!selectedDetailService}
        service={selectedDetailService}
        onClose={handleCloseDetail}
        onRequestCallback={handleRequestCallbackFromDetail}
      />
    </main>
  );
};
