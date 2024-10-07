import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

function WeatherImage({ src, alt }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
      priority
    />
  );
}

export default WeatherImage;
