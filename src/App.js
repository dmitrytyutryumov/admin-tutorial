import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Layout from './pages/Layout/Layout'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Layout />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
