import { createBrowserRouter } from 'react-router-dom'

// pages
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Layout from '../pages/Layout/Layout'
import NotFound from '../pages/NotFound/NotFound'
import { PurchaseDetails } from '../pages/PurchaseDetails'
import { Purchases } from '../pages/Purchases'
import { AuthPage } from '../pages/Auth'

// loaders
import { loader as purchaseLoader } from '../modules/PurchaseForm'
import { loader as tableDataLoader } from '../modules/Table'

// services
import '../service'
import { store } from '../store'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '',
        element: <Purchases />,
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
    path: 'auth',
    element: <AuthPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
