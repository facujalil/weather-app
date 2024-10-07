import style from "./HighlightItem.module.css";
import { MeasurementUnit, WeatherData } from "@/app/types";
import { calculateWindDeg } from "@/app/utils/calculateWindDeg";
import { MdNavigation } from "react-icons/md";

interface Props {
  title: string;
  value: number;
  unit: MeasurementUnit;
  weatherData?: WeatherData;
}

function HighlightItem({ title, value, unit, weatherData }: Props) {
  return (
    <div className={style.highlightItem}>
      <h4>{title}</h4>
      <p>
        <span>{value}</span>
        {unit}
      </p>
      {title === "Wind Status" ? (
        <div className={style.windDeg}>
          <MdNavigation
            style={{
              transform: `rotate(${
                weatherData ? weatherData.current.wind_deg : 0
              }deg)`,
            }}
          />
          <span>
            {calculateWindDeg(weatherData ? weatherData.current.wind_deg : 0)}
          </span>
        </div>
      ) : title === "Humidity" ? (
        <div className={style.percentageBarContainer}>
          <div className={style.percentageIndicators}>
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
          <div className={style.percentageBar}>
            <div
              className={style.percentageBarProgress}
              style={{
                width: `${weatherData ? weatherData.current.humidity : 0}%`,
              }}
            ></div>
          </div>
          <span>%</span>
        </div>
      ) : null}
    </div>
  );
}

export default HighlightItem;
