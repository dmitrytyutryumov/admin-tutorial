import reducer from '../reducers'
import * as purchasesActions from '../actions'

describe('test table saga', () => {
  it('test request', () => {
    // Act
    const state = reducer({}, purchasesActions.request())
    // Assert
    expect(state).toEqual({ loading: true })
  })
  it('test success', () => {
    // Arrange
    const successState = {
      columns: [{ id: 'name', verbose: 'Name' }],
      purchases: [{ name: 'purchase' }],
    }
    // Act
    const state = reducer({}, purchasesActions.success(successState))
    // Assert
    expect(state).toEqual({ ...successState, loading: false })
  })
  it('test failure', () => {
    // Act
    const failMessage = 'test'
    // Arrange
    const state = reducer({}, purchasesActions.failure(failMessage))
    // Assert
    expect(state).toEqual({ loading: false, error: failMessage })
  })
  it('test sortPurchases', () => {
    // Arrange
    const sortField = 'test'
    // Act
    const state = reducer(
      { order: 1 },
      purchasesActions.sortPurchases(sortField)
    )
    // Assert
    expect(state).toEqual({ order: -1, sortField: sortField })
  })
  it('test filterPurchases', () => {
    // Act
    const searchQuery = 'test'
    // Arrange
    const state = reducer({}, purchasesActions.filterPurchases(searchQuery))
    // Assert
    expect(state).toEqual({ searchQuery })
  })
  it('test addPurchases', () => {
    // Arrange
    const newPurchases = [{ name: 'New' }]
    // Act
    const state = reducer(
      { purchases: [] },
      purchasesActions.addPurchases(newPurchases)
    )
    // Assert
    expect(state).toEqual({ purchases: [...newPurchases] })
  })
  it('test moveColumn', () => {
    // Arrange
    const payload = { dragIndex: 0, hoverIndex: 1 }
    // Act
    const state = reducer(
      { columns: [{ name: 'Name' }, { test: 'Test' }] },
      purchasesActions.moveColumn(payload)
    )
    // Assert
    expect(state.columns).toEqual([{ test: 'Test' }, { name: 'Name' }])
  })
})
