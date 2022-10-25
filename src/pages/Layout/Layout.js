import React from 'react'
import { Table } from '../../modules/Table'
import Header from './componets/Header'
import './Layout.css'

export default function Layout() {
  return (
    <>
      <Header />
      <main className="layout">
        <section>
          <Table />
        </section>
      </main>
      <footer></footer>
    </>
  )
}
