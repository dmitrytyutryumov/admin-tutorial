import React from 'react'

export default function ErrorPage({}) {
  const { statusText, message } = useRouteError()
  const error = statusText || message

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error}</i>
      </p>
    </div>
  )
}
