import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DownloadIcon } from "@/components/footer/SocialMediaLinks";
import TextElement from "@/components/TextElement";

import { ReactSVG } from "react-svg";

const QualifiedAgentPopup = () => {
  return (
    <Dialog>
      <DialogTrigger style={{ width: "100%" }}>
        <div className="flex h-[85px] min-w-[140px] flex-row items-center justify-center rounded-2xl border lg:h-[110px] xl:h-[140px]">
          <img
            src="/src/asset/service-icons/Qualified Agent.svg"
            alt="Qualified"
            className="mb-2 ml-2 size-[30px] rounded-lg"
            loading="lazy"
          />
          <TextElement className="w-3/4 text-center text-xs">
            Qualified Agent Certificate
          </TextElement>
        </div>
      </DialogTrigger>
      <DialogContent className="h-auto w-[350px] md:w-[700px] lg:w-[720px]">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-around">
          <div className="mb-6 flex flex-col items-center justify-center text-center md:mb-0 md:w-auto">
            <ReactSVG
              src="/src/asset/service-icons/Qualified Agent.svg"
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
              Qualified Agent Certificate
            </span>
          </div>
          <div className="grid grid-cols-1">
            <div>
              <TextElement className="w-5/5 mb-2 text-xs font-semibold md:w-[300px]">
                Application requesting for Qualified Agent Certificate License
              </TextElement>
              <div className="mb-3 h-[100px] w-[300px] rounded-2xl bg-primary p-4 text-xs text-white">
                <a href="/public/service/for-operator/QualifiedAgent/Application for Qualified Agent Certificate.pdf">
                  <span>Application for Qualified Agent Certificate</span>
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
              <a href="/public/service/for-operator/QualifiedAgent/Application for Renewal of Qualified Agent Certificate.pdf">
                <span>
                  Application for Renewal of Qualified Agent Certificate
                </span>
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
            <div className="h-[100px] w-[300px] rounded-2xl bg-primary p-4 text-xs text-white">
              <a href="/public/service/for-operator/QualifiedAgent/Guideline to Qualified Agent Certificate.pdf">
                <span>Guideline to Qualified Agent Certificatet</span>
                <div className="flex items-center justify-between">
                  <img
                    src="/src/asset/network-Pattern.png"
                    alt="Network Pattern"
                    className="md:mr-30 mr-4 mt-6 h-[39px] rounded-lg"
                    loading="lazy"
                  />
                  <div className="mt-6">
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

export default QualifiedAgentPopup;
