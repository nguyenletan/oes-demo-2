import {
  DiscussionBoardList,
  DiscussionBoardListItem,
  DiscussionBoardListItemTitle,
  DiscussionBoardNumberMessage,
  DiscussionBoardNumberNewMessage,
  DiscussionBoardNumberOldMessage,
  DiscussionBoardTile,
  DiscussionBoardWrapper,
} from './DiscussionBoard.styles'
import { IDiscussionTopic } from '../../models/DiscussionTopic/DiscussionTopic'

export interface DiscussionBoardItems {
  color: string
  discussionTitle: string
  numberOfNewMessages: number
  numberOfMessages: number
}

export interface DiscussionBoardProps {
  discussions: IDiscussionTopic[]
}

const DiscussionBoard = (props: DiscussionBoardProps) => {
  const { discussions } = props

  return (
    <DiscussionBoardWrapper className="discussion-board">
      <DiscussionBoardTile className="title">DISCUSSION BOARDS ACTIVITY</DiscussionBoardTile>
      <DiscussionBoardList className="discussions">
        {discussions?.map((discussion: IDiscussionTopic) => (
          <DiscussionBoardListItem
            className={discussion.numberOfNewMessages > 0 ? 'discussion has-new-message' : 'discussion'}
            key={discussion.title}
            style={{ backgroundColor: discussion.color + '20' }}
          >
            <DiscussionBoardListItemTitle className="discussion-title">
              <svg
                className="circle-bullet"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill={discussion.numberOfNewMessages > 0 ? discussion.color! : 'transparent'}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5" cy="5" r="5" />
              </svg>
              <a
                href={`${process.env.REACT_APP_CANVAS_URL}/courses/${discussion.courseId}/${discussion.id}`}
                target="_blank"
                rel="noreferrer"
                title={discussion.title}
              >
                {discussion.title}
              </a>
            </DiscussionBoardListItemTitle>
            <DiscussionBoardNumberMessage className="number-message">
              <DiscussionBoardNumberNewMessage
                className="new-message"
                style={{ backgroundColor: discussion.color + 'B2' }}
              >
                {discussion.numberOfNewMessages}
              </DiscussionBoardNumberNewMessage>
              <DiscussionBoardNumberOldMessage className="message">
                {discussion.numberOfMessages}
              </DiscussionBoardNumberOldMessage>
            </DiscussionBoardNumberMessage>
          </DiscussionBoardListItem>
        ))}
      </DiscussionBoardList>
    </DiscussionBoardWrapper>
  )
}

export default DiscussionBoard
