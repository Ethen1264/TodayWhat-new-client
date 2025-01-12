import getDepartment from '@apis/Profile/getDepartment'
import useUserData from '@util/userData'
import type { Department } from 'types/department'

const useFetchDepartments = () => {
  const { setUserMajorData, getSchoolMajorData } = useUserData()

  const fetchDepartments = async (
    ATPT_OFCDC_SC_CODE: string,
    SD_SCHUL_CODE: string,
    setSelectMajor: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setUserMajorData('선택안함')
    setSelectMajor('선택안함')
    try {
      const data = await getDepartment(ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE)
      const departments =
        data && data.length > 0
          ? data.map((dept: Department) => dept.DDDEP_NM)
          : []
      getSchoolMajorData(departments)
    } catch (error) {
      console.error('Failed to fetch departments:', error)
    }
  }

  return fetchDepartments
}

export default useFetchDepartments
