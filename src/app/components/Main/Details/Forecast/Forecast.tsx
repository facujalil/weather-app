import React from "react";
import style from "./Forecast.module.css";
import { Weather } from "@/app/types";
import ForecastCard from "./ForecastCard/ForecastCard";

interface Props {
  weather: Weather;
  unit: string;
}

function Forecast({ weather, unit }: Props) {
  return (
    <div className={style.forecastCardsContainer}>
      {weather.daily.slice(1, 6).map((day, index) => (
        <ForecastCard key={index} day={day} index={index} unit={unit} />
      ))}
    </div>
  );
}

export default Forecast;
