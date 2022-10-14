import { createSlice } from '@reduxjs/toolkit'
import * as purchaseApi from './api'
import { sortPurchases } from './utils'

export const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: {
    purchases: [],
    filteredPurchases: [],
    columns: {},
    table: [],
    loading: true,
    order: 1,
    sortField: undefined,
  },
  reducers: {
    normalize: (state) => {
      state.table = Object.keys(state.columns).map((column) => [column])
      state.filteredPurchases.forEach((user) => {
        Object.entries(user).forEach((item, idx) => {
          state.table[idx].push(item[1])
        })
      })
    },
    sort: (state, action) => {
      state.order *= -1
      state.sortField = state.columns[action.payload.sortField] || state.order
      state.filteredPurchases = sortPurchases({
        purchases: state.purchases,
        field: state.sortField,
        order: state.order,
      })
    },
    filter: (state, action) => {
      state.filteredPurchases = state.purchases.filter((user) => {
        const searchQuery = action.payload.toLowerCase()
        return (
          user['name'].toLowerCase().includes(searchQuery) ||
          user['gameName'].toLowerCase().includes(searchQuery)
        )
      })
    },
    setPurchases: (state, action) => {
      state.purchases = action.payload
      state.filteredPurchases = state.purchases
    },
    addPurchases: (state, action) => {
      state.purchases = [...state.purchases, ...action.payload]
      state.filteredPurchases = state.purchases
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
  const purchases = await purchaseApi.fetchPurchases()
  dispatch(purchasesActions.addPurchases(purchases))
  dispatch(purchasesActions.sort())
}

export const filterPurchases = (searchQuery) => (dispatch) => {
  dispatch(purchasesActions.filter(searchQuery))
  dispatch(purchasesActions.normalize())
}
