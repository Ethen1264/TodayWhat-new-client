import { CookiesType } from 'types/cookies'

export const checkProfile = (cookies: CookiesType) => {
  const isProfileSet =
    cookies.SCHUL_NM &&
    cookies.USER_GRADE &&
    cookies.USER_CLASS &&
    cookies.ATPT_OFCDC_SC_CODE &&
    cookies.SD_SCHUL_CODE &&
    cookies.SCHOOL_DDDEP_NM &&
    cookies.USER_DDDEP_NM &&
    cookies.SCHUL_KND_SC_NM

  if (!isProfileSet) {
    return null
  }

  return cookies
}
