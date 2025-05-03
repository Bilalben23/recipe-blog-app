import AppLayout from '@layouts/AppLayout'
import HomePage from '@pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}
