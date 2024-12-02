import Domain from "./Domain";
import InternetCafePopup from "./InternetCafePopup";
import TelecomShopPopup from "./TelecomShopPopup";
import networkImage from "/src/asset/network-pattern.png";
import domainImage from "src/asset/service-icons/Domain.svg";
import internetCafeImage from "src/asset/service-icons/Internet Cafe.svg";
import telecomShopImage from "src/asset/service-icons/Telecom Shop.svg";

const PublicService = () => {
  return (
    <div className="grid h-full grid-cols-3 gap-5 xl:gap-10">
      <Domain image={domainImage} />
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
