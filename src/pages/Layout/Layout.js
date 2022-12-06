import { Outlet } from 'react-router-dom'
import { ProtectedComponent } from '../../components'
import { Header } from './componets/Header/'
import './Layout.css'

export default function Layout() {
  return (
    <ProtectedComponent>
      <Header />
      <main className="layout">
        <Outlet />
      </main>
      <footer></footer>
    </ProtectedComponent>
  )
}
