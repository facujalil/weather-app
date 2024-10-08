import style from "./Details.module.css";
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";
import UnitConverter from "./UnitConverter/UnitConverter";
import Forecast from "./Forecast/Forecast";
import Highlights from "./Highlights/Highlights";
import Footer from "./Footer/Footer";

interface Props {
  weatherDataLoading: boolean;
}

function Details({ weatherDataLoading }: Props) {
  return (
    <div className={style.details}>
      {weatherDataLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <UnitConverter />
          <Forecast />
          <Highlights />
        </>
      )}
      <Footer />
    </div>
  );
}

export default Details;
