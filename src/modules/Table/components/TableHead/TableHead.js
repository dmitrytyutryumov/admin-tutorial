import React from 'react'
import { TableHeadCell } from './components/TableHeadCell'

export function TableHead({ columns, onSort, onDrop, ...props }) {
  return (
    <thead className="table__head" {...props}>
      <tr>
        {columns.map(({ verbose, id }, index) => {
          return (
            <TableHeadCell
              key={id}
              index={index}
              id={id}
              data-target={id}
              onClick={onSort}
              onDrop={onDrop}
            >
              {verbose}
            </TableHeadCell>
          )
        })}
      </tr>
    </thead>
  )
}
