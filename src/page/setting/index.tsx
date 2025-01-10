import { useGetAllSetting } from '@hook/profile/useGetSetting'
import AllergiesList from '@stories/atoms/AllergiesList'
import Contact from '@stories/atoms/Contact'
import Logo from '@stories/atoms/Logo'
import MyProfile from '@stories/atoms/MyProfile'
import Return from '@stories/atoms/Return'
import ToggleSwitch from '@stories/atoms/ToggleSwitch'
import { Allergies, Feedback, Rice } from '@stories/icons/index'
import SettingList from '@stories/molecules/SettingList'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import * as S from './style'

const Setting = () => {
  const [cookies] = useCookies(['SCHUL_NM', 'USER_GRADE', 'USER_CLASS'])
  const { SCHUL_NM = '', USER_GRADE = '', USER_CLASS = '' } = cookies
  const [mealToggle, setMealToggle] = useState<boolean>(false)

  useGetAllSetting(setMealToggle)

  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <Logo />
        <Return />
      </S.HeaderContainer>
      <S.NavContainer>
        <S.Title>설정</S.Title>
        <MyProfile school={SCHUL_NM} Grade={USER_GRADE} Myclass={USER_CLASS} />
        <S.ProfileLink to='/profile'>프로필 설정</S.ProfileLink>
      </S.NavContainer>
      <S.BodyContainer>
        <SettingList
          icons={<Feedback />}
          text='문의'
          components={<Contact />}
        />
        <SettingList
          icons={<Allergies />}
          text='알레르기'
          components={<AllergiesList />}
        />
        <SettingList
          icons={<Rice />}
          text='저녁 후 내일 급식 표시'
          components={
            <ToggleSwitch
              isActive={mealToggle}
              setIsActive={setMealToggle}
              settingKey='mealToggle'
            />
          }
        />
      </S.BodyContainer>
    </S.Wrapper>
  )
}

export default Setting
