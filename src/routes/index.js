import { createBrowserRouter } from 'react-router-dom'

// pages
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Layout from '../pages/Layout/Layout'
import NotFound from '../pages/NotFound/NotFound'
import { PurchaseDetails } from '../pages/PurchaseDetails'

// children
import { Table } from '../modules/Table'
import { Chart } from '../modules/Charts'
import { Tabs } from '../modules/Tabs'

// loaders
import { loader as purchaseLoader } from '../modules/PurchaseForm'
import { loader as tableDataLoader } from '../modules/Table'

// services
import '../service'
import { store } from '../store'
import Auth from '../modules/Auth/Auth'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <Auth />,
      },
      {
        path: 'purchases',
        element: <Tabs />,
        children: [
          {
            path: 'table',
            element: <Table />,
            index: true,
          },
          {
            path: 'charts',
            element: <Chart />,
          },
        ],
        loader: tableDataLoader({
          dispatch: store.dispatch,
          state: store.getState(),
        }),
      },
      {
        path: 'purchases/:id',
        element: <PurchaseDetails />,
        loader: purchaseLoader,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
