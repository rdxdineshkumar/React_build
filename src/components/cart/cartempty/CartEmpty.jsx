import React from 'react'
import { Link } from 'react-router-dom'
import cart_empty from '../../../Images/cart-empty1.png'
function CartEmpty() {
    return (
        <div>
            <div className='cart_empty'>
                <img src={cart_empty} alt="empty" />
                <h3>Your cart Empty!</h3>
                <Link to="/shop" className='shop_button'>Shop Now</Link>
            </div>
        </div>
    )
}

export default CartEmpty
