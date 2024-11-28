import TextElement from "@/components/TextElement";

interface Props {
  image: ImageMetadata;
}

const Domain: React.FC<Props> = ({ image }) => {
  return (
    <a
      href="https://domain.gov.kh/"
      className="flex max-h-[620px] min-h-[200px] flex-col items-center justify-center space-y-4 rounded-2xl border md:h-[300px] xl:h-[450px] 2xl:h-[500px]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={image.src}
        alt="Domain KH"
        className="mb-2 size-[58px] rounded-lg md:size-[76px] lg:size-[100px]"
        loading="lazy"
      />
      <TextElement className="w-5/5 text-center text-xs">Domain.KH</TextElement>
    </a>
  );
};

export default Domain;
