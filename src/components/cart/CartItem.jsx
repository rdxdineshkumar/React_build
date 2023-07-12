import React, { useEffect, useState } from 'react'
import { useQuery} from '@apollo/client'
import CartSummary from './cartsummary/CartSummary'
import './CartItem.css'
import Counter from './Counter/Counter'
import Remove from './remove/Remove'
import { CART_ITEMS } from '../../graphql/queries/graphql.queries'
import CartEmpty from './cartempty/CartEmpty'
function CartItem() {
  const [cart, setCart] = useState([]);
  const [totalPrices, setTotalPrices] = useState(0)
  const [total, setTotal] = useState(0);
  const { data } = useQuery(CART_ITEMS);
  useEffect(() => {
    if (data) {
      setCart(data.CartItems);
    }
  }, [data])
  const calculateTotal = () => {
    let totalItems = 0;
    cart.map((item1) => {
      const noOfItems1 = parseInt(item1.noOfItems)
      totalItems = totalItems + noOfItems1;
    })
    return totalItems
  }
  const totalPrice = () => {
    let totalPrice = 0;
    cart.map((item) => {
      const price1 = parseInt(item.price * item.noOfItems);
      totalPrice = totalPrice + price1;
    })
    return totalPrice;
  }
  useEffect(() => {
    if (cart) {
      setTotal(calculateTotal());
      setTotalPrices(totalPrice());
    }
  }, [cart])
  return (
    <div className='cart_wrapper'>
      <div className='cart_container'>
        <div className='cart'>
          <div className='cart_header'>
            <h2>Shopping Cart</h2>
            <p>{total} items</p>
          </div>
          <div className='cart_items'>
            {
              total?(
              cart.map((item) => {
                const { id, title, image, price, noOfItems } = item;
                return (
                  <div className='cart_items_item' key={id}>
                    <img src={image}></img>
                    <p className='cart_items_item_title'>{title}</p>
                    <p>${price}</p>
                    <Counter count ={noOfItems} id={id}/>
                    <p>${noOfItems * price}</p>
                    <Remove id={id}/>
                  </div>
                )
              })
              ):(
                <CartEmpty/>
              )
            }
          </div>
        </div>
        <CartSummary totalPrices={totalPrices} total={total}/>
      </div>
      
    </div>
  )
}

export default CartItem
