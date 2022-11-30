import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Header } from './componets/Header/'
import './Layout.css'

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') navigate('purchases')
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
