import DateButton from '@components/DateButton'
import useScheduleCookie from '@hook/cookie/useScheduleCookie'
import useFormattedDate from '@hook/date/useFormattedDate'
import { Stroke } from '@stories/assets/svg'
import Logo from '@stories/atoms/Logo'
import Return from '@stories/atoms/Return'
import ScheduleList from '@stories/atoms/ScheduleList'
import ScheduleListSkeleton from '@stories/atoms/ScheduleList/ScheduleListSkeleton'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { ScheduleData } from 'types/schedule'
import getSchedule from '@apis/Schedule/getSchedule'
import getScheduleURL from '@util/lib/getScheduleURL'
import * as S from './style'

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const cookies = useScheduleCookie()
  const {
    ATPT_OFCDC_SC_CODE,
    SD_SCHUL_CODE,
    USER_DDDEP_NM,
    USER_GRADE,
    USER_CLASS,
    SCHUL_KND_SC_NM,
  } = cookies

  const scheduleURL = getScheduleURL(SCHUL_KND_SC_NM)

  const { data, isLoading } = useQuery<ScheduleData[]>({
    queryKey: ['scheduleData', useFormattedDate(currentDate)],
    queryFn: () =>
      getSchedule(
        ATPT_OFCDC_SC_CODE,
        SD_SCHUL_CODE,
        USER_DDDEP_NM,
        USER_GRADE,
        USER_CLASS,
        scheduleURL,
        currentDate,
      ),
  })

  return (
    <S.Wrapper>
      <S.NavContainer>
        <S.Header>
          <Logo />
          <Return />
        </S.Header>
        <DateButton setCurrentDate={setCurrentDate} />
      </S.NavContainer>
      <S.ScheduleContiner>
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <ScheduleListSkeleton key={index} />
          ))
        ) : data && data.length > 0 ? (
          data.map((schedule: ScheduleData, index: number) => (
            <ScheduleList
              key={index}
              time={`${index + 1}교시`}
              subject={schedule?.ITRT_CNTNT}
              icons={<Stroke />}
            />
          ))
        ) : (
          <ScheduleList subject='시간표가 없습니다.' />
        )}
      </S.ScheduleContiner>
    </S.Wrapper>
  )
}

export default Schedule
