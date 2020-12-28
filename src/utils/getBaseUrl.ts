export default function getBaseUrl(defaultLang: string, lang: string) {
  return defaultLang !== lang ? `/${lang}/` : "/";
}
