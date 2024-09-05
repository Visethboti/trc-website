import { NavItem } from "./nav-item";

export const LawAndRegulartionMobile = () => {
  const keys = [
    "Laws",
    "Royal Decrees",
    "Sub Decrees",
    "Circulstiond",
    "Prakas",
    "Decision",
    "Guidelines",
  ];

  return (
    <ul>
      {keys.map((key) => (
        <NavItem key={key}  href={key} className="bg-transparent">
          {key}
        </NavItem>
      ))}
    </ul>
  );
};

export const MediaMobile = () => {
  const keys = ["News Releases", "Activities", "Event"];

  return (
    <>
      {keys.map((key) => (
        <NavItem key={key} href={key} className="bg-transparent">
          {key}
        </NavItem>
      ))}
    </>
  );
};

export const ResourceMobile = () => {
  const keys = [
    "Publications",
    "Telecom Statistics",
    "Active Operators",
    "Mobile Prefixes",
    "Common Codes",
    "Emergency Numbers",
    "Qualified Import Agents",
    "Tower Map",
  ];

  return (
    <>
      {keys.map((key) => (
        <NavItem key={key} href={key} className="bg-transparent">
          {key}
        </NavItem>
      ))}
    </>
  );
};

export const AboutMobile = () => {
  const keys = [
    "Chairam's Keynote",
    "Vision & Mission",
    "About TRC",
    "TRC Leaders",
    "TRC Structure",
  ];

  return (
    <>
      {keys.map((key) => (
        <NavItem key={key} href={key} className="bg-transparent">
          {key}
        </NavItem>
      ))}
    </>
  );
};
