import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard.jsx'

const url = 'https://fakestoreapi.com/products'

function ProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(console.error)
  }, [])

  return (
    <div className="products-page">
      <h1>Все товары</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsPage