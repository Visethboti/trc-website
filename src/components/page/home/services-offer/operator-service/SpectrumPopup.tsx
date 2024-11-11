import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DownloadIcon } from "@/components/footer/SocialMediaLinks";
import TextElement from "@/components/TextElement";

import { ReactSVG } from "react-svg";

const documentCards = [
  {
    label: "Application requesting for Spectrum License",
    description: "Radio Amateur License",
    link: "/public/service/for-operator/SpectrumLicense/1. Radio-Amateur-License.docx",
  },
  {
    description: "2. Radiocom MFHFVHF UF License",
    link: "/public/service/for-operator/SpectrumLicense/2. Radiocom-MFHFVHF-UHF-License.docx",
  },
  {
    description: "3. Radio Sound Broadcasting",
    link: "/public/service/for-operator/SpectrumLicense/3. Radio_Sound_Broadcasting.docx",
  },
  {
    description: "4. Television VHFUHF License",
    link: "/public/service/for-operator/SpectrumLicense/4. Television-VHFUHF-License.docx",
  },
  {
    description: "5. Radio Microwave Station License",
    link: "/public/service/for-operator/SpectrumLicense/5. Radio-Microwave-Station-License.docx",
  },
  {
    description: "6. Base Station for Mobile",
    link: "/public/service/for-operator/SpectrumLicense/6. Base_Station_for_Mobile.docx",
  },
  {
    description: "7. Broadband Wireless Access License",
    link: "/public/service/for-operator/SpectrumLicense/7. Broadband-Wireless-Access-License.docx",
  },
  {
    description: "8. Radio VSAT License",
    link: "/public/service/for-operator/SpectrumLicense/8. Radio-VSAT-License.docx",
  },
  {
    description: "9. Radio INMARSAT License",
    link: "/public/service/for-operator/SpectrumLicense/9. Radio-INMARSAT-License.docx",
  },
  {
    description: "10. Radio SATELLITE PHONE License",
    link: "/public/service/for-operator/SpectrumLicense/10. Radio-SATELLITE-PHONE-License.docx",
  },
];

const SpectrumPopup = () => {
  return (
    <Dialog>
      <DialogTrigger style={{ width: "100%" }}>
        <div className="min-w-100 flex h-[203px] flex-col items-center justify-center rounded-2xl border md:h-[194px] lg:h-[240px] xl:h-[300px]">
          <img
            src="/src/asset/service-icons/Spectrum.svg"
            alt="Spectrum"
            className="mb-2 size-14 rounded-lg"
            loading="lazy"
          />
          <TextElement className="w-full text-center text-xs">
            Spectrum License
          </TextElement>
        </div>
      </DialogTrigger>
      <DialogContent className="h-auto w-[90vw] max-w-[1000px] p-4 md:p-8">
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-5">
          <div className="mb-6 flex flex-col items-center justify-center text-center md:mb-0 md:w-1/3">
            <ReactSVG
              src="/src/asset/service-icons/Spectrum.svg"
              className="mb-4 size-14"
              beforeInjection={(svg) => {
                svg.classList.add("size-14");
                const paths = svg.querySelectorAll("path");
                paths.forEach((path) => {
                  path.classList.add("fill-primary");
                  path.classList.add("stroke-primary");
                });
              }}
            />
            <span className="w-full text-center text-xs text-primary">
              Spectrum License
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
                          src="/src/asset/network-Pattern.png"
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

export default SpectrumPopup;
