import style from "./CurrentWeather.module.css";
import { useWeatherContext } from "@/app/context/WeatherContext";
import { mapWeatherIconToImage } from "@/app/utils/mapWeatherIconToImage";
import { convertCelsiusToFahrenheit } from "@/app/utils/convertCelsiusToFahrenheit";
import WeatherImage from "@/app/components/common/WeatherImage/WeatherImage";

function CurrentWeather() {
  const { weatherData, unit } = useWeatherContext();

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
