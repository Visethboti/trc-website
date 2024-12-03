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
    label:
      "Application requesting for Equipment Type Approval Certificate License",
    description:
      "1. The Application for Certificate of Accredited Agent for Importation, Supply, and Distribution",
    link: "/service/for-operator/EquipmentType/1. The Application for Certificate of Accredited Agent for Importation, Supply, and Distribution.pdf",
  },
  {
    description:
      "2. The Application for Renewal of Certificate of Accredited Agent for Importation, Supply, and Distribution",
    link: "/service/for-operator/EquipmentType/2. The Application for Renewal of Certificate of Accredited Agent for Importation, Supply, and Distribution.pdf",
  },
  {
    description:
      "3. The Application for the import permit for radiocommunication equipment and telecommunications equipment",
    link: "/service/for-operator/EquipmentType/3. The application for the import permit for radiocommunication equipment and telecommunications equipment.pdf",
  },
  {
    description:
      "4. The Application for the import permit for radiocommunication equipment and telecommunications equipment_QIP",
    link: "/service/for-operator/EquipmentType/4. The application for the import permit for radiocommunication equipment and telecommunications equipment_QIP.pdf",
  },
  {
    description:
      "5. The Application for Type Approval Certificate of Radiocommunication Equipment and Telecommunication",
    link: "/service/for-operator/EquipmentType/5. The Application for Type Approval Certificate of Radiocommunication Equipment and Telecommunication.pdf",
  },
  {
    description:
      "6. The Application for Revision of Type Approval Certificate of Radiocommunication Equipment and Telecommunication Equipment",
    link: "/service/for-operator/EquipmentType/6. The Application for Revision of Type Approval Certificate of Radiocommunication Equipment and Telecommunication Equipment.pdf",
  },
  {
    description:
      "Guideline for Certificate And Authorization On The Import Of Radiocommunication Terminal Equipment",
    link: "/service/for-operator/EquipmentType/Guideline for Certificate And Authorization On The Import Of Radiocommunication Terminal Equipment.pdf",
  },
];

const documentCardsKH = [
  {
    label:
      "លិខិតសុំស្នើសុំអាជ្ញាប័ណ្ណ វិញ្ញាបនបត្រ ការយល់ព្រមពីប្រភេទគ្រឿងសម្ភារបរិក្ខារ",
    description:
      "1. ពាក្យស្នើសុំវិញ្ញាបនបត្រទទួលស្គាល់គុណវុឌ្ឈិជាភ្នាក់ងារនាំចូល ផ្គត់ផ្គង់ និង ការចែកចាយគ្រឿងសម្ភារបរិក្ខារវិទ្យុគមនាគមន៍ និងទូរគមនាគមន៍",
    link: "/service/for-operator/EquipmentType/1. The Application for Certificate of Accredited Agent for Importation, Supply, and Distribution.pdf",
  },
  {
    description:
      "2. ពាក្យស្នើសុំបន្តសុពលភាពវិញ្ញាបនបត្រទទួលស្គាល់គុណវុឌ្ឈិជាភ្នាក់ងារនាំចូល ផ្គត់ផ្គង់ និង ការចែកចាយគ្រឿងសម្ភារបរិក្ខារវិទ្យុគមនាគមន៍ និងទូរគមនាគមន៍",
    link: "/service/for-operator/EquipmentType/2. The Application for Renewal of Certificate of Accredited Agent for Importation, Supply, and Distribution.pdf",
  },
  {
    description:
      "3. ពាក្យស្នើសុំលិខិតអនុញ្ញាតការនាំចូលគ្រឿងសម្ភារបរិក្ខារវិទ្យុគមនាគមន៍​ និងគ្រឿងសម្ភារបរិក្ខារទូរគមនាគមន៍",
    link: "/service/for-operator/EquipmentType/3. The application for the import permit for radiocommunication equipment and telecommunications equipment.pdf",
  },
  {
    description:
      "4. ពាក្យស្នើសុំលិខិតអនុញ្ញាតការនាំចូលគ្រឿងសម្ភារបរិក្ខារវិទ្យុគមនាគមន៍​ និងគ្រឿងសម្ភារបរិក្ខារទូរគមនាគមន៍​ - QIP",
    link: "/service/for-operator/EquipmentType/4. The application for the import permit for radiocommunication equipment and telecommunications equipment_QIP.pdf",
  },
  {
    description:
      "5. ពាក្យស្នើសុំវិញ្ញាបនបត្រទទួលស្គាល់យថាប្រភេទនៃគ្រឿងសម្ភារបរិក្ខារវិទ្យុគមនាគមន៍​ និងគ្រឿងសម្ភារបរិក្ខារទូរគមនាគមន៍",
    link: "/service/for-operator/EquipmentType/5. The Application for Type Approval Certificate of Radiocommunication Equipment and Telecommunication.pdf",
  },
  {
    description:
      "6. ពាក្យស្នើសុំវិញ្ញាបនបត្រកែសម្រួលវិញ្ញាបនបត្រទទួលស្គាល់យថាប្រភេទនៃគ្រឿងសម្ភារបរិក្ខារវិទ្យុគមនាគមន៍​ និងគ្រឿងសម្ភារបរិក្ខារទូរគមនាគមន៍",
    link: "/service/for-operator/EquipmentType/6. The Application for Revision of Type Approval Certificate of Radiocommunication Equipment and Telecommunication Equipment.pdf",
  },
  {
    description:
      "សេចក្តីណែនាំស្តីពីការស្នើសុំវិញ្ញាបនបត្រ​​ លិខិតអនុញ្ញាតនាំចូលគ្រឿងសម្ភារបរិក្ខារវិទ្យុគមនាគមន៍​ និងគ្រឿងសម្ភារបរិក្ខារទូរគមនាគមន៍",
    link: "/service/for-operator/EquipmentType/Guideline for Certificate And Authorization On The Import Of Radiocommunication Terminal Equipment.pdf",
  },
];

let documentCards = [];

const EquipmentTypePopup: React.FC<Props> = ({ image, networkPattern }) => {
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
      if (window.location.href.includes("equipment-ta-certificate")) {
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
      <DialogTrigger
        onClick={handleClick}
        style={{ width: "100%", height: "100%" }}
      >
        <div className="flex h-full min-w-[140px] flex-row items-center justify-center rounded-2xl border py-2 2xl:py-6">
          <img
            src={image.src}
            alt="Equipment Type Approval Certificate"
            className="size-12 rounded-lg lg:size-20"
            loading="lazy"
          />
          <TextElement className="w-2/4 text-center text-[12px] lg:w-2/5 lg:text-[13px]">
            {t("nav.services.equipmentTACertificate")}
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
          <div className="flex flex-col items-center justify-center text-center md:mb-0 md:w-1/3">
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
              {t("nav.services.equipmentTACertificate")}
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

export default EquipmentTypePopup;
