export const formDate = (date) => {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getMinutes()
  const creationDate = date
    .toLocaleString("en", {
      day: "numeric",
      month: "numeric",
      year: "2-digit",
    })
    .split(",")[0]
    .split("/")
    .join(".")
  
  return {
    creationDate,
    hours,
    minutes,
    seconds
  }
}
