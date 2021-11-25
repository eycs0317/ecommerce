import React from 'react';
import './checkoutProduct.css'
import CurrencyFormat from 'react-currency-format';

function CheckoutProduct ( { basket, setBasket }) {
  const deleteButton = (deleteItem) => {

    setBasket(prev => {
      const newList = prev.filter(item => item.title !== deleteItem)
      return (
        newList
      )
    })
  }
  return (
    <div className='checkout-product'>

      <img src={basket.image} alt='ad' className='checkout-product-image'></img>

      <div className='checkout-product-info'>
        <p>{basket.title}</p>
        <p><CurrencyFormat value={basket.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
        <div className="checkout-product-rating">
          {Array(basket.rating).fill().map((star, index) => <span key={index}>⭐️</span>)}
        </div>
        <button className='checkout-product-remove-btn' onClick={() => deleteButton(basket.title)}>Remove from basket</button>
      </div>

    </div>




  )
}

export default CheckoutProduct;