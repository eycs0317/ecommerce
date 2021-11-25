import React, { useContext } from 'react';
import CheckoutProduct from './CheckoutProduct';
import CheckoutTotal from './CheckoutTotal'
import './checkout.css'
import StateContext from './StateProvider';

function Checkout() {

  const { basket, setBasket } = useContext (StateContext)

  return (
    <div className='checkout'>

      <div className='checkout-left'>
        <img className='checkout-left-ads' src='https://as2.ftcdn.net/v2/jpg/00/53/55/41/1000_F_53554142_g8Mf4vyCSSgzNyEt01wenCc2hgQUx2YT.jpg' alt='ad'></img>
        <h2 className='checkout-title'>Your Shopping Basket</h2>
        {basket.map((item, index) => {
          return <CheckoutProduct basket={item} setBasket={setBasket} key={index}/>
        })}
        {/* <CheckoutProduct /> */}
      </div>

      <div className='checkout-right'>
        <CheckoutTotal />
      </div>
    </div>
  )
}

export default Checkout;