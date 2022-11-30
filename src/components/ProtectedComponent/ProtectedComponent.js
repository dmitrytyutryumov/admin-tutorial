import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getIsUserLoginState } from '../../modules/Auth/store'

function ProtectedComponent({ isLogin, children }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) navigate('/auth')
  }, [isLogin])

  return <>{children}</>
}

const mapStateProps = (state) => {
  const isLogin = getIsUserLoginState(state)
  return { isLogin }
}

export default connect(mapStateProps)(ProtectedComponent)
