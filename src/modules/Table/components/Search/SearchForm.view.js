import { forwardRef } from 'react'
import './index.css'

export const SearchFormView = forwardRef(({ onChange }, ref) => (
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
))

SearchFormView.displayName = 'SearchFormView'
