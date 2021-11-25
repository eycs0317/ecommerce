import React, { useContext } from 'react'
import StoreIcon from '@material-ui/icons/Store';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import './header.css'
import { Link } from 'react-router-dom';
import StateContext from './StateProvider';


function Header() {
  let { basket, email, login } = useContext(StateContext);
  return (
    <div className='header'>

      <Link to='/'>
        <div className='header-icon'>
          <StoreIcon className='header-storeIcon' fontSize='large'/>
          <h2 className='header-store-name'>myShop</h2>
        </div>
      </Link>

      <div className="header-searchbar">
        <input type="text" className="header-searchInput" />
        <SearchIcon className='header-searchIcon'/>
      </div>

      <div className="header-nav">
        <Link to='/login'>
        <div className="header-navitem">
          <span className='header-nav-item1'>Hello</span>
          <span className='header-nav-item2'>{login ? email : 'Sign In'}</span>
          </div>
        </Link>


        <div className="header-navitem">
          <span className='header-nav-item1'>Your</span>
          <span className='header-nav-item2'>Shop</span>
        </div>

        <Link to='/checkout'>
          <div className="header-navitem-basket">
            <ShoppingBasketIcon className='header-navitem-basket1'/>
            <span className='header-navitem-basket2'>{basket.length}</span>
          </div>
        </Link>
      </div>


    </div>
  )
}

export default Header;