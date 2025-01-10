import { useEffect } from 'react'

export function useGetAllSetting(
  setMealToggle?: React.Dispatch<React.SetStateAction<boolean>>,
) {
  useEffect(() => {
    const updateState = (
      key: string,
      setState?: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
      if (setState) {
        if (typeof chrome !== 'undefined' && chrome.storage) {
          chrome.storage.sync.get([key], (result) => {
            if (result[key] !== undefined) {
              setState(result[key])
            }
          })
        } else {
          const localValue = localStorage.getItem(key)
          if (localValue !== null) {
            setState(JSON.parse(localValue))
          }
        }
      }
    }

    updateState('mealToggle', setMealToggle)
    updateState('weekendSkip')
  }, [setMealToggle])
}
