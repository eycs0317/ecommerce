import React, { useContext } from 'react'
import './product.css'
import StateContext from './StateProvider';

function Product ({title, price, rating, image}) {
  const { setBasket } = useContext(StateContext);

  const addButton = () => {
    let addItem = {
      title: title,
      price: price,
      rating: rating,
      image: image
    }
    setBasket(prev => [...prev, addItem])

  }
  return (
      <div className="product">
        <div className="product-info">
          <p className='product-title'>{title}</p>
          <p className='product-price'>${price}</p>
          <div className="product-rating">
          {Array(rating).fill().map((star, index) => <span key={index}>⭐️</span>)}
          </div>
        </div>

        <img className='product-image' alt='product' src={image} ></img>

        <button className='product-add-button' onClick={addButton}>Add to Basket</button>
      </div>
  )
}

export default Product;