import { Outlet } from 'react-router-dom'
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
  return (
    <section>
      <ul className="tab-items">
        {TabNavigation.map((item) => (
          <li key={item.name}>
            <Button {...item} />
          </li>
        ))}
      </ul>
      <Outlet />
    </section>
  )
}
