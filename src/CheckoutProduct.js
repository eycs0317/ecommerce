import React from 'react';
import './checkoutProduct.css'
import CurrencyFormat from 'react-currency-format';

function CheckoutProduct () {
  return (
    <div className='checkout-product'>

      <img src='https://m.media-amazon.com/images/I/71AqC2pFstL._AC_SX425_.jpg' alt='ad' className='checkout-product-image'></img>

      <div className='checkout-product-info'>
        <p>LEGO Star Wars: The Mandalorian The Child 75318 Building Kit; Collectible Buildable Toy Model for Ages 10+, New 2020 (1,073 Pieces)</p>
        <p><CurrencyFormat value={65.99} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
        <div className="checkout-product-rating">
          {Array(5).fill().map((star, index) => <span key={index}>⭐️</span>)}
          </div>
        <button className='checkout-product-remove-btn'>Remove from basket</button>
      </div>

    </div>




  )
}

export default CheckoutProduct;