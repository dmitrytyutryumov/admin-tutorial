import React from 'react'
import { getColumnCells } from './components'
import './index.css'
import { ReactComponent as LoadingIcon } from '../../static/images/loading.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getPuschases, getTable } from '../../store/selectors'
import {
  fetchTableData,
  addPurchases,
  purchasesActions,
} from '../../store/reducers'
import { useInfinityLoader } from '../InfinityScroll/hooks'

export function Table() {
  const ref = React.useRef()
  const dispatch = useDispatch()
  const table = useSelector(getTable)
  const { purchases } = useSelector(getPuschases)

  const updatePurchases = () => {
    console.log('updateUsers')
    dispatch(addPurchases())
  }

  const [loading, stopScrolling] = useInfinityLoader({
    ref: ref,
    onLoadMore: updatePurchases,
  })

  const sortHandler = (event) => {
    dispatch(purchasesActions.sort(event.target.dataset.target))
  }

  React.useEffect(() => {
    dispatch(fetchTableData())
  }, [])

  if (purchases.length >= 50) {
    stopScrolling()
  }

  return (
    <ul className="table" ref={ref}>
      {table.map((column) => {
        return (
          <div className="table__column" key={column}>
            {getColumnCells({ column, sortHandler })}
          </div>
        )
      })}
      {loading && <LoadingIcon />}
    </ul>
  )
}
