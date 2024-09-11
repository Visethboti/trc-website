import { ListItem } from "./list-item";

export const LawAndRegulartion = () => {
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
    <>
      {keys.map((key) => (
        <ListItem key={key} title={key} href={key} />
      ))}
    </>
  );
};

export const MediaItem = () => {
  const keys = ["News Releases", "Activities", "Event"];

  return (
    <>
      {keys.map((key) => (
        <ListItem key={key} title={key} href={key} />
      ))}
    </>
  );
};

export const ResourceItem = () => {
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
        <ListItem key={key} title={key} href={key} />
      ))}
    </>
  );
};

export const AboutItem = () => {
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
        <ListItem key={key} title={key} href={key} />
      ))}
    </>
  );
};