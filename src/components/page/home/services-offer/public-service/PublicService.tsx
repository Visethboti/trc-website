import React from "react";

import type { ImageMetadata } from "astro";

interface Props {
  label: string;
  image: ImageMetadata;
}

const PublicService: React.FC<Props> = ({ label, image }) => {
  return (
    <div className="col flex w-[300px] flex-col items-center justify-center space-y-4 rounded-xl border py-36">
      <img
        src={image.src}
        alt={label}
        className="mb-2 size-20 rounded-lg"
        loading="lazy"
      />
      <span className="w-3/5 text-center lg:w-full">{label}</span>
    </div>
  );
};

export default PublicService;
