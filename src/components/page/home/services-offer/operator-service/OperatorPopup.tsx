import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DownloadIcon } from "@/components/footer/SocialMediaLinks";
import TextElement from "@/components/TextElement";

import { ReactSVG } from "react-svg";

const OperatorPopup = () => {
  return (
    <Dialog>
      <DialogTrigger style={{ width: "100%" }}>
        <div className="w-100 flex h-[203px] flex-col items-center justify-center rounded-2xl border md:h-[194px] lg:h-[240px] xl:h-[300px]">
          <img
            src="/src/asset/service-icons/ISP.svg"
            alt="ISP"
            className="mb-2 size-14 rounded-lg"
            loading="lazy"
          />
          <TextElement className="w-full text-center text-xs">
            Internet Service Provider License
          </TextElement>
        </div>
      </DialogTrigger>
      <DialogContent className="h-auto w-screen max-w-[1000px] p-4 md:w-[90vw] md:p-8">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-around">
          <div className="mb-6 flex flex-col items-center justify-center text-center md:mb-0 md:w-auto">
            <ReactSVG
              src="/src/asset/service-icons/ISP.svg"
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
          <div className="grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-2">
            <div>
              <TextElement className="mb-2 text-xs font-semibold">
                Application requesting for ISP License
              </TextElement>
              <div className="h-[90px] w-[300px] rounded-2xl bg-primary p-4 text-xs text-white md:h-[100px] md:w-[350px] lg:w-[300px]">
                <span>License to use mobile number or telecom numbers</span>
                <div className="flex items-center justify-around">
                  <img
                    src="/src/asset/network-Pattern.png"
                    alt="Network Pattern"
                    className="md:mr-30 mr-40 h-8 rounded-lg md:mt-4 md:h-[48px] lg:mr-40 lg:mt-1 lg:h-[38px]"
                    loading="lazy"
                  />
                  <div className="md:mt-5 lg:mt-2">
                    <DownloadIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[90px] w-[300px] rounded-2xl bg-primary p-4 text-xs text-white md:h-[100px] md:w-[350px] lg:mt-7 lg:w-[300px]">
              <span>License to use mobile number or telecom numbers</span>
              <div className="flex items-center justify-around">
                <img
                  src="/src/asset/network-Pattern.png"
                  alt="Network Pattern"
                  className="md:mr-30 mr-40 h-8 rounded-lg md:mt-4 md:h-[48px] lg:mr-40 lg:mt-1 lg:h-[38px]"
                  loading="lazy"
                />
                <div className="md:mt-5 lg:mt-2">
                  <DownloadIcon />
                </div>
              </div>
            </div>
            <div>
              <TextElement className="mb-2 text-xs font-semibold">
                Application requesting for ISP License
              </TextElement>
              <div className="h-[90px] w-[300px] rounded-2xl bg-primary p-4 text-xs text-white md:h-[100px] md:w-[350px] lg:w-[300px]">
                <span>License to use mobile number or telecom numbers</span>
                <div className="flex items-center justify-around">
                  <img
                    src="/src/asset/network-Pattern.png"
                    alt="Network Pattern"
                    className="md:mr-30 mr-40 h-8 rounded-lg md:mt-4 md:h-[48px] lg:mr-40 lg:mt-1 lg:h-[38px]"
                    loading="lazy"
                  />
                  <div className="md:mt-5 lg:mt-2">
                    <DownloadIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[90px] w-[300px] rounded-2xl bg-primary p-4 text-xs text-white md:h-[100px] md:w-[350px] lg:mt-7 lg:w-[300px]">
              <span>License to use mobile number or telecom numbers</span>
              <div className="flex items-center justify-around">
                <img
                  src="/src/asset/network-Pattern.png"
                  alt="Network Pattern"
                  className="md:mr-30 mr-40 h-8 rounded-lg md:mt-4 md:h-[48px] lg:mr-40 lg:mt-1 lg:h-[38px]"
                  loading="lazy"
                />
                <div className="md:mt-5 lg:mt-2">
                  <DownloadIcon />
                </div>
              </div>
            </div>
            <div>
              <TextElement className="mb-2 text-xs font-semibold">
                Application requesting for ISP License
              </TextElement>
              <div className="h-[90px] w-[300px] rounded-2xl bg-primary p-4 text-xs text-white md:h-[100px] md:w-[350px] lg:w-[300px]">
                <span>License to use mobile number or telecom numbers</span>
                <div className="flex items-center justify-around">
                  <img
                    src="/src/asset/network-Pattern.png"
                    alt="Network Pattern"
                    className="md:mr-30 mr-40 h-8 rounded-lg md:mt-4 md:h-[48px] lg:mr-40 lg:mt-1 lg:h-[38px]"
                    loading="lazy"
                  />
                  <div className="md:mt-5 lg:mt-2">
                    <DownloadIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[90px] w-[300px] rounded-2xl bg-primary p-4 text-xs text-white md:h-[100px] md:w-[350px] lg:mt-7 lg:w-[300px]">
              <span>License to use mobile number or telecom numbers</span>
              <div className="flex items-center justify-around">
                <img
                  src="/src/asset/network-Pattern.png"
                  alt="Network Pattern"
                  className="md:mr-30 mr-40 h-8 rounded-lg md:mt-4 md:h-[48px] lg:mr-40 lg:mt-1 lg:h-[38px]"
                  loading="lazy"
                />
                <div className="md:mt-5 lg:mt-2">
                  <DownloadIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OperatorPopup;
