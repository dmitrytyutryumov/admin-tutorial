import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import * as d3 from 'd3'

import { getPurchases } from '../../store/selectors'
import { BarChart as drawBarChart } from './components/BarChart'
import { getCurrencyField } from '../../utils/Purchases'

import './Chart.css'

export function Chart() {
  const purchases = useSelector(getPurchases)
  const svgRef = useRef(null)
  const svgWidth = 950
  const svgHeight = 650

  useEffect(() => {
    if (purchases.length == 0 || svgRef.current === null) {
      return
    }

    drawBarChart(svgRef.current, purchases, {
      x: (purchase) => purchase.gameName,
      y: (purchase) => getCurrencyField(purchase.totalWinnings)[0],
      xDomain: d3.groupSort(
        purchases,
        ([purchase]) => -purchase.totalWinnings,
        (purchase) => purchase.gameName
      ), // sort by descending frequency
      yFormat: '$',
      yLabel: '↑ Total Winnings',
      width: svgWidth,
      height: svgHeight,
      color: 'steelblue',
    })
  }, [purchases.length])

  return (
    <div className="chart">
      <svg ref={svgRef} width={svgWidth} height={svgHeight} />
    </div>
  )
}
