import CheckTableCell from './components/CheckTableCell'
import CountryTableCell from './components/CountryTableCell'
import RatingTableCell from './components/RatingTableCell'
import TableCell from './components/TableCell'

const CELLS = {
  country: CountryTableCell,
  rating: RatingTableCell,
  bought: CheckTableCell,
}

export const getTableCell = ({ columns, purchase }) => {
  return columns.map(({ id: columnId }) => {
    const Cell = CELLS[columnId] || TableCell
    return <Cell value={purchase[columnId]} key={columnId} />
  })
}
