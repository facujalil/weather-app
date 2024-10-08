import style from "./Results.module.css";
import { LocationData } from "@/app/types";
import LoadingSpinner from "@/app/components/common/LoadingSpinner/LoadingSpinner";
import LocationOption from "./LocationOption/LocationOption";

interface Props {
  results?: LocationData[];
  resultsLoading: boolean;
}

function Results({ results, resultsLoading }: Props) {
  return resultsLoading ? (
    <LoadingSpinner />
  ) : results ? (
    <div className={style.results}>
      {results.length > 0 ? (
        results.map((locationOption, index) => (
          <LocationOption key={index} locationOption={locationOption} />
        ))
      ) : (
        <p>Not results</p>
      )}
    </div>
  ) : null;
}

export default Results;
