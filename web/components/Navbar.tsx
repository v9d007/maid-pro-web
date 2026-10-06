"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Globe, Check, MapPin, ChevronDown } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { useCity } from "@/context/CityContext";
import { CITIES_DATA } from "@/data/citiesData";

interface NavbarProps {
  onOpenBooking?: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("services");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const cityDropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { setCity, allCities } = useCity();

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target as Node)) {
        setCityDropdownOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Detect active city directly from URL route (e.g. /agra, /ghaziabad, /kalyan-mumbai)
  const pathParts = pathname?.split("/").filter(Boolean) || [];
  const routeCitySlug = pathParts.length > 0 && CITIES_DATA[pathParts[0]] ? pathParts[0] : null;
  const activeCity = routeCitySlug ? CITIES_DATA[routeCitySlug] : null;

  const navLinks = [
    { id: "services", label: t.nav.homeServices },
    { id: "about", label: t.nav.aboutUs },
    { id: "faqs", label: t.nav.faqs },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sectionIds = ["services", "about", "faqs", "contact"];
      const scrollPosition = window.scrollY + 180;

      // Bottom of page check - activate contact if scrolled near bottom
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActiveSection("contact");
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }

      // Default to services if above first section
      setActiveSection("services");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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
            ? "bg-white/95 dark:bg-[#0b1318]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-2xs"
            : "bg-white/80 dark:bg-[#0b1318]/80 backdrop-blur-sm border-b border-slate-100/80 dark:border-slate-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 relative">
            
            {/* Left: Brand Wordmark */}
            <div className="flex items-center flex-shrink-0">
              <BrandLogo />
            </div>

            {/* Center: Desktop Navigation Menu Links with Dynamic Active Color */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    href={`#${link.id}`}
                    className={`transition-colors duration-200 py-1 ${
                      isActive
                        ? "text-primary dark:text-emerald-400 font-bold"
                        : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-emerald-400 font-medium"
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Action Area: City, Language & Theme Features */}
            <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
              
              {/* City Selector Dropdown */}
              <div className="relative" ref={cityDropdownRef}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCityDropdownOpen((prev) => !prev);
                    setLangDropdownOpen(false);
                  }}
                  aria-label="Select City"
                  title="Choose City / शहर चुनें"
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold transition active:scale-95 cursor-pointer shadow-2xs border ${
                    activeCity
                      ? "text-primary dark:text-emerald-400 bg-primary/10 dark:bg-emerald-500/15 border-primary/30 dark:border-emerald-500/30"
                      : "text-slate-800 dark:text-slate-100 hover:text-primary dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 border-slate-200/90 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-primary dark:text-emerald-400 shrink-0" />
                  <span className="max-w-[120px] truncate">
                    {activeCity
                      ? (language === "hi" ? activeCity.hiName : activeCity.name)
                      : (language === "hi" ? "शहर चुनें" : "Select City")}
                  </span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {cityDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/90 dark:border-slate-700 p-2 z-50 animate-in fade-in-50 zoom-in-95 max-h-84 overflow-y-auto">
                    <div className="px-2.5 py-1.5 border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                      <span>{language === "hi" ? "सर्विस शहर चुनें" : "Select Location"}</span>
                      <span className="text-[9px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-semibold text-slate-500">9 Cities</span>
                    </div>

                    <div className="py-1 space-y-0.5">
                      {/* All India / Generic Home Option */}
                      <Link
                        href="/"
                        onClick={() => {
                          setCity("");
                          setCityDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl transition ${
                          !activeCity
                            ? "bg-primary/10 dark:bg-emerald-500/20 text-primary dark:text-emerald-400 font-bold"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                        }`}
                      >
                        <div className="flex flex-col text-left">
                          <span className="font-semibold">{language === "hi" ? "🇮🇳 सभी शहर (मुख्य पृष्ठ)" : "🇮🇳 All India (Home)"}</span>
                          <span className="text-[10px] text-slate-400">{language === "hi" ? "पूरे भारत में सेवाएं" : "Pan-India Services Overview"}</span>
                        </div>
                        {!activeCity && <Check className="w-3.5 h-3.5 text-primary dark:text-emerald-400 shrink-0" />}
                      </Link>

                      <div className="my-1 border-t border-slate-100 dark:border-slate-800" />

                      {allCities.map((c) => {
                        const isSelected = activeCity?.slug === c.slug;
                        return (
                          <Link
                            key={c.slug}
                            href={`/${c.slug}`}
                            onClick={() => {
                              setCity(c.slug);
                              setCityDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl transition ${
                              isSelected
                                ? "bg-primary/10 dark:bg-emerald-500/20 text-primary dark:text-emerald-400 font-bold"
                                : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                            }`}
                          >
                            <div className="flex flex-col text-left">
                              <span className="font-semibold">{language === "hi" ? c.hiName : c.name}</span>
                              <span className="text-[10px] text-slate-400">{language === "hi" ? c.hiState : c.state}</span>
                            </div>
                            {isSelected && <Check className="w-3.5 h-3.5 text-primary dark:text-emerald-400 shrink-0" />}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title={theme === "light" ? t.nav.themeDark : t.nav.themeLight}
                className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/80 transition active:scale-95 cursor-pointer flex items-center justify-center bg-white/80 dark:bg-slate-900/60"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400" />
                )}
              </button>

              {/* Language Selector Dropdown */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLangDropdownOpen((prev) => !prev);
                    setCityDropdownOpen(false);
                  }}
                  aria-label="Select Language"
                  title="Change Language / भाषा बदलें"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/80 transition active:scale-95 cursor-pointer bg-white/80 dark:bg-slate-900/60"
                >
                  <Globe className="w-3.5 h-3.5 text-primary dark:text-emerald-400" />
                  <span>{language === "en" ? "EN" : "हिन्दी"}</span>
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700 p-1.5 z-50 animate-in fade-in-50 zoom-in-95">
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

            {/* Mobile Touch Header: City, Theme, Language & Menu Toggle */}
            <div className="flex md:hidden items-center gap-1.5">
              
              {/* Mobile City Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-100"
              >
                <MapPin className="w-3 h-3 text-primary dark:text-emerald-400 shrink-0" />
                <span className="max-w-[80px] truncate">
                  {activeCity
                    ? (language === "hi" ? activeCity.hiName : activeCity.name)
                    : (language === "hi" ? "शहर चुनें" : "City")}
                </span>
              </button>

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
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 px-4 pt-3 pb-5 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            
            {/* Mobile City Selector Strip */}
            <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                <span>{language === "hi" ? "अपना शहर चुनें:" : "Select Your City:"}</span>
                <span className="text-[10px] text-primary dark:text-emerald-400 font-semibold">9 Operational Cities</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 max-h-44 overflow-y-auto pr-0.5">
                <Link
                  href="/"
                  onClick={() => {
                    setCity("");
                    setMobileMenuOpen(false);
                  }}
                  className={`p-2 rounded-xl text-center text-xs font-semibold border transition ${
                    !activeCity
                      ? "bg-primary text-white border-primary dark:bg-emerald-600 dark:border-emerald-600 shadow-xs"
                      : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  <span className="block truncate">{language === "hi" ? "🇮🇳 सभी शहर (Home)" : "🇮🇳 All India (Home)"}</span>
                </Link>
                {allCities.map((c) => {
                  const isSelected = activeCity?.slug === c.slug;
                  return (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}`}
                      onClick={() => {
                        setCity(c.slug);
                        setMobileMenuOpen(false);
                      }}
                      className={`p-2 rounded-xl text-center text-xs font-semibold border transition ${
                        isSelected
                          ? "bg-primary text-white border-primary dark:bg-emerald-600 dark:border-emerald-600 shadow-xs"
                          : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      <span className="block truncate">{language === "hi" ? c.hiName : c.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? "text-primary dark:text-emerald-400 bg-primary/10 dark:bg-emerald-500/15 font-bold"
                        : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
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


