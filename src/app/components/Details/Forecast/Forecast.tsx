import style from "./Forecast.module.css";
import { useWeatherContext } from "@/app/context/WeatherContext";
import ForecastDay from "./ForecastDay/ForecastDay";

function Forecast() {
  const { weatherData } = useWeatherContext();

  return weatherData ? (
    <div className={style.forecast}>
      {weatherData.daily.slice(1, 6).map((day, index) => (
        <ForecastDay key={index} day={day} index={index} />
      ))}
    </div>
  ) : null;
}

export default Forecast;
