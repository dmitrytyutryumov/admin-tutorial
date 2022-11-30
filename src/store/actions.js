import { createAction } from '@reduxjs/toolkit'

export const request = createAction('purchase-request')
export const success = createAction('purchase-success')
export const failure = createAction('purchase-failure')

export const sortPurchases = createAction('sort-purchases')
export const filterPurchases = createAction('filter-purchases')
export const addPurchases = createAction('add-purchases')
export const moveColumn = createAction('move-column')

export const loadTableDataSaga = createAction('load-table-data')
export const addPurchasesSaga = createAction('add-purchases-saga')
export const moveColumnSaga = createAction('move-column-saga')
