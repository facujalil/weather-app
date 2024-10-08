import { ReactNode } from "react";
import style from "./HighlightItem.module.css";
import { MeasurementUnit } from "@/app/types";

interface Props {
  title: string;
  value: number;
  unit: MeasurementUnit;
  children?: ReactNode;
}

function HighlightItem({ title, value, unit, children }: Props) {
  return (
    <div className={style.highlightItem}>
      <h4>{title}</h4>
      <p>
        <span>{value}</span>
        {unit}
      </p>
      {children}
    </div>
  );
}

export default HighlightItem;
