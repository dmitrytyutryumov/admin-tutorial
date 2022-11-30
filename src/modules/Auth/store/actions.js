import { createAction } from '@reduxjs/toolkit'

export const registerAction = createAction('register-action')
export const loginAction = createAction('login-action')
export const logoutAction = createAction('logout-action')

export const request = createAction('auth-request')
export const success = createAction('auth-success')
export const failure = createAction('auth-failure')
