import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getIsUserLoginState } from '../../modules/Auth/store'

function ProtectedComponentView({ isLogin, children }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) navigate('/auth')
  }, [isLogin])

  return <>{children}</>
}

const mapStatetoProps = (state) => ({
  isLogin: getIsUserLoginState(state),
})

export const ProtectedComponent = connect(mapStatetoProps)(
  ProtectedComponentView
)
