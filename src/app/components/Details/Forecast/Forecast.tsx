import style from "./Forecast.module.css";
import { TemperatureUnit, WeatherData } from "@/app/types";
import ForecastDay from "./ForecastDay/ForecastDay";

interface Props {
  weatherData?: WeatherData;
  unit: TemperatureUnit;
}

function Forecast({ weatherData, unit }: Props) {
  return weatherData ? (
    <div className={style.forecast}>
      {weatherData.daily.slice(1, 6).map((day, index) => (
        <ForecastDay key={index} day={day} index={index} unit={unit} />
      ))}
    </div>
  ) : null;
}

export default Forecast;
