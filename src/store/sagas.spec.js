import test from 'tape'
import { call } from 'redux-saga/effects'

import { fetchTableData } from './sagas'

test('incrementAsync Saga test', (assert) => {
  const gen = fetchTableData()
  gen.next()
  assert.deepEqual(gen.next().value, call(fetchTableData, 1000))
  assert.end()
})
