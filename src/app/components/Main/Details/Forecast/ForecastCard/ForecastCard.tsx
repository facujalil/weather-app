import React from "react";
import style from "./ForecastCard.module.css";
import { Day } from "@/app/types";
import { getDate } from "@/utils/getDate";
import WeatherImage from "../../../WeatherImage/WeatherImage";
import { convertCelsiusToFahrenheit } from "@/utils/convertCelsiusToFahrenheit";

interface Props {
  day: Day;
  unit: string;
  index: number;
}

function ForecastCard({ day, unit, index }: Props) {
  return (
    <div className={style.forecastCard}>
      <p>{index === 0 ? "Tomorrow" : getDate(index + 1)}</p>
      <div className={style.forecastCardImg}>
        <WeatherImage weatherImg={day.weather[0]} />
      </div>
      <div className={style.forecastCardTemps}>
        <p>
          {unit === "celsius"
            ? Number(day.temp.max.toFixed())
            : Number(convertCelsiusToFahrenheit(day.temp.max).toFixed())}
          {unit === "celsius" ? "°C" : "°F"}
        </p>
        <p>
          {unit === "celsius"
            ? Number(day.temp.min.toFixed())
            : Number(convertCelsiusToFahrenheit(day.temp.min).toFixed())}
          {unit === "celsius" ? "°C" : "°F"}
        </p>
      </div>
    </div>
  );
}

export default ForecastCard;
