import React from 'react'

export const useInfinityLoader = ({ ref, onLoadMore }) => {
  const [loading, setLoading] = React.useState(false)
  const controller = React.useMemo(() => new AbortController())

  const stopScrolling = React.useCallback(() => {
    controller.abort()
    console.log('abort', controller.signal.aborted)
  }, [controller.signal])

  const addScrollHandler = React.useCallback(() => {
    ref.current.addEventListener(
      'scroll',
      () => {
        if (
          ref.current.scrollTop + ref.current.clientHeight >=
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

    return () => stopScrolling()
  }, [ref.current])

  return [loading, stopScrolling]
}
