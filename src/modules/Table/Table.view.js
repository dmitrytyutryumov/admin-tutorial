import { forwardRef } from 'react'
import { LoadingIcon } from '../../static/images/'
import { TableHead, TableBody, Search } from './components'

import './index.css'

export const TableView = forwardRef(
  ({ columns, purchases, loading, onDrop, onSort }, ref) => (
    <>
      <Search />
      <table ref={ref} className="table">
        <caption>Purchases history</caption>
        <TableHead columns={columns} onDrop={onDrop} onSort={onSort} />
        <TableBody columns={columns} purchases={purchases} />
        {loading && <LoadingIcon />}
      </table>
    </>
  )
)

TableView.displayName = 'TableView'
