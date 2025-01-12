const getScheduleURL = (schoolType: string | undefined): string => {
  let scheduleURL = ''

  switch (schoolType) {
    case '고등학교':
      scheduleURL = 'hisTimetable'
      break
    case '중학교':
      scheduleURL = 'misTimetable'
      break
    case '초등학교':
      scheduleURL = 'elsTimetable'
      break
    default:
      scheduleURL = ''
      break
  }

  return scheduleURL
}

export default getScheduleURL
