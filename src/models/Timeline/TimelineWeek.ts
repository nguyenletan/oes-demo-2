import { IAssignment } from '../Assignment/Assignment'
import { addWeeks } from 'date-fns'

export interface ITimelineWeek {
  startDate: Date
  endDate: Date
  getEndDate: () => Date
  name: string
  assignments: IAssignment[]
  isCurrentWeek: boolean
  isUpcomingWeek: boolean
}

export default class TimeLineWeek implements ITimelineWeek {
  startDate: Date
  name: string
  assignments: IAssignment[] = []
  isCurrentWeek: boolean
  isUpcomingWeek: boolean

  get endDate(): Date {
    return addWeeks(this.startDate, 1)
  }

  getEndDate(): Date {
    return addWeeks(this.startDate, 1)
  }

  constructor(jsonData?: any) {
    this.startDate = new Date(jsonData.start_date)
    this.name = jsonData.name
    this.assignments = []
    this.isCurrentWeek = false
    this.isUpcomingWeek = false
  }
}
