import React from 'react'
import { getRowCells } from './components'
import './index.css'
import { ReactComponent as LoadingIcon } from '../../static/images/loading.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesState } from '../../store/selectors'
import { purchasesActions } from '../../store/reducers'
import { useInfinityLoader } from '../InfinityScroll/hooks'
import {
  addPurchasesAction,
  loadTableDataAction,
  moveColumnAction,
} from '../../store/sagas'
import TableHeadCell from './components/TableHeadCell'

export function Table() {
  const ref = React.useRef()
  const dispatch = useDispatch()
  const { columns, purchases } = useSelector(getPurchasesState)
  const updatePurchases = () => {
    dispatch(addPurchasesAction())
  }

  const [loading, stopScrolling] = useInfinityLoader({
    ref: ref,
    onLoadMore: updatePurchases,
  })

  const sortHandler = (event) => {
    dispatch(purchasesActions.sort(event.target.dataset.target))
  }

  React.useEffect(() => {
    dispatch(loadTableDataAction())
  }, [])

  if (purchases.length >= 200) {
    stopScrolling()
  }

  const onDrop = (item) => {
    dispatch(moveColumnAction(item))
  }

  return (
    <table ref={ref} className="table">
      <caption>Purchases history</caption>
      <thead className="table__head">
        <tr>
          {columns.map(({ verbose, id }, index) => {
            return (
              <TableHeadCell
                key={id}
                index={index}
                id={id}
                data-target={id}
                onClick={sortHandler}
                onDrop={onDrop}
              >
                {verbose}
              </TableHeadCell>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {purchases.map((purchase, idx) => (
          <tr key={idx}>
            {getRowCells({ columns: columns, purchase: purchase })}
          </tr>
        ))}
      </tbody>
      {loading && <LoadingIcon />}
    </table>
  )
}
