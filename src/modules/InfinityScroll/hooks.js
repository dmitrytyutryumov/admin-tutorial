import React from 'react'

const SCROLL_THRESHOLD = 1
const controller = new AbortController()

export const useInfinityLoader = ({ ref, onLoadMore }) => {
  const [loading, setLoading] = React.useState(false)

  const stopScrolling = () => controller.abort()

  const addScrollHandler = React.useCallback(() => {
    ref.current.addEventListener(
      'scroll',
      () => {
        if (
          ref.current.clientHeight + ref.current.scrollTop + SCROLL_THRESHOLD >=
          ref.current.scrollHeight
        ) {
          setLoading(true)
          onLoadMore()
          setLoading(false)
        }
      },
      { signal: controller.signal }
    )
  }, [controller.signal])

  React.useEffect(() => {
    if (ref.current) {
      addScrollHandler()
    }
  }, [ref.current])

  return [loading, stopScrolling]
}
