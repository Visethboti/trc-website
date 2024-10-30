import { useRef } from "react";

import { getContentUrl } from "@/lib/route";

import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TextElement from "@/components/TextElement";

import type { SupportedLanguage } from "@/i18n/ui";
import type { CollectionEntry } from "astro:content";
import Autoplay from "embla-carousel-autoplay";

interface ImageCarouselProps {
  carouselDatas: CollectionEntry<"activities">[];
  lang: SupportedLanguage;
}

export default function ImageCarousel({
  carouselDatas,
  lang,
}: ImageCarouselProps) {
  const plugin = useRef(
    Autoplay({
      delay: 5000,
      playOnInit: true,
      stopOnInteraction: false,
    }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="w-full"
    >
      <CarouselContent>
        {carouselDatas?.map((item, index) => (
          <CarouselItem
            key={item.data.title}
            className="relative h-[500px] w-full"
          >
            <a href={getContentUrl(item, lang)}>
              <img
                src={item.data.image.src}
                alt={item.data.title}
                sizes="100vw"
                className="absolute inset-0 size-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 flex w-full items-center justify-center bg-black/70 lg:justify-end lg:bg-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/50">
                <section
                  aria-labelledby="about-dsc"
                  className="w-full px-24 max-lg:p-10 max-md:p-5 max-sm:px-0 max-sm:py-5"
                >
                  <div className="container">
                    <CardContent className="flex flex-col items-center justify-center space-y-4 p-0 text-center text-primary-foreground lg:items-end lg:justify-end">
                      <div className="flex w-full flex-col items-center justify-center lg:w-1/2 lg:items-end lg:justify-end">
                        <Badge
                          variant="secondary"
                          className="mb-4 rounded-3xl bg-secondary px-7 py-2 font-normal text-white hover:bg-secondary"
                        >
                          Activity
                        </Badge>
                        <TextElement
                          variant="medium"
                          className="line-clamp-4 whitespace-pre-line text-pretty text-center font-normal leading-10 lg:text-right"
                        >
                          {item.data.title}
                        </TextElement>
                      </div>
                    </CardContent>
                    <div className="mt-16 flex items-center justify-center gap-5 text-secondary lg:items-center lg:justify-end">
                      {carouselDatas?.map((_, i) => (
                        <div key={i}>
                          {index === i ? (
                            <div className="flex items-center gap-5">
                              <hr className="h-2 w-20 rounded-2xl border-none bg-secondary" />
                              <div className="font-semibold">{index + 1}</div>
                            </div>
                          ) : (
                            <div className="size-2 rounded-full border-2 border-solid border-secondary"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant="link"
        size="icon"
        className="left-14 hidden lg:flex"
      />
      <CarouselNext
        variant="link"
        size="icon"
        className="right-14 hidden lg:flex"
      />
    </Carousel>
  );
}
