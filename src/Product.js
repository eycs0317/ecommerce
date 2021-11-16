import React from 'react'
import './product.css'

function Product ({title, price, rating, image}) {
  return (
    <div>
      <div className="product">

        <div className="product-info">
          <p className='product-title'>{title}</p>
          <p className='product-price'>{price}</p>
          <div className="product-rating">⭐️⭐️⭐️{rating}</div>
        </div>

        <img className='product-image' alt='product' src={image} ></img>

        <button>Add to Basket</button>
      </div>
    </div>
  )
}

export default Product;