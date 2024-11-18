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
    label:
      "Application requesting for Frequency Interference Complaint License",
    description: "The Application for Complaint",
    link: "/public/service/for-operator/FrequencyInterference/Complaint Form.pdf",
  },
  {
    description: "The Guideline for Frequency Interference Complaint",
    link: "/public/service/for-operator/FrequencyInterference/Guideline for Frequency Interference Complaint.pdf",
  },
];

const FrequencyInterferencePopup: React.FC<Props> = ({
  image,
  networkPattern,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [, setUrl] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setUrl(window.location.hash);
      console.log(window.location.hash);

      if (window.location.href.includes("frequency-interference-complaint")) {
        setIsDialogOpen(true);
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
        <div className="w-100 flex h-[203px] flex-col items-center justify-center rounded-2xl border md:h-[85px] md:w-[306px] md:flex-row lg:h-[110px] lg:w-[378px] xl:h-[140px] xl:w-[586px] 2xl:w-[680px]">
          <img
            src={image.src}
            alt="Frequency Interference Complaint"
            className="mb-2 ml-2 size-14 rounded-lg"
            loading="lazy"
          />
          <TextElement className="w-3/5 text-center text-xs">
            Frequency Interference Complaint
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
              Frequency Interference Complaint
            </span>
          </div>
          <div className="md:w-3/3 grid grid-cols-1 gap-5 md:grid-cols-1 md:items-end lg:grid-cols-2">
            {documentCards.map((card, index) => (
              <div key={index} className="flex flex-col">
                <TextElement className="mb-2 text-xs font-semibold">
                  {card.label}
                </TextElement>
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative flex h-auto max-h-[150px] min-h-[120px] flex-col justify-between overflow-hidden rounded-2xl bg-primary p-4 text-xs text-white md:h-[100px] md:w-[350px] lg:w-full">
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

export default FrequencyInterferencePopup;
