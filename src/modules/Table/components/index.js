import CheckTableCell from './CheckTableCell'
import CountryTableCell from './CountryTableCell'
import RatingTableCell from './RatingTableCell'
import TableCell from './TableCell'

const CELLS = {
  country: CountryTableCell,
  rating: RatingTableCell,
  bought: CheckTableCell,
}

export const getColumnCells = ({ column, sortHandler }) => {
  return column.map((cell, idx) => {
    const Cell = CELLS[column[0].toLowerCase()]

    if (idx !== 0 && Cell) {
      return <Cell value={cell} key={idx} />
    }
    return (
      <TableCell
        value={cell}
        key={idx}
        data-target={cell}
        onClick={idx === 0 ? sortHandler : null}
      />
    )
  })
}

export { CheckTableCell, CountryTableCell, RatingTableCell, TableCell }
