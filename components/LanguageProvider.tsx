"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // 1. Check local storage first
    const savedLang = localStorage.getItem("kraftnova_lang") as Language;
    if (savedLang) {
      setLanguageState(savedLang);
      return;
    }

    // 2. Otherwise auto-detect via IP
    async function detectCountry() {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data && data.country_code === "SV") {
          setLanguageState("es");
          localStorage.setItem("kraftnova_lang", "es");
        }
      } catch (error) {
        console.error("Error detecting country", error);
      }
    }
    detectCountry();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("kraftnova_lang", lang);
    }
  };

  // Optionally prevent hydration mismatch if strict rendering is needed,
  // but it's safe to just return children and let client update if we don't care about a brief flash.
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className={isMounted ? "opacity-100" : "opacity-0"} style={{ transition: "opacity 0.3s" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
