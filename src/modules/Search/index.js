import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { filterPurchases } from '../../store/reducers'
import './index.css'

export default function SearchForm({}) {
  const dispatch = useDispatch()
  const ref = useRef()

  const onChange = () => {
    dispatch(filterPurchases(ref.current.value))
  }

  return (
    <form className="search">
      <div className="search__section-filter">
        <label className="visuallyhidden">Filter:</label>
        <input
          id="search-input"
          className="text-input"
          aria-label="Search"
          type="text"
          ref={ref}
          onChange={onChange}
          placeholder="Search"
        />
      </div>
    </form>
  )
}
