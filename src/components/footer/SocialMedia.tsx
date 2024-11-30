import { useEffect, useState } from "react";

import { FacebookIcon, TelegramIcon, YouTubeIcon } from "./SocialMediaLinks";
import { getLangFromUrl, useTranslations } from "@/i18n/utils";

export default function SocialMedia() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.pathname);
  }, []);
  const t = useTranslations(getLangFromUrl(url));

  const socialMediaLinks = [
    {
      Icon: FacebookIcon,
      label: "Facebook",
      link: "https://www.facebook.com/www.trc.gov.kh",
    },
    { Icon: TelegramIcon, label: "Telegram", link: "/" },
    {
      Icon: YouTubeIcon,
      label: "Youtube",
      link: "https://www.youtube.com/channel/UCEOuHij9GX1tozXg4UEr0Dg",
    },
  ];

  return (
    <nav aria-label="Social Media Links" className="lg:col-span-1">
      <h2 className="mb-4 text-lg font-semibold">{t("footer.followUs")}</h2>
      <ul className="flex gap-6">
        {socialMediaLinks.map(({ Icon, label, link }) => (
          <li key={label}>
            <a
              href={link}
              aria-label={label}
              className="transition-colors hover:text-secondary"
            >
              <Icon className="size-6" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
