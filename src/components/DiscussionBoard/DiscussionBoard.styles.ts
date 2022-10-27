import styled from '@emotion/styled'

export const DiscussionBoardWrapper = styled.section`
  border: 1px solid rgba(39, 39, 39, 0.5);
  border-radius: 5px;
  padding: 17px 21px 22px 21px;
`

export const DiscussionBoardTile = styled.h6`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  padding-bottom: 15px;
  margin: 0;
`

export const DiscussionBoardList = styled.ul`
  list-style: none;
  row-gap: 10px;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  max-height: 500px;
  overflow-y: auto;
`

export const DiscussionBoardListItem = styled.li`
  border-radius: 5px;
  padding: 13px 12px 13px 15px;
  display: flex;
  justify-content: space-between;
  &.has-new-message .discussion-title {
    font-weight: 600;
  }
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
