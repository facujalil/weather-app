"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import { useWeatherContext } from "./context/WeatherContext";
import Details from "./components/Details/Details";
import Panel from "./components/Panel/Panel";

function Page() {
  const { locationData, setLocationData, setWeatherData } = useWeatherContext();

  const [weatherDataLoading, setWeatherDataLoading] = useState(true);

  useEffect(() => {
    getDefaultLocation();
  }, []);

  useEffect(() => {
    if (locationData) {
      if (!weatherDataLoading) {
        setWeatherDataLoading(true);
      }
      getWeatherData(locationData.lat, locationData.lon);
    }
  }, [locationData]);

  const getDefaultLocation = async () => {
    try {
      const res = await fetch("/api/direct-geocoding?q=London&limit=1");
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await res.json();
      setLocationData(data[0]);
    } catch (error) {
      console.error(error);
      setWeatherDataLoading(false);
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
      setWeatherDataLoading(false);
    }
  };

  return (
    <>
      <Panel
        weatherDataLoading={weatherDataLoading}
        setWeatherDataLoading={setWeatherDataLoading}
      />
      <Details weatherDataLoading={weatherDataLoading} />
    </>
  );
}

export default Page;
