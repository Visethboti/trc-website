import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DownloadIcon } from "@/components/footer/SocialMediaLinks";
import TextElement from "@/components/TextElement";

import { ReactSVG } from "react-svg";

const InternetServicePopup = () => {
  return (
    <Dialog>
      <DialogTrigger style={{ width: "100%" }}>
        <div className="min-w-100 flex h-[203px] flex-col items-center justify-center rounded-2xl border md:h-[194px] lg:h-[240px] xl:h-[300px]">
          <img
            src="/src/asset/service-icons/ISP.svg"
            alt="Spectrum"
            className="mb-2 size-14 rounded-lg"
            loading="lazy"
          />
          <TextElement className="w-full text-center text-xs">
            Internet Service Provider License
          </TextElement>
        </div>
      </DialogTrigger>
      <DialogContent className="h-auto w-[350px] md:w-[700px]">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-around">
          <div className="mb-6 flex flex-col items-center justify-center text-center md:mb-0 md:w-auto">
            <ReactSVG
              src="/src/asset/service-icons/Complaint.svg"
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
              Internet Service Provider License
            </span>
          </div>
          <div className="flex flex-col">
            <div>
              <TextElement className="w-5/5 mb-2 text-xs font-semibold md:w-[330px]">
                Application requesting for Internet Service Provider License
              </TextElement>
              <div className="mb-3 h-[90px] w-[300px] rounded-2xl bg-primary p-4 text-xs text-white md:h-[100px]">
                <a href="/public/service/for-operator/InternetService/The Application for License on Operation and Provision of Internet Service.pdf">
                  <span>
                    The Application for License on Operation and Provision of
                    Internet Service
                  </span>
                  <div className="flex items-center justify-around">
                    <img
                      src="/src/asset/network-Pattern.png"
                      alt="Network Pattern"
                      className="md:mr-30 mr-40 h-8 rounded-lg md:mt-1 md:h-[38px]"
                      loading="lazy"
                    />
                    <div className="lg:mt-2">
                      <DownloadIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InternetServicePopup;
