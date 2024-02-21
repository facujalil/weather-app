import React from "react";
import style from "./HighlightsItem.module.css";
import { Weather } from "@/app/types";
import Image from "next/image";
import windDirectionIcon from "/public/img/wind-direction-icon.svg";
import { calculateWindDeg } from "@/utils/calculateWindDeg";

interface Props {
  title: string;
  value: string | number | null;
  unit: string;
  weather?: Weather;
}

function HighlightsItem({ title, value, unit, weather }: Props) {
  return (
    <div className={style.highlightsItem}>
      <h4>{title}</h4>
      <p className={style.highlightsItemInfo}>
        <span>{value}</span>
        {unit}
      </p>
      {title === "Wind status" ? (
        <div className={style.windDegContainer}>
          <Image
            src={windDirectionIcon}
            alt="Wind direction"
            width={20}
            style={
              weather
                ? { transform: `rotate(${weather.current.wind_deg}deg)` }
                : { transform: "" }
            }
          />
          <span>{weather && calculateWindDeg(weather.current.wind_deg)}</span>
        </div>
      ) : (
        title === "Humidity" && (
          <div className={style.humidityPorcentageContainer}>
            <div className={style.percentageIndicators}>
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className={style.humidityPorcentage}>
              <div
                className={style.progressHumidityPorcentage}
                style={{
                  width: `${weather && weather.current.humidity}%`,
                }}
              ></div>
            </div>
            <p className={style.porcentageIcon}>%</p>
          </div>
        )
      )}
    </div>
  );
}

export default HighlightsItem;
