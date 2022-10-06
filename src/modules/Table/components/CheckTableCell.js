import React from 'react'
import { ReactComponent as CheckIcon } from '../../../static/images/check.svg'
import { ReactComponent as UncheckIcon } from '../../../static/images/x.svg'

export default function CheckTableCell({ value }) {
  return (
    <div className="table__cell">{value ? <CheckIcon /> : <UncheckIcon />}</div>
  )
}
