import axios from 'axios'
import { getDate } from '@util/getDate'

const getSchedule = async (
  ATPT_OFCDC_SC_CODE: string,
  SD_SCHUL_CODE: string,
  USER_DDDEP_NM: string,
  USER_GRADE: string,
  USER_CLASS: string,
  scheduleURL: string,
  currentDate: Date,
) => {
  try {
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
