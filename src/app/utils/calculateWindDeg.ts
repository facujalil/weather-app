export const calculateWindDeg = (windDeg: number) => {
  if (windDeg >= 349 || windDeg <= 12) {
    return "N";
  } else if (windDeg >= 13 && windDeg <= 33) {
    return "NNE";
  } else if (windDeg >= 34 && windDeg <= 56) {
    return "NE";
  } else if (windDeg >= 57 && windDeg <= 78) {
    return "ENE";
  } else if (windDeg >= 79 && windDeg <= 101) {
    return "E";
  } else if (windDeg >= 102 && windDeg <= 123) {
    return "ESE";
  } else if (windDeg >= 124 && windDeg <= 146) {
    return "SE";
  } else if (windDeg >= 147 && windDeg <= 168) {
    return "SSE";
  } else if (windDeg >= 169 && windDeg <= 191) {
    return "S";
  } else if (windDeg >= 192 && windDeg <= 213) {
    return "SSW";
  } else if (windDeg >= 214 && windDeg <= 236) {
    return "SW";
  } else if (windDeg >= 237 && windDeg <= 258) {
    return "WSW";
  } else if (windDeg >= 259 && windDeg <= 281) {
    return "W";
  } else if (windDeg >= 282 && windDeg <= 303) {
    return "WNW";
  } else if (windDeg >= 304 && windDeg <= 326) {
    return "NW";
  } else if (windDeg >= 327 && windDeg <= 348) {
    return "NNW";
  }
};
