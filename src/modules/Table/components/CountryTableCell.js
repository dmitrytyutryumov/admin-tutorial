import React from 'react'

export default function CountryTableCell({ countryName, icon }) {
  return (
    <div className="table__cell">
      <img src={icon} alt={`${countryName} icon`} />
      <div>{countryName}</div>
    </div>
  )
}
