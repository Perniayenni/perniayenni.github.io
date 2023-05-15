import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import langDetector from "i18next-browser-languagedetector"
import resources from "./resources"
import { capitalize } from "../utils/utils"

i18n
  .use(initReactI18next)
  .use(langDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    detection: {
      order: ['navigator' ]
    },
    resources,
    partialBundledLanguages: true,
    compatibilityJSON: 'v3',
    interpolation: {
      format: function (value, format, lng) {
        if (format === 'capitalize') return capitalize(value)
        return value
      }
    }

  })

  export default i18n