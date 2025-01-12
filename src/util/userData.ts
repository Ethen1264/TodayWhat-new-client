import { useCookies } from 'react-cookie'
import { expirationCookie } from './expirationCookie'

const useUserData = () => {
  const [cookies, setCookie] = useCookies([
    'SCHUL_NM',
    'ATPT_OFCDC_SC_CODE',
    'SD_SCHUL_CODE',
    'SCHOOL_DDDEP_NM',
    'USER_DDDEP_NM',
    'USER_GRADE',
    'USER_CLASS',
    'SCHUL_KND_SC_NM',
  ])

  const setUserSchoolData = (
    SCHUL_NM: string,
    ATPT_OFCDC_SC_CODE: string,
    SD_SCHUL_CODE: string,
    SCHUL_KND_SC_NM: string,
  ) => {
    setCookie('SCHUL_NM', SCHUL_NM, { path: '/', expires: expirationCookie() })
    setCookie('ATPT_OFCDC_SC_CODE', ATPT_OFCDC_SC_CODE, {
      path: '/',
      expires: expirationCookie(),
    })
    setCookie('SD_SCHUL_CODE', SD_SCHUL_CODE, {
      path: '/',
      expires: expirationCookie(),
    })
    setCookie('SCHUL_KND_SC_NM', SCHUL_KND_SC_NM, {
      path: '/',
      expires: expirationCookie(),
    })
  }

  const getSchoolMajorData = (departmentObject: Array<string>) => {
    const updatedDepartmentObject = ['선택안함', ...departmentObject]
    setCookie('SCHOOL_DDDEP_NM', JSON.stringify(updatedDepartmentObject), {
      path: '/',
      expires: expirationCookie(),
    })
  }

  const setUserMajorData = (DDDEP_NM: string) => {
    setCookie('USER_DDDEP_NM', DDDEP_NM, {
      path: '/',
      expires: expirationCookie(),
    })
  }

  const setUserGrade = (userGrade: string) => {
    setCookie('USER_GRADE', userGrade, {
      path: '/',
      expires: expirationCookie(),
    })
  }

  const setUserClass = (userClass: string) => {
    setCookie('USER_CLASS', userClass, {
      path: '/',
      expires: expirationCookie(),
    })
  }

  return {
    cookies,
    setUserSchoolData,
    getSchoolMajorData,
    setUserMajorData,
    setUserGrade,
    setUserClass,
  }
}

export default useUserData
