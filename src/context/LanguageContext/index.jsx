import { createContext, useContext, useState } from "react";
import locales, { DEFAULT_LANG } from "../../locales";

const STORAGE_KEY = "nabilaba_lang";

const LanguageContext = createContext();

function buildProxy(langData, fallbackData) {
  return new Proxy(
    {},
    {
      get(_, section) {
        const sectionData = langData?.[section];
        const fallbackSection = fallbackData?.[section];

        if (typeof sectionData === "object" && !Array.isArray(sectionData)) {
          return new Proxy(
            {},
            {
              get(__, key) {
                const val = sectionData?.[key];
                if (val !== undefined && val !== null && val !== "") return val;
                return fallbackSection?.[key];
              },
            },
          );
        }

        if (
          sectionData !== undefined &&
          sectionData !== null &&
          sectionData !== ""
        ) {
          return sectionData;
        }
        return fallbackSection;
      },
    },
  );
}

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

  const currentLocale = locales[lang] ?? locales[DEFAULT_LANG];
  const fallbackLocale = locales[DEFAULT_LANG];
  const t = buildProxy(currentLocale, fallbackLocale);

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
