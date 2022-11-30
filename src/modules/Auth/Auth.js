import { useState } from 'react'

import { RegisterForm, LoginForm } from './components'
import './Auth.css'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const switchTab = () => setIsLogin((prevState) => !prevState)

  return (
    <div className="auth-container">
      <h1 className="auth-container__title">Welcome!</h1>
      <div className="auth-container__tabs">
        <button
          className="auth-container__tab"
          onClick={switchTab}
          data-active={!isLogin}
        >
          Log In
        </button>
        <button
          className="auth-container__tab"
          onClick={switchTab}
          data-active={isLogin}
        >
          Register
        </button>
      </div>
      <div className="auth-container__wrapper">
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  )
}
