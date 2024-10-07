import { Dispatch, SetStateAction } from "react";
import style from "./UnitConverter.module.css";
import { TemperatureUnit } from "@/app/types";

interface Props {
  unit: TemperatureUnit;
  setUnit: Dispatch<SetStateAction<TemperatureUnit>>;
}

function UnitConverter({ unit, setUnit }: Props) {
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
