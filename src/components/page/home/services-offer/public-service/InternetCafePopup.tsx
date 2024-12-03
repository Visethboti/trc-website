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
    label: "Application Form for Internet Cafe Certificate License",
    description: "1. Application Form for the Certificate of Internet Cafe",
    link: "/service/for-public/InternetCafe/1. Application Form for the Certificate of Internet Cafe╠ü.docx",
  },
  {
    description: "2. Application Form for Change Address Internet Cafe Shop ",
    link: "/service/for-public/InternetCafe/Application Form for 2. Change Address Internet Cafe Shop.docx",
  },
  {
    description:
      "3. Application Form Business Continuity License, Internet Business Center Opening",
    link: "/service/for-public/InternetCafe/3. Application Form Business Continuity _ License, Internet Business Center Opening.docx",
  },
  {
    description: "4. Application Form for Closing Internet Cafe Shop",
    link: "/service/for-public/InternetCafe/4.  Application Form for Closing Internet Cafe Shop.docx",
  },
  {
    description: "Guidline Internet Cafe",
    link: "/service/for-public/InternetCafe/Guidline-Internet-Cafe.pdf",
  },
];

const documentCardsKH = [
  {
    label: "លិខិតស្នើសុំសាលបម្រើសេវាអ៊ីនធឺណិត",
    description:
      "១. ពាក្យស្នើសុំលិខិតអនុញ្ញាតបើកអាជីវកម្មសាលបម្រើសេវាអ៊ិនធឺណិត",
    link: "/service/for-public/InternetCafe/1. Application Form for the Certificate of Internet Cafe╠ü.docx",
  },
  {
    description: "២. ពាក្យស្នើសុំផ្លាស់ប្តូរអាសយដ្ឋានសាលបម្រើសេវាអ៊ិនធឺណិត",
    link: "/service/for-public/InternetCafe/Application Form for 2. Change Address Internet Cafe Shop.docx",
  },
  {
    description:
      "៣. ពាក្យស្នើសុំបន្តអាជីវកម្ម/លិខិតអនុញ្ញាតការបើកអាជីវកម្មសាលបម្រើសេវាអ៊ិនធឺណិត",
    link: "/service/for-public/InternetCafe/3. Application Form Business Continuity _ License, Internet Business Center Opening.docx",
  },
  {
    description: "៤. ពាក្យស្នើសុំបិទអាជីវកម្មសាលបម្រើសេវាអ៊ិនធឺណិត",
    link: "/service/for-public/InternetCafe/4.  Application Form for Closing Internet Cafe Shop.docx",
  },
  {
    description: "សេចក្តីណែនាំ",
    link: "/service/for-public/InternetCafe/Guidline-Internet-Cafe.pdf",
  },
];

let documentCards = [];

const InternetCafePopup: React.FC<Props> = ({ image, networkPattern }) => {
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
      if (window.location.href.includes("internet-cafe")) {
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
        <div className="flex h-full max-h-[620px] min-h-[200px] flex-col items-center justify-center space-y-4 rounded-2xl border">
          <img
            src={image.src}
            alt="Internet Cafe"
            className="mb-2 size-[58px] rounded-lg md:size-[76px] lg:size-[100px]"
            loading="lazy"
          />
          <TextElement className="w-5/5 text-center text-xs">
            {t("nav.services.internetCafe")}
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
          <div className="mb-6 flex flex-col items-center justify-center text-center md:mb-0 md:w-1/3">
            <ReactSVG
              src={image.src}
              beforeInjection={(svg) => {
                svg.classList.add("size-28");
                const paths = svg.querySelectorAll("path");
                paths.forEach((path) => {
                  path.classList.add("fill-primary");
                  path.classList.add("stroke-primary");
                });
              }}
            />
            <span className="w-full text-center text-xs text-primary">
              {t("nav.services.internetCafe")}
            </span>
          </div>
          <div className="scroll grid max-h-[300px] grid-cols-1 gap-5 overflow-y-auto md:max-h-[450px] md:w-2/3 md:grid-cols-1 md:items-end lg:max-h-[500px] lg:grid-cols-2">
            {documentCards.map((card, index) => (
              <div key={index} className="flex flex-col">
                <TextElement className="mb-2 text-xs font-semibold">
                  {card.label}
                </TextElement>
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative flex h-auto max-h-[150px] min-h-[120px] flex-col justify-between overflow-hidden rounded-2xl bg-primary p-4 text-[13px] text-white md:h-[100px] lg:w-full">
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

export default InternetCafePopup;
