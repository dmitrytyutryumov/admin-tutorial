import React from 'react'
import { CheckIcon, CloseIcon } from '../../../../../static/images'

export default function CheckTableCell({ value }) {
  return (
    <td className="table__cell">{value ? <CheckIcon /> : <CloseIcon />}</td>
  )
}
