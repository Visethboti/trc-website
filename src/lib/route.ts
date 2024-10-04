import type { SupportedLanguage } from "@/i18n/ui";
import { removeLanguagePrefix } from "@/i18n/utils";
import type { CollectionEntry } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";

export enum Routes {
  Home = "/",
  About = "/about",
  Structure = "/about/structure",
  ChairRemarks = "/about/chair-remarks",
  Unit = "/about/units",
  LawsRegulations = "/laws-regulations",
  Policies = "/policies",
  PressRelease = "/press-release",
  Videos = "/videos",
  Aritcles = "/articles",
  Projects = "/projects",
  Contact = "/contact",
  CybersecurityTips = "/cybersecurity-tips",
  NewsRelease = "/news-releases",
  Activities = "/activities",
  Events = "/events",
}

export const NavRoutes = [
  {
    label: "Laws & Regulartions",
    children: [
      { label: "Laws", href: Routes.Home },
      { label: "Royal Decrees", href: Routes.Home },
      { label: "Sub Decrees", href: Routes.Home },
      { label: "Circulations", href: Routes.Home },
      { label: "Prakas", href: Routes.Home },
      { label: "Decisions", href: Routes.Home },
      { label: "Guidelines", href: Routes.Home },
    ],
  },
  {
    label: "Media",
    children: [
      { label: "News Releases", href: Routes.NewsRelease },
      { label: "Activities", href: Routes.Activities },
      { label: "Events", href: Routes.Events },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Publications", href: Routes.LawsRegulations },
      { label: "Telecom Statistics", href: Routes.Policies },
      { label: "Active Operators", href: Routes.PressRelease },
      { label: "Mobile Prefixes", href: Routes.Home },
      { label: "Common Codes", href: Routes.Home },
      { label: "Emergency Numbers", href: Routes.Home },
      { label: "Qualified Import Agents", href: Routes.Home },
      { label: "Tower Map", href: Routes.Home },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Chairman's Keynote", href: Routes.Home },
      { label: "Vision & Mission", href: Routes.Home },
      { label: "About TRC", href: Routes.Home },
      { label: "TRC Leader", href: Routes.Home },
      { label: "TRC Structure", href: Routes.Home },
    ],
  },
  {
    label: "Contact",
  },
  {
    label: "Service",
    children: [
      { label: "Public" },
      { label: "Domain .KH" },
      { label: "Internet Cafe" },
      { label: "Telecom Equipment Shop" },
      { label: "Operator" },
      { label: "Operational License" },
      { label: "Spectrum License" },
      { label: "Telecom Numbering Permit" },
      { label: "Equipment TA Certificate" },
      { label: "Qualified Agent Certification" },
      { label: "Equipment Importation & Distribution Permit" },
      { label: "Tower Construction Permit" },
      { label: "Fiber Cable Construction Permit" },
      { label: "Frequency Interference Complaint" },
    ],
  },
];

interface RouteType {
  href?: string;
  label: string;
  children?: RouteType[];
}

export function getLocalizedRoutes(
  paths: RouteType[],
  locale: string,
): RouteType[] {
  return paths.map((path) => {
    if (path.href) {
      return {
        label: path.label,
        href: getRelativeLocaleUrl(locale, path.href),
      };
    }

    if (path.children) {
      return {
        label: path.label,
        children: getLocalizedRoutes(path.children, locale),
      };
    }

    return path;
  });
}

export const getContentUrl = (
  entry: CollectionEntry<
    | "articles"
    | "cybersecurity-tips"
    | "events"
    | "news-releases"
    | "activities"
  >,
  lang: SupportedLanguage,
) => {
  const baseUrl = getRelativeLocaleUrl(lang);
  const slug = removeLanguagePrefix(entry.slug, lang);

  const articlePath = Routes.Aritcles.replace(/^\//, "");
  const cybersecurityTipsPath = Routes.CybersecurityTips.replace(/^\//, "");
  const newsReleasePath = Routes.NewsRelease.replace(/^\//, "");
  const activitiesPath = Routes.Activities.replace(/^\//, "");
  const eventsPath = Routes.Events.replace(/^\//, "");

  const urlGenerators: {
    articles: () => string;
    "cybersecurity-tips": () => string;
    events: () => string;
    "news-releases": () => string;
    activities: () => string;
  } = {
    articles: () => `${baseUrl}${articlePath}/${slug}`,
    "cybersecurity-tips": () => `${baseUrl}${cybersecurityTipsPath}/${slug}`,
    "news-releases": () => `${baseUrl}${newsReleasePath}/${slug}`,
    activities: () => `${baseUrl}${activitiesPath}/${slug}`,
    events: () => `${baseUrl}${eventsPath}/${slug}`,
  };

  const generator =
    urlGenerators[entry.collection as keyof typeof urlGenerators];
  if (generator) {
    return generator();
  }

  throw new Error(`Unsupported collection: ${entry.collection}`);
};
