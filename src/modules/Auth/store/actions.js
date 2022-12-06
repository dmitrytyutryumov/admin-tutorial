import { createAction } from '@reduxjs/toolkit'

export const registerSagaAction = createAction('register-action')
export const loginSagaAction = createAction('login-action')
export const logoutSagaAction = createAction('logout-action')

export const logoutAction = createAction('logout-saga-action')

export const request = createAction('auth-request')
export const success = createAction('auth-success')
export const failure = createAction('auth-failure')
