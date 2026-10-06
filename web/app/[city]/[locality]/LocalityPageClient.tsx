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
  Users,
  Building2,
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
import { LocalityInfo } from "@/data/localitiesData";
import { useLanguage } from "@/context/LanguageContext";
import { getDirectPhoneCallLink, generateWhatsAppLink } from "@/utils/whatsapp";
import { trackEvent } from "@/utils/analytics";

interface LocalityPageClientProps {
  locality: LocalityInfo;
}

export const LocalityPageClient: React.FC<LocalityPageClientProps> = ({ locality }) => {
  const { language } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("House Maid Service (Hourly & Monthly)");
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);

  const isHindi = language === "hi";

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    trackEvent("locality_page_open_booking", {
      city: locality.cityName,
      locality: locality.name,
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
    trackEvent("locality_page_call_click", { city: locality.cityName, locality: locality.name });
    window.location.href = getDirectPhoneCallLink();
  };

  const handleDirectWhatsApp = () => {
    trackEvent("locality_page_whatsapp_click", { city: locality.cityName, locality: locality.name });
    const waUrl = generateWhatsAppLink({
      locality: `${locality.name}, ${locality.cityName}`,
      customNotes: `Direct enquiry from ${locality.name} (${locality.cityName}) for Maid/Cleaning`,
    });
    window.open(waUrl, "_blank");
  };

  return (
    <main className="flex-1 flex flex-col min-h-screen">
      {/* 1. Header & Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 2. Localized Breadcrumb Strip */}
      <div className="bg-slate-100/80 dark:bg-slate-900/60 border-b border-slate-200/70 dark:border-slate-800 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-primary dark:hover:text-emerald-400 font-medium transition flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            <span>{isHindi ? "होम" : "Home"}</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href={`/${locality.citySlug}`} className="hover:text-primary dark:hover:text-emerald-400 transition">
            <span>{isHindi ? locality.hiCityName : locality.cityName}</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-bold text-primary dark:text-emerald-400">{isHindi ? locality.hiName : locality.name}</span>
        </div>
      </div>

      {/* 3. Dedicated Local Area Hero */}
      <section className="relative w-full bg-gradient-to-b from-[#eaf4f2] via-[#f4f9f8]/80 to-white dark:from-[#0e1d24] dark:via-[#0c171d]/80 dark:to-[#0b1318] overflow-hidden py-12 sm:py-16 lg:py-20 transition-colors duration-200">
        <div className="absolute top-0 right-1/4 w-[550px] h-[300px] bg-primary/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-emerald-500/15 border border-primary/20 dark:border-emerald-500/30 text-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{isHindi ? `${locality.hiName}, ${locality.hiCityName} में सत्यापित सेवा` : `Verified Service in ${locality.name}, ${locality.cityName}`}</span>
              </div>

              {/* Dynamic Localized Headline */}
              <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50 tracking-tight leading-[1.15]">
                {isHindi ? (
                  <>
                    <span className="text-primary dark:text-emerald-400">{locality.hiName}</span> में विश्वसनीय मेड व डीप क्लीनिंग सेवा
                  </>
                ) : (
                  <>
                    Verified House Maids & Deep Cleaning in{" "}
                    <span className="text-primary dark:text-emerald-400">{locality.name}, {locality.cityName}</span>
                  </>
                )}
              </h1>

              {/* Description Paragraph */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-normal max-w-2xl leading-relaxed">
                {isHindi ? locality.hiDescription : locality.description}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>100% Police Verified Staff</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold shadow-xs">
                  <Clock className="w-4 h-4 text-primary dark:text-teal-400" />
                  <span>{locality.avgResponseTime} in {locality.name}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold shadow-xs">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.8 / 5 Rating</span>
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => handleOpenBooking(`House Maid in ${locality.name}`)}
                  className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-container dark:bg-emerald-600 dark:hover:bg-emerald-500 transition active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-white" />
                  <span>{isHindi ? "फ्री कॉलबैक बुक करें" : "Book Free Callback"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-emerald-600 transition active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{isHindi ? "व्हाट्सएप पर बात करें" : "Chat on WhatsApp"}</span>
                </button>
              </div>

            </div>

            {/* Right Card: Local Area Verification & Staff Snapshot */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-[#121c24] rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 font-heading">
                      {locality.name} ({locality.cityName})
                    </h3>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Pincode: <strong className="text-slate-700 dark:text-slate-200">{locality.pincode}</strong>
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Active Staff Ready</span>
                  </span>
                </div>

                {/* Key Local Landmarks Covered */}
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block text-[11px]">
                    {isHindi ? "कवर किए गए प्रमुख इलाके / लैंडमार्क:" : "Nearby Landmarks & Societies Covered:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {locality.landmarks.map((lm, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        <MapPin className="w-3 h-3 text-primary dark:text-emerald-400" />
                        <span>{lm}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Trust Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary dark:text-emerald-400 shrink-0" />
                    <span>UIDAI Aadhaar & Local Police Verification Completed</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary dark:text-emerald-400 shrink-0" />
                    <span>Zero Advance Payment • Pay Maid Directly After Service</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary dark:text-emerald-400 shrink-0" />
                    <span>Instant Same-Day Replacement if Maid is on Leave</span>
                  </div>
                </div>

                {/* Direct Call Strip */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {isHindi ? "सीधे संपर्क करें:" : "Need urgent helper today?"}
                  </span>
                  <button
                    type="button"
                    onClick={handleDirectCall}
                    className="text-xs font-bold text-primary dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>+91 93210 34262</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Full Services Grid with Transparent Pricing */}
      <ServicesGrid
        onOpenBooking={handleOpenBooking}
        onOpenDetail={handleOpenDetail}
      />

      {/* 5. Customer Testimonials */}
      <Testimonials />

      {/* 6. About Section */}
      <AboutSection />

      {/* 7. Frequently Asked Questions */}
      <FAQSection />

      {/* 8. Global Footer */}
      <Footer />

      {/* Callback / Enquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
        initialCity={locality.cityName}
        initialLocality={locality.name}
      />

      {/* Detailed Service Specs Modal */}
      <ServiceDetailModal
        isOpen={!!selectedDetailService}
        service={selectedDetailService}
        onClose={handleCloseDetail}
        onRequestCallback={handleRequestCallbackFromDetail}
      />
    </main>
  );
};
