import AppLayout from '@layouts/AppLayout'
import HomePage from '@pages/HomePage'
import NotFound from '@pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from 'routes'

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path={ROUTES.home} element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  )
}
