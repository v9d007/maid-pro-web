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
  Users
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

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    trackEvent("locality_page_open_booking", {
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

  const isHindi = language === "hi";

  return (
    <main className="flex-1 flex flex-col min-h-screen">
      {/* 1. Header & Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 2. Localized Breadcrumb Strip */}
      <div className="bg-slate-100/80 dark:bg-slate-900/60 border-b border-slate-200/70 dark:border-slate-800 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-primary dark:hover:text-emerald-400 font-medium transition flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            <span>{isHindi ? "होमपेज" : "Home"}</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span>{isHindi ? "आगरा" : "Agra"}</span>
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
                <span>{isHindi ? `${locality.hiName}, आगरा में सत्यापित सेवा` : `Verified Service in ${locality.name}, Agra`}</span>
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
                    <span className="text-primary dark:text-emerald-400">{locality.name}, Agra</span>
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-normal max-w-2xl leading-relaxed">
                {isHindi ? locality.hiDescription : locality.description}
              </p>

              {/* Local Landmarks Chips */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {isHindi ? `${locality.hiName} और आसपास के प्रमुख क्षेत्र:` : `Key Areas & Landmarks Served in ${locality.name}:`}
                </div>
                <div className="flex flex-wrap gap-2">
                  {locality.landmarks.map((landmark, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/80 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-2xs"
                    >
                      📍 {landmark}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trust Badges Bar */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>100% Police-Verified</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-primary dark:text-teal-400" />
                  <span>{locality.avgResponseTime} Dispatch</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold shadow-xs">
                  <ThumbsUp className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Zero Advance Fee</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => handleOpenBooking()}
                  className="py-3 px-5 rounded-xl font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-container dark:bg-emerald-600 dark:hover:bg-emerald-500 transition active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-white" />
                  <span>{isHindi ? "कॉलबैक का अनुरोध करें" : `Request Callback in ${locality.name}`}</span>
                </button>

                <a
                  href={generateWhatsAppLink({
                    service: `House Maid & Cleaning in ${locality.name}`,
                    locality: locality.name,
                    customNotes: `Hi MaidPro, I am looking for domestic help / deep cleaning in ${locality.name}, Agra.`,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("locality_page_whatsapp_click", { locality: locality.name })}
                  className="py-3 px-5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-emerald-600 transition active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{isHindi ? "व्हाट्सएप पर बात करें" : "Chat on WhatsApp"}</span>
                </a>
              </div>

            </div>

            {/* Right Card: Quick Booking Box */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-[#121c24] rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 font-heading">
                      {isHindi ? `${locality.hiName} में त्वरित बुकिंग` : `Instant Booking in ${locality.name}`}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {isHindi ? "24 घंटे में मुफ्त रिप्लेसमेंट गारंटी" : "Verified staff with same-day trial"}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                    {locality.verifiedStaffCount}+
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span><strong>100% Aadhaar & Police Verified</strong> staff ready in {locality.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span><strong>Transparent Monthly Slabs:</strong> ₹3,000 to ₹12,000/month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span><strong>Pay after satisfaction:</strong> Zero advance payment</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenBooking()}
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary-container dark:bg-emerald-600 dark:hover:bg-emerald-500 transition flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isHindi ? `बुक करें - ${locality.hiName}` : `Book a Maid in ${locality.name}`}</span>
                  </button>
                </div>

                <div className="text-center pt-1">
                  <a
                    href={getDirectPhoneCallLink()}
                    onClick={() => trackEvent("locality_page_direct_call_click", { locality: locality.name })}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-emerald-400 hover:underline"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Coordinator: +91 93210 34262</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Services & Transparent Pricing */}
      <ServicesGrid
        onOpenBooking={handleOpenBooking}
        onOpenDetail={handleOpenDetail}
      />

      {/* 5. Customer Testimonials */}
      <Testimonials />

      {/* 6. About Us */}
      <AboutSection />

      {/* 7. FAQs */}
      <FAQSection />

      {/* 8. Comprehensive Footer */}
      <Footer />

      {/* 9. Interactive Service Inclusions & Pricing Detail Sheet */}
      <ServiceDetailModal
        isOpen={Boolean(selectedDetailService)}
        service={selectedDetailService}
        onClose={handleCloseDetail}
        onRequestCallback={handleRequestCallbackFromDetail}
      />

      {/* 10. Interactive Booking & Estimator Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </main>
  );
};
