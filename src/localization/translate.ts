import i18n from "i18n-js"

/**
 * Translates text.
 *
 * @param key The i18n key.
 * @param options
 */
export function translate(key: string, options?: i18n.TranslateOptions) {
  return key ? i18n.t(key.toUpperCase(), {defaultValue: key}) : key
}
