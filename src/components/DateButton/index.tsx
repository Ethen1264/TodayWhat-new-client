import { useGetAllSetting } from '@hook/profile/useGetSetting'
import TimeButton from '@stories/atoms/TimeButton'
import React, { useEffect, useState } from 'react'
import * as S from './style'

interface DateProps {
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
}

const DateButton: React.FC<DateProps> = ({ setCurrentDate }) => {
  const [selectedButton, setSelectedButton] = useState(0)
  const [mealToggle, setMealToggle] = useState(false)

  useGetAllSetting(setMealToggle)

  useEffect(() => {
    const currentDate = new Date()
    const currentHour = currentDate.getHours()

    if (mealToggle) {
      if (currentHour >= 19 && currentHour < 24) {
        setSelectedButton(1)
        const tomorrow = new Date()
        tomorrow.setDate(currentDate.getDate() + 1)
        setCurrentDate(tomorrow)
      } else {
        setSelectedButton(0)
        setCurrentDate(currentDate)
      }
    }
  }, [mealToggle, setCurrentDate])

  const handleDateButtonClick = (days: number) => {
    if (selectedButton === days) {
      return
    }

    const today = new Date()
    today.setDate(today.getDate() + days)

    setCurrentDate(today)
    setSelectedButton(days)
  }

  const renderTimeButton = (text: string, days: number) => {
    return (
      <TimeButton
        text={text}
        onClick={() => handleDateButtonClick(days)}
        selected={selectedButton === days}
      />
    )
  }

  return (
    <S.Wrapper>
      {renderTimeButton('어제', -1)}
      {renderTimeButton('오늘', 0)}
      {renderTimeButton('내일', 1)}
    </S.Wrapper>
  )
}

export default DateButton
