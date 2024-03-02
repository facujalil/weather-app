import React from "react";
import Image from "next/image";

interface Props {
  weatherImg: {
    main: string;
    icon: string;
  };
}

function WeatherImage({ weatherImg }: Props) {
  const weatherIcon = weatherImg.icon.slice(0, 2);
  return (
    <Image
      src={
        weatherIcon === "02" || weatherIcon === "03" || weatherIcon === "04"
          ? "/img/light-cloud.png"
          : weatherIcon === "09"
          ? "/img/heavy-rain.png"
          : weatherIcon === "10"
          ? "/img/shower.png"
          : weatherIcon === "11"
          ? "/img/thunderstorm.png"
          : weatherIcon === "13"
          ? "/img/snow.png"
          : weatherIcon === "50"
          ? "/img/heavy-cloud.png"
          : "/img/clear.png"
      }
      alt={weatherImg.main}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      priority
    />
  );
}

export default WeatherImage;
