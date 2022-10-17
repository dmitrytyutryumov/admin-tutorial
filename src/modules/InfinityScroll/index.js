import React, { useRef } from 'react'

export function InfinityScroll({ children, onLoadMore, loader, hasItems }) {
  const ref = useRef()
  const [loading, setLoading] = React.useState(false)
  const controller = React.useMemo(() => new AbortController())

  console.log(children)

  if (!hasItems && !controller.signal.aborted) {
    controller.abort()
  }

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
    addScrollHandler()

    return () => {
      controller.abort()
    }
  })

  return (
    <>
      {children}
      {loading && loader}
    </>
  )
}
