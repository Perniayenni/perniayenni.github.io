export const capitalize = (word = '') => {
  const lower = word.toLowerCase()
  return `${lower.charAt(0).toUpperCase()}${lower.slice(1)}`
}

export const capitalLetter = (word = '') =>  word.toLocaleUpperCase()
