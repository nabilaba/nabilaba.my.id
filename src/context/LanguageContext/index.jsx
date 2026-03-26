import { createContext, useContext, useState } from "react";
import locales from "../../locales";

const DEFAULT_LANG = "en";
const STORAGE_KEY = "nabilaba_lang";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG,
  );

  const changeLang = (code) => {
    if (locales[code]) {
      localStorage.setItem(STORAGE_KEY, code);
      setLang(code);
    }
  };

  const t = locales[lang];

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
