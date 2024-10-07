import { Dispatch, SetStateAction, useState } from "react";
import style from "./LocationSearch.module.css";
import { LocationData } from "@/app/types";
import { IoCloseSharp } from "react-icons/io5";
import SearchForm from "./SearchForm/SearchForm";
import Results from "./Results/Results";

interface Props {
  setShowLocationSearch: Dispatch<SetStateAction<boolean>>;
  setLocationData: Dispatch<SetStateAction<LocationData | undefined>>;
}

function LocationSearch({ setShowLocationSearch, setLocationData }: Props) {
  const [results, setResults] = useState<LocationData[]>();
  const [loadingResults, setLoadingResults] = useState(false);

  return (
    <div className={style.locationSearch}>
      <button onClick={() => setShowLocationSearch(false)}>
        <IoCloseSharp />
      </button>
      <SearchForm
        setLoadingResults={setLoadingResults}
        setResults={setResults}
      />
      <Results
        results={results}
        loadingResults={loadingResults}
        setLocationData={setLocationData}
      />
    </div>
  );
}

export default LocationSearch;
