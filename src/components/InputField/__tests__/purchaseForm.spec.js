import { render } from '@testing-library/react'
import { useField } from 'formik'
import { useLoaderData } from 'react-router-dom'
import { PurchaseForm } from '../PurchaseForm'

describe('test purchase form', () => {
  beforeEach(() => {
    useField.mockImplementation(() => [
      { value: 1, onChange: jest.fn(), onBlue: jest.fn() },
      { error: null, touched: false },
      { setTouched: jest.fn() },
    ])
  })
  it('test purchase form', () => {
    // Arrange
    useLoaderData.mockImplementation(() => {
      return {
        data: {
          id: 1,
          string: 'field1',
          number: 1,
          boolean: true,
          array: [1, 2],
        },
      }
    })
    // Act
    const { asFragment } = render(<PurchaseForm />)
    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
