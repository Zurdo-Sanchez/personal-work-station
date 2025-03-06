import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./languages/en";
import es from "./languages/es";
import ca from "./languages/ca";
import de from "./languages/de";
import fr from "./languages/fr";
import zh from "./languages/zh";

i18n.use(initReactI18next).init({
  resources: {
    en,
    es,
    ca,
    de,
    fr,
    zh,
  },
  lng: "es", // Idioma por defecto
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
