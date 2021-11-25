import React, { useContext } from 'react';
import './checkoutTotal.css'
import CurrencyFormat from 'react-currency-format';
import StateContext from './StateProvider';

function CheckoutTotal() {
  let { basket } = useContext(StateContext)
  // console.log('value', value.basket)
  let total = basket.reduce((amount, item) => {
    return item.price + amount
  }, 0)
  return (

    <div className='checkout-total'>
      <p className='checkout-total-title'>{`Subtotal (${basket.length} items):`}     <CurrencyFormat
          value={total}
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
