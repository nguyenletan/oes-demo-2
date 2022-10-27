import AssignmentModel, { IAssignment } from '../Assignment/Assignment'

export interface IAssignmentGroup {
  assignments: IAssignment[]
  name: string
  weight: number
  isSubmitted: boolean
  unitName?: string
  unitCode?: string
  courseId?: string
  lastedSubmittedDate: Date
}

export default class AssignmentGroup implements IAssignmentGroup {
  get isSubmitted(): boolean {
    return this.assignments ? this.assignments.every((assignment) => assignment.isSubmitted) : false
  }
  assignments: IAssignment[] = []
  name: string = ''
  weight: number = 0
  unitName?: string
  unitCode?: string
  courseId?: string
  lastedSubmittedDate: Date = new Date()

  mapped(jsonData?: any) {
    if (jsonData) {
      this.name = jsonData.assignment_group_name
      this.weight = jsonData.weight_pct
      this.assignments = jsonData.assignments?.map((assignment: any) => {
        let assignmentModel = new AssignmentModel(assignment, this.unitCode, this.unitName)
        assignmentModel.unitCode = this.unitCode
        assignmentModel.unitName  = this.unitName
        assignmentModel.courseId = this.courseId
        return assignmentModel
      })
    }
  }

  constructor(jsonData?: any) {
    this.mapped(jsonData)
  }
}
