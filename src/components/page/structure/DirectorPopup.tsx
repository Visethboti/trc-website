import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TextElement from "@/components/TextElement";

import networkPattern from "@/asset/network-pattern.png";
import type { ImageMetadata } from "astro";

interface Props {
  title: string;
  image: ImageMetadata;
  name: string;
  organization?: string;
  children: React.ReactNode;
}

const DirectorPopup = ({
  title,
  image,
  name,
  organization,
  children,
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger className="grid place-items-center gap-y-5 py-10">
        <div className="relative size-52 overflow-hidden rounded-full drop-shadow-lg dark:border-gray-300">
          <img
            src={image.src}
            alt={`${title}${name}`}
            className="size-full object-cover"
          />
        </div>
        <figcaption className="text-center font-bold md:text-xl">
          {title}
          <span className="ml-3">{name}</span>
          <TextElement className="font-medium">{organization}</TextElement>
        </figcaption>
      </DialogTrigger>

      <DialogContent className="overflow-hidden rounded-xl border-none bg-primary text-white lg:rounded-3xl lg:p-10">
        <DialogHeader className="relative text-left">
          <DialogTitle className="flex items-end justify-start gap-4 md:gap-8">
            <img
              src={image.src}
              alt={`${title}${name}`}
              className="size-full max-w-28 rounded-full object-cover lg:max-w-40"
            />
            <div className="grow border-b border-solid border-secondary">
              <div className="mb-4 text-16 font-bold md:text-lg">
                {title}
                <span className="ml-3">{name}</span>
              </div>
              {organization && (
                <div className="mb-4 text-2xs font-medium lg:text-16">
                  {organization}
                </div>
              )}
            </div>
            <div className="absolute right-[-24px] top-[-24px] w-1/3 min-w-40 lg:right-[-40px] lg:top-[-40px]">
              <img
                src={networkPattern.src}
                alt="gradient network"
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="rotate-180 opacity-40"
              />
            </div>
          </DialogTitle>
          <DialogDescription>
            <div>{children}</div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DirectorPopup;
