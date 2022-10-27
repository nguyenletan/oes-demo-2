import moment from 'moment'

import {
  UpcomingAssignmentsContent,
  UpcomingAssignmentsDueDate,
  UpcomingAssignmentsItemTitle,
  UpcomingAssignmentsList,
  UpcomingAssignmentsListItem,
  UpcomingAssignmentsStatus,
  UpcomingAssignmentsTitle,
  UpcomingAssignmentsUnit,
  UpcomingAssignmentsVerticalLine,
  UpcomingAssignmentsWrapper,
} from './UpcomingAssignments.styles'
import { IAssignment } from '../../models/Assignment/Assignment'
import { getCurrentDate } from "../../Utilities/Utilities";

interface IUpcomingAssignmentsProps {
  assignments: IAssignment[]
}

export default function UpcomingAssignments(props: IUpcomingAssignmentsProps) {
  const isDueSoon = (dueDate?: Date) => {
    if (!dueDate) return false
    const today = getCurrentDate()
    const daysUntilDue = Math.ceil(
      ((dueDate as unknown as number) - (today as unknown as number)) / (1000 * 60 * 60 * 24)
    )
    return daysUntilDue <= 7
  }

  const { assignments } = props
  return (
    <UpcomingAssignmentsWrapper className="upcoming-assignments">
      <UpcomingAssignmentsTitle className="title">Upcoming Assignments</UpcomingAssignmentsTitle>
      <UpcomingAssignmentsList className="assignments">
        {assignments?.map((assignment: IAssignment) => (
          <UpcomingAssignmentsListItem
            className="assignment"
            style={{ backgroundColor: assignment.unitColor + '1A' }}
            key={`${assignment.name}-${assignment.unitCode}`}
          >
            <UpcomingAssignmentsVerticalLine
              className="vertical-line"
              style={{ backgroundColor: assignment.unitColor?? 'inherit' }}
            ></UpcomingAssignmentsVerticalLine>
            <UpcomingAssignmentsContent className="content">
              <UpcomingAssignmentsUnit
                target="_blank"
                rel="noreferrer"
                className="assignment-unit"
                href={`${process.env.REACT_APP_CANVAS_URL}/courses/${assignment.courseId}`}
              >
                <span className="unit-title">{assignment.unitCode}</span>:{' '}
                <span className="unit-name">{assignment.unitName}</span>
              </UpcomingAssignmentsUnit>

              <UpcomingAssignmentsItemTitle className="assignment-title">
                <a
                  rel="noreferrer"
                  href={`${process.env.REACT_APP_CANVAS_URL}/courses/${assignment.courseId}/assignments/${assignment.id}`}
                  target="_blank"
                >
                  {assignment.name}
                </a>
              </UpcomingAssignmentsItemTitle>

              <UpcomingAssignmentsDueDate className="due-date">
                {moment(assignment.dueAt).format('ddd, DD MMM YY')}
              </UpcomingAssignmentsDueDate>

              {isDueSoon(assignment.dueAt) && (
                <UpcomingAssignmentsStatus className="status">due soon</UpcomingAssignmentsStatus>
              )}
            </UpcomingAssignmentsContent>
          </UpcomingAssignmentsListItem>
        ))}
      </UpcomingAssignmentsList>
    </UpcomingAssignmentsWrapper>
  )
}
