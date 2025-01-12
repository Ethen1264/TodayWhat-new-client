import axios from 'axios'
import { getDate } from '@util/getDate'

interface Cookies {
  ATPT_OFCDC_SC_CODE?: string
  SD_SCHUL_CODE?: string
}

const getMeal = async (cookies: Cookies, currentDate: Date) => {
  try {
    const { ATPT_OFCDC_SC_CODE = '', SD_SCHUL_CODE = '' } = cookies

    const { data } = await axios.get(
      'https://open.neis.go.kr/hub/mealServiceDietInfo',
      {
        params: {
          KEY: process.env.REACT_APP_CLIENT_NEIS_KEY,
          Type: 'json',
          ATPT_OFCDC_SC_CODE,
          SD_SCHUL_CODE,
          MLSV_YMD: getDate(currentDate),
        },
      },
    )
    return data.mealServiceDietInfo?.[1]?.row || []
  } catch (e) {
    return null
  }
}

export default getMeal
