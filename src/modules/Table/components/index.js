import CheckTableCell from './CheckTableCell'
import CountryTableCell from './CountryTableCell'
import RatingTableCell from './RatingTableCell'
import TableCell from './TableCell'

const CELLS = {
  country: CountryTableCell,
  rating: RatingTableCell,
  bought: CheckTableCell,
}

export const getRowCells = (column) => {
  return column.map((cell) => {
    const [key, value] = cell
    const Cell = CELLS[key.toLowerCase()] || TableCell

    if (key === 'id') {
      return
    }

    return <Cell value={value} key={key} />
  })
}

export { CheckTableCell, CountryTableCell, RatingTableCell, TableCell }
