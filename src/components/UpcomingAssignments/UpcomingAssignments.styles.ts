import styled from '@emotion/styled'

export const UpcomingAssignmentsWrapper = styled.section`
  border: 1px solid rgba(39, 39, 39, 0.5);
  border-radius: 5px;
  padding: 17px 22px 20px 22px;

  a:hover {
    text-decoration: underline;
  }
`

export const UpcomingAssignmentsTitle = styled.h5`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  padding-bottom: 15px;
  margin: 0;
`

export const UpcomingAssignmentsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 0;
  margin: 0;
`

export const UpcomingAssignmentsListItem = styled.li`
  display: flex;
  border-width: 0;
  border-radius: 5px;
  min-height: 82px;
  padding: 10px 10px 10px 14px;
`

export const UpcomingAssignmentsVerticalLine = styled.p`
  width: 4px;
  height: auto;
  margin-right: 15px;
  border-radius: 5px;
  margin-top: 0;
  margin-bottom: 0;
`

export const UpcomingAssignmentsContent = styled.div`
  position: relative;
  width: 100%;
`

export const UpcomingAssignmentsUnit = styled.a`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-top: 0;
  margin-bottom: 5px;
  color: #4d4d4d;
  max-width: 79%;
  cursor: pointer;
`

export const UpcomingAssignmentsStatus = styled.p`
  position: absolute;
  right: 0;
  top: 6px;
  padding: 6px 15px;
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
  margin: 0;
  background-color: #ea4f4f;
  border-radius: 5px;
  color: #fff;
`

export const UpcomingAssignmentsItemTitle = styled.h6`
  font-size: 14px;
  line-height: 19px;
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: 600;
  max-width: 77%;
`

export const UpcomingAssignmentsDueDate = styled.p`
  font-size: 10px;
  line-height: 14px;
  margin: 0;
  font-weight: 700;
  color: #2f2f2f;
`
