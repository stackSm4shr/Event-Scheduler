function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default formatDate;
