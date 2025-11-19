import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const url = 'https://fakestoreapi.com/products'

function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`${url}/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(console.error)
  }, [id])

  if (!product) return <p>Загрузка...</p>

  const rating = Math.round(product.rating.rate)

  return (
    <div className="product-detail-page">
      <img src={product.image} alt={product.title} width="200" />
      <h2>{product.title}</h2>
      <p>Цена: {product.price} $</p>
      <p>Описание: {product.description}</p>
      <div className="rating">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}

export default ProductDetailPage