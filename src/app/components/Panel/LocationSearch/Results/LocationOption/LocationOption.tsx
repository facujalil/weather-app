import style from "./LocationOption.module.css";
import { LocationData } from "@/app/types";
import { useWeatherContext } from "@/app/context/WeatherContext";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  locationOption: LocationData;
}

function LocationOption({ locationOption }: Props) {
  const { setLocationData } = useWeatherContext();

  return (
    <div
      className={style.locationOption}
      onClick={() => {
        setLocationData(locationOption);
      }}
    >
      <p>
        {locationOption.name}
        {locationOption.state ? `, ${locationOption.state}` : null}
      </p>
      <MdKeyboardArrowRight />
    </div>
  );
}

export default LocationOption;
