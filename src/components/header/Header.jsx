import React,{useState} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import CartIcon from './cart_icon/CartIcon'
import Search from './search/Search'
function Header(props) {
  const statechange = () => {
    alert('logout successfully!');
    props.change(true);
  }
  return ( 
    <div className='header'>
      <div className='header_elements'>
          <p className='header_title'>Electro<span className='header_span'> store </span></p>
        <Search className="header_search"/>
        <div className='header_icons'>
          <a href='#' title='Wishlist'><i class="fa-solid fa-heart"></i></a>
          <CartIcon/>
          <Link to='/myprofile' title='Myprofile'
            style={props.states ? ({ display: 'none' }) : ({ display: 'inline-block' })}
          >
            <i class="fa-solid fa-user"></i>
          </Link>
          <a href="#" title='history'> <i class="fa-solid fa-clock-rotate-left"></i></a>
        </div>

        {props.states ? (<div className='header_search_button primary'>
          <Link to='/signin'>Sign in</Link>
        </div>) : (<div className='header_search_button primary' onClick={statechange}>
          <Link to='/signin'>Logout</Link>
        </div>)}
      </div>
      <div className='search_bar_item'>
        <Search className="header_search mobile"/>
      </div> 
    </div>
    
    
  )
}

export default Header
