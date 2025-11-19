import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const rating = Math.round(product.rating.rate)

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
        <div className="rating">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
      </Link>
    </div>
  )
}

export default ProductCard