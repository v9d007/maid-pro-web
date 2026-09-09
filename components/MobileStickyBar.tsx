"use client";

import React from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { getDirectWhatsAppChatLink, getDirectPhoneCallLink } from "@/utils/whatsapp";
import { useLanguage } from "@/context/LanguageContext";

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#0e171e]/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 px-3 py-2 sm:hidden shadow-high transition-colors duration-200">
      <div className="grid grid-cols-12 gap-2 items-center">
        
        {/* 1-Tap Call */}
        <a
          href={getDirectPhoneCallLink()}
          className="col-span-3 py-2 px-1 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex flex-col items-center justify-center text-center transition active:scale-95 border border-slate-200/80 dark:border-slate-700"
          aria-label="Call Customer Care"
        >
          <Phone className="w-4 h-4 text-primary dark:text-emerald-400 mb-0.5" />
          <span className="text-[10px] leading-tight">{t.mobileBar.call}</span>
        </a>

        {/* Instant Book Modal */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="col-span-4 py-2 px-1.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary-container dark:bg-emerald-600 dark:hover:bg-emerald-500 flex flex-col items-center justify-center text-center transition active:scale-95 shadow-xs cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] leading-tight">{t.mobileBar.book}</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href={getDirectWhatsAppChatLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-5 py-2.5 px-2 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-emerald-600 flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95 text-center"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="text-xs font-bold">{t.mobileBar.whatsapp}</span>
        </a>

      </div>
    </div>
  );
};

