import { useState } from 'react'
import { allergyTransformation } from '@util/allergyTransformation'
import { useGetAllergy } from '../../../hook/profile/useGetAllergy'
import RightArrow from '../../icons/RightArrow'
import * as S from './style'

const AllergiesList = ({ ...props }) => {
  const [selectedAllergies, setSelectedAllergies] = useState<number[]>([])
  useGetAllergy(setSelectedAllergies)

  const transformedAllergies = allergyTransformation(selectedAllergies)

  return (
    <S.Wrapper to='/allergy' {...props}>
      <S.Allergies>
        {selectedAllergies.length === 0
          ? '알레르기가 없어요'
          : transformedAllergies.join(', ')}
      </S.Allergies>
      <S.Icon>
        <RightArrow />
      </S.Icon>
    </S.Wrapper>
  )
}

export default AllergiesList
