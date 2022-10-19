import { createAction } from '@reduxjs/toolkit'
import { put, call, all, takeEvery } from 'redux-saga/effects'
import { purchasesActions } from './reducers'
import * as purchaseApi from './api'

export const loadTableDataAction = createAction('load-table-data')
export const addPurchasesAction = createAction('add-purchases')

export function* fetchTableDataSaga() {
  try {
    yield put(purchasesActions.request())
    const [columns, purchases] = yield call(purchaseApi.fetchTableData)
    yield put(purchasesActions.success({ columns, purchases }))
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

export default function* rootSaga() {
  yield all([
    takeEvery(loadTableDataAction, fetchTableDataSaga),
    takeEvery(addPurchasesAction, addPurchases),
  ])
}
