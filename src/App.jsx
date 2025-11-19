import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App