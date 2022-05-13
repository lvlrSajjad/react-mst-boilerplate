import i18n from "i18n-js"
import en from "./en_us.json"
import es from "./es_mx.json"
import fr from "./fr_ca.json"

i18n.fallbacks = true
i18n.translations = { en, es, fr }

i18n.locale = "en"/// Localization.locale || "en"

export const switchLocale = (code: string) => {
  i18n.locale = code
}
