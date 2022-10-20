import CheckTableCell from './CheckTableCell'
import CountryTableCell from './CountryTableCell'
import RatingTableCell from './RatingTableCell'
import TableCell from './TableCell'

const CELLS = {
  country: CountryTableCell,
  rating: RatingTableCell,
  bought: CheckTableCell,
}

export const getRowCells = ({ columns, purchase }) => {
  return columns.map(({ id: columnId }) => {
    const Cell = CELLS[columnId] || TableCell
    return <Cell value={purchase[columnId]} key={columnId} />
  })
}

export { CheckTableCell, CountryTableCell, RatingTableCell, TableCell }
