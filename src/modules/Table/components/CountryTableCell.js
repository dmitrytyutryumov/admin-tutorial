import React from 'react'

export default function CountryTableCell({ value }) {
  const [icon, countryName] = value

  return (
    <div className="table__cell table__country-cell">
      <figure>
        <img src={icon} alt={`${countryName} icon`} />
      </figure>
      <div>{countryName}</div>
    </div>
  )
}
