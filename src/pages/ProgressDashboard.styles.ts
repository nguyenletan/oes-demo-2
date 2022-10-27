import styled from '@emotion/styled'

export const ProgressDashboardWrapper = styled.section`
  width: 100%;
  padding: 48px 32px;
  @media only screen and (max-width: 550px) {
    padding: 32px 16px;
  }
`

export const UpcomingDiscussion = styled.section`
  display: grid;
  grid-template-columns: minmax(min-content, 42%) minmax(min-content, 58%);
  gap: 24px;
  @media only screen and (max-width: 1023px) {
     grid-template-columns: 1fr;
  }
`

