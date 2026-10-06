"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = "light",
  showTagline = false,
}) => {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg py-1 ${className}`}
      aria-label="maidpro - Verified Domestic Help & Cleaning in Agra"
    >
      <div className="flex flex-col">
        {/* Pure Clean Typographic Brandmark: All-Lowercase maidpro (US Style) */}
        <div className="flex items-baseline leading-none">
          <span className="font-heading font-black text-2xl sm:text-[1.85rem] tracking-tight leading-none transition-colors duration-200">
            <span className={isDark ? "text-white" : "text-[#004842] dark:text-white transition-colors"}>
              maid
            </span>
            <span className={isDark ? "text-amber-400 group-hover:text-amber-300" : "text-[#d97708] dark:text-amber-400 group-hover:text-amber-600 transition-colors"}>
              pro
            </span>
          </span>
        </div>

        {/* Optional Tagline Subtitle */}
        {showTagline && (
          <span className={`text-[9px] font-bold tracking-widest uppercase mt-0.5 transition-colors ${
            isDark ? "text-amber-300/90" : "text-[#004842] dark:text-slate-400"
          }`}>
            Solution for you
          </span>
        )}
      </div>
    </Link>
  );
};
