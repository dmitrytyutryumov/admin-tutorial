import { createSlice } from '@reduxjs/toolkit'
import * as purchasesActions from './actions'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    userData: {},

    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(purchasesActions.request, (state) => {
        state.loading = true
      })
      .addCase(purchasesActions.success, (state, action) => {
        state.user = action.payload
        state.loading = false
      })
      .addCase(purchasesActions.failure, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export default authSlice.reducer
