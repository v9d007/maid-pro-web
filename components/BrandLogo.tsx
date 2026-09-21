"use client";

import React from "react";
import Link from "next/link";

export type LogoOptionId = 1 | 2 | 3 | 4;

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  option?: LogoOptionId;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = "light",
  option = 1,
  showTagline = false,
}) => {
  const isDark = variant === "dark";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 select-none group ${className}`}>
      {/* Logomark Emblem Icon */}
      <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 relative transition-transform duration-200 group-hover:scale-105">
        {option === 1 && (
          // Option 1: The Sparkle Shield (Trust & Police Verification)
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 12 L86 38 L86 64 C86 78 50 92 50 92 C50 92 14 78 14 64 L14 38 Z"
              className={isDark ? "fill-[#0f766e] stroke-emerald-300" : "fill-[#004842] stroke-emerald-500"}
              strokeWidth="3"
            />
            {/* Chimney */}
            <path d="M70 28 V18 H78 V34" className={isDark ? "fill-[#0f766e]" : "fill-[#004842]"} />
            {/* Sweeping Gold Orbit Ring */}
            <path d="M8 64 C14 50 76 48 92 56" stroke="#f59e0b" strokeWidth="4.5" strokeLinecap="round" />
            {/* Central 4-Point Gold Star */}
            <path d="M50 34 Q50 48 62 48 Q50 48 50 62 Q50 48 38 48 Q50 48 50 34 Z" fill="#fbbf24" />
          </svg>
        )}

        {option === 2 && (
          // Option 2: The Modern M-Monogram (Tech-Forward Ribbon)
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 72 V36 L50 15 L80 36 V72"
              className={isDark ? "stroke-emerald-300" : "stroke-[#004842]"}
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34 58 L50 38 L66 58"
              className={isDark ? "stroke-emerald-400" : "stroke-[#0f766e]"}
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12 76 C24 88 64 90 84 46" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
            <path d="M84 32 Q84 40 90 40 Q84 40 84 48 Q84 40 78 40 Q84 40 84 32 Z" fill="#fbbf24" />
          </svg>
        )}

        {option === 3 && (
          // Option 3: The Caring Home & Hands (Family & Domestic Care)
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 42 L50 20 L78 42"
              className={isDark ? "stroke-emerald-300" : "stroke-[#004842]"}
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 76 C18 60 38 52 50 64 C62 52 82 60 80 76 C78 90 50 96 50 96 C50 96 22 90 20 76 Z"
              stroke="#2dd4bf"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <polygon points="50,54 52,60 58,60 53,64 55,70 50,66 45,70 47,64 42,60 48,60" fill="#f59e0b" />
          </svg>
        )}

        {option === 4 && (
          // Option 4: The Hotel-Grade Sparkle Apex (Luxury Arches)
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M36 84 V40 C36 22 54 22 54 40 V84"
              className={isDark ? "stroke-emerald-300" : "stroke-[#004842]"}
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M18 84 V54 C18 38 36 38 36 54"
              className={isDark ? "stroke-emerald-400" : "stroke-[#005c55]"}
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M72 84 V54 C72 38 54 38 54 54"
              className={isDark ? "stroke-emerald-400" : "stroke-[#005c55]"}
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path d="M64 16 Q64 26 74 26 Q64 26 64 36 Q64 26 54 26 Q64 26 64 16 Z" fill="#f59e0b" />
          </svg>
        )}
      </div>

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span
            className={`font-black text-2xl sm:text-[1.75rem] font-heading tracking-tight leading-none transition-colors ${
              isDark
                ? "text-white"
                : "text-[#004842] dark:text-emerald-400"
            }`}
          >
            Maid<span className="text-amber-600 dark:text-amber-400 group-hover:text-amber-500 transition-colors">Pro</span>
          </span>
          {/* Modern Accent Brand Dot */}
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 inline-block flex-shrink-0 animate-pulse"></span>
        </div>
        
        {showTagline && (
          <span className="text-[9px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase -mt-0.5">
            Verified Agra Help
          </span>
        )}
      </div>
    </Link>
  );
};
