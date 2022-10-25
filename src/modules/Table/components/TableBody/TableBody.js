import React from 'react'
import { getTableCell } from './utils'

export function TableBody({ purchases, columns }) {
  return (
    <tbody>
      {purchases.map((purchase, idx) => (
        <tr key={idx}>
          {getTableCell({ columns: columns, purchase: purchase })}
        </tr>
      ))}
    </tbody>
  )
}
