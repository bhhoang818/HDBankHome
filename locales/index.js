import i18n from 'i18next';
import vietnamese from '../locales/default.json';
import english from '../locales/default.en.json';
import japanese from '../locales/default.jp.json';
import { getDefaultLanguage } from "../utils/common"

i18n
    .init({
        interpolation: { escapeValue: false },
        lng: 'vi',
        // fallbackLng: "en",
        detection: {
            order: [
                "navigator",
                "localStorage"
            ],
            cache: ['localStorage'],
            lookupLocalStorage: 'lang',
        },
        resources: {
            en: {
                common: english
            },
            vi: {
                common: vietnamese
            },
            jp: {
                common: japanese
            },
        },
    }).catch(e => {
        console.log(e);
    });

export default i18n;