import { Dispatch, SetStateAction } from "react";
import style from "./Results.module.css";
import { LocationData } from "@/app/types";
import LoadingSpinner from "@/app/components/common/LoadingSpinner/LoadingSpinner";
import LocationOption from "./LocationOption/LocationOption";

interface Props {
  results?: LocationData[];
  loadingResults: boolean;
  setLocationData: Dispatch<SetStateAction<LocationData | undefined>>;
}

function Results({ results, loadingResults, setLocationData }: Props) {
  return loadingResults ? (
    <LoadingSpinner />
  ) : results ? (
    <div className={style.results}>
      {results.length > 0 ? (
        results.map((locationOption, index) => (
          <LocationOption
            key={index}
            locationOption={locationOption}
            setLocationData={setLocationData}
          />
        ))
      ) : (
        <p>Not results</p>
      )}
    </div>
  ) : null;
}

export default Results;
