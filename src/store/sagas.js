import { put, call, takeEvery, all } from 'redux-saga/effects'

export function* watchFetchProducts() {
  yield takeEvery('PRODUCTS_REQUESTED', fetchProducts)
}

function* fetchProducts() {
  const products = yield call(Api.fetch, '/products')
  console.log(products)
}

export function* fetchTableData() {
  dispatch(purchasesActions.startLoading())
  const [columns, purchases] = yield call(purchaseApi.fetchTableData)
  yield put(purchasesActions.setColumns(columns))
  yield put(purchasesActions.setPurchases(purchases))
  yield put(purchasesActions.finishLoading)
}

export function* addPurchases() {
  const purchases = yield call(purchaseApi.fetchPurchases)
  yield put(purchasesActions.addPurchases(purchases))
  yield put(purchasesActions.sort)
}

export function* filterPurchases(searchQuery) {
  yield put(purchasesActions.filter)
  yield put(call(purchasesActions.normalize, searchQuery))
}

export default function* rootSaga() {
  yield all([
    // filterPurchases(),
    // addPurchases(),
    // fetchTableData(),
    watchFetchProducts(),
  ])
}
