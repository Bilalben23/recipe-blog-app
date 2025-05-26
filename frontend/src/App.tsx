import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { APP_ROUTES } from '@constants/routes';
import AppLayout from '@layouts/AppLayout';
import CategoryPage from '@pages/CategoryPage';
import HomePage from '@pages/HomePage';
import ItemPage from '@pages/ItemPage';
import NotFound from '@pages/NotFound';
import SearchPage from '@pages/SearchPage';
import RecipesPage from '@pages/RecipesPage';
import ResourcesPage from '@pages/ResourcesPage';

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path={APP_ROUTES.home} element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/categories/:category' element={<CategoryPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/items/:id' element={<ItemPage />} />
          <Route path='/recipes' element={<RecipesPage />} />
          <Route path='/resources' element={<ResourcesPage />} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>


    </BrowserRouter>
  )
}
