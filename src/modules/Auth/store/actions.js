import { createAction } from '@reduxjs/toolkit'

export const registerAction = createAction('register-action')
export const loginAction = createAction('login-action')

export const request = createAction('request')
export const success = createAction('success')
export const failure = createAction('failure')
