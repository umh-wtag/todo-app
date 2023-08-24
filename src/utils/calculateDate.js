import { formDate } from "./formatedDate"

export const calculateDate = (date, newDate) => {
  const markedCompletedAt = formDate(newDate)

  if (date.creationDate !== markedCompletedAt.creationDate) {
    const oneDayMilliseconds = 24 * 60 * 60 * 1000
    const start = new Date(date.creationDate)
    const end = new Date(formDate(newDate))
    const timeDifference = end - start
    const daysPassed = Math.floor(timeDifference / oneDayMilliseconds)
    return `${daysPassed} days`
  } else {
    if (date.hours !== markedCompletedAt.hours) {
      const hour =
        Number(markedCompletedAt.hours.toString()) -
        Number(date.hours.toString())
      return `${hour} ${hour > 1 ? "hours" : "hour"}`
    } else if (date.minutes !== markedCompletedAt.minutes) {
      const minutes =
        Number(markedCompletedAt.minutes.toString()) -
        Number(date.minutes.toString())
      return ` ${minutes} ${minutes > 1 ? "minutes" : "minute"}`
    } else {
      const seconds = markedCompletedAt.minutes - date.minutes
      return `${seconds} ${seconds > 1 ? "seconds" : "second"}`
    }
  }
}
