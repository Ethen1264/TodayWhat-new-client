import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 26.4375rem;
  height: 37.5rem;
  border-radius: 1.25rem;
  background: #fff;
  padding: 2rem 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow: hidden;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const MealListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  overflow-y: auto;
`

export const MealCalorieInfoCotainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  color: var(--White-Text-Secondary, #3e3d3f);
  text-align: center;

  font-family: SUIT;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3125rem;
`

export const ProfileMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-top: 2rem;
`
