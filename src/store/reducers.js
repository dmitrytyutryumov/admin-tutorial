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
      .addCase(purchasesActions.request, (state) => {
        state.loading = true
      })
      .addCase(purchasesActions.success, (state, action) => {
        state.columns = action.payload.columns || state.columns
        state.purchases = action.payload.purchases || state.purchases
        state.loading = false
      })
      .addCase(purchasesActions.failure, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(purchasesActions.sortPurchases, (state, action) => {
        state.order *= -1
        state.sortField = action.payload || state.order
      })
      .addCase(purchasesActions.filterPurchases, (state, action) => {
        state.searchQuery = action.payload.toLowerCase()
      })
      .addCase(purchasesActions.addPurchases, (state, action) => {
        state.purchases = [...state.purchases, ...action.payload]
      })
      .addCase(purchasesActions.moveColumn, (state, { payload }) => {
        const dragItem = state.columns[payload.dragIndex]
        const hoverItem = state.columns[payload.hoverIndex]
        state.columns.splice(payload.dragIndex, 1, hoverItem)
        state.columns.splice(payload.hoverIndex, 1, dragItem)
      })
  },
})

export default purchasesSlice.reducer
