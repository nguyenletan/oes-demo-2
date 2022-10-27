import React from 'react'
import {
  TimelinePopup,
  TimelinePopupWrapper,
  TimelineProgress,
  TimelineProgressWeek,
  TimelineProgressWeeks,
  TimelineProgressWeeksForMobile,
  TimelineSpinners,
  TimelineSpinnerWrapper,
  TimelineTitle,
  TimelineWrapper,
} from './Timeline.styles'
import { ITimeline } from '../../models/Timeline/TimelineModel'
import { Popover } from '@mui/material'
import { getCurrentDate, getEndDate, getShortWeekName } from '../../Utilities/Utilities'
import Spinner from './Spinner'
import { ITimelineWeek } from '../../models/Timeline/TimelineWeek'

const Timeline = (props: ITimeline) => {
  const { teachingPeriod, currentWeek, weeks } = props
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>()
  const [showPopover, setShowPopover] = React.useState<string | null>()

  const getCurrentWeekIndex = () => {
    if (!weeks) {
      return 0
    }

    const currentDate = getCurrentDate()
    if (currentDate > getEndDate(weeks[weeks.length - 1].startDate)) {
      return weeks.length
    } else if (
      getEndDate(weeks[weeks.length - 1].startDate) >= currentDate &&
      currentDate > weeks[weeks.length - 1].startDate
    ) {
      return weeks.length - 1
    }

    const index = weeks?.findIndex((week: ITimelineWeek) => {
      return currentDate <= week.startDate
    })

    return index ? index - 1 : 0
  }

  const onPinClick = (week: ITimelineWeek) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()

    setAnchorEl(e.currentTarget)
    setShowPopover(week.name)
  }

  return (
    <TimelineWrapper className="timeline">
      <TimelineTitle>
        <span className="title">TimeLine</span>
        <span className="teaching-period">{teachingPeriod} | </span>
        <span className="current-week">{currentWeek}</span>
      </TimelineTitle>
      <div className="content">
        <div className="slider">
          <TimelineSpinners className="pins">
            {weeks?.map((week: ITimelineWeek, index: number) => (
              <TimelineSpinnerWrapper key={week.name}>
                <>
                  <div className="pin-group" onClick={onPinClick(week)}>
                    {week.assignments?.map((assignment) => {
                      let color = assignment.unitColor
                      if (assignment.currentStatus === 'submitted') {
                        color = color + '45'
                      }
                      return (
                        <Spinner
                          key={`${week.name}-${assignment.unitCode}-${assignment.id}`}
                          color={color ?? 'inherit'}
                          status={assignment.currentStatus}
                        />
                      )
                    })}
                  </div>
                  <Popover
                    id={'week-' + index}
                    open={week.name === showPopover}
                    anchorEl={anchorEl}
                    onClose={() => {
                      setAnchorEl(null)
                      setShowPopover(null)
                    }}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <TimelinePopup>
                      {week.assignments?.map((assignment) => {
                        let color = assignment.unitColor
                        let pColor = 'inherit'
                        if (assignment.currentStatus === 'submitted') {
                          pColor = 'rgba(77, 77, 77, 0.65)'
                          color = color + '50'
                        } else if (assignment.currentStatus === 'overdue') {
                          color = 'red'
                        }
                        return (
                          <TimelinePopupWrapper key={`${week.name}-${assignment.unitCode}-${assignment.id}`}>
                            <Spinner color={color?? 'inherit'} status={assignment.currentStatus} />
                            <div style={{ color: pColor }}>
                              <h6 style={{ color: color?? 'inherit'}}>
                                Assignment{' '}
                                {assignment.currentStatus === 'future-due' ? 'due' : assignment.currentStatus}
                              </h6>
                              {assignment.unitCode} {assignment.name}
                            </div>
                          </TimelinePopupWrapper>
                        )
                      })}
                    </TimelinePopup>
                  </Popover>
                </>
              </TimelineSpinnerWrapper>
            ))}
          </TimelineSpinners>
          <TimelineProgress max={!weeks ? 0 : weeks?.length} value={getCurrentWeekIndex()} />
          <TimelineProgressWeeks className="labels">
            {weeks?.map((week: ITimelineWeek) => (
              <TimelineProgressWeek key={week?.name}>{week.name}</TimelineProgressWeek>
            ))}
          </TimelineProgressWeeks>
          <TimelineProgressWeeksForMobile className="labels">
            {weeks?.map((week: ITimelineWeek) => (
              <TimelineProgressWeek
                className={week.isCurrentWeek ? 'current' : week.isUpcomingWeek ? 'upcoming' : ''}
                key={week?.name}
              >
                {getShortWeekName(week.name)}
              </TimelineProgressWeek>
            ))}
          </TimelineProgressWeeksForMobile>
        </div>
      </div>
    </TimelineWrapper>
  )
}

export default Timeline
