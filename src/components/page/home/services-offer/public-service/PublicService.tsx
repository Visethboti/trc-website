import React from "react";

import type { ImageMetadata } from "astro";

interface Props {
  label: string;
  image: ImageMetadata;
}

const PublicService: React.FC<Props> = ({ label, image }) => {
  return (
    <div className="col flex max-h-[620px] min-h-[200px] flex-col items-center justify-center space-y-4 rounded-xl border md:h-[300px] md:w-[196px] lg:w-[244px] xl:h-[450px] xl:w-[369px] 2xl:h-[500px] 2xl:w-[400px]">
      <img
        src={image.src}
        alt={label}
        className="mb-2 size-[58px] rounded-lg md:size-[76px] lg:size-[100px]"
        loading="lazy"
      />
      <span className="w-3/5 text-center text-xs lg:w-full">{label}</span>
    </div>
  );
};

export default PublicService;
