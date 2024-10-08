import { Dispatch, SetStateAction, useEffect, useState } from "react";
import style from "./Panel.module.css";
import { useWeatherContext } from "@/app/context/WeatherContext";
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";
import LocationSearch from "./LocationSearch/LocationSearch";
import Menu from "./Menu/Menu";
import MainInfo from "./MainInfo/MainInfo";

interface Props {
  weatherDataLoading: boolean;
  setWeatherDataLoading: Dispatch<SetStateAction<boolean>>;
}

function Panel({ weatherDataLoading, setWeatherDataLoading }: Props) {
  const { locationData } = useWeatherContext();

  const [showLocationSearch, setShowLocationSearch] = useState(false);

  useEffect(() => {
    if (showLocationSearch) {
      setShowLocationSearch(false);
    }
  }, [locationData]);

  return (
    <div className={style.panel}>
      {weatherDataLoading ? (
        <LoadingSpinner />
      ) : showLocationSearch ? (
        <LocationSearch setShowLocationSearch={setShowLocationSearch} />
      ) : (
        <>
          <Menu
            setWeatherDataLoading={setWeatherDataLoading}
            setShowLocationSearch={setShowLocationSearch}
          />
          <MainInfo />
        </>
      )}
    </div>
  );
}

export default Panel;
