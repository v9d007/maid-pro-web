"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CITIES_DATA, CityInfo, ALL_CITIES } from "@/data/citiesData";

interface CityContextType {
  currentCity: CityInfo;
  setCity: (citySlug: string) => void;
  allCities: CityInfo[];
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export const CityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCity, setCurrentCityState] = useState<CityInfo>(CITIES_DATA["agra"]);

  useEffect(() => {
    try {
      const savedCitySlug = localStorage.getItem("maidpro_selected_city");
      if (savedCitySlug && CITIES_DATA[savedCitySlug]) {
        setCurrentCityState(CITIES_DATA[savedCitySlug]);
      }
    } catch {
      // ignore
    }
  }, []);

  const setCity = (citySlug: string) => {
    if (CITIES_DATA[citySlug]) {
      setCurrentCityState(CITIES_DATA[citySlug]);
      try {
        localStorage.setItem("maidpro_selected_city", citySlug);
      } catch {
        // ignore
      }
    }
  };

  return (
    <CityContext.Provider value={{ currentCity, setCity, allCities: ALL_CITIES }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = (): CityContextType => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
};
