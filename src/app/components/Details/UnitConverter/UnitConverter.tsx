import style from "./UnitConverter.module.css";
import { useWeatherContext } from "@/app/context/WeatherContext";

function UnitConverter() {
  const { unit, setUnit } = useWeatherContext();

  return (
    <div className={style.unitConverter}>
      <button
        className={unit === "C" ? style.selected : undefined}
        onClick={() => setUnit("C")}
      >
        °C
      </button>
      <button
        className={unit === "F" ? style.selected : undefined}
        onClick={() => setUnit("F")}
      >
        °F
      </button>
    </div>
  );
}

export default UnitConverter;
