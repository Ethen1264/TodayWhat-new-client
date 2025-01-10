import { useMemo } from 'react'

const useFormattedDate = (date: Date) => {
  const formattedDate = useMemo(() => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }, [date])

  return formattedDate
}

export default useFormattedDate
