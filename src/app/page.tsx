"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import { LocationData, TemperatureUnit, WeatherData } from "./types";
import Details from "./components/Details/Details";
import Panel from "./components/Panel/Panel";

function Page() {
  const [locationData, setLocationData] = useState<LocationData>();
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [unit, setUnit] = useState<TemperatureUnit>("C");
  const [loadingWeatherData, setLoadingWeatherData] = useState(true);

  useEffect(() => {
    getDefaultLocation();
  }, []);

  useEffect(() => {
    if (locationData) {
      if (!loadingWeatherData) {
        setLoadingWeatherData(true);
      }
      getWeatherData(locationData.lat, locationData.lon);
    }
  }, [locationData]);

  const getDefaultLocation = async () => {
    try {
      const res = await fetch("api/direct-geocoding?q=London&limit=1");
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await res.json();
      setLocationData(data[0]);
    } catch (error) {
      console.error(error);
      setLoadingWeatherData(false);
    }
  };

  const getWeatherData = async (lat: number, lon: number) => {
    try {
      const res = await fetch(`/api/weather-data?lat=${lat}&lon=${lon}`);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await res.json();

      setWeatherData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingWeatherData(false);
    }
  };

  return (
    <>
      <Panel
        locationData={locationData}
        setLocationData={setLocationData}
        loadingWeatherData={loadingWeatherData}
        setLoadingWeatherData={setLoadingWeatherData}
        weatherData={weatherData}
        unit={unit}
      />
      <Details
        loadingWeatherData={loadingWeatherData}
        unit={unit}
        setUnit={setUnit}
        weatherData={weatherData}
      />
    </>
  );
}

export default Page;
