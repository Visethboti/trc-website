import React from "react";

import PublicService from "./PublicService";
import Domain from "@/asset/service-icons/Domain.svg";
import InternetCafe from "@/asset/service-icons/Internet Cafe.svg";
import TelecomShop from "@/asset/service-icons/Telecom Shop.svg";

const ExternalLinks = [
  {
    label: "Domain Name (.kh)",
    image: Domain,
  },
  {
    label: "Internet Cafe Permit",
    image: InternetCafe,
  },
  {
    label: "Telecom Equipment Shop",
    image: TelecomShop,
  },
];

const PublicServiceList: React.FC = () => {
  return (
    <nav className="flex justify-center">
      <ul className="grid grid-cols-3 gap-5 xl:gap-10">
        {ExternalLinks.map((item) => (
          <li key={item.label}>
            <PublicService label={item.label} image={item.image} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PublicServiceList;
