import React from 'react'
import { getColumnCells } from './components'
import './index.css'
import { getColumns, getUsers, normalizeTable, sortUsers } from './utils'

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

  console.log(columns)

  const buildTable = React.useCallback(async () => {
    const newColumns = await getColumns()
    const newUsers = await getUsers()
    setColumns(newColumns)
    setUsers(newUsers)
    setTable(normalizeTable(Object.keys(newColumns), newUsers))
  }, [])

  React.useEffect(() => {
    buildTable()
  }, [columns.length])

  return (
    <ul className="table">
      {table.map((column) => {
        return (
          <div className="table__column" key={column}>
            {getColumnCells(column, onClick)}
          </div>
        )
      })}
    </ul>
  )
}
