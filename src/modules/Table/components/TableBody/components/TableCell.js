import React from 'react'

export default function TableCell({ value, onClick, ...props }) {
  return (
    <td className="table__cell" onClick={onClick} {...props}>
      {value}
    </td>
  )
}
