"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Star,
  Clock,
  PhoneCall,
  MessageCircle,
  Sparkles,
  Check,
  CheckCircle2,
  X,
  XCircle,
  Info,
  ChevronRight,
  ArrowLeft,
  Calendar,
  Home,
  Droplet,
  ChefHat,
  Users,
  Building2,
  Maximize2,
  Truck
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { ServiceDetailModal } from "@/components/ServiceDetailModal";
import { ServiceItem, PricingSlab, getServiceDetails } from "@/data/services";
import { ServicePageInfo } from "@/data/servicePagesData";
import { useLanguage } from "@/context/LanguageContext";
import { getDirectPhoneCallLink, generateServiceBookingWhatsAppLink } from "@/utils/whatsapp";
import { trackEvent } from "@/utils/analytics";

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

interface ServicePageClientProps {
  pageInfo: ServicePageInfo;
  service: ServiceItem;
}

export const ServicePageClient: React.FC<ServicePageClientProps> = ({ pageInfo, service }) => {
  const { language } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);
  const [activeTabId, setActiveTabId] = useState<string>(service.inclusionTabs?.[0]?.id || "");
  const [pricingMode, setPricingMode] = useState<"monthly" | "hourly">(
    service.monthlySlabs && service.monthlySlabs.length > 0 ? "monthly" : "hourly"
  );
  const [selectedSlabIndex, setSelectedSlabIndex] = useState(0);

  const details = getServiceDetails(service, language);
  const isHindi = language === "hi";

  const hasMonthly = details.monthlySlabs && details.monthlySlabs.length > 0;
  const hasSingleDay = details.singleDayHourly && details.singleDayHourly.length > 0;

  const currentSlabs: PricingSlab[] =
    pricingMode === "monthly" && hasMonthly
      ? details.monthlySlabs!
      : details.singleDayHourly || [];

  const selectedSlab = currentSlabs[selectedSlabIndex] || currentSlabs[0];

  const inclusionTabs = service.inclusionTabs || [];
  const currentTab = inclusionTabs.find((t) => t.id === activeTabId) || inclusionTabs[0];

  const currentTrainedTo =
    isHindi && currentTab?.hi?.trainedTo
      ? currentTab.hi.trainedTo
      : currentTab?.trainedTo || [];

  const currentNotIncluded =
    isHindi && currentTab?.hi?.notIncluded
      ? currentTab.hi.notIncluded
      : currentTab?.notIncluded || [];

  const handleOpenBooking = (serviceName?: string) => {
    trackEvent("service_page_open_booking", {
      service: serviceName || details.title,
    });
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleWhatsAppBooking = () => {
    trackEvent("service_page_whatsapp_book", {
      service: details.title,
      shift: selectedSlab?.hours,
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
    <main className="flex-1 flex flex-col min-h-screen">
      {/* 1. Header & Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking(details.title)} />

      {/* 2. Breadcrumbs */}
      <div className="bg-slate-100/80 dark:bg-slate-900/60 border-b border-slate-200/70 dark:border-slate-800 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-primary dark:hover:text-emerald-400 font-medium transition flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            <span>{isHindi ? "होमपेज" : "Home"}</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span>{isHindi ? "सेवाएं" : "Services"}</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-bold text-primary dark:text-emerald-400">{details.title}</span>
        </div>
      </div>

      {/* 3. Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-[#eaf4f2] via-[#f4f9f8]/80 to-white dark:from-[#0e1d24] dark:via-[#0c171d]/80 dark:to-[#0b1318] overflow-hidden py-12 sm:py-16 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 dark:bg-emerald-500/15 border border-primary/20 dark:border-emerald-500/30 text-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{isHindi ? pageInfo.hiTagline : pageInfo.tagline}</span>
              </div>

              <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50 tracking-tight leading-[1.15]">
                {isHindi ? details.title : pageInfo.heroHeadline}
              </h1>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-normal max-w-2xl leading-relaxed">
                {isHindi ? details.shortDesc : pageInfo.heroSubhead}
              </p>

              {/* Trust Badges Bar */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>100% Police Verified</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-primary dark:text-teal-400" />
                  <span>Free Instant Replacement</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-semibold shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.6 / 5 Rated in Agra</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => handleOpenBooking(details.title)}
                  className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-container dark:bg-emerald-600 dark:hover:bg-emerald-500 transition active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-white" />
                  <span>{isHindi ? "कॉलबैक का अनुरोध करें" : "Request Callback"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-emerald-600 transition active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{isHindi ? "व्हाट्सएप पर बुक करें" : "Book Instant on WhatsApp"}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-800 h-72 sm:h-96 w-full">
                <Image
                  src={service.image}
                  alt={details.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-slate-900/90 text-primary dark:text-emerald-400 backdrop-blur-md shadow-sm border border-slate-200/80 dark:border-slate-700">
                    {details.priceTag}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Service Inclusions & Checklist */}
      {inclusionTabs.length > 0 && (
        <section className="py-12 bg-white dark:bg-[#0e171e] border-y border-slate-200/80 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-heading">
                {isHindi ? "इस सेवा में क्या शामिल है?" : "What is Included in this Service?"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                {isHindi ? "सभी कार्य हमारे प्रशिक्षित और पृष्ठभूमि-सत्यापित स्टाफ द्वारा किए जाते हैं।" : "Thorough, hospital-grade cleaning and etiquette-trained staff."}
              </p>
            </div>

            {/* Sub Tabs */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
              {inclusionTabs.map((tab) => {
                const isActive = (activeTabId || inclusionTabs[0]?.id) === tab.id;
                const tabName = isHindi && tab.hi?.name ? tab.hi.name : tab.name;
                const TabIcon = TAB_ICON_MAP[tab.icon || "Sparkles"] || Sparkles;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTabId(tab.id)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border transition-all cursor-pointer ${
                      isActive
                        ? "border-primary dark:border-emerald-500 bg-primary/10 dark:bg-emerald-500/15 text-primary dark:text-emerald-400 font-bold shadow-xs"
                        : "border-slate-200/90 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    <span className="text-xs whitespace-nowrap">{tabName}</span>
                  </button>
                );
              })}
            </div>

            {/* Included / Not Included Checklist Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Included */}
              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-heading flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{isHindi ? "शामिल कार्य (प्रशिक्षित कार्य)" : "The Expert is Trained To Do"}</span>
                </h3>
                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {currentTrainedTo.map((task, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-relaxed">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not Included */}
              {currentNotIncluded.length > 0 && (
                <div className="bg-amber-50/50 dark:bg-amber-950/20 rounded-2xl p-5 border border-amber-200/60 dark:border-amber-900/40 space-y-3">
                  <h3 className="text-sm font-bold text-amber-900 dark:text-amber-300 font-heading flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>{isHindi ? "शामिल नहीं है" : "What is Not Included"}</span>
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                    {currentNotIncluded.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Equipment Notice */}
            {details.equipmentNotice && (
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
                <Info className="w-4 h-4 text-primary dark:text-emerald-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{details.equipmentNotice}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. Transparent Pricing Slabs Section */}
      {currentSlabs.length > 0 && (
        <section className="py-12 bg-slate-50 dark:bg-[#0b1318] border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-heading">
                {isHindi ? "पारदर्शी मूल्य निर्धारण व शिफ्ट" : "Transparent Pricing & Shift Plans"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {details.pricingTerms || "No advance payments. Transparent salary slabs with zero hidden fees."}
              </p>
            </div>

            {/* Pricing Mode Toggle */}
            {hasMonthly && hasSingleDay && (
              <div className="flex justify-center">
                <div className="p-1 bg-slate-200/90 dark:bg-slate-800 rounded-xl flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setPricingMode("monthly")}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                      pricingMode === "monthly"
                        ? "bg-white dark:bg-slate-700 text-primary dark:text-emerald-400 shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    {isHindi ? "मासिक अनुबंध" : "Monthly Subscription"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPricingMode("hourly")}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                      pricingMode === "hourly"
                        ? "bg-white dark:bg-slate-700 text-primary dark:text-emerald-400 shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    {isHindi ? "दैनिक / प्रति घंटा" : "Hourly / Single Day"}
                  </button>
                </div>
              </div>
            )}

            {/* Slabs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {currentSlabs.map((slab, idx) => {
                const isSelected = selectedSlabIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSlabIndex(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "border-primary dark:border-emerald-500 bg-white dark:bg-slate-800 shadow-md ring-2 ring-primary/20"
                        : "border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-800 dark:text-slate-200">
                        {slab.hours}
                      </span>
                      {slab.badge && (
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                          {slab.badge}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        {slab.originalRate && (
                          <span className="line-through text-xs text-slate-400 font-normal">
                            {slab.originalRate}
                          </span>
                        )}
                        <span className="font-black text-sm text-primary dark:text-emerald-400 font-heading">
                          {slab.rate}
                        </span>
                      </div>
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

            {/* Direct Booking Bar */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-xs text-slate-500 dark:text-slate-400 block">{isHindi ? "चयनित प्लान:" : "Selected Plan:"}</span>
                <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  {selectedSlab?.hours} — <span className="text-primary dark:text-emerald-400 font-extrabold">{selectedSlab?.rate}</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleOpenBooking(details.title)}
                  className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl border border-primary/40 text-primary dark:text-emerald-400 font-bold text-xs hover:bg-primary/5 transition cursor-pointer"
                >
                  {isHindi ? "कॉलबैक फॉर्म" : "Request Callback"}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>{isHindi ? "व्हाट्सएप पर बुक करें" : "Book on WhatsApp"}</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Service-Specific FAQs */}
      {pageInfo.faqs.length > 0 && (
        <section className="py-12 bg-white dark:bg-[#0e171e]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100 text-center font-heading">
              {isHindi ? `${details.title} - अक्सर पूछे जाने वाले प्रश्न` : `Frequently Asked Questions: ${details.title}`}
            </h2>

            <div className="space-y-3">
              {pageInfo.faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 font-heading">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Explore Other Services Grid */}
      <ServicesGrid
        onOpenBooking={handleOpenBooking}
        onOpenDetail={(srv) => setSelectedDetailService(srv)}
      />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Comprehensive Footer */}
      <Footer />

      {/* 10. Interactive Service Inclusions & Pricing Detail Sheet */}
      <ServiceDetailModal
        isOpen={Boolean(selectedDetailService)}
        service={selectedDetailService}
        onClose={() => setSelectedDetailService(null)}
        onRequestCallback={(srvName) => {
          setSelectedDetailService(null);
          handleOpenBooking(srvName);
        }}
      />

      {/* 11. Interactive Booking & Estimator Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={details.title}
      />
    </main>
  );
};
