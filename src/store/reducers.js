import { createSlice } from '@reduxjs/toolkit'

export const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: {
    purchases: [],
    columns: {},
    loading: true,
    order: -1,
    sortField: 'rating',
    searchQuery: '',
    error: '',
  },
  reducers: {
    sort: (state, action) => {
      state.order *= -1
      state.sortField = action.payload || state.order
    },
    filter: (state, action) => {
      state.searchQuery = action.payload.toLowerCase()
    },
    addPurchases: (state, action) => {
      state.purchases = [...state.purchases, ...action.payload]
    },
    request: (state) => {
      state.loading = true
    },
    success: (state, action) => {
      state.columns = action.payload.columns || state.columns
      state.purchases = action.payload.purchases || state.purchases
      state.loading = false
    },
    failure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    setOrder: (state) => {
      state.order = action.payload
    },
    setSortField: (state, action) => {
      state.sortField = action.payload
    },
  },
})

export const purchasesActions = purchasesSlice.actions
export default purchasesSlice.reducer
