import { LocString } from "@/data/competencies/types";

export const getLocalizedString = (locString: LocString | undefined | null, language: string): string => {
  if (!locString) return "";
  
  // Cast language to the valid keys or fallback to pt
  const key = (language === 'en' || language === 'es') ? language : 'pt';
  
  return locString[key] || locString.pt || "";
};

export const getLocalizedStringArray = (locStringArray: { pt: string[], en: string[], es: string[] } | undefined | null, language: string): string[] => {
  if (!locStringArray) return [];
  
  const key = (language === 'en' || language === 'es') ? language : 'pt';
  
  return locStringArray[key] || locStringArray.pt || [];
};
