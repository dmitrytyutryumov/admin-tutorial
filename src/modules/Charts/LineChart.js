import React from 'react'
import { useSelector } from 'react-redux'
import { getPurchases } from '../../store/selectors'

export function LineChart() {
  const purchases = useSelector(getPurchases)
  console.log(purchases)
  return <div></div>
}
