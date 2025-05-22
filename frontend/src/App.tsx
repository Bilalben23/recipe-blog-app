import { APP_ROUTES } from '@constants/routes'
import AppLayout from '@layouts/AppLayout'
import CategoryPage from '@pages/CategoryPage'
import HomePage from '@pages/HomePage'
import NotFound from '@pages/NotFound'
import SearchPage from '@pages/SearchPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path={APP_ROUTES.home} element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/categories/:category' element={<CategoryPage />} />
          <Route path='/search' element={<SearchPage />} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>


    </BrowserRouter>
  )
}
