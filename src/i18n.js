import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./languages";

i18n.use(initReactI18next).init({
  resources: Object.keys(translations).reduce((acc, lang) => {
    acc[lang] = { translation: translations[lang] };
    return acc;
  }, {}),
  lng: "es", // Idioma por defecto
  fallbackLng: "en", // Si no encuentra un texto en el idioma actual, usa inglés
  interpolation: {
    escapeValue: false, // React ya maneja la seguridad
  },
});

export default i18n;
