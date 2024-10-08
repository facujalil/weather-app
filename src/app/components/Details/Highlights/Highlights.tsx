import style from "./Highlights.module.css";
import { useWeatherContext } from "@/app/context/WeatherContext";
import { convertMetersToMiles } from "@/app/utils/convertMetersToMiles";
import HighlightItem from "./HighlightItem/HighlightItem";

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
        />
        <HighlightItem
          title="Humidity"
          value={weatherData ? Number(weatherData.current.humidity) : 0}
          unit="%"
        />
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
