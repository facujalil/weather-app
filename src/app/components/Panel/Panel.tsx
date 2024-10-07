import { Dispatch, SetStateAction, useEffect, useState } from "react";
import style from "./Panel.module.css";
import { LocationData, TemperatureUnit, WeatherData } from "@/app/types";
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";
import LocationSearch from "./LocationSearch/LocationSearch";
import Menu from "./Menu/Menu";
import MainInfo from "./MainInfo/MainInfo";

interface Props {
  locationData?: LocationData;
  setLocationData: Dispatch<SetStateAction<LocationData | undefined>>;
  loadingWeatherData: boolean;
  setLoadingWeatherData: Dispatch<SetStateAction<boolean>>;
  weatherData?: WeatherData;
  unit: TemperatureUnit;
}

function Panel({
  locationData,
  setLocationData,
  loadingWeatherData,
  setLoadingWeatherData,
  weatherData,
  unit,
}: Props) {
  const [showLocationSearch, setShowLocationSearch] = useState(false);

  useEffect(() => {
    if (showLocationSearch) {
      setShowLocationSearch(false);
    }
  }, [locationData]);

  return (
    <div className={style.panel}>
      {loadingWeatherData ? (
        <LoadingSpinner />
      ) : showLocationSearch ? (
        <LocationSearch
          setShowLocationSearch={setShowLocationSearch}
          setLocationData={setLocationData}
        />
      ) : (
        <>
          <Menu
            setLocationData={setLocationData}
            setLoadingWeatherData={setLoadingWeatherData}
            setShowLocationSearch={setShowLocationSearch}
          />
          <MainInfo
            weatherData={weatherData}
            unit={unit}
            locationData={locationData}
          />
        </>
      )}
    </div>
  );
}

export default Panel;
