import {
  UnitAssignmentProgress,
  UnitAssignmentTitle,
  UnitCode,
  UnitModuleTitle,
  UnitName,
  UnitProgress,
  UnitProgressValue,
  UnitProgressWrapper,
  UnitWrapper,
} from './Unit.styles'
import { IUnit } from '../../models/Units/UnitModel'
import { IAssignmentGroup } from '../../models/AssignmentGroup/AssignmentGroupModel'


const Unit = (props: IUnit) => {
  const { courseId, color, unitCode, unitName, assignmentGroups, numberOfCompletedModules, totalModules } =
    props

  return (
    <UnitWrapper className="unit" style={{ borderTop: `8px solid ${color}` }}>
      <div className="title">
        <UnitCode className="unit-code">
          <a target="_blank" rel="noreferrer" href={`${process.env.REACT_APP_CANVAS_URL}/courses/${courseId}`}>
            {unitCode}
          </a>
        </UnitCode>
        <UnitName className="unit-name">
          <a target="_blank" rel="noreferrer" href={`${process.env.REACT_APP_CANVAS_URL}/courses/${courseId}`}>
            {unitName}
          </a>
        </UnitName>
      </div>
      <div className="modules-wrapper">
        <UnitModuleTitle className="modules-title">Modules</UnitModuleTitle>
        <UnitProgressWrapper className="progress-wrapper">
          <UnitProgress max={totalModules} value={numberOfCompletedModules} />
          <UnitProgressValue className="progress-value">
            {numberOfCompletedModules}/{totalModules}
          </UnitProgressValue>
        </UnitProgressWrapper>
      </div>

      <div className="assignments-wrapper">
        <UnitAssignmentTitle className="assignment-title">Assignments</UnitAssignmentTitle>
        <UnitAssignmentProgress className="assignment-progress">
          {assignmentGroups?.map((assignmentGroup: IAssignmentGroup) => (
            <span
              className={assignmentGroup.isSubmitted ? 'submitted' : ''}
              key={assignmentGroup.name}
              style={{ width: assignmentGroup.weight + '%' }}
            >
              {assignmentGroup.weight}%
            </span>
          ))}
        </UnitAssignmentProgress>
      </div>
    </UnitWrapper>
  )
}

export default Unit
