export const mapWeatherIconToImage = (weatherIcon: string) => {
  switch (weatherIcon.slice(0, 2)) {
    case "02":
    case "03":
    case "04":
      return "/img/light-cloud.png";
    case "09":
      return "/img/heavy-rain.png";
    case "10":
      return "/img/shower.png";
    case "11":
      return "/img/thunderstorm.png";
    case "13":
      return "/img/snow.png";
    case "50":
      return "/img/heavy-cloud.png";
    default:
      return "/img/clear.png";
  }
};
