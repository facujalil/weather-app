import React from "react";
import style from "./CurrentWeather.module.css";
import { Weather } from "@/app/types";
import WeatherImage from "../../WeatherImage/WeatherImage";
import { convertCelsiusToFahrenheit } from "@/utils/convertCelsiusToFahrenheit";

interface Props {
  weather: Weather;
  unit: string;
}

function CurrentWeather({ weather, unit }: Props) {
  return (
    <div className={style.currentWeather}>
      <div className={style.currentWeatherImg}>
        <WeatherImage weatherImg={weather.current.weather[0]} />
      </div>

      <h1 className={style.currentWeatherTemp}>
        {unit === "celsius"
          ? Number(weather.current.temp.toFixed())
          : Number(convertCelsiusToFahrenheit(weather.current.temp).toFixed())}
        <span>{unit === "celsius" ? "°C" : "°F"}</span>
      </h1>

      <h2 className={style.currentWeatherDescription}>
        {weather.current.weather[0].main}
      </h2>
    </div>
  );
}

export default CurrentWeather;
