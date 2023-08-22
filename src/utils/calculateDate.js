import { formDate } from "./formDate"
export const calculateDate = (date) => {
  const oneDayMilliseconds = 24 * 60 * 60 * 1000
  const start = new Date(date)
  const end = new Date(formDate(new Date()))
  const timeDifference = end - start
  const daysPassed = Math.floor(timeDifference / oneDayMilliseconds)
  return daysPassed
}
