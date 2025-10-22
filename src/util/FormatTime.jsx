export function formatTime(isoDate) {
  if (!isoDate) return "";

  return new Date(isoDate).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export default formatTime;
