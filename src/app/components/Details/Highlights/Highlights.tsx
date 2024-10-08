import style from "./Highlights.module.css";
import { useWeatherContext } from "@/app/context/WeatherContext";
import { calculateWindDeg } from "@/app/utils/calculateWindDeg";
import { convertMetersToMiles } from "@/app/utils/convertMetersToMiles";
import HighlightItem from "./HighlightItem/HighlightItem";
import { MdNavigation } from "react-icons/md";

function Highlights() {
  const { weatherData } = useWeatherContext();

  return (
    <div className={style.highlights}>
      <h3>Today{"'"}s Highlights</h3>
      <div className={style.highlightItemsContainer}>
        <HighlightItem
          title="Wind Status"
          value={
            weatherData ? Number(weatherData.current.wind_speed.toFixed()) : 0
          }
          unit="mph"
        >
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
        </HighlightItem>
        <HighlightItem
          title="Humidity"
          value={weatherData ? Number(weatherData.current.humidity) : 0}
          unit="%"
        >
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
        </HighlightItem>
        <HighlightItem
          title="Visibility"
          value={
            weatherData
              ? Number(
                  convertMetersToMiles(weatherData.current.visibility).toFixed()
                )
              : 0
          }
          unit="miles"
        />
        <HighlightItem
          title="Air Pressure"
          value={weatherData ? weatherData.current.pressure : 0}
          unit="mb"
        />
      </div>
    </div>
  );
}

export default Highlights;
