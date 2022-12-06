import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Auth from '../../modules/Auth/Auth'
import { getIsUserLoginState } from '../../modules/Auth/store'

import './Auth.css'

export function AuthPageView({ isLogin }) {
  return isLogin ? (
    <Navigate to="/" replace={true} />
  ) : (
    <main className="auth-page">
      <Auth />
    </main>
  )
}

const mapStatetoProps = (state) => ({
  isLogin: getIsUserLoginState(state),
})

export const AuthPage = connect(mapStatetoProps)(AuthPageView)
