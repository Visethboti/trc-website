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
import { getTranslatedkey, removeLanguagePrefix } from "@/i18n/utils";
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
  Vision = About + "/#vision",
  Mission = About + "/#mission",
  AboutTRC = About + "/#about-trc",
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
  HomeServicePunblicSection = "/#public",
  InternetCafe = "/#internet-cafe/",
  TelecomEquipmentShop = "/#telecom-equipment-shop",
  OperationalLicense = "/#operational-license",
  SpectrumLicense = "/#spectrum-license",
  TelecomNumberingPermit = "/#telecom-numbering-permit",
  EquipmentTACertificate = "/#equipment-ta-certificate",
  QualifiedAgentCertification = "/#qualified-agent-certification",
  EquipmentImportationDistributionPermit = "/#equipment-importation-distribution-permit",
  TowerConstructionPermit = "/#tower-construction-permit",
  FiberCableConstructionPermit = "/#fiber-cable-construction-permit",
  FrequencyInterferenceComplaint = "/#frequency-interference-complaint",
}

export const NavRoutes = [
  {
    label: "nav.lawsRegulations",
    children: [
      { label: "nav.lawsRegulations.laws", href: Routes.Laws },
      { label: "nav.lawsRegulations.royalDecrees", href: Routes.RoyalDecrees },
      { label: "nav.lawsRegulations.subDecrees", href: Routes.SubDecrees },
      { label: "nav.lawsRegulations.circulations", href: Routes.Circulations },
      { label: "nav.lawsRegulations.prakas", href: Routes.Prakas },
      { label: "nav.lawsRegulations.decisions", href: Routes.Decisions },
      { label: "nav.lawsRegulations.guidelines", href: Routes.Guidelines },
    ],
  },
  {
    label: "nav.services",
    children: [
      { label: "nav.services.public", isTitle: true },
      {
        label: "nav.services.domainKH",
        href: Routes.HomeServicePunblicSection,
        icon: Domain,
      },
      {
        label: "nav.services.internetCafe",
        href: Routes.InternetCafe,
        icon: InternetCafe,
      },
      {
        label: "nav.services.telecomEquipmentShop",
        href: Routes.TelecomEquipmentShop,
        icon: TelecomShop,
      },
      { label: "nav.services.operator", isTitle: true },
      {
        label: "nav.services.operationalLicense",
        href: Routes.OperationalLicense,
        icon: ISP,
      },
      {
        label: "nav.services.spectrumLicense",
        href: Routes.SpectrumLicense,
        icon: Spectrum,
      },
      {
        label: "nav.services.telecomNumberingPermit",
        href: Routes.TelecomNumberingPermit,
        icon: NumberingPermit,
      },
      {
        label: "nav.services.equipmentTACertificate",
        href: Routes.EquipmentTACertificate,
        icon: TACertificate,
      },
      {
        label: "nav.services.qualifiedAgentCertification",
        href: Routes.QualifiedAgentCertification,
        icon: QualifiesAgent,
      },
      {
        label: "nav.services.equipmentImportationDistributionPermit",
        href: Routes.EquipmentImportationDistributionPermit,
        icon: Import,
      },
      {
        label: "nav.services.towerConstructionPermit",
        href: Routes.TowerConstructionPermit,
        icon: TowerConstructionPermit,
      },
      {
        label: "nav.services.fiberCableConstructionPermit",
        href: Routes.FiberCableConstructionPermit,
        icon: FiberCable,
      },
      {
        label: "nav.services.frequencyInterferenceComplaint",
        href: Routes.FrequencyInterferenceComplaint,
        icon: Complaint,
      },
    ],
  },
  {
    label: "nav.media",
    children: [
      { label: "nav.media.newsReleases", href: Routes.NewsRelease },
      { label: "nav.media.activities", href: Routes.Activities },
      { label: "nav.media.events", href: Routes.Events },
    ],
  },
  {
    label: "nav.resources",
    children: [
      { label: "nav.resources.publications", href: Routes.UnderConstruction },
      {
        label: "nav.resources.telecomStatistics",
        href: Routes.UnderConstruction,
      },
      { label: "nav.resources.activeOperators", href: Routes.ActiveOperator },
      { label: "nav.resources.mobilePrefixes", href: Routes.MobilePrefixes },
      { label: "nav.resources.commonCodes", href: Routes.CommonCodes },
      {
        label: "nav.resources.emergencyNumbers",
        href: Routes.EmergencyNumbers,
      },
      {
        label: "nav.resources.qualifiedImportAgents",
        href: Routes.UnderConstruction,
      },
      { label: "nav.resources.typeApproval", href: Routes.UnderConstruction },
      { label: "nav.resources.towerMap", href: Routes.UnderConstruction },
    ],
  },
  {
    label: "nav.about",
    children: [
      { label: "nav.about.chairmansKeynote", href: Routes.About },
      { label: "nav.about.vision", href: Routes.Vision },
      { label: "nav.about.mission", href: Routes.Mission },
      { label: "nav.about.aboutTRC", href: Routes.AboutTRC },
      { label: "nav.about.trcLeader", href: Routes.TrcLeader },
      { label: "nav.about.trcStructure", href: Routes.TrcStructure },
    ],
  },
  {
    label: "nav.contact",
    href: Routes.ContactUsForm,
  },
];

interface RouteType {
  href?: string;
  label: string;
  icon?: ImageMetadata;
  children?: RouteType[];
  isTitle?: boolean;
}

export function getLocalizedRoutes(
  paths: RouteType[],
  locale: string,
): RouteType[] {
  return paths.map((path) => {
    if (path.href) {
      if (path.icon) {
        return {
          label: getTranslatedkey(path.label, locale),
          href: getRelativeLocaleUrl(locale, path.href),
          icon: path.icon,
        };
      } else {
        return {
          label: getTranslatedkey(path.label, locale),
          href: getRelativeLocaleUrl(locale, path.href),
        };
      }
    }

    if (path.children) {
      return {
        label: getTranslatedkey(path.label, locale),
        children: getLocalizedRoutes(path.children, locale),
      };
    }
    return {
      label: getTranslatedkey(path.label, locale),
      isTitle: path.isTitle,
    };
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
