import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DownloadIcon } from "@/components/footer/SocialMediaLinks";
import TextElement from "@/components/TextElement";

import { ReactSVG } from "react-svg";

const FiberCablePopup = () => {
  return (
    <Dialog>
      <DialogTrigger style={{ width: "100%" }}>
        <div className="flex h-[85px] min-w-[140px] flex-row items-center justify-center rounded-2xl border md:h-[91px] lg:h-[112px] xl:h-[140px]">
          <img
            src="/src/asset/service-icons/Fiber Cable.svg"
            alt="Tower Construction"
            className="mb-2 size-[30px] rounded-lg"
            loading="lazy"
          />
          <TextElement className="w-3/4 text-center text-xs">
            Fiber Cable Construction Permit
          </TextElement>
        </div>
      </DialogTrigger>
      <DialogContent className="h-auto w-[350px] md:w-[700px]">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-around">
          <div className="mb-6 flex flex-col items-center justify-center text-center md:mb-0 md:w-auto">
            <ReactSVG
              src="/src/asset/service-icons/Fiber Cable.svg"
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
              Fiber Cable Construction Permit
            </span>
          </div>
          <div className="flex flex-col">
            <div>
              <TextElement className="w-5/5 mb-2 text-xs font-semibold md:w-[330px]">
                Application requesting for Fiber Cable Construction License
              </TextElement>
              <div className="mb-3 h-[90px] w-[310px] rounded-2xl bg-primary p-4 text-xs text-white md:h-[100px]">
                <a href="/public/service/for-operator/FiberCable/Application Form for Fiber Cable Construction.docx">
                  <span>Application Form for Fiber Cable Construction</span>
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
            <div className="h-[90px] w-[310px] rounded-2xl bg-primary p-4 text-xs text-white md:h-[100px]">
              <a href="/public/service/for-operator/FiberCable/Application Form for Fiber Cable Maintenance.docx">
                <span>Application Form for Fiber Cable Maintenance</span>
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
      </DialogContent>
    </Dialog>
  );
};

export default FiberCablePopup;
