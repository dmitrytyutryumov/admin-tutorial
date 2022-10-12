import React from 'react'
import './index.css'

export default function SearchForm({}) {
  const [input, setInput] = React.useState('')
  const onSubmit = (event) => {
    event.preventDefault()
  }
  const onChange = (event) => setInput(event.target.value)

  return (
    <form onSubmit={onSubmit} className="search">
      <div className="search__section-filter">
        <label className="visuallyhidden">Filter:</label>
        <input
          id="search-input"
          className="text-input"
          aria-label="Search"
          type="text"
          value={input}
          onChange={onChange}
          placeholder="Search"
        />
      </div>
      <div>
        <button className="btn">Search</button>
      </div>
    </form>
  )
}
