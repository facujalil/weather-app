import style from "./MainInfo.module.css";
import { useWeatherContext } from "@/app/context/WeatherContext";
import { formatDateFromToday } from "@/app/utils/formatDateFromToday";
import WeatherImage from "../../common/WeatherImage/WeatherImage";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import { IoLocationSharp } from "react-icons/io5";

function MainInfo() {
  const { locationData } = useWeatherContext();

  return (
    <div className={style.mainInfo}>
      <div className={style.cloudBackground}>
        <WeatherImage src="/img/cloud-background.png" alt="Cloud background" />
      </div>
      <CurrentWeather />
      <div className={style.currentDate}>
        <p>Today • {formatDateFromToday()}</p>
      </div>
      {locationData ? (
        <div className={style.weatherLocation}>
          <IoLocationSharp />
          <p>
            {locationData.name}
            {locationData.state ? `, ${locationData.state}` : null}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default MainInfo;
