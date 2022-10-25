import React from 'react'
import { StarIcon } from '../../../../../static/images'

export default function RatingTableCell({ value }) {
  return (
    <td className="table__cell">
      {Array.from({ length: value }).map((star, idx) => (
        <StarIcon key={idx} />
      ))}
    </td>
  )
}
