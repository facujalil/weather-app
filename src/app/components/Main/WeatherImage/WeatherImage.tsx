import React from "react";
import Image from "next/image";
import lightCloudImg from "/public/img/light-cloud.png";
import heavyRainImg from "/public/img/heavy-rain.png";
import showerImg from "/public/img/shower.png";
import thunderstormImg from "/public/img/thunderstorm.png";
import snowImg from "/public/img/snow.png";
import heavyCloudImg from "/public/img/heavy-cloud.png";
import clearImg from "/public/img/clear.png";

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
          ? lightCloudImg
          : weatherIcon === "09"
          ? heavyRainImg
          : weatherIcon === "10"
          ? showerImg
          : weatherIcon === "11"
          ? thunderstormImg
          : weatherIcon === "13"
          ? snowImg
          : weatherIcon === "50"
          ? heavyCloudImg
          : clearImg
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
