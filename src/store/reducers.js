import { createSlice } from '@reduxjs/toolkit'
import * as purchaseApi from './api'

export const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: {
    purchases: [],
    columns: {},
    loading: true,
    order: -1,
    sortField: 'rating',
    searchQuery: '',
  },
  reducers: {
    sort: (state, action) => {
      state.order *= -1
      state.sortField = state.columns[action.payload] || state.order
    },
    filter: (state, action) => {
      state.searchQuery = action.payload.toLowerCase()
    },
    setPurchases: (state, action) => {
      state.purchases = action.payload
    },
    addPurchases: (state, action) => {
      state.purchases = [...state.purchases, ...action.payload]
    },
    setColumns: (state, action) => {
      state.columns = action.payload
    },
    startLoading: (state) => {
      state.loading = true
    },
    finishLoading: (state) => {
      state.loading = false
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

export const fetchTableData = () => async (dispatch) => {
  dispatch(purchasesActions.startLoading())
  const [columns, purchases] = await purchaseApi.fetchTableData()
  dispatch(purchasesActions.setColumns(columns))
  dispatch(purchasesActions.setPurchases(purchases))
  dispatch(purchasesActions.finishLoading())
}

export const addPurchases = () => async (dispatch) => {
  dispatch(purchasesActions.startLoading())
  const purchases = await purchaseApi.fetchPurchases()
  dispatch(purchasesActions.addPurchases(purchases))
  dispatch(purchasesActions.finishLoading())
}

export const filterPurchases = (searchQuery) => (dispatch) => {
  dispatch(purchasesActions.filter(searchQuery))
}
