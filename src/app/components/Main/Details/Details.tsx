import React from "react";
import style from "./Details.module.css";
import { Weather } from "@/app/types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import UnitConverter from "./UnitConverter/UnitConverter";
import Forecast from "./Forecast/Forecast";
import Highlights from "./Highlights/Highlights";
import Footer from "./Footer/Footer";

interface Props {
  weather: Weather;
  unit: string;
  setUnit: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
}

function Details({ weather, unit, setUnit, loading }: Props) {
  return (
    <div className={style.details}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <UnitConverter unit={unit} setUnit={setUnit} />

          <Forecast weather={weather} unit={unit} />

          <Highlights weather={weather} />
        </>
      )}

      <Footer />
    </div>
  );
}

export default Details;
