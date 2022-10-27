export interface IAssignment {
  id: number
  name: string
  dueAt: Date
  isSubmitted: boolean
  unitCode?: string
  unitName?: string
  unitColor: string | null
  courseId?: string
  currentStatus: "submitted" | "future-due" | "overdue";
}

export default class AssignmentModel implements IAssignment {
  dueAt: Date = new Date()
  id: number = 0
  isSubmitted: boolean = false
  name: string = ''
  unitCode?: string
  unitName?: string
  unitColor: string | null
  courseId?: string
  currentStatus: "submitted" | "future-due" | "overdue";

  mapped(jsonData?: any) {
    if (jsonData) {
      this.id = jsonData.assignment_id
      this.name = jsonData.assignment_name
      this.dueAt = new Date(jsonData.due_at)
      this.isSubmitted = jsonData.submitted
    }
  }

  constructor(jsonData?: any, unitCode?: string, unitName?: string, courseId?: string) {
    this.unitName = unitName
    this.unitCode = unitCode
    this.courseId = courseId
    this.currentStatus = "future-due"
    this.unitColor = null
    this.mapped(jsonData)
  }
}
