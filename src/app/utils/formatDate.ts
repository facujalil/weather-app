export const formatDate = (daysOffset: number, timezone?: string) => {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);

  const weekday = date.toLocaleString("en-US", {
    weekday: "short",
    timeZone: timezone,
  });
  const day = date.toLocaleString("en-US", {
    day: "numeric",
    timeZone: timezone,
  });
  const month = date.toLocaleString("en-US", {
    month: "short",
    timeZone: timezone,
  });

  return `${weekday}, ${day} ${month}`;
};
