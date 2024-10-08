import style from "./ForecastDay.module.css";
import { Day } from "@/app/types";
import { useWeatherContext } from "@/app/context/WeatherContext";
import { formatDateFromToday } from "@/app/utils/formatDateFromToday";
import { mapWeatherIconToImage } from "@/app/utils/mapWeatherIconToImage";
import { convertCelsiusToFahrenheit } from "@/app/utils/convertCelsiusToFahrenheit";
import WeatherImage from "@/app/components/common/WeatherImage/WeatherImage";

interface Props {
  day: Day;
  index: number;
}

function ForecastDay({ day, index }: Props) {
  const { unit } = useWeatherContext();

  return (
    <div className={style.forecastDay}>
      <p>{index === 0 ? "Tomorrow" : formatDateFromToday(index + 1)}</p>
      <div className={style.weatherImgContainer}>
        <WeatherImage
          src={mapWeatherIconToImage(day.weather[0].icon)}
          alt={day.weather[0].main}
        />
      </div>
      <div className={style.forecastDayTemps}>
        <p>
          {unit === "C"
            ? day.temp.max >= -0.5 && day.temp.max <= 0.5
              ? 0
              : day.temp.max.toFixed()
            : convertCelsiusToFahrenheit(day.temp.max).toFixed()}
          {`°${unit}`}
        </p>
        <p>
          {unit === "C"
            ? day.temp.min >= -0.5 && day.temp.min <= 0.5
              ? 0
              : day.temp.min.toFixed()
            : convertCelsiusToFahrenheit(day.temp.min).toFixed()}
          {`°${unit}`}
        </p>
      </div>
    </div>
  );
}

export default ForecastDay;
