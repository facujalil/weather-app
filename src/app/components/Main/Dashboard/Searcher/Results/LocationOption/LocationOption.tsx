import React from "react";
import style from "./LocationOption.module.css";
import { Location } from "@/app/types";
import Image from "next/image";
import rightArrowIcon from "/public/img/right-arrow-icon.svg";

interface Props {
  locationOption: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  setSearcher: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function LocationOption({
  locationOption,
  setLocation,
  setSearcher,
  setLoading,
}: Props) {
  const changeLocation = () => {
    setLocation(locationOption);
    setSearcher(false);
  };

  return (
    <div
      className={style.locationOption}
      onClick={() => {
        setLoading(true);
        changeLocation();
      }}
    >
      <p>
        {locationOption.name}
        {locationOption.state && `, ${locationOption.state}`}
      </p>
      <Image
        src={rightArrowIcon}
        alt="Right arrow"
        width={0}
        height={0}
        style={{ width: "7.5px", height: "auto" }}
      />
    </div>
  );
}

export default LocationOption;
