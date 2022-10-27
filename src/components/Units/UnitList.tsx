import Unit from './Unit'
import { UnitsWrapper } from './Unit.styles'
import { IUnit } from '../../models/Units/UnitModel'

export interface IUnitListProps {
  units: IUnit[]
}

const UnitList = (props: IUnitListProps) => {
  const { units } = props

  const gridTemplateCols = units.map(() => 'minmax(0, 1fr)').join(' ')

  return (
    <UnitsWrapper className="units" style={{ gridTemplateColumns: gridTemplateCols }}>
      {units.map((unit: IUnit) => (
        <Unit key={unit.unitCode} {...unit} />
      ))}
    </UnitsWrapper>
  )
}

export default UnitList
