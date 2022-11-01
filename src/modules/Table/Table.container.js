import { useEffect, useRef } from 'react'
import { getPurchasesState } from '../../store/selectors'
import * as purchasesActions from '../../store/actions'
import { TableView } from './Table.view'

import './index.css'
import { connect } from 'react-redux'
import { useInfinityLoader } from '../../hooks'

function TableContainer({
  columns,
  purchases,
  onDrop,
  onSort,
  loadData,
  updatePurchases,
}) {
  const ref = useRef()
  const [loading] = useInfinityLoader({
    ref,
    onLoadMore: updatePurchases,
  })

  useEffect(() => {
    loadData()
  }, [])

  return (
    <TableView
      ref={ref}
      columns={columns}
      purchases={purchases}
      loading={loading}
      onDrop={onDrop}
      onSort={onSort}
    />
  )
}

const mapStatetoProps = (state) => {
  const { columns, purchases } = getPurchasesState(state)
  return { columns, purchases }
}

const mapDispatchToProps = (dispatch) => ({
  onDrop: (item) => {
    dispatch(purchasesActions.moveColumnSaga(item))
  },
  onSort: (event) => {
    dispatch(purchasesActions.sortPurchases(event.target.dataset.target))
  },
  loadData: () => dispatch(purchasesActions.loadTableDataSaga()),
  updatePurchases: () => {
    dispatch(purchasesActions.addPurchasesSaga())
  },
})

export default connect(mapStatetoProps, mapDispatchToProps)(TableContainer)
