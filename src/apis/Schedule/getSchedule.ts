import axios from 'axios'
import { getDate } from '@util/getDate'

interface Cookies {
  ATPT_OFCDC_SC_CODE?: string
  SD_SCHUL_CODE?: string
  USER_GRADE?: string
  USER_CLASS?: string
  USER_DDDEP_NM?: string
}

const getSchedule = async (
  cookies: Cookies | null,
  scheduleURL: string,
  currentDate: Date,
) => {
  try {
    const ATPT_OFCDC_SC_CODE = cookies!.ATPT_OFCDC_SC_CODE
    const SD_SCHUL_CODE = cookies!.SD_SCHUL_CODE
    const USER_DDDEP_NM = cookies!.USER_DDDEP_NM
    const USER_GRADE = cookies!.USER_GRADE
    const USER_CLASS = cookies!.USER_CLASS

    const { data } = await axios.get(
      `https://open.neis.go.kr/hub/${scheduleURL}`,
      {
        params: {
          KEY: process.env.REACT_APP_CLIENT_NEIS_KEY,
          Type: 'json',
          pIndex: 1,
          pSize: 7,
          ATPT_OFCDC_SC_CODE,
          SD_SCHUL_CODE,
          ALL_TI_YMD: getDate(currentDate),
          USER_DDDEP_NM,
          GRADE: USER_GRADE,
          CLRM_NM: USER_CLASS,
        },
      },
    )
    return data.hisTimetable?.[1]?.row || []
  } catch (e) {
    return null
  }
}

export default getSchedule
