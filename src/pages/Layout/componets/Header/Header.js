import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getIsUserLoginState } from '../../../../modules/Auth/store'
import { logoutAction } from '../../../../modules/Auth/store/actions'
import './Header.css'

function HeaderView({ logout, isLogin }) {
  return (
    <header className="header">
      <h1>
        <Link to="/">Users&apos; purchases</Link>
      </h1>
      <div>
        {!isLogin ? (
          <Link to="auth">Login</Link>
        ) : (
          <p onClick={logout}>Logout</p>
        )}
      </div>
    </header>
  )
}

const mapStatetoProps = (state) => ({
  isLogin: getIsUserLoginState(state),
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
})

export const Header = connect(mapStatetoProps, mapDispatchToProps)(HeaderView)
