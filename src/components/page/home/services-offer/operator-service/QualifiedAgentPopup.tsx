import { useEffect, useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DownloadIcon } from "@/components/footer/SocialMediaLinks";
import TextElement from "@/components/TextElement";

import { getLangFromUrl, useTranslations } from "@/i18n/utils";
import { X } from "lucide-react";
import { ReactSVG } from "react-svg";

interface Props {
  image: ImageMetadata;
  networkPattern: ImageMetadata;
}

const documentCardsEN = [
  {
    label: "Application requesting for Qualified Agent Certificate License",
    description: "The Application for Qualified Agent Certificate",
    link: "/service/for-operator/QualifiedAgent/Application for Qualified Agent Certificate.pdf",
  },
  {
    description: "The Application for Renewal of Qualified Agent Certificate",
    link: "/service/for-operator/QualifiedAgent/Application for Renewal of Qualified Agent Certificate.pdf",
  },
  {
    description: "The Guideline to Qualified Agent Certificate",
    link: "/service/for-operator/QualifiedAgent/Guideline to Qualified Agent Certificate.pdf",
  },
];

const documentCardsKH = [
  {
    label:
      "លិខិតសុំស្នើសុំអាជ្ញាប័ណ្ណវិញ្ញាបនបត្រទទួលគុណវុឌ្ឍិជាភ្នាក់ងារមានលក្ខណៈសម្បត្តិគ្រប់គ្រាន់",
    description: "វិញ្ញាបនបត្រទទួលគុណវុឌ្ឍិជាភ្នាក់ងារ",
    link: "/service/for-operator/QualifiedAgent/Application for Qualified Agent Certificate.pdf",
  },
  {
    description: "បន្តវិញ្ញាបនបត្រទទួលគុណវុឌ្ឍិជាភ្នាក់ងារ",
    link: "/service/for-operator/QualifiedAgent/Application for Renewal of Qualified Agent Certificate.pdf",
  },
  {
    description: "សេចក្តីណែនាំ",
    link: "/service/for-operator/QualifiedAgent/Guideline to Qualified Agent Certificate.pdf",
  },
];

let documentCards = [];

const QualifiedAgentPopup: React.FC<Props> = ({ image, networkPattern }) => {
  const [url, setUrl] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setUrl(window.location.pathname);
  }, []);
  const lang = getLangFromUrl(url);
  documentCards = lang === "en" ? documentCardsEN : documentCardsKH;
  const t = useTranslations(lang);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.href.includes("qualified-agent-certification")) {
        setIsDialogOpen(true);
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <Dialog open={isDialogOpen}>
      <DialogTrigger onClick={handleClick} style={{ width: "100%" }}>
        <div className="flex h-[85px] min-w-[140px] flex-row items-center justify-center rounded-2xl border lg:h-[110px] xl:h-[140px]">
          <img
            src={image.src}
            alt="Qualified"
            className="size-12 rounded-lg lg:size-20"
            loading="lazy"
          />
          <TextElement className="w-2/4 text-center text-[12px] md:w-2/5 lg:text-[13px] 2xl:w-2/5">
            {t("nav.services.qualifiedAgentCertification")}
          </TextElement>
        </div>
      </DialogTrigger>
      <DialogContent className="h-auto w-[90vw] max-w-[1000px] rounded-2xl p-4 md:p-8">
        <button
          className="absolute right-4 top-4 z-50 rounded-sm p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => setIsDialogOpen(false)}
          aria-label="Close"
        >
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </button>
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-5">
          <div className="mb-6 flex flex-col items-center justify-center text-center md:mb-0">
            <ReactSVG
              src={image.src}
              beforeInjection={(svg) => {
                svg.classList.add("size-24");
                const paths = svg.querySelectorAll("path");
                paths.forEach((path) => {
                  path.classList.add("fill-primary");
                  path.classList.add("stroke-primary");
                });
              }}
            />
            <span className="w-full text-center text-xs text-primary">
              {t("nav.services.qualifiedAgentCertification")}
            </span>
          </div>
          <div className="scroll grid max-h-[300px] grid-cols-1 gap-5 overflow-y-auto md:max-h-[450px] md:grid-cols-1 md:items-end lg:grid-cols-2">
            {documentCards.map((card, index) => (
              <div key={index} className="flex flex-col">
                <TextElement className="mb-2 text-xs font-semibold">
                  {card.label}
                </TextElement>
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative flex h-auto min-h-[120px] w-full flex-col justify-between overflow-hidden rounded-2xl bg-primary p-4 text-[13px] text-white lg:w-full">
                    <span className="mb-2 grow">{card.description}</span>
                    <div className="flex items-start justify-between">
                      <div>
                        <img
                          src={networkPattern.src}
                          alt="Network Pattern"
                          className="absolute bottom-0 left-0 w-[106px]"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <a href={card.link} download>
                          <DownloadIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QualifiedAgentPopup;
