import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DownloadIcon } from "@/components/footer/SocialMediaLinks";
import TextElement from "@/components/TextElement";

import { ReactSVG } from "react-svg";

interface Props {
  image: ImageMetadata;
  networkPattern: ImageMetadata;
}

const documentCards = [
  {
    label: "Application Form for Internet Cafe Certificate License",
    description: "1. Application Form for the Certificate of Internet Cafe",
    link: "/public/service/for-public/InternetCafe/1. Application Form for the Certificate of Internet Cafe╠ü.docx",
  },
  {
    description: "2. Application Form for Change Address Internet Cafe Shop ",
    link: "/public/service/for-public/InternetCafe/Application Form for 2. Change Address Internet Cafe Shop.docx",
  },
  {
    description:
      "3. Application Form Business Continuity License, Internet Business Center Opening",
    link: "/public/service/for-public/InternetCafe/3. Application Form Business Continuity _ License, Internet Business Center Opening.docx",
  },
  {
    description: "4. Application Form for Closing Internet Cafe Shop",
    link: "/public/service/for-public/InternetCafe/4.  Application Form for Closing Internet Cafe Shop.docx",
  },
  {
    description: "Guidline Internet Cafe",
    link: "/public/service/for-public/InternetCafe/Guidline-Internet-Cafe.pdf",
  },
];

const InternetCafePopup: React.FC<Props> = ({ image, networkPattern }) => {
  return (
    <Dialog>
      <DialogTrigger style={{ width: "100%" }}>
        <div className="flex max-h-[620px] min-h-[200px] flex-col items-center justify-center space-y-4 rounded-xl border md:h-[300px] xl:h-[450px] 2xl:h-[500px]">
          <img
            src={image.src}
            alt="Internet Cafe"
            className="mb-2 size-[58px] rounded-lg md:size-[76px] lg:size-[100px]"
            loading="lazy"
          />
          <TextElement className="w-5/5 text-center text-xs">
            Internet Cafe Permit
          </TextElement>
        </div>
      </DialogTrigger>
      <DialogContent className="h-auto w-[90vw] max-w-[1000px] rounded-2xl p-4 md:p-8">
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
              Internet Cafe Permit
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
                        <DownloadIcon />
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
