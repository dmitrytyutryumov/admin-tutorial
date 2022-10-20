import { put, call, all, takeEvery, select } from 'redux-saga/effects'
import * as purchaseApi from './api'
import { getColumns } from './selectors'
import * as purchasesActions from './actions'

export function* fetchTableDataSaga() {
  try {
    yield put(purchasesActions.request())
    const [columns, purchases] = yield call(purchaseApi.fetchTableData)
    let userColumns = localStorage.getItem('columns')
    if (userColumns !== null) {
      userColumns = JSON.parse(userColumns)
      const newColumns = userColumns.filter((column) =>
        columns.includes(column)
      )
      if (newColumns.length > 0) {
        userColumns.concat(newColumns)
      }
    }
    yield put(
      purchasesActions.success({ columns: userColumns || columns, purchases })
    )
  } catch (error) {
    yield put(purchasesActions.failure(error.message))
  }
}

export function* addPurchases() {
  try {
    yield put(purchasesActions.request())
    const purchases = yield call(purchaseApi.fetchPurchases)
    yield put(purchasesActions.addPurchases(purchases))
    yield put(purchasesActions.success())
  } catch (error) {
    yield put(purchasesActions.failure(error.message))
  }
}

export function* moveColumn({ payload }) {
  yield put(purchasesActions.moveColumn(payload))
  const columns = yield select(getColumns)
  localStorage.setItem('columns', JSON.stringify(columns))
}

export default function* rootSaga() {
  yield all([
    takeEvery(purchasesActions.loadTableDataSaga, fetchTableDataSaga),
    takeEvery(purchasesActions.addPurchasesSaga, addPurchases),
    takeEvery(purchasesActions.moveColumnSaga, moveColumn),
  ])
}
