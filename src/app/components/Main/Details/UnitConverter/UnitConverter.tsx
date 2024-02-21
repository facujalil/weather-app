import React from "react";
import style from "./UnitConverter.module.css";

interface Props {
  unit: string;
  setUnit: React.Dispatch<React.SetStateAction<string>>;
}

function UnitConverter({ unit, setUnit }: Props) {
  return (
    <div className={style.unitConverter}>
      <button
        className={unit === "celsius" ? style.active : ""}
        onClick={() => setUnit("celsius")}
      >
        °C
      </button>
      <button
        className={unit === "farenheit" ? style.active : ""}
        onClick={() => setUnit("farenheit")}
      >
        °F
      </button>
    </div>
  );
}

export default UnitConverter;
