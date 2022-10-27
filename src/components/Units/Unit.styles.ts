import styled from '@emotion/styled'

export const UnitsWrapper = styled.ul`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr !important; 
  }
  @media only screen and (min-width: 551px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  list-style: none;
  padding-inline-start: 0;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 24px;
  transition: all 0.8s ease-in-out;
`

export const UnitWrapper = styled.li`
  min-height: 228px;
  border: 1px solid #787878;
  border-radius: 5px;
  padding: 12px;
  text-align: left;
  transition: all 0.8s ease-in-out;
`

export const UnitCode = styled.h5`
  font-size: 14px;
  line-height: 16.8px;
  text-transform: uppercase;
  color: #5C5C5C;
  margin: 0;
  font-weight: 400;
  a:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 550px) {
    font-size: 12px;
    line-height: 16.3px;
  }
`

export const UnitName = styled.h5`
  line-height: 24px;
  margin: 0;
  padding-top: 5px;
  font-size: 16px;
  font-weight: 700;
  color: #272727;
  min-height: 3.2em;
  a:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 550px) {
    font-size: 13px;
    line-height: 17.7px;
  }
`

export const UnitModuleTitle = styled.h5`
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 21px;
  margin-top: 21px;
  font-weight: 400;
  @media only screen and (max-width: 550px) {
    font-size: 10px;
    line-height: 13.62px;
    font-weight: 600;
  }
  
`

export const UnitProgressWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 12px;
`

export const UnitProgress = styled.progress`
  overflow: hidden;
  inline-size: 100%;
  -webkit-appearance: none;
  appearance: none;
  block-size: 7px;
  margin-top: 5px;
  &::-webkit-progress-value {
    background: #57B598;
    border-radius: 5px;
  }

  &::-moz-progress-bar {
    background: #57B598;
    border-radius: 5px;
  }

  &::-webkit-progress-bar {
    background-color: #E3E4E4;
    border-radius: 5px;
  }
`

export const UnitProgressValue = styled.span`
  font-size: 13.5px;
  line-height: 1.5em;
  @media only screen and (max-width: 550px) {
    font-size: 12px;
  }
`

export const UnitAssignmentTitle = styled.h5`
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 21px;
  margin-top: 21px;
  font-weight: 400;
  @media only screen and (max-width: 550px) {
    font-size: 10px;
    line-height: 13.62px;
    font-weight: 600;
  }
`

export const UnitAssignmentProgress = styled.div`
  display: flex;
  column-gap: 2px;
  width: 100%;
  
  span {
    display: flex;
    background-color: #E4E4E4;
    color: #565656;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    height: 26px;
    justify-content: center;
    align-items: center;
    
    &.submitted {
      background-color: #5d5d5d;
      color: #fff;
    }

    @media only screen and (max-width: 550px) {
      font-size: 10px;
      line-height: 13.62px;
    }
  }
`
