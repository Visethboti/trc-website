import TextElement from "@/components/TextElement";

import InternetCafePopup from "./InternetCafePopup";
import TelecomShopPopup from "./TelecomShopPopup";
import networkImage from "/src/asset/network-pattern.png";
import internetCafeImage from "src/asset/service-icons/Internet Cafe.svg";
import telecomShopImage from "src/asset/service-icons/Telecom Shop.svg";

const PublicService = () => {
  return (
    <div className="grid grid-cols-3 gap-5 xl:gap-10">
      <a
        href="https://domain.gov.kh/"
        className="flex max-h-[620px] min-h-[200px] flex-col items-center justify-center space-y-4 rounded-xl border md:h-[300px] md:w-[196px] lg:w-[244px] xl:h-[450px] xl:w-[369px] 2xl:h-[500px] 2xl:w-[400px]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/src/asset/service-icons/Domain.svg"
          alt="Hello"
          className="mb-2 size-[58px] rounded-lg md:size-[76px] lg:size-[100px]"
          loading="lazy"
        />
        <TextElement className="w-5/5 text-center text-xs">
          Domain.KH
        </TextElement>
      </a>
      <InternetCafePopup
        image={internetCafeImage}
        networkPattern={networkImage}
      />
      <TelecomShopPopup
        image={telecomShopImage}
        networkPattern={networkImage}
      />
    </div>
  );
};

export default PublicService;
