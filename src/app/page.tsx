"use client";

import React, { useEffect, useState } from "react";
import "../css/globals.css";
import { Location, Weather } from "./types";
import Main from "./components/Main/Main";

function Page() {
  const [location, setLocation] = useState<Location | undefined>();
  const [unit, setUnit] = useState("celsius");
  const [weather, setWeather] = useState<Weather>({
    current: {
      temp: 0,
      pressure: 0,
      humidity: 0,
      clouds: 0,
      visibility: 0,
      wind_speed: 0,
      wind_deg: 0,
      weather: [
        {
          main: "",
          icon: "",
        },
      ],
    },
    daily: [
      {
        temp: {
          min: 0,
          max: 0,
        },
        weather: [
          {
            id: 0,
            main: "",
            icon: "",
          },
        ],
      },
    ],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDefaultLocation();
  }, []);

  useEffect(() => {
    if (location) {
      if (!loading) {
        setLoading(true);
      }
      getWeather(location.lat, location.lon);
    }
  }, [location]);

  const getDefaultLocation = async () => {
    try {
      const res = await fetch("api/direct-geocoding?q=London&limit=1");
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await res.json();
      setLocation(data[0]);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getWeather = async (lat: number, lon: number) => {
    try {
      const res = await fetch(`/api/weather-data?lat=${lat}&lon=${lon}`);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await res.json();

      setWeather(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Main
      location={location}
      setLocation={setLocation}
      weather={weather}
      unit={unit}
      setUnit={setUnit}
      loading={loading}
      setLoading={setLoading}
    />
  );
}

export default Page;
