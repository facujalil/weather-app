"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { LocationData, TemperatureUnit, WeatherData } from "../types";

interface WeatherContext {
  locationData?: LocationData;
  setLocationData: Dispatch<SetStateAction<LocationData | undefined>>;
  weatherData?: WeatherData;
  setWeatherData: Dispatch<SetStateAction<WeatherData | undefined>>;
  unit: TemperatureUnit;
  setUnit: Dispatch<SetStateAction<TemperatureUnit>>;
}

const WeatherContext = createContext<WeatherContext | undefined>(undefined);

function WeatherProvider({ children }: { children: ReactNode }) {
  const [locationData, setLocationData] = useState<LocationData | undefined>(
    undefined
  );
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined
  );
  const [unit, setUnit] = useState<TemperatureUnit>("C");

  const value = {
    locationData,
    setLocationData,
    weatherData,
    setWeatherData,
    unit,
    setUnit,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

export default WeatherProvider;

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }

  return context;
};
