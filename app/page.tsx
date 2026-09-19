"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Testimonials } from "@/components/Testimonials";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { ServiceDetailModal } from "@/components/ServiceDetailModal";
import { ServiceItem } from "@/data/services";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("House Maid Service (Hourly / On-Demand)");
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
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

  return (
    <main className="flex-1 flex flex-col">
      {/* 1. Header & Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 2. Hero with Integrated Trust Guarantees */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* 3. Core Services & Transparent Pricing */}
      <ServicesGrid
        onOpenBooking={handleOpenBooking}
        onOpenDetail={handleOpenDetail}
      />

      {/* 5. Local Agra Customer Testimonials */}
      <Testimonials />

      {/* 6. About Us, Mission & Quick Callback Form */}
      <AboutSection />

      {/* 7. Frequently Asked Questions */}
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
}

