import { NavLink } from 'react-router-dom'

import './Button.css'

export function Button({ to, name }) {
  return (
    <NavLink to={to} className="tab-btn">
      {name}
    </NavLink>
  )
}
