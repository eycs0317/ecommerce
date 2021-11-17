import React from 'react'
import StoreIcon from '@material-ui/icons/Store';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import './header.css'
import { Link } from 'react-router-dom';


function Header() {
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
        <div className="header-navitem">
          <span className='header-nav-item1'>Hello Guest</span>
          <span className='header-nav-item2'>Sign In</span>
        </div>
        <div className="header-navitem">
          <span className='header-nav-item1'>Your</span>
          <span className='header-nav-item2'>Shop</span>
        </div>

        <Link to='/checkout'>
          <div className="header-navitem-basket">
            <ShoppingBasketIcon className='header-navitem-basket1'/>
            <span className='header-navitem-basket2'>5</span>
          </div>
        </Link>
      </div>


    </div>
  )
}

export default Header;