import style from "./CurrentWeather.module.css";
import { TemperatureUnit, WeatherData } from "@/app/types";
import { mapWeatherIconToImage } from "@/app/utils/mapWeatherIconToImage";
import { convertCelsiusToFahrenheit } from "@/app/utils/convertCelsiusToFahrenheit";
import WeatherImage from "@/app/components/common/WeatherImage/WeatherImage";

interface Props {
  weatherData?: WeatherData;
  unit: TemperatureUnit;
}

function CurrentWeather({ weatherData, unit }: Props) {
  return (
    <div className={style.currentWeather}>
      <div className={style.weatherImgContainer}>
        <WeatherImage
          src={mapWeatherIconToImage(
            weatherData ? weatherData.current.weather[0].icon : ""
          )}
          alt={weatherData ? weatherData.current.weather[0].main : ""}
        />
      </div>
      <h1>
        {unit === "C"
          ? weatherData
            ? weatherData.current.temp.toFixed()
            : 0
          : convertCelsiusToFahrenheit(
              weatherData ? weatherData.current.temp : 0
            ).toFixed()}
        <span>{`°${unit}`}</span>
      </h1>
      {weatherData ? <h2>{weatherData.current.weather[0].main}</h2> : null}
    </div>
  );
}

export default CurrentWeather;
