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
  showTagline = true,
}) => {
  const isDark = variant === "dark";

  return (
    <Link href="/" className={`inline-flex flex-col select-none group ${className}`}>
      {/* Pure Typographic Wordmark */}
      <div className="flex items-baseline gap-1">
        <span
          className={`font-black text-xl sm:text-2xl font-heading tracking-tight leading-none transition-colors ${
            isDark
              ? "text-white"
              : "text-[#004842] dark:text-emerald-400"
          }`}
        >
          Maid<span className="text-amber-600 dark:text-amber-400 group-hover:text-amber-500 transition-colors">Pro</span>
        </span>
        {/* Modern Accent Brand Dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block flex-shrink-0 animate-pulse"></span>
      </div>

      {showTagline && (
        <span
          className={`text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[2px] leading-none mt-[2px] transition-colors ${
            isDark ? "text-amber-400" : "text-amber-700 dark:text-amber-400/90"
          }`}
        >
          Solution 4 You
        </span>
      )}
    </Link>
  );
};

