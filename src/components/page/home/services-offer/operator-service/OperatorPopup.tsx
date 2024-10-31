import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DownloadIcon } from "@/components/footer/SocialMediaLinks";

const OperatorPopup = () => {
  return (
    <Dialog>
      <DialogTrigger style={{ width: "100%" }}>
        <div className="w-100 flex h-[203px] flex-col items-center justify-center rounded-2xl border md:h-[194px] lg:h-[240px] xl:h-[300px]">
          <img
            src="/src/asset/service/ISP.png"
            alt="ISP"
            className="mb-2 size-14 rounded-lg"
            loading="lazy"
          />
          <span className="w-4/4 text-center text-xs">
            Internet Service Provider License
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="h-auto w-screen max-w-[1000px] p-4 md:w-[90vw] md:p-8">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-around">
          <div className="mb-6 flex flex-col items-center justify-center text-center md:mb-0 md:w-auto">
            <img
              src="/src/asset/service/ISP-Blue.png"
              alt="ISP"
              className="mb-2 size-10 rounded-lg"
              loading="lazy"
            />
            <span className="w-4/4 text-center text-xs">
              Internet Service Provider License
            </span>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-[90px] w-[300px] rounded-2xl bg-primary p-4 text-xs text-white md:h-[100px] md:w-[350px] lg:w-[300px]"
              >
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
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OperatorPopup;
