import React from 'react'
import CountryTableCell from './components/CountryTableCell'
import TableCell from './components/TableCell'
import { getColumns, getUsers } from './constants'
import './index.css'
import { normalizeTable } from './utils'

export function Table() {
  const [table, setTable] = React.useState([])

  React.useEffect(() => {
    setTable(normalizeTable(getColumns(), getUsers()))
  }, [])

  return (
    <ul className="table">
      {table.map((column) => {
        return (
          <div className="table__column" key={column}>
            {column.map((cell, idx) => {
              if (column[0].toLowerCase() === 'country' && idx !== 0) {
                return (
                  <CountryTableCell
                    countryName={cell[1]}
                    icon={cell[0]}
                    key={idx}
                  />
                )
              }
              return <TableCell value={cell} key={idx} />
            })}
          </div>
        )
      })}
    </ul>
  )
}
