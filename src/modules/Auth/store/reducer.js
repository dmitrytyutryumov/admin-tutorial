import { createSlice } from '@reduxjs/toolkit'
import * as authActions from './actions'

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
      .addCase(authActions.request, (state) => {
        state.loading = true
      })
      .addCase(
        authActions.success,
        (state, { payload: { isLogin, userData } }) => {
          state.isLogin = isLogin
          state.userData = userData
          state.loading = false
        }
      )
      .addCase(authActions.failure, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(authActions.logoutAction, (state) => {
        state.isLogin = false
        state.userData = {}
      })
  },
})

export default authSlice.reducer
