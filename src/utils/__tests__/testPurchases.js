import * as utils from '../Purchases'

describe('test purchases utils', () => {
  it('test sortPurchases', () => {
    // Arrange
    const props = {
      purchases: [
        { name: 'a-purchase' },
        { name: 'b-purchase' },
        { name: 'd-purchase' },
      ],
      field: 'name',
    }
    // Act
    const sortedPurchasesAsc = utils.sortPurchases({ ...props, order: 1 })
    const sortedPurchasesDesc = utils.sortPurchases({ ...props, order: -1 })
    // Assert
    expect(sortedPurchasesAsc).toStrictEqual(props.purchases)
    expect(sortedPurchasesDesc).toStrictEqual([
      { name: 'd-purchase' },
      { name: 'b-purchase' },
      { name: 'a-purchase' },
    ])
  })
  it('test sortPurchases without sort field', () => {
    // Arrange
    const props = {
      purchases: [
        { name: 'a-purchase' },
        { name: 'b-purchase' },
        { name: 'd-purchase' },
      ],
      field: null,
      order: -1,
    }
    // Act
    const purchases = utils.sortPurchases(props)
    // Assert
    expect(purchases).toStrictEqual(props.purchases)
  })
  it('test filterPurchases', () => {
    // Arrange
    const props = {
      purchases: [{ name: 'name' }, { name: 'second-name' }, { name: 'mane' }],
      searchQuery: 'name',
      fields: ['name'],
    }
    // Act
    const purchases = utils.filterPurchases(props)
    // Assert
    expect(purchases).toStrictEqual([{ name: 'name' }, { name: 'second-name' }])
  })
  it('test parseCurrencyField success', () => {
    // Act
    const value = utils.parseCurrencyField('$123.12')
    // Assert
    expect(value).toBe(123.12)
  })
  it('test parseCurrencyField failure', () => {
    // Assert
    expect(utils.parseCurrencyField('hello')).toBe(NaN)
  })
})
