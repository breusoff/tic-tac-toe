import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import {ILanguage, Languages} from "src/i18n/ILanguage";
import enTranslations from "./locales/en/translations.json";
import ruTranslations from "./locales/ru/translations.json";

const resources = {
    en: enTranslations,
    ru: ruTranslations,
};

export const availableLanguages: ILanguage[] = [
    {
        code: Languages.en,
        name: "English",
    },
    {
        code: Languages.ru,
        name: "Русский",
    },
];

const fallbackLng = Languages.ru;

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng,
        ns: ["translations"],
        supportedLngs: ["ru", "en"],
        defaultNS: "translations",
    });

export default i18n;
