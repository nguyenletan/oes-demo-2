import { getWeek } from "date-fns";
import { UnitColors } from '../../constant/Colors'
import { ITimelineWeek } from "./TimelineWeek";
import { getCurrentDate } from "../../Utilities/Utilities";


export interface ITimeline {
  teachingPeriod: string
  currentWeek: string
  weeks: ITimelineWeek[]
}


export default class TimelineModel implements ITimeline {
  currentWeek: string = ''
  teachingPeriod: string = ''
  weeks: ITimelineWeek[] = []

  isCurrentWeek(week: ITimelineWeek): boolean {
    if (this.weeks) {
      return getWeek(getCurrentDate(), { weekStartsOn: 1 }) === getWeek(new Date(week.startDate), { weekStartsOn: 1 })
    }
    return false
  }

  isUpComingWeek(week: ITimelineWeek): boolean {
    if (this.weeks) {
      return getWeek(getCurrentDate(), { weekStartsOn: 1 }) < getWeek(new Date(week.startDate), { weekStartsOn: 1 })
    }
    return false
  }

  getCurrentWeek(): string{
    if (this.weeks) {
      for (let i = 0; i < this.weeks.length; i++) {
        let week = this.weeks[i]
        if (this.isCurrentWeek(week)) {
          return this.weeks[i].name
        }
      }
    }

    return ''
  }

  mapped(jsonData?: any) {
    this.teachingPeriod = jsonData?.teaching_period
    this.weeks = jsonData?.teaching_period_weeks.map((week: any) => {
      return {
        name: week.name.toLowerCase() === 'week c' ? 'Consolidation' : week.name,
        startDate: new Date(week.startdate),
        assignments: [],
        isUpcomingWeek: false,
        isCurrentWeek: false,
      }
    })

    this.weeks = this.weeks.sort((a: any, b: any) => { return a.startDate.getTime() - b.startDate.getTime() })
    this.currentWeek = this.getCurrentWeek()
    for (let i = 0; i < jsonData?.units?.length; i++) {
      if (this.weeks) {
        for (let week of this.weeks) {
          week.isCurrentWeek = this.isCurrentWeek(week)
          week.isUpcomingWeek = this.isUpComingWeek(week)
          if (!week.assignments) {
            week.assignments = []
          }

          for (let assignmentGroup of jsonData?.units[i].assignment_groups) {
            for (let assignment of assignmentGroup.assignments) {
              if (
                getWeek(new Date(assignment.due_at), { weekStartsOn: 1 }) ===
                getWeek(new Date(week.startDate), { weekStartsOn: 1 })
              ) {
                week.assignments.push({
                  courseId: "",
                  isSubmitted: false,
                  unitColor: UnitColors[i], //jsonData?.units[i].color,
                  currentStatus: assignment.submitted
                    ? 'submitted'
                    : new Date(assignment.due_at) > getCurrentDate()
                    ? 'future-due'
                    : 'overdue',
                  unitCode: jsonData?.units[i].unit_code,
                  unitName: jsonData?.units[i].unit_name,
                  name: assignment.assignment_name,
                  id: assignment.assignment_id,
                  dueAt: assignment.due_at
                })
              }
            }
          }
        }
      }
    }
  }

  constructor(jsonData?: any) {
    if (jsonData) {
      this.mapped(jsonData)
    }
  }
}
