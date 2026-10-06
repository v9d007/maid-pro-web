"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { CityProvider } from "@/context/CityContext";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CityProvider>{children}</CityProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

