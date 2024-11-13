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
    label: "Fixed Phone Number Application",
    description: "License to use mobile number or telecom numbers",
    link: "/public/service/for-operator/TelecomNumbering/1. License to use mobile number or telecom numbers.pdf",
  },
  {
    description: "Attachments for requesting fixed number or telecom numbers",
    link: "/public/service/for-operator/TelecomNumbering/Attachments for requesting fixed number or telecom numbers.pdf",
  },
  {
    label: "Mobile Phone Number Application",
    description: "1. License to use mobile number or telecom numbers",
    link: "/public/service/for-operator/TelecomNumbering/1. License to use mobile number or telecom numbers.pdf",
  },
  {
    description: "Attachments for requesting mobile number or telecom numbers",
    link: "/public/service/for-operator/TelecomNumbering/Attachments for requesting mobile number or telecom numbers.pdf",
  },
  {
    label: "Return Fixed Phone Number Application",
    description: "1. License to return fixed number or telecom numbers",
    link: "/public/service/for-operator/TelecomNumbering/1. License to return fixed number or telecom numbers.pdf",
  },
  {
    description: "Attachments for returning fixed number or telecom numbers",
    link: "/public/service/for-operator/TelecomNumbering/Attachments for returning fixed number or telecom numbers.pdf",
  },
  {
    label: "Return Mobile Phone Number Application",
    description: "1. License to return mobile number or telecom number",
    link: "/public/service/for-operator/TelecomNumbering/1. License to return mobile number or telecom numbers.pdf",
  },
  {
    description: "Attachments for returning mobile number or telecom numbers",
    link: "/public/service/for-operator/TelecomNumbering/Attachments for returning mobile number or telecom numbers.pdf",
  },
];

const TelecomNumberingPopup: React.FC<Props> = ({ image, networkPattern }) => {
  return (
    <Dialog>
      <DialogTrigger style={{ width: "100%" }}>
        <div className="flex h-[85px] min-w-[140px] flex-row items-center justify-center rounded-2xl border md:h-[91px] lg:h-[112px] xl:h-[140px]">
          <img
            src={image.src}
            alt="Telecom Numbering Permit"
            className="size-12 rounded-lg lg:size-20"
            loading="lazy"
          />
          <TextElement className="w-2/4 text-center text-[12px] lg:text-[13px]">
            Telecom Numbering Permit
          </TextElement>
        </div>
      </DialogTrigger>
      <DialogContent className="h-auto w-[90vw] max-w-[1000px] rounded-2xl p-4 md:p-8">
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-5">
          <div className="mb-6 flex flex-col items-center justify-center text-center md:mb-0 md:w-1/3">
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
              Telecom Numbering Permit
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

export default TelecomNumberingPopup;
