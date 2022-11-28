import { put, call, all, takeLatest } from 'redux-saga/effects'
import * as authAction from './actions'

export function* registerSaga(userData) {
  try {
    yield put(authAction.request())
    const user = yield call(authAPI.register, userData)

    yield put(authAction.success({ userData: user, isLogin: true }))
  } catch (error) {
    yield put(authAction.failure(error.message))
  }
}

export function* loginSaga(authData) {
  try {
    yield put(authAction.request())
    const user = yield call(authAPI.login, authData)
    yield put(authAction.success({ userData: user, isLogin: true }))
  } catch (error) {
    yield put(authAction.failure(error.message))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(authAction.loginAction, loginSaga),
    takeLatest(authAction.registerAction, registerSaga),
  ])
}
