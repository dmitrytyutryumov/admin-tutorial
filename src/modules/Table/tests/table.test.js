import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Table from '../index'

test('loads and displays table', async () => {
  // ARRANGE
  render(<Table />)

  // ACT
  // ...

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})

test('test table normaliation', async () => {
  // Arrange
  // Act
  // Assert
})
