import React from 'react'
import './product.css'

function Product ({title, price, rating, image}) {
  return (
      <div className="product">
        <div className="product-info">
          <p className='product-title'>{title}</p>
          <p className='product-price'>{price}</p>
          <div className="product-rating">
          {Array(rating).fill().map((star, index) => <span key={index}>⭐️</span>)}
          </div>
        </div>

        <img className='product-image' alt='product' src={image} ></img>

        <button className='product-add-button'>Add to Basket</button>
      </div>
  )
}

export default Product;