export const expirationCookie = (): Date => {
  const now: Date = new Date()
  const expirationDate: Date = new Date(now.getFullYear(), 2, 1, 23, 59, 59)
  return expirationDate
}
