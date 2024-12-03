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
    label: "Application requesting for Spectrum License",
    description: "1. Radio Amateur License",
    link: "/service/for-operator/SpectrumLicense/1. Radio-Amateur-License.docx",
  },
  {
    description: "2. Radiocom MFHFVHF UF License",
    link: "/service/for-operator/SpectrumLicense/2. Radiocom-MFHFVHF-UHF-License.docx",
  },
  {
    description: "3. Radio Sound Broadcasting",
    link: "/service/for-operator/SpectrumLicense/3. Radio_Sound_Broadcasting.docx",
  },
  {
    description: "4. Television VHFUHF License",
    link: "/service/for-operator/SpectrumLicense/4. Television-VHFUHF-License.docx",
  },
  {
    description: "5. Radio Microwave Station License",
    link: "/service/for-operator/SpectrumLicense/5. Radio-Microwave-Station-License.docx",
  },
  {
    description: "6. Base Station for Mobile",
    link: "/service/for-operator/SpectrumLicense/6. Base_Station_for_Mobile.docx",
  },
  {
    description: "7. Broadband Wireless Access License",
    link: "/service/for-operator/SpectrumLicense/7. Broadband-Wireless-Access-License.docx",
  },
  {
    description: "8. Radio VSAT License",
    link: "/service/for-operator/SpectrumLicense/8. Radio-VSAT-License.docx",
  },
  {
    description: "9. Radio INMARSAT License",
    link: "/service/for-operator/SpectrumLicense/9. Radio-INMARSAT-License.docx",
  },
  {
    description: "10. Radio SATELLITE PHONE License",
    link: "/service/for-operator/SpectrumLicense/10. Radio-SATELLITE-PHONE-License.docx",
  },
];

const documentCardsKH = [
  {
    label: "លិខិតស្នើសុំអាជ្ញាប័ណ្ណវិសាលគមន៍ហ្រ្វេកង់ស៍វិទ្យុ",
    description: "១. ពាក្យសុំអាជ្ញាប័ណ្ណហ្វ្រេកង់ស៍វិទ្យុអាម៉ាទ័រ",
    link: "/service/for-operator/SpectrumLicense/1. Radio-Amateur-License.docx",
  },
  {
    description: "២. ពាក្យស្នើសុំអាជ្ញាប័ណ្ណហ្វ្រេកង់ស៍វិទ្យុទាក់ទង",
    link: "/service/for-operator/SpectrumLicense/2. Radiocom-MFHFVHF-UHF-License.docx",
  },
  {
    description: "៣. ពាក្យស្នើសុំអាជ្ញាប័ណ្ណហ្វ្រេកង់ស៍វិទ្យុផ្សាយសំឡេង",
    link: "/service/for-operator/SpectrumLicense/3. Radio_Sound_Broadcasting.docx",
  },
  {
    description: "៤. ពាក្យស្នើសុំអាជ្ញាប័ណ្ណហ្វ្រេកង់ស៍ទូរទស្សន៍",
    link: "/service/for-operator/SpectrumLicense/4. Television-VHFUHF-License.docx",
  },
  {
    description: "៥. ពាក្យស្នើសុំអាជ្ញាប័ណ្ណហ្វ្រេកង់ស៍វិទ្យុម៉ៃក្រូវ៉េវ",
    link: "/service/for-operator/SpectrumLicense/5. Radio-Microwave-Station-License.docx",
  },
  {
    description:
      "៦. ពាក្យស្នើសុំហ្រេ្វកង់ស៍វិទ្យុផ្តល់សេវាទូរស័ព្ទចល័ត អចល័តឥតខ្សែ",
    link: "/service/for-operator/SpectrumLicense/6. Base_Station_for_Mobile.docx",
  },
  {
    description:
      "៧. ពាក្យស្នើសុំអាជ្ញាប័ណ្ណហ្វ្រេកង់ស៍វិទ្យុផ្តល់សេវាអ៊ីនធឺណេត",
    link: "/service/for-operator/SpectrumLicense/7. Broadband-Wireless-Access-License.docx",
  },
  {
    description: "៨. ពាក្យស្នើសុំអាជ្ញាប័ណ្ណហ្វ្រេកង់ស៍វិទ្យុVSAT",
    link: "/service/for-operator/SpectrumLicense/8. Radio-VSAT-License.docx",
  },
  {
    description: "៩. ពាក្យស្នើសុំអាជ្ញាប័ណ្ណហ្វ្រេកង់ស៍វិទ្យុ INMARSAT",
    link: "/service/for-operator/SpectrumLicense/9. Radio-INMARSAT-License.docx",
  },
  {
    description:
      "១០. ពាក្យសុំអាជ្ញាប័ណ្ណប្រើប្រាស់ទូរស័ព្ទចល័តតាមផ្កាយរណប (SATELLITE PHONE)",
    link: "/service/for-operator/SpectrumLicense/10. Radio-SATELLITE-PHONE-License.docx",
  },
];

let documentCards = [];

const SpectrumPopup: React.FC<Props> = ({ image, networkPattern }) => {
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
      if (window.location.href.includes("spectrum-license")) {
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
        <div className="min-w-100 flex h-[203px] flex-col items-center justify-center rounded-2xl border md:h-[194px] lg:h-[240px] xl:h-[300px]">
          <img
            src={image.src}
            alt="Spectrum"
            className="mb-2 size-24 rounded-lg"
            loading="lazy"
          />
          <TextElement className="w-2/4 text-center text-[12px] lg:text-[13px]">
            {t("nav.services.spectrumLicense")}
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
                svg.classList.add("size-24");
                const paths = svg.querySelectorAll("path");
                paths.forEach((path) => {
                  path.classList.add("stroke-primary");
                });
              }}
            />
            <span className="w-full text-center text-xs text-primary">
              {t("nav.services.spectrumLicense")}
            </span>
          </div>
          <div className="scroll grid max-h-[300px] grid-cols-1 gap-5 overflow-y-auto md:max-h-[450px] md:w-2/3 md:grid-cols-1 md:items-end lg:grid-cols-2">
            {documentCards.map((card, index) => (
              <div key={index} className="flex flex-col">
                <TextElement className="mb-2 text-xs font-semibold">
                  {card.label}
                </TextElement>
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative flex h-auto max-h-[150px] min-h-[120px] flex-col justify-between overflow-hidden rounded-2xl bg-primary p-4 text-[13px] text-white md:h-[100px] md:w-[350px] lg:w-full">
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

export default SpectrumPopup;
