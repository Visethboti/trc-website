export const ui: Record<string, Record<string, string>> = {
  en: {
    previous: "Previous",
    next: "Next",

    "nav.lawsregulations": "Laws & Regulations",
    "nav.lawsregulations.laws": "Laws",
    "nav.lawsregulations.royaldecrees": "Royal Decrees",
    "nav.lawsregulations.subdecrees": "Sub Decrees",
    "nav.lawsregulations.circulations": "Circulations",
    "nav.lawsregulations.prakas": "Prakas",
    "nav.lawsregulations.decisions": "Decisions",
    "nav.lawsregulations.guidelines": "Guidelines",
    "nav.media": "Media",
    "nav.media.newsreleases": "News Releases",
    "nav.media.activities": "Activities",
    "nav.media.events": "Events",
    "nav.resources": "Resources",
    "nav.resources.publications": "Publications",
    "nav.resources.telecomstatistics": "Telecom Statistics",
    "nav.resources.activeoperators": "Active Operators",
    "nav.resources.mobileprefixes": "Mobile Prefixes",
    "nav.resources.commoncodes": "Common Codes",
    "nav.resources.emergencynumbers": "Emergency Numbers",
    "nav.resources.qualifiedimportagents": "Qualified Import Agents",
    "nav.resources.towermap": "Tower Map",
    "nav.about": "About",
    "nav.about.chairmanskeynote": "Chairman's Keynote",
    "nav.about.visionmission": "Vision & Mission",
    "nav.about.abouttrc": "About TRC",
    "nav.about.trcleader": "TRC Leader",
    "nav.about.trcstructure": "TRC Structure",
    "nav.service": "Service",
    "nav.service.public": "Public",
    "nav.service.domainkh": "Domain .KH",
    "nav.service.internetcafe": "Internet Cafe",
    "nav.service.telecomequipmentshop": "Telecom Equipment Shop",
    "nav.service.operator": "Operator",
    "nav.service.operationallicense": "Operational License",
    "nav.service.spectrumlicense": "Spectrum License",
    "nav.service.telecomnumberingpermit": "Telecom Numbering Permit",
    "nav.service.equipmenttacertificate": "Equipment TA Certificate",
    "nav.service.qualifiedagentcertification": "Qualified Agent Certification",
    "nav.service.equipmentimportationdistributionpermit":
      "Equipment Importation & Distribution Permit",
    "nav.service.towerconstructionpermit": "Tower Construction Permit",
    "nav.service.fibercableconstructionpermit":
      "Fiber Cable Construction Permit",
    "nav.service.frequencyinterferencecomplaint":
      "Frequency Interference Complaint",
    "nav.contact": "Contact",
    "home.serviceWeOffer": "Service We Offer",
    "home.serviceWeOffer.forPublic": "For Public",
    "home.serviceWeOffer.forOperator": "For Operator",
    "home.serviceWeOffer.forPublic.domainKH": "Domain.KH",
    "home.serviceWeOffer.forPublic.internetCafePermit": "Internet Cafe Permit",
    "home.serviceWeOffer.forPublic.telecomEquipmentShop":
      "Telecom Equipment Shop",
    "home.serviceWeOffer.forOperator.internetServiceProviderLicense":
      "Internet Service Provider License",
    "home.serviceWeOffer.forOperator.spectrumLicense": "Spectrum License",
    "home.serviceWeOffer.forOperator.towerConstructionPermit":
      "Tower Construction Permit",
    "home.serviceWeOffer.forOperator.fiberCableConstructionPermit":
      "Fiber Cable Construction Permit",
    "home.serviceWeOffer.forOperator.telecomNumberingPermit":
      "Telecom Numbering Permit",
    "home.serviceWeOffer.forOperator.equipmentImportationDistributionPermit":
      "Equipment Importation & Distribution Permit",
    "home.serviceWeOffer.forOperator. frequencyInterferenceComplaint":
      " Frequency Interference Complaint",
    "home.serviceWeOffer.forOperator.equipmentTypeApprovalCertificate":
      "Equipment Type Approval Certificate",
    "home.serviceWeOffer.forOperator.qualifiedAgentCertificate":
      "Qualified Agent Certificate",
    "home.media": "Media",
    "home.seeMoreMedia": "See more media",
    "home.speedtest.mptc": "MPTC",
    "home.speedtest.speedTestApp": "Speed Test App",
    "home.speedtest.description":
      "Measure mobile boardhand performance anywhere and anytime with accurate results and user-friendly. For more related information, please visit ",
    "home.unitLink.ministryAutonomousUnits": "Ministry and Autonomous Units",
  },
  km: {
    previous: "Previous",
    next: "Next",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "home.serviceWeOffer": "Service We Offer",
    "home.media": "Media",
    "home.seeMoreMedia": "See more media",
  },
} as const;

export const languages = {
  en: "en",
  km: "km",
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang = languages.km;
