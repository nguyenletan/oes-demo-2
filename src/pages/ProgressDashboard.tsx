import Timeline from '../components/Timeline/Timeline'
import UnitList from '../components/Units/UnitList'
import UpcomingAssignments from '../components/UpcomingAssignments/UpcomingAssignments'
import DiscussionBoard from '../components/DiscussionBoard/DiscussionBoard'
import { ProgressDashboardWrapper, UpcomingDiscussion } from './ProgressDashboard.styles'
import { useSearchParams } from "react-router-dom";
import { fetchStudentProgressByStudentId } from '../api/StudentProgressTracking'
import { useQuery } from 'react-query'
import TimelineModel, { ITimeline } from '../models/Timeline/TimelineModel'
import UnitModel, { IUnit } from '../models/Units/UnitModel'
import { UnitColors } from '../constant/Colors'
import AssignmentModel, { IAssignment } from '../models/Assignment/Assignment'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import { getCurrentDate } from '../Utilities/Utilities'
import { IAssignmentGroup } from '../models/AssignmentGroup/AssignmentGroupModel'
import Skeleton from '../components/Skeletons/Skeleton'
import { DiscussionTopic, IDiscussionTopic } from "../models/DiscussionTopic/DiscussionTopic";


const ProgressDashboard = () => {
  const [searchParams] = useSearchParams();

  let studentId  = searchParams.get('student_id')

  const { data, isError, isLoading, error } = useQuery<any, Error>(
    ['studentProgressData', studentId],
    async () => {
      let result: string | any[] = []

      if(studentId) {
        result = await fetchStudentProgressByStudentId(studentId!)
      }
      let timeline: ITimeline = new TimelineModel(result[0])
      let units: IUnit[] = []
      let discussionTopics: IDiscussionTopic[] = []
      let colorIndex = 0
      ///TODO: find a better way to do this
      for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].units.length; j++) {
          if (units.findIndex((unit) => unit.unitCode === result[i].units[j].unit_code) < 0) {
            let unitModel: IUnit = new UnitModel(result[i].units[j])
            unitModel.color = unitModel.color ?? UnitColors[colorIndex]
            colorIndex++
            units.push(unitModel)
          }

          for(let item of result[i].units[j].discussion_topics) {
            // topic.unitId = result[i].units[j].courseId
            let topic:IDiscussionTopic  = new DiscussionTopic(item)
            topic.courseId = result[i].units[j].course_id
            topic.unitCode = result[i].units[j].unit_code
            topic.color = result[i].units[j].color ?? UnitColors[colorIndex]
            discussionTopics.push(topic)
          }

        }
      }

      let upcomingAssignments = units.flatMap((unit: IUnit) => {
        return unit.assignmentGroups?.flatMap((assignmentGroup) => {
          assignmentGroup.lastedSubmittedDate = assignmentGroup.assignments?.reduce((prev, current) => {
            return prev.dueAt > current.dueAt ? prev : current
          }).dueAt

          return assignmentGroup.assignments?.map((assignment) => {
            let assignmentModel: IAssignment = new AssignmentModel()
            assignmentModel.unitCode = unit.unitCode
            assignmentModel.unitName = unit.unitName
            assignmentModel.unitColor = unit.color ?? 'inherit'
            assignmentModel.dueAt = assignment.dueAt
            assignmentModel.id = assignment.id
            assignmentModel.name = assignment.name
            assignmentModel.isSubmitted = assignment.isSubmitted
            assignmentModel.courseId = unit.courseId
            if (timeline && timeline.weeks && assignmentModel && assignmentModel.dueAt) {
              for (let week of timeline.weeks) {
                if (
                  week.startDate <= assignmentModel.dueAt &&
                  week.endDate > assignmentModel.dueAt &&
                  week.assignments
                ) {
                  week.assignments.push(assignmentModel)
                }
              }
            }
            return assignmentModel
          })
        })
      })

      for (const item of units) {
        item.assignmentGroups?.sort((a: IAssignmentGroup, b: IAssignmentGroup) => {
          if (a.lastedSubmittedDate && b.lastedSubmittedDate) {
            return a.lastedSubmittedDate.getTime() - b.lastedSubmittedDate.getTime()
          }
          return 0
        })

        //console.log(item)
      }

      upcomingAssignments = upcomingAssignments
        .filter(
          (assignment: IAssignment | undefined) =>
            !assignment?.isSubmitted && assignment?.dueAt && assignment.dueAt > getCurrentDate()
        )
        .sort((x: IAssignment | undefined, y: IAssignment | undefined) => {
          if (x?.dueAt && y?.dueAt) {
            return x.dueAt.getTime() - y.dueAt.getTime()
          }
          return 0
        })

      console.log('formatted data', {
        timeline: timeline,
        units: units,
        upcomingAssignments: upcomingAssignments as IAssignment[],
        discussions: discussionTopics,
      })

      return {
        timeline: timeline,
        units: units,
        upcomingAssignments: upcomingAssignments as IAssignment[],
        discussions: discussionTopics,
      }
    },
    { refetchOnWindowFocus: false, refetchOnReconnect: false, retry: false }
  )

  if (isLoading) {
    return <Skeleton />
  }

  if (isError) {
    return (
      <>
        <Skeleton />
        <ErrorMessage message="The progress tracker is offline" internalErrorMessage={error.message} />
      </>
    )
  }

  return (
      <ProgressDashboardWrapper className="progress-dashboard">
        <Timeline
          teachingPeriod={data!.timeline?.teachingPeriod}
          currentWeek={data!.timeline?.currentWeek}
          weeks={data!.timeline?.weeks}
        />

        <UnitList units={data!.units} />

        <UpcomingDiscussion className="upcoming-discussion">
          <UpcomingAssignments assignments={data!.upcomingAssignments} />
          <DiscussionBoard discussions={data!.discussions} />
        </UpcomingDiscussion>
      </ProgressDashboardWrapper>
  )
}

export default ProgressDashboard
