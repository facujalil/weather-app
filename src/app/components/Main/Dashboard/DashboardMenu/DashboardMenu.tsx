import React from "react";
import style from "./DashboardMenu.module.css";
import { Location } from "@/app/types";
import Image from "next/image";

interface Props {
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  setSearcher: React.Dispatch<React.SetStateAction<boolean>>;
  setResults: React.Dispatch<React.SetStateAction<Location[] | "not results">>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function DashboardMenu({
  setLocation,
  setSearcher,
  setResults,
  setLoading,
}: Props) {
  const getReverseGeocoding = async (lat: number, lon: number) => {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();

    setLocation({
      name: data[0].name,
      state: data[0].state,
      lat: data[0].lat,
      lon: data[0].lon,
    });
  };

  const getUserLocation = () => {
    setLoading(true);

    const onLocationGranted = (location: {
      coords: {
        latitude: number;
        longitude: number;
      };
    }) => {
      getReverseGeocoding(
        Number(location.coords.latitude.toFixed(2)),
        Number(location.coords.longitude.toFixed(2))
      );
    };

    const onLocationError = (error: { message: string }) => {
      setLoading(false);
      alert("Error: " + error.message);
    };

    navigator.geolocation.getCurrentPosition(
      onLocationGranted,
      onLocationError
    );
  };

  return (
    <div className={style.dashboardMenu}>
      <button
        onClick={() => {
          setResults([]);
          setSearcher(true);
        }}
      >
        Search for places
      </button>
      <button onClick={getUserLocation}>
        <Image
          src="/img/my-location-icon.svg"
          alt="My location"
          width={0}
          height={0}
          style={{ width: "25.5px", height: "auto" }}
        />
      </button>
    </div>
  );
}

export default DashboardMenu;
