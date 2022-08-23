import { IReview } from '../types'

export function sliceIntoChunks(
  arr: IReview[],
  chunkSize: number
): IReview[][] {
  const res: IReview[][] = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize)
    res.push(chunk)
  }
  return res
}

export const unslugify = (str: string): string => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
export const formatDate = (timestamp: string) => {
  const date = new Date(timestamp)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return (
    months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
  )
}
