import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logoutSagaAction } from '../../../../modules/Auth/store/actions'

import './Header.css'

function HeaderView({ logout }) {
  return (
    <header className="header">
      <h1>
        <Link to="/">Users&apos; purchases</Link>
      </h1>
      <div>
        <button className="header__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  )
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutSagaAction()),
})

export const Header = connect(null, mapDispatchToProps)(HeaderView)
