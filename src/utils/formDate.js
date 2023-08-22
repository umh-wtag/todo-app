export const formDate = (date) =>
  date
    .toLocaleString("en", {
      day: "numeric",
      month: "numeric",
      year: "2-digit",
    })
    .split(",")[0]
    .split("/")
    .join(".")
