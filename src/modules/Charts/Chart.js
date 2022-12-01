import { useRef, useEffect } from 'react'
import * as d3 from 'd3'

import { getPurchases } from '../../store/selectors'
import { BarChart as drawBarChart } from './components/BarChart'
import { getCurrencyField } from '../../utils/Purchases'

import './Chart.css'
import { connect } from 'react-redux'

const WIDTH = 950
const HEIGHT = 650

const DEFAULT_CHART_OPTIONS = {
  yFormat: '$',
  yLabel: '↑ Total Winnings',
  width: WIDTH,
  height: HEIGHT,
  color: 'steelblue',
}

export function ChartView({ purchases }) {
  const svgRef = useRef(null)

  useEffect(() => {
    if (!purchases.length || !svgRef.current) return

    drawBarChart(svgRef.current, purchases, {
      x: ({ gameName }) => gameName,
      y: ({ totalWinnings }) => getCurrencyField(totalWinnings)[0],
      xDomain: d3.groupSort(
        purchases,
        ([{ totalWinnings }]) => -totalWinnings,
        ({ gameName }) => gameName
      ), // sort by descending frequency
      ...DEFAULT_CHART_OPTIONS,
    })
  }, [purchases])

  return (
    <div className="chart">
      <svg ref={svgRef} width={WIDTH} height={HEIGHT} />
    </div>
  )
}

const MapStatetoProps = (state) => ({
  purchases: getPurchases(state),
})

export const Chart = connect(MapStatetoProps)(ChartView)
