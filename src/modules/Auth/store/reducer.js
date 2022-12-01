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
      .addCase(authActions.request, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(
        authActions.success,
        (state, { payload: { isLogin, userData } }) => ({
          ...state,
          isLogin: isLogin,
          userData: userData,
          loading: false,
        })
      )
      .addCase(authActions.failure, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(authActions.logoutAction, (state) => ({
        ...state,
        isLogin: false,
        userData: {},
      }))
  },
})

export const authReducer = authSlice.reducer
