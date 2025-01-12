import DateButton from '@components/DateButton'
import useFormattedDate from '@hook/date/useFormattedDate'
import { Stroke } from '@stories/assets/svg'
import Logo from '@stories/atoms/Logo'
import Return from '@stories/atoms/Return'
import ScheduleList from '@stories/atoms/ScheduleList'
import ScheduleListSkeleton from '@stories/atoms/ScheduleList/ScheduleListSkeleton'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { CookiesType } from 'types/cookies'
import { ScheduleData } from 'types/schedule'
import getSchedule from '@apis/Schedule/getSchedule'
import { checkProfile } from '@util/checkProfile'
import getScheduleURL from '@util/getScheduleURL'
import * as S from './style'

const Schedule = () => {
  const [cookies, setCookies] = useState<CookiesType | null>(null)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [Profilecookies] = useCookies([
    'SCHUL_NM',
    'USER_GRADE',
    'USER_CLASS',
    'ATPT_OFCDC_SC_CODE',
    'SD_SCHUL_CODE',
    'SCHOOL_DDDEP_NM',
    'USER_DDDEP_NM',
    'SCHUL_KND_SC_NM',
  ])

  useEffect(() => {
    const profile = checkProfile(Profilecookies)
    setCookies(profile)
  }, [Profilecookies])

  const scheduleURL = cookies?.SCHUL_KND_SC_NM
    ? getScheduleURL(cookies.SCHUL_KND_SC_NM)
    : ''

  const { data, isLoading } = useQuery<ScheduleData[]>({
    queryKey: [
      'scheduleData',
      useFormattedDate(currentDate),
      JSON.stringify(cookies),
    ],
    queryFn: () => getSchedule(cookies, scheduleURL, currentDate),
    enabled: cookies !== null,
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
        {cookies === null ? (
          <S.ProfileMessage>프로필을 설정해주세요.</S.ProfileMessage>
        ) : isLoading ? (
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
