import { Dispatch, SetStateAction } from "react";
import style from "./LocationOption.module.css";
import { LocationData } from "@/app/types";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  locationOption: LocationData;
  setLocationData: Dispatch<SetStateAction<LocationData | undefined>>;
}

function LocationOption({ locationOption, setLocationData }: Props) {
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
