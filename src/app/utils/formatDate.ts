export const formatDate = (daysOffset: number, timezoneOffset: number) => {
  const time = new Date().getTime() + 24 * 60 * 60 * 1000 * daysOffset;
  const localTime = time + timezoneOffset * 1000;

  const date = new Date(localTime);
  const weekday = date.toLocaleString("en-US", {
    weekday: "short",
  });
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });

  return `${weekday}, ${day} ${month}`;
};
