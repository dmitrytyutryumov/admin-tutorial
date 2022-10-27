import { render, cleanup, fireEvent } from '@testing-library/react'
import { useInfinityLoader } from '../hooks'

function TestComponent({ testRef = { current: null } }) {
  const [loading] = useInfinityLoader({
    ref: testRef,
    onLoadMore: () => {
      setTimeout(() => {}, 10)
    },
  })
  return (
    <div className="test-component" ref={testRef}>
      {loading ? 'loading' : 'done'}
    </div>
  )
}

describe('test infinity loader hook with null hook', () => {
  afterEach(cleanup)

  it('test hook', () => {
    // Act
    const { container } = render(<TestComponent />)
    // Assert
    expect(container.textContent).toBe('done')
  })

  it('test hook', () => {
    const ref = {
      current: { addEventListener: jest.fn() },
      clientHeight: 1,
      scrollTop: 1,
      scrollHeight: 0,
    }
    // Act
    const { container } = render(<TestComponent testRef={ref} />)
    fireEvent.scroll(container, {})
    // Assert
    expect(container.textContent).toBe('loading')
  })
})
