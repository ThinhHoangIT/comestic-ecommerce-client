import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationVI from "../locales/vi/translation.json";
import translationEN from "../locales/en/translation.json";

const getSavedLanguage = () => {
  if (typeof window !== "undefined") {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "en";
  }
  return "en";
};

const defaultLanguage = getSavedLanguage();

i18n.use(initReactI18next).init(
  {
    resources: {
      en: {
        translation: translationEN,
      },
      vi: {
        translation: translationVI,
      },
    },
    lng: defaultLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  },
  (err, t) => {
    if (err) {
      console.error("i18n init failed", err);
    } else {
      console.log("i18n init successful");
    }
  }
);

i18n.on("languageChanged", (lang) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lang);
  }
});

export default i18n;
