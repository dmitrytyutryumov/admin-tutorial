import { render, screen } from '@testing-library/react'
import { useField } from 'formik'
import { InputField } from '../InputField'
describe('test input field', () => {
  it('test input field', () => {
    // Arrange
    useField.mockImplementation(() => [
      { value: 1, onChange: jest.fn(), onBlue: jest.fn() },
      { error: null, touched: false },
      { setTouched: jest.fn() },
    ])
    // Act
    render(<InputField data-testid={'test-input'} name="testInput" />)
    const input = screen.getByTestId('test-input')
    // Assert
    expect(input.value).toEqual('1')
    expect(input.type).toEqual('number')
  })
  it('test input field has error', () => {
    // Arrange
    useField.mockImplementation(() => [
      { value: true, onChange: jest.fn(), onBlue: jest.fn() },
      { error: true, touched: true },
      { setTouched: jest.fn() },
    ])
    // Act
    render(<InputField data-testid={'test-input'} name="testInput" />)
    const input = screen.getByTestId('test-input')
    const label = screen.getByText('testInput')
    // Assert
    expect(input.checked).toEqual(true)
    expect(input.classList.contains('input-invalid')).toBe(true)
    expect(label.classList.contains('label-invalid')).toBe(true)
  })
})
