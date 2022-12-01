import { createSlice } from '@reduxjs/toolkit'
import * as purchasesActions from './actions'

export const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: {
    purchases: [],
    columns: [],
    loading: true,
    order: -1,
    sortField: 'rating',
    searchQuery: '',
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(purchasesActions.request, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(purchasesActions.success, (state, { payload }) => ({
        ...state,
        columns: payload.columns || state.columns,
        purchases: payload.purchases || state.purchases,
        loading: false,
      }))
      .addCase(purchasesActions.failure, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(purchasesActions.sortPurchases, (state, { payload }) => ({
        ...state,
        order: state.order * -1,
        sortField: payload || state.sortField,
      }))
      .addCase(purchasesActions.filterPurchases, (state, { payload }) => ({
        ...state,
        searchQuery: payload.toLowerCase(),
      }))
      .addCase(purchasesActions.addPurchases, (state, { payload }) => ({
        ...state,
        purchases: [...state.purchases, ...payload],
      }))
      .addCase(purchasesActions.moveColumn, (state, { payload }) => {
        const columns = [...state.columns]
        const dragItem = columns[payload.dragIndex]
        const hoverItem = columns[payload.hoverIndex]
        columns.splice(payload.dragIndex, 1, hoverItem)
        columns.splice(payload.hoverIndex, 1, dragItem)
        return {
          ...state,
          columns,
        }
      })
  },
})

export default purchasesSlice.reducer
