import useProfileCookie from '@hook/cookie/useProfileCookie'
import useFetchDepartments from '@hook/profile/useFetchDepartments'
import useFetchSchools from '@hook/profile/useFetchSchools'
import CheckButton from '@stories/atoms/CheckButton'
import Input from '@stories/atoms/Input'
import Logo from '@stories/atoms/Logo'
import Return from '@stories/atoms/Return'
import SearchList from '@stories/atoms/SearchList'
import SearchListSkeleton from '@stories/atoms/SearchList/SearchListSkeleton'
import Select from '@stories/atoms/Select'
import React, { useState, useEffect } from 'react'
import { School } from 'types/school'
import useUserData from '@util/userData'
import * as S from './style'

const Profile: React.FC = () => {
  const cookies = useProfileCookie()
  const { SCHUL_NM, USER_GRADE, USER_CLASS, SCHOOL_DDDEP_NM, USER_DDDEP_NM } =
    cookies

  const [keyword, setKeyword] = useState<string>('')
  const [grade, setGrade] = useState<string>('')
  const [myClass, setMyClass] = useState<string>('')
  const [selectMajor, setSelectMajor] = useState<string>('')
  const [searchSchools, setSearchSchools] = useState<School[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const { setUserSchoolData, setUserGrade, setUserClass, setUserMajorData } =
    useUserData()

  useFetchSchools(keyword, SCHUL_NM, setSearchSchools, setLoading)

  useEffect(() => {
    setKeyword(SCHUL_NM || '')
    setGrade(USER_GRADE || '')
    setMyClass(USER_CLASS || '')
    setSelectMajor(USER_DDDEP_NM || '')
  }, [SCHUL_NM, USER_GRADE, USER_CLASS, USER_DDDEP_NM])

  const fetchDepartments = useFetchDepartments()

  const handleSelectSchool = (school: School) => {
    setUserSchoolData(
      school.SCHUL_NM,
      school.ATPT_OFCDC_SC_CODE,
      school.SD_SCHUL_CODE,
      school.SCHUL_KND_SC_NM,
    )
    setKeyword(school.SCHUL_NM)
    setSearchSchools([])
    if (school.ATPT_OFCDC_SC_CODE) {
      fetchDepartments(
        school.ATPT_OFCDC_SC_CODE,
        school.SD_SCHUL_CODE,
        setSelectMajor,
      )
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Logo />
        <Return />
      </S.Header>
      <S.InputContainer>
        <S.SearchContiner>
          <Input
            setValue={setKeyword}
            category='학교이름'
            value={keyword}
            placeholder='학교이름을 입력해주세요.'
          />
          {loading
            ? Array.from({ length: 7 }).map((_, index) => (
                <SearchListSkeleton key={index} />
              ))
            : searchSchools.length > 0 &&
              searchSchools.map((school) => (
                <SearchList
                  onclick={() => handleSelectSchool(school)}
                  key={school.SCHUL_NM}
                  school={school.SCHUL_NM}
                  location={school.ORG_RDNMA}
                />
              ))}
        </S.SearchContiner>
        {searchSchools.length === 0 && (
          <>
            {Array.isArray(SCHOOL_DDDEP_NM) && SCHOOL_DDDEP_NM.length > 0 && (
              <Select
                cookie={setUserMajorData}
                value={selectMajor}
                setValue={setSelectMajor}
                category='학과'
                data={SCHOOL_DDDEP_NM}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            )}
            {!isOpen && (
              <>
                <Input
                  cookie={setUserGrade}
                  setValue={setGrade}
                  value={grade}
                  category='학년'
                  placeholder='학년을 입력하세요'
                />
                <Input
                  cookie={setUserClass}
                  setValue={setMyClass}
                  value={myClass}
                  category='반'
                  placeholder='반을 입력해주세요.'
                />
              </>
            )}
            <CheckButton text='확인!' />
          </>
        )}
      </S.InputContainer>
    </S.Wrapper>
  )
}

export default Profile
