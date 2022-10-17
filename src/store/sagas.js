import { createAction } from '@reduxjs/toolkit'
import { put, call } from 'redux-saga/effects'

export const loadTableDataAction = createAction('load-table-data')

export function* fetchTableDataSaga() {
  console.log('fetchTableDataSaga')
  yield put(purchasesActions.startLoading())
  const [columns, purchases] = yield call(purchaseApi.fetchTableData)
  console.log(columns, purchases)
  yield put(purchasesActions.setColumns(columns))
  yield put(purchasesActions.setPurchases(purchases))
  yield put(purchasesActions.finishLoading)
}

export default function* rootSaga() {
  console.log('rootSaga')
  yield [fetchTableDataSaga()]
}
