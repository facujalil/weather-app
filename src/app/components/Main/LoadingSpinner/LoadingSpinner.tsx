import React from "react";
import style from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={style.loadingSpinnerContainer}>
      <div className={style.loadingSpinner}></div>
    </div>
  );
}

export default LoadingSpinner;
