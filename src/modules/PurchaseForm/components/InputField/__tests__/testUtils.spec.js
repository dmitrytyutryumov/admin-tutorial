import { getFieldValue, getInputType } from '../utils'

describe('test utils', () => {
  it('test getInputType', () => {
    // Arrange
    const values = [
      ['string', 'text'],
      [[], 'object'],
      [{}, 'object'],
      [1, 'number'],
      [1.2, 'number'],
      [true, 'checkbox'],
      [false, 'checkbox'],
    ]
    // Assert
    values.forEach(([value, expectedValue]) =>
      expect(getInputType(value)).toEqual(expectedValue)
    )
  })

  it('test getFieldValue', () => {
    // Arrange
    const values = [
      [123, [123, false]],
      ['string', ['string', false]],
      ['$123', [123, true]],
      [
        [0, 'hey'],
        ['hey', false],
      ],
    ]
    // Assert
    values.forEach(([value, expectedValue]) =>
      expect(getFieldValue(value)).toEqual(expectedValue)
    )
  })
})
