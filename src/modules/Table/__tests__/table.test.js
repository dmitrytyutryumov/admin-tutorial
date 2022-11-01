import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useDrag, useDrop } from 'react-dnd'
import { TableHead } from '../components/TableHead/TableHead'
import { TableHeadCell } from '../components/TableHead/components/TableHeadCell'

describe('test table head cell', () => {
  beforeEach(() => {
    useDrag.mockImplementation(() => [{}, () => {}])
    useDrop.mockImplementation(() => [{}, () => {}])
  })

  const fakeTable = (cell) => (
    <table>
      <thead>
        <tr>{cell}</tr>
      </thead>
    </table>
  )

  it('test table head cell', () => {
    // Arrange
    const cellContent = 'TestTableHeadContent'
    render(fakeTable(<TableHeadCell>{cellContent}</TableHeadCell>))
    // Assert
    expect(screen.getAllByText(cellContent))
  })
  it('test table head cell is not dragging', () => {
    // Arrange
    render(
      fakeTable(
        <TableHeadCell data-testid="test-th">
          TestTableHeadContent
        </TableHeadCell>
      )
    )
    // Act
    const testCell = screen.getByTestId('test-th')
    // Assert
    expect(testCell).toHaveStyle('opacity: 1')
  })
  it('test table head cell is dragging', () => {
    // Arrange
    useDrag.mockImplementation(() => [{ isDragging: true }, () => {}])

    render(
      fakeTable(
        <TableHeadCell data-testid="test-th">
          TestTableHeadContent
        </TableHeadCell>
      )
    )
    // Act
    const testCell = screen.getByTestId('test-th')
    // Assert
    expect(testCell).toHaveStyle('opacity: 0.5')
  })
})

describe('test table head', () => {
  beforeEach(() => {
    useDrag.mockImplementation(() => [{}, () => {}])
    useDrop.mockImplementation(() => [{}, () => {}])
  })

  it('test table head', () => {
    // Arrange
    render(
      <table>
        <TableHead
          data-testid="test-table-head"
          columns={[
            { verbose: 'column-1', id: 'column-1-Id' },
            { verbose: 'column-2', id: 'column-2-Id' },
          ]}
        ></TableHead>
      </table>
    )
    // Assert
    expect(screen.getByTestId('test-table-head'))
  })
})
