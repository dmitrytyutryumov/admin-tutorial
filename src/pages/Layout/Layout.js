import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { getIsUserLoginState } from '../../modules/Auth/store'
import { Header } from './componets/Header/'
import './Layout.css'

export default function Layout() {
  const isLogin = useSelector(getIsUserLoginState)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogin) {
      if (location.pathname === '/') navigate('purchases')
    } else {
      navigate('login')
    }
  }, [location.pathname])

  return (
    <>
      <Header />
      <main className="layout">
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
