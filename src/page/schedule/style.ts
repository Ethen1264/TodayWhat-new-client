import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 24.4375rem;
  height: 37.5rem;
  border-radius: 1.25rem;
  background: #fff;
  padding: 2rem 2.5rem;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ScheduleContiner = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  overflow-y: auto;
`
export const ProfileMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-top: 2rem;
`
