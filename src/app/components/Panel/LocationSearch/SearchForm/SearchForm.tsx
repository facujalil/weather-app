import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import style from "./SearchForm.module.css";
import { LocationData } from "@/app/types";

interface Props {
  setResultsLoading: Dispatch<SetStateAction<boolean>>;
  setResults: Dispatch<SetStateAction<LocationData[] | undefined>>;
}

function SearchForm({ setResultsLoading, setResults }: Props) {
  const [searchLocation, setSearchLocation] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchLocation) {
      setResultsLoading(true);
      getLocationOptions();
    }
  };

  const getLocationOptions = async () => {
    try {
      const res = await fetch(
        `/api/direct-geocoding?q=${searchLocation}&limit=5`
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
      setResultsLoading(false);
    }
  };

  return (
    <form className={style.searchForm} onSubmit={handleSearch}>
      <input
        type="search"
        name="search"
        autoFocus
        placeholder="Enter city name"
        onChange={(e) => setSearchLocation(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
