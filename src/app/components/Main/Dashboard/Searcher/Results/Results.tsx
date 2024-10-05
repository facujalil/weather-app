import React from "react";
import style from "./Results.module.css";
import { Location } from "@/app/types";
import LocationOption from "./LocationOption/LocationOption";

interface Props {
  results: Location[] | "not results";
  setLocation: React.Dispatch<React.SetStateAction<Location | undefined>>;
  setSearcher: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Results({ results, setLocation, setSearcher, setLoading }: Props) {
  return (
    <div className={style.results}>
      {results === "not results" ? (
        <p>Not results</p>
      ) : (
        results.length > 0 &&
        results.map((locationOption, index) => (
          <LocationOption
            key={index}
            locationOption={locationOption}
            setLocation={setLocation}
            setSearcher={setSearcher}
            setLoading={setLoading}
          />
        ))
      )}
    </div>
  );
}

export default Results;
