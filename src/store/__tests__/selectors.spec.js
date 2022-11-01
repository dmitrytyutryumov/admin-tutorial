import * as selector from '../selectors'

describe('Table state selectors test suite', () => {
  it('test get purchases state', () => {
    // Arrange
    const state = {
      purchases: {
        purchases: [
          {
            name: 'purchases',
            language: 'en',
          },
          {
            name: 'purchases1',
            language: 'ge',
          },
        ],
        columns: [
          { verbose: 'Name', id: 'name' },
          { verbose: 'Language', id: 'language' },
        ],
        sortField: null,
        order: 1,
        searchQuery: '',
      },
    }
    // Act
    const { columns, purchases } = selector.getPurchasesState(state)
    // Assert
    expect(columns).toBe(state.purchases.columns)
    expect(purchases).toStrictEqual(state.purchases.purchases)
  })

  it('test get columns', () => {
    // Arrange
    const columns = [1, 2, 3]
    const state = { purchases: { columns: columns } }
    // Act
    const selectedColumns = selector.getColumns(state)
    // Assert
    expect(selectedColumns).toEqual(columns)
  })
})
