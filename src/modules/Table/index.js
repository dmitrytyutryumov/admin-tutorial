import React from 'react'
import { getColumnCells } from './components'
import './index.css'
import { getColumns, getUsers, normalizeTable, sortUsers } from './utils'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ReactComponent as LoadingIcon } from '../../static/images/loading.svg'

export function Table() {
  const [columns, setColumns] = React.useState([])
  const [users, setUsers] = React.useState([])
  const [table, setTable] = React.useState([])
  const [order, setOrder] = React.useState(-1)
  const [sortField, setSortField] = React.useState(null)
  const [hasMore, setHasMore] = React.useState(false)

  const onClick = (event) => {
    const newOrder = order * -1
    const field = event.target.dataset.target
    const _users = sortUsers({
      users,
      field: columns[[field]],
      order: newOrder,
    })
    setOrder(newOrder)
    setSortField(field)
    setUsers(_users)
    setTable(normalizeTable(Object.keys(columns), _users))
  }

  const fetchUsers = React.useCallback(async () => {
    setHasMore(false)
    let newUsers = [...users, ...(await getUsers())]
    if (sortField !== null) {
      console.log(newUsers, sortField, order)
      newUsers = sortUsers({
        users: newUsers,
        field: columns[[sortField]],
        order,
      })
    }
    setUsers(newUsers)
  })

  React.useEffect(() => {
    async function fetchData() {
      setColumns(await getColumns())
      setUsers(await getUsers())
    }
    fetchData()
  }, [])

  React.useEffect(() => {
    setTable(normalizeTable(Object.keys(columns), users))
    setHasMore(true)
  }, [users.length])

  return (
    <InfiniteScroll
      dataLength={table.length > 0 ? table[0].length : 0} // This is important field to render the next data
      next={fetchUsers}
      hasMore={hasMore}
      loader={<LoadingIcon />}
    >
      <ul className="table">
        {table.map((column) => {
          return (
            <div className="table__column" key={column}>
              {getColumnCells(column, onClick)}
            </div>
          )
        })}
      </ul>
    </InfiniteScroll>
  )
}
