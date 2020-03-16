import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import common_ru from "./translations/ru/common.json";
import common_en from "./translations/en/common.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        whitelist: ["en", "ru"],
        fallbackLng: "en",
        resources: {
            en: {
                translations: common_en
            },
            ru: {
                translations: common_ru
            }
        },
        // keySeparator: false,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

export default i18n;
