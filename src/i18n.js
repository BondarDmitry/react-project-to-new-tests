import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_ru from "./translations/ru/common.json";
import common_en from "./translations/en/common.json";

i18n.use(initReactI18next).init({
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

// i18n.use(initReactI18next).init({
//     fallbackLng: "en",
//     resources: {
//         en: {
//             translations: {
//                 "To get started, edit <1>src/App.js</1> and save to reload.":
//                     "To get started, edit <1>src/App.js</1> and save to reload.",
//                 "Welcome to React": "Welcome to React and react-i18next",
//                 welcome: "Hello <br/> <strong>World</strong>"
//             }
//         },
//         de: {
//             translations: {
//                 "To get started, edit <1>src/App.js</1> and save to reload.":
//                     "Starte in dem du, <1>src/App.js</1> editierst und speicherst.",
//                 "Welcome to React": "Willkommen bei React und react-i18next"
//             }
//         }
//     },
//     fallbackLng: "en",
//     // debug: true,

//     // have a common namespace used around the full app
//     ns: ["translations"],
//     defaultNS: "translations",

//     keySeparator: false, // we use content as keys

//     interpolation: {
//         escapeValue: false
//     }
// });

// export default i18n;
