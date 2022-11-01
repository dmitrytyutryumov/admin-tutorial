import { useRef } from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { useInfinityLoader } from '../useInfinityLoader'

function TestComponent() {
  const ref = useRef()
  const [loading] = useInfinityLoader({
    ref,
    onLoadMore: () => {
      setTimeout(() => {}, 10)
    },
  })
  return (
    <div className="test-component" ref={ref}>
      {loading ? 'loading' : 'done'}
    </div>
  )
}

jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useRef: jest.fn(),
  }
})

describe('test infinity loader hook with null hook', () => {
  it('test hook finished', () => {
    // Arrange
    useRef.mockImplementation(() => ({
      current: {},
    }))
    // Act
    const { container } = render(<TestComponent />)
    // Assert
    expect(container.textContent).toBe('done')
  })

  it('test hook loading', () => {
    const ref = {
      current: {
        clientHeight: 1,
        scrollTop: 1,
        scrollHeight: 100,
      },
    }
    useRef.mockImplementation(() => ref)
    render(<TestComponent />)
    // Act
    fireEvent.scroll(ref.current, { target: {} })
    // Assert
    expect(screen.findByText('loading'))
  })
})
