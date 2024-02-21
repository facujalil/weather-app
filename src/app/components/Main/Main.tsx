"use client";

import React, { useEffect, useState } from "react";
import { Location, Weather } from "@/app/types";
import Dashboard from "./Dashboard/Dashboard";
import Details from "./Details/Details";

interface Props {
  defaultLocation: Location;
}

function Main({ defaultLocation }: Props) {
  const [location, setLocation] = useState(defaultLocation);
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
    getWeather(location.lat, location.lon);
  }, [location]);

  const getWeather = async (lat: number, lon: number) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();

    setWeather(data);
    setLoading(false);
  };

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
