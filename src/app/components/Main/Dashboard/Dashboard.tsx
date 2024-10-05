import React, { useState } from "react";
import style from "./Dashboard.module.css";
import { Location, Weather } from "@/app/types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Searcher from "./Searcher/Searcher";
import DashboardMenu from "./DashboardMenu/DashboardMenu";
import DashboardContent from "./DashboardContent/DashboardContent";

interface Props {
  location?: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location | undefined>>;
  weather: Weather;
  unit: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Dashboard({
  location,
  setLocation,
  weather,
  unit,
  loading,
  setLoading,
}: Props) {
  const [searcher, setSearcher] = useState(false);
  const [results, setResults] = useState<Location[] | "not results">([]);

  return (
    <div className={style.dashboard}>
      {loading ? (
        <LoadingSpinner />
      ) : searcher ? (
        <Searcher
          setLocation={setLocation}
          setSearcher={setSearcher}
          results={results}
          setResults={setResults}
          setLoading={setLoading}
        />
      ) : (
        <>
          <DashboardMenu
            setLocation={setLocation}
            setResults={setResults}
            setSearcher={setSearcher}
            setLoading={setLoading}
          />

          <DashboardContent location={location} weather={weather} unit={unit} />
        </>
      )}
    </div>
  );
}

export default Dashboard;
