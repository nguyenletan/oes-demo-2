import {
  TimelineSkeletonProgressWeeks,
  TimelineSkeletonProgress,
  TimelineSkeletonTitle,
  TimelineSkeletonWrapper,
  Wrapper,
  TimelineSkeletonProgressWeek,
  UnitsSkeletonWrapper,
  UnitSkeletonWrapper,
  UnitCodeSkeleton,
  UnitModuleTitleSkeleton,
  UnitProgressSkeletonWrapper,
  UnitProgressSkeleton,
  UnitTitleSkeleton,
  UnitAssignmentTitleSkeleton,
  UnitAssignmentProgressSkeleton,
  UpcomingAssignmentsSkeletonWrapper,
  UpcomingAssignmentsTitleSkeleton,
  UpcomingDiscussionSkeleton,
  UpcomingAssignmentsListSkeleton,
  UpcomingAssignmentsListItemSkeleton,
  DiscussionBoardSkeletonWrapper,
  DiscussionBoardTileSkeleton,
  DiscussionBoardListSkeleton, DiscussionBoardListItemSkeleton
} from "./Skeleton.styles";

const Skeleton = () => {
  return (
    <Wrapper>
      <TimelineSkeletonWrapper>
        <TimelineSkeletonTitle className="skeleton-box" />
        <TimelineSkeletonProgress className="skeleton-box" />
        <TimelineSkeletonProgressWeeks>
          <TimelineSkeletonProgressWeek className="skeleton-box" />
          <TimelineSkeletonProgressWeek className="skeleton-box" />
          <TimelineSkeletonProgressWeek className="skeleton-box" />
          <TimelineSkeletonProgressWeek className="skeleton-box" />
          <TimelineSkeletonProgressWeek className="skeleton-box" />
          <TimelineSkeletonProgressWeek className="skeleton-box" />
          <TimelineSkeletonProgressWeek className="skeleton-box" />
          <TimelineSkeletonProgressWeek className="skeleton-box" />
          <TimelineSkeletonProgressWeek className="skeleton-box" />
          <TimelineSkeletonProgressWeek className="skeleton-box" />
        </TimelineSkeletonProgressWeeks>
      </TimelineSkeletonWrapper>

      <UnitsSkeletonWrapper>
        {[...Array(4)].map((_, index) => (
          <UnitSkeletonWrapper key={index}>
            <div>
              <UnitCodeSkeleton className="skeleton-box" />
              <UnitTitleSkeleton className="skeleton-box" />
            </div>

            <UnitModuleTitleSkeleton className="skeleton-box" />
            <UnitProgressSkeletonWrapper>
              <UnitProgressSkeleton className="skeleton-box" />
            </UnitProgressSkeletonWrapper>

            <div>
              <UnitAssignmentTitleSkeleton className="skeleton-box" />
              <UnitAssignmentProgressSkeleton>
                <span className="skeleton-box" />
                <span className="skeleton-box" />
                <span className="skeleton-box" />
                <span className="skeleton-box" />
              </UnitAssignmentProgressSkeleton>
            </div>
          </UnitSkeletonWrapper>
        ))}
      </UnitsSkeletonWrapper>
      <UpcomingDiscussionSkeleton>
        <UpcomingAssignmentsSkeletonWrapper>
          <UpcomingAssignmentsTitleSkeleton className="skeleton-box" />
          <UpcomingAssignmentsListSkeleton>
            <UpcomingAssignmentsListItemSkeleton className="skeleton-box" />
            <UpcomingAssignmentsListItemSkeleton className="skeleton-box" />
            <UpcomingAssignmentsListItemSkeleton className="skeleton-box" />
          </UpcomingAssignmentsListSkeleton>
        </UpcomingAssignmentsSkeletonWrapper>

        <DiscussionBoardSkeletonWrapper>
          <DiscussionBoardTileSkeleton className="skeleton-box"/>


          <DiscussionBoardListSkeleton>
            <DiscussionBoardListItemSkeleton className="skeleton-box"/>
            <DiscussionBoardListItemSkeleton className="skeleton-box"/>
            <DiscussionBoardListItemSkeleton className="skeleton-box"/>
            <DiscussionBoardListItemSkeleton className="skeleton-box"/>
            <DiscussionBoardListItemSkeleton className="skeleton-box"/>
          </DiscussionBoardListSkeleton>
        </DiscussionBoardSkeletonWrapper>
      </UpcomingDiscussionSkeleton>
    </Wrapper>
  )
}

export default Skeleton
