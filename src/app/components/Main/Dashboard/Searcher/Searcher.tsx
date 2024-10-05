import React, { useState } from "react";
import style from "./Searcher.module.css";
import { Location } from "@/app/types";
import Image from "next/image";
import SearchForm from "./SearchForm/SearchForm";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import Results from "./Results/Results";

interface Props {
  setLocation: React.Dispatch<React.SetStateAction<Location | undefined>>;
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
    try {
      const res = await fetch(
        `/api/direct-geocoding?q=${searchedLocation}&limit=5`
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await res.json();

      setResults(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingResults(false);
    }
  };

  return (
    <div className={style.searcher}>
      <button className={style.closeButton} onClick={() => setSearcher(false)}>
        <Image
          src="/img/close-icon.svg"
          alt="Close"
          width={0}
          height={0}
          style={{
            width: "22px",
            height: "auto",
          }}
        />
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
