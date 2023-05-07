type CompareStrings = (a: string, b: string) => number

export const compareStrings: CompareStrings = (a, b) => {
  let index = 0

  while (a[index] && a[index] === b[index]) index++

  return index
}
