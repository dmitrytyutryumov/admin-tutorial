import { Outlet } from 'react-router-dom'
import { Button } from './componets/Button'

import './Purchases.css'

const TAB_NAVIGATION = [
  {
    to: 'table',
    name: 'Table',
  },
  {
    to: 'charts',
    name: 'Charts',
  },
]

export function Purchases() {
  return (
    <section>
      <ul className="tab-items">
        {TAB_NAVIGATION.map((item) => (
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
