import React from "react";

import type { ImageMetadata } from "astro";

interface Props {
  label: string;
  image: ImageMetadata;
}

const PublicService: React.FC<Props> = ({ label, image }) => {
  return (
    <div className="col flex max-h-[620px] min-h-[200px] flex-col items-center justify-center space-y-4 rounded-xl border md:h-[300px] lg:w-[200px] xl:h-[400px] xl:w-[300px]">
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
