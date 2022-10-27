import styled from '@emotion/styled'

export const Wrapper = styled.section`
  width: 100%;
  padding: 35px;
`

export const UpcomingDiscussion = styled.section`
  display: grid;
  grid-template-columns: minmax(min-content, 43%) minmax(min-content, 57%);
  gap: 20px;
  @media only screen and (max-width: 1023px) {
     grid-template-columns: 1fr;
  }
`

export const TimelineSkeletonWrapper = styled.div`
  min-height: 145px;
  border: 2px solid rgba(39, 39, 39, 0.2);
  border-top: 8px solid rgba(39, 39, 39, 0.2);
  border-radius: 5px;
  width: 100%;
  padding: 19px 21px;
`

export const TimelineSkeletonTitle = styled.h4`
  font-size: 14px;
  line-height: 19px;
  border-radius: 5px;
  margin: 0 0 27px 0;
  text-align: left;
  @media only screen and (max-width: 550px) {
    margin-bottom: 12px;
  }
  
  background-color: #E3E4E4;
  width: 200px;
  height: 19px;
  
`

export const TimelineSkeletonProgress = styled.progress`
  overflow: hidden;
  inline-size: 100%;
  -webkit-appearance: none;
  appearance: none;
  block-size: 7px;
  
  &::-webkit-progress-value {
    background: #57B598;
    border-radius: 5px;
      transition: all 0.8s ease-in-out;
  }
  &::-moz-progress-bar {
    background: #57B598;
    border-radius: 5px;
      transition: all 0.8s ease-in-out;
  }
  
  &::-webkit-progress-bar {
    background-color: #E3E4E4;
    border-radius: 5px;
  }
`

export const TimelineSkeletonProgressWeeks = styled.ul`
  margin-top: 13px;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding-inline-start: 0;
  font-size: 10px;
  line-height: 14px;
  font-weight: 600;
  text-transform: capitalize;
  @media only screen and (max-width: 1023px) {
    display: none
  }
`

export const TimelineProgressWeeksForMobile = styled.ul`
  margin-top: 7px;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding-inline-start: 0;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  text-transform: capitalize;
  color: #E3E4E4;
  
  .current {
    font-weight: 600;
    color: #000;
  }
  
  .upcoming {
    color: #272727;
  }
  
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`

export const TimelineSkeletonProgressWeek = styled.li`
  width: 30px;
  text-align: right;
  background-color: #E3E4E4;
  height: 16px;
  @media only screen and (max-width: 1024px) {
    text-align: left;
  }
  border-radius: 5px;
`

export const TimelineSpinners = styled.ul`
  margin-top: 0;
  margin-bottom: -10px;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding-inline-start: 0;
`

export const TimelineSpinnerWrapper = styled.li`
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 1023px) {
    display: none
  }
  
`
export const UnitsSkeletonWrapper = styled.ul`
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
  gap: 20px;
  transition: all 0.8s ease-in-out;
`

export const UnitSkeletonWrapper = styled.li`
  min-height: 228px;
  border: 2px solid rgba(39, 39, 39, 0.2);
  border-top: 8px solid rgba(39, 39, 39, 0.2);
  border-radius: 5px;
  padding: 10px 15px;
  text-align: left;
  transition: all 0.8s ease-in-out;
`

export const UnitCodeSkeleton = styled.h5`
  width: 80px;
  height: 17px;
  background-color: #E3E4E4;
  margin: 0;
  font-weight: 400;
  border-radius: 5px;
`


export const UnitTitleSkeleton = styled.h5`
  height: 17px;
  background-color: #E3E4E4;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 150px;
  border-radius: 5px;
`

export const UnitProgressSkeletonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 7px;
`

export const UnitModuleTitleSkeleton = styled.h5`
  width: 50px;
  height: 17px;
  background-color: #E3E4E4;
  margin-top: 31px;
  margin-bottom: 10px;
  border-radius: 5px;
`

export const UnitProgressSkeleton = styled.progress`
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


export const UnitAssignmentTitleSkeleton = styled.h5`
  height: 17px;
  width: 100px;
  margin-top: 30px;
  margin-bottom: 10px;
  background-color: #E3E4E4;
  border-radius: 5px;
`

export const UnitAssignmentProgressSkeleton = styled.div`
  display: flex;
  column-gap: 2px;
  width: 100%;
  
  span {
    display: flex;
    background-color: #E3E4E4;
    border-radius: 5px;
    height: 25px;
    width: 25%;
    justify-content: center;
    align-items: center;
    
  }
`

export const UpcomingDiscussionSkeleton = styled.section`
  display: grid;
  grid-template-columns: minmax(min-content, 43%) minmax(min-content, 57%);
  gap: 20px;
  @media only screen and (max-width: 1023px) {
     grid-template-columns: 1fr;
  }
`

export const UpcomingAssignmentsSkeletonWrapper = styled.section`
  border: 2px solid rgba(39, 39, 39, 0.2);
  border-radius: 5px;
  padding: 17px 22px 20px 22px;

`

export const UpcomingAssignmentsTitleSkeleton = styled.h5`
  height: 17px;
  background-color: #E3E4E4;
  width: 120px;
  padding-bottom: 15px;
  margin: 0;
  border-radius: 5px;
`

export const UpcomingAssignmentsListSkeleton = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 0;
  margin: 15px 0 0;
`

export const UpcomingAssignmentsListItemSkeleton = styled.li`
  display: flex;
  border-width: 0;
  border-radius: 5px;
  min-height: 82px;
  padding: 10px 10px 10px 14px;
  background-color: #E3E4E4;
`

export const DiscussionBoardSkeletonWrapper = styled.section`
  border: 2px solid rgba(39, 39, 39, 0.2);
  border-radius: 5px;
  padding: 17px 21px 22px 21px;
`

export const DiscussionBoardTileSkeleton = styled.h6`
  height: 17px;
  padding-bottom: 15px;
  background-color: #E3E4E4;
  width: 120px;
  margin: 0;
  border-radius: 5px;
`

export const DiscussionBoardListSkeleton = styled.ul`
  list-style: none;
  row-gap: 10px;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 15px 0 0;
`

export const DiscussionBoardListItemSkeleton = styled.li`
  border-radius: 5px;
  padding: 13px 12px 13px 15px;
  display: flex;
  justify-content: space-between;
  background-color: #E3E4E4;
  min-height: 45.5px;
`

export const DiscussionBoardListItemTitle = styled.h6`
  font-size: 14px;
  line-height: 19px;
  margin: 0;
  display: flex;
  align-items: center;
  font-weight: 400;
  
  .circle-bullet{
    margin-right: 9px;
  }

  &:hover {
    text-decoration: underline;
  }
`

export const DiscussionBoardNumberMessage = styled.p`
  margin: 0;
  font-size: 10px;
  line-height: 14px;
  font-weight: 700;
  display: flex;
  height: 20px;
`

export const DiscussionBoardNumberNewMessage = styled.span`
  border-radius: 50px 0 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 31px;
  color: #fff;
`

export const DiscussionBoardNumberOldMessage = styled.span`
  border-radius: 0 50px 50px 0;
  justify-content: center;
  align-items: center;
  min-width: 31px;
  background-color: #fff;
  display: flex;
`

