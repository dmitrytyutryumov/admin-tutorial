import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Header } from './componets/Header/'
import { Tabs } from './componets/Tabs'
import './Layout.css'

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('table')
    }
  }, [location.pathname])

  return (
    <>
      <Header />
      <main className="layout">
        <Tabs />
      </main>
      <footer></footer>
    </>
  )
}
