export const formatDateFromToday = (daysOffset?: number) => {
  const time = new Date().getTime() + 24 * 60 * 60 * 1000 * (daysOffset || 0);

  const weekday = new Date(time).toLocaleString("en-US", {
    weekday: "short",
  });
  const day = new Date(time).getDate();
  const month = new Date(time).toLocaleString("en-US", { month: "short" });

  return `${weekday}, ${day} ${month}`;
};
