import { useRef } from "react";

import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TextElement from "@/components/TextElement";

import type { SupportedLanguage } from "@/i18n/ui";
import type { CollectionEntry } from "astro:content";
import Autoplay from "embla-carousel-autoplay";

interface ImageCarouselProps {
  carouselDatas: CollectionEntry<"articles">[];
  lang: SupportedLanguage;
}

export default function ImageCarousel({
  carouselDatas,
  lang,
}: ImageCarouselProps) {
  const plugin = useRef(
    Autoplay({
      delay: 4000,
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
        {carouselDatas?.map((item) => (
          <CarouselItem
            key={item.data.title}
            className="relative h-[350px] w-full md:h-[450px]"
          >
            <img
              src={item.data.image.src}
              alt={item.data.title}
              sizes="100vw"
              className="absolute inset-0 size-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 flex items-center justify-end bg-black/70">
              <CardContent className="container flex flex-col items-end justify-end space-y-4 p-4 text-center text-primary-foreground sm:p-6 md:p-8">
                <div className="flex max-w-96 flex-col items-end justify-end">
                  <div className="mb-4 rounded-3xl bg-secondary px-7 py-2 text-white">
                    Activity
                  </div>
                  <TextElement
                    variant="title"
                    className="line-clamp-4 whitespace-pre-line text-pretty text-right text-xl md:text-4xl"
                  >
                    {item.data.title}
                  </TextElement>
                </div>
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
