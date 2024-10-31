import React, { useState } from "react";

import TextElement from "@/components/TextElement";

import networkPattern from "@/asset/network-pattern.png";
import { Fade } from "react-awesome-reveal";

interface ChairmanCardProps {
  title: string;
  image: ImageMetadata;
  name: string;
  children: React.ReactNode;
}

const ChairmanCard = ({ children, title, name, image }: ChairmanCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const card =
    "relative flex flex-col lg:flex-row cursor-pointer items-center justify-center gap-0 p-20 lg:gap-16 overflow-hidden transition-all duration-500 ease-out";
  const cardImage = "transition-all duration-500 ease-out";
  const cardContent = "overflow-hidden transition-all duration-500 ease-out";
  const networkPatternStyle = "absolute bottom-0 w-2/5";
  const networkPatternStyleExpanded = "right-[87%]";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => handleClick()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
      className={`overflow-hidden ${card} `}
    >
      <div>
        <figure className={`${cardImage} flex-col gap-5`}>
          <TextElement
            variant="subheading"
            className="py-5 text-center text-yellow-500"
            onClick={() => console.log("hello hgfghhgf")}
          >
            Chairman
          </TextElement>
          <div className="relative size-60 overflow-hidden rounded-full drop-shadow-lg dark:border-gray-300">
            <img src={image.src} alt="" className="size-full object-cover" />
          </div>
          <figcaption className="py-4 text-center font-bold text-white md:text-xl">
            {title}
            <span className="ml-3">{name}</span>
          </figcaption>
        </figure>
      </div>

      {isVisible && (
        <Fade className={`animate__fadeIn ${cardContent}`}>{children}</Fade>
      )}
      <figure
        className={`${networkPatternStyle} ${isVisible ? networkPatternStyleExpanded : "left-0"}`}
      >
        <img
          src={networkPattern.src}
          alt={title}
          loading="eager"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </figure>
    </div>
  );
};
export default ChairmanCard;
