"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = "light",
}) => {
  const isDark = variant === "dark";

  return (
    <Link href="/" className={`inline-flex items-center select-none group ${className}`}>
      {/* Pure Typographic Wordmark */}
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
    </Link>
  );
};

