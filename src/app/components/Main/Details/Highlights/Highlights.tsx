import React from "react";
import style from "./Highlights.module.css";
import { Weather } from "@/app/types";
import HighlightsItem from "./HighlightsItem/HighlightsItem";
import { convertMetersToMiles } from "@/utils/convertMetersToMiles";

interface Props {
  weather: Weather;
}

function Highlights({ weather }: Props) {
  return (
    <div className={style.highlights}>
      <h3>{"Today's Highlights"}</h3>

      <div className={style.highlightsItemsContainer}>
        <HighlightsItem
          title="Wind status"
          value={Number(weather.current.wind_speed.toFixed())}
          unit="mph"
          weather={weather}
        />

        <HighlightsItem
          title="Humidity"
          value={weather.current.humidity}
          unit="%"
          weather={weather}
        />

        <HighlightsItem
          title="Visibility"
          value={Number(
            convertMetersToMiles(weather.current.visibility).toFixed()
          )}
          unit="miles"
        />

        <HighlightsItem
          title="Air Pressure"
          value={weather.current.pressure}
          unit="mb"
        />
      </div>
    </div>
  );
}

export default Highlights;
