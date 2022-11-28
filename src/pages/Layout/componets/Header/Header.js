import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getIsUserLoginState } from '../../../../modules/Auth/store'
import './Header.css'

export function Header() {
  const isLogin = useSelector(getIsUserLoginState)

  return (
    <header className="header">
      <h1>
        <Link to="/">Users&apos; purchases</Link>
      </h1>
      <div>
        <Link to="login">{isLogin ? 'Logout' : 'Login'}</Link>
      </div>
    </header>
  )
}
