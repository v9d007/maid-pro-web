"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Globe, Check } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onOpenBooking?: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelectLanguage = (lang: "en" | "hi") => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <>
      {/* Main Top Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#0e171e]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-xs"
            : "bg-[#fffbfa]/95 dark:bg-[#0b1318]/95 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-800/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Left Group: Brand Wordmark & Aligned Desktop Navigation Menu */}
            <div className="flex items-center gap-8 lg:gap-12">
              <BrandLogo />

              {/* Desktop Navigation Links */}
              <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
                <Link
                  href="#services"
                  className="text-slate-900 dark:text-slate-100 hover:text-primary dark:hover:text-emerald-400 font-semibold transition"
                >
                  {t.nav.homeServices}
                </Link>
                <Link
                  href="#about"
                  className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-emerald-400 transition font-medium"
                >
                  {t.nav.aboutUs}
                </Link>
                <Link
                  href="#faqs"
                  className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-emerald-400 transition font-medium"
                >
                  {t.nav.faqs}
                </Link>
              </nav>
            </div>

            {/* Desktop Right Action Area: Language & Theme Features */}
            <div className="hidden md:flex items-center gap-3">
              
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title={theme === "light" ? t.nav.themeDark : t.nav.themeLight}
                className="p-2.5 rounded-full text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/80 transition active:scale-95 cursor-pointer flex items-center justify-center bg-white/80 dark:bg-slate-900/60"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400" />
                )}
              </button>

              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  aria-label="Select Language"
                  title="Change Language / भाषा बदलें"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/80 transition active:scale-95 cursor-pointer bg-white/80 dark:bg-slate-900/60"
                >
                  <Globe className="w-4 h-4 text-primary dark:text-emerald-400" />
                  <span>{language === "en" ? "English" : "हिन्दी"}</span>
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-900 rounded-2xl shadow-high border border-slate-200/80 dark:border-slate-700 p-1.5 z-50 animate-in fade-in-50 zoom-in-95">
                    <button
                      onClick={() => handleSelectLanguage("en")}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-xl transition ${
                        language === "en"
                          ? "bg-primary/10 dark:bg-emerald-500/20 text-primary dark:text-emerald-400"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span>English</span>
                      {language === "en" && <Check className="w-3.5 h-3.5 text-primary dark:text-emerald-400" />}
                    </button>
                    <button
                      onClick={() => handleSelectLanguage("hi")}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-xl transition ${
                        language === "hi"
                          ? "bg-primary/10 dark:bg-emerald-500/20 text-primary dark:text-emerald-400"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span>हिन्दी (Hindi)</span>
                      {language === "hi" && <Check className="w-3.5 h-3.5 text-primary dark:text-emerald-400" />}
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Mobile Touch Header: Theme, Language & Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700 flex items-center justify-center active:scale-95"
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Sheet */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 px-4 pt-3 pb-5 space-y-4 shadow-high animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              <Link
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-xs font-bold text-primary dark:text-emerald-400 bg-primary/5 dark:bg-emerald-500/10 flex items-center justify-between"
              >
                <span>{t.nav.homeServices}</span>
              </Link>
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                {t.nav.aboutUs}
              </Link>
              <Link
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                {t.nav.faqs}
              </Link>
            </div>

            {/* Mobile Language Toggle */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Globe className="w-4 h-4 text-primary dark:text-emerald-400" />
                <span>{t.nav.selectLanguage}</span>
              </div>
              <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 border border-slate-200/70 dark:border-slate-700">
                <button
                  onClick={() => handleSelectLanguage("en")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    language === "en" ? "bg-white dark:bg-slate-700 text-primary dark:text-emerald-400 shadow-xs" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleSelectLanguage("hi")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    language === "hi" ? "bg-white dark:bg-slate-700 text-primary dark:text-emerald-400 shadow-xs" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  हिन्दी
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};


