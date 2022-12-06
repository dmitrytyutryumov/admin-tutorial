import { useState } from 'react'

import { Table } from '../../modules/Table'
import { Chart } from '../../modules/Charts'

import './Purchases.css'

const TAB_NAVIGATION = {
  table: <Table />,
  chart: <Chart />,
}

export function Purchases() {
  const [activeTab, setActiveTab] = useState('table')
  const switchTab = ({ target }) => setActiveTab(target.dataset.tabName)

  return (
    <section>
      <ul className="tab-items">
        {Object.keys(TAB_NAVIGATION).map((item) => (
          <li key={item}>
            <button
              className="tab-items__btn"
              onClick={switchTab}
              data-tab-name={item}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div>{TAB_NAVIGATION[activeTab]}</div>
    </section>
  )
}
