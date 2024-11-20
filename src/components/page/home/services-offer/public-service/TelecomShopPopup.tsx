import { useEffect, useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DownloadIcon } from "@/components/footer/SocialMediaLinks";
import TextElement from "@/components/TextElement";

import { X } from "lucide-react";
import { ReactSVG } from "react-svg";

interface Props {
  image: ImageMetadata;
  networkPattern: ImageMetadata;
}

const documentCards = [
  {
    label: "Application Form for Telecom Equipment Shop Certificate License",
    description:
      "1. Application Permit Letter on Radiocommunication and Telecommunication equipment Sale and or Repair Shop",
    link: "/service/for-public/TelecomEquipmentShop/1. Application Permit Letter on Radiocommunication and Telecommunication equipment Sale and_or Repair Shop.pdf",
  },
  {
    description:
      "2. Application for change of address, store, and or repair of equipment, equipment, radio and telecommunications",
    link: "/service/for-public/TelecomEquipmentShop/2. Application for change of address, store, and _ or repair of equipment, equipment, radio and telecommunications..pdf",
  },
  {
    description:
      "3. Application Business Transmission Validity of Licenses, Opening and or Repairing Equipment, Equipment, Radio and Telecommunication",
    link: "/service/for-public/TelecomEquipmentShop/3. Application Business Transmission _ Validity of Licenses, Opening and _ or Repairing Equipment, Equipment, Radio and Telecommunication.pdf",
  },
  {
    description:
      "4. Application Offer application, store, and or repair equipment, equipment, telecommunication and telecommunication",
    link: "/service/for-public/TelecomEquipmentShop/4. Application Offer application, store, and _ or repair equipment, equipment, telecommunication and telecommunication..pdf",
  },
  {
    description: "Guidline",
    link: "/service/for-public/TelecomEquipmentShop/Guideline.pdf",
  },
];

const TelecomShopPopup: React.FC<Props> = ({ image, networkPattern }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.href.includes("telecom-equipment-shop")) {
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
        <div className="flex max-h-[620px] min-h-[200px] flex-col items-center justify-center space-y-4 rounded-xl border md:h-[300px] xl:h-[450px] 2xl:h-[500px]">
          <img
            src={image.src}
            alt="Telecom Equipment Shop"
            className="mb-2 size-[58px] rounded-lg md:size-[76px] lg:size-[100px]"
            loading="lazy"
          />
          <TextElement className="w-5/5 text-center text-xs">
            Telecom Equipment Shop
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
              Telecom Equipment Shop
            </span>
          </div>
          <div className="scroll grid max-h-[300px] grid-cols-1 gap-5 overflow-y-auto md:max-h-[450px] md:w-2/3 md:grid-cols-1 md:items-end lg:max-h-[600px] lg:grid-cols-2">
            {documentCards.map((card, index) => (
              <div key={index} className="flex flex-col">
                <TextElement className="mb-2 text-xs font-semibold">
                  {card.label}
                </TextElement>
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative flex h-auto min-h-[120px] w-full flex-col justify-between overflow-hidden rounded-2xl bg-primary p-4 text-[13px] text-white md:h-[145px] lg:w-full">
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

export default TelecomShopPopup;
