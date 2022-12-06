import { put, call, all, takeLatest } from 'redux-saga/effects'
import * as authAction from './actions'
import * as authAPI from '../../../api/Auth'

export function* registerSaga({ payload }) {
  try {
    yield put(authAction.request())
    const response = yield call(authAPI.register, payload)
    yield put(authAction.success({ userData: response.data, isLogin: true }))
    localStorage.setItem('isLogin', 1)
  } catch (error) {
    yield put(authAction.failure(error.message))
  }
}

export function* loginSaga({ payload }) {
  try {
    yield put(authAction.request())
    const response = yield call(authAPI.login, payload)
    yield put(authAction.success({ userData: response.data, isLogin: true }))
    localStorage.setItem('isLogin', 1)
  } catch (error) {
    yield put(authAction.failure(error.message))
    return error.message
  }
}

export function* logout() {
  localStorage.removeItem('isLogin')
  yield put(authAction.logoutAction())
}

export function* authRootSaga() {
  yield put(
    authAction.success({ isLogin: Boolean(localStorage.getItem('isLogin')) })
  )
  yield all([
    takeLatest(authAction.registerSagaAction, registerSaga),
    takeLatest(authAction.loginSagaAction, loginSaga),
    takeLatest(authAction.logoutSagaAction, logout),
  ])
}
