import type { SupportedLanguage } from "@/i18n/ui";
import { removeLanguagePrefix } from "@/i18n/utils";
import type { CollectionEntry } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";

export enum Routes {
  Home = "/",
  LawsAndRegulations = "/laws-and-regulations",
  Laws = LawsAndRegulations + "/laws",
  RoyalDecrees = LawsAndRegulations + "/royal-decrees",
  SubDecrees = LawsAndRegulations + "/sub-decrees",
  Circulations = LawsAndRegulations + "/circulations",
  Prakas = LawsAndRegulations + "/prakas",
  Decisions = LawsAndRegulations + "/decisions",
  Guidelines = LawsAndRegulations + "/guidelines",
  Media = "/media",
  Resources = "/resources",
  MobilePrefixes = Resources + "/mobile-prefixes",
  CommonCodes = Resources + "/common-codes",
  NewsRelease = Media + "/news-releases",
  Activities = Media + "/activities",
  Events = Media + "/events",
  About = "/about",
  ChairRemarks = About,
  VisionMission = About,
  Structure = About + "/structure",
  Unit = "/about/units",
  Policies = "/policies",
  PressRelease = "/press-release",
  Videos = "/videos",
  Aritcles = "/articles",
  Projects = "/projects",
  ContactUsForm = "/ContactUsForm",
  CybersecurityTips = "/cybersecurity-tips",
}

export const NavRoutes = [
  {
    label: "Laws & Regulations",
    children: [
      { label: "Laws", href: Routes.Laws },
      { label: "Royal Decrees", href: Routes.RoyalDecrees },
      { label: "Sub Decrees", href: Routes.SubDecrees },
      { label: "Circulations", href: Routes.Circulations },
      { label: "Prakas", href: Routes.Prakas },
      { label: "Decisions", href: Routes.Decisions },
      { label: "Guidelines", href: Routes.Guidelines },
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
      { label: "Publications", href: Routes.Home },
      { label: "Telecom Statistics", href: Routes.Home },
      { label: "Active Operators", href: Routes.Home },
      { label: "Mobile Prefixes", href: Routes.MobilePrefixes },
      { label: "Common Codes", href: Routes.CommonCodes },
      { label: "Emergency Numbers", href: Routes.Home },
      { label: "Qualified Import Agents", href: Routes.Home },
      { label: "Tower Map", href: Routes.Home },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Chairman's Keynote", href: Routes.ChairRemarks },
      { label: "Vision & Mission", href: Routes.VisionMission },
      { label: "About TRC", href: Routes.About },
      { label: "TRC Leader", href: Routes.Home },
      { label: "TRC Structure", href: Routes.Home },
    ],
  },
  {
    label: "Service",
    children: [
      { label: "Public", isTitle: true },
      { label: "Domain .KH" },
      { label: "Internet Cafe" },
      { label: "Telecom Equipment Shop" },
      { label: "Operator", isTitle: true },
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
  {
    label: "Contact",
    href: Routes.ContactUsForm,
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
