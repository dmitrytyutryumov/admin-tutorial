import React from 'react'

export default function TableCell({ value, onClick, ...props }) {
  return (
    <div className="table__cell" onClick={onClick} {...props}>
      {value}
    </div>
  )
}
