import React from "react";

import PublicService from "./PublicService";
import Domain from "@/asset/service/Domain.png";
import InternetCafe from "@/asset/service/Internet-Cafe.png";
import TelecomShop from "@/asset/service/Telecom-Shop.png";

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
    <nav>
      <ul className="flex w-full list-none flex-row items-center justify-center gap-4 space-x-8 md:grid-cols-2 lg:grid-cols-4">
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
