import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>Страница не найдена</h1>
      <Link to="/products">Перейти к списку товаров</Link>
    </div>
  )
}

export default NotFoundPage