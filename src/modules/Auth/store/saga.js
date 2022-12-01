import { put, call, all, takeLatest } from 'redux-saga/effects'
import * as authAction from './actions'
import * as authAPI from '../../../api/Auth'

export function* registerSaga({ payload }) {
  try {
    yield put(authAction.request())
    const response = yield call(authAPI.register, payload)
    yield put(authAction.success({ userData: response.data, isLogin: true }))
  } catch (error) {
    yield put(authAction.failure(error.message))
  }
}

export function* loginSaga({ payload }) {
  try {
    yield put(authAction.request())
    const response = yield call(authAPI.login, payload)
    yield put(authAction.success({ userData: response.data, isLogin: true }))
    return isLogin
  } catch (error) {
    yield put(authAction.failure(error.message))
    return error.message
  }
}

export function* authRootSaga() {
  yield all([
    takeLatest(authAction.loginAction, loginSaga),
    takeLatest(authAction.registerAction, registerSaga),
  ])
}
