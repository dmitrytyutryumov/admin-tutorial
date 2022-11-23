import { createBrowserRouter } from 'react-router-dom'
import { loader as purchaseLoader } from '../modules/PurchaseForm'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Layout from '../pages/Layout/Layout'
import NotFound from '../pages/NotFound/NotFound'
import { PurchaseDetails } from '../pages/PurchaseDetails'
import '../service'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'purchases/:id',
    element: <PurchaseDetails />,
    loader: purchaseLoader,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
