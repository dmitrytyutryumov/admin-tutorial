import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Button } from './componets/Button'
import './Tabs.css'

const TabNavigation = [
  {
    to: 'table',
    name: 'Table',
  },
  {
    to: 'charts',
    name: 'Charts',
  },
]

export function Tabs() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/purchases') {
      navigate('table')
    }
  }, [location.pathname])

  return (
    <section>
      <ul className="tab-items">
        {TabNavigation.map((item) => (
          <li key={item.name}>
            <Button {...item} />
          </li>
        ))}
      </ul>
      <div>
        <Outlet />
      </div>
    </section>
  )
}
