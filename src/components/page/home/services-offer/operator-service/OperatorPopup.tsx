import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DownloadIcon } from "@/components/footer/SocialMediaLinks";

const OperatorPopup = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex h-[400px] w-[300px] flex-col items-center justify-center rounded-2xl border">
          <img
            src="/src/asset/service/ISP.png"
            alt="hello"
            className="mb-2 size-14 rounded-lg"
            loading="lazy"
          />
          <span>Internet Service Provider License</span>
        </div>
      </DialogTrigger>
      <DialogContent className="h-[500px] w-[900px]">
        <div className="flex items-center justify-around">
          <div className="flex size-[200px] flex-col items-center justify-center text-center">
            <img
              src="/src/asset/service/ISP-Blue.png"
              alt="hello"
              className="mb-2 size-14 rounded-lg"
              loading="lazy"
            />
            <span>Internet Service Provider License</span>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="h-[130px] w-[300px] rounded-2xl bg-primary p-4 text-sm text-white">
              <span>License to use mobile number or telecom numbers</span>
              <div className="flex">
                <img
                  src="/src/asset/Network Pattern.png"
                  alt="hello"
                  className="mr-24 mt-1 h-16 rounded-lg"
                  loading="lazy"
                />
                <div className="mt-8">
                  <DownloadIcon />
                </div>
              </div>
            </div>
            <div className="h-[130px] w-[300px] rounded-2xl bg-primary p-4 text-sm text-white">
              <span>License to use mobile number or telecom numbers</span>
              <div className="flex">
                <img
                  src="/src/asset/Network Pattern.png"
                  alt="hello"
                  className="mr-24 mt-1 h-16 rounded-lg"
                  loading="lazy"
                />
                <div className="mt-8">
                  <DownloadIcon />
                </div>
              </div>
            </div>
            <div className="h-[130px] w-[300px] rounded-2xl bg-primary p-4 text-sm text-white">
              <span>License to use mobile number or telecom numbers</span>
              <div className="flex">
                <img
                  src="/src/asset/Network Pattern.png"
                  alt="hello"
                  className="mr-24 mt-1 h-16 rounded-lg"
                  loading="lazy"
                />
                <div className="mt-8">
                  <DownloadIcon />
                </div>
              </div>
            </div>
            <div className="h-[130px] w-[300px] rounded-2xl bg-primary p-4 text-sm text-white">
              <span>License to use mobile number or telecom numbers</span>
              <div className="flex">
                <img
                  src="/src/asset/Network Pattern.png"
                  alt="hello"
                  className="mr-24 mt-1 h-16 rounded-lg"
                  loading="lazy"
                />
                <div className="mt-8">
                  <DownloadIcon />
                </div>
              </div>
            </div>
            <div className="h-[130px] w-[300px] rounded-2xl bg-primary p-4 text-sm text-white">
              <span>License to use mobile number or telecom numbers</span>
              <div className="flex">
                <img
                  src="/src/asset/Network Pattern.png"
                  alt="hello"
                  className="mr-24 mt-1 h-16 rounded-lg"
                  loading="lazy"
                />
                <div className="mt-8">
                  <DownloadIcon />
                </div>
              </div>
            </div>
            <div className="h-[130px] w-[300px] rounded-2xl bg-primary p-4 text-sm text-white">
              <span>License to use mobile number or telecom numbers</span>
              <div className="flex">
                <img
                  src="/src/asset/Network Pattern.png"
                  alt="hello"
                  className="mr-24 mt-1 h-16 rounded-lg"
                  loading="lazy"
                />
                <div className="mt-8">
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
