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
