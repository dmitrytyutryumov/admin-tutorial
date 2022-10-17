import React from 'react'
import { getColumnCells } from './components'
import './index.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ReactComponent as LoadingIcon } from '../../static/images/loading.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getPuschases, getTable } from '../../store/selectors'
import {
  fetchTableData,
  addPurchases,
  purchasesActions,
} from '../../store/reducers'

export function Table() {
  const dispatch = useDispatch()
  const table = useSelector(getTable)
  const { purchases, loading: isLoading } = useSelector(getPuschases)

  const updateUsers = () => {
    dispatch(addPurchases())
  }

  const sortHandler = (event) => {
    dispatch(purchasesActions.sort(event.target.dataset.target))
  }

  React.useEffect(() => {
    dispatch(fetchTableData())
  }, [])

  return (
    <InfiniteScroll
      dataLength={purchases.length} // This is important field to render the next data
      next={updateUsers}
      hasMore={true}
      loader={<LoadingIcon />}
    >
      {isLoading && <LoadingIcon />}
      <ul className="table">
        {table.map((column) => {
          return (
            <div className="table__column" key={column}>
              {getColumnCells({ column, sortHandler })}
            </div>
          )
        })}
      </ul>
    </InfiniteScroll>
  )
}
