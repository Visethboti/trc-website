import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DownloadIcon } from "@/components/footer/SocialMediaLinks";
import TextElement from "@/components/TextElement";

import { ReactSVG } from "react-svg";

const FrequencyInterferencePopup = () => {
  return (
    <Dialog>
      <DialogTrigger style={{ width: "100%" }}>
        <div className="w-100 flex h-[203px] flex-col items-center justify-center rounded-2xl border md:h-[85px] md:w-[306px] md:flex-row lg:h-[110px] lg:w-[378px] xl:h-[140px] xl:w-[586px] 2xl:w-[680px]">
          <img
            src="/src/asset/service-icons/Complaint.svg"
            alt="Complaint"
            className="mb-2 ml-2 size-14 rounded-lg"
            loading="lazy"
          />
          <TextElement className="w-3/5 text-center text-xs">
            Frequency Interference Complaint
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
              Frequency Interference Complaint
            </span>
          </div>
          <div className="flex flex-col">
            <div>
              <TextElement className="w-5/5 mb-2 text-xs font-semibold md:w-[330px]">
                Application requesting for Fiber Cable Construction License
              </TextElement>
              <div className="mb-3 h-[100px] w-[300px] rounded-2xl bg-primary p-4 text-xs text-white">
                <a href="/public/service/for-operator/FrequencyInterference/Complaint Form.pdf">
                  <span>Complaint</span>
                  <div className="flex items-center justify-between">
                    <img
                      src="/src/asset/network-Pattern.png"
                      alt="Network Pattern"
                      className="md:mr-30 mr-40 mt-6 h-[39px] rounded-lg"
                      loading="lazy"
                    />
                    <div className="mt-6">
                      <DownloadIcon />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="mb-3 h-[100px] w-[300px] rounded-2xl bg-primary p-4 text-xs text-white">
              <a href="/public/service/for-operator/FrequencyInterference/Guideline for Frequency Interference Complaint.pdf">
                <span>Guideline for Frequency Interference Complaint</span>
                <div className="flex items-center justify-between">
                  <img
                    src="/src/asset/network-Pattern.png"
                    alt="Network Pattern"
                    className="md:mr-30 mr-40 mt-1 h-[38px] rounded-lg"
                    loading="lazy"
                  />
                  <div className="mt-2">
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

export default FrequencyInterferencePopup;
