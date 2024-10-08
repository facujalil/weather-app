import { Dispatch, SetStateAction } from "react";
import style from "./Menu.module.css";
import { useWeatherContext } from "@/app/context/WeatherContext";
import { MdMyLocation } from "react-icons/md";

interface Props {
  setShowLocationSearch: Dispatch<SetStateAction<boolean>>;
  setWeatherDataLoading: Dispatch<SetStateAction<boolean>>;
}

function Menu({ setShowLocationSearch, setWeatherDataLoading }: Props) {
  const { setLocationData } = useWeatherContext();

  const getUserLocation = async (lat: number, lon: number) => {
    try {
      const res = await fetch(`/api/reverse-geocoding?lat=${lat}&lon=${lon}`);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await res.json();
      setLocationData(data[0]);
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
          setWeatherDataLoading(true);
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
