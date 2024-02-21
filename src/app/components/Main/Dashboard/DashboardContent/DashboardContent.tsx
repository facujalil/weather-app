import React from "react";
import style from "./DashboardContent.module.css";
import { Location, Weather } from "@/app/types";
import Image from "next/image";
import cloudBackground from "/public/img/cloud-background.png";
import locationIcon from "/public/img/location-icon.svg";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import { getDate } from "@/utils/getDate";

interface Props {
  location: Location;
  weather: Weather;
  unit: string;
}

function DashboardContent({ location, weather, unit }: Props) {
  return (
    <div className={style.dashboardContent}>
      <div className={style.cloudBackground}>
        <Image
          src={cloudBackground}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      <CurrentWeather weather={weather} unit={unit} />

      <p className={style.currentDate}>Today • {getDate(0)}</p>
      <p className={style.weatherLocation}>
        <Image
          src={locationIcon}
          alt="Location"
          width={0}
          height={0}
          style={{ width: "14px", height: "auto" }}
        />{" "}
        {location.name}
        {location.state && `, ${location.state}`}
      </p>
    </div>
  );
}

export default DashboardContent;
