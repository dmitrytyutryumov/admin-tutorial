import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getTableCell } from './utils'

export function TableBody({ purchases, columns }) {
  const navigate = useNavigate()

  const handeClick = (id) => () => navigate(`/purchases/${id}`)

  return (
    <tbody>
      {purchases.map((purchase, id) => (
        <tr key={id} onClick={handeClick(purchase.id)}>
          {getTableCell({ columns: columns, purchase: purchase })}
        </tr>
      ))}
    </tbody>
  )
}
