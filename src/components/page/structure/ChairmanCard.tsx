import React, { useState } from "react";

import TextElement from "@/components/TextElement";

import networkPattern from "@/asset/network-pattern.png";
import { Fade, Slide } from "react-awesome-reveal";

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

  const cardContent = "overflow-hidden transition-all duration-1000 ease-out";
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
      className="relative flex cursor-pointer flex-col items-center justify-center gap-0 overflow-hidden p-20 transition-all duration-500 ease-out lg:flex-row lg:gap-16"
    >
      <Slide
        direction="left"
        duration={1000}
        className={`${isVisible ? "hidden" : "flex"}`}
        triggerOnce
      >
        <figure className="flex-col gap-5">
          <TextElement
            variant="subheading"
            className="py-5 text-center text-secondary"
          >
            Chairman
          </TextElement>
          <div className="relative size-60 overflow-hidden rounded-full drop-shadow-lg dark:border-gray-300">
            <img
              src={image.src}
              alt={`${title}${name}`}
              className="size-full object-cover"
            />
          </div>
          <figcaption className="py-4 text-center font-bold text-white md:text-xl">
            {title}
            <span className="ml-3">{name}</span>
          </figcaption>
        </figure>
      </Slide>

      {isVisible && (
        <div className="relative flex cursor-pointer flex-col items-center justify-center gap-0 overflow-hidden transition-all duration-500 ease-out lg:flex-row lg:gap-16">
          <Slide duration={1000} direction="right" triggerOnce>
            <figure className="flex-col gap-5">
              <TextElement
                variant="subheading"
                className="py-5 text-center text-secondary"
              >
                Chairman
              </TextElement>
              <div className="relative size-60 overflow-hidden rounded-full drop-shadow-lg dark:border-gray-300">
                <img
                  src={image.src}
                  alt={`${title}${name}`}
                  className="size-full object-cover"
                />
              </div>
              <figcaption className="py-4 text-center font-bold text-white md:text-xl">
                {title}
                <span className="ml-3">{name}</span>
              </figcaption>
            </figure>
          </Slide>
          <Fade triggerOnce className={`animate__fadeIn ${cardContent}`}>
            {children}
          </Fade>
        </div>
      )}
      <figure
        className={`${networkPatternStyle} ${isVisible ? networkPatternStyleExpanded : "left-0"}`}
      >
        <img
          src={networkPattern.src}
          alt="Gradient Network"
          loading="eager"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="-scale-x-100 opacity-50"
        />
      </figure>
    </div>
  );
};
export default ChairmanCard;
