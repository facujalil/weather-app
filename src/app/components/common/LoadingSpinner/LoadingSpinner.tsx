import style from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={style.loadingSpinner}>
      <div className={style.spinner}></div>
    </div>
  );
}

export default LoadingSpinner;
