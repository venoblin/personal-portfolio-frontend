export const capitalizeStr = (str) => {
  const capitalized = str.slice(0, 1).toUpperCase()
  const sliceStr = str.slice(1, str.length)

  return capitalized + sliceStr
}
