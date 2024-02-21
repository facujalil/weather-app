export const getDate = (daysAfter: number) => {
  const time = new Date().getTime() + 24 * 60 * 60 * 1000 * daysAfter;

  const dayName = new Date(time).toLocaleString("en-US", { weekday: "short" });
  const dayNumber = new Date(time).getDate();
  const month = new Date(time).toLocaleString("en-US", { month: "short" });

  return `${dayName}, ${dayNumber} ${month}`;
};
