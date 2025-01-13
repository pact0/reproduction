import { Locale } from "@/models/Locale";

export const i18nConfig = {
  locales: Object.values(Locale),
  defaultLocale: "en",
};

const languages = [
  { locale: "en", name: "English" },
  { locale: "zh_CN", name: "中文简体" },
];
export default languages;
