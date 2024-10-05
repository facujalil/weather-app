"use client";

import React from "react";
import { Location, Weather } from "@/app/types";
import Dashboard from "./Dashboard/Dashboard";
import Details from "./Details/Details";

interface Props {
  location?: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location | undefined>>;
  weather: Weather;
  unit: string;
  setUnit: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function Main({
  location,
  setLocation,
  weather,
  unit,
  setUnit,
  loading,
  setLoading,
}: Props) {
  return (
    <main>
      <Dashboard
        location={location}
        setLocation={setLocation}
        weather={weather}
        unit={unit}
        loading={loading}
        setLoading={setLoading}
      />

      <Details
        weather={weather}
        unit={unit}
        setUnit={setUnit}
        loading={loading}
      />
    </main>
  );
}

export default Main;
