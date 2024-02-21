export interface Location {
  name: string;
  lat: number;
  lon: number;
  state: string;
}

export interface Weather {
  current: {
    temp: number;
    pressure: number;
    humidity: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: [
      {
        main: string;
        icon: string;
      }
    ];
  };
  daily: Day[];
}

export interface Day {
  temp: {
    min: number;
    max: number;
  };
  weather: [
    {
      id: number;
      main: string;
      icon: string;
    }
  ];
}
