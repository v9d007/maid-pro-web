"use client";

import React, { useRef } from "react";
import {
  ShieldCheck,
  Star,
  MapPin,
  CheckCircle,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { VERIFIED_STAFF, StaffMember } from "@/data/staff";
import { generateWhatsAppLink } from "@/utils/whatsapp";

interface VerifiedStaffProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const VerifiedStaff: React.FC<VerifiedStaffProps> = ({ onOpenBooking }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleRequestStaff = (staff: StaffMember) => {
    const link = generateWhatsAppLink({
      service: `Request staff profile: ${staff.name} (${staff.role})`,
      locality: staff.locality,
      customNotes: `I saw ${staff.name}'s profile on the website and would like to hire or interview them for my home.`,
    });
    window.open(link, "_blank");
  };

  return (
    <section id="staff" className="py-20 bg-surface border-t border-outline-variant/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-container/15 border border-tertiary/20 text-tertiary text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-tertiary" />
              <span>100% Background-Checked Workforce</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight">
              Meet Our Top-Rated Domestic Helpers
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Every professional undergoes rigorous police background checks, identity authentication, and skill verification before visiting your home.
            </p>
          </div>

          {/* Swipe Indicator & Desktop Scroll Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="text-xs font-semibold text-on-surface-variant sm:hidden flex items-center gap-1">
              <span>Swipe helpers</span>
              <span>→</span>
            </span>

            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary text-on-surface-variant hover:text-primary flex items-center justify-center transition shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary text-on-surface-variant hover:text-primary flex items-center justify-center transition shadow-sm active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Row on Mobile/Tablet & Grid on Large Screens */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 gap-5 -mx-4 px-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-4 lg:gap-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {VERIFIED_STAFF.map((staff) => (
            <div
              key={staff.id}
              className="min-w-[285px] max-w-[300px] sm:min-w-[320px] sm:max-w-none lg:min-w-0 lg:max-w-none flex-shrink-0 snap-start bg-surface-container-lowest rounded-2xl border border-outline-variant/30 border-t-4 border-t-primary shadow-sm hover-card-elevation transition flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-5 sm:p-6">
                
                {/* Avatar & Badges Header (Clean Name Initials) */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-heading font-extrabold text-lg shadow-sm border border-black/5 ${staff.avatarBg}`}
                    >
                      {staff.initials}
                    </div>
                    <div
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center border-2 border-white shadow-sm"
                      title="Police & Identity Verified"
                    >
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-on-surface font-heading group-hover:text-primary transition truncate">
                      {staff.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mt-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 flex-shrink-0" />
                      <span>{staff.rating}</span>
                      <span className="text-on-surface-variant text-[11px] font-normal">
                        ({staff.reviewsCount})
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-on-surface-variant block mt-0.5">
                      {staff.experience}
                    </span>
                  </div>
                </div>

                {/* Role Title */}
                <div className="mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg border border-primary/20 block truncate">
                    {staff.role}
                  </span>
                </div>

                {/* Locality */}
                <div className="flex items-center gap-1.5 text-xs text-on-surface-variant mb-4">
                  <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span className="truncate">{staff.locality}</span>
                </div>

                {/* Specialties */}
                <div className="space-y-1.5 pt-3 border-t border-outline-variant/20">
                  <span className="text-[10px] font-bold text-on-surface uppercase tracking-wider block">
                    Key Specialties:
                  </span>
                  {staff.specialties.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                      <CheckCircle className="w-3.5 h-3.5 text-tertiary flex-shrink-0" />
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Verification Chips */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-outline-variant/20">
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ✓ Police Cleared
                  </span>
                  <span className="text-[10px] font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    ✓ Aadhaar Verified
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 border-t border-outline-variant/20 bg-surface-container-low/50">
                <button
                  type="button"
                  onClick={() => handleRequestStaff(staff)}
                  className="w-full py-3 px-3 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300 fill-emerald-300/20 flex-shrink-0" />
                  <span>Inquire via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
