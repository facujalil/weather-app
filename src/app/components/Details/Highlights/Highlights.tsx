import style from "./Highlights.module.css";
import { WeatherData } from "@/app/types";
import { convertMetersToMiles } from "@/app/utils/convertMetersToMiles";
import HighlightItem from "./HighlightItem/HighlightItem";

interface Props {
  weatherData?: WeatherData;
}

function Highlights({ weatherData }: Props) {
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
          weatherData={weatherData}
        />
        <HighlightItem
          title="Humidity"
          value={weatherData ? Number(weatherData.current.humidity) : 0}
          unit="%"
          weatherData={weatherData}
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
          weatherData={weatherData}
        />
        <HighlightItem
          title="Air Pressure"
          value={weatherData ? weatherData.current.pressure : 0}
          unit="mb"
          weatherData={weatherData}
        />
      </div>
    </div>
  );
}

export default Highlights;
