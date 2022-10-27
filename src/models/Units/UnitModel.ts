import AssignmentGroup, { IAssignmentGroup } from '../AssignmentGroup/AssignmentGroupModel'

export interface IUnit {
  color: string | null
  unitCode?: string
  unitName?: string
  courseId?: string
  numberOfCompletedModules: number
  totalModules: number
  assignmentGroups?: IAssignmentGroup[]
}

export default class UnitModel implements IUnit {
  assignmentGroups?: IAssignmentGroup[]
  color: string | null = null
  numberOfCompletedModules: number = 0
  totalModules: number = 0
  unitCode?: string
  unitName?: string
  courseId?: string

  mapped(jsonData?: any) {
    if (jsonData) {
      this.color = jsonData.color
      this.unitCode = jsonData.unit_code
      this.unitName = jsonData.unit_name
      this.numberOfCompletedModules = jsonData.completed_modules
      this.totalModules = jsonData.total_modules
      this.courseId = jsonData.course_id

      this.assignmentGroups = jsonData.assignment_groups?.map((assignment: any) => {
        let assignmentGroup = new AssignmentGroup(assignment)
        assignmentGroup.unitCode = this.unitCode
        assignmentGroup.unitName = this.unitName
        assignmentGroup.courseId = this.courseId
        return assignmentGroup
      })
    }
  }

  constructor(jsonData?: any) {
    if (jsonData) {
      this.mapped(jsonData)
    }
  }
}
