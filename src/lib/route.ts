import Complaint from "@/asset/service-icons/Complaint.svg";
import Domain from "@/asset/service-icons/Domain.svg";
import FiberCable from "@/asset/service-icons/Fiber Cable.svg";
import Import from "@/asset/service-icons/Import.svg";
import InternetCafe from "@/asset/service-icons/Internet Cafe.svg";
import ISP from "@/asset/service-icons/ISP.svg";
import NumberingPermit from "@/asset/service-icons/Numbering Permit.svg";
import QualifiesAgent from "@/asset/service-icons/Qualified Agent.svg";
import Spectrum from "@/asset/service-icons/Spectrum.svg";
import TACertificate from "@/asset/service-icons/TA Certificate.svg";
import TelecomShop from "@/asset/service-icons/Telecom Shop.svg";
import TowerConstructionPermit from "@/asset/service-icons/Tower Construction Permit.svg";
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
  EmergencyNumbers = Resources + "/emergency-numbers",
  ActiveOperator = Resources + "/active-operator",
  NewsRelease = Media + "/news-releases",
  Activities = Media + "/activities",
  Events = Media + "/events",
  About = "/about",
  ChairRemarks = About,
  VisionMission = About,
  TrcLeader = About + "/trc-leader",
  TrcStructure = About + "/trcstructure",
  Policies = "/policies",
  PressRelease = "/press-release",
  Videos = "/videos",
  Aritcles = "/articles",
  Projects = "/projects",
  ContactUsForm = "/contactusform",
  CybersecurityTips = "/cybersecurity-tips",
  UnderConstruction = "/under-construction",
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
      { label: "Active Operators", href: Routes.ActiveOperator },
      { label: "Mobile Prefixes", href: Routes.MobilePrefixes },
      { label: "Common Codes", href: Routes.CommonCodes },
      { label: "Emergency Numbers", href: Routes.EmergencyNumbers },
      { label: "Qualified Import Agents", href: Routes.UnderConstruction },
      { label: "Tower Map", href: Routes.UnderConstruction },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Chairman's Keynote", href: Routes.ChairRemarks },
      { label: "Vision & Mission", href: Routes.VisionMission },
      { label: "About TRC", href: Routes.About },
      { label: "TRC Leader", href: Routes.TrcLeader },
      { label: "TRC Structure", href: Routes.TrcStructure },
    ],
  },
  {
    label: "Service",
    children: [
      { label: "Public", isTitle: true },
      {
        label: "Domain .KH",
        href: Routes.UnderConstruction,
        icon: Domain,
      },
      {
        label: "Internet Cafe",
        href: Routes.UnderConstruction,
        icon: InternetCafe,
      },
      {
        label: "Telecom Equipment Shop",
        href: Routes.UnderConstruction,
        icon: TelecomShop,
      },
      { label: "Operator", isTitle: true },
      {
        label: "Operational License",
        href: Routes.UnderConstruction,
        icon: ISP,
      },
      {
        label: "Spectrum License",
        href: Routes.UnderConstruction,
        icon: Spectrum,
      },
      {
        label: "Telecom Numbering Permit",
        href: Routes.UnderConstruction,
        icon: NumberingPermit,
      },
      {
        label: "Equipment TA Certificate",
        href: Routes.UnderConstruction,
        icon: TACertificate,
      },
      {
        label: "Qualified Agent Certification",
        href: Routes.UnderConstruction,
        icon: QualifiesAgent,
      },
      {
        label: "Equipment Importation & Distribution Permit",
        href: Routes.UnderConstruction,
        icon: Import,
      },
      {
        label: "Tower Construction Permit",
        href: Routes.UnderConstruction,
        icon: TowerConstructionPermit,
      },
      {
        label: "Fiber Cable Construction Permit",
        href: Routes.UnderConstruction,
        icon: FiberCable,
      },
      {
        label: "Frequency Interference Complaint",
        href: Routes.UnderConstruction,
        icon: Complaint,
      },
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
  icon?: ImageMetadata;
  children?: RouteType[];
}

export function getLocalizedRoutes(
  paths: RouteType[],
  locale: string,
): RouteType[] {
  return paths.map((path) => {
    if (path.href) {
      if (path.icon) {
        return {
          label: path.label,
          href: getRelativeLocaleUrl(locale, path.href),
          icon: path.icon,
        };
      } else {
        return {
          label: path.label,
          href: getRelativeLocaleUrl(locale, path.href),
        };
      }
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
