import { formDate } from "./formatedDate"

export const calculateDate = (date, newDate) => {
    const oneDayMilliseconds = 24 * 60 * 60 * 1000
    const start = new Date(date)
    const end = new Date(formDate(newDate))
    const timeDifference = end - start
    const daysPassed = Math.floor(timeDifference / oneDayMilliseconds)
    return `${daysPassed}`
}
