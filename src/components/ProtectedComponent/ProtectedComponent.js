import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getIsUserLoginState } from '../../modules/Auth/store'

function ProtectedComponentView({ isLogin, children }) {
  return !isLogin ? <Navigate to="/auth" /> : <>{children}</>
}

const mapStatetoProps = (state) => ({
  isLogin: getIsUserLoginState(state),
})

export const ProtectedComponent = connect(mapStatetoProps)(
  ProtectedComponentView
)
