import React from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesState } from '../../store/selectors'
import * as purchasesActions from '../../store/actions'
import { useInfinityLoader } from '../InfinityScroll/hooks'
import { TableView } from './Table.view'

export function TableContainer() {
  const ref = React.useRef()
  const dispatch = useDispatch()
  const { columns, purchases } = useSelector(getPurchasesState)
  const updatePurchases = () => {
    dispatch(purchasesActions.addPurchasesSaga())
  }

  const [loading] = useInfinityLoader({
    ref: ref,
    onLoadMore: updatePurchases,
  })

  const sortHandler = (event) => {
    dispatch(purchasesActions.sortPurchases(event.target.dataset.target))
  }

  React.useEffect(() => {
    dispatch(purchasesActions.loadTableDataSaga())
  }, [])

  const onDrop = (item) => {
    dispatch(purchasesActions.moveColumnSaga(item))
  }
  return (
    <TableView
      ref={ref}
      columns={columns}
      purchases={purchases}
      loading={loading}
      onDrop={onDrop}
      onSort={sortHandler}
    />
  )
}
