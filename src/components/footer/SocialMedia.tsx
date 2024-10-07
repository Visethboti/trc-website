import {
  FacebookIcon,
  TelegramIcon,
  YouTubeIcon,
} from "./SocialMediaLinks";

export default function SocialMedia() {
  const socialMediaLinks = [
    { Icon: FacebookIcon, label: "Facebook", link: "/" },
    { Icon: TelegramIcon, label: "Telegram", link: "/" },
    { Icon: YouTubeIcon, label: "Youtube", link: "/" },
  ];

  return (
    <nav aria-label="Social Media Links">
      <h2 className="mb-4 text-lg font-semibold">Follow us</h2>
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
