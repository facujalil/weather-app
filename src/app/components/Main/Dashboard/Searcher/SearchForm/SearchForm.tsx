import React from "react";

interface Props {
  searchedLocation: string;
  setSearchedLocation: React.Dispatch<React.SetStateAction<string>>;
  getLocationOptions: () => Promise<void>;
  setLoadingResults: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchForm({
  searchedLocation,
  setSearchedLocation,
  getLocationOptions,
  setLoadingResults,
}: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchedLocation) {
      setLoadingResults(true);
      getLocationOptions();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="search location"
        onChange={(e) => setSearchedLocation(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
