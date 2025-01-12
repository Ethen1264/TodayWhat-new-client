export const expirationCookie = (): Date => {
  const now: Date = new Date()
  const endOfYear: Date = new Date(now.getFullYear(), 11, 31, 23, 59, 59)
  const expirationDate: Date = endOfYear
  return expirationDate
}
