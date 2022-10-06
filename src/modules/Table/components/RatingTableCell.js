import React from 'react'
import { ReactComponent as StarIcon } from '../../../static/images/star.svg'

export default function RatingTableCell({ value }) {
  return (
    <div className="table__cell">
      {Array.from({ length: value }).map((star, idx) => (
        <StarIcon key={idx} />
      ))}
    </div>
  )
}
