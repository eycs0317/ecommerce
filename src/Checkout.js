import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import CheckoutTotal from './CheckoutTotal'
import './checkout.css'

function Checkout() {
  return (
    <div className='checkout'>

      <div className='checkout-left'>
        <img className='checkout-left-ads' src='https://as2.ftcdn.net/v2/jpg/00/53/55/41/1000_F_53554142_g8Mf4vyCSSgzNyEt01wenCc2hgQUx2YT.jpg' alt='ad'></img>
        <h2 className='checkout-title'>Your Shopping Basket</h2>
        <CheckoutProduct />
        <CheckoutProduct />
      </div>

      <div className='checkout-right'>
        <CheckoutTotal />
      </div>
    </div>
  )
}

export default Checkout;