import React from 'react'
import CheckTableCell from './components/CheckTableCell'
import CountryTableCell from './components/CountryTableCell'
import RatingTableCell from './components/RatingTableCell'
import TableCell from './components/TableCell'
import { getColumns, getUsers } from './constants'
import './index.css'
import { normalizeTable, sortUsers } from './utils'

const cells = {
  country: CountryTableCell,
  rating: RatingTableCell,
  bought: CheckTableCell,
}

export function Table() {
  const [columns, setColumns] = React.useState([])
  const [users, setUsers] = React.useState([])
  const [table, setTable] = React.useState([])
  const [order, setOrder] = React.useState(-1)

  const onClick = (event) => {
    const newOrder = order * -1
    const field = event.target.dataset.target
    const _users = sortUsers({
      users,
      field: columns[[field]],
      order: newOrder,
    })
    setOrder(newOrder)
    setUsers(_users)
    setTable(normalizeTable(Object.keys(columns), _users))
  }

  React.useEffect(() => {
    setColumns(getColumns())
    setUsers(getUsers())
    setTable(normalizeTable(Object.keys(columns), users))
  }, [columns.length])

  return (
    <section className="table-section">
      <ul className="table">
        {table.map((column) => {
          return (
            <div className="table__column" key={column}>
              {column.map((cell, idx) => {
                const Cell = cells[column[0].toLowerCase()]
                if (idx !== 0 && Cell) {
                  return <Cell value={cell} key={idx} />
                }
                return (
                  <TableCell
                    value={cell}
                    key={idx}
                    data-target={cell}
                    onClick={idx === 0 ? onClick : null}
                  />
                )
              })}
            </div>
          )
        })}
      </ul>
    </section>
  )
}
