import React from 'react'
import { getColumnCells } from './components'
import './index.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ReactComponent as LoadingIcon } from '../../static/images/loading.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getPuschases } from '../../store/selectors'
import {
  fetchTableData,
  addPurchases,
  purchasesActions,
} from '../../store/reducers'

export function Table() {
  const dispatch = useDispatch()
  const { table, purchases, loading: isLoading } = useSelector(getPuschases)

  const updateUsers = () => {
    dispatch(addPurchases())
    dispatch(purchasesActions.normalize())
  }

  const onClick = (event) => {
    dispatch(purchasesActions.sort({ sortField: event.target.dataset.target }))
    dispatch(purchasesActions.normalize())
  }

  React.useEffect(() => {
    dispatch(fetchTableData())
  }, [])

  React.useEffect(() => {
    dispatch(purchasesActions.normalize())
  }, [purchases.length])

  return (
    <InfiniteScroll
      dataLength={0} // This is important field to render the next data
      next={updateUsers}
      hasMore={true}
      loader={<LoadingIcon />}
    >
      {isLoading && <LoadingIcon />}
      <ul className="table">
        {table.map((column) => {
          return (
            <div className="table__column" key={column}>
              {getColumnCells(column, onClick)}
            </div>
          )
        })}
      </ul>
    </InfiniteScroll>
  )
}
