import { NavLink } from 'react-router-dom'

import './Button.css'

export function Button({ to, name }) {
  const getClassName = ({ isActive }) =>
    isActive ? ' tab-btn tab-btn--active' : 'tab-btn'

  return (
    <NavLink to={to} className={getClassName}>
      {name}
    </NavLink>
  )
}
