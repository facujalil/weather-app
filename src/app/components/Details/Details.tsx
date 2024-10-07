import { Dispatch, SetStateAction } from "react";
import style from "./Details.module.css";
import { TemperatureUnit, WeatherData } from "@/app/types";
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";
import UnitConverter from "./UnitConverter/UnitConverter";
import Forecast from "./Forecast/Forecast";
import Highlights from "./Highlights/Highlights";
import Footer from "./Footer/Footer";

interface Props {
  loadingWeatherData: boolean;
  unit: TemperatureUnit;
  setUnit: Dispatch<SetStateAction<TemperatureUnit>>;
  weatherData?: WeatherData;
}

function Details({ loadingWeatherData, unit, setUnit, weatherData }: Props) {
  return (
    <div className={style.details}>
      {loadingWeatherData ? (
        <LoadingSpinner />
      ) : (
        <>
          <UnitConverter unit={unit} setUnit={setUnit} />
          <Forecast weatherData={weatherData} unit={unit} />
          <Highlights weatherData={weatherData} />
        </>
      )}

      <Footer />
    </div>
  );
}

export default Details;
