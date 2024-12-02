import { defaultLang, ui, type SupportedLanguage } from "./ui";

export function useTranslations(lang: keyof typeof ui = "en") {
  const validLang = lang in ui ? lang : "en";
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[validLang][key] || ui[defaultLang][key];
  };
}

export function getTranslatedkey(
  key: string,
  lang: keyof typeof ui = "en",
): string {
  const validLang = lang in ui ? lang : "en";
  return ui[validLang][key] || ui[defaultLang][key];
}

// Function to remove language prefix from slug
export function removeLanguagePrefix(
  slug: string,
  lang: SupportedLanguage,
): string {
  return slug.replace(`${lang}/`, "");
}

export function getLangFromUrl(input: string | URL) {
  const url = typeof input === "string" ? input : input.pathname;

  const [, lang] = url.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}
