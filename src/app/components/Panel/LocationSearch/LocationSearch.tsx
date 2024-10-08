import { Dispatch, SetStateAction, useState } from "react";
import style from "./LocationSearch.module.css";
import { LocationData } from "@/app/types";
import { IoCloseSharp } from "react-icons/io5";
import SearchForm from "./SearchForm/SearchForm";
import Results from "./Results/Results";

interface Props {
  setShowLocationSearch: Dispatch<SetStateAction<boolean>>;
}

function LocationSearch({ setShowLocationSearch }: Props) {
  const [results, setResults] = useState<LocationData[] | undefined>(undefined);
  const [resultsLoading, setResultsLoading] = useState(false);

  return (
    <div className={style.locationSearch}>
      <button onClick={() => setShowLocationSearch(false)}>
        <IoCloseSharp />
      </button>
      <SearchForm
        setResultsLoading={setResultsLoading}
        setResults={setResults}
      />
      <Results results={results} resultsLoading={resultsLoading} />
    </div>
  );
}

export default LocationSearch;
