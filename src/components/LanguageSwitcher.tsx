import { languages, type SupportedLanguage } from "@/i18n/ui";
import { navigate } from "astro:transitions/client";
import enIconr from "src/static/lang-icon/en.svg";
import kmIcon from "src/static/lang-icon/KH-Cambodia.svg";
import kmIconr from "src/static/lang-icon/km.svg";
import enIcon from "src/static/lang-icon/UKM-UnitedKingdom.svg";

const LanguageSwitcher = ({
  currentPath,
  initialLocale,
}: {
  currentPath: string;
  initialLocale: SupportedLanguage;
}) => {
  const toggleLanguage = () => {
    const locales = Object.keys(languages) as SupportedLanguage[];
    const currentIndex = locales.indexOf(initialLocale);
    const nextIndex = (currentIndex + 1) % locales.length;
    const newLocale = locales[nextIndex];

    const newPath = `/${newLocale}${currentPath.replace(/^\/[a-z]{2}/, "")}`;
    navigate(newPath);
  };

  const langImages = {
    en: kmIconr,
    km: enIconr,
  };
  const icon = langImages[initialLocale];

  const languageNames = {
    en: "English",
    km: "Khmer",
  };

  return (
    <>
      <div className="hidden items-center sm:hidden md:hidden lg:flex">
        <button
          onClick={toggleLanguage}
          type="button"
          aria-label={`Current language: ${languageNames[initialLocale]}. Click to toggle language.`}
          className={`ml-5 min-w-max rounded ${initialLocale === "km" ? "border-4" : ""} border-solid border-secondary 2xl:ml-10`}
        >
          <img src={kmIcon.src} width="28" height="26" alt="Khmer Flag" />
        </button>
        <button
          onClick={toggleLanguage}
          type="button"
          aria-label={`Current language: ${languageNames[initialLocale]}. Click to toggle language.`}
          className={`ml-3 min-w-max rounded ${initialLocale === "en" ? "border-4" : ""} border-solid border-secondary 2xl:ml-6`}
        >
          <img src={enIcon.src} width="28" height="26" alt="Uk Flag" />
        </button>
      </div>
      <button
        onClick={toggleLanguage}
        type="button"
        aria-label={`Current language: ${languageNames[initialLocale]}. Click to toggle language.`}
        className="ml-5 flex min-w-max rounded-full border-2 border-solid border-secondary sm:flex md:flex lg:hidden 2xl:ml-10"
      >
        <img src={icon.src} width="26" height="26" alt="Flag" />
      </button>
    </>
  );
};

export default LanguageSwitcher;
