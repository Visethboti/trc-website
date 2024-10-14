import CADTLogo from "@/asset/logo/CADT.png";
import CPLogo from "@/asset/logo/Cambodia-Post.png";
import MPTCLogo from "@/asset/logo/MPTC.png";
import TCLogo from "@/asset/logo/Telcom-Cambodia.png";

export default function UnitLinks() {
  const ExternalLinks = [
    {
      label: "Ministry of Post and Telecommunications",
      link: "https://mptc.gov.kh",
      image: MPTCLogo,
    },
    {
      label: "Telecome Cambodia",
      link: "http://tc.com.kh",
      image: TCLogo,
    },
    {
      label: "Cambodia Post",
      link: "https://cambodiapost.com.kh/",
      image: CPLogo,
    },
    {
      label: "Cambodia Academy of Deigial Technology",
      link: "https://www.cadt.edu.kh/",
      image: CADTLogo,
    },
  ];

  return (
    <nav>
      <ul className="grid list-none grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-4">
        {ExternalLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center hover:underline"
              aria-label={`${item.label} (opens in a new tab)`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={item.image.src}
                  alt={item.label}
                  width="100"
                  height="100"
                />
                <span className="ml-2 mt-5 text-center underline hover:text-primary">
                  {item.label}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
