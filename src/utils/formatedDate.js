export const formatedDate = (date) => {
  const formatOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  }
  const formatted = new Intl.DateTimeFormat("en", formatOptions).format(date)
  return formatted
}
