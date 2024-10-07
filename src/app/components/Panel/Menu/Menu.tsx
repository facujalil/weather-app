import { Dispatch, SetStateAction } from "react";
import style from "./Menu.module.css";
import { LocationData } from "@/app/types";
import { MdMyLocation } from "react-icons/md";

interface Props {
  setLocationData: Dispatch<SetStateAction<LocationData | undefined>>;
  setShowLocationSearch: Dispatch<SetStateAction<boolean>>;
  setLoadingWeatherData: Dispatch<SetStateAction<boolean>>;
}

function Menu({
  setLocationData,
  setShowLocationSearch,
  setLoadingWeatherData,
}: Props) {
  const getUserLocation = async (lat: number, lon: number) => {
    try {
      const res = await fetch(
        `/api/reverse-geocoding?lat=${lat}&lon=${lon}&limit=1`
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await res.json();

      setLocationData({
        name: data[0].name,
        state: data[0].state,
        lat: data[0].lat,
        lon: data[0].lon,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onLocationGranted = (location: {
    coords: {
      latitude: number;
      longitude: number;
    };
  }) => {
    getUserLocation(
      Number(location.coords.latitude.toFixed(2)),
      Number(location.coords.longitude.toFixed(2))
    );
  };

  const onLocationError = (error: { message: string }) => {
    alert("Error: " + error.message);
  };

  return (
    <div className={style.menu}>
      <button
        onClick={() => {
          setShowLocationSearch(true);
        }}
      >
        Search for places
      </button>
      <button
        onClick={() => {
          setLoadingWeatherData(true);
          navigator.geolocation.getCurrentPosition(
            onLocationGranted,
            onLocationError
          );
        }}
      >
        <MdMyLocation />
      </button>
    </div>
  );
}

export default Menu;
