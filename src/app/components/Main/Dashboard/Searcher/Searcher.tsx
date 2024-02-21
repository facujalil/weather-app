import React, { useState } from "react";
import style from "./Searcher.module.css";
import { Location } from "@/app/types";
import Image from "next/image";
import closeIcon from "/public/img/close-icon.svg";
import SearchForm from "./SearchForm/SearchForm";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import Results from "./Results/Results";

interface Props {
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  results: Location[] | "not results";
  setResults: React.Dispatch<React.SetStateAction<Location[] | "not results">>;
  setSearcher: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Searcher({
  setLocation,
  results,
  setResults,
  setSearcher,
  setLoading,
}: Props) {
  const [searchedLocation, setSearchedLocation] = useState("");
  const [loadingResults, setLoadingResults] = useState(false);

  const getLocationOptions = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchedLocation}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();

    setResults(data.length > 0 ? data : "not results");
    setLoadingResults(false);
  };

  return (
    <div className={style.searcher}>
      <button className={style.closeButton} onClick={() => setSearcher(false)}>
        <Image src={closeIcon} alt="Close" width={22} />
      </button>

      <SearchForm
        searchedLocation={searchedLocation}
        setSearchedLocation={setSearchedLocation}
        getLocationOptions={getLocationOptions}
        setLoadingResults={setLoadingResults}
      />

      {loadingResults ? (
        <LoadingSpinner />
      ) : (
        <Results
          results={results}
          setLocation={setLocation}
          setSearcher={setSearcher}
          setLoading={setLoading}
        />
      )}
    </div>
  );
}

export default Searcher;
