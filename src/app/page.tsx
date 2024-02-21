import React from "react";
import "../css/globals.css";
import { Location } from "./types";
import Main from "./components/Main/Main";

async function page() {
  const defaultLocation: Location[] = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=London&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  ).then((res) => res.json());

  return <Main defaultLocation={defaultLocation[0]} />;
}

export default page;
