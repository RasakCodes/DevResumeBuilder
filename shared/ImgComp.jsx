import Image from "next/image";

export const ImgComp = ({ src, alt, className, width, height }) => {
  return (
    <Image
      src={src}
      width={Number(width) || 400}
      height={Number(height) || 400}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};
