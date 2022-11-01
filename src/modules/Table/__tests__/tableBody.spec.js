import { render } from '@testing-library/react'
import { TableBody } from '../components/TableBody/TableBody'
import { getTableCell } from '../components/TableBody/utils'

describe('test table cell utils', () => {
  const fakeTable = (cells) => (
    <table>
      <tbody>
        <tr>{cells}</tr>
      </tbody>
    </table>
  )
  it('test getTableCell', () => {
    // Arrange
    const testPurchase = {
      country: 'TestCountry',
      rating: 1,
      bought: '$12',
      phone: '333',
    }
    const testColumns = [
      {
        id: 'country',
      },
      {
        id: 'rating',
      },
      {
        id: 'bought',
      },
      {
        id: 'phone',
      },
    ]
    // Act
    const cells = getTableCell({
      columns: testColumns,
      purchase: testPurchase,
    })
    const { asFragment } = render(fakeTable(cells))
    // Assert
    expect(cells.length).toBe(4)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('test table body', () => {
  it('test TableBody', () => {
    // Arrange
    const testPurchases = [
      {
        name: 'FakeName',
        phone: '333',
      },
      {
        name: 'FakeName2',
        phone: '222',
      },
    ]
    const testColumns = [
      {
        id: 'name',
      },
      {
        id: 'phone',
      },
    ]
    // Act
    const { asFragment } = render(
      <table>
        <TableBody purchases={testPurchases} columns={testColumns}></TableBody>
      </table>
    )
    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
