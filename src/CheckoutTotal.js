import React, { useContext } from 'react';
import './checkoutTotal.css'
import CurrencyFormat from 'react-currency-format';
import StateContext from './StateProvider';

function CheckoutTotal() {
  let value = useContext(StateContext)
  console.log('value', value)
  return (

    <div className='checkout-total'>
      <p className='checkout-total-title'>Subtotal (2 items):     <CurrencyFormat
          value={45.99}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'} /></p>
      <div className='checkout-total-gift'>
        <input type="checkbox" className="" />
        <span className='checkout-total-gift-text'>This order contains gift</span>
      </div>

      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  )

}

export default CheckoutTotal;
